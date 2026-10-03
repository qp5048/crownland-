import { BOOSTS, SKINS } from '../cosmetics/catalog.js';
import { addCoins } from '../shop/economy.js';

/** Free chest: opens every 3 hours, gives coins, a boost or (rarely) a skin. */
export const CHEST_INTERVAL = 3 * 3600 * 1000;

export function chestStatus(state, now = Date.now()) {
  const left = Math.max(0, (state.chest.nextAt || 0) - now);
  return { ready: left === 0, msLeft: left };
}

/**
 * Roll and apply a chest reward. `rand` is injectable for tests.
 * Returns { coins, boost, skin } or null when the chest is not ready.
 */
export function openChest(state, rand = Math.random, now = Date.now()) {
  if (!chestStatus(state, now).ready) return null;
  state.chest.nextAt = now + CHEST_INTERVAL;
  const r = rand();
  const reward = { coins: 0, boost: null, skin: null };
  if (r < 0.08) {
    const pool = SKINS.filter((s) => (s.rarity === 'common' || s.rarity === 'rare') && s.price && !state.owned.skin.includes(s.id));
    if (pool.length) {
      const skin = pool[Math.floor(rand() * pool.length)];
      state.owned.skin.push(skin.id);
      reward.skin = skin.id;
      return reward;
    }
    reward.coins = 300;
  } else if (r < 0.3) {
    const b = BOOSTS[Math.floor(rand() * BOOSTS.length)];
    state.boosts[b.id] = (state.boosts[b.id] || 0) + 1;
    reward.boost = b.id;
    reward.coins = 40;
  } else {
    reward.coins = 60 + Math.round(Math.pow(rand(), 1.8) * 160); // 60..220, mostly lower
  }
  addCoins(state, reward.coins);
  return reward;
}

/** "×2" after a successful rewarded ad: repeat the coins and boost (not the skin). */
export function doubleChest(state, reward) {
  if (reward.coins) addCoins(state, reward.coins);
  if (reward.boost) state.boosts[reward.boost] = (state.boosts[reward.boost] || 0) + 1;
}
