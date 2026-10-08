import * as THREE from 'three';
import { mulberry32 } from './util.js';

// ---------------------------------------------------------------------------
// Procedural texture factory. Everything is painted on canvases at load time,
// so the game ships without a single image file.
// ---------------------------------------------------------------------------
const cache = new Map();

function finish(c, opts) {
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = opts.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (opts.repeat || opts.wrap) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    if (opts.repeat) tex.repeat.set(opts.repeat[0], opts.repeat[1]);
  }
  return tex;
}

function make(key, w, h, draw, opts = {}) {
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const tex = finish(c, opts);
  cache.set(key, tex);
  return tex;
}

// per-pixel painter: fn(u, v, out) writes r,g,b(,a) 0..255 into out
function pix(key, w, h, fn, opts = {}, post = null) {
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  const img = g.createImageData(w, h);
  const d = img.data;
  const out = [0, 0, 0, 255];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      out[3] = 255;
      fn(x / w, y / h, out, x, y);
      const i = (y * w + x) * 4;
      d[i] = out[0];
      d[i + 1] = out[1];
      d[i + 2] = out[2];
      d[i + 3] = out[3];
    }
  }
  g.putImageData(img, 0, 0);
  if (post) post(g, w, h);
  const tex = finish(c, opts);
  cache.set(key, tex);
  return tex;
}

// ---- tileable value-noise fbm ----------------------------------------------
function makeFbm(seed, base = 4, oct = 4) {
  const rng = mulberry32(seed);
  const layers = [];
  for (let o = 0; o < oct; o++) {
    const n = base << o;
    const g = new Float32Array(n * n);
    for (let i = 0; i < g.length; i++) g[i] = rng();
    layers.push([g, n]);
  }
  return (u, v) => {
    let s = 0, amp = 0.5, tot = 0;
    for (let k = 0; k < layers.length; k++) {
      const [g, n] = layers[k];
      const x = u * n, y = v * n;
      const xi = Math.floor(x), yi = Math.floor(y);
      const xf = x - xi, yf = y - yi;
      const x0 = ((xi % n) + n) % n, y0 = ((yi % n) + n) % n;
      const x1 = (x0 + 1) % n, y1 = (y0 + 1) % n;
      const a = g[y0 * n + x0], b = g[y0 * n + x1], c = g[y1 * n + x0], d = g[y1 * n + x1];
      const uu = xf * xf * (3 - 2 * xf), vv = yf * yf * (3 - 2 * yf);
      s += (a + (b - a) * uu + (c - a) * vv + (a - b - c + d) * uu * vv) * amp;
      tot += amp;
      amp *= 0.5;
    }
    return s / tot;
  };
}

