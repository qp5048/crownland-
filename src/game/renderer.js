import { DT, MAX_SLOTS } from '../config.js';
import { clamp, damp, ease, TAU } from '../core/math.js';
import { drawHat, drawHead, drawTrail, emitSkinFx, emitTrailFx, skinPalette } from '../cosmetics/draw.js';
import { Particles } from './particles.js';

const POP = 0.38; // seconds a freshly captured cell takes to settle

/** Smoothly following camera with screen shake. Positions are in cells. */
export class Camera {
  constructor() {
    this.x = 0; this.y = 0;
    this.zoom = 1;
    this.targetZoom = 1;
    this.shakeAmp = 0;
    this.shakeX = 0; this.shakeY = 0;
    this.cellPx = 32; // CSS pixels per cell, computed from the viewport
  }
  snap(x, y) { this.x = x; this.y = y; }
  follow(x, y, dt) {
    const k = damp(7, dt);
    this.x += (x - this.x) * k;
    this.y += (y - this.y) * k;
    this.zoom += (this.targetZoom - this.zoom) * damp(2, dt);
    if (this.shakeAmp > 0.01) {
      this.shakeAmp *= Math.exp(-dt * 7);
      this.shakeX = (Math.random() - 0.5) * this.shakeAmp;
      this.shakeY = (Math.random() - 0.5) * this.shakeAmp;
    } else { this.shakeAmp = 0; this.shakeX = this.shakeY = 0; }
  }
  shake(amount) { this.shakeAmp = Math.max(this.shakeAmp, amount); }
  fit(vw, vh) {
    this.cellPx = clamp(Math.sqrt(vw * vh) / 29, 15, 56);
  }
}

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false });
    this.camera = new Camera();
    this.particles = new Particles(800);
    this.floaters = [];
    this.dpr = 1;
    this.w = 0; this.h = 0; // device pixels
    this.quality = 'high';
    this.pal = new Array(MAX_SLOTS + 1).fill(null);
    this.trailBuf = new Float32Array(4096);
    this.resize();
  }

  setQuality(q) {
    this.quality = q;
    this.particles.budget = q === 'low' ? 0.35 : 1;
    this.resize();
  }

  resize() {
    const vw = Math.max(1, window.innerWidth), vh = Math.max(1, window.innerHeight);
    const maxDpr = this.quality === 'low' ? 1.25 : 2.5;
    this.dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    this.w = Math.round(vw * this.dpr);
    this.h = Math.round(vh * this.dpr);
    if (this.canvas.width !== this.w || this.canvas.height !== this.h) {
      this.canvas.width = this.w;
      this.canvas.height = this.h;
    }
    this.camera.fit(vw, vh);
  }

  /** Device pixels per cell at the current zoom. */
  get scale() { return this.camera.cellPx * this.camera.zoom * this.dpr; }

  worldToScreen(x, y) {
    const s = this.scale, c = this.camera;
    return { x: ((x - c.x) * s + this.w / 2 + c.shakeX * this.dpr) / this.dpr, y: ((y - c.y) * s + this.h / 2 + c.shakeY * this.dpr) / this.dpr };
  }

  floatText(x, y, text, color = '#ffffff', size = 1) {
    if (this.floaters.length > 30) this.floaters.shift();
    this.floaters.push({ x, y, text, color, size, t: 0, life: 1.3 });
  }

  // -------------------------------------------------------------------- frame

  render(world, alpha, frameDt) {
    const ctx = this.ctx;
    const cam = this.camera;
    const t = world.time + Math.min(alpha, 1) * DT;
    const s = this.scale;
    const W = this.w, H = this.h;
    const grid = world.grid;
    this.particles.update(frameDt);

    // palettes per player id
    const pal = this.pal;
    pal.fill(null);
    for (const p of world.players) pal[p.id] = skinPalette(p.look.skin);

    const offX = W / 2 - cam.x * s + cam.shakeX * this.dpr;
    const offY = H / 2 - cam.y * s + cam.shakeY * this.dpr;
    const SX = (x) => Math.round(x * s + offX);
    const SY = (y) => Math.round(y * s + offY);

    // ---- background
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#c9d7e4';
    ctx.fillRect(0, 0, W, H);
    const mx0 = SX(0), my0 = SY(0), mx1 = SX(grid.w), my1 = SY(grid.h);
    // outside-the-map hatching
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = Math.max(1, s * 0.12);
    ctx.beginPath();
    const step = s * 1.6;
    const ph = ((cam.x + cam.y) * s) % step;
    for (let k = -H; k < W + H; k += step) { ctx.moveTo(k - ph, 0); ctx.lineTo(k - ph + H, H); }
    ctx.stroke();
    ctx.restore();
    // board
    ctx.fillStyle = 'rgba(40,70,110,0.18)';
    ctx.fillRect(mx0 - s * 0.15, my0 + s * 0.25, mx1 - mx0 + s * 0.3, my1 - my0 + s * 0.15);
    ctx.fillStyle = '#f4f8fb';
    ctx.fillRect(mx0, my0, mx1 - mx0, my1 - my0);

    const x0 = clamp(Math.floor(cam.x - W / 2 / s) - 1, 0, grid.w - 1);
    const x1 = clamp(Math.ceil(cam.x + W / 2 / s) + 1, 0, grid.w - 1);
    const y0 = clamp(Math.floor(cam.y - H / 2 / s) - 2, 0, grid.h - 1);
    const y1 = clamp(Math.ceil(cam.y + H / 2 / s) + 1, 0, grid.h - 1);

    // subtle checkerboard tiles
    if (s > 9) {
      ctx.fillStyle = '#ebf1f6';
      for (let y = y0; y <= y1; y++) {
        const top = SY(y), bot = SY(y + 1);
        for (let x = x0 + ((x0 + y) & 1); x <= x1; x += 2) ctx.fillRect(SX(x), top, SX(x + 1) - SX(x), bot - top);
      }
    }

    // ---- territory
    this.drawTerritory(ctx, grid, t, x0, x1, y0, y1, SX, SY, s, pal);

    // map frame
    ctx.strokeStyle = '#9fb2c6';
    ctx.lineWidth = Math.max(2, s * 0.14);
    ctx.strokeRect(mx0, my0, mx1 - mx0, my1 - my0);
    ctx.strokeStyle = 'rgba(255,90,80,0.35)';
    ctx.lineWidth = Math.max(1, s * 0.06);
    ctx.setLineDash([s * 0.5, s * 0.5]);
    ctx.strokeRect(mx0 - s * 0.12, my0 - s * 0.12, mx1 - mx0 + s * 0.24, my1 - my0 + s * 0.24);
    ctx.setLineDash([]);

    // ---- trails
    const visible = [];
    const margin = 3;
    for (const p of world.players) {
      if (!p.alive) continue;
      const ix = p.px + (p.x - p.px) * alpha, iy = p.py + (p.y - p.py) * alpha;
      p.rx = ix; p.ry = iy;
      if (p.trailPts.length >= 2) this.drawPlayerTrail(ctx, p, ix, iy, s, offX, offY, t);
      if (ix > cam.x - W / 2 / s - margin && ix < cam.x + W / 2 / s + margin && iy > cam.y - H / 2 / s - margin && iy < cam.y + H / 2 / s + margin) {
        visible.push(p);
      }
    }

    // ---- cosmetics particles (emitted only for visible players)
    if (frameDt > 0) {
      for (const p of visible) {
        if (p.trailPts.length >= 2) emitTrailFx(this.particles, p.look.trail, p.rx, p.ry, 1, frameDt);
        emitSkinFx(this.particles, p.look.skin, p.rx, p.ry, 1, frameDt);
        if (p.speedMul > 1 && this.particles.chance(30, frameDt)) {
          const a = p.angle + Math.PI + (Math.random() - 0.5) * 0.8;
          this.particles.spawn(p.rx, p.ry, Math.cos(a) * 6, Math.sin(a) * 6, 0.3, 0.12, '#ffffff', 'spark', 0, 0.9);
        }
      }
    }

    // ---- heads (painter's order by y)
    visible.sort((a, b) => a.ry - b.ry);
    for (const p of visible) this.drawPlayer(ctx, p, s, offX, offY, t);

    // ---- particles & floating text
    this.particles.draw(ctx, s, 0, 0, offX, offY, { w: W, h: H });
    this.drawFloaters(ctx, frameDt, s, offX, offY);

    // ---- names last so they sit above everything
    const fs = Math.round(clamp(s * 0.42, 11 * this.dpr, 19 * this.dpr));
    ctx.font = `600 ${fs}px Rubik, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.lineJoin = 'round';
    for (const p of visible) {
      const X = p.rx * s + offX, Y = p.ry * s + offY - s * (p.look.hat.id !== 'none' ? 1.15 : 0.78);
      ctx.lineWidth = fs * 0.28;
      ctx.strokeStyle = 'rgba(20,32,56,0.55)';
      ctx.strokeText(p.name, X, Y);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(p.name, X, Y);
    }
  }

  drawTerritory(ctx, grid, t, x0, x1, y0, y1, SX, SY, s, pal) {
    const { owner, fxAt, fxPrev, w } = grid;
    const depth = Math.max(2, Math.round(s * 0.2));
    const pops = this._pops || (this._pops = []);
    pops.length = 0;
    // pass 1: sides, pass 2: tops (sides only show below the lifted tops)
    for (let pass = 0; pass < 2; pass++) {
      for (let y = y0; y <= y1; y++) {
        const top = SY(y), bot = SY(y + 1);
        const rowY = pass === 0 ? top + depth : top;
        let runOwner = 0, runStart = x0;
        const row = y * w;
        for (let x = x0; x <= x1 + 1; x++) {
          let o = 0;
          if (x <= x1) {
            const i = row + x;
            o = owner[i];
            const at = fxAt[i];
            if (at > t - POP && at !== 0) {
              if (t < at) o = fxPrev[i];
              else {
                if (pass === 1) pops.push(i);
                o = -1; // drawn separately with a pop animation
              }
            }
          }
          if (o !== runOwner) {
            if (runOwner > 0) {
              const c = pal[runOwner];
              if (c) {
                ctx.fillStyle = pass === 0 ? c.landDark : c.land;
                ctx.fillRect(SX(runStart), rowY, SX(x) - SX(runStart), bot - top);
              }
            }
            runOwner = o; runStart = x;
          }
        }
      }
    }
    // pop-in / pop-out cells
    for (const i of pops) {
      const x = i % w, y = (i / w) | 0;
      const k = clamp((t - fxAt[i]) / POP, 0, 1);
      const o = owner[i];
      const X = SX(x), Y = SY(y), cw = SX(x + 1) - X, ch = SY(y + 1) - Y;
      if (o) {
        const c = pal[o];
        if (!c) continue;
        const sc = ease.outBack(k);
        const lift = (1 - k) * s * 0.25;
        const ww = cw * sc, hh = ch * sc;
        ctx.fillStyle = c.landDark;
        ctx.fillRect(X + (cw - ww) / 2, Y + (ch - hh) / 2 + depth - lift, ww, hh);
        ctx.fillStyle = c.land;
        ctx.fillRect(X + (cw - ww) / 2, Y + (ch - hh) / 2 - lift, ww, hh);
        if (k < 0.6) {
          ctx.fillStyle = `rgba(255,255,255,${0.55 * (1 - k / 0.6)})`;
          ctx.fillRect(X + (cw - ww) / 2, Y + (ch - hh) / 2 - lift, ww, hh);
        }
      } else {
        const c = pal[fxPrev[i]];
        if (!c) continue;
        const sc = 1 - ease.outCubic(k);
        const ww = cw * sc, hh = ch * sc;
        ctx.globalAlpha = sc;
        ctx.fillStyle = c.land;
        ctx.fillRect(X + (cw - ww) / 2, Y + (ch - hh) / 2 + (1 - sc) * s * 0.4, ww, hh);
        ctx.globalAlpha = 1;
      }
    }
  }

  drawPlayerTrail(ctx, p, ix, iy, s, offX, offY, t) {
    const src = p.trailPts;
    const n = src.length + 2;
    if (this.trailBuf.length < n) this.trailBuf = new Float32Array(n * 2);
    const buf = this.trailBuf;
    for (let k = 0; k < src.length; k += 2) {
      buf[k] = src[k] * s + offX;
      buf[k + 1] = src[k + 1] * s + offY;
    }
    buf[src.length] = ix * s + offX;
    buf[src.length + 1] = iy * s + offY;
    const color = skinPalette(p.look.skin).trail;
    drawTrail(ctx, p.look.trail, buf, n, s * 0.46, color, t, p.id * 977);
  }

  drawPlayer(ctx, p, s, offX, offY, t) {
    const X = p.rx * s + offX, Y = p.ry * s + offY;
    const size = s * 1.02;
    let alpha = 1;
    if (p.invuln > 0) alpha = 0.45 + 0.35 * Math.sin(t * 22);
    const lowQ = this.quality === 'low';
    drawHead(ctx, p.look.skin, X, Y, size, p.angle, t, { alpha, glow: !lowQ, seed: p.id });
    ctx.save();
    ctx.globalAlpha = alpha;
    drawHat(ctx, p.look.hat, X, Y, size, t);
    ctx.restore();
    if (p.shield > 0 || p.invuln > 0) {
      ctx.save();
      const r = size * (0.92 + 0.05 * Math.sin(t * 5));
      const g = ctx.createRadialGradient(X, Y, r * 0.55, X, Y, r);
      g.addColorStop(0, 'rgba(120,220,255,0)');
      g.addColorStop(0.85, 'rgba(120,220,255,0.28)');
      g.addColorStop(1, 'rgba(200,245,255,0.8)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(X, Y, r, 0, TAU); ctx.fill();
      ctx.restore();
    }
  }

  drawFloaters(ctx, dt, s, offX, offY) {
    const list = this.floaters;
    for (let k = list.length - 1; k >= 0; k--) {
      const f = list[k];
      f.t += dt;
      if (f.t >= f.life) { list.splice(k, 1); continue; }
      const p = f.t / f.life;
      const X = f.x * s + offX, Y = (f.y - ease.outCubic(p) * 1.6) * s + offY;
      const pop = p < 0.15 ? ease.outBack(p / 0.15) : 1;
      const fs = Math.round(clamp(s * 0.62 * f.size, 13 * this.dpr, 30 * this.dpr) * pop);
      ctx.globalAlpha = p > 0.7 ? 1 - (p - 0.7) / 0.3 : 1;
      ctx.font = `800 ${fs}px Rubik, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = fs * 0.22;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba(25,35,60,0.6)';
      ctx.strokeText(f.text, X, Y);
      ctx.fillStyle = f.color;
      ctx.fillText(f.text, X, Y);
      ctx.globalAlpha = 1;
    }
  }
}

