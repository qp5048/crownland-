import { GAME, MAX_SLOTS } from '../config.js';
import { Emitter } from '../core/emitter.js';
import { angleDiff, clamp, TAU } from '../core/math.js';
import { Rng } from '../core/rng.js';
import { Grid } from './grid.js';
import { Player } from './player.js';

/**
 * Deterministic match simulation. Knows nothing about the DOM, rendering or
 * the economy: it moves players, resolves collisions and captures, and emits
 * events ('capture', 'death', 'transfer', 'shield', 'spawn') for other systems.
 */
export class World extends Emitter {
  constructor({ size = 128, transferOnKill = false, seed } = {}) {
    super();
    this.grid = new Grid(size, size);
    this.size = size;
    this.transferOnKill = transferOnKill;
    this.rng = new Rng(seed);
    this.time = 0;
    this.tickCount = 0;
    this.players = [];
    this.byId = new Array(MAX_SLOTS + 1).fill(null);
    this.deathQueue = [];
  }

  // ---------------------------------------------------------------- players

  freeSlot() {
    for (let id = 1; id <= MAX_SLOTS; id++) {
      const p = this.byId[id];
      if (!p) return id;
      if (!p.alive && !p.pendingDeath && this.grid.counts[id] === 0) return id;
    }
    return 0;
  }

  addPlayer(opts, spawn = {}) {
    const id = this.freeSlot();
    if (!id) return null;
    const old = this.byId[id];
    if (old) this.removePlayer(old);
    const p = new Player(id, opts);
    this.byId[id] = p;
    this.players.push(p);
    this.spawn(p, spawn);
    return p;
  }

  removePlayer(p) {
    this.grid.clearTrail(p.trail, p.id);
    if (this.grid.counts[p.id]) this.grid.reassignAll(p.id, 0);
    const i = this.players.indexOf(p);
    if (i >= 0) this.players.splice(i, 1);
    if (this.byId[p.id] === p) this.byId[p.id] = null;
  }

  alive() { return this.players.filter((p) => p.alive); }

  /** Score a candidate spawn: lower is better. */
  spawnCost(x, y, r) {
    const g = this.grid;
    let cost = 0;
    const R = Math.ceil(r + 3);
    for (let dy = -R; dy <= R; dy++) {
      for (let dx = -R; dx <= R; dx++) {
        const cx = Math.floor(x) + dx, cy = Math.floor(y) + dy;
        if (!g.inside(cx, cy)) { cost += 50; continue; }
        const i = g.idx(cx, cy);
        if (g.owner[i]) cost += 3;
        if (g.trail[i]) cost += 25;
      }
    }
    for (const p of this.players) {
      if (!p.alive) continue;
      const d = Math.hypot(p.x - x, p.y - y);
      if (d < 14) cost += (14 - d) * 12;
    }
    return cost;
  }

  findSpawnPoint(r) {
    const margin = r + 4;
    let best = null, bestCost = Infinity;
    for (let k = 0; k < 70; k++) {
      const x = this.rng.float(margin, this.size - margin);
      const y = this.rng.float(margin, this.size - margin);
      const c = this.spawnCost(x, y, r);
      if (c < bestCost) { bestCost = c; best = { x, y }; if (c === 0) break; }
    }
    return best;
  }

  /** Place a player on the map with a fresh disc of territory. */
  spawn(p, { x, y, radius = GAME.startRadius, angle } = {}) {
    if (x === undefined) ({ x, y } = this.findSpawnPoint(radius));
    x = Math.floor(clamp(x, radius + 1, this.size - radius - 1)) + 0.5;
    y = Math.floor(clamp(y, radius + 1, this.size - radius - 1)) + 0.5;
    const changed = [];
    this.grid.fillDisc(x, y, radius, p.id, changed);
    const cells = [], prev = [];
    for (let k = 0; k < changed.length; k += 2) { cells.push(changed[k]); prev.push(changed[k + 1]); }
    this.setFx(cells, prev, x, y, GAME.waveSpeed * 0.6);
    p.alive = true;
    p.pendingDeath = null;
    p.x = p.px = x; p.y = p.py = y;
    p.cx = Math.floor(x); p.cy = Math.floor(y);
    p.angle = p.prevAngle = p.targetAngle = angle ?? this.rng.float(0, TAU);
    p.trail.length = 0; p.trailPts.length = 0;
    p.spawnTime = this.time;
    if (!p.bornAt) p.bornAt = this.time;
    this.emit('spawn', { player: p });
    // stealing cells may have wiped someone's last bit of land
    this.checkHomeless(p);
    return p;
  }