const hex = (h) => {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const mix3 = (a, b, t, out) => {
  out[0] = a[0] + (b[0] - a[0]) * t;
  out[1] = a[1] + (b[1] - a[1]) * t;
  out[2] = a[2] + (b[2] - a[2]) * t;
};
const sat = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (a, b, x) => {
  const t = sat((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

// ===========================================================================
// FRUIT SKINS (sphere UVs: u around, v from top (0) to bottom (1) on canvas)
// ===========================================================================
export function appleTex() {
  const n1 = makeFbm(11, 4, 5), n2 = makeFbm(12, 3, 3);
  const red = hex('#b3121f'), red2 = hex('#ef3b2f'), yel = hex('#f6b33a'), dark = hex('#6e0c12');
  const tmp = [0, 0, 0];
  return pix('apple', 512, 256, (u, v, o) => {
    const streak = n1(u * 1, v * 0.15 + u * 0.02);
    mix3(red, red2, sat(n2(u, v) * 1.4 - 0.2), o);
    const ys = smooth(0.55, 0.8, streak) * 0.6 + smooth(0.75, 0.95, v) * 0.5;
    mix3(o, yel, ys, o);
    const pole = smooth(0.12, 0, v) * 0.7 + smooth(0.88, 1, v) * 0.5;
    mix3(o, dark, pole, o);
    // tiny lenticels
    const sp = n1(u * 9.0 % 1, v * 9.0 % 1);
    if (sp > 0.78) mix3(o, [255, 230, 170], 0.45, o);
    tmp[0] = 0;
  });
}

export function orangeTex() {
  const n = makeFbm(21, 8, 4), pores = makeFbm(22, 32, 2);
  const a = hex('#f27a0c'), b = hex('#ffa63a');
  return pix('orange', 512, 256, (u, v, o) => {
    mix3(a, b, sat(n(u, v) * 1.5 - 0.25), o);
    const p = pores(u, v);
    const k = p < 0.35 ? 0.82 : 1;
    o[0] *= k; o[1] *= k; o[2] *= k;
    if (v < 0.05) mix3(o, hex('#7a8f2a'), smooth(0.05, 0, v), o);
  });
}

export function poreBump(key = 'pores', scale = 32) {
  const pores = makeFbm(key.length * 7 + scale, scale, 2);
  return pix('bump_' + key + scale, 512, 256, (u, v, o) => {
    const p = pores(u, v);
    const h = p < 0.36 ? 60 : 200 + (p - 0.5) * 60;
    o[0] = o[1] = o[2] = h;
  }, { linear: true });
}

export function lemonTex() {
  const n = makeFbm(31, 8, 4), pores = makeFbm(32, 32, 2);
  const a = hex('#f4cf13'), b = hex('#fff06a');
  return pix('lemon', 512, 256, (u, v, o) => {
    mix3(a, b, sat(n(u, v) * 1.4 - 0.2), o);
    if (pores(u, v) < 0.35) { o[0] *= 0.88; o[1] *= 0.88; o[2] *= 0.8; }
    const tip = Math.min(1, Math.abs(Math.cos(u * Math.PI * 2)));
    if (tip > 0.97) mix3(o, hex('#c9b20c'), (tip - 0.97) * 10, o);
  });
}

export function melonTex() {
  const n = makeFbm(41, 6, 5), w = makeFbm(42, 4, 3);
  const light = hex('#7fd14b'), mid = hex('#4fa52f'), dark = hex('#1f5f1a');
  return pix('melon', 512, 256, (u, v, o) => {
    mix3(light, mid, sat(n(u, v) * 1.4 - 0.3), o);
    const wav = Math.sin((u * 10 + (w(u, v) - 0.5) * 1.6) * Math.PI * 2);
    const stripe = smooth(0.1, 0.35, wav + (n(u * 2 % 1, v) - 0.5) * 0.6);
    mix3(o, dark, stripe * 0.92, o);
    const pole = smooth(0.08, 0, v) + smooth(0.92, 1, v);
    mix3(o, hex('#c9e07a'), pole * 0.4, o);
  });
}

export function coconutTex() {
  const n = makeFbm(51, 4, 5), f = makeFbm(52, 16, 3);
  const a = hex('#4a2a14'), b = hex('#8a5a32');
  return pix('coconut', 512, 256, (u, v, o) => {
    const fib = f(u * 0.25 + v * 0.02, v);
    mix3(a, b, sat(n(u, v) * 0.8 + fib * 0.6 - 0.2), o);
    if (fib > 0.62) mix3(o, hex('#c79a6a'), 0.5, o);
  });
}

export function pineappleTex() {
  const n = makeFbm(61, 8, 3);
  const base = hex('#e08a1e'), lite = hex('#ffcf4a'), edge = hex('#7a4a10'), green = hex('#5e8a2a');
  return pix('pineapple', 512, 512, (u, v, o) => {
    // rotated diamond lattice
    const a = (u * 12 + v * 8), b = (u * 12 - v * 8);
    const fa = a - Math.floor(a), fb = b - Math.floor(b);
    const dx = Math.min(fa, 1 - fa), dy = Math.min(fb, 1 - fb);
    const d = Math.min(dx, dy);
    const center = smooth(0.0, 0.5, Math.min(dx, dy) * 2);
    mix3(base, lite, center * 0.8 + (n(u, v) - 0.5) * 0.4, o);
    if (d < 0.06) mix3(o, edge, smooth(0.06, 0.0, d), o);
    // little green tip in each scale
    const cx = Math.abs(fa - 0.5), cy = Math.abs(fb - 0.5);
    if (cx < 0.07 && cy < 0.07) mix3(o, green, 0.8, o);
  });
}

export function strawberryTex() {
  const n = makeFbm(71, 6, 4);
  return make('strawberry', 512, 256, (g, w, h) => {
    const img = g.createImageData(w, h);
    const a = hex('#c3071f'), b = hex('#ff3b4a'), o = [0, 0, 0];
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      mix3(a, b, sat(n(x / w, y / h) * 1.5 - 0.3), o);
      const i = (y * w + x) * 4;
      img.data[i] = o[0]; img.data[i + 1] = o[1]; img.data[i + 2] = o[2]; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 20; col++) {
        const x = (col + (row % 2) * 0.5) * (w / 20), y = 18 + row * ((h - 30) / 9);
        g.fillStyle = 'rgba(120,0,10,.55)';
        g.beginPath(); g.ellipse(x, y, 7, 5, 0, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#ffe27a';
        g.beginPath(); g.ellipse(x, y - 1, 3, 4, 0, 0, Math.PI * 2); g.fill();
      }
    }
  });
}

export function plumTex() {
  const n = makeFbm(81, 6, 5);
  const a = hex('#3b1066'), b = hex('#7b3fd4'), bloom = hex('#b9a6e6');
  return pix('plum', 512, 256, (u, v, o) => {
    mix3(a, b, sat(n(u, v) * 1.3 - 0.15), o);
    mix3(o, bloom, smooth(0.55, 0.8, n(u * 3 % 1, v * 3 % 1)) * 0.35, o);
  });
}

export function dragonTex() {
  const n = makeFbm(91, 6, 4);
  return pix('dragon', 512, 256, (u, v, o) => {
    mix3(hex('#c4126a'), hex('#ff4fa0'), sat(n(u, v) * 1.4 - 0.2), o);
  });
}

export function kiwiTex() {
  const n = makeFbm(95, 8, 3), hair = makeFbm(96, 64, 2);
  return pix('kiwi', 512, 256, (u, v, o) => {
    mix3(hex('#5a3a1c'), hex('#9a7040'), sat(n(u, v) * 1.2 + (hair(u, v) - 0.5) * 0.8), o);
  });
}

export function pearTex() {
  const n = makeFbm(97, 6, 4), sp = makeFbm(98, 48, 1);
  return pix('pear', 512, 256, (u, v, o) => {
    mix3(hex('#9ccc2e'), hex('#e6e04a'), sat(n(u, v) * 1.4 - 0.2 + v * 0.3), o);
    if (sp(u, v) > 0.8) mix3(o, hex('#6a7a20'), 0.6, o);
    mix3(o, hex('#d9792a'), smooth(0.6, 0.9, n(u * 2 % 1, v)) * 0.35 * (1 - v), o);
  });
}

export function snowTex() {
  const n = makeFbm(99, 8, 4), s = makeFbm(100, 64, 1);
  return pix('snowball', 256, 128, (u, v, o) => {
    const k = 225 + n(u, v) * 30;
    o[0] = k - 8; o[1] = k - 2; o[2] = 255;
    if (s(u, v) > 0.86) { o[0] = o[1] = o[2] = 255; }
  });
}

// ===========================================================================
// CUT FACES (radial textures shown on the slice plane)
// ===========================================================================
function radial(key, draw) {
  return make('cap_' + key, 256, 256, (g, w) => {
    g.translate(w / 2, w / 2);
    draw(g, w / 2 - 2);
  });
}

function noiseDisk(g, R, cols, alpha = 0.18, count = 260) {
  const rng = mulberry32(R * 13 + cols.length);
  for (let i = 0; i < count; i++) {
    const a = rng() * Math.PI * 2, r = Math.sqrt(rng()) * R;
    g.fillStyle = cols[i % cols.length];
    g.globalAlpha = alpha;
    g.beginPath();
    g.arc(Math.cos(a) * r, Math.sin(a) * r, 2 + rng() * 5, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
}

export const CAPS = {
  apple: () => radial('apple', (g, R) => {
    g.fillStyle = '#c4141f'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    const gr = g.createRadialGradient(0, 0, R * 0.1, 0, 0, R * 0.95);
    gr.addColorStop(0, '#fff3cc'); gr.addColorStop(1, '#f7e2a6');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * 0.95, 0, 7); g.fill();
    noiseDisk(g, R * 0.9, ['#fff9e0', '#efd894']);
    g.strokeStyle = 'rgba(190,150,70,.45)'; g.lineWidth = 3;
    g.beginPath();
    for (let i = 0; i <= 5; i++) {
      const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const r = R * 0.32;
      if (i === 0) g.moveTo(Math.cos(a) * r, Math.sin(a) * r); else g.quadraticCurveTo(Math.cos(a - 0.6) * r * 0.3, Math.sin(a - 0.6) * r * 0.3, Math.cos(a) * r, Math.sin(a) * r);
    }
    g.stroke();
    g.fillStyle = '#5a3216';
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      g.save(); g.rotate(a); g.beginPath(); g.ellipse(R * 0.18, 0, 9, 5, 0, 0, 7); g.fill(); g.restore();
    }
  }),
  orange: () => radial('orange', (g, R) => citrus(g, R, '#f27a0c', '#ffb347', '#ffd38a')),
  lemon: () => radial('lemon', (g, R) => citrus(g, R, '#f4cf13', '#fff27a', '#fffbd0')),
  melon: () => radial('melon', (g, R) => {
    g.fillStyle = '#245f1a'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    g.fillStyle = '#d9f2b0'; g.beginPath(); g.arc(0, 0, R * 0.93, 0, 7); g.fill();
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.86);
    gr.addColorStop(0, '#ff5a6e'); gr.addColorStop(0.8, '#f2273f'); gr.addColorStop(1, '#ff7a86');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * 0.86, 0, 7); g.fill();
    noiseDisk(g, R * 0.82, ['#ff8a96', '#d9142e'], 0.25, 400);
    g.fillStyle = '#1a1010';
    const rng = mulberry32(5);
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2 + rng() * 0.2, r = R * (0.42 + rng() * 0.22);
      g.save(); g.translate(Math.cos(a) * r, Math.sin(a) * r); g.rotate(a);
      g.beginPath(); g.ellipse(0, 0, 8, 4.5, 0, 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,.35)'; g.beginPath(); g.ellipse(-2, -1.5, 3, 1.4, 0, 0, 7); g.fill();
      g.fillStyle = '#1a1010';
      g.restore();
    }
  }),
  coconut: () => radial('coconut', (g, R) => {
    g.fillStyle = '#4a2a14'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    g.fillStyle = '#7a4a22'; g.beginPath(); g.arc(0, 0, R * 0.86, 0, 7); g.fill();
    g.fillStyle = '#fbfaf4'; g.beginPath(); g.arc(0, 0, R * 0.78, 0, 7); g.fill();
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.55);
    gr.addColorStop(0, '#e9f1f4'); gr.addColorStop(1, '#cfdde3');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * 0.55, 0, 7); g.fill();
  }),
  pineapple: () => radial('pineapple', (g, R) => {
    g.fillStyle = '#b8681a'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.9);
    gr.addColorStop(0, '#fff3a8'); gr.addColorStop(0.3, '#ffe066'); gr.addColorStop(1, '#ffc928');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * 0.9, 0, 7); g.fill();
    g.strokeStyle = 'rgba(230,160,20,.5)'; g.lineWidth = 2;
    for (let i = 0; i < 40; i++) { const a = (i / 40) * Math.PI * 2; g.beginPath(); g.moveTo(Math.cos(a) * R * 0.3, Math.sin(a) * R * 0.3); g.lineTo(Math.cos(a) * R * 0.88, Math.sin(a) * R * 0.88); g.stroke(); }
    g.fillStyle = '#fff6c8'; g.beginPath(); g.arc(0, 0, R * 0.22, 0, 7); g.fill();
  }),
  strawberry: () => radial('strawberry', (g, R) => {
    g.fillStyle = '#d1102a'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.92);
    gr.addColorStop(0, '#fff0f0'); gr.addColorStop(0.45, '#ffb3bd'); gr.addColorStop(1, '#ff4258');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * 0.92, 0, 7); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 3;
    for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 2; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(a) * R * 0.8, Math.sin(a) * R * 0.8); g.stroke(); }
  }),
  plum: () => radial('plum', (g, R) => {
    g.fillStyle = '#3b1066'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.93);
    gr.addColorStop(0, '#ffcf5a'); gr.addColorStop(1, '#f59a2a');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * 0.93, 0, 7); g.fill();
    noiseDisk(g, R * 0.85, ['#ffe08a', '#e8781a']);
    g.fillStyle = '#7a3f1a'; g.beginPath(); g.ellipse(0, 0, R * 0.3, R * 0.22, 0.3, 0, 7); g.fill();
  }),
  dragonfruit: () => radial('dragon', (g, R) => {
    g.fillStyle = '#ff2f8e'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    g.fillStyle = '#fbf6f2'; g.beginPath(); g.arc(0, 0, R * 0.9, 0, 7); g.fill();
    const rng = mulberry32(9);
    g.fillStyle = '#111';
    for (let i = 0; i < 260; i++) { const a = rng() * 7, r = Math.sqrt(rng()) * R * 0.86; g.beginPath(); g.arc(Math.cos(a) * r, Math.sin(a) * r, 2.2, 0, 7); g.fill(); }
  }),
  kiwi: () => radial('kiwi', (g, R) => {
    g.fillStyle = '#6a4a22'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.94);
    gr.addColorStop(0, '#fbfbe0'); gr.addColorStop(0.28, '#e5f2a0'); gr.addColorStop(0.45, '#8bc43a'); gr.addColorStop(1, '#5ea52a');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * 0.94, 0, 7); g.fill();
    g.strokeStyle = 'rgba(240,250,200,.45)'; g.lineWidth = 2;
    for (let i = 0; i < 60; i++) { const a = (i / 60) * Math.PI * 2; g.beginPath(); g.moveTo(Math.cos(a) * R * 0.3, Math.sin(a) * R * 0.3); g.lineTo(Math.cos(a) * R * 0.9, Math.sin(a) * R * 0.9); g.stroke(); }
    g.fillStyle = '#111';
    for (let i = 0; i < 48; i++) { const a = (i / 48) * Math.PI * 2, r = R * (0.34 + (i % 3) * 0.035); g.save(); g.translate(Math.cos(a) * r, Math.sin(a) * r); g.rotate(a); g.beginPath(); g.ellipse(0, 0, 5, 2.4, 0, 0, 7); g.fill(); g.restore(); }
  }),
  pear: () => radial('pear', (g, R) => {
    g.fillStyle = '#9ccc2e'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    g.fillStyle = '#fbf6dc'; g.beginPath(); g.arc(0, 0, R * 0.94, 0, 7); g.fill();
    noiseDisk(g, R * 0.9, ['#fffbe8', '#ece3b8']);
    g.fillStyle = '#e9dca0'; g.beginPath(); g.ellipse(0, 0, R * 0.25, R * 0.35, 0, 0, 7); g.fill();
    g.fillStyle = '#4a2a10';
    for (const s of [-1, 1]) { g.beginPath(); g.ellipse(s * R * 0.08, 0, 5, 9, 0, 0, 7); g.fill(); }
  }),
  snowball: () => radial('snow', (g, R) => {
    g.fillStyle = '#e8f4ff'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    noiseDisk(g, R * 0.95, ['#ffffff', '#cfe4ff'], 0.5, 300);
  }),
  golden: () => radial('golden', (g, R) => {
    g.fillStyle = '#d9a400'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.95);
    gr.addColorStop(0, '#fffbe0'); gr.addColorStop(1, '#ffe27a');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * 0.95, 0, 7); g.fill();
    noiseDisk(g, R * 0.9, ['#ffffff', '#ffd23f'], 0.5, 200);
  }),
};

