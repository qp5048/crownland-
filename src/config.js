// Global tuning constants. Everything gameplay-related that a designer may want
// to tweak lives here so balance changes never require touching the systems.

export const TICK_RATE = 60;            // fixed simulation steps per second
export const DT = 1 / TICK_RATE;
export const MAX_FRAME_STEPS = 6;       // avoid spiral of death after a long frame
export const MAX_SLOTS = 32;            // player ids are 1..MAX_SLOTS (0 = nobody)

/**
 * Territory resolution: grid cells per world unit (a player's head is one unit
 * wide). A finer grid makes land follow the drawn trail and spawn discs
 * properly round. All distances below are in cells.
 */
export const GRID = 3;
const U = (units) => units * GRID;

export const GAME = {
  speed: U(5.4),          // 5.4 units per second
  turnRate: 5.4,          // radians per second (turn radius ≈ 1 unit)
  startRadius: U(3.2),    // radius of spawn territory
  bigStartShare: 0.01,    // "Big Start" boost: start with 1% of the map
  trailPointStep: U(0.33),// polyline resolution of the rendered trail
  selfGrace: U(3),        // own trail cells this recent never kill you
  headOnDist: U(0.85),    // head to head collision distance
  headSize: U(1.02),      // drawn head size
  speedBoostMul: 2,       // "Speed Rush" doubles the speed
  speedBoostTime: 6,      // seconds
  reviveInvuln: 2.5,      // seconds of protection after "continue"
  respawnDelay: [2.5, 6], // seconds before a dead bot is replaced
  noRespawnAbove: 0.75,   // stop replacing bots once the player owns this share
  waveSpeed: U(26),       // capture / transfer waves
  rankedQuitPenalty: 100, // rank points lost for leaving a ranked match
};

export const MAPS = {
  normal: { size: U(128), bots: 11 },
  tutorial: { size: U(64), bots: 0 },
};

export const ECONOMY = {
  coinsPerPercent: 4,     // per 1% of best territory share
  coinsPerKill: 15,
  secondsPerCoin: 5,      // survival time
  winBonus: 400,
  rankedMultiplier: 0.5,
  magnetMultiplier: 1.5,
  tutorialReward: 200,    // enough for a first Common skin plus change
};

export const ADS = {
  midgameMinInterval: 180,   // seconds between two midgame ads
  midgameMinMatches: 2,      // no midgame before the 2nd finished match
  premiumPassViews: 7,
};

export const SAVE_KEY = 'crownland.save';
export const SAVE_VERSION = 3;
