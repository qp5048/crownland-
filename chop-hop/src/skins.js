import * as THREE from 'three';
import { candyTex, wrapTex, lavaTex, breadTex } from './textures.js';

// Blade models are built in local space: +X points to the tip (x = 1.05),
// the handle butt sits at x = -0.55, and the centre of mass is the origin.

export const SKINS = [
  { id: 'chef', name: { en: 'Chef', ru: 'Шеф' }, unlock: { type: 'default' }, trail: '#cfefff' },
  { id: 'cleaver', name: { en: 'Cleaver', ru: 'Тесак' }, unlock: { type: 'coins', price: 500 }, trail: '#ffffff' },
  { id: 'kunai', name: { en: 'Kunai', ru: 'Кунай' }, unlock: { type: 'coins', price: 1200 }, trail: '#ff6b6b' },
  { id: 'candy', name: { en: 'Candy Cane', ru: 'Леденец' }, unlock: { type: 'stars', count: 9 }, trail: '#ff5f8f' },
  { id: 'cutlass', name: { en: 'Cutlass', ru: 'Абордажная сабля' }, unlock: { type: 'coins', price: 2500 }, trail: '#ffe08a' },
  { id: 'baguette', name: { en: 'Baguette', ru: 'Багет' }, unlock: { type: 'coins', price: 4000 }, trail: '#f3d08a' },
  { id: 'laser', name: { en: 'Laser Saber', ru: 'Лазерный меч' }, unlock: { type: 'ads', count: 3 }, trail: '#4dfcff' },
  { id: 'katana', name: { en: 'Katana', ru: 'Катана' }, unlock: { type: 'coins', price: 6500 }, trail: '#ff4d6d' },
  { id: 'ice', name: { en: 'Frost Fang', ru: 'Ледяной клык' }, unlock: { type: 'stars', count: 24 }, trail: '#9fe6ff' },
  { id: 'lava', name: { en: 'Magma', ru: 'Магма' }, unlock: { type: 'level', level: 15 }, trail: '#ff7a1a' },
  { id: 'golden', name: { en: 'Golden', ru: 'Золотой' }, unlock: { type: 'coins', price: 12000 }, trail: '#ffd23f' },
  { id: 'rainbow', name: { en: 'Rainbow', ru: 'Радуга' }, unlock: { type: 'stars', count: 45 }, trail: 'rainbow' },
];

export const skinById = (id) => SKINS.find((s) => s.id === id) || SKINS[0];

const steel = () => new THREE.MeshPhongMaterial({ color: '#e3eaf2', specular: '#ffffff', shininess: 110 });

function extrude(shape, depth = 0.045, bevel = 0.014) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 10,
  });
  geo.translate(0, 0, -depth / 2);
  return geo;
}

function chefShape() {
  const s = new THREE.Shape();
  s.moveTo(0, -0.11);
  s.lineTo(0, 0.1);
  s.lineTo(0.68, 0.1);
  s.quadraticCurveTo(0.96, 0.08, 1.05, -0.02);
  s.quadraticCurveTo(0.7, -0.14, 0, -0.11);
  return s;
}

function handleBox(color, x0 = -0.55, x1 = -0.03, h = 0.15, map = null) {
  const geo = new THREE.CapsuleGeometry(h / 2, x1 - x0 - h, 4, 10);
  geo.rotateZ(Math.PI / 2);
  geo.scale(1, 1, 0.72);
  const m = new THREE.Mesh(geo, new THREE.MeshPhongMaterial({ color, shininess: 30, map }));
  m.position.x = (x0 + x1) / 2;
  return m;
}

function rivets(group, color = '#d8dde3', xs = [-0.42, -0.18]) {
  const geo = new THREE.CylinderGeometry(0.022, 0.022, 0.13, 8);
  geo.rotateX(Math.PI / 2);
  const mat = new THREE.MeshPhongMaterial({ color, shininess: 90 });
  for (const x of xs) {
    const r = new THREE.Mesh(geo, mat);
    r.position.x = x;
    group.add(r);
  }
}

function bolster(group, color = '#c7ced6', h = 0.22) {
  const b = new THREE.Mesh(new THREE.BoxGeometry(0.06, h, 0.1), new THREE.MeshPhongMaterial({ color, shininess: 90 }));
  b.position.x = -0.02;
  group.add(b);
}

