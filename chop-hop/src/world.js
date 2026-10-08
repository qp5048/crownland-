import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mulberry32, rand } from './util.js';
import { std } from './items.js';
import { glowTex, raysTex, cloudTex, topTex, rockTex } from './textures.js';

// Five "sky archipelago" worlds. The track is a chain of floating islands.
export const BIOMES = [
  {
    id: 'meadow',
    skyTop: '#2f7fe8', skyMid: '#8cc8ff', skyBottom: '#ffe2c4', fog: '#cfe3f6', sun: '#fff1c8',
    cloud: '#ffffff', cloudShade: '#c9d8f0',
    blockSide: '#a9713e', dust: '#cfe8b0',
    decor: 'meadow', foliage: '#3f9e3a', foliage2: '#6cc24a', trunk: '#7a4a26',
    items: ['apple', 'orange', 'lemon', 'melon', 'strawberry', 'plum', 'pear', 'kiwi', 'coconut', 'pineapple'],
    layers: ['plank', 'donut', 'pancake'],
    spike: '#ff3f6b', boss: 'melon', motes: '#fff8c0',
    hemiSky: '#cfe6ff', hemiGround: '#a7c48a', light: '#fff2dc', lightI: 2.7, hemiI: 0.9, envI: 0.55,
  },
  {
    id: 'desert',
    skyTop: '#c2462e', skyMid: '#ff9a5c', skyBottom: '#ffe0a0', fog: '#ffcf9a', sun: '#fff0b0',
    cloud: '#ffe9d2', cloudShade: '#e7a07a',
    blockSide: '#e8894a', dust: '#f6d79a',
    decor: 'desert', foliage: '#4f9a3a', foliage2: '#7cb84a', trunk: '#4f9a3a',
    items: ['coconut', 'pineapple', 'melon', 'dragonfruit', 'orange', 'lemon', 'kiwi'],
    layers: ['plank', 'pancake', 'cheese'],
    spike: '#ff5a2f', boss: 'pineapple', motes: '#ffe2a8',
    hemiSky: '#ffe0c0', hemiGround: '#d9884a', light: '#ffe0b0', lightI: 2.8, hemiI: 0.85, envI: 0.5,
  },
  {
    id: 'candy',
    skyTop: '#8a5cff', skyMid: '#d89cff', skyBottom: '#ffd6ec', fog: '#f2cdf2', sun: '#ffffff',
    cloud: '#fff0fa', cloudShade: '#e6b6ef',
    blockSide: '#f2c27a', dust: '#ffd1ec',
    decor: 'candy', foliage: '#ff5fa2', foliage2: '#7ad7ff', trunk: '#ffffff',
    items: ['gumball', 'strawberry', 'apple', 'plum', 'pear'],
    layers: ['donut', 'cake', 'jelly'],
    spike: '#7a5cff', boss: 'donutKing', motes: '#ffffff',
    hemiSky: '#ffe6ff', hemiGround: '#e2a6e6', light: '#fff3fb', lightI: 2.5, hemiI: 1.0, envI: 0.6,
  },
  {
    id: 'snow',
    skyTop: '#1f4fa8', skyMid: '#6aa4e8', skyBottom: '#e6f2ff', fog: '#d6e6fa', sun: '#ffffff',
    cloud: '#ffffff', cloudShade: '#bcd0ec',
    blockSide: '#7fa6e0', dust: '#ffffff',
    decor: 'snow', foliage: '#2f7f5a', foliage2: '#ffffff', trunk: '#5a3a20',
    items: ['snowball', 'apple', 'orange', 'plum', 'lemon', 'kiwi'],
    layers: ['ice', 'pancake', 'plank'],
    spike: '#ff3f6b', boss: 'snowman', motes: '#ffffff',
    hemiSky: '#e6f0ff', hemiGround: '#a9c0e0', light: '#ffffff', lightI: 2.4, hemiI: 1.0, envI: 0.6,
  },
  {
    id: 'neon',
    skyTop: '#05031a', skyMid: '#24104f', skyBottom: '#6a1f8a', fog: '#2a1458', sun: '#ff4dd2',
    cloud: '#5a2a9a', cloudShade: '#2a1458',
    blockSide: '#2e2470', dust: '#4dfcff',
    decor: 'neon', foliage: '#4dfcff', foliage2: '#ff4dd2', trunk: '#ff4dd2',
    items: ['neonOrb', 'dragonfruit', 'gumball'],
    layers: ['neonBlock', 'neonBlock', 'jelly'],
    spike: '#ff2f6d', boss: 'neonCube', night: true, motes: '#4dfcff',
    hemiSky: '#b9a6ff', hemiGround: '#3a2380', light: '#d7c8ff', lightI: 1.9, hemiI: 0.8, envI: 0.35,
  },
];

