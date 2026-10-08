import * as THREE from 'three';
import { mulberry32, rand } from './util.js';
import { lambert } from './items.js';
import { glowTex } from './textures.js';

export const BIOMES = [
  {
    id: 'meadow',
    skyTop: '#3fb2ff', skyBottom: '#dff6ff', fog: '#cdeefe', sun: '#fffbe0',
    ground: '#86dc5c', block: '#ffffff', blockSide: '#e4ebf3', edge: null,
    hills: ['#6fd35a', '#5cc24f', '#8fe070', '#79d062'], far: '#a6dcae',
    decor: 'pine', foliage: '#3fae5a', trunk: '#8b5a2b',
    items: ['apple', 'orange', 'lemon', 'melon', 'strawberry', 'plum', 'coconut', 'pineapple'],
    layers: ['plank', 'donut', 'pancake'],
    spike: '#ff3fa4', boss: 'melon',
    hemiSky: '#ffffff', hemiGround: '#9bd77a', light: '#fff5e0', lightI: 2.6, hemiI: 1.9,
  },
  {
    id: 'desert',
    skyTop: '#ff7f5c', skyBottom: '#ffe2ae', fog: '#ffd9ae', sun: '#fff0c0',
    ground: '#f2c27a', block: '#fff6e8', blockSide: '#f1dcc0', edge: null,
    hills: ['#e9a860', '#d98f4f', '#f2bb73', '#e39c5c'], far: '#f0b98a',
    decor: 'cactus', foliage: '#4fa64a', trunk: '#4fa64a',
    items: ['coconut', 'pineapple', 'melon', 'dragonfruit', 'orange', 'lemon'],
    layers: ['plank', 'pancake', 'cheese'],
    spike: '#ff4f3f', boss: 'pineapple',
    hemiSky: '#fff3dd', hemiGround: '#f0b070', light: '#ffe2bd', lightI: 2.7, hemiI: 1.8,
  },
  {
    id: 'candy',
    skyTop: '#ff7fd3', skyBottom: '#ffe8f8', fog: '#ffe1f4', sun: '#ffffff',
    ground: '#ffb8e4', block: '#ffffff', blockSide: '#f7e2f1', edge: null,
    hills: ['#ff9fd8', '#c9a2ff', '#9fdcff', '#ffc4e8'], far: '#f5b8e6',
    decor: 'lollipop', foliage: '#ff5fa2', trunk: '#ffffff',
    items: ['gumball', 'strawberry', 'apple', 'plum'],
    layers: ['donut', 'cake', 'jelly'],
    spike: '#7a5cff', boss: 'donutKing',
    hemiSky: '#ffffff', hemiGround: '#ffb0dc', light: '#fff0fa', lightI: 2.5, hemiI: 2.0,
  },
  {
    id: 'snow',
    skyTop: '#5f9cff', skyBottom: '#eef5ff', fog: '#e4efff', sun: '#ffffff',
    ground: '#f4f8ff', block: '#e2f1ff', blockSide: '#c8dcf2', edge: null,
    hills: ['#ffffff', '#e3eefc', '#d3e4f7', '#f2f7ff'], far: '#c9dcf5',
    decor: 'snowpine', foliage: '#2f8f5a', trunk: '#6b4423',
    items: ['snowball', 'apple', 'orange', 'plum', 'lemon'],
    layers: ['ice', 'pancake', 'plank'],
    spike: '#ff3f6b', boss: 'snowman',
    hemiSky: '#ffffff', hemiGround: '#cfe0f5', light: '#ffffff', lightI: 2.3, hemiI: 2.0,
  },
  {
    id: 'neon',
    skyTop: '#090722', skyBottom: '#3d1a7a', fog: '#26135a', sun: '#ff4dd2',
    ground: '#1b1240', block: '#2e2566', blockSide: '#211a4f', edge: '#4dfcff',
    hills: ['#2a1d66', '#33237a', '#1f1650', '#3a2a8a'], far: '#2a1a62',
    decor: 'crystal', foliage: '#4dfcff', trunk: '#ff4dd2',
    items: ['neonOrb', 'dragonfruit', 'gumball'],
    layers: ['neonBlock', 'neonBlock', 'jelly'],
    spike: '#ff2f6d', boss: 'neonCube', night: true,
    hemiSky: '#b9a6ff', hemiGround: '#3a2380', light: '#d7c8ff', lightI: 1.9, hemiI: 1.6,
  },
];

export function biomeForLevel(n) {
  return BIOMES[Math.floor((n - 1) / 5) % BIOMES.length];
}