  /** "Continue" after a death: put the player back where they died. */
  revive(p) {
    const r = 2.2;
    const x = clamp(p.x, r + 2, this.size - r - 2);
    const y = clamp(p.y, r + 2, this.size - r - 2);
    p.pendingDeath = null;
    p.deferDeath = false;
    const keepAngle = p.angle;
    this.spawn(p, { x, y, radius: r, angle: keepAngle });
    p.invuln = GAME.reviveInvuln;
  }

  setFx(cells, prev, ox, oy, speed) {
    const g = this.grid, w = g.w, t = this.time;
    const single = typeof prev === 'number';
    for (let k = 0; k < cells.length; k++) {
      const i = cells[k];
      const dx = (i % w) + 0.5 - ox, dy = ((i / w) | 0) + 0.5 - oy;
      g.fxPrev[i] = single ? prev : prev[k];
      g.fxAt[i] = t + Math.sqrt(dx * dx + dy * dy) / speed;
    }
  }

  // ------------------------------------------------------------- simulation

  tick(dt) {
    this.time += dt;
    this.tickCount++;
    const ps = this.players;

    for (const p of ps) {
      if (!p.alive) continue;
      p.px = p.x; p.py = p.y; p.prevAngle = p.angle;
      if (p.invuln > 0) p.invuln = Math.max(0, p.invuln - dt);
      if (p.boostTime > 0) {
        p.boostTime -= dt;
        if (p.boostTime <= 0) { p.boostTime = 0; p.speedMul = 1; }
      }
    }
    for (const p of ps) if (p.alive && p.controller) p.controller.update(this, p, dt);
    for (const p of ps) if (p.alive) this.move(p, dt);

    // ---- phase 2: lethal contacts, judged on the state before this tick's marks
    const g = this.grid;
    const q = this.deathQueue;
    q.length = 0;
    for (const p of ps) {
      if (!p.alive) continue;
      if (p.hitWall) q.push({ victim: p, killer: null, cause: 'wall' });
      for (const c of p.entered) {
        const t = g.trail[c];
        if (!t) continue;
        if (t !== p.id) {
          const v = this.byId[t];
          if (v && v.alive) q.push({ victim: v, killer: p, cause: 'cut' });
        } else if (g.owner[c] !== p.id && p.trail.length - 1 - g.trailSeq[c] >= GAME.selfGrace) {
          // (a trail cell that became our land through a ranked transfer just closes the loop)
          q.push({ victim: p, killer: p, cause: 'self' });
        }
      }
    }
    for (let a = 0; a < ps.length; a++) {
      const A = ps[a];
      if (!A.alive) continue;
      for (let b = a + 1; b < ps.length; b++) {
        const B = ps[b];
        if (!B.alive) continue;
        const dx = A.x - B.x, dy = A.y - B.y;
        if (dx * dx + dy * dy > GAME.headOnDist * GAME.headOnDist) continue;
        const aHome = g.owner[g.idx(A.cx, A.cy)] === A.id;
        const bHome = g.owner[g.idx(B.cx, B.cy)] === B.id;
        if (aHome && bHome) continue;
        if (!bHome) q.push({ victim: B, killer: A, cause: 'head' });
        if (!aHome) q.push({ victim: A, killer: B, cause: 'head' });
      }
    }
    if (q.length) this.resolveDeaths(q);

    // ---- phase 3: trails and captures for the survivors (rotating priority)
    const n = ps.length;
    const start = n ? this.tickCount % n : 0;
    for (let k = 0; k < n; k++) {
      const p = ps[(start + k) % n];
      if (!p.alive) continue;
      for (const c of p.entered) {
        if (!p.alive) break;
        if (g.owner[c] === p.id) {
          if (p.trail.length) this.closeTrail(p);
        } else {
          const t = g.trail[c];
          if (t === p.id) continue;
          if (t) {
            const other = this.byId[t];
            if (other && other.alive) continue; // protected trail (invulnerable owner)
          }
          if (!p.trail.length) {
            p.trailPts.length = 0;
            p.trailPts.push(p.px, p.py);
          }
          g.trail[c] = p.id;
          g.trailSeq[c] = p.trail.length;
          p.trail.push(c);
        }
      }
      if (p.alive && p.trail.length) {
        const pts = p.trailPts;
        const lx = pts[pts.length - 2], ly = pts[pts.length - 1];
        const dx = p.x - lx, dy = p.y - ly;
        if (dx * dx + dy * dy >= GAME.trailPointStep * GAME.trailPointStep) pts.push(p.x, p.y);
      }
    }

    for (const p of ps) {
      if (!p.alive) continue;
      const s = g.counts[p.id] / g.n;
      if (s > p.maxShare) p.maxShare = s;
    }
  }

