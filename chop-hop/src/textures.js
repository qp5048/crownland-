import * as THREE from 'three';

const cache = new Map();

function make(key, w, h, draw, opts = {}) {
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  if (opts.repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(opts.repeat[0], opts.repeat[1]);
  }
  cache.set(key, tex);
  return tex;
}

export function melonTex() {
  return make('melon', 256, 128, (g, w, h) => {
    g.fillStyle = '#5fc23a';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#2f7d1f';
    const n = 9;
    for (let i = 0; i < n; i++) {
      const x0 = (i / n) * w;
      g.beginPath();
      g.moveTo(x0, 0);
      for (let y = 0; y <= h; y += 8) {
        g.lineTo(x0 + Math.sin(y * 0.15 + i) * 4 + 6, y);
      }
      for (let y = h; y >= 0; y -= 8) {
        g.lineTo(x0 + Math.sin(y * 0.15 + i) * 4 + 18, y);
      }
      g.closePath();
      g.fill();
    }
  });
}

export function pineappleTex() {
  return make('pineapple', 128, 128, (g, w, h) => {
    g.fillStyle = '#f2a62b';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = '#b86a12';
    g.lineWidth = 4;
    for (let i = -8; i < 16; i++) {
      g.beginPath();
      g.moveTo(i * 16, 0);
      g.lineTo(i * 16 + h, h);
      g.stroke();
      g.beginPath();
      g.moveTo(i * 16 + h, 0);
      g.lineTo(i * 16, h);
      g.stroke();
    }
    g.fillStyle = '#ffd56a';
    for (let x = 0; x < w; x += 16) for (let y = 8; y < h; y += 16) {
      g.beginPath();
      g.arc(x + 8, y, 2.5, 0, Math.PI * 2);
      g.fill();
    }
  });
}

export function woodTex() {
  return make('wood', 128, 256, (g, w, h) => {
    g.fillStyle = '#b8743a';
    g.fillRect(0, 0, w, h);
    const rows = 8;
    for (let i = 0; i < rows; i++) {
      const y = (i / rows) * h;
      g.fillStyle = i % 2 ? '#c4813f' : '#ad6a33';
      g.fillRect(0, y, w, h / rows);
      g.fillStyle = '#7d4a22';
      g.fillRect(0, y, w, 3);
      g.strokeStyle = 'rgba(110,60,25,.35)';
      g.lineWidth = 1.5;
      for (let k = 0; k < 3; k++) {
        g.beginPath();
        const yy = y + 8 + k * 9;
        g.moveTo(0, yy);
        g.bezierCurveTo(w * 0.3, yy - 4, w * 0.6, yy + 4, w, yy);
        g.stroke();
      }
    }
  }, { repeat: [1, 1] });
}

export function checkerTex() {
  return make('checker', 128, 128, (g, w, h) => {
    const n = 8;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      g.fillStyle = (i + j) % 2 ? '#111' : '#fff';
      g.fillRect((i * w) / n, (j * h) / n, w / n, h / n);
    }
  }, { repeat: [1, 1] });
}

export function candyTex() {
  return make('candy', 128, 128, (g, w, h) => {
    g.fillStyle = '#fff';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#ff2f5a';
    for (let i = -4; i < 8; i++) {
      g.beginPath();
      g.moveTo(i * 32, 0);
      g.lineTo(i * 32 + 16, 0);
      g.lineTo(i * 32 + 16 + h, h);
      g.lineTo(i * 32 + h, h);
      g.closePath();
      g.fill();
    }
  }, { repeat: [3, 3] });
}

export function wrapTex(c1 = '#222', c2 = '#c22') {
  return make('wrap' + c1 + c2, 64, 64, (g, w, h) => {
    g.fillStyle = c1;
    g.fillRect(0, 0, w, h);
    g.fillStyle = c2;
    g.beginPath();
    g.moveTo(w / 2, 4);
    g.lineTo(w - 4, h / 2);
    g.lineTo(w / 2, h - 4);
    g.lineTo(4, h / 2);
    g.closePath();
    g.fill();
  }, { repeat: [6, 1] });
}

