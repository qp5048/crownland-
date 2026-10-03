import { addCoins } from '../shop/economy.js';
import { dayKey, previousDayKey } from './quests.js';

/** 7-day login streak; day 7 is the big one, then the cycle repeats. */
export const DAILY_REWARDS = [
  { coins: 50 },
  { coins: 80 },
  { coins: 60, boost: 'speed' },
  { coins: 120 },
  { coins: 80, boost: 'shield' },
  { coins: 180 },
  { coins: 400, boost: 'magnet' },
];

/** Where the player stands today without changing anything. */
export function dailyStatus(state, now = new Date()) {
  const today = dayKey(now);
  const claimedToday = state.daily.lastDay === today;
  const continues = state.daily.lastDay === previousDayKey(now);
  const streak = claimedToday ? state.daily.streak : continues ? state.daily.streak + 1 : 1;
  const index = (streak - 1) % DAILY_REWARDS.length;
  return { today, claimedToday, streak, index, reward: DAILY_REWARDS[index] };
}

export function claimDaily(state, { double = false } = {}, now = new Date()) {
  const st = dailyStatus(state, now);
  if (st.claimedToday) return null;
  state.daily.lastDay = st.today;
  state.daily.streak = st.streak;
  const coins = st.reward.coins * (double ? 2 : 1);
  addCoins(state, coins);
  if (st.reward.boost) state.boosts[st.reward.boost] = (state.boosts[st.reward.boost] || 0) + 1;
  return { ...st, coins, boost: st.reward.boost || null };
}

/** Top-up after a successful rewarded ad on an already-claimed daily ("×2"). */
export function doubleDaily(state, claimedCoins) {
  return addCoins(state, claimedCoins);
}
