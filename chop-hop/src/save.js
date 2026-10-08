const KEY = 'chophop_save_v1';

function defaults() {
  return {
    coins: 0,
    stars: 0,
    level: 1,
    skin: 'chef',
    owned: ['chef'],
    upgrades: { income: 0, fever: 0, magnet: 0, shield: 0 },
    adProgress: {},
    best: 0,
    skinProgress: 0,
    totalSlices: 0,
    wheelAt: 0,
    levelStars: {},
    settings: { sound: true, music: true, vibro: true, quality: 'auto', lang: null },
  };
}

let storage = null;
export const save = defaults();

function merge(target, src) {
  for (const k of Object.keys(src)) {
    const v = src[k];
    if (v && typeof v === 'object' && !Array.isArray(v) && target[k] && typeof target[k] === 'object' && !Array.isArray(target[k])) {
      merge(target[k], v);
    } else if (v !== undefined) {
      target[k] = v;
    }
  }
}

export function initSave(store) {
  storage = store;
  if (!storage) return;
  try {
    const raw = storage.getItem(KEY);
    if (raw) merge(save, JSON.parse(raw));
  } catch (e) { /* corrupted save, keep defaults */ }
  if (!Array.isArray(save.owned) || !save.owned.includes('chef')) save.owned = ['chef', ...(save.owned || [])];
}

let pending = null;
export function persist() {
  if (!storage) return;
  if (pending) return;
  pending = setTimeout(() => {
    pending = null;
    try { storage.setItem(KEY, JSON.stringify(save)); } catch (e) { /* quota */ }
  }, 50);
}

export function resetSave() {
  const s = save.settings;
  const d = defaults();
  for (const k of Object.keys(save)) delete save[k];
  Object.assign(save, d);
  save.settings = s;
  persist();
}