function citrus(g, R, peel, flesh, light) {
  g.fillStyle = peel; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
  g.fillStyle = '#fff6e6'; g.beginPath(); g.arc(0, 0, R * 0.92, 0, 7); g.fill();
  const n = 10;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2 + 0.04, a1 = ((i + 1) / n) * Math.PI * 2 - 0.04;
    const gr = g.createRadialGradient(0, 0, R * 0.1, 0, 0, R * 0.86);
    gr.addColorStop(0, light); gr.addColorStop(1, flesh);
    g.fillStyle = gr;
    g.beginPath(); g.moveTo(Math.cos((a0 + a1) / 2) * R * 0.1, Math.sin((a0 + a1) / 2) * R * 0.1);
    g.arc(0, 0, R * 0.86, a0, a1); g.closePath(); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = 2;
    for (let k = 0; k < 6; k++) {
      const a = a0 + (a1 - a0) * (k + 0.5) / 6;
      g.beginPath(); g.moveTo(Math.cos(a) * R * 0.25, Math.sin(a) * R * 0.25); g.lineTo(Math.cos(a) * R * 0.8, Math.sin(a) * R * 0.8); g.stroke();
    }
  }
  g.fillStyle = '#fff6e6'; g.beginPath(); g.arc(0, 0, R * 0.1, 0, 7); g.fill();
}

