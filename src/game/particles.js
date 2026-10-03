import { TAU } from '../core/math.js';

/**
 * Pooled particle system. Coordinates are in whatever space the caller uses
 * (world cells in the arena, pixels in the shop preview); `u` passed to the
 * emitters is the size of one cell in that space.
 */
const SHAPES = { circle: 0, star: 1, square: 2, heart: 3, spark: 4, petal: 5, ring: 6, flake: 7 };

export class Particles {
  constructor(max = 700) {
    this.max = max;
    this.n = 0;
    this.x = new Float32Array(max); this.y = new Float32Array(max);
    this.vx = new Float32Array(max); this.vy = new Float32Array(max);
    this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.size = new Float32Array(max); this.grav = new Float32Array(max);
    this.drag = new Float32Array(max); this.rot = new Float32Array(max);
    this.spin = new Float32Array(max); this.shape = new Uint8Array(max);
    this.color = new Array(max).fill('#fff');
    this.budget = 1; // 0..1 multiplier for low quality mode
  }

  spawn(x, y, vx, vy, life, size, color, shape = 'circle', grav = 0, drag = 0.9) {
    if (this.n >= this.max) return;
    const i = this.n++;
    this.x[i] = x; this.y[i] = y; this.vx[i] = vx; this.vy[i] = vy;
    this.life[i] = life; this.maxLife[i] = life; this.size[i] = size;
    this.color[i] = color; this.shape[i] = SHAPES[shape] ?? 0;
    this.grav[i] = grav; this.drag[i] = drag;
    this.rot[i] = Math.random() * TAU; this.spin[i] = (Math.random() - 0.5) * 6;
  }

  /** Probabilistic emission helper respecting the quality budget. */
  chance(rate, dt) { return Math.random() < rate * dt * this.budget; }

  update(dt) {
    let i = 0;
    while (i < this.n) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this.kill(i); continue; }
      const d = Math.pow(this.drag[i], dt * 60);
      this.vx[i] *= d; this.vy[i] = this.vy[i] * d + this.grav[i] * dt;
      this.x[i] += this.vx[i] * dt; this.y[i] += this.vy[i] * dt;
      this.rot[i] += this.spin[i] * dt;
      i++;
    }
  }

  kill(i) {
    const j = --this.n;
    if (i === j) return;
    this.x[i] = this.x[j]; this.y[i] = this.y[j]; this.vx[i] = this.vx[j]; this.vy[i] = this.vy[j];
    this.life[i] = this.life[j]; this.maxLife[i] = this.maxLife[j]; this.size[i] = this.size[j];
    this.grav[i] = this.grav[j]; this.drag[i] = this.drag[j]; this.rot[i] = this.rot[j];
    this.spin[i] = this.spin[j]; this.shape[i] = this.shape[j]; this.color[i] = this.color[j];
  }

  clear() { this.n = 0; }

  /** Draw with a transform mapping particle space → pixels: px = (x - ox) * s + cx. */
  draw(ctx, s, ox, oy, cx, cy, view) {
    for (let i = 0; i < this.n; i++) {
      const X = (this.x[i] - ox) * s + cx, Y = (this.y[i] - oy) * s + cy;
      const r = this.size[i] * s;
      if (view && (X < -r || Y < -r || X > view.w + r || Y > view.h + r)) continue;
      const k = this.life[i] / this.maxLife[i];
      ctx.globalAlpha = k < 0.3 ? k / 0.3 : 1;
      ctx.fillStyle = this.color[i];
      const rr = r * (0.55 + 0.45 * Math.min(1, k * 1.5));
      switch (this.shape[i]) {
        case 0: ctx.beginPath(); ctx.arc(X, Y, rr, 0, TAU); ctx.fill(); break;
        case 2: ctx.save(); ctx.translate(X, Y); ctx.rotate(this.rot[i]); ctx.fillRect(-rr, -rr, rr * 2, rr * 2); ctx.restore(); break;
        case 1: starPath(ctx, X, Y, rr, this.rot[i]); ctx.fill(); break;
        case 3: heartPath(ctx, X, Y, rr); ctx.fill(); break;
        case 4: {
          ctx.strokeStyle = this.color[i];
          ctx.lineWidth = Math.max(1, rr * 0.45);
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(X, Y);
          ctx.lineTo(X - this.vx[i] * s * 0.05, Y - this.vy[i] * s * 0.05);
          ctx.stroke();
          break;
        }
        case 5: ctx.save(); ctx.translate(X, Y); ctx.rotate(this.rot[i]); ctx.beginPath(); ctx.ellipse(0, 0, rr, rr * 0.55, 0, 0, TAU); ctx.fill(); ctx.restore(); break;
        case 6: ctx.strokeStyle = this.color[i]; ctx.lineWidth = Math.max(1, rr * 0.3); ctx.beginPath(); ctx.arc(X, Y, rr, 0, TAU); ctx.stroke(); break;
        case 7: {
          ctx.strokeStyle = this.color[i]; ctx.lineWidth = Math.max(1, rr * 0.28); ctx.lineCap = 'round';
          ctx.beginPath();
          for (let a = 0; a < 3; a++) {
            const ang = this.rot[i] + (a * Math.PI) / 3;
            ctx.moveTo(X - Math.cos(ang) * rr, Y - Math.sin(ang) * rr);
            ctx.lineTo(X + Math.cos(ang) * rr, Y + Math.sin(ang) * rr);
          }
          ctx.stroke();
          break;
        }
        default: break;
      }
    }
    ctx.globalAlpha = 1;
  }

  // ------------------------------------------------------------- presets

  burst(x, y, color, count, u, speed = 6, shape = 'square') {
    count = Math.ceil(count * this.budget);
    for (let k = 0; k < count; k++) {
      const a = Math.random() * TAU, v = (0.3 + Math.random()) * speed * u;
      this.spawn(x, y, Math.cos(a) * v, Math.sin(a) * v, 0.5 + Math.random() * 0.6, (0.12 + Math.random() * 0.16) * u, color, shape, 0, 0.9);
    }
  }

  confetti(x, y, u, count = 60) {
    const cols = ['#ff4d6d', '#ffd23f', '#3ddc84', '#3fa9f5', '#a855f7', '#ff9a3c'];
    count = Math.ceil(count * this.budget);
    for (let k = 0; k < count; k++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2, v = (5 + Math.random() * 9) * u;
      this.spawn(x, y, Math.cos(a) * v, Math.sin(a) * v, 1.2 + Math.random() * 0.8, (0.14 + Math.random() * 0.1) * u,
        cols[k % cols.length], k % 3 ? 'square' : 'petal', 9 * u, 0.94);
    }
  }
}

export function starPath(ctx, x, y, r, rot = 0) {
  ctx.beginPath();
  for (let k = 0; k < 10; k++) {
    const rr = k % 2 ? r * 0.45 : r;
    const a = rot + (k * Math.PI) / 5 - Math.PI / 2;
    if (k) ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    else ctx.moveTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  ctx.closePath();
}

export function heartPath(ctx, x, y, r) {
  ctx.beginPath();
  ctx.moveTo(x, y + r * 0.9);
  ctx.bezierCurveTo(x - r * 1.6, y - r * 0.1, x - r * 0.7, y - r * 1.3, x, y - r * 0.45);
  ctx.bezierCurveTo(x + r * 0.7, y - r * 1.3, x + r * 1.6, y - r * 0.1, x, y + r * 0.9);
  ctx.closePath();
}
