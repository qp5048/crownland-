import { addCoins } from '../shop/economy.js';

/**
 * Long-term goals with coin rewards. Each entry exposes progress(state) →
 * [current, target]; an achievement is done once current >= target and can be
 * claimed exactly once.
 */
const A = (id, icon, reward, progress) => ({ id, icon, reward, progress });
export const ACHIEVEMENTS = [
  A('capture1', 'flag', 30, (s) => [s.stats.captures, 1]),
  A('kill1', 'sword', 50, (s) => [s.stats.kills, 1]),
  A('matches10', 'play', 100, (s) => [s.stats.matches, 10]),
  A('share10', 'map', 100, (s) => [Math.floor(s.stats.bestShare * 100), 10]),
  A('kills25', 'sword', 150, (s) => [s.stats.kills, 25]),
  A('survive5', 'clock', 150, (s) => [Math.floor(s.stats.longestLife / 60), 5]),
  A('king', 'crown', 150, (s) => [s.stats.kingKills, 1]),
  A('streak3', 'bolt', 200, (s) => [s.stats.bestStreak, 3]),
  A('silver', 'trophy', 200, (s) => [s.rank.best, 3]),
  A('share25', 'map', 250, (s) => [Math.floor(s.stats.bestShare * 100), 25]),
  A('matches50', 'play', 300, (s) => [s.stats.matches, 50]),
  A('collector', 'sparkle', 300, (s) => [s.owned.skin.length, 10]),
  A('loyal', 'gift', 300, (s) => [s.daily.streak, 7]),
  A('kills100', 'sword', 400, (s) => [s.stats.kills, 100]),
  A('gold', 'trophy', 400, (s) => [s.rank.best, 6]),
  A('share50', 'map', 600, (s) => [Math.floor(s.stats.bestShare * 100), 50]),
  A('kills300', 'sword', 1000, (s) => [s.stats.kills, 300]),
  A('diamond', 'trophy', 1000, (s) => [s.rank.best, 12]),
  A('win', 'crown', 2000, (s) => [s.stats.wins, 1]),
];

export function achievementProgress(state, a) {
  const [cur, target] = a.progress(state);
  return { cur: Math.min(cur, target), target, done: cur >= target, claimed: state.achievements.claimed.includes(a.id) };
}

/** Mark newly completed achievements; returns them (for "unlocked!" toasts). */
export function evaluateAchievements(state) {
  const fresh = [];
  for (const a of ACHIEVEMENTS) {
    if (state.achievements.done.includes(a.id)) continue;
    if (achievementProgress(state, a).done) {
      state.achievements.done.push(a.id);
      fresh.push(a);
    }
  }
  return fresh;
}

export function claimAchievement(state, id) {
  const a = ACHIEVEMENTS.find((x) => x.id === id);
  if (!a || state.achievements.claimed.includes(id) || !achievementProgress(state, a).done) return null;
  state.achievements.claimed.push(id);
  addCoins(state, a.reward);
  return a;
}

export function claimableAchievements(state) {
  return ACHIEVEMENTS.filter((a) => { const p = achievementProgress(state, a); return p.done && !p.claimed; }).length;
}
