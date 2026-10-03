import { TAU, hexToRgb, rgba, shade } from '../core/math.js';
import { starPath } from '../game/particles.js';

/* -------------------------------------------------------------- palettes */

const palCache = new Map();
const lum = (hex) => {
  const [r, g, b] = hexToRgb(hex);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
};

/** Colours used for land, trail and minimap, derived once per skin. */
export function skinPalette(skin) {
  let p = palCache.get(skin.id);
  if (p) return p;
  // territory uses the most mid-toned colour of the skin so it reads on the light board
  let mid = skin.colors[0], bd = 9;
  for (const c of skin.colors) {
    const d = Math.abs(lum(c) - 0.52);
    if (d < bd) { bd = d; mid = c; }
  }
  if (lum(mid) > 0.8) mid = shade(mid, -0.35);
  if (lum(mid) < 0.18) mid = shade(mid, 0.35);
  p = {
    main: skin.colors[0],
    mid,
    land: shade(mid, 0.14),
    landDark: shade(mid, -0.3),
    headDark: shade(mid, -0.38),
    trail: mid,
    glow: skin.colors[1] || skin.colors[0],
  };
  palCache.set(skin.id, p);
  return p;
}

export function rrect(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

const GLOWY = new Set(['glow', 'pulse', 'prism', 'galaxy', 'phoenix', 'aurora', 'dragon', 'grid']);

/* ------------------------------------------------------------------ heads */

/**
 * Draw a player head centred at (x, y) with side length s (pixels).
 * opts: { eyes = true, glow = true, alpha = 1, seed = 0, blinkSeed }
 */
export function drawHead(ctx, skin, x, y, s, angle, t, opts = {}) {
  const pal = skinPalette(skin);
  const half = s / 2;
  const r = s * 0.26;
  const depth = s * 0.15;
  ctx.save();
  if (opts.alpha !== undefined) ctx.globalAlpha = opts.alpha;

  // soft contact shadow
  ctx.fillStyle = 'rgba(20,40,70,0.16)';
  ctx.beginPath();
  ctx.ellipse(x, y + half + depth * 0.9, s * 0.52, s * 0.16, 0, 0, TAU);
  ctx.fill();

  // extruded side
  ctx.fillStyle = pal.headDark;
  rrect(ctx, x - half, y - half + depth, s, s, r);
  ctx.fill();

  // outer glow for flashy styles
  if (opts.glow !== false && GLOWY.has(skin.style)) {
    ctx.save();
    ctx.shadowColor = skin.style === 'prism' ? `hsl(${(t * 90) % 360},100%,60%)` : pal.glow;
    ctx.shadowBlur = s * (0.45 + 0.2 * Math.sin(t * 3));
    ctx.fillStyle = pal.main;
    rrect(ctx, x - half, y - half, s, s, r);
    ctx.fill();
    ctx.restore();
  }

  // top face with pattern
  ctx.save();
  rrect(ctx, x - half, y - half, s, s, r);
  ctx.clip();
  paintPattern(ctx, skin, x - half, y - half, s, t);
  if (skin.rarity === 'legendary' || skin.rarity === 'mythic') shimmer(ctx, x - half, y - half, s, t, opts.seed || 0);
  // gloss
  const gl = ctx.createLinearGradient(0, y - half, 0, y + half);
  gl.addColorStop(0, 'rgba(255,255,255,0.32)');
  gl.addColorStop(0.45, 'rgba(255,255,255,0.04)');
  gl.addColorStop(1, 'rgba(0,0,0,0.08)');
  ctx.fillStyle = gl;
  ctx.fillRect(x - half, y - half, s, s);
  ctx.restore();

  // crisp rim
  ctx.lineWidth = Math.max(1, s * 0.045);
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  rrect(ctx, x - half + s * 0.04, y - half + s * 0.04, s - s * 0.08, s - s * 0.08, r * 0.8);
  ctx.globalAlpha *= 0.5;
  ctx.stroke();
  ctx.globalAlpha = opts.alpha ?? 1;

  if (opts.eyes !== false) drawEyes(ctx, x, y, s, angle, t, opts.seed || 0);
  ctx.restore();
}

function drawEyes(ctx, x, y, s, angle, t, seed) {
  const dx = Math.cos(angle), dy = Math.sin(angle);
  const er = s * 0.12;
  const sep = s * 0.19;
  const ox = dx * s * 0.07, oy = dy * s * 0.05 - s * 0.04;
  const blinkPhase = (t + seed * 1.7) % 4.3;
  const blink = blinkPhase < 0.13;
  for (const side of [-1, 1]) {
    const ex = x + side * sep + ox, ey = y + oy;
    if (blink) {
      ctx.strokeStyle = '#1f2540';
      ctx.lineWidth = Math.max(1, s * 0.05);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(ex - er * 0.8, ey);
      ctx.lineTo(ex + er * 0.8, ey);
      ctx.stroke();
      continue;
    }
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(ex, ey, er, er * 1.18, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = '#1f2540';
    ctx.beginPath();
    ctx.arc(ex + dx * er * 0.42, ey + dy * er * 0.42, er * 0.58, 0, TAU);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ex + dx * er * 0.42 - er * 0.22, ey + dy * er * 0.42 - er * 0.25, er * 0.2, 0, TAU);
    ctx.fill();
  }
}

function shimmer(ctx, X, Y, s, t, seed) {
  const period = 2.6;
  const k = ((t + seed * 0.37) % period) / period;
  if (k > 0.45) return;
  const pos = -0.6 + (k / 0.45) * 2.2;
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  ctx.beginPath();
  ctx.moveTo(X + s * pos, Y);
  ctx.lineTo(X + s * (pos + 0.22), Y);
  ctx.lineTo(X + s * (pos - 0.18), Y + s);
  ctx.lineTo(X + s * (pos - 0.4), Y + s);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function paintPattern(ctx, skin, X, Y, s, t) {
  const c = skin.colors;
  const cx = X + s / 2, cy = Y + s / 2;
  switch (skin.style) {
    case 'solid':
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s); break;
    case 'stripes': {
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(skin.angle ?? Math.PI / 4);
      ctx.fillStyle = c[1];
      const sw = s / 5.5;
      for (let k = -5; k <= 5; k++) ctx.fillRect(k * sw * 2 - sw / 2, -s, sw, s * 2);
      ctx.restore();
      break;
    }
    case 'dots': {
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = c[1];
      const pts = [[0.26, 0.24], [0.74, 0.3], [0.5, 0.72], [0.18, 0.74], [0.84, 0.82], [0.52, 0.1]];
      for (const [u, v] of pts) { ctx.beginPath(); ctx.arc(X + u * s, Y + v * s, s * 0.085, 0, TAU); ctx.fill(); }
      break;
    }
    case 'checker': {
      const n = 3, q = s / n;
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        ctx.fillStyle = (i + j) % 2 ? c[1] : c[0];
        ctx.fillRect(X + i * q, Y + j * q, q + 0.5, q + 0.5);
      }
      ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = Math.max(1, s * 0.02);
      ctx.setLineDash([s * 0.05, s * 0.05]);
      ctx.strokeRect(X + s * 0.1, Y + s * 0.1, s * 0.8, s * 0.8);
      ctx.setLineDash([]);
      break;
    }
    case 'gradient': {
      const g = ctx.createLinearGradient(X, Y, X + s, Y + s);
      g.addColorStop(0, c[0]); g.addColorStop(1, c[1]);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      break;
    }
    case 'radial': {
      ctx.fillStyle = c[1]; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = '#eaffd9';
      rrect(ctx, X + s * 0.09, Y + s * 0.09, s * 0.82, s * 0.82, s * 0.2); ctx.fill();
      ctx.fillStyle = c[0];
      rrect(ctx, X + s * 0.14, Y + s * 0.14, s * 0.72, s * 0.72, s * 0.17); ctx.fill();
      ctx.fillStyle = '#2b1d1d';
      for (const [u, v] of [[0.3, 0.68], [0.5, 0.78], [0.7, 0.66], [0.4, 0.86], [0.62, 0.88]]) {
        ctx.beginPath(); ctx.ellipse(X + u * s, Y + v * s, s * 0.025, s * 0.04, 0.3, 0, TAU); ctx.fill();
      }
      break;
    }
    case 'split': {
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = c[1];
      // panda-style patches around the eyes and ears in the corners
      for (const side of [-1, 1]) {
        ctx.beginPath(); ctx.ellipse(cx + side * s * 0.19, cy - s * 0.02, s * 0.17, s * 0.2, side * 0.5, 0, TAU); ctx.fill();
        ctx.beginPath(); ctx.arc(cx + side * s * 0.46, Y + s * 0.04, s * 0.16, 0, TAU); ctx.fill();
      }
      break;
    }
    case 'shift': {
      const a = t * 0.9;
      const dx = Math.cos(a) * s * 0.75, dy = Math.sin(a) * s * 0.75;
      const g = ctx.createLinearGradient(cx - dx, cy - dy, cx + dx, cy + dy);
      c.forEach((col, i) => g.addColorStop(i / (c.length - 1), col));
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      break;
    }
    case 'waves': {
      ctx.fillStyle = c[1]; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = rgba(c[0], 0.75);
      for (let b = 0; b < 3; b++) {
        const base = Y + s * (0.25 + b * 0.3);
        ctx.beginPath();
        ctx.moveTo(X, base);
        for (let u = 0; u <= 1.001; u += 0.1) ctx.lineTo(X + u * s, base + Math.sin(u * TAU + t * 3 + b) * s * 0.06);
        ctx.lineTo(X + s, base + s * 0.12); ctx.lineTo(X, base + s * 0.12);
        ctx.closePath(); ctx.fill();
      }
      break;
    }
    case 'swirl': {
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = c[1];
      for (let b = 0; b < 3; b++) {
        const bx = cx + Math.sin(t * (0.9 + b * 0.3) + b * 2) * s * 0.28;
        const by = cy + Math.cos(t * (0.7 + b * 0.25) + b) * s * 0.28;
        ctx.beginPath(); ctx.arc(bx, by, s * (0.18 + 0.05 * Math.sin(t * 2 + b)), 0, TAU); ctx.fill();
      }
      break;
    }
    case 'pulse': {
      ctx.fillStyle = c[1]; ctx.fillRect(X, Y, s, s);
      const k = 0.55 + 0.12 * Math.sin(t * 4);
      ctx.save();
      ctx.shadowColor = c[0]; ctx.shadowBlur = s * 0.35;
      ctx.strokeStyle = c[0]; ctx.lineWidth = s * 0.08;
      rrect(ctx, cx - (s * k) / 2, cy - (s * k) / 2, s * k, s * k, s * 0.14); ctx.stroke();
      ctx.lineWidth = s * 0.05;
      rrect(ctx, X + s * 0.06, Y + s * 0.06, s * 0.88, s * 0.88, s * 0.22); ctx.stroke();
      ctx.restore();
      break;
    }
    case 'grid': {
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
      ctx.strokeStyle = c[1]; ctx.lineWidth = Math.max(1, s * 0.045);
      ctx.save(); ctx.shadowColor = c[1]; ctx.shadowBlur = s * 0.2;
      const sp = s / 4, off = (t * s * 0.35) % sp;
      ctx.beginPath();
      for (let k = -1; k < 6; k++) {
        ctx.moveTo(X + k * sp + off, Y); ctx.lineTo(X + k * sp + off, Y + s);
        ctx.moveTo(X, Y + k * sp + off); ctx.lineTo(X + s, Y + k * sp + off);
      }
      ctx.stroke(); ctx.restore();
      break;
    }
    case 'glow': {
      const g = ctx.createLinearGradient(X, Y + s, X + s, Y);
      g.addColorStop(0, c[0]); g.addColorStop(1, c[1]);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * 0.7);
      rg.addColorStop(0, `rgba(255,255,255,${0.3 + 0.15 * Math.sin(t * 3)})`);
      rg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = rg; ctx.fillRect(X, Y, s, s);
      break;
    }
    case 'prism': {
      const a = t * 0.8;
      const dx = Math.cos(a) * s * 0.7, dy = Math.sin(a) * s * 0.7;
      const g = ctx.createLinearGradient(cx - dx, cy - dy, cx + dx, cy + dy);
      for (let k = 0; k <= 5; k++) g.addColorStop(k / 5, `hsl(${(t * 80 + k * 60) % 360},95%,62%)`);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.beginPath(); ctx.moveTo(cx, Y); ctx.lineTo(X + s, cy); ctx.lineTo(cx, Y + s); ctx.lineTo(X, cy); ctx.closePath(); ctx.fill();
      break;
    }
    case 'galaxy': {
      const g = ctx.createRadialGradient(cx, cy, s * 0.05, cx, cy, s * 0.8);
      g.addColorStop(0, c[1]); g.addColorStop(1, c[0]);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      const nx = cx + Math.cos(t * 0.6) * s * 0.2, ny = cy + Math.sin(t * 0.6) * s * 0.2;
      const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, s * 0.45);
      ng.addColorStop(0, rgba(c[2], 0.65)); ng.addColorStop(1, rgba(c[2], 0));
      ctx.fillStyle = ng; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = '#ffffff';
      const stars = [[0.2, 0.2], [0.8, 0.25], [0.65, 0.7], [0.3, 0.8], [0.5, 0.45], [0.85, 0.85], [0.12, 0.55]];
      stars.forEach(([u, v], k) => {
        const tw = 0.5 + 0.5 * Math.sin(t * 3 + k * 1.9);
        starPath(ctx, X + u * s, Y + v * s, s * (0.03 + 0.04 * tw), t * 0.5);
        ctx.fill();
      });
      break;
    }
    case 'phoenix': {
      const g = ctx.createLinearGradient(0, Y + s, 0, Y);
      g.addColorStop(0, c[0]); g.addColorStop(0.6, c[1]); g.addColorStop(1, c[2]);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = rgba(c[2], 0.7);
      for (let k = 0; k < 4; k++) {
        const fx = X + s * (0.15 + k * 0.23);
        const h = s * (0.35 + 0.15 * Math.sin(t * 6 + k * 1.7));
        ctx.beginPath();
        ctx.moveTo(fx - s * 0.09, Y + s);
        ctx.quadraticCurveTo(fx - s * 0.06, Y + s - h * 0.6, fx, Y + s - h);
        ctx.quadraticCurveTo(fx + s * 0.06, Y + s - h * 0.6, fx + s * 0.09, Y + s);
        ctx.fill();
      }
      break;
    }
    case 'aurora': {
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      for (let b = 0; b < 3; b++) {
        const col = b % 2 ? c[2] : c[1];
        ctx.strokeStyle = rgba(col, 0.55);
        ctx.lineWidth = s * 0.16;
        ctx.lineCap = 'round';
        ctx.beginPath();
        for (let u = -0.1; u <= 1.1; u += 0.1) {
          const yy = Y + s * (0.3 + b * 0.2) + Math.sin(u * 5 + t * (1.5 + b * 0.4) + b) * s * 0.1;
          if (u < -0.05) ctx.moveTo(X + u * s, yy); else ctx.lineTo(X + u * s, yy);
        }
        ctx.stroke();
      }
      ctx.restore();
      break;
    }
    case 'dragon': {
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
      ctx.strokeStyle = c[1]; ctx.lineWidth = Math.max(1, s * 0.04);
      const q = s / 4;
      const shift = (t * q * 0.6) % q;
      for (let row = -1; row < 6; row++) {
        for (let col = -1; col < 6; col++) {
          const sx = X + col * q + (row % 2 ? q / 2 : 0);
          const sy = Y + row * q * 0.7 + shift;
          ctx.beginPath(); ctx.arc(sx, sy, q * 0.5, 0.1 * Math.PI, 0.9 * Math.PI); ctx.stroke();
        }
      }
      const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * 0.6);
      rg.addColorStop(0, rgba(c[2], 0.35 + 0.15 * Math.sin(t * 2.5))); rg.addColorStop(1, rgba(c[2], 0));
      ctx.fillStyle = rg; ctx.fillRect(X, Y, s, s);
      break;
    }
    default:
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
  }
}

