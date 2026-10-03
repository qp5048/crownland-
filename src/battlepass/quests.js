import { hashString, Rng } from '../core/rng.js';

/** Local calendar day key, e.g. "2026-10-03". */
export function dayKey(date = new Date()) {
  const y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
  return `${y}-${m < 10 ? '0' : ''}${m}-${d < 10 ? '0' : ''}${d}`;
}
export function previousDayKey(date = new Date()) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, 12);
  return dayKey(d);
}

/**
 * Quest templates. `mode`: 'max' tracks the best single-match value,
 * 'sum' accumulates across matches.
 */
export const QUEST_TYPES = {
  share: { mode: 'max', variants: [[10, 100], [20, 140], [30, 180]] },
  kills: { mode: 'sum', variants: [[3, 100], [5, 140], [8, 200]] },
  matches: { mode: 'sum', variants: [[3, 80], [5, 120]] },
  survive: { mode: 'max', variants: [[120, 100], [180, 140], [300, 200]] },
  rankedTop: { mode: 'sum', variants: [[1, 160], [2, 220]] },
  captures: { mode: 'sum', variants: [[20, 100], [40, 150]] },
  coins: { mode: 'sum', variants: [[300, 100], [600, 160]] },
};

export function generateQuests(day) {
  const rng = new Rng(hashString(`quests:${day}`));
  const types = rng.shuffle(Object.keys(QUEST_TYPES)).slice(0, 3);
  return types.map((type, k) => {
    const [target, xp] = rng.pick(QUEST_TYPES[type].variants);
    return { id: `${day}:${k}:${type}`, type, target, xp, progress: 0, claimed: false };
  });
}

/** Make sure today's quests exist. Returns true when a new set was rolled. */
export function ensureQuests(state, day = dayKey()) {
  if (state.quests.day === day && state.quests.list.length === 3) return false;
  state.quests = { day, list: generateQuests(day) };
  return true;
}

/** Feed a finished match into quest progress. Returns quests completed by it. */
export function trackMatch(state, m) {
  const completed = [];
  const values = {
    share: Math.floor(m.share * 100),
    kills: m.kills,
    matches: 1,
    survive: Math.floor(m.seconds),
    rankedTop: m.ranked && m.place <= 3 ? 1 : 0,
    captures: m.captures,
    coins: m.coins,
  };
  for (const q of state.quests.list) {
    const def = QUEST_TYPES[q.type];
    if (!def || q.claimed) continue;
    const was = q.progress >= q.target;
    const v = values[q.type] || 0;
    q.progress = def.mode === 'max' ? Math.max(q.progress, v) : q.progress + v;
    q.progress = Math.min(q.progress, q.target);
    if (!was && q.progress >= q.target) completed.push(q);
  }
  return completed;
}

export function claimQuest(state, id) {
  const q = state.quests.list.find((x) => x.id === id);
  if (!q || q.claimed || q.progress < q.target) return null;
  q.claimed = true;
  return q;
}