// ===========================================================================
// FOOD LAYERS
// ===========================================================================
export function doughTex() {
  const n = makeFbm(111, 8, 4);
  return pix('dough', 256, 256, (u, v, o) => {
    mix3(hex('#c97b34'), hex('#f0b866'), sat(n(u, v) * 1.5 - 0.2), o);
  }, { wrap: true });
}

export function sprinkleTex(base) {
  const n = makeFbm(base.length * 31 + 7, 6, 3);
  return make('spr' + base, 512, 256, (g, w, h) => {
    const b = hex(base);
    const img = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = 0.88 + n(x / w, y / h) * 0.24;
      const i = (y * w + x) * 4;
      img.data[i] = Math.min(255, b[0] * k); img.data[i + 1] = Math.min(255, b[1] * k); img.data[i + 2] = Math.min(255, b[2] * k); img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const cols = ['#ffffff', '#ffd23f', '#3fc1ff', '#7cf07c', '#ff4d6d', '#b06cff', '#ff8a3d'];
    const rng = mulberry32(base.length);
    for (let i = 0; i < 160; i++) {
      g.save();
      g.translate(rng() * w, rng() * h);
      g.rotate(rng() * Math.PI);
      g.fillStyle = cols[i % cols.length];
      g.beginPath();
      g.roundRect ? g.roundRect(-7, -2, 14, 4, 2) : g.rect(-7, -2, 14, 4);
      g.fill();
      g.fillStyle = 'rgba(255,255,255,.5)';
      g.fillRect(-5, -1.5, 8, 1);
      g.restore();
    }
  });
}

export function plankTex(color = '#e98a3c') {
  const n = makeFbm(color.length * 3 + parseInt(color.slice(1, 3), 16), 4, 4);
  const base = hex(color);
  return pix('plank' + color, 256, 128, (u, v, o) => {
    const grain = Math.sin((v * 14 + n(u * 0.3, v) * 5) * Math.PI) * 0.5 + 0.5;
    const k = 0.82 + grain * 0.14 + (n(u, v) - 0.5) * 0.2;
    o[0] = Math.min(255, base[0] * k); o[1] = Math.min(255, base[1] * k); o[2] = Math.min(255, base[2] * k);
    if (v < 0.04 || v > 0.96) { o[0] *= 0.75; o[1] *= 0.75; o[2] *= 0.75; }
  });
}

