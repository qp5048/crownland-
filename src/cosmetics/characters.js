import { TAU, rgba, shade } from '../core/math.js';
import { starPath } from '../game/particles.js';
import { drawEyes, rrect, triangle, blinkAmount } from './shapes.js';

/**
 * Character skins. Each entry may provide:
 *   back(ctx, skin, x, y, s, t)            drawn behind the head (ears, mane)
 *   paint(ctx, skin, X, Y, s, t)           the face texture, clipped to the head
 *   face(ctx, skin, x, y, s, angle, t, seed) replaces the default eyes + smile
 *   front(ctx, skin, x, y, s, t, angle)    drawn on top (beaks, horns, antennae)
 * (x, y) is the head centre, (X, Y) its top-left corner, s its size.
 */

const hash = (n) => {
  n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
};

function softBase(ctx, X, Y, s, color, light = 0.18) {
  const g = ctx.createRadialGradient(X + s * 0.3, Y + s * 0.25, s * 0.05, X + s * 0.5, Y + s * 0.5, s * 0.8);
  g.addColorStop(0, shade(color, light));
  g.addColorStop(1, shade(color, -0.08));
  ctx.fillStyle = g;
  ctx.fillRect(X - s * 0.2, Y - s * 0.2, s * 1.4, s * 1.4);
}

function ears(ctx, x, y, s, col, inner, opts = {}) {
  const { spread = 0.3, h = 0.3, w = 0.17, tilt = 0.18, twitch = 0, tip = null } = opts;
  for (const side of [-1, 1]) {
    ctx.save();
    ctx.translate(x + side * s * spread, y - s * 0.38);
    ctx.rotate(side * (tilt + (side > 0 ? twitch : 0)));
    ctx.fillStyle = col;
    triangle(ctx, -s * w, s * 0.1, 0, -s * h, s * w, s * 0.1);
    ctx.fill();
    if (tip) {
      ctx.fillStyle = tip;
      triangle(ctx, -s * w * 0.42, -s * h * 0.45, 0, -s * h, s * w * 0.42, -s * h * 0.45);
      ctx.fill();
    }
    ctx.fillStyle = inner;
    triangle(ctx, -s * w * 0.55, s * 0.06, 0, -s * h * 0.62, s * w * 0.55, s * 0.06);
    ctx.fill();
    ctx.restore();
  }
}

const earTwitch = (t, seed = 0) => {
  const p = (t * 0.7 + seed) % 5;
  return p < 0.25 ? Math.sin((p / 0.25) * Math.PI) * 0.3 : 0;
};

function blush(ctx, x, y, s, color = 'rgba(255,110,150,0.35)') {
  ctx.fillStyle = color;
  for (const side of [-1, 1]) {
    ctx.beginPath(); ctx.ellipse(x + side * s * 0.3, y + s * 0.12, s * 0.08, s * 0.05, 0, 0, TAU); ctx.fill();
  }
}

