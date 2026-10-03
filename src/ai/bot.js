import { GAME, GRID as G } from '../config.js';
import { angleDiff, clamp, TAU } from '../core/math.js';

/* ------------------------------------------------------------------ search */

const scratch = new WeakMap();
function bufs(grid) {
  let s = scratch.get(grid);
  if (!s) {
    s = { stamp: new Uint32Array(grid.n), parent: new Int32Array(grid.n), queue: new Int32Array(grid.n), gen: 0 };
    scratch.set(grid, s);
  }
  if (s.gen > 0xfffffff0) { s.stamp.fill(0); s.gen = 0; }
  s.gen++;
  return s;
}

/** 4-connected BFS; returns the cell path start → goal (inclusive) or null. */
export function bfs(grid, start, isGoal, passable, maxNodes = 6000) {
  const s = bufs(grid);
  const { stamp, parent, queue } = s;
  const gen = s.gen, w = grid.w, n = grid.n;
  let head = 0, tail = 0;
  stamp[start] = gen; parent[start] = -1; queue[tail++] = start;
  let found = -1;
  const visit = (j, from) => {
    if (stamp[j] === gen || !passable(j)) return;
    stamp[j] = gen; parent[j] = from; queue[tail++] = j;
  };
  while (head < tail && tail < maxNodes) {
    const i = queue[head++];
    if (i !== start && isGoal(i)) { found = i; break; }
    const x = i % w;
    if (x > 0) visit(i - 1, i);
    if (x < w - 1) visit(i + 1, i);
    if (i >= w) visit(i - w, i);
    if (i < n - w) visit(i + w, i);
  }
  if (found < 0) return null;
  const path = [];
  for (let c = found; c !== -1; c = parent[c]) path.push(c);
  return path.reverse();
}

/* -------------------------------------------------------------- controller */

/**
 * State-machine bot:
 *  home    — inside own land, picks the next plan (loop or hunt)
 *  expand  — follows a rectangular loop of waypoints outside its land
 *  return  — races home along a BFS path that avoids its own trail
 *  hunt    — goes for an enemy trail it can reach before the owner gets home
 * Every tick a short look-ahead (simulating its own turning arc) steers it away
 * from walls, its own trail and enemy heads unless it is in a "blind" moment.
 */
export class BotController {
  constructor(profile, rng) {
    this.prof = profile;
    this.rng = rng;
    this.state = 'home';
    this.wps = [];
    this.prey = null;
    this.goal = null;
    this.decideIn = rng.float(0, profile.reaction);
    this.blindT = 0;
    this.noiseVal = 0;
    this.trailLimit = 40 * G;
    this.near = [];
    this.forceHunt = null; // tutorial / scripted override
  }

  update(world, me, dt) {
    if (this.blindT > 0) this.blindT -= dt;
    this.decideIn -= dt;
    if (this.decideIn <= 0) {
      this.decideIn = this.prof.reaction * this.rng.float(0.75, 1.25);
      this.decide(world, me);
    }
    let want = this.wantAngle(world, me);
    if (this.blindT <= 0) want = this.avoid(world, me, want);
    me.targetAngle = want;
  }

  // ------------------------------------------------------------ decisions

  decide(world, me) {
    const g = world.grid;
    const prof = this.prof;
    const rng = this.rng;
    if (prof.mistakeRate > 0 && rng.chance(prof.mistakeRate * prof.reaction)) this.blindT = rng.float(0.3, 0.65);
    this.noiseVal = rng.float(-1, 1) * prof.noise;
    const atHome = g.owner[g.idx(me.cx, me.cy)] === me.id;

    if (atHome) {
      if (this.state === 'return' || (this.state === 'expand' && this.leftHome) || (this.state === 'hunt' && this.leftHome)) {
        this.state = 'home';
        this.wps.length = 0;
        this.prey = null;
      }
      this.leftHome = false;
      if (this.state === 'hunt' && this.refreshPrey(world, me)) return;
      const prey = this.findPrey(world, me);
      if (prey && (prey.defend || rng.chance(prof.aggression))) {
        this.state = 'hunt'; this.prey = prey; this.wps.length = 0;
        return;
      }
      if (!this.wps.length || this.state !== 'expand') this.planLoop(world, me);
      this.state = 'expand';
      return;
    }

    // ---- outside own land: judge the risk first
    this.leftHome = true;
    const path = this.homePath(world, me);
    const homeDist = path ? path.length - 1 : 999;
    const threat = this.threatDistance(world, me);
    let mustReturn = homeDist + prof.caution >= threat || me.trail.length > this.trailLimit;

    if (this.state === 'hunt') {
      if (!mustReturn && this.refreshPrey(world, me)) return;
      mustReturn = true;
    }
    if (this.state === 'expand') {
      if (!this.wps.length) mustReturn = true;
      else if (!mustReturn) {
        const prey = this.findPrey(world, me);
        if (prey && prey.dist <= 4 * G && rng.chance(prof.aggression)) {
          this.state = 'hunt'; this.prey = prey;
          return;
        }
      }
    }
    if (mustReturn || this.state === 'return' || this.state === 'home') {
      this.state = 'return';
      this.prey = null;
      this.setReturnGoal(world, me, path);
    }
  }