export function pancakeTex() {
  const n = makeFbm(121, 8, 4);
  return pix('pancake', 256, 256, (u, v, o) => {
    mix3(hex('#d98f3c'), hex('#f5c87a'), sat(n(u, v) * 1.6 - 0.3), o);
    if (n(u * 3 % 1, v * 3 % 1) > 0.72) mix3(o, hex('#8a4a18'), 0.35, o);
  });
}

export function cheeseTex() {
  const n = makeFbm(131, 6, 3);
  return make('cheese', 256, 256, (g, w, h) => {
    const img = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = n(x / w, y / h);
      const i = (y * w + x) * 4;
      img.data[i] = 255; img.data[i + 1] = 200 + k * 40; img.data[i + 2] = 40 + k * 50; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const rng = mulberry32(3);
    for (let i = 0; i < 14; i++) {
      const x = rng() * w, y = rng() * h, r = 6 + rng() * 14;
      g.fillStyle = '#e6a414';
      g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
      g.fillStyle = '#fff3a0';
      g.beginPath(); g.arc(x + r * 0.2, y + r * 0.2, r * 0.75, 0, 7); g.fill();
    }
  });
}

export function iceTex() {
  const n = makeFbm(141, 4, 4);
  return make('ice', 256, 256, (g, w, h) => {
    const img = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = n(x / w, y / h);
      const i = (y * w + x) * 4;
      img.data[i] = 170 + k * 70; img.data[i + 1] = 220 + k * 35; img.data[i + 2] = 255; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    g.strokeStyle = 'rgba(255,255,255,.85)';
    g.lineWidth = 2;
    const rng = mulberry32(4);
    for (let i = 0; i < 6; i++) {
      g.beginPath();
      let x = rng() * w, y = rng() * h;
      g.moveTo(x, y);
      for (let k = 0; k < 4; k++) { x += (rng() - 0.5) * 70; y += (rng() - 0.5) * 70; g.lineTo(x, y); }
      g.stroke();
    }
  });
}

export function jellyTex(color) {
  const n = makeFbm(color.length * 5 + 3, 4, 3);
  const b = hex(color);
  return pix('jelly' + color, 128, 128, (u, v, o) => {
    const k = 0.85 + n(u, v) * 0.3;
    o[0] = Math.min(255, b[0] * k + 20); o[1] = Math.min(255, b[1] * k + 20); o[2] = Math.min(255, b[2] * k + 20);
    const e = Math.min(u, v, 1 - u, 1 - v);
    if (e < 0.08) { o[0] *= 0.82; o[1] *= 0.82; o[2] *= 0.82; }
    if (u > 0.12 && u < 0.32 && v > 0.12 && v < 0.2) { o[0] = o[1] = o[2] = 255; }
  });
}

// ===========================================================================
// WORLD SURFACES
// ===========================================================================
// Top of the floating islands, per biome
export function topTex(id) {
  const n = makeFbm(200 + id.length, 8, 5), d = makeFbm(201 + id.length, 32, 2);
  const P = {
    meadow: ['#4fae2e', '#86d94a', '#3a8f22'],
    desert: ['#e2b46a', '#f6d79a', '#c9944a'],
    candy: ['#ff8ccc', '#ffc2e6', '#f0609f'],
    snow: ['#e6f0ff', '#ffffff', '#c3d6f2'],
    neon: ['#1e1846', '#2c2466', '#141034'],
  }[id];
  const a = hex(P[0]), b = hex(P[1]), c = hex(P[2]);
  const post = (g, w, h) => {
    const rng = mulberry32(id.length * 17);
    if (id === 'meadow') {
      for (let i = 0; i < 900; i++) {
        const x = rng() * w, y = rng() * h;
        g.strokeStyle = rng() < 0.5 ? 'rgba(40,110,20,.55)' : 'rgba(170,230,110,.55)';
        g.lineWidth = 1.5;
        g.beginPath(); g.moveTo(x, y); g.lineTo(x + (rng() - 0.5) * 6, y - 5 - rng() * 7); g.stroke();
      }
      for (let i = 0; i < 26; i++) {
        const x = rng() * w, y = rng() * h, col = ['#ffffff', '#ffe066', '#ff8ad8', '#8ad8ff'][i % 4];
        for (let p = 0; p < 5; p++) { const a = (p / 5) * 7; g.fillStyle = col; g.beginPath(); g.arc(x + Math.cos(a) * 3, y + Math.sin(a) * 3, 2.6, 0, 7); g.fill(); }
        g.fillStyle = '#ffb300'; g.beginPath(); g.arc(x, y, 1.8, 0, 7); g.fill();
      }
    } else if (id === 'desert') {
      g.strokeStyle = 'rgba(160,100,40,.25)';
      g.lineWidth = 3;
      for (let i = 0; i < 18; i++) {
        g.beginPath();
        const y0 = (i / 18) * h;
        for (let x = 0; x <= w; x += 8) g.lineTo(x, y0 + Math.sin(x * 0.04 + i) * 6);
        g.stroke();
      }
      for (let i = 0; i < 60; i++) { g.fillStyle = 'rgba(140,90,50,.5)'; g.beginPath(); g.ellipse(rng() * w, rng() * h, 3 + rng() * 4, 2 + rng() * 2, rng() * 3, 0, 7); g.fill(); }
    } else if (id === 'candy') {
      const cols = ['#ffffff', '#ffd23f', '#3fc1ff', '#7cf07c', '#b06cff'];
      for (let i = 0; i < 240; i++) {
        g.save(); g.translate(rng() * w, rng() * h); g.rotate(rng() * 3.14);
        g.fillStyle = cols[i % cols.length]; g.fillRect(-6, -2, 12, 4); g.restore();
      }
    } else if (id === 'snow') {
      for (let i = 0; i < 300; i++) { g.fillStyle = rng() < 0.5 ? 'rgba(255,255,255,.95)' : 'rgba(150,190,255,.6)'; g.fillRect(rng() * w, rng() * h, 2, 2); }
    } else if (id === 'neon') {
      g.strokeStyle = 'rgba(77,252,255,.35)';
      g.lineWidth = 2;
      for (let i = 0; i <= 8; i++) {
        g.beginPath(); g.moveTo((i / 8) * w, 0); g.lineTo((i / 8) * w, h); g.stroke();
        g.beginPath(); g.moveTo(0, (i / 8) * h); g.lineTo(w, (i / 8) * h); g.stroke();
      }
    }
  };
  return pix('top_' + id, 512, 512, (u, v, o) => {
    mix3(a, b, sat(n(u, v) * 1.6 - 0.35), o);
    mix3(o, c, smooth(0.62, 0.8, d(u, v)) * 0.5, o);
  }, { wrap: true }, post);
}

