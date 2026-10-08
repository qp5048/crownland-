import * as THREE from 'three';
import { buildBlade, disposeBlade } from './skins.js';
import { angDiff, clamp, TAU } from './util.js';

export const P = {
  G: 24,
  JUMP: 9.0,
  VX: 4.2,
  FLIP_T: 0.5,
  TIP: 1.05,
  BUTT: -0.55,
  EMBED: 0.2,
  M: 1,
  I: 0.24,
  REST: 0.32,
  MU: 0.5,
};

// sample points along the blade axis used for collisions
const PTS = [
  { u: P.TIP, tip: true },
  { u: 0.55 },
  { u: 0.0 },
  { u: P.BUTT },
];

// smooth in-out flip: the blade winds up, spins, then settles
const easeOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export class Blade {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.model = null;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.a = -Math.PI / 2;
    this.w = 0;
    this.stuck = null;
    this.flipT = 99;
    this.flipStart = 0;
    this.flipTurns = 1;
    this.airTime = 0;
    this.airTaps = 0;
    this.contactT = 0;
    this.groundT = 0;
    this.groundY = 0;
    this.ignore = null;
    this.ignoreT = 0;
    this.speedMul = 1;
    this.ragdoll = false;
    this.prev = { x: 0, y: 0, a: 0 };
    this.trail = new Trail(scene);
    // shield bubble
    this.bubble = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 24, 16),
      new THREE.MeshStandardMaterial({ color: '#9fe2ff', transparent: true, opacity: 0.3, roughness: 0.05, metalness: 0.2, depthWrite: false }),
    );
    this.bubble.visible = false;
    scene.add(this.bubble);
    // fever glow
    this.glow = null;
  }

  setSkin(skin) {
    if (this.model) {
      this.group.remove(this.model);
      disposeBlade(this.model);
    }
    this.skin = skin;
    this.model = buildBlade(skin);
    this.group.add(this.model);
    this.trail.setColor(skin.trail);
  }

  reset(x, top) {
    this.x = x;
    this.a = -Math.PI / 2 + 0.12;
    this.y = top + P.TIP - P.EMBED;
    this.vx = this.vy = this.w = 0;
    this.stuck = { solid: null, n: [0, 1] };
    this.flipT = 99;
    this.airTaps = 0;
    this.groundY = this.y;
    this.trail.clear();
    this.sync();
  }

  dir() {
    return [Math.cos(this.a), Math.sin(this.a)];
  }

  point(u) {
    return [this.x + Math.cos(this.a) * u, this.y + Math.sin(this.a) * u];
  }

  prevPoint(u) {
    return [this.prev.x + Math.cos(this.prev.a) * u, this.prev.y + Math.sin(this.prev.a) * u];
  }

  velAt(u) {
    const rx = Math.cos(this.a) * u, ry = Math.sin(this.a) * u;
    return [this.vx - this.w * ry, this.vy + this.w * rx];
  }

  tipSpeed() {
    const [vx, vy] = this.velAt(P.TIP);
    return Math.hypot(vx, vy);
  }

  get flipping() {
    return this.flipT < P.FLIP_T * this.flipTurns;
  }

  // a tap: hop + forward flip
  hop(opts = {}) {
    const fromGround = !!this.stuck || this.groundT < 0.08;
    const solid = this.stuck && this.stuck.solid;
    const wallStick = this.stuck && Math.abs(this.stuck.n[0]) > 0.5;
    if (this.stuck) {
      this.ignore = solid;
      this.ignoreT = 0.14;
    }
    this.stuck = null;
    if (fromGround || opts.pad) this.airTaps = 0;
    else this.airTaps++;
    // every extra tap in the air is weaker: after ~7 taps the blade has to land
    let airK = fromGround || opts.pad ? 1 : Math.max(0, 0.97 - this.airTaps * 0.12);
    // air taps can't lift the blade more than ~6.5 units above the last ground it touched
    if (!fromGround && !opts.pad) airK *= clamp((this.groundY + 6.5 - this.y) / 2.5, 0, 1);
    this.vy = (opts.vy || P.JUMP) * airK * (wallStick ? 1.05 : 1);
    const vx = (opts.vx !== undefined ? opts.vx : P.VX) * this.speedMul;
    this.vx = wallStick ? Math.min(vx, 1.2) : vx;
    if (wallStick) this.x -= 0.05;
    this.y += 0.04;
    this.flipT = 0;
    this.flipStart = this.a;
    this.flipTurns = opts.turns || 1;
    this.airTime = 0;
  }

  bounceUp(vy = 9) {
    this.stuck = null;
    this.vy = vy;
    this.vx = Math.max(this.vx, 2);
    this.flipT = 0;
    this.flipStart = this.a;
    this.flipTurns = 1;
  }

  // physics substep. returns an event string or null
  step(dt, level) {
    this.ignoreT -= dt;
    if (this.ignoreT <= 0) this.ignore = null;

    if (this.stuck) {
      const s = this.stuck.solid;
      if (s && (!s.active || s.sinking)) {
        this.stuck = null;
        this.vy = 0;
        return null;
      }
      return null;
    }

    this.prev.x = this.x;
    this.prev.y = this.y;
    this.prev.a = this.a;
    this.airTime += dt;
    this.contactT += dt;
    this.groundT += dt;

    this.vy -= P.G * dt;
    this.vx *= 1 - 0.15 * dt;

    if (this.flipping) {
      this.flipT += dt;
      const T = P.FLIP_T * this.flipTurns;
      const k = easeOut(Math.min(1, this.flipT / T));
      const na = this.flipStart - TAU * this.flipTurns * k;
      this.w = (na - this.a) / dt;
      this.a = na;
    } else if (this.contactT > 0.12 && !this.ragdoll) {
      // airborne: settle into a tip-down "dart" pose leaning slightly forward
      const target = -Math.PI / 2 + 0.22;
      const d = angDiff(target, this.a);
      this.w += (d * 70 - this.w * 13) * dt;
      this.a += this.w * dt;
    } else {
      this.w *= 1 - 2.5 * dt;
      this.a += this.w * dt;
    }

    this.x += this.vx * dt;
    this.y += this.vy * dt;

    // collisions with solids
    let event = null;
    for (let iter = 0; iter < 2; iter++) {
      for (const pt of PTS) {
        const [px, py] = this.point(pt.u);
        for (const s of level.solids) {
          if (!s.active || s === this.ignore) continue;
          if (px <= s.x0 || px >= s.x1 || py <= s.y0 || py >= s.y1) continue;
          const [ppx, ppy] = this.prevPoint(pt.u);
          const [nx, ny, depth] = face(s, px, py, ppx, ppy);
          if (pt.tip && s.stick && !this.ragdoll) {
            const [dx, dy] = this.dir();
            const cosA = -(dx * nx + dy * ny);
            const [tvx, tvy] = this.velAt(pt.u);
            const vin = -(tvx * nx + tvy * ny);
            const need = ny > 0.5 ? 0.72 : 0.5;
            if (cosA > need && vin > 0.6) {
              this.stick(s, nx, ny, depth);
              return s.kind === 'ground' ? (cosA > 0.985 ? 'perfect' : 'stick') : 'stickWood';
            }
          }
          if (this.resolve(pt.u, nx, ny, depth)) event = event || 'bounce';
        }
      }
    }
    return event;
  }

  stick(s, nx, ny, depth) {
    const push = depth - P.EMBED;
    this.x += nx * push;
    this.y += ny * push;
    this.vx = this.vy = this.w = 0;
    this.flipT = 99;
    this.stuck = { solid: s, n: [nx, ny] };
    this.airTaps = 0;
    this.contactT = 0;
    this.groundT = 0;
    this.groundY = this.y;
  }

  resolve(u, nx, ny, depth) {
    const rx = Math.cos(this.a) * u, ry = Math.sin(this.a) * u;
    let vpx = this.vx - this.w * ry, vpy = this.vy + this.w * rx;
    const vn = vpx * nx + vpy * ny;
    this.x += nx * depth;
    this.y += ny * depth;
    this.contactT = 0;
    if (ny > 0.5) {
      this.groundT = 0;
      this.groundY = this.y;
    }
    if (vn >= 0) return false;
    // any hard contact cancels the scripted flip
    this.flipT = 99;
    const e = vn < -2.5 ? P.REST : 0;
    const rn = rx * ny - ry * nx;
    const k = 1 / P.M + (rn * rn) / P.I;
    const j = (-(1 + e) * vn) / k;
    this.vx += (j * nx) / P.M;
    this.vy += (j * ny) / P.M;
    this.w += (rn * j) / P.I;
    // friction
    const tx = -ny, ty = nx;
    vpx = this.vx - this.w * ry;
    vpy = this.vy + this.w * rx;
    const vt = vpx * tx + vpy * ty;
    const rt = rx * ty - ry * tx;
    const kt = 1 / P.M + (rt * rt) / P.I;
    const jt = clamp(-vt / kt, -P.MU * j, P.MU * j);
    this.vx += (jt * tx) / P.M;
    this.vy += (jt * ty) / P.M;
    this.w += (rt * jt) / P.I;
    this.w = clamp(this.w, -30, 30);
    return vn < -1.5;
  }

  sync() {
    this.group.position.set(this.x, this.y, 0);
    this.group.rotation.set(0, 0, this.a);
    if (this.bubble.visible) {
      this.bubble.position.set(this.x + Math.cos(this.a) * 0.25, this.y + Math.sin(this.a) * 0.25, 0);
    }
  }

  updateTrail(dt, active, time) {
    const [tx, ty] = this.point(P.TIP);
    const [gx, gy] = this.point(0.8);
    this.trail.push(tx, ty, gx, gy, active, dt, time);
  }
}

