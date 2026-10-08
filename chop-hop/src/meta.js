// Progression rules: upgrades, blade unlocks, wheel prizes.
import { save, persist } from './save.js';
import { SKINS } from './skins.js';

export const UPGRADES = [
  { id: 'income', icon: 'i-sharp', color: '#ff8a3d', max: 20, cost: (l) => Math.round(120 * Math.pow(1.35, l)) },
  { id: 'fever', icon: 'i-flame', color: '#ff4d6d', max: 10, cost: (l) => Math.round(160 * Math.pow(1.45, l)) },
  { id: 'magnet', icon: 'i-magnet', color: '#2fa8ff', max: 8, cost: (l) => Math.round(150 * Math.pow(1.5, l)) },
  { id: 'shield', icon: 'i-shield', color: '#a14dff', max: 5, cost: (l) => Math.round(350 * Math.pow(1.75, l)) },
];

export const incomeMult = () => 1 + 0.1 * save.upgrades.income;
export const feverDuration = () => 5 + 0.45 * save.upgrades.fever;
export const magnetRadius = () => 0.7 + 0.32 * save.upgrades.magnet;
export const shieldChance = () => 0.1 * save.upgrades.shield;

export function buyUpgrade(id) {
  const u = UPGRADES.find((x) => x.id === id);
  const lvl = save.upgrades[id] || 0;
  if (lvl >= u.max) return false;
  const c = u.cost(lvl);
  if (save.coins < c) return false;
  save.coins -= c;
  save.upgrades[id] = lvl + 1;
  persist();
  return true;
}

export function isOwned(id) {
  return save.owned.includes(id);
}

export function own(id) {
  if (!save.owned.includes(id)) save.owned.push(id);
  persist();
}

// Stars / level based blades unlock automatically. Returns the newly unlocked ones.
export function checkAutoUnlocks() {
  const fresh = [];
  for (const s of SKINS) {
    if (isOwned(s.id)) continue;
    const u = s.unlock;
    if ((u.type === 'stars' && save.stars >= u.count) || (u.type === 'level' && save.level > u.level)) {
      own(s.id);
      fresh.push(s);
    }
  }
  return fresh;
}

// The blade the "new blade" progress bar is filling up for.
export function progressSkin() {
  const locked = SKINS.filter((s) => !isOwned(s.id) && s.unlock.type === 'coins');
  if (!locked.length) return null;
  locked.sort((a, b) => a.unlock.price - b.unlock.price);
  return locked[0];
}

export const WHEEL = [
  { type: 'coins', v: 100, color: '#ff4d6d', w: 20 },
  { type: 'coins', v: 250, color: '#ffc928', w: 17 },
  { type: 'stars', v: 2, color: '#2fa8ff', w: 13 },
  { type: 'coins', v: 500, color: '#2fd36b', w: 10 },
  { type: 'coins', v: 150, color: '#a14dff', w: 20 },
  { type: 'blade', v: 1, color: '#ff8a3d', w: 4 },
  { type: 'coins', v: 1000, color: '#ff5fa2', w: 5 },
  { type: 'stars', v: 4, color: '#3fd0c9', w: 11 },
];

export const WHEEL_COOLDOWN = 3 * 60 * 60 * 1000;

export function wheelScale() {
  return 1 + Math.floor(save.level / 5) * 0.25;
}

export function wheelFree() {
  return Date.now() - (save.wheelAt || 0) >= WHEEL_COOLDOWN;
}