const BUILDERS = {
  chef(g) {
    g.add(new THREE.Mesh(extrude(chefShape()), steel()));
    bolster(g);
    g.add(handleBox('#e23d5c'));
    rivets(g);
  },
  cleaver(g) {
    const s = new THREE.Shape();
    s.moveTo(0, -0.24);
    s.lineTo(0.98, -0.24);
    s.lineTo(1.05, 0.14);
    s.lineTo(0, 0.14);
    s.closePath();
    const hole = new THREE.Path();
    hole.absarc(0.86, 0.04, 0.05, 0, Math.PI * 2, true);
    s.holes.push(hole);
    g.add(new THREE.Mesh(extrude(s, 0.05), new THREE.MeshPhongMaterial({ color: '#c9d2dc', specular: '#ffffff', shininess: 70 })));
    bolster(g, '#9aa4ae', 0.2);
    g.add(handleBox('#7a4a28'));
    rivets(g, '#f1d38a');
  },
  kunai(g) {
    const s = new THREE.Shape();
    s.moveTo(0, 0.04);
    s.lineTo(0.3, 0.15);
    s.lineTo(1.05, 0);
    s.lineTo(0.3, -0.15);
    s.lineTo(0, -0.04);
    s.closePath();
    g.add(new THREE.Mesh(extrude(s, 0.04), new THREE.MeshPhongMaterial({ color: '#3b4250', specular: '#9fb3c8', shininess: 80 })));
    const h = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.44, 10), new THREE.MeshLambertMaterial({ map: wrapTex('#2b2b2b', '#d62d2d') }));
    h.rotation.z = Math.PI / 2;
    h.position.x = -0.24;
    g.add(h);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.022, 8, 18), new THREE.MeshPhongMaterial({ color: '#3b4250', shininess: 80 }));
    ring.position.x = -0.53;
    g.add(ring);
  },
  candy(g) {
    const tex = candyTex();
    g.add(new THREE.Mesh(extrude(chefShape()), new THREE.MeshPhongMaterial({ map: tex, shininess: 120, specular: '#ffffff' })));
    bolster(g, '#ffffff');
    g.add(handleBox('#ff4d7a'));
    rivets(g, '#ffffff');
  },
  cutlass(g) {
    const s = new THREE.Shape();
    s.moveTo(0, -0.1);
    s.lineTo(0, 0.08);
    s.quadraticCurveTo(0.65, 0.06, 1.05, 0.2);
    s.quadraticCurveTo(0.8, -0.18, 0, -0.1);
    g.add(new THREE.Mesh(extrude(s), steel()));
    const guard = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 8, 20, Math.PI), new THREE.MeshPhongMaterial({ color: '#e0a82e', shininess: 90, specular: '#fff3b0' }));
    guard.position.set(-0.24, 0, 0);
    guard.rotation.z = Math.PI;
    guard.scale.set(1.2, 0.9, 1);
    g.add(guard);
    g.add(handleBox('#5a2f17', -0.5, -0.03, 0.12));
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), new THREE.MeshPhongMaterial({ color: '#e0a82e', shininess: 90 }));
    pommel.position.x = -0.53;
    g.add(pommel);
  },
  baguette(g) {
    const geo = new THREE.CapsuleGeometry(0.11, 0.85, 6, 12);
    geo.rotateZ(Math.PI / 2);
    geo.scale(1, 1, 0.9);
    const b = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: breadTex() }));
    b.position.x = 0.52;
    g.add(b);
    const paper = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.5, 12), new THREE.MeshLambertMaterial({ map: wrapTex('#f5efe0', '#c89a5b') }));
    paper.rotation.z = Math.PI / 2;
    paper.position.x = -0.3;
    g.add(paper);
  },
  laser(g) {
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.02, 12), new THREE.MeshBasicMaterial({ color: '#ecffff' }));
    core.rotation.z = Math.PI / 2;
    core.position.x = 0.53;
    g.add(core);
    const glow = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.95, 4, 12), new THREE.MeshBasicMaterial({ color: '#4dfcff', transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    glow.rotation.z = Math.PI / 2;
    glow.position.x = 0.53;
    g.add(glow);
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.06, 0.52, 14), new THREE.MeshPhongMaterial({ color: '#2a2f38', shininess: 80, specular: '#ffffff' }));
    hilt.rotation.z = Math.PI / 2;
    hilt.position.x = -0.28;
    g.add(hilt);
    for (const x of [-0.08, -0.46]) {
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.06, 14), new THREE.MeshPhongMaterial({ color: '#c9d2dc', shininess: 100 }));
      band.rotation.z = Math.PI / 2;
      band.position.x = x;
      g.add(band);
    }
    const btn = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.05), new THREE.MeshBasicMaterial({ color: '#ff3b5c' }));
    btn.position.set(-0.24, 0.07, 0);
    g.add(btn);
  },
  katana(g) {
    const s = new THREE.Shape();
    s.moveTo(0, -0.04);
    s.lineTo(0, 0.045);
    s.quadraticCurveTo(0.6, 0.065, 1.05, 0.1);
    s.lineTo(0.98, 0.04);
    s.quadraticCurveTo(0.6, -0.02, 0, -0.04);
    g.add(new THREE.Mesh(extrude(s, 0.035, 0.01), steel()));
    const tsuba = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.035, 18), new THREE.MeshPhongMaterial({ color: '#d8a72a', shininess: 90 }));
    tsuba.rotation.z = Math.PI / 2;
    tsuba.position.x = -0.01;
    g.add(tsuba);
    const h = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.5, 10), new THREE.MeshLambertMaterial({ map: wrapTex('#1d1d1d', '#c8102e') }));
    h.rotation.z = Math.PI / 2;
    h.position.x = -0.28;
    g.add(h);
  },
  ice(g) {
    g.add(new THREE.Mesh(extrude(chefShape()), new THREE.MeshPhongMaterial({ color: '#9fe6ff', emissive: '#2a7fbf', emissiveIntensity: 0.35, transparent: true, opacity: 0.82, shininess: 140, specular: '#ffffff' })));
    bolster(g, '#e8f6ff');
    g.add(handleBox('#d8e6f2'));
    rivets(g, '#7ab8e8');
  },
  lava(g) {
    const tex = lavaTex();
    g.add(new THREE.Mesh(extrude(chefShape()), new THREE.MeshPhongMaterial({ color: '#ffffff', map: tex, emissive: '#ff6a00', emissiveMap: tex, emissiveIntensity: 1.1, shininess: 30 })));
    bolster(g, '#3a1a10');
    g.add(handleBox('#1d1412'));
    rivets(g, '#ff7a1a');
  },
  golden(g) {
    g.add(new THREE.Mesh(extrude(chefShape()), new THREE.MeshPhongMaterial({ color: '#ffcc33', specular: '#fff3b0', emissive: '#7a5000', emissiveIntensity: 0.35, shininess: 120 })));
    bolster(g, '#ffcc33');
    g.add(handleBox('#7a1424'));
    rivets(g, '#ffcc33');
  },
  rainbow(g) {
    const geo = extrude(chefShape());
    const pos = geo.attributes.position;
    const cols = [];
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      c.setHSL((pos.getX(i) / 1.05) * 0.85, 0.9, 0.58);
      cols.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    g.add(new THREE.Mesh(geo, new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 120, specular: '#ffffff' })));
    bolster(g, '#ffffff');
    g.add(handleBox('#ffffff'));
    rivets(g, '#ff5fa2');
  },
};