function face(s, px, py, ppx, ppy) {
  if (ppy >= s.y1 - 1e-4) return [0, 1, s.y1 - py];
  if (ppx <= s.x0 + 1e-4) return [-1, 0, px - s.x0];
  if (ppx >= s.x1 - 1e-4) return [1, 0, s.x1 - px];
  if (ppy <= s.y0 + 1e-4) return [0, -1, py - s.y0];
  const dTop = s.y1 - py, dL = px - s.x0, dR = s.x1 - px, dB = py - s.y0;
  const m = Math.min(dTop, dL, dR, dB);
  if (m === dTop) return [0, 1, dTop];
  if (m === dL) return [-1, 0, dL];
  if (m === dR) return [1, 0, dR];
  return [0, -1, dB];
}

// ---------------------------------------------------------------------------
// Swoosh ribbon behind the blade
// ---------------------------------------------------------------------------
const TRAIL_N = 18;
class Trail {
  constructor(scene) {
    this.pts = [];
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(TRAIL_N * 2 * 3);
    this.col = new Float32Array(TRAIL_N * 2 * 4);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 4));
    const idx = [];
    for (let i = 0; i < TRAIL_N - 1; i++) {
      const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
      idx.push(a, b, c, b, d, c);
    }
    geo.setIndex(idx);
    this.mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.NormalBlending });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 5;
    scene.add(this.mesh);
    this.color = new THREE.Color('#ffffff');
    this.rainbow = false;
    this.fire = false;
  }

  setColor(c) {
    this.rainbow = c === 'rainbow';
    this.color.set(this.rainbow ? '#ffffff' : c);
  }

  clear() {
    this.pts.length = 0;
  }

  push(tx, ty, gx, gy, active, dt, time) {
    if (active) this.pts.unshift({ tx, ty, gx, gy, life: 1 });
    for (const p of this.pts) p.life -= dt * 5;
    while (this.pts.length > TRAIL_N || (this.pts.length && this.pts[this.pts.length - 1].life <= 0)) this.pts.pop();
    const n = this.pts.length;
    const tmp = new THREE.Color();
    for (let i = 0; i < TRAIL_N; i++) {
      const p = this.pts[Math.min(i, n - 1)];
      const o = i * 6, oc = i * 8;
      if (!p) {
        this.pos.fill(0, o, o + 6);
        this.col.fill(0, oc, oc + 8);
        continue;
      }
      this.pos[o] = p.tx; this.pos[o + 1] = p.ty; this.pos[o + 2] = 0.02;
      this.pos[o + 3] = p.gx; this.pos[o + 4] = p.gy; this.pos[o + 5] = 0.02;
      const f = i < n ? (1 - i / TRAIL_N) * Math.max(0, p.life) : 0;
      if (this.fire) tmp.setHSL(0.02 + (i / TRAIL_N) * 0.1, 1, 0.55);
      else if (this.rainbow) tmp.setHSL(((i / TRAIL_N) + time * 0.5) % 1, 0.9, 0.62);
      else tmp.copy(this.color);
      this.col[oc] = tmp.r; this.col[oc + 1] = tmp.g; this.col[oc + 2] = tmp.b; this.col[oc + 3] = f * 0.9;
      this.col[oc + 4] = tmp.r; this.col[oc + 5] = tmp.g; this.col[oc + 6] = tmp.b; this.col[oc + 7] = 0;
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
    this.mesh.geometry.attributes.color.needsUpdate = true;
  }
}
