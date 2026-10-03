import { clamp, lerp } from '../core/math.js';

export const PERSONALITIES = ['balanced', 'cautious', 'aggressive', 'greedy'];

/**
 * Turn a difficulty level (0 = very easy … 1 = Legend) and a personality into
 * concrete bot parameters. Everything is a smooth lerp so ranks feel gradual.
 */
export function botProfile(level, personality = 'balanced') {
  const L = clamp(level, 0, 1);
  const p = {
    level: L,
    personality,
    reaction: lerp(0.3, 0.07, L),      // seconds between decisions
    lookahead: lerp(0.42, 0.85, L),    // seconds of path checked for obstacles
    mistakeRate: L > 0.7 ? 0 : lerp(0.09, 0.0, L / 0.7), // chance/s of a blind moment
    aggression: lerp(0.15, 0.75, L),   // probability of choosing to hunt
    caution: lerp(-1.5, 3.5, L),       // safety margin in cells when racing home
    loopScale: lerp(0.8, 1.2, L),
    huntRange: lerp(7, 22, L),
    playerBias: lerp(0.1, 0.85, L),    // preference for hunting the human
    noise: lerp(0.24, 0.02, L),        // steering inaccuracy, radians
  };
  switch (personality) {
    case 'cautious':
      p.caution += 2; p.loopScale *= 0.8; p.aggression *= 0.6; break;
    case 'aggressive':
      p.aggression = Math.min(0.95, p.aggression * 1.6); p.huntRange *= 1.3; p.caution -= 0.5; break;
    case 'greedy':
      p.loopScale *= 1.45; p.caution -= 1; p.aggression *= 0.8; break;
    default: break;
  }
  return p;
}

/** Normal mode: a mixed lobby that is friendly but not brain-dead. */
export function normalLevel(rng) { return rng.float(0.12, 0.45); }