/* ------------------------------------------------------------------- hats */

/** Draw a hat for a head centred at (x, y) of size s. */
export function drawHat(ctx, hat, x, y, s, t) {
  if (!hat || hat.id === 'none') return;
  const top = y - s / 2;
  ctx.save();
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  const line = (c, w = 0.05) => { ctx.strokeStyle = c; ctx.lineWidth = Math.max(1, s * w); };
  switch (hat.id) {
    case 'cap': {
      ctx.fillStyle = '#ff4d5e';
      ctx.beginPath(); ctx.ellipse(x, top + s * 0.02, s * 0.36, s * 0.26, 0, Math.PI, 0); ctx.fill();
      ctx.fillStyle = '#d93445';
      ctx.beginPath(); ctx.ellipse(x + s * 0.3, top + s * 0.03, s * 0.28, s * 0.07, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(x, top - s * 0.24, s * 0.05, 0, TAU); ctx.fill();
      break;
    }
    case 'bow': {
      const bx = x + s * 0.28, by = top + s * 0.02;
      ctx.fillStyle = '#ff5fa2';
      for (const side of [-1, 1]) {
        ctx.beginPath(); ctx.moveTo(bx, by);
        ctx.quadraticCurveTo(bx + side * s * 0.3, by - s * 0.26, bx + side * s * 0.28, by + s * 0.12);
        ctx.closePath(); ctx.fill();
      }
      ctx.fillStyle = '#d93c82'; ctx.beginPath(); ctx.arc(bx, by, s * 0.07, 0, TAU); ctx.fill();
      break;
    }
    case 'flower': {
      const fx = x - s * 0.26, fy = top + s * 0.02;
      ctx.fillStyle = '#ffffff';
      for (let k = 0; k < 6; k++) {
        const a = (k * TAU) / 6 + t * 0.4;
        ctx.beginPath(); ctx.ellipse(fx + Math.cos(a) * s * 0.11, fy + Math.sin(a) * s * 0.11, s * 0.09, s * 0.055, a, 0, TAU); ctx.fill();
      }
      ctx.fillStyle = '#ffc83d'; ctx.beginPath(); ctx.arc(fx, fy, s * 0.07, 0, TAU); ctx.fill();
      break;
    }
    case 'shades': {
      const ey = y - s * 0.04;
      ctx.fillStyle = '#16182a';
      for (const side of [-1, 1]) { rrect(ctx, x + side * s * 0.2 - s * 0.16, ey - s * 0.1, s * 0.32, s * 0.2, s * 0.07); ctx.fill(); }
      line('#16182a', 0.05); ctx.beginPath(); ctx.moveTo(x - s * 0.06, ey - s * 0.04); ctx.lineTo(x + s * 0.06, ey - s * 0.04); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      for (const side of [-1, 1]) { ctx.beginPath(); ctx.ellipse(x + side * s * 0.2 - s * 0.07, ey - s * 0.04, s * 0.04, s * 0.025, -0.5, 0, TAU); ctx.fill(); }
      break;
    }
    case 'catears': {
      for (const side of [-1, 1]) {
        ctx.fillStyle = '#3a3f55';
        ctx.beginPath(); ctx.moveTo(x + side * s * 0.12, top + s * 0.06); ctx.lineTo(x + side * s * 0.36, top - s * 0.3); ctx.lineTo(x + side * s * 0.46, top + s * 0.08); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#ff9ec8';
        ctx.beginPath(); ctx.moveTo(x + side * s * 0.2, top + s * 0.04); ctx.lineTo(x + side * s * 0.35, top - s * 0.18); ctx.lineTo(x + side * s * 0.41, top + s * 0.05); ctx.closePath(); ctx.fill();
      }
      break;
    }
    case 'party': {
      ctx.save(); ctx.translate(x + s * 0.06, top + s * 0.04); ctx.rotate(0.18);
      ctx.fillStyle = '#5b8cff';
      ctx.beginPath(); ctx.moveTo(-s * 0.22, 0); ctx.lineTo(0, -s * 0.55); ctx.lineTo(s * 0.22, 0); ctx.closePath(); ctx.fill();
      ctx.save(); ctx.clip();
      ctx.fillStyle = '#ffd23f';
      for (let k = 0; k < 4; k++) ctx.fillRect(-s * 0.3, -s * 0.12 - k * s * 0.14, s * 0.6, s * 0.05);
      ctx.restore();
      ctx.fillStyle = '#ff4d6d'; ctx.beginPath(); ctx.arc(0, -s * 0.56, s * 0.08, 0, TAU); ctx.fill();
      ctx.restore();
      break;
    }
    case 'headphones': {
      line('#2d3047', 0.09);
      ctx.beginPath(); ctx.arc(x, y - s * 0.02, s * 0.56, Math.PI * 1.08, Math.PI * 1.92); ctx.stroke();
      for (const side of [-1, 1]) {
        ctx.fillStyle = '#2d3047'; rrect(ctx, x + side * s * 0.56 - s * 0.1, y - s * 0.2, s * 0.2, s * 0.32, s * 0.08); ctx.fill();
        ctx.fillStyle = '#ff4d6d'; rrect(ctx, x + side * s * 0.56 - s * 0.06, y - s * 0.14, s * 0.12, s * 0.2, s * 0.05); ctx.fill();
      }
      break;
    }
    case 'tophat': {
      ctx.fillStyle = '#23263a';
      ctx.beginPath(); ctx.ellipse(x, top + s * 0.02, s * 0.42, s * 0.08, 0, 0, TAU); ctx.fill();
      rrect(ctx, x - s * 0.25, top - s * 0.5, s * 0.5, s * 0.52, s * 0.04); ctx.fill();
      ctx.fillStyle = '#e8334a'; ctx.fillRect(x - s * 0.25, top - s * 0.12, s * 0.5, s * 0.1);
      ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fillRect(x - s * 0.2, top - s * 0.46, s * 0.07, s * 0.32);
      break;
    }
    case 'horns':
    case 'devil': {
      const col = hat.id === 'devil' ? '#ff2a3d' : '#f2e3c6';
      const dark = hat.id === 'devil' ? '#a30f1e' : '#c9b48e';
      if (hat.id === 'devil') { ctx.shadowColor = '#ff2a3d'; ctx.shadowBlur = s * (0.3 + 0.15 * Math.sin(t * 4)); }
      for (const side of [-1, 1]) {
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.moveTo(x + side * s * 0.16, top + s * 0.06);
        ctx.quadraticCurveTo(x + side * s * 0.34, top - s * 0.1, x + side * s * 0.44, top - s * 0.36);
        ctx.quadraticCurveTo(x + side * s * 0.46, top - s * 0.06, x + side * s * 0.36, top + s * 0.08);
        ctx.closePath(); ctx.fill();
        line(dark, 0.025); ctx.stroke();
      }
      break;
    }
    case 'propeller': {
      ctx.fillStyle = '#ffd23f';
      ctx.beginPath(); ctx.ellipse(x, top + s * 0.04, s * 0.34, s * 0.24, 0, Math.PI, 0); ctx.fill();
      ctx.fillStyle = '#3fa9f5';
      ctx.beginPath(); ctx.moveTo(x, top - s * 0.2); ctx.arc(x, top + s * 0.04, s * 0.34, Math.PI * 1.33, Math.PI * 1.66); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#ff4d6d';
      ctx.beginPath(); ctx.moveTo(x, top - s * 0.2); ctx.arc(x, top + s * 0.04, s * 0.34, Math.PI * 1.0, Math.PI * 1.15); ctx.closePath(); ctx.fill();
      line('#555b75', 0.04); ctx.beginPath(); ctx.moveTo(x, top - s * 0.2); ctx.lineTo(x, top - s * 0.32); ctx.stroke();
      const spin = Math.cos(t * 18);
      ctx.fillStyle = '#ff4d6d';
      ctx.beginPath(); ctx.ellipse(x, top - s * 0.33, Math.abs(spin) * s * 0.3 + s * 0.02, s * 0.05, 0, 0, TAU); ctx.fill();
      break;
    }
    case 'pirate': {
      ctx.fillStyle = '#1f2133';
      ctx.beginPath();
      ctx.moveTo(x - s * 0.5, top + s * 0.06);
      ctx.quadraticCurveTo(x - s * 0.3, top - s * 0.42, x, top - s * 0.28);
      ctx.quadraticCurveTo(x + s * 0.3, top - s * 0.42, x + s * 0.5, top + s * 0.06);
      ctx.quadraticCurveTo(x, top - s * 0.06, x - s * 0.5, top + s * 0.06);
      ctx.fill();
      line('#ffc83d', 0.035); ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(x, top - s * 0.14, s * 0.07, 0, TAU); ctx.fill();
      ctx.fillRect(x - s * 0.045, top - s * 0.09, s * 0.09, s * 0.04);
      break;
    }
    case 'viking': {
      for (const side of [-1, 1]) {
        ctx.fillStyle = '#f2e8d5';
        ctx.beginPath();
        ctx.moveTo(x + side * s * 0.3, top - s * 0.02);
        ctx.quadraticCurveTo(x + side * s * 0.62, top - s * 0.06, x + side * s * 0.6, top - s * 0.42);
        ctx.quadraticCurveTo(x + side * s * 0.5, top - s * 0.16, x + side * s * 0.28, top - s * 0.16);
        ctx.closePath(); ctx.fill();
        line('#bfae8a', 0.025); ctx.stroke();
      }
      ctx.fillStyle = '#9aa6b8';
      ctx.beginPath(); ctx.ellipse(x, top + s * 0.06, s * 0.4, s * 0.3, 0, Math.PI, 0); ctx.fill();
      ctx.fillStyle = '#c28a2c'; ctx.fillRect(x - s * 0.4, top + s * 0.0, s * 0.8, s * 0.08);
      ctx.fillRect(x - s * 0.04, top - s * 0.24, s * 0.08, s * 0.28);
      break;
    }
    case 'wizard': {
      ctx.fillStyle = '#5b3cc4';
      ctx.beginPath(); ctx.ellipse(x, top + s * 0.04, s * 0.46, s * 0.09, 0, 0, TAU); ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x - s * 0.3, top + s * 0.03);
      ctx.quadraticCurveTo(x - s * 0.05, top - s * 0.4, x + s * 0.06, top - s * 0.72);
      ctx.quadraticCurveTo(x + s * 0.32, top - s * 0.66, x + s * 0.38, top - s * 0.56);
      ctx.quadraticCurveTo(x + s * 0.12, top - s * 0.5, x + s * 0.3, top + s * 0.03);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#ffd23f';
      starPath(ctx, x - s * 0.04, top - s * 0.22, s * 0.08, t); ctx.fill();
      starPath(ctx, x + s * 0.12, top - s * 0.44, s * 0.05, -t); ctx.fill();
      break;
    }
    case 'halo': {
      const hy = top - s * 0.22 + Math.sin(t * 2.5) * s * 0.04;
      ctx.shadowColor = '#ffd75a'; ctx.shadowBlur = s * 0.4;
      line('#ffd23f', 0.08);
      ctx.beginPath(); ctx.ellipse(x, hy, s * 0.34, s * 0.1, 0, 0, TAU); ctx.stroke();
      ctx.shadowBlur = 0; line('#fff6c4', 0.03);
      ctx.beginPath(); ctx.ellipse(x, hy, s * 0.34, s * 0.1, 0, Math.PI * 1.1, Math.PI * 1.6); ctx.stroke();
      break;
    }
    case 'laurel': {
      for (const side of [-1, 1]) {
        for (let k = 0; k < 5; k++) {
          const a = Math.PI * (side < 0 ? 1.05 + k * 0.1 : 1.95 - k * 0.1);
          const lx = x + Math.cos(a) * s * 0.42, ly = top + s * 0.12 + Math.sin(a) * s * 0.3;
          ctx.fillStyle = k % 2 ? '#e0b12a' : '#ffd23f';
          ctx.beginPath(); ctx.ellipse(lx, ly, s * 0.1, s * 0.05, a + Math.PI / 2 * side, 0, TAU); ctx.fill();
        }
      }
      break;
    }
    case 'crown':
    case 'royal': {
      const royal = hat.id === 'royal';
      const w = s * (royal ? 0.86 : 0.74), h = s * (royal ? 0.44 : 0.36);
      const by = top + s * 0.08;
      if (royal) { ctx.shadowColor = '#ffcf3a'; ctx.shadowBlur = s * 0.35; }
      const g = ctx.createLinearGradient(0, by - h, 0, by);
      g.addColorStop(0, '#fff1a6'); g.addColorStop(0.5, '#ffc61a'); g.addColorStop(1, '#d99100');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(x - w / 2, by);
      ctx.lineTo(x - w / 2, by - h * 0.55);
      ctx.lineTo(x - w * 0.25, by - h * 0.25);
      ctx.lineTo(x, by - h);
      ctx.lineTo(x + w * 0.25, by - h * 0.25);
      ctx.lineTo(x + w / 2, by - h * 0.55);
      ctx.lineTo(x + w / 2, by);
      ctx.closePath(); ctx.fill();
      ctx.shadowBlur = 0;
      line('#a86b00', 0.03); ctx.stroke();
      const gems = royal ? ['#ff2a5a', '#2ad1ff', '#7a3cff'] : ['#ff4d6d', '#3fa9f5', '#3ddc84'];
      [-0.27, 0, 0.27].forEach((u, k) => {
        ctx.fillStyle = gems[k];
        ctx.beginPath(); ctx.arc(x + u * w, by - h * 0.2, s * (royal ? 0.065 : 0.05), 0, TAU); ctx.fill();
      });
      for (const u of [-0.5, 0, 0.5]) {
        ctx.fillStyle = '#fff6c4';
        ctx.beginPath(); ctx.arc(x + u * w, by - h * (u ? 0.55 : 1), s * 0.045, 0, TAU); ctx.fill();
      }
      const sp = (t * 1.3) % 2;
      if (sp < 0.5) {
        ctx.fillStyle = `rgba(255,255,255,${1 - sp * 2})`;
        starPath(ctx, x + w * 0.32, by - h * 0.75, s * 0.09 * (0.5 + sp), 0); ctx.fill();
      }
      break;
    }
    default: break;
  }
  ctx.restore();
}

