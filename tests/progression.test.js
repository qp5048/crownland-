import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultState } from '../src/save/save.js';
import { applyRP, computeRP, LEGEND, RANKS, rankBotCount, rankLevel } from '../src/ranked/ranks.js';
import {
  addPassXP, canClaim, claim, claimableCount, ensureSeason, passLevel, PASS_LEVELS, PREMIUM_TRACK,
  registerPremiumAdView, seasonInfo, XP_PER_LEVEL,
} from '../src/battlepass/pass.js';
import { claimQuest, ensureQuests, generateQuests, trackMatch } from '../src/battlepass/quests.js';
import { claimDaily, dailyStatus } from '../src/battlepass/daily.js';
import { AdManager } from '../src/ads/ads.js';
import { createMockSDK } from '../src/ads/sdk.js';

test('17 ranks from Bronze I to Legend', () => {
  assert.equal(RANKS.length, 17);
  assert.equal(RANKS[0].key, 'bronze');
  assert.equal(RANKS[LEGEND].key, 'legend');
});

test('difficulty grows smoothly with rank (no big jumps)', () => {
  let prev = rankLevel(0);
  for (let t = 1; t <= LEGEND; t++) {
    const l = rankLevel(t);
    assert.ok(l > prev, 'monotonic');
    assert.ok(l - prev < 0.12, `step ${t}: ${(l - prev).toFixed(3)}`);
    prev = l;
  }
  assert.equal(rankBotCount(0), 10);
  assert.equal(rankBotCount(LEGEND), 15);
});

test('rank points: good results promote, early deaths cost points', () => {
  assert.ok(computeRP({ place: 1, players: 12, share: 0.2, seconds: 300, tier: 0 }) > 40);
  assert.ok(computeRP({ place: 10, players: 12, share: 0.01, seconds: 20, tier: 8 }) < 0);
});

test('promotion carries over, demotion drops to 75%, Bronze I floors at 0', () => {
  const r = { tier: 0, rp: 90, best: 0 };
  const up = applyRP(r, 30);
  assert.equal(up.promoted, true);
  assert.equal(r.tier, 1);
  assert.equal(r.rp, 20);
  const down = applyRP(r, -40);
  assert.equal(down.demoted, true);
  assert.equal(r.tier, 0);
  assert.equal(r.rp, 55);
  applyRP(r, -500);
  assert.equal(r.tier, 0);
  assert.equal(r.rp, 0);
  const top = { tier: LEGEND - 1, rp: 240, best: 0 };
  applyRP(top, 5000);
  assert.equal(top.tier, LEGEND);
  assert.equal(top.rp, 4990);
  assert.equal(top.best, LEGEND);
});

test('battle pass: levels, claiming, premium gating', () => {
  const s = defaultState();
  ensureSeason(s);
  assert.equal(passLevel(0).level, 0);
  addPassXP(s, XP_PER_LEVEL * 2 + 10);
  assert.equal(passLevel(s.pass.xp).level, 2);
  assert.equal(canClaim(s, 'free', 3), false);
  const r = claim(s, 'free', 1);
  assert.equal(r.type, 'coins');
  assert.equal(s.coins, r.amount);
  assert.equal(claim(s, 'free', 1), null, 'no double claim');
  assert.equal(claim(s, 'premium', 1), null, 'premium locked');
  assert.equal(claimableCount(s), 1);
  addPassXP(s, 1e9);
  assert.equal(passLevel(s.pass.xp).level, PASS_LEVELS);
  assert.equal(PREMIUM_TRACK[PASS_LEVELS - 1].id, 'dragon', 'final reward is the mythic skin');
});

test('premium needs 7 successful ad views, progress persists between sessions', () => {
  const s = defaultState();
  ensureSeason(s);
  for (let k = 0; k < 3; k++) registerPremiumAdView(s);
  assert.equal(s.pass.adViews, 3);
  assert.equal(s.pass.premium, false);
  const copy = JSON.parse(JSON.stringify(s)); // "next session"
  for (let k = 0; k < 4; k++) registerPremiumAdView(copy);
  assert.equal(copy.pass.premium, true);
  assert.equal(copy.pass.adViews, 7);
  registerPremiumAdView(copy);
  assert.equal(copy.pass.adViews, 7, 'capped');
});

test('season rollover resets the pass', () => {
  const s = defaultState();
  const now = Date.UTC(2026, 9, 3);
  ensureSeason(s, now);
  s.pass.xp = 999; s.pass.premium = true;
  const later = seasonInfo(now).endsAt + 1000;
  assert.equal(ensureSeason(s, later), true);
  assert.equal(s.pass.xp, 0);
  assert.equal(s.pass.premium, false);
});

test('quests: deterministic per day, track and claim', () => {
  assert.deepEqual(generateQuests('2026-10-03'), generateQuests('2026-10-03'));
  const s = defaultState();
  ensureQuests(s, '2026-10-03');
  assert.equal(s.quests.list.length, 3);
  for (let k = 0; k < 10; k++) trackMatch(s, { share: 0.35, kills: 3, seconds: 320, ranked: true, place: 1, captures: 10, coins: 200 });
  for (const q of s.quests.list) {
    assert.equal(q.progress, q.target);
    assert.ok(claimQuest(s, q.id));
    assert.equal(claimQuest(s, q.id), null);
  }
});

test('daily streak continues on consecutive days and resets after a gap', () => {
  const s = defaultState();
  const d1 = new Date(2026, 9, 1, 10), d2 = new Date(2026, 9, 2, 10), d4 = new Date(2026, 9, 4, 10);
  const a = claimDaily(s, {}, d1);
  assert.equal(a.streak, 1);
  assert.equal(claimDaily(s, {}, d1), null);
  assert.equal(claimDaily(s, {}, d2).streak, 2);
  assert.equal(dailyStatus(s, d4).streak, 1);
  const doubled = claimDaily(s, { double: true }, d4);
  assert.equal(doubled.coins, 100);
});

test('midgame ads: never before match 2, never more than once per 3 minutes', async () => {
  let clock = 0;
  const sdk = createMockSDK({ adDuration: 0 });
  const ads = new AdManager(sdk, { now: () => clock });
  assert.equal(ads.canMidgame(), false);
  ads.matchFinished();
  assert.equal(ads.canMidgame(), false, 'after 1 match');
  ads.matchFinished();
  assert.equal(ads.canMidgame(), true, 'after 2 matches');
  await ads.midgame();
  ads.matchFinished();
  clock += 60_000;
  assert.equal(ads.canMidgame(), false, '1 minute later');
  clock += 121_000;
  assert.equal(ads.canMidgame(), true, '3+ minutes later');
});

test('rewarded ads only reward on success', async () => {
  const fail = createMockSDK({ adDuration: 0, failRewarded: true });
  const ads = new AdManager(fail);
  assert.equal(await ads.rewarded('test'), false);
  const ok = createMockSDK({ adDuration: 0 });
  const ads2 = new AdManager(ok);
  assert.equal(await ads2.rewarded('test'), true);
});