/** Minimap: a 1px-per-cell offscreen image redrawn a few times per second. */
export class Minimap {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.img = null;
    this.off = null;
    this.version = -1;
    this.timer = 0;
    this.rgb = new Uint32Array(256);
  }
  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = this.canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width * dpr)), h = Math.max(1, Math.round(r.height * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) { this.canvas.width = w; this.canvas.height = h; }
  }
  update(world, dt, focus, renderer) {
    const g = world.grid;
    if (!this.off || this.off.width !== g.w) {
      this.off = document.createElement('canvas');
      this.off.width = g.w; this.off.height = g.h;
      this.octx = this.off.getContext('2d');
      this.img = this.octx.createImageData(g.w, g.h);
      this.buf = new Uint32Array(this.img.data.buffer);
      this.version = -1;
    }
    this.timer -= dt;
    if (this.timer <= 0 || this.version === -1) {
      this.timer = 0.25;
      if (this.version !== g.version) {
        this.version = g.version;
        const rgb = this.rgb;
        rgb.fill(0);
        for (const p of world.players) {
          const hex = skinPalette(p.look.skin).mid;
          const n = parseInt(hex.slice(1), 16);
          rgb[p.id] = (255 << 24) | ((n & 255) << 16) | (((n >> 8) & 255) << 8) | ((n >> 16) & 255);
        }
        const empty = (255 << 24) | (0xf4 << 16) | (0xf8 << 8) | 0xf4;
        const own = g.owner, buf = this.buf;
        for (let i = 0; i < g.n; i++) buf[i] = own[i] ? rgb[own[i]] || empty : empty;
        this.octx.putImageData(this.img, 0, 0);
      }
    }
    const ctx = this.ctx;
    const W = this.canvas.width, H = this.canvas.height;
    ctx.clearRect(0, 0, W, H);
    ctx.imageSmoothingEnabled = false;
    ctx.globalAlpha = 0.92;
    ctx.drawImage(this.off, 0, 0, W, H);
    ctx.globalAlpha = 1;
    const sx = W / g.w, sy = H / g.h;
    // viewport rectangle
    if (renderer) {
      const s = renderer.scale;
      const cam = renderer.camera;
      const vw = renderer.w / s, vh = renderer.h / s;
      ctx.strokeStyle = 'rgba(31,47,77,0.5)';
      ctx.lineWidth = 1;
      ctx.strokeRect((cam.x - vw / 2) * sx, (cam.y - vh / 2) * sy, vw * sx, vh * sy);
    }
    for (const p of world.players) {
      if (!p.alive) continue;
      const me = p === focus;
      ctx.fillStyle = me ? '#ffffff' : skinPalette(p.look.skin).headDark;
      const r = me ? Math.max(3, W * 0.03) : Math.max(1.5, W * 0.016);
      ctx.beginPath(); ctx.arc(p.x * sx, p.y * sy, r, 0, TAU); ctx.fill();
      if (me) { ctx.strokeStyle = '#1f2f4d'; ctx.lineWidth = Math.max(1.5, W * 0.012); ctx.stroke(); }
    }
  }
}

