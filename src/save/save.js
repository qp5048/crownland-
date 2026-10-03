import { SAVE_KEY, SAVE_VERSION } from '../config.js';
import { BOOSTS, DEFAULT_LOOK, getItem } from '../cosmetics/catalog.js';
import { RANKS } from '../ranked/ranks.js';

export function defaultState() {
  return {
    v: SAVE_VERSION,
    nickname: '',
    coins: 0,
    owned: { skin: [DEFAULT_LOOK.skin], hat: [DEFAULT_LOOK.hat], trail: [DEFAULT_LOOK.trail] },
    equipped: { ...DEFAULT_LOOK },
    boosts: { bigStart: 0, shield: 0, speed: 0, magnet: 0 },
    armed: { bigStart: false, shield: false, speed: false, magnet: false },
    rank: { tier: 0, rp: 0, best: 0 },
    stats: { matches: 0, ranked: 0, kills: 0, bestShare: 0, wins: 0, playTime: 0, captures: 0, coinsEarned: 0, bestStreak: 0, kingKills: 0, longestLife: 0 },
    pass: { season: 0, xp: 0, premium: false, adViews: 0, claimedFree: [], claimedPrem: [] },
    quests: { day: '', list: [] },
    daily: { lastDay: '', streak: 0 },
    adBoost: { day: '', count: 0 },
    chest: { nextAt: 0 },
    achievements: { done: [], claimed: [] },
    tutorialDone: false,
    tutorialRewarded: false,
    settings: { music: 0.55, sfx: 0.8, muted: false, lang: '', quality: 'high' },
  };
}

/* ------------------------------------------------------------- migrations */

// Each entry upgrades a save from version k to k+1. Keep them forever.
const MIGRATIONS = {
  // v1 (early prototype): flat arrays `skins`, `trails` and a `skin` string
  1: (s) => {
    s.owned = { skin: s.skins || [], hat: [], trail: s.trails || [] };
    s.equipped = { skin: s.skin, hat: 'none', trail: s.trail };
    delete s.skins; delete s.trails; delete s.skin; delete s.trail;
    s.v = 2;
    return s;
  },
  // v2: rank was a single number of points
  2: (s) => {
    if (typeof s.rank === 'number') s.rank = { tier: Math.floor(s.rank / 100), rp: s.rank % 100, best: 0 };
    s.v = 3;
    return s;
  },
};

export function migrate(raw) {
  let s = raw;
  let v = Number.isInteger(s.v) ? s.v : 1;
  while (v < SAVE_VERSION && MIGRATIONS[v]) {
    s = MIGRATIONS[v](s);
    v = s.v;
  }
  return s;
}

/* ------------------------------------------------------------ validation */

const isObj = (o) => o !== null && typeof o === 'object' && !Array.isArray(o);

/** Recursively copy values from `src` that match the type found in `def`. */
function merge(def, src) {
  if (!isObj(src)) return def;
  const out = Array.isArray(def) ? [] : {};
  for (const key of Object.keys(def)) {
    const d = def[key], v = src[key];
    if (Array.isArray(d)) out[key] = Array.isArray(v) ? v.filter((x) => typeof x === 'string' || typeof x === 'number') : d;
    else if (isObj(d)) out[key] = merge(d, v);
    else if (typeof d === 'number') out[key] = typeof v === 'number' && Number.isFinite(v) ? v : d;
    else if (typeof v === typeof d) out[key] = v;
    else out[key] = d;
  }
  return out;
}

const clampInt = (v, a, b) => Math.max(a, Math.min(b, Math.floor(v)));

