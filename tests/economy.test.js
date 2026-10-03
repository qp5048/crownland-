import test from 'node:test';
import assert from 'node:assert/strict';
import { buyBoost, buyItem, computeMatchCoins, consumeBoosts, equipItem, grantItem } from '../src/shop/economy.js';
import { defaultState } from '../src/save/save.js';
import { SKINS, HATS, TRAILS } from '../src/cosmetics/catalog.js';
import { ECONOMY } from '../src/config.js';

test('ranked pays exactly half of normal for the same result', () => {
  const r = { share: 0.18, kills: 3, seconds: 200 };
  const normal = computeMatchCoins({ ...r });
  const ranked = computeMatchCoins({ ...r, ranked: true });
  assert.equal(normal.base, ranked.base);
  assert.equal(ranked.mult, ECONOMY.rankedMultiplier);
  assert.equal(ranked.total, Math.round(normal.total * 0.5));
});

test('magnet multiplies coins by 1.5 and stacks with ranked', () => {
  const r = { share: 0.1, kills: 1, seconds: 100 };
  const base = computeMatchCoins(r).total;
  assert.equal(computeMatchCoins({ ...r, magnet: true }).total, Math.round(base * 1.5));
  assert.equal(computeMatchCoins({ ...r, magnet: true, ranked: true }).total, Math.round(computeMatchCoins(r).base * 0.75));
});

test('coins never go negative for weird inputs', () => {
  const c = computeMatchCoins({ share: -1, kills: -5, seconds: -10 });
  assert.equal(c.total, 0);
});

test('a typical match pays for a first Rare skin within 2-3 matches', () => {
  const typical = computeMatchCoins({ share: 0.15, kills: 2, seconds: 180 }).total;
  const firstRare = Math.min(...SKINS.filter((s) => s.rarity === 'rare' && s.price).map((s) => s.price));
  const matches = firstRare / typical;
  assert.ok(matches >= 1.5 && matches <= 3.2, `rare in ${matches.toFixed(2)} matches (${typical}/match)`);
  const mythic = Math.max(...SKINS.filter((s) => s.rarity === 'mythic' && s.price).map((s) => s.price));
  assert.ok(mythic / typical > 40, 'mythic is a long-term goal');
});

test('buying: cannot overspend, cannot buy twice, cannot buy pass exclusives', () => {
  const s = defaultState();
  s.coins = 130;
  assert.equal(buyItem(s, 'skin', 'cherry').reason, 'coins'); // costs 180
  assert.equal(s.coins, 130);
  const ok = buyItem(s, 'skin', 'mint');
  assert.equal(ok.ok, true);
  assert.equal(s.coins, 10);
  assert.equal(buyItem(s, 'skin', 'mint').reason, 'owned');
  assert.equal(s.coins, 10);
  s.coins = 1e6;
  assert.equal(buyItem(s, 'skin', 'dragon').reason, 'notForSale');
  assert.equal(buyItem(s, 'skin', 'nope').reason, 'unknown');
  assert.equal(s.owned.skin.filter((x) => x === 'mint').length, 1);
});

test('equip only owned items', () => {
  const s = defaultState();
  assert.equal(equipItem(s, 'skin', 'galaxy'), false);
  assert.equal(s.equipped.skin, 'sky');
  s.owned.skin.push('galaxy');
  assert.equal(equipItem(s, 'skin', 'galaxy'), true);
  assert.equal(s.equipped.skin, 'galaxy');
});

test('boosts: buy, arm and consume; ranked keeps the disallowed ones', () => {
  const s = defaultState();
  s.coins = 1000;
  buyBoost(s, 'bigStart');
  buyBoost(s, 'speed');
  s.armed.bigStart = true;
  s.armed.speed = true;
  const used = consumeBoosts(s, true);
  assert.deepEqual(used, { speed: true });
  assert.equal(s.boosts.bigStart, 1);
  assert.equal(s.armed.bigStart, true, 'still armed for the next normal match');
  assert.equal(s.boosts.speed, 0);
  assert.equal(s.armed.speed, false);
  const used2 = consumeBoosts(s, false);
  assert.deepEqual(used2, { bigStart: true });
  assert.equal(s.boosts.bigStart, 0);
  s.coins = 50;
  assert.equal(buyBoost(s, 'shield').ok, false);
  assert.equal(s.coins, 50);
});

test('granting an owned item gives coins instead', () => {
  const s = defaultState();
  const a = grantItem(s, 'skin', 'dragon');
  assert.equal(a.granted, true);
  const b = grantItem(s, 'skin', 'dragon');
  assert.equal(b.granted, false);
  assert.ok(b.coins > 0);
  assert.equal(s.coins, b.coins);
});

test('catalog sanity: 40+ skins, prices rise with rarity, unique ids', () => {
  assert.ok(SKINS.length >= 40);
  const order = ['common', 'rare', 'epic', 'legendary', 'mythic'];
  for (const list of [SKINS, HATS, TRAILS]) {
    const ids = new Set(list.map((i) => i.id));
    assert.equal(ids.size, list.length);
    for (let r = 1; r < order.length; r++) {
      const lower = list.filter((i) => i.rarity === order[r - 1] && i.price).map((i) => i.price);
      const higher = list.filter((i) => i.rarity === order[r] && i.price).map((i) => i.price);
      if (lower.length && higher.length) assert.ok(Math.max(...lower) < Math.min(...higher), `${order[r]} pricier than ${order[r - 1]}`);
    }
  }
});
