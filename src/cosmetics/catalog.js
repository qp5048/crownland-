/**
 * Every cosmetic and boost in the game. Display names live in i18n/strings.js
 * under `item.<id>`. price === null → not sold in the shop (Battle Pass only).
 *
 * Skin styles (see cosmetics/draw.js):
 *   solid · stripes · dots · checker · gradient · radial · split
 *   shift (animated gradient) · pulse (breathing glow) · waves · grid · swirl
 *   glow  (legendary: glow + particles)  · prism · galaxy · phoenix · aurora · dragon
 *   character styles (cat, robot, ghost, …) live in cosmetics/characters.js
 */

export const RARITIES = {
  common: { order: 0, color: '#8fa3b8', glow: '#c9d6e3' },
  rare: { order: 1, color: '#3b8cff', glow: '#9cc6ff' },
  epic: { order: 2, color: '#a052ff', glow: '#d3aaff' },
  legendary: { order: 3, color: '#ff9f1a', glow: '#ffd27a' },
  mythic: { order: 4, color: '#ff3d7f', glow: '#ff9cc0' },
};
export const RARITY_LIST = Object.keys(RARITIES);

const S = (id, rarity, price, style, colors, extra = {}) => ({ id, kind: 'skin', rarity, price, style, colors, ...extra });