  homePath(world, me) {
    const g = world.grid;
    const id = me.id;
    const grace = me.trail.length - 1 - GAME.selfGrace;
    return bfs(
      g,
      g.idx(me.cx, me.cy),
      (i) => g.owner[i] === id,
      (i) => g.trail[i] !== id || g.trailSeq[i] > grace,
      9000 * G * G,
    );
  }

  setReturnGoal(world, me, path) {
    if (!path || path.length < 2) {
      // trapped or already there: steer towards the nearest own cell by raw distance
      this.goal = null;
      return;
    }
    const g = world.grid;
    let k = Math.min(4 * G, path.length - 1);
    for (; k > 1; k--) {
      const c = path[k];
      if (this.clearLine(world, me, (c % g.w) + 0.5, ((c / g.w) | 0) + 0.5)) break;
    }
    const c = path[k];
    this.goal = { x: (c % g.w) + 0.5, y: ((c / g.w) | 0) + 0.5 };
  }

  clearLine(world, me, tx, ty) {
    const g = world.grid;
    const dx = tx - me.x, dy = ty - me.y;
    const len = Math.hypot(dx, dy);
    const steps = Math.ceil(len / 0.4);
    const grace = me.trail.length - 1 - GAME.selfGrace;
    for (let s = 1; s <= steps; s++) {
      const x = me.x + (dx * s) / steps, y = me.y + (dy * s) / steps;
      const cx = Math.floor(x), cy = Math.floor(y);
      if (!g.inside(cx, cy)) return false;
      const i = g.idx(cx, cy);
      if (g.trail[i] === me.id && g.trailSeq[i] <= grace) return false;
    }
    return true;
  }

  /** How many cells the closest enemy needs to touch my trail or head. */
  threatDistance(world, me) {
    let best = Infinity;
    const g = world.grid, w = g.w;
    const tr = me.trail;
    for (const e of world.players) {
      if (e === me || !e.alive) continue;
      let d = Math.hypot(e.x - me.x, e.y - me.y);
      for (let k = 0; k < tr.length; k += 2) {
        const c = tr[k];
        const dd = Math.hypot(e.x - ((c % w) + 0.5), e.y - (((c / w) | 0) + 0.5));
        if (dd < d) d = dd;
      }
      d *= (me.speed * me.speedMul) / (e.speed * e.speedMul);
      if (d < best) best = d;
    }
    return best;
  }

  /** Best enemy trail to attack, or null. */
  findPrey(world, me) {
    if (this.forceHunt) {
      const e = this.forceHunt;
      if (e.alive && e.trail.length) return this.preyInfo(world, me, e, true);
      return null;
    }
    const prof = this.prof;
    const g = world.grid;
    let best = null, bestScore = 0;
    for (const e of world.players) {
      if (e === me || !e.alive || !e.trail.length) continue;
      const info = this.preyInfo(world, me, e, false);
      const range = prof.huntRange * (e.isHuman ? 1 + prof.playerBias * 0.6 : 1);
      if (!info.defend && info.dist > range) continue;
      // the owner's distance back to where it left its land
      const s = e.trail[0];
      const eRet = Math.hypot(e.x - ((s % g.w) + 0.5), e.y - (((s / g.w) | 0) + 0.5));
      const ratio = (me.speed * me.speedMul) / (e.speed * e.speedMul);
      const feasible = info.defend || info.dist / ratio < eRet + (2 + prof.aggression * 4) * G;
      if (!feasible) continue;
      const value = (e.isHuman ? 1 + prof.playerBias * 2 : 1) * (1 + e.trail.length / (25 * G)) * (info.defend ? 2.5 : 1);
      const score = value / (info.dist + 2 * G);
      if (score > bestScore) { bestScore = score; best = info; }
    }
    return best;
  }

