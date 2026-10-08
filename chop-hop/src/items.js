import * as THREE from 'three';
import {
  melonTex, pineappleTex, woodTex, iceTex, sprinkleTex, appleTex, orangeTex, lemonTex, poreBump, coconutTex,
  strawberryTex, plumTex, dragonTex, kiwiTex, pearTex, snowTex, doughTex, plankTex, pancakeTex, cheeseTex, jellyTex, CAPS,
} from './textures.js';

// ---------------------------------------------------------------------------
// Shared material / geometry caches (PBR materials, lit by an environment map)
// ---------------------------------------------------------------------------
const mats = new Map();
export function std(color, extra = {}) {
  const key = color + '|' + Object.keys(extra).map((k) => k + ':' + (extra[k] && extra[k].uuid ? extra[k].uuid : extra[k])).join(',');
  if (mats.has(key)) return mats.get(key);
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0, ...extra });
  m.userData.shared = true;
  mats.set(key, m);
  return m;
}
export const lambert = std;

// Converts old Phong-style options to a PBR material (shiny = metallic)
export function phong(o = {}) {
  const { shininess = 30, specular, ...rest } = o;
  const metal = shininess >= 80 && specular !== undefined;
  return new THREE.MeshStandardMaterial({ roughness: metal ? 0.22 : Math.max(0.15, 0.7 - shininess / 200), metalness: metal ? 0.9 : 0, ...rest });
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

const sphere = (r, w = 32, h = 22) => geo('s' + r + w, () => new THREE.SphereGeometry(r, w, h));

function mesh(g, m, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(g, m);
  o.position.set(x, y, z);
  o.castShadow = true;
  return o;
}

function stem(group, y, color = '#5a3216') {
  const s = mesh(geo('stem', () => new THREE.CylinderGeometry(0.022, 0.032, 0.16, 8)), std(color, { roughness: 0.9 }), 0, y + 0.06, 0);
  s.rotation.z = 0.25;
  group.add(s);
  const leaf = mesh(geo('leaf', () => {
    const sh = new THREE.Shape();
    sh.moveTo(0, 0);
    sh.quadraticCurveTo(0.08, 0.07, 0.2, 0);
    sh.quadraticCurveTo(0.08, -0.07, 0, 0);
    const g = new THREE.ShapeGeometry(sh, 8);
    return g;
  }), std('#3fae3a', { side: THREE.DoubleSide, roughness: 0.5 }), 0.02, y + 0.1, 0);
  leaf.rotation.set(0.4, 0.3, 0.5);
  group.add(leaf);
}

function lathe(key, pts, segs = 32) {
  return geo(key, () => new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), segs));
}