export const SKINS = [
  // Common — clean solid colours
  S('sky', 'common', 0, 'solid', ['#3fa9f5']),
  S('mint', 'common', 120, 'solid', ['#2ed3a3']),
  S('coral', 'common', 120, 'solid', ['#ff6b6b']),
  S('sunflower', 'common', 120, 'solid', ['#ffc83d']),
  S('grape', 'common', 140, 'solid', ['#9b6bff']),
  S('bubblegum', 'common', 140, 'solid', ['#ff7ac3']),
  S('lime', 'common', 140, 'solid', ['#8fd13a']),
  S('tangerine', 'common', 160, 'solid', ['#ff9a3c']),
  S('ocean', 'common', 160, 'solid', ['#2f6fe4']),
  S('cocoa', 'common', 160, 'solid', ['#a0704a']),
  S('slate', 'common', 180, 'solid', ['#6f7f99']),
  S('cherry', 'common', 180, 'solid', ['#e8334a']),
  // Rare — two-tone patterns
  S('candy', 'rare', 320, 'stripes', ['#ff6fa8', '#ffffff']),
  S('bee', 'rare', 320, 'stripes', ['#ffc61a', '#2b2b38']),
  S('watermelon', 'rare', 350, 'radial', ['#ff4f64', '#3cc46a']),
  S('panda', 'rare', 350, 'split', ['#ffffff', '#30323d']),
  S('denim', 'rare', 380, 'checker', ['#3d6fd6', '#5a8ae8']),
  S('zebra', 'rare', 380, 'stripes', ['#f4f4f4', '#2a2a2a'], { angle: 0.5 }),
  S('ladybug', 'rare', 420, 'dots', ['#e8334a', '#22222b']),
  S('leaf', 'rare', 420, 'gradient', ['#9be15d', '#00b36b']),
  S('chocomint', 'rare', 460, 'dots', ['#7ee0c3', '#5b3a29']),
  S('sailor', 'rare', 480, 'stripes', ['#1f3f8f', '#ffffff'], { angle: 0 }),
  // Epic — animated
  S('sunset', 'epic', 900, 'shift', ['#ff7e5f', '#feb47b', '#a855f7']),
  S('tide', 'epic', 950, 'waves', ['#1ec8ff', '#0a6cff']),
  S('lavalamp', 'epic', 1000, 'swirl', ['#ff3d6e', '#ffb03a']),
  S('neon', 'epic', 1050, 'pulse', ['#18e7ff', '#0b2a4a']),
  S('cyber', 'epic', 1100, 'grid', ['#141a3a', '#ff2bd6']),
  S('toxic', 'epic', 1150, 'pulse', ['#9dff3a', '#1d3b0a']),
  S('cottoncandy', 'epic', 1200, 'shift', ['#ffb3e6', '#a0e9ff', '#ffe29a']),
  S('frostbite', 'epic', 1300, 'waves', ['#e6f7ff', '#7cc8ff']),
  S('peacock', 'epic', 1450, 'swirl', ['#00a3a3', '#3b4cff']),
  // Legendary — glow and particles
  S('inferno', 'legendary', 2600, 'glow', ['#ff4d1a', '#ffd23f'], { fx: 'fire' }),
  S('glacier', 'legendary', 2700, 'glow', ['#5fd4ff', '#ffffff'], { fx: 'snow' }),
  S('thunder', 'legendary', 2900, 'glow', ['#5865ff', '#fff36b'], { fx: 'spark' }),
  S('midas', 'legendary', 3100, 'glow', ['#ffc21a', '#fff4b8'], { fx: 'gold' }),
  S('venom', 'legendary', 3300, 'glow', ['#7cff2e', '#1a3d00'], { fx: 'bubble' }),
  S('sakura', 'legendary', 3500, 'glow', ['#ffb7d5', '#ff5c9a'], { fx: 'petal' }),
  S('abyss', 'legendary', 3900, 'glow', ['#3b1e7a', '#b46bff'], { fx: 'star' }),
  // Mythic — the full show
  S('prism', 'mythic', 8000, 'prism', ['#ff4d6d', '#ffd23f', '#3ddc84', '#3fa9f5', '#a855f7'], { fx: 'rainbow' }),
  S('galaxy', 'mythic', 9000, 'galaxy', ['#120a35', '#6d3bff', '#ff4fd8'], { fx: 'star' }),
  S('phoenix', 'mythic', 10500, 'phoenix', ['#ff3b1f', '#ffb21a', '#fff3a0'], { fx: 'fire' }),
  S('aurora', 'mythic', 12000, 'aurora', ['#0b1f3a', '#2bffb4', '#7a5cff'], { fx: 'rainbow' }),
  // Characters (rare): animals with ears, snouts and little animations
  S('pig', 'rare', 340, 'pig', ['#ffb3c7', '#ff8fab', '#c94f72']),
  S('bear', 'rare', 340, 'bear', ['#a0693f', '#e7c39b', '#3b2416']),
  S('cat', 'rare', 360, 'cat', ['#ff9f43', '#d9701a', '#fff1e0']),
  S('fox', 'rare', 380, 'fox', ['#ff7b2e', '#ffffff', '#2b2b38']),
  S('penguin', 'rare', 400, 'penguin', ['#2b3150', '#ffffff', '#ffad33']),
  S('frog', 'rare', 420, 'frog', ['#5fd068', '#3a9e48', '#ff7aa8']),
  S('donut', 'rare', 460, 'donut', ['#e9b877', '#ff7eb6', '#ffd23f']),
  // Animated (epic)
  S('pumpkin', 'epic', 950, 'pumpkin', ['#ff8c1a', '#c45a00', '#ffd23f']),
  S('slime', 'epic', 1000, 'slime', ['#4fe08a', '#16924d', '#c8ffd9'], { shape: 'slime' }),
  S('ghost', 'epic', 1100, 'ghost', ['#f7f4ff', '#c9b8ff'], { shape: 'ghost', bob: true, fx: 'ghost' }),
  S('robot', 'epic', 1200, 'robot', ['#b4c0cf', '#5d6b7e', '#29e0ff']),
  S('disco', 'epic', 1400, 'disco', ['#c9d3e0', '#ffffff', '#b07cff']),
  // Animated (legendary)
  S('alien', 'legendary', 3000, 'alien', ['#8dff6a', '#2bbf4a', '#101418'], { fx: 'alien' }),
  S('lava', 'legendary', 3400, 'lava', ['#3a2622', '#ff5a1f', '#ffd23f'], { fx: 'fire' }),
  S('matrix', 'legendary', 3600, 'matrix', ['#06140b', '#2bff6a'], { fx: 'matrix' }),
  S('unicorn', 'legendary', 3800, 'unicorn', ['#fff6fb', '#ff9ecf', '#9be7ff'], { fx: 'rainbow' }),
  // Animated (mythic)
  S('hologram', 'mythic', 9500, 'hologram', ['#29e7ff', '#ff4fd8', '#ffffff'], { fx: 'spark' }),
  S('blackhole', 'mythic', 11000, 'blackhole', ['#05030a', '#ff8a3d', '#8b5cf6'], { fx: 'star' }),
  S('supernova', 'mythic', 11500, 'supernova', ['#fff6c4', '#ff6b3d', '#ff3df2'], { fx: 'nova' }),
  // Battle Pass exclusives
  S('seasonstar', 'epic', null, 'shift', ['#ffd23f', '#ff6b9d', '#6b8bff'], { pass: true }),
  S('velvet', 'legendary', null, 'glow', ['#b0103a', '#ffcf5a'], { fx: 'gold', pass: true }),
  S('crystal', 'legendary', null, 'glow', ['#b9f2ff', '#7b8cff'], { fx: 'snow', pass: true }),
  S('dragon', 'mythic', null, 'dragon', ['#0c3b2e', '#19e38c', '#ffd23f'], { fx: 'fire', pass: true }),
];

