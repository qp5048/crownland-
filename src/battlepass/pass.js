import { ADS } from '../config.js';
import { addCoins, grantItem } from '../shop/economy.js';

export const PASS_LEVELS = 30;
export const XP_PER_LEVEL = 200;
export const SEASON_DAYS = 28;
const SEASON_EPOCH = Date.UTC(2026, 0, 5); // a Monday
const DAY = 86400000;

export function seasonInfo(now = Date.now()) {
  const len = SEASON_DAYS * DAY;
  const index = Math.max(0, Math.floor((now - SEASON_EPOCH) / len));
  const endsAt = SEASON_EPOCH + (index + 1) * len;
  return { season: index + 1, endsAt, msLeft: Math.max(0, endsAt - now) };
}

const C = (amount) => ({ type: 'coins', amount });
const B = (id, n) => ({ type: 'boost', id, n });
const I = (kind, id) => ({ type: 'item', kind, id });

export const FREE_TRACK = [
  C(60), B('speed', 1), C(80), B('magnet', 1), C(100), B('shield', 1), C(120), B('bigStart', 1), C(140), I('hat', 'laurel'),
  C(150), B('speed', 2), C(160), B('magnet', 2), C(200), B('shield', 1), C(200), B('bigStart', 2), C(220), C(300),
  B('speed', 2), C(250), B('magnet', 2), C(260), I('trail', 'comet'), B('shield', 2), C(300), B('bigStart', 2), C(350), C(600),
];
export const PREMIUM_TRACK = [
  C(150), B('shield', 2), C(200), B('speed', 3), I('skin', 'seasonstar'), C(250), B('magnet', 3), C(300), B('bigStart', 3), I('skin', 'velvet'),
  C(350), B('shield', 3), C(400), B('speed', 3), I('hat', 'devil'), C(450), B('magnet', 3), C(500), B('bigStart', 3), I('skin', 'crystal'),
  C(550), B('shield', 3), C(600), B('speed', 3), I('trail', 'aurora'), C(700), B('magnet', 3), I('hat', 'royal'), C(1000), I('skin', 'dragon'),
];

/** Reset pass progress when a new season starts. Returns true if it rolled over. */
export function ensureSeason(state, now = Date.now()) {
  const { season } = seasonInfo(now);
  if (state.pass.season === season) return false;
  state.pass = { season, xp: 0, premium: false, adViews: 0, claimedFree: [], claimedPrem: [] };
  return true;
}

export function passLevel(xp) {
  const level = Math.min(PASS_LEVELS, Math.floor(xp / XP_PER_LEVEL));
  const into = level >= PASS_LEVELS ? XP_PER_LEVEL : xp - level * XP_PER_LEVEL;
  return { level, into, need: XP_PER_LEVEL, progress: into / XP_PER_LEVEL };
}

export function addPassXP(state, xp) {
  const before = passLevel(state.pass.xp).level;
  state.pass.xp = Math.min(PASS_LEVELS * XP_PER_LEVEL, state.pass.xp + Math.max(0, Math.round(xp)));
  const after = passLevel(state.pass.xp).level;
  return { before, after, levelsGained: after - before };
}

export function matchXP({ share, kills, seconds, ranked }) {
  const xp = 25 + share * 100 * 1.2 + kills * 8 + (seconds / 60) * 5;
  return Math.round(xp * (ranked ? 1.2 : 1));
}

export function canClaim(state, track, level) {
  if (level < 1 || level > PASS_LEVELS) return false;
  if (passLevel(state.pass.xp).level < level) return false;
  if (track === 'premium') return state.pass.premium && !state.pass.claimedPrem.includes(level);
  return !state.pass.claimedFree.includes(level);
}

/** Apply a reward to the save. Returns a description for the UI. */
export function applyReward(state, reward) {
  if (reward.type === 'coins') { addCoins(state, reward.amount); return { ...reward }; }
  if (reward.type === 'boost') { state.boosts[reward.id] = (state.boosts[reward.id] || 0) + reward.n; return { ...reward }; }
  const res = grantItem(state, reward.kind, reward.id);
  return { ...reward, duplicateCoins: res.coins };
}

export function claim(state, track, level) {
  if (!canClaim(state, track, level)) return null;
  const reward = (track === 'premium' ? PREMIUM_TRACK : FREE_TRACK)[level - 1];
  (track === 'premium' ? state.pass.claimedPrem : state.pass.claimedFree).push(level);
  return applyReward(state, reward);
}

/** One successfully watched rewarded ad towards the premium track. */
export function registerPremiumAdView(state) {
  if (state.pass.premium) return { unlocked: true, views: state.pass.adViews };
  state.pass.adViews = Math.min(ADS.premiumPassViews, state.pass.adViews + 1);
  if (state.pass.adViews >= ADS.premiumPassViews) state.pass.premium = true;
  return { unlocked: state.pass.premium, views: state.pass.adViews };
}

export function claimableCount(state) {
  const lvl = passLevel(state.pass.xp).level;
  let n = 0;
  for (let l = 1; l <= lvl; l++) {
    if (!state.pass.claimedFree.includes(l)) n++;
    if (state.pass.premium && !state.pass.claimedPrem.includes(l)) n++;
  }
  return n;
}