export function buildBlade(skin) {
  const g = new THREE.Group();
  (BUILDERS[skin.id] || BUILDERS.chef)(g);
  g.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = !(o.material && o.material.blending === THREE.AdditiveBlending);
    }
  });
  return g;
}

export function disposeBlade(g) {
  g.traverse((o) => {
    if (o.isMesh) {
      o.geometry.dispose();
      if (o.material && !o.material.map) o.material.dispose();
    }
  });
}

// Render a small preview picture for every blade (used by the shop).
export function renderThumbs() {
  const out = {};
  let renderer;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 192;
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
    renderer.setSize(192, 192, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight('#ffffff', '#8899aa', 2.2));
    const dl = new THREE.DirectionalLight('#ffffff', 2.4);
    dl.position.set(-1, 2, 3);
    scene.add(dl);
    const cam = new THREE.OrthographicCamera(-0.9, 0.9, 0.9, -0.9, 0.1, 10);
    cam.position.set(0, 0, 4);
    for (const s of SKINS) {
      const b = buildBlade(s);
      b.position.x = -0.25 * Math.SQRT1_2;
      b.position.y = -0.25 * Math.SQRT1_2;
      b.rotation.z = Math.PI / 4;
      b.rotation.y = -0.25;
      scene.add(b);
      renderer.render(scene, cam);
      out[s.id] = canvas.toDataURL('image/png');
      scene.remove(b);
      disposeBlade(b);
    }
  } catch (e) {
    // thumbnails are cosmetic
  } finally {
    if (renderer) {
      renderer.dispose();
      renderer.forceContextLoss();
    }
  }
  return out;
}