  preyInfo(world, me, e, forced) {
    const g = world.grid, w = g.w;
    let dist = Infinity, cell = -1, defend = false;
    for (const c of e.trail) {
      const d = Math.hypot(me.x - ((c % w) + 0.5), me.y - (((c / w) | 0) + 0.5));
      if (d < dist) { dist = d; cell = c; }
      if (g.owner[c] === me.id && d < 14 * G) defend = true;
    }
    return { player: e, cell, dist, defend: defend || forced };
  }

  refreshPrey(world, me) {
    const prey = this.prey;
    if (!prey) return false;
    const e = prey.player;
    if (!e.alive || !e.trail.length) { this.prey = null; return false; }
    const info = this.preyInfo(world, me, e, !!this.forceHunt);
    if (!info.defend && info.dist > this.prof.huntRange * 1.6) { this.prey = null; return false; }
    this.prey = info;
    return true;
  }

  planLoop(world, me) {
    const g = world.grid;
    const prof = this.prof;
    const rng = this.rng;
    let nearEnemy = Infinity;
    for (const e of world.players) {
      if (e !== me && e.alive) nearEnemy = Math.min(nearEnemy, Math.hypot(e.x - me.x, e.y - me.y));
    }
    const safety = clamp(nearEnemy / (18 * G), 0.45, 1);
    const share = g.counts[me.id] / g.n;
    const sizeBoost = 1 + Math.min(0.6, share * 4);
    let best = null, bestScore = -Infinity;
    const base = rng.float(0, TAU);
    for (let k = 0; k < 12; k++) {
      const th = base + (k * TAU) / 12;
      const ex = this.exitAlong(world, me, th);
      if (!ex) continue;
      const cand = this.makeLoop(world, me, ex.x, ex.y, th, safety * sizeBoost);
      if (!cand) continue;
      const turn = Math.abs(angleDiff(me.angle, th));
      const score = cand.value / ((cand.len + ex.d * 0.6) / G + 4) - turn * 0.25 + rng.float(0, 0.35);
      if (score > bestScore) { bestScore = score; best = cand; }
    }
    if (!best) {
      // deep inside a large territory: head for the nearest border first
      const path = bfs(g, g.idx(me.cx, me.cy), (i) => g.owner[i] !== me.id, () => true, 30000 * G * G);
      if (path) {
        const c = path[path.length - 1];
        const x = (c % g.w) + 0.5, y = ((c / g.w) | 0) + 0.5;
        const th = Math.atan2(y - me.y, x - me.x);
        best = this.makeLoop(world, me, x, y, th, safety * sizeBoost) || { wps: [{ x, y }], len: 1 };
      }
    }
    this.wps = best ? best.wps : [];
    const len = best ? best.len : 20 * G;
    this.trailLimit = Math.round(len * 1.9 + 10 * G);
  }

  exitAlong(world, me, th) {
    const g = world.grid;
    const dx = Math.cos(th) * 0.5, dy = Math.sin(th) * 0.5;
    let x = me.x, y = me.y;
    for (let d = 0; d < 34 * G; d += 0.5) {
      const cx = Math.floor(x), cy = Math.floor(y);
      if (!g.inside(cx, cy)) return null;
      if (g.owner[g.idx(cx, cy)] !== me.id) return { x, y, d };
      x += dx; y += dy;
    }
    return null;
  }

  makeLoop(world, me, ex, ey, th, scale) {
    const rng = this.rng;
    const prof = this.prof;
    const size = world.size;
    const dx = Math.cos(th), dy = Math.sin(th);
    let L = rng.float(4, 9) * G * prof.loopScale * scale;
    let W = rng.float(3, 8) * G * prof.loopScale * scale;
    const sides = rng.chance(0.5) ? [1, -1] : [-1, 1];
    const m = 2.5 * G;
    const ok = (x, y) => x > m && y > m && x < size - m && y < size - m;
    for (let attempt = 0; attempt < 3; attempt++) {
      for (const s of sides) {
        const px = -dy * s, py = dx * s;
        const w1 = { x: ex + dx * L, y: ey + dy * L };
        const w2 = { x: w1.x + px * W, y: w1.y + py * W };
        if (!ok(ex, ey) || !ok(w1.x, w1.y) || !ok(w2.x, w2.y)) continue;
        // value = cells we don't own inside the rectangle (enemy land is juicier)
        const g = world.grid;
        let value = 0;
        for (let u = 0.5 * G; u < L; u += 1.5 * G) {
          for (let v = 0.5 * G; v < W; v += 1.5 * G) {
            const cx = Math.floor(ex + dx * u + px * v), cy = Math.floor(ey + dy * u + py * v);
            if (!g.inside(cx, cy)) continue;
            const o = g.owner[g.idx(cx, cy)];
            if (o === me.id) continue;
            value += o ? (prof.personality === 'greedy' ? 1.7 : 1.3) : 1;
          }
        }
        value *= 2.25; // each sample stands for 1.5 × 1.5 units (value is in unit²)
        // keep clear of other players' heads near the far corners
        for (const e of world.players) {
          if (e === me || !e.alive) continue;
          const d = Math.min(Math.hypot(e.x - w1.x, e.y - w1.y), Math.hypot(e.x - w2.x, e.y - w2.y));
          if (d < 8 * G) value -= ((8 * G - d) / G) * 3;
        }
        return { wps: [w1, w2], len: 2 * (L + W), value };
      }
      L *= 0.65; W *= 0.65;
    }
    return null;
  }

