import * as THREE from 'three';
import { melonTex, pineappleTex, woodTex, iceTex, sprinkleTex } from './textures.js';

// ---------------------------------------------------------------------------
// Shared material / geometry caches
// ---------------------------------------------------------------------------
const mats = new Map();
export function lambert(color, extra = {}) {
  const key = color + JSON.stringify(Object.keys(extra).map((k) => [k, extra[k] && extra[k].uuid ? extra[k].uuid : extra[k]]));
  if (mats.has(key)) return mats.get(key);
  const m = new THREE.MeshLambertMaterial({ color, ...extra });
  mats.set(key, m);
  return m;
}

const geos = new Map();
function geo(key, fn) {
  if (!geos.has(key)) {
    const gg = fn();
    gg.userData.shared = true;
    geos.set(key, gg);
  }
  return geos.get(key);
}

const sphere = (r, w = 22, h = 16) => geo('s' + r + w, () => new THREE.SphereGeometry(r, w, h));

function mesh(g, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(g, m);
  o.position.set(x, y, z);
  o.castShadow = true;
  return o;
}

function stem(group, y, color = '#6b3e1e') {
  const s = mesh(geo('stem', () => new THREE.CylinderGeometry(0.025, 0.035, 0.14, 6)), lambert(color), 0, y + 0.05, 0);
  s.rotation.z = 0.25;
  group.add(s);
  const leaf = mesh(geo('leaf', () => {
    const g = new THREE.SphereGeometry(0.08, 8, 6);
    g.scale(1.6, 0.35, 0.9);
    return g;
  }), lambert('#3fbf4a'), 0.09, y + 0.07, 0);
  leaf.rotation.z = 0.5;
  group.add(leaf);
}

