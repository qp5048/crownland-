import { clamp, lerp } from '../core/math.js';

/**
 * 17 ranks. `need` = rank points required to promote out of the rank
 * (0 for Legend, which has an open-ended score).
 */
const TIERS = [
  { key: 'bronze', color: '#d08a4c', dark: '#8a5326', light: '#f4c497' },
  { key: 'silver', color: '#a9b9cb', dark: '#66788f', light: '#e6eef7' },
  { key: 'gold', color: '#f5b400', dark: '#a87400', light: '#ffe48a' },
  { key: 'platinum', color: '#3fd0c9', dark: '#17807b', light: '#b9f5f1' },
  { key: 'diamond', color: '#5aa8ff', dark: '#2a5fc2', light: '#cfe6ff' },
];

export const RANKS = [];
TIERS.forEach((tier, ti) => {
  for (let d = 0; d < 3; d++) {
    RANKS.push({ key: tier.key, division: d + 1, color: tier.color, dark: tier.dark, light: tier.light, need: 100 + ti * 20 });
  }
});
RANKS.push({ key: 'master', division: 0, color: '#a052ff', dark: '#5d22b0', light: '#e2c9ff', need: 250 });
RANKS.push({ key: 'legend', division: 0, color: '#ff3d7f', dark: '#a0174a', light: '#ffc2d6', need: 0 });

export const LEGEND = RANKS.length - 1;

/** 0..1 difficulty for a rank, eased so early ranks stay friendly. */
export function rankLevel(tier) {
  const x = clamp(tier / LEGEND, 0, 1);
  return lerp(0.18, 1, x * (0.6 + 0.4 * x));
}
export const rankBotCount = (tier) => Math.round(lerp(10, 15, clamp(tier / LEGEND, 0, 1)));
export const rankMapSize = (tier) => 112 + rankBotCount(tier) * 2;

/**
 * Rank points for a ranked match.
 *  place  — final leaderboard place (1 = best) among `players`
 *  share  — best territory share reached (0..1)
 *  seconds — survival time
 */
export function computeRP({ place, players, share, seconds, tier, won = false }) {
  const placeTable = [32, 24, 18, 12, 8, 5, 3, 1];
  let rp = place <= placeTable.length ? placeTable[place - 1] : 0;
  rp += Math.min(30, Math.round(share * 100 * 1.2));
  if (won) rp += 40;
  // dying early is punished; the penalty grows with the rank
  if (seconds < 45) rp -= Math.round(10 + tier * 1.2);
  else if (seconds < 90) rp -= Math.round(tier * 0.6);
  // higher ranks pay an entry "tax" so climbing slows down smoothly
  rp -= Math.round(tier * 1.4);
  // finishing in the bottom half also costs a bit at higher ranks
  if (place > Math.ceil(players / 2)) rp -= Math.round(tier * 0.5);
  return rp;
}

/**
 * Apply a rank point delta. Promotion carries over the excess, demotion drops
 * to 75% of the previous rank. Bronze I never goes below 0.
 */
export function applyRP(rank, delta) {
  const from = { tier: rank.tier, rp: rank.rp };
  let tier = rank.tier, rp = rank.rp + delta;
  while (RANKS[tier].need && rp >= RANKS[tier].need && tier < LEGEND) {
    rp -= RANKS[tier].need;
    tier++;
  }
  while (rp < 0) {
    if (tier === 0) { rp = 0; break; }
    tier--;
    rp += Math.round(RANKS[tier].need * 0.75);
    if (rp >= 0) break;
  }
  if (RANKS[tier].need) rp = Math.min(rp, RANKS[tier].need - 1);
  rank.tier = tier;
  rank.rp = Math.max(0, rp);
  rank.best = Math.max(rank.best || 0, tier);
  return { from, to: { tier: rank.tier, rp: rank.rp }, promoted: tier > from.tier, demoted: tier < from.tier, delta };
}

const ROMAN = ['', 'I', 'II', 'III'];

/** Crisp vector rank badge as an SVG string. */
export function rankIconSVG(tier, size = 64) {
  const r = RANKS[clamp(tier, 0, LEGEND)];
  const id = `rk${tier}_${Math.random().toString(36).slice(2, 7)}`;
  const pips = r.division
    ? Array.from({ length: r.division }, (_, k) => {
      const x = 32 + (k - (r.division - 1) / 2) * 9;
      return `<path d="M${x} 47l3 3-3 3-3-3z" fill="#fff" stroke="${r.dark}" stroke-width="1.2"/>`;
    }).join('')
    : '';
  let emblem;
  if (r.key === 'legend') {
    emblem = `<path d="M18 30l6 5 8-11 8 11 6-5-3 14H21z" fill="#ffe36b" stroke="${r.dark}" stroke-width="2" stroke-linejoin="round"/><circle cx="32" cy="38" r="3" fill="${r.color}"/>`;
  } else if (r.key === 'master') {
    emblem = `<path d="M32 18l4.2 8.6 9.4 1.4-6.8 6.6 1.6 9.4L32 39.6 23.6 44l1.6-9.4-6.8-6.6 9.4-1.4z" fill="#fff" stroke="${r.dark}" stroke-width="2" stroke-linejoin="round"/>`;
  } else if (r.key === 'diamond') {
    emblem = `<path d="M22 28l5-7h10l5 7-10 14z" fill="#fff" stroke="${r.dark}" stroke-width="2" stroke-linejoin="round"/><path d="M22 28h20M27 21l5 21 5-21" fill="none" stroke="${r.dark}" stroke-width="1.4" opacity=".6"/>`;
  } else {
    emblem = `<path d="M32 19l3.5 7.2 7.9 1.1-5.7 5.6 1.3 7.8L32 37l-7 3.7 1.3-7.8-5.7-5.6 7.9-1.1z" fill="#fff" stroke="${r.dark}" stroke-width="2" stroke-linejoin="round"/>`;
  }
  const wings = r.key === 'legend' || r.key === 'master'
    ? `<path d="M10 22c2 10 6 16 12 19M54 22c-2 10-6 16-12 19" fill="none" stroke="${r.light}" stroke-width="3" stroke-linecap="round"/>`
    : '';
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true">
<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${r.light}"/><stop offset=".55" stop-color="${r.color}"/><stop offset="1" stop-color="${r.dark}"/></linearGradient></defs>
${wings}<path d="M32 4l22 8v18c0 14-9.5 24-22 30C19.5 54 10 44 10 30V12z" fill="url(#${id})" stroke="${r.dark}" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M32 9l17 6.2V30c0 11-7.3 19-17 24" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2"/>
${emblem}${pips}</svg>`;
}

export function rankName(tier, t) {
  const r = RANKS[clamp(tier, 0, LEGEND)];
  return `${t(`rank.${r.key}`)}${r.division ? ` ${ROMAN[r.division]}` : ''}`;
}
