import { ECONOMY } from '../config.js';
import { BOOSTS, getItem } from '../cosmetics/catalog.js';

/**
 * Coins for a finished match. Pure function — the same numbers are shown in
 * the results screen breakdown and credited to the save.
 */
export function computeMatchCoins({ share, kills, seconds, won = false, ranked = false, magnet = false }) {
  const territory = Math.round(Math.max(0, share) * 100 * ECONOMY.coinsPerPercent);
  const killCoins = Math.max(0, kills) * ECONOMY.coinsPerKill;
  const time = Math.floor(Math.max(0, seconds) / ECONOMY.secondsPerCoin);
  const win = won ? ECONOMY.winBonus : 0;
  const base = territory + killCoins + time + win;
  let mult = 1;
  if (ranked) mult *= ECONOMY.rankedMultiplier;
  if (magnet) mult *= ECONOMY.magnetMultiplier;
  const total = Math.max(0, Math.round(base * mult));
  return { territory, kills: killCoins, time, win, base, mult, ranked, magnet, total };
}

export function addCoins(state, amount) {
  const n = Math.floor(amount);
  if (!Number.isFinite(n) || n <= 0) return 0;
  state.coins = Math.min(1e9, state.coins + n);
  state.stats.coinsEarned += n;
  return n;
}

export function isOwned(state, kind, id) {
  return state.owned[kind]?.includes(id) ?? false;
}

/** Buy a cosmetic. Never lets the balance go negative or buys twice. */
export function buyItem(state, kind, id) {
  const item = getItem(kind, id);
  if (!item || kind === 'boost') return { ok: false, reason: 'unknown' };
  if (item.price === null || item.price === undefined) return { ok: false, reason: 'notForSale' };
  if (isOwned(state, kind, id)) return { ok: false, reason: 'owned' };
  if (!Number.isInteger(state.coins) || state.coins < item.price) return { ok: false, reason: 'coins' };
  state.coins -= item.price;
  state.owned[kind].push(id);
  return { ok: true, item };
}

export function equipItem(state, kind, id) {
  if (!isOwned(state, kind, id)) return false;
  state.equipped[kind] = id;
  return true;
}

export function buyBoost(state, id) {
  const b = BOOSTS.find((x) => x.id === id);
  if (!b) return { ok: false, reason: 'unknown' };
  if (state.coins < b.price) return { ok: false, reason: 'coins' };
  state.coins -= b.price;
  state.boosts[id] = (state.boosts[id] || 0) + 1;
  return { ok: true, item: b };
}

/** Give an item without paying (pass rewards). Returns coins given instead if owned. */
export const DUPLICATE_COINS = { common: 100, rare: 250, epic: 600, legendary: 1500, mythic: 4000 };
export function grantItem(state, kind, id) {
  const item = getItem(kind, id);
  if (!item) return { granted: false, coins: 0 };
  if (isOwned(state, kind, id)) {
    const c = DUPLICATE_COINS[item.rarity] || 100;
    addCoins(state, c);
    return { granted: false, coins: c, item };
  }
  state.owned[kind].push(id);
  return { granted: true, coins: 0, item };
}

/**
 * Consume armed boosts at match start. Ranked disables some boosts; those stay
 * in the inventory and armed for the next normal match.
 */
export function consumeBoosts(state, ranked) {
  const used = {};
  for (const b of BOOSTS) {
    if (!state.armed[b.id] || state.boosts[b.id] <= 0) { state.armed[b.id] = false; continue; }
    if (ranked && !b.rankedAllowed) continue;
    state.boosts[b.id]--;
    used[b.id] = true;
    if (state.boosts[b.id] <= 0) state.armed[b.id] = false;
  }
  return used;
}