export const CHARACTERS = {
  /* ------------------------------------------------------------ animals */
  cat: {
    back(ctx, sk, x, y, s, t) { ears(ctx, x, y, s, sk.colors[0], '#ffb3c7', { twitch: earTwitch(t) }); },
    paint(ctx, sk, X, Y, s) {
      const c = sk.colors;
      softBase(ctx, X, Y, s, c[0]);
      ctx.fillStyle = c[1];
      for (let k = -1; k <= 1; k++) {
        const cx = X + s / 2 + k * s * 0.15;
        triangle(ctx, cx - s * 0.05, Y, cx + s * 0.05, Y, cx, Y + s * (k ? 0.17 : 0.24));
        ctx.fill();
      }
      for (const side of [0, 1]) {
        for (let k = 0; k < 2; k++) {
          const ex = side ? X + s : X, yy = Y + s * (0.42 + k * 0.14);
          triangle(ctx, ex, yy - s * 0.04, ex, yy + s * 0.04, ex + (side ? -1 : 1) * s * 0.16, yy);
          ctx.fill();
        }
      }
      ctx.fillStyle = c[2];
      ctx.beginPath(); ctx.ellipse(X + s / 2, Y + s * 0.73, s * 0.27, s * 0.19, 0, 0, TAU); ctx.fill();
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      drawEyes(ctx, x, y, s, a, t, seed, { y: -0.1, smile: false, pupil: '#2b3a1a' });
      ctx.fillStyle = '#ff7a9c';
      triangle(ctx, x - s * 0.05, y + s * 0.13, x + s * 0.05, y + s * 0.13, x, y + s * 0.19); ctx.fill();
      ctx.strokeStyle = 'rgba(60,40,30,0.75)'; ctx.lineWidth = Math.max(1, s * 0.03); ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(x - s * 0.045, y + s * 0.2, s * 0.045, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.arc(x + s * 0.045, y + s * 0.2, s * 0.045, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = Math.max(1, s * 0.022);
      ctx.beginPath();
      for (const side of [-1, 1]) {
        for (let k = -1; k <= 1; k++) {
          ctx.moveTo(x + side * s * 0.2, y + s * 0.17 + k * s * 0.03);
          ctx.lineTo(x + side * s * 0.56, y + s * 0.14 + k * s * 0.08);
        }
      }
      ctx.stroke();
    },
  },

  fox: {
    back(ctx, sk, x, y, s, t) { ears(ctx, x, y, s, sk.colors[0], '#ffd6b8', { h: 0.38, w: 0.16, spread: 0.29, tip: sk.colors[2], twitch: earTwitch(t, 2) }); },
    paint(ctx, sk, X, Y, s) {
      const c = sk.colors;
      softBase(ctx, X, Y, s, c[0]);
      ctx.fillStyle = c[1];
      ctx.beginPath();
      ctx.moveTo(X, Y + s * 0.5);
      ctx.quadraticCurveTo(X + s * 0.25, Y + s * 0.55, X + s * 0.5, Y + s * 0.95);
      ctx.quadraticCurveTo(X + s * 0.75, Y + s * 0.55, X + s, Y + s * 0.5);
      ctx.lineTo(X + s, Y + s); ctx.lineTo(X, Y + s);
      ctx.closePath(); ctx.fill();
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      drawEyes(ctx, x, y, s, a, t, seed, { y: -0.09, r: 0.11, smile: false, pupil: '#3a1d0a' });
      ctx.fillStyle = sk.colors[2];
      ctx.beginPath(); ctx.ellipse(x, y + s * 0.2, s * 0.07, s * 0.05, 0, 0, TAU); ctx.fill();
    },
  },

  penguin: {
    paint(ctx, sk, X, Y, s) {
      const c = sk.colors;
      softBase(ctx, X, Y, s, c[0], 0.25);
      ctx.fillStyle = c[1];
      ctx.beginPath();
      ctx.arc(X + s * 0.36, Y + s * 0.48, s * 0.25, 0, TAU);
      ctx.arc(X + s * 0.64, Y + s * 0.48, s * 0.25, 0, TAU);
      ctx.fill();
      ctx.beginPath(); ctx.ellipse(X + s / 2, Y + s * 0.74, s * 0.33, s * 0.3, 0, 0, TAU); ctx.fill();
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      drawEyes(ctx, x, y, s, a, t, seed, { y: -0.03, sep: 0.15, r: 0.1, smile: false });
      blush(ctx, x, y + s * 0.06, s);
    },
    front(ctx, sk, x, y, s, t) {
      const open = (t % 3.1) < 0.35 ? Math.sin(((t % 3.1) / 0.35) * Math.PI) * s * 0.05 : 0;
      ctx.fillStyle = sk.colors[2];
      triangle(ctx, x - s * 0.09, y + s * 0.1, x + s * 0.09, y + s * 0.1, x, y + s * 0.18); ctx.fill();
      ctx.fillStyle = shade(sk.colors[2], -0.15);
      triangle(ctx, x - s * 0.07, y + s * 0.12 + open, x + s * 0.07, y + s * 0.12 + open, x, y + s * 0.2 + open); ctx.fill();
    },
  },

  bear: {
    back(ctx, sk, x, y, s) {
      for (const side of [-1, 1]) {
        ctx.fillStyle = sk.colors[0];
        ctx.beginPath(); ctx.arc(x + side * s * 0.34, y - s * 0.4, s * 0.17, 0, TAU); ctx.fill();
        ctx.fillStyle = sk.colors[1];
        ctx.beginPath(); ctx.arc(x + side * s * 0.34, y - s * 0.4, s * 0.09, 0, TAU); ctx.fill();
      }
    },
    paint(ctx, sk, X, Y, s) {
      softBase(ctx, X, Y, s, sk.colors[0]);
      ctx.fillStyle = sk.colors[1];
      ctx.beginPath(); ctx.ellipse(X + s / 2, Y + s * 0.7, s * 0.25, s * 0.18, 0, 0, TAU); ctx.fill();
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      const dx = Math.cos(a) * s * 0.03, dy = Math.sin(a) * s * 0.02;
      const open = 1 - blinkAmount(t, seed) * 0.9;
      for (const side of [-1, 1]) {
        ctx.fillStyle = sk.colors[2];
        ctx.beginPath(); ctx.ellipse(x + side * s * 0.19 + dx, y - s * 0.08 + dy, s * 0.06, s * 0.065 * open, 0, 0, TAU); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(x + side * s * 0.19 + dx - s * 0.02, y - s * 0.1 + dy, s * 0.018, 0, TAU); ctx.fill();
      }
      ctx.fillStyle = sk.colors[2];
      ctx.beginPath(); ctx.ellipse(x, y + s * 0.15, s * 0.08, s * 0.055, 0, 0, TAU); ctx.fill();
      ctx.strokeStyle = sk.colors[2]; ctx.lineWidth = Math.max(1, s * 0.03); ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x, y + s * 0.2); ctx.lineTo(x, y + s * 0.25);
      ctx.arc(x - s * 0.04, y + s * 0.25, s * 0.04, 0, Math.PI * 0.9);
      ctx.moveTo(x, y + s * 0.25); ctx.arc(x + s * 0.04, y + s * 0.25, s * 0.04, Math.PI, Math.PI * 0.1, true);
      ctx.stroke();
    },
  },

  frog: {
    paint(ctx, sk, X, Y, s) {
      const c = sk.colors;
      softBase(ctx, X, Y, s, c[0]);
      ctx.fillStyle = rgba(c[1], 0.7);
      for (const [u, v, r] of [[0.2, 0.75, 0.07], [0.8, 0.7, 0.06], [0.12, 0.45, 0.05], [0.88, 0.42, 0.05], [0.6, 0.88, 0.05]]) {
        ctx.beginPath(); ctx.arc(X + u * s, Y + v * s, r * s, 0, TAU); ctx.fill();
      }
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      const c = sk.colors;
      const dx = Math.cos(a), dy = Math.sin(a);
      const open = 1 - blinkAmount(t, seed) * 0.95;
      for (const side of [-1, 1]) {
        const ex = x + side * s * 0.24, ey = y - s * 0.43;
        ctx.fillStyle = c[0];
        ctx.beginPath(); ctx.arc(ex, ey, s * 0.17, 0, TAU); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.ellipse(ex, ey, s * 0.13, s * 0.13 * open, 0, 0, TAU); ctx.fill();
        if (open > 0.3) {
          ctx.fillStyle = '#1f2540';
          ctx.beginPath(); ctx.ellipse(ex + dx * s * 0.04, ey + dy * s * 0.04, s * 0.07, s * 0.05 * open, 0, 0, TAU); ctx.fill();
        }
      }
      blush(ctx, x, y, s, rgba(c[2], 0.45));
      ctx.strokeStyle = shade(c[1], -0.35); ctx.lineWidth = Math.max(1, s * 0.04); ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(x, y - s * 0.05, s * 0.28, 0.2 * Math.PI, 0.8 * Math.PI); ctx.stroke();
      // tongue flick every few seconds
      const p = (t + seed) % 4.2;
      if (p < 0.4) {
        const len = Math.sin((p / 0.4) * Math.PI) * s * 0.55;
        ctx.strokeStyle = c[2]; ctx.lineWidth = Math.max(2, s * 0.07);
        ctx.beginPath(); ctx.moveTo(x, y + s * 0.2); ctx.lineTo(x + dx * len, y + s * 0.2 + dy * len); ctx.stroke();
        ctx.fillStyle = c[2];
        ctx.beginPath(); ctx.arc(x + dx * len, y + s * 0.2 + dy * len, s * 0.06, 0, TAU); ctx.fill();
      }
    },
  },

  pig: {
    back(ctx, sk, x, y, s, t) { ears(ctx, x, y, s, sk.colors[1], sk.colors[2], { h: 0.22, w: 0.16, spread: 0.32, tilt: 0.55, twitch: earTwitch(t, 1) }); },
    paint(ctx, sk, X, Y, s) { softBase(ctx, X, Y, s, sk.colors[0]); },
    face(ctx, sk, x, y, s, a, t, seed) {
      drawEyes(ctx, x, y, s, a, t, seed, { y: -0.12, sep: 0.2, r: 0.1, smile: false });
      ctx.fillStyle = sk.colors[1];
      ctx.beginPath(); ctx.ellipse(x, y + s * 0.13, s * 0.19, s * 0.13, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = sk.colors[2];
      for (const side of [-1, 1]) { ctx.beginPath(); ctx.ellipse(x + side * s * 0.07, y + s * 0.13, s * 0.035, s * 0.05, 0, 0, TAU); ctx.fill(); }
      blush(ctx, x, y + s * 0.02, s);
    },
  },

  donut: {
    paint(ctx, sk, X, Y, s, t) {
      const c = sk.colors;
      softBase(ctx, X, Y, s, c[0]);
      ctx.fillStyle = c[1];
      ctx.beginPath();
      ctx.moveTo(X - 2, Y - 2);
      ctx.lineTo(X + s + 2, Y - 2);
      ctx.lineTo(X + s + 2, Y + s * 0.55);
      const drips = [0.62, 0.78, 0.6, 0.86, 0.64, 0.74];
      for (let k = drips.length - 1; k >= 0; k--) {
        const x0 = X + ((k + 1) * s) / drips.length, x1 = X + (k * s) / drips.length;
        ctx.quadraticCurveTo((x0 + x1) / 2, Y + s * drips[k] + s * 0.08, x1, Y + s * 0.56);
      }
      ctx.closePath(); ctx.fill();
      const cols = ['#ffffff', '#ffd23f', '#3fa9f5', '#3ddc84', '#a855f7', '#ff5a5a'];
      for (let k = 0; k < 12; k++) {
        const u = 0.1 + hash(k * 31 + 7) * 0.8, v = 0.08 + hash(k * 17 + 3) * 0.42;
        ctx.save();
        ctx.translate(X + u * s, Y + v * s);
        ctx.rotate(hash(k * 13) * TAU + Math.sin(t * 2 + k) * 0.2);
        ctx.fillStyle = cols[k % cols.length];
        rrect(ctx, -s * 0.045, -s * 0.014, s * 0.09, s * 0.028, s * 0.014); ctx.fill();
        ctx.restore();
      }
      // a highlight that slides over the icing
      const hx = X + ((t * 0.35) % 1.6 - 0.3) * s;
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.beginPath(); ctx.ellipse(hx, Y + s * 0.2, s * 0.12, s * 0.06, -0.4, 0, TAU); ctx.fill();
    },
  },

  /* ----------------------------------------------------- animated, epic */
  robot: {
    paint(ctx, sk, X, Y, s) {
      const c = sk.colors;
      const g = ctx.createLinearGradient(X, Y, X + s, Y + s);
      g.addColorStop(0, shade(c[0], 0.3)); g.addColorStop(0.5, c[0]); g.addColorStop(1, c[1]);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      ctx.strokeStyle = rgba(c[1], 0.8); ctx.lineWidth = Math.max(1, s * 0.025);
      ctx.beginPath(); ctx.moveTo(X, Y + s * 0.74); ctx.lineTo(X + s, Y + s * 0.74); ctx.stroke();
      ctx.fillStyle = shade(c[1], -0.2);
      for (const [u, v] of [[0.13, 0.13], [0.87, 0.13], [0.13, 0.87], [0.87, 0.87]]) { ctx.beginPath(); ctx.arc(X + u * s, Y + v * s, s * 0.03, 0, TAU); ctx.fill(); }
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      const c = sk.colors;
      ctx.fillStyle = '#121826';
      rrect(ctx, x - s * 0.38, y - s * 0.22, s * 0.76, s * 0.3, s * 0.1); ctx.fill();
      const open = 1 - blinkAmount(t, seed) * 0.9;
      const dx = Math.cos(a) * s * 0.05;
      ctx.save();
      ctx.shadowColor = c[2]; ctx.shadowBlur = s * 0.25;
      ctx.fillStyle = c[2];
      for (const side of [-1, 1]) rrect(ctx, x + side * s * 0.16 - s * 0.07 + dx, y - s * 0.07 - s * 0.05 * open, s * 0.14, Math.max(1, s * 0.1 * open), s * 0.04), ctx.fill();
      ctx.restore();
      // scanning light across the visor
      const sx = x + Math.sin(t * 2.4) * s * 0.3;
      ctx.fillStyle = 'rgba(255,80,80,0.85)';
      ctx.fillRect(sx - s * 0.02, y - s * 0.2, s * 0.04, s * 0.03);
      ctx.strokeStyle = 'rgba(18,24,38,0.7)'; ctx.lineWidth = Math.max(1, s * 0.025);
      ctx.beginPath();
      for (let k = -1; k <= 1; k++) { ctx.moveTo(x + k * s * 0.07, y + s * 0.17); ctx.lineTo(x + k * s * 0.07, y + s * 0.27); }
      ctx.stroke();
    },
    front(ctx, sk, x, y, s, t) {
      ctx.strokeStyle = shade(sk.colors[1], -0.2); ctx.lineWidth = Math.max(1, s * 0.04);
      ctx.beginPath(); ctx.moveTo(x, y - s * 0.5); ctx.lineTo(x, y - s * 0.72); ctx.stroke();
      const on = Math.sin(t * 6) > 0;
      ctx.save();
      if (on) { ctx.shadowColor = '#ff4d4d'; ctx.shadowBlur = s * 0.35; }
      ctx.fillStyle = on ? '#ff4d4d' : '#7a2a2a';
      ctx.beginPath(); ctx.arc(x, y - s * 0.76, s * 0.065, 0, TAU); ctx.fill();
      ctx.restore();
    },
  },

  ghost: {
    paint(ctx, sk, X, Y, s, t) {
      const g = ctx.createLinearGradient(0, Y, 0, Y + s);
      g.addColorStop(0, sk.colors[0]); g.addColorStop(1, sk.colors[1]);
      ctx.fillStyle = g; ctx.fillRect(X - s * 0.1, Y - s * 0.1, s * 1.2, s * 1.4);
      ctx.fillStyle = `rgba(255,255,255,${0.25 + 0.1 * Math.sin(t * 3)})`;
      ctx.beginPath(); ctx.ellipse(X + s * 0.32, Y + s * 0.22, s * 0.14, s * 0.08, -0.5, 0, TAU); ctx.fill();
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      const open = 1 - blinkAmount(t, seed) * 0.92;
      const dx = Math.cos(a) * s * 0.05, dy = Math.sin(a) * s * 0.03;
      ctx.fillStyle = '#2a2140';
      for (const side of [-1, 1]) { ctx.beginPath(); ctx.ellipse(x + side * s * 0.15 + dx, y - s * 0.08 + dy, s * 0.07, s * 0.11 * open, 0, 0, TAU); ctx.fill(); }
      const m = 0.6 + 0.4 * Math.sin(t * 4);
      ctx.beginPath(); ctx.ellipse(x + dx, y + s * 0.12 + dy, s * 0.05, s * 0.06 * m, 0, 0, TAU); ctx.fill();
      blush(ctx, x, y - s * 0.02, s, 'rgba(255,140,190,0.35)');
    },
  },

  slime: {
    paint(ctx, sk, X, Y, s, t) {
      const c = sk.colors;
      const g = ctx.createLinearGradient(0, Y, 0, Y + s);
      g.addColorStop(0, c[2]); g.addColorStop(0.45, c[0]); g.addColorStop(1, c[1]);
      ctx.fillStyle = g; ctx.fillRect(X - s * 0.2, Y - s * 0.2, s * 1.4, s * 1.4);
      for (let k = 0; k < 6; k++) {
        const p = (t * (0.25 + hash(k) * 0.2) + hash(k * 7)) % 1;
        const bx = X + s * (0.15 + hash(k * 13) * 0.7) + Math.sin(t * 2 + k) * s * 0.03;
        const by = Y + s * (1 - p);
        ctx.strokeStyle = `rgba(255,255,255,${0.55 * (1 - p)})`;
        ctx.lineWidth = Math.max(1, s * 0.02);
        ctx.beginPath(); ctx.arc(bx, by, s * (0.025 + hash(k * 3) * 0.03), 0, TAU); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(255,255,255,0.45)';
      ctx.beginPath(); ctx.ellipse(X + s * 0.3, Y + s * 0.25, s * 0.12, s * 0.06, -0.6, 0, TAU); ctx.fill();
    },
  },

  pumpkin: {
    paint(ctx, sk, X, Y, s) {
      const c = sk.colors;
      softBase(ctx, X, Y, s, c[0], 0.15);
      ctx.strokeStyle = rgba(c[1], 0.65); ctx.lineWidth = Math.max(1, s * 0.035);
      for (let k = -2; k <= 2; k++) {
        ctx.beginPath(); ctx.ellipse(X + s / 2 + k * s * 0.2, Y + s / 2, s * 0.16, s * 0.6, 0, 0, TAU); ctx.stroke();
      }
    },
    face(ctx, sk, x, y, s, a, t) {
      const flick = 0.72 + 0.28 * Math.sin(t * 13) * Math.sin(t * 7.3);
      ctx.save();
      ctx.shadowColor = '#ffb000'; ctx.shadowBlur = s * 0.3 * flick;
      ctx.fillStyle = `rgba(255,${190 + Math.round(50 * flick)},60,${0.75 + 0.25 * flick})`;
      for (const side of [-1, 1]) { triangle(ctx, x + side * s * 0.25, y - s * 0.02, x + side * s * 0.09, y - s * 0.02, x + side * s * 0.17, y - s * 0.17); ctx.fill(); }
      ctx.beginPath();
      ctx.moveTo(x - s * 0.28, y + s * 0.1);
      const teeth = [[-0.2, 0.17], [-0.12, 0.11], [-0.04, 0.18], [0.04, 0.11], [0.12, 0.18], [0.2, 0.11], [0.28, 0.1]];
      for (const [u, v] of teeth) ctx.lineTo(x + u * s, y + v * s);
      ctx.quadraticCurveTo(x, y + s * 0.38, x - s * 0.28, y + s * 0.1);
      ctx.fill();
      ctx.restore();
    },
    front(ctx, sk, x, y, s) {
      ctx.fillStyle = '#4c8a2a';
      rrect(ctx, x - s * 0.05, y - s * 0.64, s * 0.1, s * 0.18, s * 0.03); ctx.fill();
      ctx.fillStyle = '#6fbf3a';
      ctx.beginPath(); ctx.ellipse(x + s * 0.13, y - s * 0.56, s * 0.1, s * 0.05, -0.4, 0, TAU); ctx.fill();
    },
  },

  disco: {
    paint(ctx, sk, X, Y, s, t) {
      const n = 6, q = s / n;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          const l = 0.5 + 0.5 * Math.sin(t * 3 + i * 1.3 + j * 0.7);
          const hue = (t * 70 + i * 40 + j * 25) % 360;
          ctx.fillStyle = (i + j + Math.floor(t * 2)) % 7 === 0 ? `hsl(${hue},90%,70%)` : `hsl(215,${12 + l * 10}%,${55 + l * 40}%)`;
          ctx.fillRect(X + i * q + 0.5, Y + j * q + 0.5, q - 1, q - 1);
        }
      }
      ctx.fillStyle = '#fff';
      for (let k = 0; k < 2; k++) {
        const f = Math.floor(t * 1.5) + k * 5;
        const ph = (t * 1.5) % 1;
        starPath(ctx, X + hash(f * 11) * s, Y + hash(f * 23) * s, s * 0.09 * Math.sin(ph * Math.PI), t);
        ctx.fill();
      }
    },
  },

  /* ------------------------------------------------- legendary / mythic */
  alien: {
    paint(ctx, sk, X, Y, s) {
      const g = ctx.createLinearGradient(X, Y, X, Y + s);
      g.addColorStop(0, shade(sk.colors[0], 0.2)); g.addColorStop(1, sk.colors[1]);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      ctx.fillStyle = 'rgba(255,255,255,0.12)';
      for (const [u, v, r] of [[0.2, 0.8, 0.05], [0.78, 0.82, 0.04], [0.5, 0.92, 0.03]]) { ctx.beginPath(); ctx.arc(X + u * s, Y + v * s, r * s, 0, TAU); ctx.fill(); }
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      const open = 1 - blinkAmount(t, seed) * 0.9;
      const dx = Math.cos(a) * s * 0.02;
      for (const side of [-1, 1]) {
        ctx.fillStyle = sk.colors[2];
        ctx.beginPath(); ctx.ellipse(x + side * s * 0.18 + dx, y - s * 0.03, s * 0.16, s * 0.1 * open, side * 0.45, 0, TAU); ctx.fill();
        const shine = 0.5 + 0.5 * Math.sin(t * 2 + side);
        ctx.fillStyle = `rgba(160,255,200,${0.5 + 0.4 * shine})`;
        ctx.beginPath(); ctx.ellipse(x + side * s * 0.15 + dx, y - s * 0.07, s * 0.04, s * 0.025 * open, side * 0.45, 0, TAU); ctx.fill();
      }
      ctx.strokeStyle = 'rgba(16,20,24,0.6)'; ctx.lineWidth = Math.max(1, s * 0.03);
      ctx.beginPath(); ctx.moveTo(x - s * 0.05, y + s * 0.2); ctx.lineTo(x + s * 0.05, y + s * 0.2); ctx.stroke();
    },
    front(ctx, sk, x, y, s, t) {
      for (const side of [-1, 1]) {
        ctx.strokeStyle = sk.colors[1]; ctx.lineWidth = Math.max(1, s * 0.04); ctx.lineCap = 'round';
        const tx = x + side * s * 0.32, ty = y - s * 0.82 + Math.sin(t * 3 + side) * s * 0.03;
        ctx.beginPath(); ctx.moveTo(x + side * s * 0.14, y - s * 0.48); ctx.quadraticCurveTo(x + side * s * 0.18, y - s * 0.75, tx, ty); ctx.stroke();
        ctx.save();
        ctx.shadowColor = '#b8ff6a'; ctx.shadowBlur = s * 0.3;
        ctx.fillStyle = `hsl(${90 + 40 * Math.sin(t * 4 + side)},100%,65%)`;
        ctx.beginPath(); ctx.arc(tx, ty, s * 0.07, 0, TAU); ctx.fill();
        ctx.restore();
      }
    },
  },

  lava: {
    paint(ctx, sk, X, Y, s, t) {
      const c = sk.colors;
      softBase(ctx, X, Y, s, c[0], 0.12);
      const glow = 0.5 + 0.5 * Math.sin(t * 2.5);
      ctx.save();
      ctx.shadowColor = c[1]; ctx.shadowBlur = s * (0.12 + 0.12 * glow);
      ctx.strokeStyle = `rgb(255,${Math.round(90 + 120 * glow)},${Math.round(20 + 40 * glow)})`;
      ctx.lineWidth = Math.max(1, s * 0.045); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      const cracks = [
        [[0, 0.3], [0.22, 0.38], [0.35, 0.22], [0.55, 0.3], [0.62, 0.12]],
        [[0.35, 0.22], [0.42, 0.55], [0.3, 0.75], [0.38, 1]],
        [[0.42, 0.55], [0.7, 0.6], [0.85, 0.45], [1, 0.52]],
        [[0.7, 0.6], [0.78, 0.85], [0.95, 0.95]],
        [[0.55, 0.3], [0.8, 0.25], [0.9, 0.05]],
      ];
      for (const line of cracks) {
        ctx.beginPath();
        line.forEach(([u, v], k) => (k ? ctx.lineTo(X + u * s, Y + v * s) : ctx.moveTo(X + u * s, Y + v * s)));
        ctx.stroke();
      }
      ctx.restore();
    },
    face(ctx, sk, x, y, s, a, t, seed) { drawEyes(ctx, x, y, s, a, t, seed, { glow: '#ff7a1a', mouth: 'rgba(255,170,60,0.9)' }); },
  },

  matrix: {
    paint(ctx, sk, X, Y, s, t) {
      ctx.fillStyle = sk.colors[0]; ctx.fillRect(X, Y, s, s);
      const cols = 6, cw = s / cols;
      ctx.font = `700 ${Math.max(6, Math.round(s * 0.17))}px monospace`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      for (let k = 0; k < cols; k++) {
        const speed = 0.35 + hash(k * 7) * 0.5;
        const head = ((t * speed + hash(k * 3)) % 1.5) - 0.25;
        for (let j = 0; j < 6; j++) {
          const v = head - j * 0.15;
          if (v < -0.1 || v > 1.1) continue;
          const glyph = hash(k * 97 + j * 13 + Math.floor(t * 8)) > 0.5 ? '1' : '0';
          ctx.fillStyle = j === 0 ? '#d9ffe3' : rgba(sk.colors[1], Math.max(0, 0.9 - j * 0.16));
          ctx.fillText(glyph, X + (k + 0.5) * cw, Y + v * s);
        }
      }
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      const open = 1 - blinkAmount(t, seed) * 0.9;
      const dx = Math.cos(a) * s * 0.04;
      ctx.save();
      ctx.shadowColor = sk.colors[1]; ctx.shadowBlur = s * 0.3;
      ctx.fillStyle = '#c8ffd6';
      for (const side of [-1, 1]) ctx.fillRect(x + side * s * 0.18 - s * 0.09 + dx, y - s * 0.08 - s * 0.03 * open, s * 0.18, Math.max(1, s * 0.06 * open));
      ctx.restore();
    },
  },

  unicorn: {
    back(ctx, sk, x, y, s, t) {
      const cols = ['#ff8fc7', '#ffd36b', '#8ee6a8', '#8fd3ff', '#c9a2ff'];
      ctx.lineCap = 'round';
      cols.forEach((col, k) => {
        ctx.strokeStyle = col;
        ctx.lineWidth = s * 0.12;
        const wave = Math.sin(t * 3 + k) * s * 0.04;
        ctx.beginPath();
        ctx.moveTo(x + s * (0.15 - k * 0.1), y - s * 0.52);
        ctx.quadraticCurveTo(x - s * (0.55 + k * 0.02) + wave, y - s * (0.3 - k * 0.12), x - s * (0.5 + k * 0.03) + wave, y + s * (0.05 + k * 0.1));
        ctx.stroke();
      });
    },
    paint(ctx, sk, X, Y, s) {
      const g = ctx.createLinearGradient(X, Y, X + s, Y + s);
      g.addColorStop(0, sk.colors[0]); g.addColorStop(1, shade(sk.colors[1], 0.45));
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      drawEyes(ctx, x, y, s, a, t, seed, { lashes: true, pupil: '#5a2a7a' });
      blush(ctx, x, y, s, 'rgba(255,120,180,0.45)');
    },
    front(ctx, sk, x, y, s, t) {
      ctx.save();
      ctx.translate(x + s * 0.06, y - s * 0.46);
      ctx.rotate(0.15);
      ctx.shadowColor = '#ffe27a'; ctx.shadowBlur = s * (0.2 + 0.1 * Math.sin(t * 3));
      const g = ctx.createLinearGradient(-s * 0.08, 0, s * 0.08, 0);
      g.addColorStop(0, '#ffd23f'); g.addColorStop(0.5, '#fff6c4'); g.addColorStop(1, '#e8a800');
      ctx.fillStyle = g;
      triangle(ctx, -s * 0.08, 0, s * 0.08, 0, 0, -s * 0.42); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(168,107,0,0.7)'; ctx.lineWidth = Math.max(1, s * 0.02);
      ctx.beginPath();
      for (let k = 1; k <= 3; k++) { const v = -k * s * 0.1; const w = s * 0.08 * (1 - k * 0.24); ctx.moveTo(-w, v + s * 0.03); ctx.lineTo(w, v - s * 0.02); }
      ctx.stroke();
      const sp = (t * 1.2) % 2;
      if (sp < 0.6) {
        ctx.fillStyle = `rgba(255,255,255,${1 - sp / 0.6})`;
        starPath(ctx, s * 0.06, -s * 0.36, s * 0.08 * (0.5 + sp), 0); ctx.fill();
      }
      ctx.restore();
    },
  },

  hologram: {
    paint(ctx, sk, X, Y, s, t) {
      const h1 = 185 + 40 * Math.sin(t * 0.9), h2 = 300 + 30 * Math.sin(t * 1.3);
      const g = ctx.createLinearGradient(X, Y, X + s, Y + s);
      g.addColorStop(0, `hsla(${h1},100%,62%,0.9)`); g.addColorStop(1, `hsla(${h2},100%,62%,0.9)`);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      const step = s / 10, off = (t * s * 0.4) % step;
      ctx.fillStyle = 'rgba(255,255,255,0.22)';
      for (let yy = Y - step + off; yy < Y + s; yy += step) ctx.fillRect(X, yy, s, Math.max(1, step * 0.35));
      if ((t * 0.6) % 2 < 0.14) {
        for (let k = 0; k < 3; k++) {
          const sy = Y + hash(Math.floor(t * 20) + k * 7) * s;
          ctx.fillStyle = k % 2 ? 'rgba(255,60,200,0.6)' : 'rgba(60,240,255,0.6)';
          ctx.fillRect(X + (hash(k + Math.floor(t * 30)) - 0.5) * s * 0.3, sy, s, s * 0.06);
        }
      }
    },
    face(ctx, sk, x, y, s, a, t, seed) { drawEyes(ctx, x, y, s, a, t, seed, { glow: '#9ff8ff', white: '#effeff', pupil: '#0b3a55', mouth: 'rgba(255,255,255,0.8)' }); },
  },

  blackhole: {
    paint(ctx, sk, X, Y, s, t) {
      const c = sk.colors;
      const cx = X + s / 2, cy = Y + s / 2;
      ctx.fillStyle = c[0]; ctx.fillRect(X, Y, s, s);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, 0.5);
      ctx.rotate(t * 1.1);
      const segs = 28;
      for (let k = 0; k < segs; k++) {
        const a0 = (k / segs) * TAU, a1 = ((k + 1.15) / segs) * TAU;
        const f = 0.5 + 0.5 * Math.sin(k * 0.9 + t * 3);
        ctx.strokeStyle = k % 2 ? rgba(c[1], 0.5 + 0.5 * f) : rgba(c[2], 0.4 + 0.5 * f);
        ctx.lineWidth = s * 0.13;
        ctx.beginPath(); ctx.arc(0, 0, s * 0.38, a0, a1); ctx.stroke();
      }
      ctx.restore();
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 2);
      ctx.strokeStyle = rgba(c[2], 0.5); ctx.lineWidth = Math.max(1, s * 0.025);
      for (let k = 0; k < 3; k++) {
        ctx.rotate(TAU / 3);
        ctx.beginPath();
        for (let u = 0; u <= 1; u += 0.1) {
          const r = s * (0.05 + u * 0.32), a = u * 2.4;
          if (u === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r); else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
        }
        ctx.stroke();
      }
      ctx.restore();
      const g = ctx.createRadialGradient(cx, cy, s * 0.05, cx, cy, s * 0.22);
      g.addColorStop(0, '#000'); g.addColorStop(0.7, '#000'); g.addColorStop(1, rgba(c[1], 0));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, s * 0.22, 0, TAU); ctx.fill();
    },
    face(ctx, sk, x, y, s, a, t, seed) {
      const open = 1 - blinkAmount(t, seed) * 0.9;
      ctx.save();
      ctx.shadowColor = '#c9a2ff'; ctx.shadowBlur = s * 0.3;
      ctx.fillStyle = '#efe2ff';
      for (const side of [-1, 1]) { ctx.beginPath(); ctx.ellipse(x + side * s * 0.1 + Math.cos(a) * s * 0.02, y - s * 0.03, s * 0.045, s * 0.06 * open, 0, 0, TAU); ctx.fill(); }
      ctx.restore();
    },
  },

  supernova: {
    paint(ctx, sk, X, Y, s, t) {
      const c = sk.colors;
      const cx = X + s / 2, cy = Y + s / 2;
      const pulse = 0.5 + 0.5 * Math.sin(t * 3);
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * (0.75 + 0.1 * pulse));
      g.addColorStop(0, '#ffffff'); g.addColorStop(0.25, c[0]); g.addColorStop(0.6, c[1]); g.addColorStop(1, c[2]);
      ctx.fillStyle = g; ctx.fillRect(X, Y, s, s);
      ctx.save();
      ctx.translate(cx, cy); ctx.rotate(t * 0.6);
      ctx.fillStyle = 'rgba(255,255,255,0.22)';
      for (let k = 0; k < 8; k++) { ctx.rotate(TAU / 8); triangle(ctx, -s * 0.04, 0, s * 0.04, 0, 0, -s * 0.75); ctx.fill(); }
      ctx.restore();
      for (let k = 0; k < 3; k++) {
        const f = (t * 0.6 + k / 3) % 1;
        ctx.strokeStyle = `rgba(255,255,255,${0.6 * (1 - f)})`;
        ctx.lineWidth = Math.max(1, s * 0.035);
        ctx.beginPath(); ctx.arc(cx, cy, f * s * 0.75, 0, TAU); ctx.stroke();
      }
    },
  },
};
