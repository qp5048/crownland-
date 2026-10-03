import { TAU } from '../core/math.js';
import { drawHat, drawHead, drawTrail, emitSkinFx, emitTrailFx, rrect, skinPalette } from '../cosmetics/draw.js';
import { getHat, getSkin, getTrail } from '../cosmetics/catalog.js';
import { Particles } from '../game/particles.js';

/**
 * Animated character preview: the square drives a figure-eight over a little
 * patch of its own land, leaving its trail and particles. Used by the main
 * menu and the shop.
 */
export class Preview {
  constructor(canvas, { compact = false } = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.compact = compact;
    this.look = { skin: getSkin('sky'), hat: getHat('none'), trail: getTrail('classic') };
    this.t = 0;
    this.pts = [];
    this.particles = new Particles(220);
    this.active = false;
    this.raf = 0;
    this.last = 0;
    this.loop = this.loop.bind(this);
  }

  setLook(look) { this.look = look; this.pts.length = 0; this.particles.clear(); }

  setActive(on) {
    if (on === this.active) return;
    this.active = on;
    if (on) { this.last = performance.now(); this.raf = requestAnimationFrame(this.loop); }
    else cancelAnimationFrame(this.raf);
  }

  loop(now) {
    if (!this.active) return;
    this.raf = requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.render(dt);
  }

  fit() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = this.canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width * dpr)), h = Math.max(1, Math.round(r.height * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) { this.canvas.width = w; this.canvas.height = h; this.pts.length = 0; }
    return { w, h, dpr };
  }

  render(dt) {
    const { w, h } = this.fit();
    if (w < 4 || h < 4) return;
    const ctx = this.ctx;
    this.t += dt;
    const t = this.t;
    const u = Math.min(w / 7.5, h / 4.6); // pixels per "cell"
    const cx = w / 2, cy = h / 2;
    const pal = skinPalette(this.look.skin);
    ctx.clearRect(0, 0, w, h);

    // a little home patch with the same lifted look as in-game territory
    const ls = u * 2.4;
    const lx = cx - ls / 2, ly = cy - ls / 2;
    ctx.fillStyle = 'rgba(40,70,110,0.12)';
    rrect(ctx, lx + u * 0.12, ly + u * 0.42, ls, ls, u * 0.45); ctx.fill();
    ctx.fillStyle = pal.landDark;
    rrect(ctx, lx, ly + u * 0.22, ls, ls, u * 0.45); ctx.fill();
    ctx.fillStyle = pal.land;
    rrect(ctx, lx, ly, ls, ls, u * 0.45); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    rrect(ctx, lx + u * 0.22, ly + u * 0.16, ls - u * 0.44, u * 0.3, u * 0.15); ctx.fill();

    // figure-eight path through the home patch
    const ax = Math.min(w * 0.4, u * 3.2), ay = Math.min(h * 0.36, u * 1.7);
    const sp = 1.05;
    const px = cx + Math.sin(t * sp) * ax;
    const py = cy + Math.sin(t * sp * 2) * ay;
    const vx = Math.cos(t * sp) * ax * sp, vy = Math.cos(t * sp * 2) * ay * sp * 2;
    const ang = Math.atan2(vy, vx);
    this.pts.push(px, py);
    const maxPts = 2 * 80;
    if (this.pts.length > maxPts) this.pts.splice(0, this.pts.length - maxPts);
    const buf = this.pts;
    drawTrail(ctx, this.look.trail, buf, buf.length, u * 0.42, pal.trail, t, 7);

    this.particles.update(dt);
    emitTrailFx(this.particles, this.look.trail, px, py, u, dt);
    emitSkinFx(this.particles, this.look.skin, px, py, u, dt);
    this.particles.draw(ctx, 1, 0, 0, 0, 0);

    const size = u * (this.compact ? 1.05 : 1.15);
    const bob = Math.sin(t * 8) * u * 0.03;
    drawHead(ctx, this.look.skin, px, py + bob, size, ang, t, { seed: 3 });
    drawHat(ctx, this.look.hat, px, py + bob, size, t);
  }
}

/** Static thumbnail for a shop item. */
export function drawThumb(canvas, item, t = 1.3) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const r = canvas.getBoundingClientRect();
  const W = Math.max(8, Math.round((r.width || 84) * dpr)), H = Math.max(8, Math.round((r.height || 84) * dpr));
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  const s = Math.min(W, H);
  if (item.kind === 'skin') {
    drawHead(ctx, item, W / 2, H / 2 - s * 0.04, s * 0.56, 0.4, t, { seed: 1 });
  } else if (item.kind === 'hat') {
    const base = getSkin('slate');
    drawHead(ctx, base, W / 2, H / 2 + s * 0.12, s * 0.44, 0.5, t, { seed: 1, eyes: true });
    drawHat(ctx, item, W / 2, H / 2 + s * 0.12, s * 0.44, t);
  } else if (item.kind === 'trail') {
    const pts = [];
    for (let k = 0; k <= 30; k++) {
      const f = k / 30;
      pts.push(W * (0.12 + f * 0.76), H * 0.55 + Math.sin(f * TAU * 1.1) * H * 0.18);
    }
    drawTrail(ctx, item, pts, pts.length, s * 0.14, '#3fa9f5', t, 3);
    drawHead(ctx, getSkin('sky'), W * 0.86, H * 0.55 + Math.sin(TAU * 1.1) * H * 0.18, s * 0.26, 0, t, { seed: 2, glow: false });
  }
}