/* ----------------------------------------------------------------- trails */

const hash = (n) => {
  n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
};

function strokePath(ctx, pts, n) {
  ctx.beginPath();
  ctx.moveTo(pts[0], pts[1]);
  for (let k = 2; k < n; k += 2) ctx.lineTo(pts[k], pts[k + 1]);
  ctx.stroke();
}

/**
 * Draw a trail polyline. pts = flat screen-space [x,y,...], n = used length.
 * width = nominal line width in pixels, color = owner's trail colour.
 */
export function drawTrail(ctx, trail, pts, n, width, color, t, seed = 0) {
  if (n < 4) return;
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const id = trail?.id || 'classic';
  switch (id) {
    case 'dashed':
      ctx.strokeStyle = rgba(color, 0.35); ctx.lineWidth = width; strokePath(ctx, pts, n);
      ctx.strokeStyle = color; ctx.lineWidth = width * 0.55;
      ctx.setLineDash([width * 1.1, width * 0.9]); ctx.lineDashOffset = -t * width * 4;
      strokePath(ctx, pts, n);
      break;
    case 'candy':
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = width; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#ff3d6e'; ctx.lineWidth = width * 0.9;
      ctx.setLineDash([width * 0.9, width * 0.9]); ctx.lineDashOffset = -t * width * 3;
      ctx.lineCap = 'butt';
      strokePath(ctx, pts, n);
      break;
    case 'pixel': {
      ctx.fillStyle = color;
      const q = width * 0.9;
      let acc = 0;
      for (let k = 2; k < n; k += 2) {
        const x0 = pts[k - 2], y0 = pts[k - 1], x1 = pts[k], y1 = pts[k + 1];
        const len = Math.hypot(x1 - x0, y1 - y0);
        for (let d = acc; d < len; d += q * 1.15) {
          const f = d / len;
          const px = x0 + (x1 - x0) * f, py = y0 + (y1 - y0) * f;
          ctx.fillStyle = ((k + Math.floor(d)) / 2) % 3 < 1 ? shade(color, 0.25) : color;
          ctx.fillRect(Math.round(px - q / 2), Math.round(py - q / 2), Math.ceil(q), Math.ceil(q));
        }
        acc = (acc - len) % (q * 1.15);
        if (acc < 0) acc += q * 1.15;
      }
      break;
    }
    case 'hearts':
      ctx.strokeStyle = 'rgba(255,120,170,0.55)'; ctx.lineWidth = width; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#ff5c9a'; ctx.lineWidth = width * 0.35; strokePath(ctx, pts, n);
      break;
    case 'neon':
      ctx.strokeStyle = rgba(color, 0.3); ctx.lineWidth = width * 1.6; strokePath(ctx, pts, n);
      ctx.shadowColor = color; ctx.shadowBlur = width;
      ctx.strokeStyle = shade(color, 0.6); ctx.lineWidth = width * 0.45; strokePath(ctx, pts, n);
      break;
    case 'bubbles':
      ctx.strokeStyle = 'rgba(120,210,255,0.45)'; ctx.lineWidth = width; strokePath(ctx, pts, n);
      ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = width * 0.25; strokePath(ctx, pts, n);
      break;
    case 'ice':
      ctx.strokeStyle = 'rgba(150,220,255,0.7)'; ctx.lineWidth = width * 1.1; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = width * 0.4; strokePath(ctx, pts, n);
      break;
    case 'stars':
      ctx.strokeStyle = 'rgba(60,50,140,0.55)'; ctx.lineWidth = width; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#ffe36b'; ctx.lineWidth = width * 0.22;
      ctx.setLineDash([width * 0.2, width * 0.8]); strokePath(ctx, pts, n);
      break;
    case 'fire': {
      ctx.strokeStyle = 'rgba(255,90,20,0.55)'; ctx.lineWidth = width * 1.25; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#ffb21a'; ctx.lineWidth = width * 0.6; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#fff3a0'; ctx.lineWidth = width * 0.22; strokePath(ctx, pts, n);
      break;
    }
    case 'electric': {
      ctx.strokeStyle = 'rgba(90,110,255,0.35)'; ctx.lineWidth = width * 1.3; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#e9f4ff'; ctx.lineWidth = Math.max(1, width * 0.22);
      ctx.shadowColor = '#7f9cff'; ctx.shadowBlur = width * 0.8;
      const frame = Math.floor(t * 18);
      ctx.beginPath();
      ctx.moveTo(pts[0], pts[1]);
      for (let k = 2; k < n; k += 2) {
        const j = (hash(k * 131 + frame * 7 + seed) - 0.5) * width * 0.9;
        const j2 = (hash(k * 71 + frame * 13 + seed) - 0.5) * width * 0.9;
        ctx.lineTo(pts[k] + j, pts[k + 1] + j2);
      }
      ctx.stroke();
      break;
    }
    case 'toxic':
      ctx.strokeStyle = 'rgba(90,220,40,0.5)'; ctx.lineWidth = width * 1.15; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#c6ff6b'; ctx.lineWidth = width * 0.35; strokePath(ctx, pts, n);
      break;
    case 'gold': {
      ctx.strokeStyle = '#b97d00'; ctx.lineWidth = width * 1.05; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#ffd23f'; ctx.lineWidth = width * 0.75; strokePath(ctx, pts, n);
      ctx.strokeStyle = 'rgba(255,250,210,0.9)'; ctx.lineWidth = width * 0.22;
      ctx.setLineDash([width * 0.6, width * 1.4]); ctx.lineDashOffset = -t * width * 5; strokePath(ctx, pts, n);
      break;
    }
    case 'rainbow':
    case 'aurora': {
      const chunk = 8;
      ctx.lineWidth = width;
      const aur = id === 'aurora';
      for (let k = 0; k < n - 2; k += chunk) {
        const end = Math.min(n, k + chunk + 2);
        const hue = aur ? 150 + 70 * Math.sin(k * 0.02 - t * 2) : (k * 2.2 - t * 160) % 360;
        ctx.strokeStyle = aur ? `hsla(${hue},90%,62%,0.75)` : `hsl(${(hue + 360) % 360},95%,62%)`;
        ctx.beginPath(); ctx.moveTo(pts[k], pts[k + 1]);
        for (let m = k + 2; m < end; m += 2) ctx.lineTo(pts[m], pts[m + 1]);
        ctx.stroke();
      }
      ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = width * 0.2; strokePath(ctx, pts, n);
      break;
    }
    case 'galaxy':
      ctx.strokeStyle = 'rgba(40,20,100,0.7)'; ctx.lineWidth = width * 1.1; strokePath(ctx, pts, n);
      ctx.strokeStyle = 'rgba(200,110,255,0.6)'; ctx.lineWidth = width * 0.5; strokePath(ctx, pts, n);
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = width * 0.16;
      ctx.setLineDash([1, width * 1.3]); ctx.lineDashOffset = -t * width * 2; strokePath(ctx, pts, n);
      break;
    case 'comet': {
      // fades out towards the tail
      const chunk = 6;
      for (let k = 0; k < n - 2; k += chunk) {
        const f = k / n;
        const end = Math.min(n, k + chunk + 2);
        ctx.strokeStyle = `rgba(140,220,255,${0.15 + f * 0.75})`;
        ctx.lineWidth = width * (0.4 + f * 0.9);
        ctx.beginPath(); ctx.moveTo(pts[k], pts[k + 1]);
        for (let m = k + 2; m < end; m += 2) ctx.lineTo(pts[m], pts[m + 1]);
        ctx.stroke();
      }
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = width * 0.2; strokePath(ctx, pts, n);
      break;
    }
    default:
      ctx.strokeStyle = rgba(color, 0.6); ctx.lineWidth = width; strokePath(ctx, pts, n);
      ctx.strokeStyle = rgba(shade(color, 0.35), 0.75); ctx.lineWidth = width * 0.3; strokePath(ctx, pts, n);
  }
  ctx.restore();
}