export function biomeForLevel(n) {
  return BIOMES[Math.floor((n - 1) / 5) % BIOMES.length];
}

// ---------------------------------------------------------------------------
// Sky dome with three-stop gradient and soft sun glow
// ---------------------------------------------------------------------------
export function createSky() {
  const geo = new THREE.SphereGeometry(600, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color('#2f7fe8') },
      mid: { value: new THREE.Color('#8cc8ff') },
      bottom: { value: new THREE.Color('#ffe2c4') },
      sunDir: { value: new THREE.Vector3(0.3, 0.25, -1).normalize() },
      sunCol: { value: new THREE.Color('#fff1c8') },
    },
    vertexShader: `varying vec3 vPos; void main(){ vPos = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vPos;
      void main(){
        float h = vPos.y;
        vec3 c = h > 0.08 ? mix(mid, top, smoothstep(0.08, 0.7, h)) : mix(bottom, mid, smoothstep(-0.25, 0.08, h));
        float s = max(dot(normalize(vPos), sunDir), 0.0);
        c += sunCol * (pow(s, 40.0) * 0.6 + pow(s, 6.0) * 0.18);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(geo, mat);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  return sky;
}

export function setSky(sky, b) {
  const u = sky.material.uniforms;
  u.top.value.set(b.skyTop);
  u.mid.value.set(b.skyMid);
  u.bottom.value.set(b.skyBottom);
  u.sunCol.value.set(b.sun);
}

// ---------------------------------------------------------------------------
// Background: sea of clouds, distant floating islands, sky clouds, motes
// ---------------------------------------------------------------------------
export function buildDecor(biome, x0, x1, floorY, seed) {
  const rng = mulberry32(seed * 7 + 3);
  const g = new THREE.Group();
  const span = x1 - x0;
  const cx = (x0 + x1) / 2;

  // cloud sea: two textured layers drifting at different speeds
  for (let i = 0; i < 2; i++) {
    const tex = cloudTex().clone();
    tex.needsUpdate = true;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set((span + 500) / 60, 400 / 60);
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(span + 500, 400),
      new THREE.MeshBasicMaterial({ map: tex, color: i ? biome.cloud : biome.cloudShade, transparent: true, depthWrite: false, opacity: i ? 0.9 : 1 }),
    );
    m.rotation.x = -Math.PI / 2;
    m.position.set(cx, floorY - i * 1.5 + 1.5, -140);
    m.userData.scroll = i ? 0.004 : 0.0025;
    m.renderOrder = -5 + i;
    g.add(m);
  }

  // puffy cloud banks along the sea, in front of and behind the islands
  const puffGeo = new THREE.IcosahedronGeometry(1, 2);
  const puffMat = std(biome.cloud, { roughness: 1, emissive: biome.cloud, emissiveIntensity: biome.night ? 0.25 : 0.35, flatShading: false });
  const puffs = [];
  for (let x = x0 - 80; x < x1 + 120; x += rand(rng, 4, 9)) {
    const z = rng() < 0.3 ? rand(rng, 4, 14) : -rand(rng, 6, 70);
    const n = 2 + Math.floor(rng() * 4);
    for (let k = 0; k < n; k++) {
      const r = rand(rng, 2, 5) * (z < -30 ? 1.8 : 1);
      puffs.push([x + k * r * 0.9, floorY + rand(rng, -0.5, 1.5), z + rand(rng, -2, 2), r]);
    }
  }
  const puffIM = new THREE.InstancedMesh(puffGeo, puffMat, puffs.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
  puffs.forEach(([x, y, z, r], i) => {
    p.set(x, y, z);
    s.set(r * 1.4, r * 0.7, r);
    m4.compose(p, q, s);
    puffIM.setMatrixAt(i, m4);
  });
  g.add(puffIM);

  // distant floating islands
  g.add(distantIslands(biome, x0, x1, floorY, rng));

  // high sky clouds
  if (!biome.night) {
    const cl = [];
    for (let x = x0 - 80; x < x1 + 160; x += rand(rng, 14, 30)) {
      const n = 3 + Math.floor(rng() * 4);
      const y = floorY + rand(rng, 20, 34), z = rand(rng, -110, -60);
      for (let k = 0; k < n; k++) cl.push([x + k * 2.6, y + rand(rng, -0.6, 0.8), z + rand(rng, -1, 1), rand(rng, 1.8, 3.4)]);
    }
    const im = new THREE.InstancedMesh(puffGeo, std('#ffffff', { roughness: 1, emissive: '#ffffff', emissiveIntensity: 0.45 }), cl.length);
    cl.forEach(([x, y, z, r], i) => {
      p.set(x, y, z);
      s.set(r * 1.3, r * 0.8, r);
      m4.compose(p, q, s);
      im.setMatrixAt(i, m4);
    });
    im.userData.drift = 0.6;
    g.add(im);
  } else {
    const pts = [];
    for (let i = 0; i < 700; i++) {
      const a = rng() * Math.PI - Math.PI;
      const e = rand(rng, 0.05, 1.2);
      pts.push(Math.cos(a) * Math.cos(e) * 400, Math.sin(e) * 400 + floorY, Math.sin(a) * Math.cos(e) * 400);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: '#ffffff', size: 1.8, sizeAttenuation: false, fog: false }));
    stars.userData.follow = true;
    g.add(stars);
  }

  // sun with rays
  const sunY = floorY + (biome.night ? 45 : 60);
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: biome.sun, fog: false, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.8 }));
  sun.scale.set(90, 90, 1);
  sun.position.set(70, sunY, -320);
  sun.userData.follow = true;
  g.add(sun);
  const rays = new THREE.Sprite(new THREE.SpriteMaterial({ map: raysTex(), color: biome.sun, fog: false, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: biome.night ? 0.25 : 0.35 }));
  rays.scale.set(260, 260, 1);
  rays.position.set(70, sunY, -330);
  rays.userData.follow = true;
  rays.userData.spin = 0.02;
  g.add(rays);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(10, 40), new THREE.MeshBasicMaterial({ color: biome.sun, fog: false }));
  disc.position.set(70, sunY, -322);
  disc.userData.follow = true;
  g.add(disc);

  return g;
}

function distantIslands(biome, x0, x1, floorY, rng) {
  const grp = new THREE.Group();
  const list = [];
  for (let x = x0 - 120; x < x1 + 160; x += rand(rng, 9, 20)) {
    const z = -rand(rng, 45, 150);
    const r = rand(rng, 2.5, 6) * (1 + (-z - 45) / 110);
    list.push([x, floorY + rand(rng, 3, 9) + (-z - 45) * 0.12, z, r, rng() * 6]);
  }
  const topGeo = new THREE.CylinderGeometry(1, 0.92, 0.5, 12);
  const sideGeo = new THREE.CylinderGeometry(0.92, 0.82, 0.8, 12);
  const rockGeo = new THREE.ConeGeometry(0.82, 2.4, 9);
  rockGeo.rotateX(Math.PI);
  const topMat = std('#ffffff', { map: topTex(biome.id), roughness: 0.9 });
  const rockMat = std('#ffffff', { map: rockTex(biome.id), roughness: 0.95, flatShading: true });
  const tops = new THREE.InstancedMesh(topGeo, topMat, list.length);
  const sides = new THREE.InstancedMesh(sideGeo, rockMat, list.length);
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, list.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
  const treeSpots = [];
  list.forEach(([x, y, z, r, rot], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot);
    p.set(x, y, z); s.set(r, r * 0.6, r);
    m4.compose(p, q, s); tops.setMatrixAt(i, m4);
    p.set(x, y - r * 0.38, z); s.set(r, r * 0.6, r);
    m4.compose(p, q, s); sides.setMatrixAt(i, m4);
    p.set(x, y - r * 0.6 - r * 0.9, z); s.set(r, r * 0.75, r);
    m4.compose(p, q, s); rocks.setMatrixAt(i, m4);
    const nt = 1 + Math.floor(rng() * 3);
    for (let k = 0; k < nt; k++) treeSpots.push([x + rand(rng, -0.5, 0.5) * r, y + r * 0.15, z + rand(rng, -0.5, 0.5) * r, r * 0.35 * rand(rng, 0.7, 1.2)]);
  });
  grp.add(tops, sides, rocks);
  addTrees(grp, biome, treeSpots, rng);
  return grp;
}

// Trees / props for a list of [x, y, z, scale]
export function addTrees(grp, biome, spots, rng) {
  if (!spots.length) return;
  const n = spots.length;
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const inst = (geo, mat, fn) => {
    const im = new THREE.InstancedMesh(geo, mat, n);
    for (let i = 0; i < n; i++) {
      const [x, y, z, sc] = spots[i];
      q.setFromAxisAngle(up, (i * 2.399) % 6.28);
      fn(p, s, x, y, z, sc, i);
      m4.compose(p, q, s);
      im.setMatrixAt(i, m4);
    }
    im.castShadow = true;
    grp.add(im);
    return im;
  };
  switch (biome.decor) {
    case 'meadow': {
      inst(new THREE.CylinderGeometry(0.12, 0.18, 1, 7), std(biome.trunk, { roughness: 0.9 }), (pp, ss, x, y, z, sc) => { pp.set(x, y + 0.5 * sc, z); ss.set(sc, sc, sc); });
      const crown = mergeGeometries([
        new THREE.IcosahedronGeometry(0.75, 1).translate(0, 0, 0),
        new THREE.IcosahedronGeometry(0.55, 1).translate(0.45, -0.15, 0.1),
        new THREE.IcosahedronGeometry(0.55, 1).translate(-0.4, -0.1, -0.1),
      ]);
      const im = inst(crown, std('#ffffff', { roughness: 0.8, flatShading: true }), (pp, ss, x, y, z, sc) => { pp.set(x, y + 1.35 * sc, z); ss.set(sc, sc, sc); });
      const c = new THREE.Color();
      for (let i = 0; i < n; i++) { c.set(i % 3 === 0 ? '#e86a9a' : i % 3 === 1 ? biome.foliage : biome.foliage2); im.setColorAt(i, c); }
      break;
    }
    case 'snow': {
      inst(new THREE.CylinderGeometry(0.1, 0.14, 0.6, 6), std(biome.trunk), (pp, ss, x, y, z, sc) => { pp.set(x, y + 0.3 * sc, z); ss.set(sc, sc, sc); });
      inst(new THREE.ConeGeometry(0.7, 1.6, 8), std(biome.foliage, { flatShading: true }), (pp, ss, x, y, z, sc) => { pp.set(x, y + 1.1 * sc, z); ss.set(sc, sc, sc); });
      inst(new THREE.ConeGeometry(0.42, 0.8, 8), std('#ffffff', { flatShading: true }), (pp, ss, x, y, z, sc) => { pp.set(x, y + 1.75 * sc, z); ss.set(sc, sc, sc); });
      break;
    }
    case 'desert': {
      const cactus = mergeGeometries([
        new THREE.CapsuleGeometry(0.22, 1.2, 4, 10).translate(0, 0.8, 0),
        new THREE.CapsuleGeometry(0.13, 0.45, 4, 8).translate(0.32, 0.95, 0),
        new THREE.CapsuleGeometry(0.13, 0.35, 4, 8).translate(-0.3, 0.75, 0),
        new THREE.CapsuleGeometry(0.11, 0.28, 3, 6).rotateZ(Math.PI / 2).translate(0.22, 0.72, 0),
        new THREE.CapsuleGeometry(0.11, 0.24, 3, 6).rotateZ(Math.PI / 2).translate(-0.2, 0.55, 0),
      ]);
      inst(cactus, std(biome.foliage, { roughness: 0.6 }), (pp, ss, x, y, z, sc) => { pp.set(x, y, z); ss.set(sc, sc, sc); });
      break;
    }
    case 'candy': {
      inst(new THREE.CylinderGeometry(0.05, 0.05, 1.6, 6), std('#ffffff'), (pp, ss, x, y, z, sc) => { pp.set(x, y + 0.8 * sc, z); ss.set(sc, sc, sc); });
      const im = inst(new THREE.CylinderGeometry(0.55, 0.55, 0.18, 20), std('#ffffff', { roughness: 0.2 }), (pp, ss, x, y, z, sc) => { pp.set(x, y + 1.75 * sc, z); ss.set(sc, sc, sc); });
      const c = new THREE.Color();
      const cols = ['#ff5fa2', '#7ad7ff', '#ffd23f', '#9b7bff', '#7cf07c'];
      for (let i = 0; i < n; i++) { c.set(cols[i % cols.length]); im.setColorAt(i, c); }
      // rotate candy discs to face the camera
      const qq = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
      for (let i = 0; i < n; i++) {
        const [x, y, z, sc] = spots[i];
        m4.compose(p.set(x, y + 1.75 * sc, z), qq, s.set(sc, sc, sc));
        im.setMatrixAt(i, m4);
      }
      break;
    }
    case 'neon': {
      inst(new THREE.OctahedronGeometry(0.5, 0), std('#111', { emissive: biome.foliage, emissiveIntensity: 1.2, flatShading: true }), (pp, ss, x, y, z, sc) => { pp.set(x, y + 0.9 * sc, z); ss.set(sc * 0.6, sc * 1.9, sc * 0.6); });
      inst(new THREE.OctahedronGeometry(0.35, 0), std('#111', { emissive: biome.foliage2, emissiveIntensity: 1.2, flatShading: true }), (pp, ss, x, y, z, sc) => { pp.set(x + 0.45 * sc, y + 0.45 * sc, z + 0.2); ss.set(sc * 0.5, sc * 1.3, sc * 0.5); });
      break;
    }
    default:
      break;
  }
}

// Ambient floating particles (pollen, dust, snow, sparkles) that follow the camera
export function createMotes(biome) {
  const N = 220;
  const pos = new Float32Array(N * 3);
  const rng = mulberry32(17);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (rng() - 0.5) * 40;
    pos[i * 3 + 1] = (rng() - 0.5) * 20;
    pos[i * 3 + 2] = (rng() - 0.5) * 20 - 2;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: biome.motes, size: biome.id === 'snow' ? 0.13 : 0.08, map: glowTex(), transparent: true, depthWrite: false,
    blending: biome.night ? THREE.AdditiveBlending : THREE.NormalBlending, opacity: 0.85,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.userData.fall = biome.id === 'snow' ? 1.2 : biome.id === 'desert' ? 0.1 : -0.15;
  pts.userData.wind = biome.id === 'desert' ? 2.5 : 0.5;
  return pts;
}

export function updateMotes(pts, cam, dt, t) {
  const a = pts.geometry.attributes.position;
  const arr = a.array;
  const fall = pts.userData.fall, wind = pts.userData.wind;
  for (let i = 0; i < arr.length; i += 3) {
    arr[i] += (wind + Math.sin(t + i) * 0.3) * dt;
    arr[i + 1] -= fall * dt + Math.cos(t * 0.7 + i) * 0.1 * dt;
    // wrap around the camera
    const dx = arr[i] - cam.x;
    if (dx > 20) arr[i] -= 40; else if (dx < -20) arr[i] += 40;
    const dy = arr[i + 1] - cam.y;
    if (dy > 10) arr[i + 1] -= 20; else if (dy < -10) arr[i + 1] += 20;
  }
  a.needsUpdate = true;
}