export function lavaTex() {
  return make('lava', 128, 128, (g, w, h) => {
    g.fillStyle = '#2a0f08';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = '#ff7a1a';
    g.lineCap = 'round';
    for (let i = 0; i < 14; i++) {
      g.lineWidth = 2 + Math.random() * 3;
      g.beginPath();
      let x = Math.random() * w, y = Math.random() * h;
      g.moveTo(x, y);
      for (let k = 0; k < 4; k++) {
        x += (Math.random() - 0.5) * 50;
        y += (Math.random() - 0.5) * 50;
        g.lineTo(x, y);
      }
      g.stroke();
    }
  }, { repeat: [4, 4] });
}

export function breadTex() {
  return make('bread', 128, 64, (g, w, h) => {
    g.fillStyle = '#d9953f';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#f3d08a';
    for (let i = 0; i < 4; i++) {
      g.save();
      g.translate(16 + i * 30, h / 2);
      g.rotate(-0.6);
      g.beginPath();
      g.ellipse(0, 0, 13, 4, 0, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }
  });
}

// Target board face. Ring radii are in normalized units (0..1) and match ring multipliers.
export const TARGET_RINGS = [
  { r: 0.12, mult: 25, color: '#ffd23f', text: '#7a4a00' },
  { r: 0.31, mult: 10, color: '#ff4d6d', text: '#fff' },
  { r: 0.52, mult: 5, color: '#ffffff', text: '#ff4d6d' },
  { r: 0.76, mult: 3, color: '#3fc1ff', text: '#fff' },
  { r: 1.0, mult: 2, color: '#ffffff', text: '#3a6df0' },
];

export function targetTex() {
  return make('target', 512, 512, (g, w, h) => {
    const cx = w / 2, cy = h / 2, R = w / 2 - 2;
    for (let i = TARGET_RINGS.length - 1; i >= 0; i--) {
      const ring = TARGET_RINGS[i];
      g.fillStyle = ring.color;
      g.beginPath();
      g.arc(cx, cy, ring.r * R, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = 'rgba(0,0,0,.12)';
      g.lineWidth = 4;
      g.stroke();
    }
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    for (let i = 0; i < TARGET_RINGS.length; i++) {
      const ring = TARGET_RINGS[i];
      const inner = i === 0 ? 0 : TARGET_RINGS[i - 1].r;
      const mid = (inner + ring.r) / 2;
      g.fillStyle = ring.text;
      const size = i === 0 ? 34 : 30;
      g.font = `900 ${size}px "Arial Black", Arial, sans-serif`;
      const label = 'x' + ring.mult;
      if (i === 0) {
        g.fillText(label, cx, cy + 2);
      } else {
        g.fillText(label, cx, cy - mid * R + 2);
        g.fillText(label, cx, cy + mid * R + 2);
      }
    }
  });
}

export function glowTex() {
  return make('glow', 64, 64, (g, w, h) => {
    const grd = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.4, 'rgba(255,255,255,.35)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, w, h);
  });
}

export function iceTex() {
  return make('ice', 64, 64, (g, w, h) => {
    g.fillStyle = '#bfe9ff';
    g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,.8)';
    g.lineWidth = 3;
    g.beginPath();
    g.moveTo(6, 10);
    g.lineTo(26, 30);
    g.moveTo(40, 8);
    g.lineTo(56, 22);
    g.stroke();
  });
}

export function sprinkleTex(base) {
  return make('spr' + base, 128, 64, (g, w, h) => {
    g.fillStyle = base;
    g.fillRect(0, 0, w, h);
    const cols = ['#fff', '#ffd23f', '#3fc1ff', '#7cf07c', '#ff4d6d', '#b06cff'];
    for (let i = 0; i < 60; i++) {
      g.save();
      g.translate(Math.random() * w, Math.random() * h);
      g.rotate(Math.random() * Math.PI);
      g.fillStyle = cols[i % cols.length];
      g.fillRect(-4, -1.2, 8, 2.4);
      g.restore();
    }
  });
}