// ---------------------------------------------------------------------------
// Item definitions. Every builder returns a Group with origin at bottom-center.
//   hw/hh: half-extents of the slice hit box, flesh: inside colour, cap: cut texture
// ---------------------------------------------------------------------------
export const ITEMS = {
  apple: {
    hw: 0.34, hh: 0.3, flesh: '#fff1c4', juice: '#ffe58f', value: 2, fever: 0.05, cap: 'apple', capR: 0.33,
    build() {
      const g = new THREE.Group();
      const body = lathe('apple', [[0.0, 0.04], [0.1, 0.0], [0.22, 0.02], [0.31, 0.12], [0.345, 0.27], [0.33, 0.42], [0.25, 0.55], [0.12, 0.6], [0.04, 0.55], [0.0, 0.52]]);
      g.add(mesh(body, std('#ffffff', { map: appleTex(), roughness: 0.35 })));
      stem(g, 0.52);
      return g;
    },
  },
  orange: {
    hw: 0.34, hh: 0.33, flesh: '#ffb347', juice: '#ff9a1f', value: 2, fever: 0.05, cap: 'orange', capR: 0.33,
    build() {
      const g = new THREE.Group();
      g.add(mesh(sphere(0.33), std('#ffffff', { map: orangeTex(), bumpMap: poreBump('or', 40), bumpScale: 1.2, roughness: 0.55 }), 0, 0.33, 0));
      g.add(mesh(geo('otop', () => new THREE.CylinderGeometry(0.04, 0.05, 0.03, 8)), std('#5e7a2a'), 0, 0.655, 0));
      return g;
    },
  },
  lemon: {
    hw: 0.38, hh: 0.27, flesh: '#fff59a', juice: '#fff066', value: 2, fever: 0.05, cap: 'lemon', capR: 0.3,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.28), std('#ffffff', { map: lemonTex(), bumpMap: poreBump('le', 40), bumpScale: 1, roughness: 0.45 }), 0, 0.26, 0);
      b.scale.set(1.35, 0.95, 0.95);
      g.add(b);
      for (const s of [-1, 1]) {
        const tip = mesh(geo('ltip', () => new THREE.ConeGeometry(0.055, 0.1, 12)), std('#f0c812', { roughness: 0.45 }), s * 0.39, 0.26, 0);
        tip.rotation.z = -s * Math.PI / 2;
        g.add(tip);
      }
      return g;
    },
  },
  melon: {
    hw: 0.56, hh: 0.54, flesh: '#ff4a62', juice: '#ff2e4f', value: 6, fever: 0.12, big: true, cap: 'melon', capR: 0.55,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.56, 40, 28), std('#ffffff', { map: melonTex(), roughness: 0.3 }), 0, 0.53, 0);
      b.scale.set(1.05, 0.95, 1);
      g.add(b);
      return g;
    },
  },
  coconut: {
    hw: 0.37, hh: 0.36, flesh: '#ffffff', juice: '#f5f5f5', value: 3, fever: 0.06, cap: 'coconut', capR: 0.36,
    build() {
      const g = new THREE.Group();
      g.add(mesh(sphere(0.37, 24, 16), std('#ffffff', { map: coconutTex(), bumpMap: coconutTex(), bumpScale: 2, roughness: 0.95 }), 0, 0.36, 0));
      return g;
    },
  },
  pineapple: {
    hw: 0.36, hh: 0.62, flesh: '#ffe066', juice: '#ffd23f', value: 5, fever: 0.1, cap: 'pineapple', capR: 0.36,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.36), std('#ffffff', { map: pineappleTex(), bumpMap: pineappleTex(), bumpScale: 2, roughness: 0.6 }), 0, 0.43, 0);
      b.scale.set(1, 1.2, 1);
      g.add(b);
      const leafG = geo('pleaf', () => {
        const sh = new THREE.Shape();
        sh.moveTo(-0.06, 0); sh.quadraticCurveTo(-0.04, 0.3, 0, 0.55); sh.quadraticCurveTo(0.04, 0.3, 0.06, 0); sh.closePath();
        return new THREE.ShapeGeometry(sh, 6);
      });
      const lm = std('#2f9e44', { side: THREE.DoubleSide, roughness: 0.5 });
      for (let i = 0; i < 10; i++) {
        const l = mesh(leafG, lm, 0, 0.82, 0);
        l.rotation.y = (i / 10) * Math.PI * 2;
        l.rotateX(0.35 + (i % 2) * 0.25);
        g.add(l);
      }
      return g;
    },
  },
  strawberry: {
    hw: 0.3, hh: 0.3, flesh: '#ff9aae', juice: '#ff2d55', value: 2, fever: 0.05, cap: 'strawberry', capR: 0.27,
    build() {
      const g = new THREE.Group();
      const body = lathe('straw', Array.from({ length: 14 }, (_, i) => {
        const t = i / 13;
        return [Math.sin(t * Math.PI) * 0.3 * (0.35 + 0.65 * t) + 0.001, t * 0.6];
      }));
      g.add(mesh(body, std('#ffffff', { map: strawberryTex(), roughness: 0.3 })));
      const cap = mesh(geo('scap', () => new THREE.ConeGeometry(0.22, 0.08, 9)), std('#2f9e44', { flatShading: true }), 0, 0.62, 0);
      g.add(cap);
      return g;
    },
  },
  dragonfruit: {
    hw: 0.34, hh: 0.4, flesh: '#fbf4f6', juice: '#ff5fa2', value: 4, fever: 0.08, cap: 'dragonfruit', capR: 0.33,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.33), std('#ffffff', { map: dragonTex(), roughness: 0.35 }), 0, 0.4, 0);
      b.scale.set(1, 1.2, 1);
      g.add(b);
      const sg = geo('dscale', () => {
        const sh = new THREE.Shape();
        sh.moveTo(-0.07, 0); sh.quadraticCurveTo(0, 0.12, 0.02, 0.24); sh.quadraticCurveTo(0.03, 0.1, 0.07, 0); sh.closePath();
        return new THREE.ShapeGeometry(sh, 5);
      });
      const sm = std('#8fd14f', { side: THREE.DoubleSide, roughness: 0.5 });
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        const yy = 0.2 + (i % 3) * 0.17;
        const s = mesh(sg, sm, Math.cos(a) * 0.31, yy, Math.sin(a) * 0.31);
        s.rotation.y = -a + Math.PI / 2;
        s.rotateX(-0.5);
        g.add(s);
      }
      return g;
    },
  },
  kiwi: {
    hw: 0.3, hh: 0.24, flesh: '#8bc43a', juice: '#a6e05a', value: 3, fever: 0.06, cap: 'kiwi', capR: 0.26,
    build() {
      const g = new THREE.Group();
      const b = mesh(sphere(0.26), std('#ffffff', { map: kiwiTex(), bumpMap: kiwiTex(), bumpScale: 1.5, roughness: 0.95 }), 0, 0.24, 0);
      b.scale.set(1.25, 0.92, 0.92);
      g.add(b);
      return g;
    },
  },
  pear: {
    hw: 0.32, hh: 0.36, flesh: '#fbf6dc', juice: '#e6f2a0', value: 3, fever: 0.06, cap: 'pear', capR: 0.28,
    build() {
      const g = new THREE.Group();
      const body = lathe('pear', [[0.0, 0.0], [0.16, 0.01], [0.27, 0.08], [0.31, 0.2], [0.27, 0.34], [0.17, 0.46], [0.13, 0.58], [0.1, 0.68], [0.04, 0.72], [0.0, 0.72]]);
      g.add(mesh(body, std('#ffffff', { map: pearTex(), roughness: 0.4 })));
      stem(g, 0.7);
      return g;
    },
  },
  snowball: {
    hw: 0.34, hh: 0.33, flesh: '#e8f6ff', juice: '#ffffff', value: 2, fever: 0.05, cap: 'snowball', capR: 0.33,
    build() {
      const g = new THREE.Group();
      g.add(mesh(sphere(0.34, 20, 14), std('#ffffff', { map: snowTex(), bumpMap: snowTex(), bumpScale: 2, roughness: 0.9 }), 0, 0.33, 0));
      return g;
    },
  },
  plum: {
    hw: 0.3, hh: 0.3, flesh: '#ffd76a', juice: '#a33cff', value: 2, fever: 0.05, cap: 'plum', capR: 0.29,
    build() {
      const g = new THREE.Group();
      g.add(mesh(sphere(0.3), std('#ffffff', { map: plumTex(), roughness: 0.4 }), 0, 0.3, 0));
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
      g.add(mesh(sphere(0.27), std(c, { roughness: 0.12 }), 0, 0.27, 0));
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
      g.add(mesh(sphere(0.3, 24, 16), std('#111', { emissive: c, emissiveIntensity: 1.3, roughness: 0.2 }), 0, 0.3, 0));
      g.userData.juice = c;
      return g;
    },
  },
  golden: {
    hw: 0.36, hh: 0.34, flesh: '#fff3b0', juice: '#ffd23f', value: 25, fever: 0.3, golden: true, cap: 'golden', capR: 0.33,
    build() {
      const g = new THREE.Group();
      const body = lathe('apple', [[0.0, 0.04], [0.1, 0.0], [0.22, 0.02], [0.31, 0.12], [0.345, 0.27], [0.33, 0.42], [0.25, 0.55], [0.12, 0.6], [0.04, 0.55], [0.0, 0.52]]);
      g.add(mesh(body, std('#ffcf3a', { metalness: 1, roughness: 0.18, emissive: '#5a3a00', emissiveIntensity: 0.4 })));
      stem(g, 0.52);
      return g;
    },
  },

  // ---- stackable layers ---------------------------------------------------
  donut: {
    hw: 0.5, hh: 0.14, layer: true, h: 0.28, flesh: '#f3c98b', juice: '#ffb6d9', value: 1, fever: 0.035,
    frost: ['#ff7ac4', '#7ad7ff', '#6b3b1f', '#fff1f6', '#b88cff'],
    build(rng) {
      const g = new THREE.Group();
      const body = geo('donut', () => new THREE.TorusGeometry(0.33, 0.15, 16, 32));
      const d = mesh(body, std('#ffffff', { map: doughTex(), roughness: 0.75 }), 0, 0.14, 0);
      d.rotation.x = Math.PI / 2;
      g.add(d);
      const c = this.frost[Math.floor(rng() * this.frost.length)];
      const fr = mesh(geo('frost', () => new THREE.TorusGeometry(0.33, 0.155, 14, 32)), std('#ffffff', { map: sprinkleTex(c), roughness: 0.25 }), 0, 0.17, 0);
      fr.rotation.x = Math.PI / 2;
      fr.scale.set(1.02, 1.02, 0.72);
      g.add(fr);
      g.userData.juice = c;
      return g;
    },
  },
  pancake: {
    hw: 0.5, hh: 0.08, layer: true, h: 0.15, flesh: '#f7da93', juice: '#e8a83a', value: 1, fever: 0.03,
    build() {
      const g = new THREE.Group();
      g.add(mesh(geo('pcake', () => new THREE.CylinderGeometry(0.5, 0.48, 0.14, 32)), std('#ffffff', { map: pancakeTex(), roughness: 0.7 }), 0, 0.075, 0));
      return g;
    },
  },
  plank: {
    hw: 0.48, hh: 0.1, layer: true, h: 0.2, flesh: '#f8cf8c', juice: '#e8a75a', value: 1, fever: 0.03,
    colors: ['#f29b4b', '#e98a3c', '#f5ad60'],
    build(rng, i) {
      const g = new THREE.Group();
      const c = this.colors[i % this.colors.length];
      g.add(mesh(geo('plank', () => new THREE.BoxGeometry(0.95, 0.19, 0.95)), std('#ffffff', { map: plankTex(c), roughness: 0.7 }), 0, 0.1, 0));
      return g;
    },
  },
  cake: {
    hw: 0.52, hh: 0.16, layer: true, h: 0.32, flesh: '#fff0d6', juice: '#ff9ccc', value: 2, fever: 0.04,
    colors: ['#ff9ccc', '#8a4b2a', '#fff4e0', '#b0e57c'],
    build(rng, i) {
      const g = new THREE.Group();
      g.add(mesh(geo('cakeb', () => new THREE.CylinderGeometry(0.52, 0.52, 0.22, 32)), std('#ffffff', { map: doughTex(), color: '#ffe6b8', roughness: 0.8 }), 0, 0.11, 0));
      g.add(mesh(geo('cakef', () => new THREE.CylinderGeometry(0.535, 0.535, 0.09, 32)), std(this.colors[i % this.colors.length], { roughness: 0.25 }), 0, 0.26, 0));
      return g;
    },
  },
  ice: {
    hw: 0.4, hh: 0.2, layer: true, h: 0.4, flesh: '#e8f8ff', juice: '#bfe9ff', value: 1, fever: 0.035,
    build() {
      const g = new THREE.Group();
      g.add(mesh(geo('icecube', () => new THREE.BoxGeometry(0.78, 0.38, 0.78)), std('#ffffff', { map: iceTex(), roughness: 0.08, transparent: true, opacity: 0.88 }), 0, 0.2, 0));
      return g;
    },
  },
  jelly: {
    hw: 0.42, hh: 0.17, layer: true, h: 0.34, flesh: '#ffffff', juice: '#ff7ad9', value: 1, fever: 0.035,
    colors: ['#ff4d6d', '#3fc1ff', '#7cf07c', '#ffd23f', '#b06cff', '#ff8a3d'],
    build(rng, i) {
      const g = new THREE.Group();
      const c = this.colors[i % this.colors.length];
      g.add(mesh(geo('jellyb', () => new THREE.BoxGeometry(0.82, 0.32, 0.82)), std('#ffffff', { map: jellyTex(c), roughness: 0.12 }), 0, 0.17, 0));
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
      g.add(mesh(geo('neonb', () => new THREE.BoxGeometry(0.84, 0.3, 0.84)), std('#141026', { emissive: c, emissiveIntensity: 1.1, roughness: 0.25 }), 0, 0.16, 0));
      g.userData.juice = c;
      return g;
    },
  },
  cheese: {
    hw: 0.5, hh: 0.15, layer: true, h: 0.3, flesh: '#ffe27a', juice: '#ffd23f', value: 1, fever: 0.035,
    build() {
      const g = new THREE.Group();
      g.add(mesh(geo('cheese', () => new THREE.CylinderGeometry(0.5, 0.5, 0.28, 32)), std('#ffffff', { map: cheeseTex(), roughness: 0.55 }), 0, 0.14, 0));
      return g;
    },
  },
};

// Cut-face materials (shared, glossy & juicy)
const capMats = new Map();
export function capMaterial(name) {
  if (!name || !CAPS[name]) return null;
  if (!capMats.has(name)) {
    const m = new THREE.MeshStandardMaterial({ map: CAPS[name](), roughness: 0.28, metalness: 0 });
    m.userData.shared = true;
    capMats.set(name, m);
  }
  return capMats.get(name);
}

export const WOOD_MAT = () => std('#ffffff', { map: woodTex(), roughness: 0.75 });