  // --------------------------------------------------------------- steering

  wantAngle(world, me) {
    let tx, ty;
    if (this.state === 'hunt' && this.prey && this.prey.cell >= 0) {
      const w = world.grid.w;
      tx = (this.prey.cell % w) + 0.5; ty = ((this.prey.cell / w) | 0) + 0.5;
    } else if (this.state === 'return') {
      if (this.goal) { tx = this.goal.x; ty = this.goal.y; }
      else return me.angle;
    } else if (this.wps.length) {
      const wp = this.wps[0];
      if (Math.hypot(wp.x - me.x, wp.y - me.y) < 1.3 * G) {
        this.wps.shift();
        if (!this.wps.length && me.trail.length) { this.state = 'return'; this.decideIn = 0; }
        return me.angle;
      }
      tx = wp.x; ty = wp.y;
    } else {
      return me.angle;
    }
    if (this.state === 'return' && this.goal && Math.hypot(tx - me.x, ty - me.y) < 0.6 * G) this.decideIn = 0;
    return Math.atan2(ty - me.y, tx - me.x) + this.noiseVal;
  }

  avoid(world, me, want) {
    // collect nearby enemy heads once per tick
    const near = this.near;
    near.length = 0;
    if (me.trail.length) {
      for (const e of world.players) {
        if (e !== me && e.alive && Math.abs(e.x - me.x) < 7 * G && Math.abs(e.y - me.y) < 7 * G) near.push(e);
      }
    }
    const t0 = this.ttc(world, me, want);
    if (t0 === Infinity) return want;
    let bestA = want, bestT = t0;
    for (let k = 1; k <= 8; k++) {
      for (let s = -1; s <= 1; s += 2) {
        const a = want + s * k * 0.39;
        const t = this.ttc(world, me, a);
        if (t === Infinity) return a;
        if (t > bestT) { bestT = t; bestA = a; }
      }
    }
    return bestA;
  }

  /** Time until the simulated arc towards angle `a` hits something (Infinity = clear). */
  ttc(world, me, a) {
    const g = world.grid;
    const sp = me.speed * me.speedMul;
    const step = Math.min(0.05, 0.45 / sp); // samples ≤ ~0.45 cells apart
    const T = this.prof.lookahead;
    const maxTurn = GAME.turnRate * step;
    const size = world.size;
    const grace = me.trail.length - 1 - GAME.selfGrace - 1;
    let x = me.x, y = me.y, ang = me.angle;
    for (let t = step; t <= T + 1e-9; t += step) {
      ang += clamp(angleDiff(ang, a), -maxTurn, maxTurn);
      x += Math.cos(ang) * sp * step;
      y += Math.sin(ang) * sp * step;
      const wm = 0.7 * G;
      if (x < wm || y < wm || x > size - wm || y > size - wm) return t;
      // test a small box around the head, not just the centre cell: the real
      // head enters every cell its path grazes, including corners
      for (let c = 0; c < 4; c++) {
        const i = g.idx(Math.floor(x + (c & 1 ? 0.32 : -0.32)), Math.floor(y + (c & 2 ? 0.32 : -0.32)));
        if (g.trail[i] === me.id && g.trailSeq[i] <= grace && g.owner[i] !== me.id) return t;
      }
      for (const e of this.near) {
        const ddx = e.x - x, ddy = e.y - y;
        if (ddx * ddx + ddy * ddy < 1.6 * G * G) return t;
      }
    }
    return Infinity;
  }
}