  move(p, dt) {
    p.entered.length = 0;
    p.hitWall = false;
    const maxTurn = GAME.turnRate * dt;
    const d = angleDiff(p.angle, p.targetAngle);
    p.angle += clamp(d, -maxTurn, maxTurn);
    if (p.angle > Math.PI * 4 || p.angle < -Math.PI * 4) p.angle %= TAU;
    const sp = p.speed * p.speedMul * dt;
    const ox = p.x, oy = p.y;
    const nx = ox + Math.cos(p.angle) * sp;
    const ny = oy + Math.sin(p.angle) * sp;
    p.x = nx; p.y = ny;
    const ncx = Math.floor(nx), ncy = Math.floor(ny);
    const ocx = p.cx, ocy = p.cy;
    if (ncx === ocx && ncy === ocy) return;
    const g = this.grid;
    if (ncx !== ocx && ncy !== ocy) {
      // crossed a corner region: enter the intermediate cell first so the trail
      // stays 4-connected and nobody can slip diagonally through a trail
      const bx = Math.max(ncx, ocx), by = Math.max(ncy, ocy);
      const tx = (bx - ox) / (nx - ox), ty = (by - oy) / (ny - oy);
      const mx = tx < ty ? ncx : ocx, my = tx < ty ? ocy : ncy;
      if (!g.inside(mx, my)) { this.wallHit(p); return; }
      p.entered.push(g.idx(mx, my));
    }
    if (!g.inside(ncx, ncy)) { this.wallHit(p); return; }
    p.entered.push(g.idx(ncx, ncy));
    p.cx = ncx; p.cy = ncy;
  }

  wallHit(p) {
    p.hitWall = true;
    // keep the head on the map so a shielded / protected player can bounce off
    p.x = clamp(p.x, 0.02, this.size - 0.02);
    p.y = clamp(p.y, 0.02, this.size - 0.02);
    p.cx = clamp(Math.floor(p.x), 0, this.size - 1);
    p.cy = clamp(Math.floor(p.y), 0, this.size - 1);
  }

  bounce(p) {
    const nearX = p.x < 1.5 || p.x > this.size - 1.5;
    const nearY = p.y < 1.5 || p.y > this.size - 1.5;
    if (nearX) p.angle = Math.PI - p.angle;
    if (nearY) p.angle = -p.angle;
    if (!nearX && !nearY) p.angle += Math.PI;
    p.targetAngle = p.angle;
    p.x = clamp(p.x, 1, this.size - 1);
    p.y = clamp(p.y, 1, this.size - 1);
    p.cx = Math.floor(p.x); p.cy = Math.floor(p.y);
  }

