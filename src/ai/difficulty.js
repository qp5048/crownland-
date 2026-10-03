import { GRID } from '../config.js';
import { clamp, lerp } from '../core/math.js';

export const PERSONALITIES = ['balanced', 'cautious', 'aggressive', 'greedy'];

/**
 * Turn a difficulty level and a personality into concrete bot parameters.
 *   0 … 1     very easy → strong (normal lobbies use 0.12–0.45)
 *   1 … 1.25  "elite" range used by high ranked tiers: near-instant reactions,
 *             relentless hunting of the player, almost no mistakes
 * Everything is a smooth lerp so ranks feel gradual. Distances are in cells.
 */
export function botProfile(level, personality = 'balanced') {
  const L = clamp(level, 0, 1);
  const E = clamp((level - 1) / 0.25, 0, 1);
  const p = {
    level: clamp(level, 0, 1.25),
    personality,
    reaction: lerp(lerp(0.3, 0.07, L), 0.045, E),      // seconds between decisions
    lookahead: lerp(lerp(0.42, 0.85, L), 0.95, E),     // seconds of path checked for obstacles
    mistakeRate: L > 0.7 ? 0 : lerp(0.09, 0.0, L / 0.7), // chance/s of a blind moment
    aggression: lerp(lerp(0.15, 0.75, L), 0.92, E),    // probability of choosing to hunt
    caution: lerp(lerp(-1.5, 3.5, L), 4, E),           // safety margin (units) when racing home
    loopScale: lerp(lerp(0.8, 1.2, L), 1.3, E),
    huntRange: lerp(lerp(7, 22, L), 30, E),            // units
    playerBias: lerp(lerp(0.1, 0.85, L), 1.2, E),      // preference for hunting the human
    noise: lerp(lerp(0.24, 0.02, L), 0.01, E),         // steering inaccuracy, radians
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
  p.caution *= GRID;
  p.huntRange *= GRID;
  return p;
}

/** Normal mode: a mixed lobby that is friendly but not brain-dead. */
export function normalLevel(rng) { return rng.float(0.12, 0.45); }