export function sanitize(raw) {
  const def = defaultState();
  if (!isObj(raw)) return def;
  let s;
  try { s = merge(def, migrate({ ...raw })); } catch { return def; }
  s.v = SAVE_VERSION;
  s.coins = clampInt(s.coins, 0, 1e9);
  s.nickname = String(s.nickname).slice(0, 16);
  for (const kind of ['skin', 'hat', 'trail']) {
    const list = [...new Set(s.owned[kind].filter((id) => getItem(kind, id)))];
    if (!list.includes(DEFAULT_LOOK[kind])) list.unshift(DEFAULT_LOOK[kind]);
    s.owned[kind] = list;
    if (!list.includes(s.equipped[kind])) s.equipped[kind] = DEFAULT_LOOK[kind];
  }
  for (const b of BOOSTS) {
    s.boosts[b.id] = clampInt(s.boosts[b.id], 0, 999);
    s.armed[b.id] = !!s.armed[b.id] && s.boosts[b.id] > 0;
  }
  s.rank.tier = clampInt(s.rank.tier, 0, RANKS.length - 1);
  const need = RANKS[s.rank.tier].need;
  s.rank.rp = need ? clampInt(s.rank.rp, 0, need - 1) : clampInt(s.rank.rp, 0, 1e6);
  s.rank.best = clampInt(Math.max(s.rank.best, s.rank.tier), 0, RANKS.length - 1);
  s.pass.xp = clampInt(s.pass.xp, 0, 1e7);
  s.pass.adViews = clampInt(s.pass.adViews, 0, 99);
  s.pass.claimedFree = [...new Set(s.pass.claimedFree.filter(Number.isInteger))];
  s.pass.claimedPrem = [...new Set(s.pass.claimedPrem.filter(Number.isInteger))];
  s.daily.streak = clampInt(s.daily.streak, 0, 1e5);
  // a chest timer far in the future means the clock was rolled back: cap it
  s.chest.nextAt = Math.max(0, Math.min(s.chest.nextAt, Date.now() + 3 * 3600 * 1000));
  s.achievements.done = [...new Set(s.achievements.done.filter((x) => typeof x === 'string'))];
  s.achievements.claimed = [...new Set(s.achievements.claimed.filter((x) => s.achievements.done.includes(x)))];
  s.settings.music = Math.max(0, Math.min(1, s.settings.music));
  s.settings.sfx = Math.max(0, Math.min(1, s.settings.sfx));
  if (!['high', 'low'].includes(s.settings.quality)) s.settings.quality = 'high';
  if (!['', 'en', 'ru'].includes(s.settings.lang)) s.settings.lang = '';
  s.quests.list = Array.isArray(raw?.quests?.list)
    ? raw.quests.list.filter((q) => isObj(q) && typeof q.id === 'string').map((q) => ({
      id: q.id, type: String(q.type || ''), target: Number(q.target) || 1, xp: Number(q.xp) || 0,
      progress: Number(q.progress) || 0, claimed: !!q.claimed,
    }))
    : [];
  return s;
}

/* ----------------------------------------------------------- persistence */

export class SaveManager {
  constructor(storage) {
    this.storage = storage;
    this.state = defaultState();
    this.timer = null;
    this.listeners = new Set();
    this.corrupted = false;
  }

  load() {
    const tryParse = (key) => {
      const str = this.storage.getItem(key);
      if (str === null || str === undefined || str === '') return null;
      try { return JSON.parse(str); } catch { return undefined; }
    };
    let raw = tryParse(SAVE_KEY);
    if (raw === undefined || (raw !== null && !isObj(raw))) {
      this.corrupted = true;
      console.warn('[save] main save is corrupted, trying the backup');
      raw = tryParse(`${SAVE_KEY}.bak`);
      if (!isObj(raw)) raw = null;
    }
    this.state = raw ? sanitize(raw) : defaultState();
    if (raw && !this.corrupted) {
      try { this.storage.setItem(`${SAVE_KEY}.bak`, JSON.stringify(this.state)); } catch { /* ignore */ }
    }
    return this.state;
  }

  /** Debounced write (coalesces bursts of changes). */
  save(immediate = false) {
    clearTimeout(this.timer);
    const write = () => {
      this.timer = null;
      try { this.storage.setItem(SAVE_KEY, JSON.stringify(this.state)); } catch (e) { console.warn('[save] failed', e); }
    };
    if (immediate) write();
    else this.timer = setTimeout(write, 250);
    for (const fn of this.listeners) fn(this.state);
  }

  flush() { if (this.timer) this.save(true); }
  onChange(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }

  reset() {
    this.state = defaultState();
    this.save(true);
  }
}