// ---------------------------------------------------------------------------
// Item definitions. Every builder returns a Group with origin at bottom-center.
//   hw/hh: half-extents of the slice hit box, flesh: cut colour, juice: particle colour
// ---------------------------------------------------------------------------
export const ITEMS = {
  apple: {
    hw: 0.33, hh: 0.3, flesh: '#fff1c4', juice: '#ffe58f', value: 2, fever: 0.05,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.32), lambert('#ec3b3b'), 0, 0.3, 0);
      b.scale.set(1, 0.92, 1);
      g.add(b);
      stem(g, 0.58);
      return g;
    },
  },
  orange: {
    hw: 0.34, hh: 0.33, flesh: '#ffb347', juice: '#ff9a1f', value: 2, fever: 0.05,
    build() {
      const g = new THREE.Group();
      g.add(mesh(sphere(0.33), lambert('#ff8c1a'), 0, 0.33, 0));
      g.add(mesh(geo('otop', () => new THREE.SphereGeometry(0.05, 6, 4)), lambert('#4caf50'), 0, 0.65, 0));
      return g;
    },
  },
  lemon: {
    hw: 0.38, hh: 0.27, flesh: '#fff59a', juice: '#fff066', value: 2, fever: 0.05,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.28), lambert('#ffe23a'), 0, 0.26, 0);
      b.scale.set(1.35, 0.95, 0.95);
      g.add(b);
      const tip = mesh(geo('ltip', () => new THREE.ConeGeometry(0.06, 0.1, 8)), lambert('#ffd21a'), 0.4, 0.26, 0);
      tip.rotation.z = -Math.PI / 2;
      g.add(tip);
      return g;
    },
  },
  melon: {
    hw: 0.56, hh: 0.54, flesh: '#ff4a62', juice: '#ff2e4f', value: 6, fever: 0.12, big: true,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.56, 26, 18), lambert('#ffffff', { map: melonTex() }), 0, 0.53, 0);
      b.scale.set(1.05, 0.95, 1);
      g.add(b);
      return g;
    },
  },
  coconut: {
    hw: 0.37, hh: 0.36, flesh: '#ffffff', juice: '#f5f5f5', value: 3, fever: 0.06,
    build() {
      const g = new THREE.Group();
      g.add(mesh(sphere(0.37, 14, 10), lambert('#7a4a28', { flatShading: true }), 0, 0.36, 0));
      return g;
    },
  },
  pineapple: {
    hw: 0.36, hh: 0.62, flesh: '#ffe066', juice: '#ffd23f', value: 5, fever: 0.1,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.36), lambert('#ffffff', { map: pineappleTex() }), 0, 0.42, 0);
      b.scale.set(1, 1.2, 1);
      g.add(b);
      const leafG = geo('pleaf', () => new THREE.ConeGeometry(0.09, 0.5, 5));
      for (let i = 0; i < 6; i++) {
        const l = mesh(leafG, lambert('#2fae4a'), 0, 0.98, 0);
        l.rotation.z = Math.cos((i / 6) * Math.PI * 2) * 0.45;
        l.rotation.x = Math.sin((i / 6) * Math.PI * 2) * 0.45;
        g.add(l);
      }
      return g;
    },
  },
  strawberry: {
    hw: 0.3, hh: 0.3, flesh: '#ff9aae', juice: '#ff2d55', value: 2, fever: 0.05,
    build() {
      const g = new THREE.Group();
      const shape = geo('straw', () => {
        const pts = [];
        for (let i = 0; i <= 12; i++) {
          const t = i / 12;
          pts.push(new THREE.Vector2(Math.sin(t * Math.PI) * 0.3 * (0.4 + 0.6 * t) + 0.001, t * 0.6));
        }
        return new THREE.LatheGeometry(pts, 18);
      });
      g.add(mesh(shape, lambert('#f0243f'), 0, 0, 0));
      g.add(mesh(geo('scap', () => new THREE.ConeGeometry(0.2, 0.08, 7)), lambert('#2fae4a'), 0, 0.62, 0));
      return g;
    },
  },
  dragonfruit: {
    hw: 0.34, hh: 0.4, flesh: '#fbf4f6', juice: '#ff5fa2', value: 4, fever: 0.08,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.33), lambert('#ff3f8e'), 0, 0.4, 0);
      b.scale.set(1, 1.2, 1);
      g.add(b);
      const sg = geo('dscale', () => new THREE.ConeGeometry(0.07, 0.22, 4));
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        const s = mesh(sg, lambert('#7ed957'), Math.cos(a) * 0.3, 0.45 + (i % 2) * 0.15, Math.sin(a) * 0.3);
        s.rotation.z = -Math.cos(a) * 0.9;
        s.rotation.x = Math.sin(a) * 0.9;
        g.add(s);
      }
      return g;
    },
  },
  snowball: {
    hw: 0.34, hh: 0.33, flesh: '#e8f6ff', juice: '#ffffff', value: 2, fever: 0.05,
    build() {
      const g = new THREE.Group();
      g.add(mesh(sphere(0.34, 12, 9), lambert('#ffffff', { flatShading: true }), 0, 0.33, 0));
      return g;
    },
  },
  plum: {
    hw: 0.3, hh: 0.3, flesh: '#ffd76a', juice: '#a33cff', value: 2, fever: 0.05,
    build() {
      const g = new THREE.Group();
      g.add(mesh(sphere(0.3), lambert('#7b3fe4'), 0, 0.3, 0));
      stem(g, 0.55);
      return g;
    },
  },
  gumball: {
    hw: 0.28, hh: 0.27, flesh: '#ffffff', juice: '#ff7ad9', value: 2, fever: 0.05,
    colors: ['#ff4d6d', '#3fc1ff', '#7cf07c', '#ffd23f', '#b06cff'],
    build(rng) {
      const g = new THREE.Group();
      const c = this.colors[Math.floor(rng() * this.colors.length)];
      g.add(mesh(sphere(0.27), lambert(c), 0, 0.27, 0));
      g.userData.juice = c;
      return g;
    },
  },
  neonOrb: {
    hw: 0.3, hh: 0.3, flesh: '#ffffff', juice: '#4dfcff', value: 3, fever: 0.06,
    colors: ['#4dfcff', '#ff4dd2', '#b6ff4d', '#ffb84d'],
    build(rng) {
      const g = new THREE.Group();
      const c = this.colors[Math.floor(rng() * this.colors.length)];
      g.add(mesh(sphere(0.3, 16, 12), lambert('#111', { emissive: c, emissiveIntensity: 1 }), 0, 0.3, 0));
      g.userData.juice = c;
      return g;
    },
  },
  golden: {
    hw: 0.36, hh: 0.34, flesh: '#fff3b0', juice: '#ffd23f', value: 25, fever: 0.3, golden: true,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.34), new THREE.MeshPhongMaterial({ color: '#ffc61a', emissive: '#7a4a00', emissiveIntensity: 0.5, shininess: 90, specular: '#fff6c0' }), 0, 0.34, 0);
      g.add(b);
      stem(g, 0.64);
      return g;
    },
  },

  // ---- stackable layers ---------------------------------------------------
  donut: {
    hw: 0.5, hh: 0.14, layer: true, h: 0.28, flesh: '#f3c98b', juice: '#ffb6d9', value: 1, fever: 0.035,
    frost: ['#ff7ac4', '#7ad7ff', '#6b3b1f', '#fff1f6', '#b88cff'],
    build(rng) {
      const g = new THREE.Group();
      const body = geo('donut', () => new THREE.TorusGeometry(0.33, 0.15, 12, 24));
      const d = mesh(body, lambert('#e9a95d'), 0, 0.14, 0);
      d.rotation.x = Math.PI / 2;
      g.add(d);
      const c = this.frost[Math.floor(rng() * this.frost.length)];
      const fr = mesh(geo('frost', () => {
        const t = new THREE.TorusGeometry(0.33, 0.155, 10, 24);
        return t;
      }), lambert('#ffffff', { map: sprinkleTex(c) }), 0, 0.165, 0);
      fr.rotation.x = Math.PI / 2;
      fr.scale.set(1.02, 1.02, 0.75);
      g.add(fr);
      g.userData.juice = c;
      return g;
    },
  },
  pancake: {
    hw: 0.5, hh: 0.08, layer: true, h: 0.15, flesh: '#f7da93', juice: '#e8a83a', value: 1, fever: 0.03,
    build() {
      const g = new THREE.Group();
      g.add(mesh(geo('pcake', () => new THREE.CylinderGeometry(0.5, 0.48, 0.14, 24)), lambert('#e7b25c'), 0, 0.075, 0));
      return g;
    },
  },
  plank: {
    hw: 0.48, hh: 0.1, layer: true, h: 0.2, flesh: '#f8cf8c', juice: '#e8a75a', value: 1, fever: 0.03,
    colors: ['#f29b4b', '#e98a3c', '#f5ad60'],
    build(rng, i) {
      const g = new THREE.Group();
      const c = this.colors[i % this.colors.length];
      g.add(mesh(geo('plank', () => new THREE.BoxGeometry(0.95, 0.19, 0.95)), lambert(c), 0, 0.1, 0));
      return g;
    },
  },
  cake: {
    hw: 0.52, hh: 0.16, layer: true, h: 0.32, flesh: '#fff0d6', juice: '#ff9ccc', value: 2, fever: 0.04,
    colors: ['#ff9ccc', '#8a4b2a', '#fff4e0', '#b0e57c'],
    build(rng, i) {
      const g = new THREE.Group();
      g.add(mesh(geo('cakeb', () => new THREE.CylinderGeometry(0.52, 0.52, 0.22, 26)), lambert('#f6d39a'), 0, 0.11, 0));
      g.add(mesh(geo('cakef', () => new THREE.CylinderGeometry(0.53, 0.53, 0.09, 26)), lambert(this.colors[i % this.colors.length]), 0, 0.26, 0));
      return g;
    },
  },
  ice: {
    hw: 0.4, hh: 0.2, layer: true, h: 0.4, flesh: '#e8f8ff', juice: '#bfe9ff', value: 1, fever: 0.035,
    build() {
      const g = new THREE.Group();
      const m = new THREE.MeshPhongMaterial({ color: '#bfe9ff', map: iceTex(), transparent: true, opacity: 0.85, shininess: 80 });
      g.add(mesh(geo('icecube', () => new THREE.BoxGeometry(0.78, 0.38, 0.78)), m, 0, 0.2, 0));
      return g;
    },
  },
  jelly: {
    hw: 0.42, hh: 0.17, layer: true, h: 0.34, flesh: '#ffffff', juice: '#ff7ad9', value: 1, fever: 0.035,
    colors: ['#ff4d6d', '#3fc1ff', '#7cf07c', '#ffd23f', '#b06cff', '#ff8a3d'],
    build(rng, i) {
      const g = new THREE.Group();
      const c = this.colors[i % this.colors.length];
      g.add(mesh(geo('jellyb', () => new THREE.BoxGeometry(0.82, 0.32, 0.82)), lambert(c), 0, 0.17, 0));
      g.userData.juice = c;
      return g;
    },
  },
  neonBlock: {
    hw: 0.42, hh: 0.16, layer: true, h: 0.32, flesh: '#ffffff', juice: '#4dfcff', value: 1, fever: 0.035,
    colors: ['#4dfcff', '#ff4dd2', '#b6ff4d', '#ffb84d', '#8a6bff'],
    build(rng, i) {
      const g = new THREE.Group();
      const c = this.colors[i % this.colors.length];
      g.add(mesh(geo('neonb', () => new THREE.BoxGeometry(0.84, 0.3, 0.84)), lambert('#141026', { emissive: c, emissiveIntensity: 0.9 }), 0, 0.16, 0));
      g.userData.juice = c;
      return g;
    },
  },
  cheese: {
    hw: 0.5, hh: 0.15, layer: true, h: 0.3, flesh: '#ffe27a', juice: '#ffd23f', value: 1, fever: 0.035,
    build() {
      const g = new THREE.Group();
      g.add(mesh(geo('cheese', () => new THREE.CylinderGeometry(0.5, 0.5, 0.28, 22)), lambert('#ffcc33'), 0, 0.14, 0));
      return g;
    },
  },
};

export const WOOD_MAT = () => lambert('#ffffff', { map: woodTex() });
