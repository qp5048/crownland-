import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultState, sanitize } from '../src/save/save.js';
import { CHEST_INTERVAL, chestStatus, doubleChest, openChest } from '../src/progress/chest.js';
import { ACHIEVEMENTS, claimAchievement, claimableAchievements, evaluateAchievements } from '../src/progress/achievements.js';
import { computeMatchCoins } from '../src/shop/economy.js';
import { AdManager } from '../src/ads/ads.js';
import { createMockSDK } from '../src/ads/sdk.js';

test('chest: opens once per interval, rewards are applied', () => {
  const s = defaultState();
  const now = 1_000_000;
  assert.equal(chestStatus(s, now).ready, true);
  const r = openChest(s, () => 0.9, now);
  assert.ok(r.coins >= 60 && r.coins <= 220);
  assert.equal(s.coins, r.coins);
  assert.equal(openChest(s, () => 0.9, now + 1000), null, 'not ready again');
  assert.equal(chestStatus(s, now + CHEST_INTERVAL).ready, true);
});

test('chest: boost and skin rolls; doubling repeats coins and boost only', () => {
  const s = defaultState();
  const b = openChest(s, () => 0.2, 0);
  assert.ok(b.boost);
  assert.equal(s.boosts[b.boost], 1);
  doubleChest(s, b);
  assert.equal(s.boosts[b.boost], 2);
  assert.equal(s.coins, b.coins * 2);
  const s2 = defaultState();
  const k = openChest(s2, () => 0.01, 0);
  assert.ok(k.skin);
  assert.ok(s2.owned.skin.includes(k.skin));
});

test('chest timer from the future is capped on load', () => {
  const s = sanitize({ ...defaultState(), chest: { nextAt: Date.now() + 1e12 } });
  assert.ok(s.chest.nextAt <= Date.now() + CHEST_INTERVAL + 1000);
});

test('achievements: detect, claim once, count claimable', () => {
  const s = defaultState();
  assert.deepEqual(evaluateAchievements(s), []);
  s.stats.kills = 30;
  s.stats.captures = 5;
  const fresh = evaluateAchievements(s).map((a) => a.id);
  assert.deepEqual(fresh.sort(), ['capture1', 'kill1', 'kills25'].sort());
  assert.deepEqual(evaluateAchievements(s), [], 'reported only once');
  assert.equal(claimableAchievements(s), 3);
  const a = claimAchievement(s, 'kills25');
  assert.equal(s.coins, a.reward);
  assert.equal(claimAchievement(s, 'kills25'), null, 'no double claim');
  assert.equal(claimAchievement(s, 'win'), null, 'not done yet');
  assert.equal(new Set(ACHIEVEMENTS.map((x) => x.id)).size, ACHIEVEMENTS.length);
});

test('match bonuses are paid and follow the ranked multiplier', () => {
  const r = { share: 0.1, kills: 2, seconds: 60 };
  const plain = computeMatchCoins(r);
  const withBonus = computeMatchCoins({ ...r, bonus: 75 });
  assert.equal(withBonus.total - plain.total, 75);
  assert.equal(computeMatchCoins({ ...r, bonus: 75, ranked: true }).total, Math.round(withBonus.base * 0.5));
});

test('banners: requested through the SDK at most once a minute per slot', async () => {
  let clock = 0;
  const sdk = createMockSDK({ adDuration: 0 });
  let calls = 0;
  sdk.banner.requestBanner = async () => { calls++; };
  const ads = new AdManager(sdk, { now: () => clock });
  assert.equal(await ads.banner('slot', 728, 90), true);
  clock += 30_000;
  assert.equal(await ads.banner('slot', 728, 90), false);
  ads.clearBanners();
  clock += 31_000;
  assert.equal(await ads.banner('slot', 728, 90), true);
  assert.equal(calls, 2);
  sdk.banner.requestBanner = async () => { throw new Error('no fill'); };
  clock += 61_000;
  assert.equal(await ads.banner('slot', 728, 90), false, 'errors never throw');
});