// Side of the islands: a fringe of the top material + earth / rock strata
export function sideTex(id) {
  const n = makeFbm(300 + id.length, 6, 5), w = makeFbm(301 + id.length, 8, 3);
  const P = {
    meadow: { fringe: ['#4fae2e', '#7fd14b'], rock: ['#7a4a26', '#a9713e', '#5a341a'], stone: '#9a9a9a' },
    desert: { fringe: ['#e2b46a', '#f6d79a'], rock: ['#c0582a', '#e8894a', '#9a3f1a'], stone: '#f2c58a' },
    candy: { fringe: ['#ff7ac4', '#ffb3df'], rock: ['#f2c27a', '#ffe0a8', '#d99a4a'], stone: '#fff6e6' },
    snow: { fringe: ['#ffffff', '#e2eeff'], rock: ['#4f78b8', '#7fa6e0', '#2f4f8a'], stone: '#cfe4ff' },
    neon: { fringe: ['#4dfcff', '#9ffcff'], rock: ['#1d1646', '#2e2470', '#120e30'], stone: '#ff4dd2' },
  }[id];
  const f0 = hex(P.fringe[0]), f1 = hex(P.fringe[1]);
  const r0 = hex(P.rock[0]), r1 = hex(P.rock[1]), r2 = hex(P.rock[2]);
  const post = (g, W, H) => {
    const rng = mulberry32(id.length * 41);
    if (id === 'neon') {
      g.fillStyle = 'rgba(255,77,210,.8)';
      for (let i = 0; i < 6; i++) g.fillRect(rng() * W, H * (0.35 + rng() * 0.5), 40 + rng() * 60, 3);
      return;
    }
    for (let i = 0; i < 22; i++) {
      const x = rng() * W, y = H * (0.32 + rng() * 0.6), r = 6 + rng() * 14;
      g.fillStyle = 'rgba(0,0,0,.25)';
      g.beginPath(); g.ellipse(x + 2, y + 3, r, r * 0.7, 0, 0, 7); g.fill();
      g.fillStyle = P.stone;
      g.beginPath(); g.ellipse(x, y, r, r * 0.7, rng(), 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,.35)';
      g.beginPath(); g.ellipse(x - r * 0.3, y - r * 0.25, r * 0.4, r * 0.22, 0, 0, 7); g.fill();
    }
    if (id === 'candy') {
      // cream layer
      g.fillStyle = '#fff6ef';
      g.fillRect(0, H * 0.58, W, H * 0.07);
    }
  };
  return pix('side_' + id, 512, 512, (u, v, o) => {
    const edge = 0.2 + (w(u, 0.5) - 0.5) * 0.12 + Math.max(0, Math.sin(u * Math.PI * 22)) * 0.06;
    if (v < edge) {
      mix3(f0, f1, sat(n(u, v) * 1.5 - 0.3) * (1 - v / edge * 0.4), o);
      if (v > edge - 0.025) { o[0] *= 0.7; o[1] *= 0.7; o[2] *= 0.7; }
      return;
    }
    const strata = Math.sin((v * 9 + (w(u, v) - 0.5) * 2.2) * Math.PI);
    mix3(r0, r1, sat(n(u, v) * 1.4 - 0.25), o);
    mix3(o, r2, smooth(0.55, 0.95, strata) * 0.45, o);
    const shade = 1 - smooth(edge, edge + 0.08, v) * 0.0 - (v - edge) * 0.25;
    o[0] *= shade; o[1] *= shade; o[2] *= shade;
  }, { wrap: true }, post);
}

export function sideEmissive(id) {
  if (id !== 'neon') return null;
  return make('sideEm_neon', 256, 256, (g, w, h) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#4dfcff'; g.fillRect(0, h * 0.18, w, 5);
    g.fillStyle = '#ff4dd2';
    const rng = mulberry32(8);
    for (let i = 0; i < 5; i++) g.fillRect(rng() * w, h * (0.35 + rng() * 0.5), 20 + rng() * 40, 2);
  }, { wrap: true });
}

export function rockTex(id) {
  const n = makeFbm(400 + id.length, 6, 5), c = makeFbm(401 + id.length, 16, 2);
  const P = {
    meadow: ['#6a5040', '#9a8070'],
    desert: ['#a8461e', '#d9783a'],
    candy: ['#6b3a1f', '#9a5a32'],
    snow: ['#5f86c8', '#a9c8f2'],
    neon: ['#16102e', '#33246e'],
  }[id];
  const a = hex(P[0]), b = hex(P[1]);
  return pix('rock_' + id, 256, 256, (u, v, o) => {
    mix3(a, b, sat(n(u, v) * 1.5 - 0.3), o);
    const cr = Math.abs(c(u, v) - 0.5);
    if (cr < 0.02) { o[0] *= 0.6; o[1] *= 0.6; o[2] *= 0.6; }
  }, { wrap: true });
}