/* -------------------------------------------------------- particle presets */

const TRAIL_FX = {
  hearts: { rate: 7, shape: 'heart', colors: ['#ff5c9a', '#ff9ec8'], size: 0.2, up: 0.8 },
  bubbles: { rate: 8, shape: 'ring', colors: ['#bfeaff', '#ffffff'], size: 0.18, up: 1.2 },
  ice: { rate: 9, shape: 'flake', colors: ['#ffffff', '#bfe9ff'], size: 0.17, up: 0.2 },
  stars: { rate: 9, shape: 'star', colors: ['#ffe36b', '#ffffff'], size: 0.17, up: 0.3 },
  fire: { rate: 22, shape: 'circle', colors: ['#ff5a1f', '#ffb21a', '#ffd23f'], size: 0.17, up: 2.2 },
  electric: { rate: 14, shape: 'spark', colors: ['#e9f4ff', '#9fb6ff'], size: 0.18, spread: 6 },
  toxic: { rate: 10, shape: 'circle', colors: ['#9dff3a', '#5ad11e'], size: 0.13, up: -2.2 },
  gold: { rate: 10, shape: 'star', colors: ['#ffd23f', '#fff4b8'], size: 0.14, up: 0.4 },
  rainbow: { rate: 14, shape: 'square', colors: ['#ff4d6d', '#ffd23f', '#3ddc84', '#3fa9f5', '#a855f7'], size: 0.12, up: 0.5 },
  galaxy: { rate: 10, shape: 'star', colors: ['#ffffff', '#d7b4ff', '#ff9cf0'], size: 0.13, up: 0 },
  comet: { rate: 16, shape: 'circle', colors: ['#bdeaff', '#ffffff'], size: 0.14, up: 0 },
  aurora: { rate: 12, shape: 'circle', colors: ['#2bffb4', '#7a5cff', '#59d8ff'], size: 0.14, up: 0.6 },
};