  resolveDeaths(queue) {
    const victims = new Map();
    for (const e of queue) {
      const v = e.victim;
      if (!v.alive || victims.has(v)) continue;
      if (v.invuln > 0) { if (e.cause === 'wall') this.bounce(v); continue; }
      if (v.shield > 0 && e.cause !== 'head') {
        v.shield--;
        if (e.cause === 'wall') this.bounce(v);
        else this.dropTrail(v);
        this.emit('shield', { player: v, cause: e.cause });
        continue;
      }
      victims.set(v, e);
    }
    if (!victims.size) return;
    // mark everyone dead first so simultaneous kills never transfer land to a corpse
    for (const v of victims.keys()) v.alive = false;
    for (const [v, e] of victims) this.finishKill(v, e.killer, e.cause);
  }

  dropTrail(p) {
    this.grid.clearTrail(p.trail, p.id);
    p.trail.length = 0;
    p.trailPts.length = 0;
  }

  /** Public kill entry point (used by tests and scripted tutorial events). */
  kill(victim, killer, cause) {
    if (!victim.alive) return;
    victim.alive = false;
    this.finishKill(victim, killer, cause);
  }

  finishKill(v, killer, cause) {
    v.deathTime = this.time;
    v.deathCause = cause;
    v.killerId = killer && killer !== v ? killer.id : 0;
    this.dropTrail(v);
    v.boostTime = 0; v.speedMul = 1;
    if (killer && killer !== v) killer.kills++;
    if (v.deferDeath) {
      v.pendingDeath = { killer, cause };
    } else {
      this.releaseTerritory(v, killer);
    }
    this.emit('death', { victim: v, killer: killer && killer !== v ? killer : null, cause });
  }

  /** Territory of a dead player disappears, or goes to the killer in ranked. */
  releaseTerritory(v, killer) {
    v.pendingDeath = null;
    const to = this.transferOnKill && killer && killer !== v && killer.alive ? killer.id : 0;
    const cells = this.grid.reassignAll(v.id, to);
    this.setFx(cells, v.id, v.x, v.y, to ? GAME.waveSpeed * 0.8 : GAME.waveSpeed * 1.4);
    if (to && cells.length) {
      killer.captures++;
      this.emit('transfer', { from: v, to: killer, cells });
    }
    return cells;
  }

  closeTrail(p) {
    const res = this.grid.capture(p.id, p.trail);
    p.trail.length = 0;
    p.trailPts.length = 0;
    p.captures++;
    this.setFx(res.cells, res.prev, p.x, p.y, GAME.waveSpeed);
    const victims = this.checkHomeless(p);
    this.emit('capture', { player: p, cells: res.cells, prev: res.prev, victims });
  }

  /** Anyone whose land was entirely taken by `by` is eliminated. */
  checkHomeless(by) {
    const out = [];
    for (const q of this.players) {
      if (q === by || !q.alive) continue;
      if (this.grid.counts[q.id] === 0) {
        if (q.invuln > 0) continue;
        out.push(q);
      }
    }
    if (out.length) {
      for (const q of out) q.alive = false;
      for (const q of out) this.finishKill(q, by, 'engulf');
    }
    return out;
  }

  // --------------------------------------------------------------- queries

  ownerAt(x, y) {
    const cx = Math.floor(x), cy = Math.floor(y);
    if (!this.grid.inside(cx, cy)) return -1;
    return this.grid.owner[this.grid.idx(cx, cy)];
  }

  leaderboard() {
    const g = this.grid;
    return this.players
      .filter((p) => p.alive || p.pendingDeath)
      .map((p) => ({ player: p, share: g.counts[p.id] / g.n }))
      .sort((a, b) => b.share - a.share);
  }

  placeOf(p) {
    const g = this.grid;
    const mine = g.counts[p.id];
    let place = 1;
    for (const q of this.players) {
      if (q !== p && (q.alive || q.pendingDeath) && g.counts[q.id] > mine) place++;
    }
    return place;
  }
}