export function woodTex() {
  const n = makeFbm(500, 4, 5);
  return make('wood', 256, 512, (g, w, h) => {
    const img = g.createImageData(w, h);
    const cols = [hex('#a8622c'), hex('#c47c3c'), hex('#b56d33')];
    const o = [0, 0, 0];
    const rows = 6;
    for (let y = 0; y < h; y++) {
      const row = Math.floor((y / h) * rows);
      const base = cols[row % 3];
      for (let x = 0; x < w; x++) {
        const u = x / w, v = y / h;
        const grain = Math.sin((u * 3 + n(u, v * 0.2 + row * 0.17) * 3) * Math.PI * 4) * 0.5 + 0.5;
        const k = 0.8 + grain * 0.18 + (n(u, v) - 0.5) * 0.15;
        o[0] = base[0] * k; o[1] = base[1] * k; o[2] = base[2] * k;
        const ry = (y / h) * rows - row;
        if (ry < 0.04 || ry > 0.97) { o[0] *= 0.5; o[1] *= 0.5; o[2] *= 0.5; }
        const i = (y * w + x) * 4;
        img.data[i] = o[0]; img.data[i + 1] = o[1]; img.data[i + 2] = o[2]; img.data[i + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
    for (let r = 0; r < rows; r++) {
      const y = ((r + 0.5) / rows) * h;
      for (const x of [16, w - 16]) {
        g.fillStyle = '#3a3a40'; g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill();
        g.fillStyle = '#9aa0aa'; g.beginPath(); g.arc(x - 1.5, y - 1.5, 2, 0, 7); g.fill();
      }
    }
  }, { wrap: true });
}

export function ironTex() {
  const n = makeFbm(510, 8, 4);
  return make('iron', 256, 512, (g, w, h) => {
    const img = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = 95 + n(x / w, y / h) * 50;
      const i = (y * w + x) * 4;
      img.data[i] = k; img.data[i + 1] = k + 4; img.data[i + 2] = k + 14; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    for (let r = 0; r < 4; r++) {
      const y = ((r + 0.5) / 4) * h;
      g.fillStyle = '#4a4e58'; g.fillRect(0, y - 14, w, 28);
      g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(0, y - 14, w, 4);
      for (let x = 14; x < w; x += 40) {
        g.fillStyle = '#2a2d34'; g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill();
        g.fillStyle = '#b8bec9'; g.beginPath(); g.arc(x - 2, y - 2, 2.5, 0, 7); g.fill();
      }
    }
    g.fillStyle = '#ffc61a';
    for (let y = 0; y < h; y += 64) {
      g.beginPath(); g.moveTo(0, y); g.lineTo(18, y); g.lineTo(0, y + 18); g.fill();
    }
  }, { wrap: true });
}

export function checkerTex() {
  return make('checker', 128, 128, (g, w, h) => {
    const n = 8;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      g.fillStyle = (i + j) % 2 ? '#15151a' : '#f4f4f4';
      g.fillRect((i * w) / n, (j * h) / n, w / n, h / n);
    }
  }, { wrap: true });
}

export function coinTex() {
  return make('coinFace', 256, 256, (g, w) => {
    const R = w / 2;
    g.translate(R, R);
    const gr = g.createRadialGradient(-R * 0.3, -R * 0.3, R * 0.1, 0, 0, R);
    gr.addColorStop(0, '#fff2a8'); gr.addColorStop(0.6, '#ffc61a'); gr.addColorStop(1, '#d48a00');
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill();
    g.strokeStyle = '#b87400'; g.lineWidth = 10; g.beginPath(); g.arc(0, 0, R * 0.8, 0, 7); g.stroke();
    const star = (s, col) => {
      g.fillStyle = col; g.beginPath();
      for (let i = 0; i < 10; i++) { const r = i % 2 ? s * 0.42 : s; const a = (i / 10) * Math.PI * 2 - Math.PI / 2; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
      g.closePath(); g.fill();
    };
    g.save(); g.translate(4, 5); star(R * 0.55, '#a86800'); g.restore();
    star(R * 0.55, '#ffe680');
  });
}

// Target board face. Ring radii are normalized (0..1); the bullseye is tiny on purpose.
export const TARGET_RINGS = [
  { r: 0.075, mult: 25, color: '#ffd23f', text: '#7a4a00' },
  { r: 0.2, mult: 10, color: '#ff3b5c', text: '#fff' },
  { r: 0.4, mult: 5, color: '#ffffff', text: '#ff3b5c' },
  { r: 0.68, mult: 3, color: '#2fa8ff', text: '#fff' },
  { r: 1.0, mult: 2, color: '#f6efe2', text: '#2f6de0' },
];

export function targetTex() {
  const n = makeFbm(600, 8, 4);
  return make('target', 768, 768, (g, w, h) => {
    const cx = w / 2, cy = h / 2, R = w / 2 - 2;
    for (let i = TARGET_RINGS.length - 1; i >= 0; i--) {
      const ring = TARGET_RINGS[i];
      g.fillStyle = ring.color;
      g.beginPath(); g.arc(cx, cy, ring.r * R, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#1d2b4f'; g.lineWidth = 4; g.stroke();
    }
    // paper/straw grain
    const img = g.getImageData(0, 0, w, h);
    for (let y = 0; y < h; y += 1) for (let x = 0; x < w; x += 1) {
      const k = 0.9 + n(x / w, y / h) * 0.18;
      const i = (y * w + x) * 4;
      img.data[i] *= k; img.data[i + 1] *= k; img.data[i + 2] *= k;
    }
    g.putImageData(img, 0, 0);
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    for (let i = 0; i < TARGET_RINGS.length; i++) {
      const ring = TARGET_RINGS[i];
      const inner = i === 0 ? 0 : TARGET_RINGS[i - 1].r;
      const mid = (inner + ring.r) / 2;
      g.fillStyle = ring.text;
      const size = (i === 0 ? 38 : i === 1 ? 44 : 60) * (w / 1024);
      g.font = `900 ${size}px "Arial Black", Arial, sans-serif`;
      const label = 'x' + ring.mult;
      if (i === 0) g.fillText(label, cx, cy + 3);
      else {
        g.fillText(label, cx, cy - mid * R + 3);
        g.fillText(label, cx, cy + mid * R + 3);
      }
    }
  });
}

export function cloudTex() {
  const n = makeFbm(700, 4, 5);
  return pix('cloudSea', 512, 512, (u, v, o) => {
    const k = n(u, v);
    const a = smooth(0.38, 0.7, k);
    o[0] = 255; o[1] = 255; o[2] = 255;
    o[3] = 255 * (0.35 + a * 0.65);
    const s = 0.86 + k * 0.14;
    o[0] *= s; o[1] *= s; o[2] = Math.min(255, o[2] * s + 6);
  }, { wrap: true });
}

export function glowTex() {
  return make('glow', 128, 128, (g, w, h) => {
    const grd = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.35, 'rgba(255,255,255,.4)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, w, h);
  });
}

export function raysTex() {
  return make('rays', 512, 512, (g, w, h) => {
    g.translate(w / 2, h / 2);
    for (let i = 0; i < 16; i++) {
      g.rotate((Math.PI * 2) / 16);
      const grd = g.createLinearGradient(0, 0, w / 2, 0);
      grd.addColorStop(0, 'rgba(255,255,255,.45)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd;
      g.beginPath(); g.moveTo(0, 0); g.lineTo(w / 2, -18); g.lineTo(w / 2, 18); g.closePath(); g.fill();
    }
  });
}

// ---- blade skins --------------------------------------------------------------
export function candyTex() {
  return make('candy', 256, 256, (g, w, h) => {
    g.fillStyle = '#fff';
    g.fillRect(0, 0, w, h);
    for (let i = -8; i < 16; i++) {
      g.fillStyle = i % 2 ? '#ff2f5a' : '#2fd36b';
      g.beginPath();
      g.moveTo(i * 32, 0); g.lineTo(i * 32 + 14, 0); g.lineTo(i * 32 + 14 + h, h); g.lineTo(i * 32 + h, h);
      g.closePath(); g.fill();
    }
    const grd = g.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, 'rgba(255,255,255,.35)'); grd.addColorStop(0.5, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, w, h);
  }, { repeat: [3, 3] });
}

export function wrapTex(c1 = '#222', c2 = '#c22') {
  return make('wrap' + c1 + c2, 128, 64, (g, w, h) => {
    g.fillStyle = c1;
    g.fillRect(0, 0, w, h);
    g.fillStyle = c2;
    for (let i = 0; i < 2; i++) {
      const x = i * 64;
      g.beginPath(); g.moveTo(x + 32, 4); g.lineTo(x + 60, h / 2); g.lineTo(x + 32, h - 4); g.lineTo(x + 4, h / 2); g.closePath(); g.fill();
    }
    g.strokeStyle = 'rgba(255,255,255,.15)'; g.lineWidth = 2;
    for (let x = 0; x < w; x += 8) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x + 8, h); g.stroke(); }
  }, { repeat: [3, 1] });
}

export function lavaTex() {
  return make('lava', 256, 256, (g, w, h) => {
    g.fillStyle = '#1a0805';
    g.fillRect(0, 0, w, h);
    const rng = mulberry32(77);
    g.lineCap = 'round';
    for (let pass = 0; pass < 2; pass++) {
      g.strokeStyle = pass ? '#ffd23f' : '#ff5a1a';
      for (let i = 0; i < 18; i++) {
        g.lineWidth = pass ? 1.5 : 4 + rng() * 3;
        g.beginPath();
        let x = rng() * w, y = rng() * h;
        g.moveTo(x, y);
        for (let k = 0; k < 5; k++) { x += (rng() - 0.5) * 70; y += (rng() - 0.5) * 70; g.lineTo(x, y); }
        g.stroke();
      }
    }
  }, { repeat: [3, 3] });
}

export function breadTex() {
  const n = makeFbm(800, 8, 4);
  return make('bread', 256, 128, (g, w, h) => {
    const img = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = n(x / w, y / h);
      const i = (y * w + x) * 4;
      img.data[i] = 190 + k * 50; img.data[i + 1] = 120 + k * 40; img.data[i + 2] = 50 + k * 30; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    for (let i = 0; i < 5; i++) {
      g.save(); g.translate(20 + i * 50, h / 2); g.rotate(-0.6);
      g.fillStyle = '#f6dca0'; g.beginPath(); g.ellipse(0, 0, 22, 6, 0, 0, 7); g.fill();
      g.fillStyle = 'rgba(150,80,20,.4)'; g.beginPath(); g.ellipse(0, 3, 20, 2, 0, 0, 7); g.fill();
      g.restore();
    }
  });
}

export function handleWoodTex() {
  const n = makeFbm(810, 4, 4);
  return pix('handleWood', 256, 64, (u, v, o) => {
    const grain = Math.sin((v * 6 + n(u * 0.5, v) * 4) * Math.PI) * 0.5 + 0.5;
    mix3(hex('#5a2e14'), hex('#9a5a2a'), grain * 0.7 + (n(u, v) - 0.5) * 0.3, o);
  }, { wrap: true });
}

export function damascusTex() {
  const n = makeFbm(820, 4, 5);
  return pix('damascus', 512, 128, (u, v, o) => {
    const w = Math.sin((v * 10 + n(u, v) * 6 + u * 2) * Math.PI) * 0.5 + 0.5;
    const k = 175 + w * 70;
    o[0] = k; o[1] = k + 4; o[2] = k + 12;
  }, { wrap: true });
}