const SKIN_FX = {
  fire: { rate: 16, shape: 'circle', colors: ['#ff5a1f', '#ffb21a', '#ffe08a'], size: 0.13, up: 2.6 },
  snow: { rate: 8, shape: 'flake', colors: ['#ffffff', '#d4f3ff'], size: 0.13, up: -0.6 },
  spark: { rate: 10, shape: 'spark', colors: ['#fff36b', '#ffffff', '#9fb6ff'], size: 0.15, spread: 5 },
  gold: { rate: 9, shape: 'star', colors: ['#ffd23f', '#fff4b8'], size: 0.12, up: 0.6 },
  bubble: { rate: 8, shape: 'ring', colors: ['#9dff3a', '#d8ff9e'], size: 0.12, up: 1.4 },
  petal: { rate: 6, shape: 'petal', colors: ['#ffb7d5', '#ff8fbd', '#ffffff'], size: 0.13, up: -0.8 },
  star: { rate: 8, shape: 'star', colors: ['#ffffff', '#d7b4ff'], size: 0.11, up: 0.3 },
  rainbow: { rate: 12, shape: 'square', colors: ['#ff4d6d', '#ffd23f', '#3ddc84', '#3fa9f5', '#a855f7'], size: 0.1, up: 0.8 },
};

function emitFx(ps, fx, x, y, u, dt, jitter) {
  if (!fx || !ps.chance(fx.rate, dt)) return;
  const col = fx.colors[(Math.random() * fx.colors.length) | 0];
  const sp = fx.spread || 1;
  const vx = (Math.random() - 0.5) * sp * u;
  const vy = ((Math.random() - 0.5) * sp - (fx.up || 0)) * u;
  ps.spawn(
    x + (Math.random() - 0.5) * jitter * u, y + (Math.random() - 0.5) * jitter * u,
    vx, vy, 0.45 + Math.random() * 0.45, fx.size * u * (0.7 + Math.random() * 0.6), col, fx.shape,
    fx.shape === 'petal' ? 0.8 * u : 0, 0.93,
  );
}

export function emitTrailFx(ps, trail, x, y, u, dt) { emitFx(ps, TRAIL_FX[trail?.id], x, y, u, dt, 0.5); }
export function emitSkinFx(ps, skin, x, y, u, dt) { emitFx(ps, SKIN_FX[skin?.fx], x, y, u, dt, 1.0); }

/** Small helper for UI thumbnails: sample colour of a trail. */
export function trailSwatch(trail, color) {
  const map = {
    neon: '#18e7ff', candy: '#ff3d6e', hearts: '#ff5c9a', bubbles: '#7fd4ff', ice: '#bfe9ff',
    stars: '#ffe36b', fire: '#ff7a1a', electric: '#9fb6ff', toxic: '#9dff3a', gold: '#ffc21a',
    galaxy: '#8a4dff', comet: '#8cdcff',
  };
  return map[trail.id] || color;
}

