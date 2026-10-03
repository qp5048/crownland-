import { GAME } from '../config.js';

/** A participant in the match: the human, a bot or a scripted tutorial dummy. */
export class Player {
  constructor(id, { name = 'Player', isHuman = false, look = null, controller = null } = {}) {
    this.id = id;
    this.name = name;
    this.isHuman = isHuman;
    this.look = look;             // { skin, hat, trail } cosmetic ids + resolved defs
    this.controller = controller; // { update(world, player, dt) }
    this.alive = false;

    this.x = 0; this.y = 0;       // head position in cell units
    this.px = 0; this.py = 0;     // previous tick position (interpolation)
    this.cx = 0; this.cy = 0;     // current cell
    this.angle = 0;
    this.prevAngle = 0;
    this.targetAngle = 0;
    this.speed = GAME.speed;
    this.speedMul = 1;
    this.boostTime = 0;

    this.trail = [];              // cell indices of the open trail
    this.trailPts = [];           // flat [x0,y0,x1,y1,...] polyline for rendering
    this.entered = [];            // cells entered during the current tick
    this.hitWall = false;

    this.shield = 0;
    this.invuln = 0;
    this.deferDeath = false;      // keep territory on death (revive offer)
    this.pendingDeath = null;

    this.kills = 0;
    this.captures = 0;
    this.maxShare = 0;
    this.spawnTime = 0;
    this.deathTime = 0;
    this.deathCause = null;
    this.killerId = 0;
    this.bornAt = 0;
  }

  get outside() { return this.trail.length > 0; }
}