// ---------------------------------------------------------------------------
// Sky dome
// ---------------------------------------------------------------------------
export function createSky() {
  const geo = new THREE.SphereGeometry(600, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color('#3fb2ff') },
      bottom: { value: new THREE.Color('#dff6ff') },
    },
    vertexShader: `varying vec3 vPos; void main(){ vPos = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 top; uniform vec3 bottom; varying vec3 vPos;
      void main(){ float h = clamp(vPos.y*1.6+0.15,0.0,1.0); vec3 c = mix(bottom, top, pow(h,0.8)); gl_FragColor = vec4(c,1.0);
      #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(geo, mat);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  return sky;
}

// ---------------------------------------------------------------------------
// Background decoration for a level
// ---------------------------------------------------------------------------
export function buildDecor(biome, x0, x1, floorY, seed) {
  const rng = mulberry32(seed * 7 + 3);
  const g = new THREE.Group();
  const span = x1 - x0;

  // meadow / ground plane
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(span + 600, 500), lambert(biome.ground));
  plane.rotation.x = -Math.PI / 2;
  plane.position.set((x0 + x1) / 2, floorY, -120);
  plane.receiveShadow = true;
  g.add(plane);

  // rolling hills
  const hillGeo = new THREE.SphereGeometry(1, 20, 12);
  for (let x = x0 - 60; x < x1 + 80; x += rand(rng, 10, 18)) {
    const r = rand(rng, 7, 15);
    const z = rand(rng, -40, -22);
    const h = new THREE.Mesh(hillGeo, lambert(biome.hills[Math.floor(rng() * biome.hills.length)]));
    h.scale.set(r * rand(rng, 1.2, 1.8), r * rand(rng, 0.45, 0.75), r);
    h.position.set(x, floorY - 1, z);
    g.add(h);
  }
  // far hills / mountains
  const farMat = lambert(biome.far);
  const mountainy = biome.id === 'snow' || biome.id === 'desert' || biome.id === 'neon';
  const farGeo = mountainy ? new THREE.ConeGeometry(1, 1, 6) : hillGeo;
  for (let x = x0 - 120; x < x1 + 160; x += rand(rng, 18, 30)) {
    const r = rand(rng, 16, 30);
    const m = new THREE.Mesh(farGeo, farMat);
    if (mountainy) {
      m.scale.set(r, r * rand(rng, 0.9, 1.4), r);
      m.position.set(x, floorY + r * 0.45, rand(rng, -110, -80));
      if (biome.id === 'snow') {
        const cap = new THREE.Mesh(farGeo, lambert('#ffffff'));
        cap.scale.set(0.42, 0.42, 0.42);
        cap.position.y = 0.29;
        m.add(cap);
      }
    } else {
      m.scale.set(r * 1.6, r * 0.6, r);
      m.position.set(x, floorY - 2, rand(rng, -100, -70));
    }
    g.add(m);
  }

  // trees / props (instanced)
  const count = Math.floor((span + 100) / 2.2);
  const positions = [];
  for (let i = 0; i < count; i++) {
    const x = x0 - 30 + rng() * (span + 90);
    let z = -rand(rng, 4.5, 26);
    if (rng() < 0.12) z = rand(rng, 9, 16);
    positions.push([x, z, rand(rng, 0.7, 1.4), rng() * Math.PI * 2]);
  }
  addProps(g, biome, positions, floorY, rng);

  // clouds
  if (!biome.night) {
    const cloudMat = lambert('#ffffff', { emissive: '#ffffff', emissiveIntensity: 0.35 });
    const cg = new THREE.SphereGeometry(1, 12, 8);
    for (let x = x0 - 60; x < x1 + 120; x += rand(rng, 18, 34)) {
      const c = new THREE.Group();
      const n = 3 + Math.floor(rng() * 3);
      for (let k = 0; k < n; k++) {
        const s = new THREE.Mesh(cg, cloudMat);
        const r = rand(rng, 1.6, 2.8);
        s.scale.set(r * 1.3, r, r);
        s.position.set(k * 2.2 - n, rand(rng, -0.4, 0.6), rand(rng, -0.5, 0.5));
        c.add(s);
      }
      c.position.set(x, floorY + rand(rng, 18, 30), rand(rng, -70, -45));
      c.userData.drift = rand(rng, 0.3, 0.8);
      c.userData.cloud = true;
      g.add(c);
    }
  } else {
    // stars
    const pts = [];
    for (let i = 0; i < 500; i++) {
      const a = rng() * Math.PI - Math.PI;
      const e = rand(rng, 0.08, 1.2);
      pts.push(Math.cos(a) * Math.cos(e) * 400, Math.sin(e) * 400 + floorY, Math.sin(a) * Math.cos(e) * 400);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: '#ffffff', size: 1.6, sizeAttenuation: false, fog: false }));
    stars.userData.follow = true;
    g.add(stars);
  }

  // sun / moon glow
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: biome.sun, fog: false, transparent: true, depthWrite: false }));
  sun.scale.set(70, 70, 1);
  sun.position.set(60, floorY + 70, -300);
  sun.userData.follow = true;
  g.add(sun);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(9, 32), new THREE.MeshBasicMaterial({ color: biome.sun, fog: false }));
  disc.position.set(60, floorY + 70, -301);
  disc.userData.follow = true;
  g.add(disc);

  return g;
}

function addProps(g, biome, positions, floorY, rng) {
  const n = positions.length;
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const s = new THREE.Vector3();
  const p = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const make = (geo, mat, fn) => {
    const im = new THREE.InstancedMesh(geo, mat, n);
    im.castShadow = false;
    im.receiveShadow = false;
    for (let i = 0; i < n; i++) {
      const [x, z, sc, rot] = positions[i];
      fn(p, s, x, z, sc);
      q.setFromAxisAngle(up, rot);
      m4.compose(p, q, s);
      im.setMatrixAt(i, m4);
    }
    im.instanceMatrix.needsUpdate = true;
    g.add(im);
    return im;
  };
  const base = floorY;
  switch (biome.decor) {
    case 'pine':
    case 'snowpine': {
      make(new THREE.CylinderGeometry(0.15, 0.2, 1, 6), lambert(biome.trunk), (pp, ss, x, z, sc) => {
        pp.set(x, base + 0.5 * sc, z);
        ss.set(sc, sc, sc);
      });
      const cone = new THREE.ConeGeometry(0.9, 2.2, 7);
      make(cone, lambert(biome.foliage, { flatShading: true }), (pp, ss, x, z, sc) => {
        pp.set(x, base + 1.8 * sc, z);
        ss.set(sc, sc, sc);
      });
      make(cone, lambert(biome.id === 'snow' ? '#ffffff' : '#56c46a', { flatShading: true }), (pp, ss, x, z, sc) => {
        pp.set(x, base + 2.7 * sc, z);
        ss.set(sc * 0.62, sc * 0.6, sc * 0.62);
      });
      break;
    }
    case 'cactus': {
      make(new THREE.CapsuleGeometry(0.3, 1.6, 4, 8), lambert(biome.foliage), (pp, ss, x, z, sc) => {
        pp.set(x, base + 1.1 * sc, z);
        ss.set(sc, sc, sc);
      });
      make(new THREE.CapsuleGeometry(0.2, 0.6, 4, 8), lambert(biome.foliage), (pp, ss, x, z, sc) => {
        pp.set(x + 0.45 * sc, base + 1.4 * sc, z);
        ss.set(sc, sc, sc);
      });
      make(new THREE.SphereGeometry(0.5, 8, 6), lambert('#c9905a', { flatShading: true }), (pp, ss, x, z, sc) => {
        pp.set(x + 1.3, base + 0.15, z + 0.8);
        ss.set(sc * 0.8, sc * 0.5, sc * 0.8);
      });
      break;
    }
    case 'lollipop': {
      make(new THREE.CylinderGeometry(0.06, 0.06, 2.4, 6), lambert('#ffffff'), (pp, ss, x, z, sc) => {
        pp.set(x, base + 1.2 * sc, z);
        ss.set(sc, sc, sc);
      });
      const cols = ['#ff5fa2', '#7ad7ff', '#ffd23f', '#9b7bff', '#7cf07c'];
      const per = Math.ceil(n / cols.length);
      cols.forEach((c, ci) => {
        const im = new THREE.InstancedMesh(new THREE.SphereGeometry(0.75, 14, 10), lambert(c), per);
        let k = 0;
        for (let i = ci; i < n; i += cols.length) {
          const [x, z, sc] = positions[i];
          p.set(x, base + 2.5 * sc, z);
          s.set(sc, sc, sc * 0.45);
          q.identity();
          m4.compose(p, q, s);
          im.setMatrixAt(k++, m4);
        }
        im.count = k;
        g.add(im);
      });
      break;
    }
    case 'crystal': {
      make(new THREE.OctahedronGeometry(0.8, 0), lambert('#111', { emissive: biome.foliage, emissiveIntensity: 0.8, flatShading: true }), (pp, ss, x, z, sc) => {
        pp.set(x, base + 1.2 * sc, z);
        ss.set(sc * 0.6, sc * 1.8, sc * 0.6);
      });
      make(new THREE.OctahedronGeometry(0.5, 0), lambert('#111', { emissive: biome.trunk, emissiveIntensity: 0.8, flatShading: true }), (pp, ss, x, z, sc) => {
        pp.set(x + 0.7, base + 0.6 * sc, z + 0.4);
        ss.set(sc * 0.5, sc * 1.4, sc * 0.5);
      });
      break;
    }
    default:
      break;
  }
}