const H = (id, rarity, price, extra = {}) => ({ id, kind: 'hat', rarity, price, ...extra });
export const HATS = [
  H('none', 'common', 0),
  H('cap', 'common', 150),
  H('bow', 'common', 150),
  H('flower', 'common', 180),
  H('shades', 'rare', 350),
  H('catears', 'rare', 380),
  H('party', 'rare', 400),
  H('headphones', 'rare', 450),
  H('tophat', 'epic', 900),
  H('horns', 'epic', 1000),
  H('propeller', 'epic', 1100),
  H('pirate', 'epic', 1250),
  H('viking', 'legendary', 2400),
  H('wizard', 'legendary', 2800),
  H('halo', 'legendary', 3200),
  H('crown', 'mythic', 7500),
  // Battle Pass exclusives
  H('laurel', 'epic', null, { pass: true }),
  H('devil', 'legendary', null, { pass: true }),
  H('royal', 'mythic', null, { pass: true }),
];

const T = (id, rarity, price, extra = {}) => ({ id, kind: 'trail', rarity, price, ...extra });
export const TRAILS = [
  T('classic', 'common', 0),
  T('dashed', 'common', 160),
  T('candy', 'rare', 380),
  T('pixel', 'rare', 420),
  T('hearts', 'rare', 480),
  T('neon', 'epic', 950),
  T('bubbles', 'epic', 1050),
  T('ice', 'epic', 1150),
  T('stars', 'epic', 1300),
  T('fire', 'legendary', 2500),
  T('electric', 'legendary', 2800),
  T('toxic', 'legendary', 3000),
  T('gold', 'legendary', 3400),
  T('rainbow', 'mythic', 7000),
  T('galaxy', 'mythic', 8500),
  // Battle Pass exclusives
  T('comet', 'legendary', null, { pass: true }),
  T('aurora', 'mythic', null, { pass: true }),
];

export const BOOSTS = [
  { id: 'bigStart', kind: 'boost', price: 120, rankedAllowed: false, icon: 'expand' },
  { id: 'shield', kind: 'boost', price: 180, rankedAllowed: false, icon: 'shield' },
  { id: 'speed', kind: 'boost', price: 90, rankedAllowed: true, icon: 'bolt' },
  { id: 'magnet', kind: 'boost', price: 150, rankedAllowed: true, icon: 'magnet' },
];

export const DEFAULT_LOOK = { skin: 'sky', hat: 'none', trail: 'classic' };

const index = new Map();
for (const list of [SKINS, HATS, TRAILS, BOOSTS]) for (const it of list) index.set(`${it.kind}:${it.id}`, it);

export function getItem(kind, id) { return index.get(`${kind}:${id}`) || null; }
export const getSkin = (id) => getItem('skin', id) || SKINS[0];
export const getHat = (id) => getItem('hat', id) || HATS[0];
export const getTrail = (id) => getItem('trail', id) || TRAILS[0];
export const listFor = (kind) => ({ skin: SKINS, hat: HATS, trail: TRAILS, boost: BOOSTS })[kind];

/** Resolve a {skin,hat,trail} id triple into definitions. */
export function resolveLook(look) {
  return { skin: getSkin(look.skin), hat: getHat(look.hat), trail: getTrail(look.trail) };
}
