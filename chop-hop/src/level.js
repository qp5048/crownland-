import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mulberry32, rand, randInt, pick, weighted, clamp } from './util.js';
import { ITEMS, lambert, std, phong, WOOD_MAT } from './items.js';
import { checkerTex, targetTex, melonTex, pineappleTex, glowTex, sprinkleTex, topTex, sideTex, sideEmissive, rockTex, ironTex, coinTex, snowTex } from './textures.js';
import { addTrees } from './world.js';

const mg = (list) => mergeGeometries(list.map((x) => (x.index ? x.toNonIndexed() : x)));

export const DEPTH = 2.6;
export const ISLAND_H = 2.0;
const EMBED = 0.18;
export const TIP = 1.05;

// shared geometries
const G = {};
function g(key, fn) {
  if (!G[key]) {
    G[key] = fn();
    G[key].userData.shared = true;
  }
  return G[key];
}

function starShape() {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 0.17 : 0.4;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    const x = Math.cos(a) * r, y = Math.sin(a) * r;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  s.closePath();
  return s;
}

// Box UVs scaled to world units so tiled textures keep a constant density
function scaleBoxUV(geo, w, h, d) {
  const uv = geo.attributes.uv;
  const T = 2.4;
  // face order: +x, -x, +y, -y, +z, -z (4 verts each)
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      const [a, bb] = dims[f];
      if (f === 2 || f === 3) uv.setXY(i, (uv.getX(i) * a) / T, (uv.getY(i) * bb) / T);
      else uv.setXY(i, (uv.getX(i) * a) / ISLAND_H, uv.getY(i));
    }
  }
}

export class Level {
  constructor(n, biome) {
    this.n = n;
    this.biome = biome;
    this.isBoss = n % 5 === 0;
    this.rng = mulberry32(n * 7919 + 1013);
    this.root = new THREE.Group();
    this.solids = [];
    this.hazards = [];
    this.pads = [];
    this.rings = [];
    this.items = [];
    this.piles = [];
    this.coins = [];
    this.stars = [];
    this.pickups = [];
    this.flags = [];
    this.hints = [];
    this.starCandidates = [];
    this.boss = null;
    this.board = null;
    this.finish = null;
    this.time = 0;
    this.x = 0;
    this.top = 0;
    this.minTop = 0;
    this.d = clamp((n - 1) / 18, 0, 1);
    this.generate();
    this.build();
  }

  // -------------------------------------------------------------------------
  // Generation
  // -------------------------------------------------------------------------
  generate() {
    const rng = this.rng;
    const n = this.n;
    this.startX = 0;
    this.startTop = 0;
    this.ground(-8, 5, 0);
    this.x = 5;

    if (n === 1) {
      this.hints.push({ x: -100, key: 'hint_tap' });
      this.segFruitRun(4);
      this.hints.push({ x: 6, key: 'hint_slice' });
      this.segStepUp();
      this.hints.push({ x: this.x - 2, key: 'hint_fly' });
      this.segGap(2.2);
      this.segPost();
      this.hints.push({ x: this.x + 1, key: 'hint_spikes' });
      this.segSpikes(1.1);
      this.segTower(12);
      this.hints.push({ x: this.x, key: 'hint_fever' });
      this.segFruitRun(5);
      this.segStepDown();
    } else {
      const length = Math.min(52 + n * 3.6, 140);
      let last = '';
      const types = () => [
        ['fruit', 3],
        ['stepUp', 2],
        ['stepDown', 1.4],
        ['gap', 2 + this.d],
        ['post', 1.8],
        ['tower', 1.3],
        ['spikes', n >= 2 ? 1.2 + 2 * this.d : 0],
        ['wall', n >= 3 ? 0.9 + this.d : 0],
        ['jelly', n >= 3 ? 1 : 0],
        ['saw', n >= 6 ? 0.6 + 1.6 * this.d : 0],
        ['ring', n >= 4 ? 1 : 0],
        ['mspike', n >= 8 ? 0.5 + 1.4 * this.d : 0],
        ['big', 0.8],
        ['pyramid', 1],
        ['shield', n >= 4 ? 0.25 : 0],
      ];
      while (this.x < length) {
        const list = types().filter((e) => e[0] !== last);
        const type = weighted(rng, list);
        last = type;
        switch (type) {
          case 'fruit': this.segFruitRun(); break;
          case 'stepUp': this.segStepUp(); break;
          case 'stepDown': this.segStepDown(); break;
          case 'gap': this.segGap(); break;
          case 'post': this.segPost(); break;
          case 'tower': this.segTower(); break;
          case 'spikes': this.segSpikes(); break;
          case 'wall': this.segWall(); break;
          case 'jelly': this.segJelly(); break;
          case 'saw': this.segSaw(); break;
          case 'ring': this.segRing(); break;
          case 'mspike': this.segMovingSpikes(); break;
          case 'big': this.segBig(); break;
          case 'pyramid': this.segPyramid(); break;
          case 'shield': this.segShield(); break;
          default: this.segFruitRun();
        }
      }
    }

    if (this.isBoss) this.segBoss();
    this.segFinale();
    this.placeStars();
    this.floorY = this.minTop - 9;
    this.killY = this.minTop - 3.4;
    for (const s of this.solids) if (s.kind === 'ground') s.y0 = s.y1 - ISLAND_H;
  }

  ground(x0, x1, top) {
    const last = this.solids[this.solids.length - 1];
    if (last && last.kind === 'ground' && Math.abs(last.x1 - x0) < 0.01 && Math.abs(last.y1 - top) < 0.01) {
      last.x1 = x1;
      return last;
    }
    const s = { kind: 'ground', x0, x1, y0: -50, y1: top, stick: true, active: true };
    this.solids.push(s);
    this.minTop = Math.min(this.minTop, top);
    return s;
  }

  wood(x0, x1, y0, y1, kind = 'wood') {
    const s = { kind, x0, x1, y0, y1, stick: kind !== 'gate', active: true };
    this.solids.push(s);
    return s;
  }

  item(type, x, y, pile = null, idx = 0) {
    const def = ITEMS[type];
    const it = {
      type, def, x, y,
      hw: def.hw, hh: def.layer ? def.h / 2 : def.hh,
      h: def.layer ? def.h : def.hh * 2,
      alive: true, pile, idx, vy: 0,
      value: def.value, golden: !!def.golden,
    };
    this.items.push(it);
    if (pile) pile.items.push(it);
    return it;
  }

  fruitType() {
    const b = this.biome;
    if (this.rng() < 0.04 + this.n * 0.002) return 'golden';
    return pick(this.rng, b.items.filter((i) => i !== 'melon' && i !== 'pineapple')) || 'apple';
  }

  stack(x, y, count, type) {
    const pile = { items: [] };
    this.piles.push(pile);
    const def = ITEMS[type];
    let yy = y;
    for (let i = 0; i < count; i++) {
      this.item(type, x, yy, pile, i);
      yy += def.h;
    }
    return yy;
  }

  coin(x, y) {
    this.coins.push({ x, y, taken: false });
  }

  coinArc(x0, y0, x1, y1, h, n) {
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      this.coin(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + Math.sin(t * Math.PI) * h);
    }
  }

  segFruitRun(count) {
    const rng = this.rng;
    const len = rand(rng, 6, 9);
    this.ground(this.x, this.x + len, this.top);
    const k = count || randInt(rng, 3, 5);
    for (let i = 0; i < k; i++) {
      const x = this.x + 1.4 + (i * (len - 2.4)) / Math.max(1, k - 1);
      this.item(this.fruitType(), x, this.top);
    }
    if (rng() < 0.5) this.coinArc(this.x + 1, this.top + 1.2, this.x + len - 1, this.top + 1.2, 1.1, 5);
    this.x += len;
  }

  segStepUp() {
    const rng = this.rng;
    this.top += rand(rng, 0.6, 1.15);
    const len = rand(rng, 5.5, 8);
    this.ground(this.x, this.x + len, this.top);
    this.stack(this.x + len * 0.55, this.top, randInt(rng, 4, 7), pick(rng, this.biome.layers));
    this.x += len;
  }

  segStepDown() {
    const rng = this.rng;
    this.top -= rand(rng, 0.8, 1.8);
    if (this.top < -4) this.top = -4 + rand(rng, 0, 0.5);
    const len = rand(rng, 6, 8);
    this.ground(this.x, this.x + len, this.top);
    this.item(this.fruitType(), this.x + 2.2, this.top);
    this.item(rng() < 0.5 ? 'melon' : this.fruitType(), this.x + len - 2, this.top);
    this.x += len;
  }

  segGap(gapW) {
    const rng = this.rng;
    const gap = gapW || rand(rng, 1.5, 2.0 + this.d * 0.9);
    const dh = rng() < 0.4 ? rand(rng, -0.8, 0.6) : 0;
    this.coinArc(this.x, this.top + 0.8, this.x + gap, this.top + dh + 0.8, 1.5, 4);
    if (gap > 2.6) this.starCandidates.push({ x: this.x + gap / 2, y: this.top + 3 });
    this.x += gap;
    this.top += dh;
    const len = rand(rng, 6, 8.5);
    this.ground(this.x, this.x + len, this.top);
    if (rng() < 0.6) this.item(this.fruitType(), this.x + len * 0.6, this.top);
    this.x += len;
  }

  segPost() {
    const rng = this.rng;
    const len = rand(rng, 7.5, 9);
    this.ground(this.x, this.x + len, this.top);
    const px = this.x + len * 0.5;
    const h = rand(rng, 1.0, 2.0);
    this.wood(px - 0.35, px + 0.35, this.top, this.top + h);
    this.stack(px, this.top + h, randInt(rng, 3, 6), pick(rng, this.biome.layers));
    this.starCandidates.push({ x: px, y: this.top + h + 3 });
    this.x += len;
  }

  segTower(count) {
    const rng = this.rng;
    const len = rand(rng, 6.5, 8);
    this.ground(this.x, this.x + len, this.top);
    const type = pick(rng, this.biome.layers);
    const k = count || randInt(rng, 9, 14 + Math.floor(this.d * 8));
    this.stack(this.x + len * 0.55, this.top, Math.round(k * (type === 'plank' ? 1 : type === 'pancake' ? 1.3 : 0.6)), type);
    this.x += len;
  }

  segSpikes(spikeLen) {
    const rng = this.rng;
    const len = rand(rng, 9, 11);
    this.ground(this.x, this.x + len, this.top);
    const sl = spikeLen || rand(rng, 0.9, 1.2 + this.d * 0.6);
    const sx = this.x + len * 0.45;
    this.hazards.push({ kind: 'spike', x0: sx, x1: sx + sl, y0: this.top - 0.05, y1: this.top + 0.38, base: this.top, active: true });
    this.item(this.fruitType(), sx - 1.6, this.top);
    this.item(this.fruitType(), sx + sl + 1.8, this.top);
    this.starCandidates.push({ x: sx + sl / 2, y: this.top + 2.4 });
    this.coinArc(sx - 1, this.top + 1, sx + sl + 1, this.top + 1, 1.2, 4);
    this.x += len;
  }

  segMovingSpikes() {
    const rng = this.rng;
    const len = rand(rng, 9, 11);
    this.ground(this.x, this.x + len, this.top);
    const sx = this.x + len * 0.42;
    const sl = rand(rng, 1.0, 1.5);
    this.hazards.push({ kind: 'mspike', x0: sx, x1: sx + sl, y0: this.top - 0.5, y1: this.top - 0.1, base: this.top, phase: rng() * 6, speed: rand(rng, 1.6, 2.4), active: true });
    this.item(this.fruitType(), sx + sl + 2, this.top);
    this.x += len;
  }

  segWall() {
    const rng = this.rng;
    const len = rand(rng, 8, 9.5);
    this.ground(this.x, this.x + len, this.top);
    const wx = this.x + len * 0.45;
    const h = rand(rng, 1.6, 2.0 + this.d * 0.5);
    if (this.n <= 6 && !this.wallHint) {
      this.wallHint = true;
      this.hints.push({ x: wx - 5, key: 'hint_wall' });
    }
    this.wood(wx - 0.3, wx + 0.3, this.top, this.top + h);
    for (let i = 0; i < 3; i++) this.coin(wx, this.top + h + 0.6 + i * 0.6);
    this.starCandidates.push({ x: wx, y: this.top + h + 2.4 });
    this.item(this.fruitType(), wx + 2.2, this.top);
    this.x += len;
  }

  segJelly() {
    const rng = this.rng;
    const len = rand(rng, 6, 7);
    this.ground(this.x, this.x + len, this.top);
    // pad right at the edge so the bounce is the natural route up
    const jx = this.x + len - 1.0;
    this.pads.push({ x0: jx - 0.8, x1: jx + 0.8, y: this.top, h: 0.32, squash: 0 });
    this.coinArc(jx, this.top + 1.5, jx + 8, this.top + 2.2, 3.4, 7);
    this.starCandidates.push({ x: jx + 4, y: this.top + 5.4 });
    this.x += len;
    const gap = rand(rng, 1.6, 2.2);
    this.x += gap;
    this.top += rand(rng, 1.1, 1.6);
    const len2 = rand(rng, 6.5, 8);
    this.ground(this.x, this.x + len2, this.top);
    this.stack(this.x + len2 * 0.55, this.top, randInt(rng, 3, 6), pick(rng, this.biome.layers));
    this.x += len2;
  }

  segSaw() {
    const rng = this.rng;
    const len = rand(rng, 10, 12);
    this.ground(this.x, this.x + len, this.top);
    const sx = this.x + len * 0.5;
    const vertical = rng() < 0.6;
    this.hazards.push({
      kind: 'saw', cx: sx, cy: this.top + 1.0, x: sx, y: this.top + 1.0, r: 0.62,
      ax: vertical ? 0 : 1.6, ay: vertical ? 0.95 : 0, speed: rand(rng, 1.5, 2.3), phase: rng() * 6, active: true,
    });
    this.item(this.fruitType(), sx - 3, this.top);
    this.item(this.fruitType(), sx + 3.2, this.top);
    this.starCandidates.push({ x: sx, y: this.top + 3.2 });
    this.x += len;
  }

  segRing() {
    const rng = this.rng;
    const gap = rand(rng, 2.3, 2.8);
    const rx = this.x + gap / 2;
    const ry = this.top + rand(rng, 1.8, 2.4);
    this.rings.push({ x: rx, y: ry, r: 0.95, done: false, pulse: 0 });
    for (let i = -1; i <= 1; i++) this.coin(rx + i * 0.55, ry);
    this.x += gap;
    const len = rand(rng, 6, 8);
    this.ground(this.x, this.x + len, this.top);
    this.item(this.fruitType(), this.x + len * 0.5, this.top);
    this.x += len;
  }

  segBig() {
    const rng = this.rng;
    const len = rand(rng, 6.5, 8);
    this.ground(this.x, this.x + len, this.top);
    const big = this.biome.items.includes('melon') ? 'melon' : this.biome.items.includes('pineapple') ? 'pineapple' : this.fruitType();
    this.item(big, this.x + len * 0.4, this.top);
    this.item(rng() < 0.5 ? big : this.fruitType(), this.x + len * 0.75, this.top);
    this.x += len;
  }

  segPyramid() {
    const rng = this.rng;
    const len = rand(rng, 7, 8.5);
    this.ground(this.x, this.x + len, this.top);
    const type = pick(rng, this.biome.items.filter((i) => ITEMS[i].hw < 0.4)) || 'orange';
    const def = ITEMS[type];
    const pile = { items: [] };
    this.piles.push(pile);
    const cx = this.x + len * 0.55;
    const w = def.hw * 2;
    const rows = rng() < 0.5 ? 3 : 2;
    for (let r = 0; r < rows; r++) {
      const cnt = rows - r;
      for (let i = 0; i < cnt; i++) {
        this.item(type, cx + (i - (cnt - 1) / 2) * w, this.top + r * def.hh * 2 * 0.92, pile, r);
      }
    }
    this.x += len;
  }

  segShield() {
    const rng = this.rng;
    const len = rand(rng, 6, 7);
    this.ground(this.x, this.x + len, this.top);
    this.pickups.push({ kind: 'shield', x: this.x + len * 0.5, y: this.top + 2.2, taken: false });
    this.item(this.fruitType(), this.x + len * 0.8, this.top);
    this.x += len;
  }

  segBoss() {
    const len = 15;
    this.ground(this.x, this.x + len, this.top);
    const bx = this.x + 10;
    const r = 1.55;
    const gate = this.wood(this.x + 12.2, this.x + 13.2, this.top, this.top + 14, 'gate');
    this.boss = {
      x: bx, y: this.top + r, baseY: this.top + r, r,
      hp: 12 + this.n, maxHp: 12 + this.n,
      alive: true, arenaX: this.x + 2.5, gate, cool: 0, flash: 0, squash: 0,
      shootT: 2.5, shoots: this.n >= 10, started: false,
      type: this.biome.boss,
    };
    this.x += len;
  }

  segFinale() {
    const len = 9;
    this.ground(this.x, this.x + len, this.top);
    this.finish = { x: this.x + 2.5, top: this.top, launchX: this.x + 5.6, launchY: this.top + 1.3 };
    this.board = { x: this.x + len + 6.5, cy: this.top + 2.9, R: 3.0 };
    this.x += len;
    this.length = this.finish.x;
  }

  placeStars() {
    const cands = this.starCandidates.filter((c) => c.x > 6 && c.x < this.finish.x - 4);
    const chosen = [];
    for (let k = 0; k < 3; k++) {
      const target = (this.finish.x * (k + 0.6)) / 3.3;
      let best = null, bd = 1e9;
      for (const c of cands) {
        if (chosen.includes(c)) continue;
        const d = Math.abs(c.x - target);
        if (d < bd) { bd = d; best = c; }
      }
      if (best && bd < 25) chosen.push(best);
      else {
        // fall back: hover high above the track at the target distance
        const top = this.topAtGen(target);
        chosen.push({ x: target, y: top + 2.6 });
      }
    }
    for (const c of chosen) this.stars.push({ x: c.x, y: c.y, taken: false });
  }

  topAtGen(x) {
    let top = 0;
    for (const s of this.solids) if (s.kind === 'ground' && x >= s.x0 && x <= s.x1) top = Math.max(top, s.y1);
    return top;
  }

  // -------------------------------------------------------------------------
  // Mesh construction
  // -------------------------------------------------------------------------
  build() {
    const b = this.biome;
    const root = this.root;
    const topMat = std('#ffffff', { map: topTex(b.id), roughness: 0.92 });
    const sideEm = sideEmissive(b.id);
    const sideMat = std('#ffffff', { map: sideTex(b.id), roughness: 0.95, ...(sideEm ? { emissive: '#ffffff', emissiveMap: sideEm, emissiveIntensity: 1 } : {}) });
    const rockMat = std('#ffffff', { map: rockTex(b.id), roughness: 0.95, flatShading: true });
    const wood = WOOD_MAT();
    const gateMat = std('#ffffff', { map: ironTex(), metalness: 0.6, roughness: 0.45 });
    const rocks = [];
    const props = [];
    const prng = mulberry32(this.n * 31 + 7);

    for (const s of this.solids) {
      const w = s.x1 - s.x0, h = s.y1 - s.y0;
      let m;
      if (s.kind === 'ground') {
        const geo = new THREE.BoxGeometry(w, h, DEPTH);
        scaleBoxUV(geo, w, h, DEPTH);
        m = new THREE.Mesh(geo, [sideMat, sideMat, topMat, rockMat, sideMat, sideMat]);
        // hanging rocks under the island
        const cnt = Math.max(1, Math.round(w / 1.8));
        for (let i = 0; i < cnt; i++) {
          const cx = s.x0 + (i + 0.5) * (w / cnt) + rand(prng, -0.3, 0.3);
          const len = rand(prng, 1.2, 3.6) * (i === 0 || i === cnt - 1 ? 0.7 : 1);
          const r = Math.min(w / cnt, 2.2) * rand(prng, 0.55, 0.75);
          const c = new THREE.ConeGeometry(r, len, 7, 2);
          c.rotateX(Math.PI);
          c.rotateY(prng() * 3);
          c.scale(1, 1, (DEPTH * 0.85) / (r * 2));
          c.translate(cx, s.y0 - len / 2 + 0.05, rand(prng, -0.2, 0.2));
          rocks.push(c);
        }
        // little props along the back and front edges
        for (let x = s.x0 + 0.4; x < s.x1 - 0.4; x += rand(prng, 0.5, 1.3)) {
          const back = prng() < 0.7;
          props.push([x, s.y1, back ? -rand(prng, 0.85, 1.2) : rand(prng, 0.95, 1.2), rand(prng, 0.55, 1.1), Math.floor(prng() * 4)]);
        }
      } else {
        const d = s.kind === 'gate' ? DEPTH + 0.4 : 0.9;
        const geo = new THREE.BoxGeometry(w, h, d);
        const uv = geo.attributes.uv;
        for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * h * 0.45);
        m = new THREE.Mesh(geo, s.kind === 'gate' ? gateMat : wood);
      }
      m.position.set((s.x0 + s.x1) / 2, (s.y0 + s.y1) / 2, 0);
      m.castShadow = s.kind !== 'ground' || h < 30;
      m.receiveShadow = true;
      s.mesh = m;
      root.add(m);
    }

    if (rocks.length) {
      const rm = new THREE.Mesh(mergeGeometries(rocks), rockMat);
      rm.castShadow = false;
      root.add(rm);
    }
    this.buildProps(props);

    // spikes: a coloured base with polished steel spikes
    const spikeMat = std(b.spike, { roughness: 0.4 });
    const steelMat = std('#e6ebf2', { metalness: 1, roughness: 0.22 });
    for (const hz of this.hazards) {
      if (hz.kind === 'spike' || hz.kind === 'mspike') {
        const w = hz.x1 - hz.x0;
        const grp = new THREE.Group();
        const base = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, 1.6), spikeMat);
        base.position.y = 0.06;
        base.castShadow = true;
        grp.add(base);
        const cones = [];
        const cols = Math.max(2, Math.round(w / 0.26));
        for (let i = 0; i < cols; i++) for (let j = 0; j < 5; j++) {
          const c = new THREE.ConeGeometry(0.1, 0.34, 6);
          c.translate(-w / 2 + (i + 0.5) * (w / cols), 0.27, -0.64 + j * 0.32);
          cones.push(c);
        }
        const merged = mergeGeometries(cones);
        const cm = new THREE.Mesh(merged, steelMat);
        cm.castShadow = true;
        grp.add(cm);
        grp.position.set(hz.x0 + w / 2, hz.base, 0);
        if (hz.kind === 'mspike') {
          const hole = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 0.02, 1.8), lambert('#333'));
          hole.position.set(hz.x0 + w / 2, hz.base + 0.005, 0);
          root.add(hole);
        }
        hz.mesh = grp;
        root.add(grp);
      } else if (hz.kind === 'saw') {
        const grp = new THREE.Group();
        const disc = new THREE.Mesh(g('sawdisc', () => new THREE.CylinderGeometry(0.5, 0.5, 0.08, 28)), phong({ color: '#c9d3de', shininess: 90, specular: '#ffffff' }));
        disc.rotation.x = Math.PI / 2;
        grp.add(disc);
        const teeth = [];
        for (let i = 0; i < 14; i++) {
          const c = new THREE.ConeGeometry(0.09, 0.2, 3);
          const a = (i / 14) * Math.PI * 2;
          c.rotateZ(a - Math.PI / 2 + 0.4);
          c.translate(Math.cos(a) * 0.55, Math.sin(a) * 0.55, 0);
          teeth.push(c);
        }
        const tm = new THREE.Mesh(mergeGeometries(teeth), phong({ color: '#9aa7b5', shininess: 60 }));
        grp.add(tm);
        const hub = new THREE.Mesh(g('sawhub', () => new THREE.CylinderGeometry(0.16, 0.16, 0.14, 12)), lambert(b.spike));
        hub.rotation.x = Math.PI / 2;
        grp.add(hub);
        grp.traverse((o) => { o.castShadow = true; });
        const spin = new THREE.Group();
        spin.add(grp);
        hz.spin = grp;
        // rail
        const railLen = hz.ay ? hz.ay * 2 + 0.6 : hz.ax * 2 + 0.6;
        const rail = new THREE.Mesh(new THREE.BoxGeometry(hz.ay ? 0.08 : railLen, hz.ay ? railLen : 0.08, 0.08), lambert('#666e7a'));
        rail.position.set(hz.cx, hz.cy, -0.15);
        root.add(rail);
        if (hz.ay) {
          const pole = new THREE.Mesh(new THREE.BoxGeometry(0.12, hz.cy - this.topAtGen(hz.cx) - hz.ay + 0.1, 0.12), lambert('#666e7a'));
          pole.position.set(hz.cx, (hz.cy - hz.ay + this.topAtGen(hz.cx)) / 2, -0.15);
          root.add(pole);
        }
        hz.mesh = spin;
        root.add(spin);
      }
    }

    // jelly pads
    for (const p of this.pads) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(p.x1 - p.x0, p.h, 1.5), phong({ color: '#57e389', transparent: true, opacity: 0.88, shininess: 100, specular: '#ffffff' }));
      m.geometry.translate(0, p.h / 2, 0);
      m.position.set((p.x0 + p.x1) / 2, p.y, 0);
      m.castShadow = true;
      p.mesh = m;
      const arrow = new THREE.Mesh(g('arrow', () => {
        const s = new THREE.Shape();
        s.moveTo(-0.22, 0); s.lineTo(0, 0.22); s.lineTo(0.22, 0); s.lineTo(0.09, 0); s.lineTo(0.09, -0.18); s.lineTo(-0.09, -0.18); s.lineTo(-0.09, 0); s.closePath();
        return new THREE.ShapeGeometry(s);
      }), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
      arrow.position.set(0, p.h * 0.55, 0.76);
      m.add(arrow);
      root.add(m);
    }

    // boost rings
    for (const r of this.rings) {
      const m = new THREE.Mesh(g('ring', () => new THREE.TorusGeometry(0.95, 0.09, 10, 36)), lambert('#ffd23f', { emissive: '#ff9900', emissiveIntensity: 0.45 }));
      m.rotation.y = Math.PI / 2;
      m.position.set(r.x, r.y, 0);
      m.castShadow = true;
      const inner = new THREE.Mesh(g('ringIn', () => new THREE.CircleGeometry(0.9, 32)), new THREE.MeshBasicMaterial({ color: '#fff3a0', transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }));
      m.add(inner);
      r.mesh = m;
      root.add(m);
    }

    // items
    for (const it of this.items) {
      const grp = it.def.build(this.rng, it.idx);
      grp.position.set(it.x, it.y, 0);
      if (!it.def.layer) grp.rotation.y = rand(this.rng, -0.6, 0.6);
      else grp.rotation.y = rand(this.rng, -0.15, 0.15);
      it.group = grp;
      it.juice = grp.userData.juice || it.def.juice;
      root.add(grp);
    }

    // coins
    const coinGeo = g('coin', () => {
      const c = new THREE.CylinderGeometry(0.22, 0.22, 0.06, 20);
      c.rotateX(Math.PI / 2);
      return c;
    });
    const coinSide = std('#ffcf3a', { metalness: 0.55, roughness: 0.3, emissive: '#b07800', emissiveIntensity: 0.55 });
    const coinFace = std('#ffffff', { map: coinTex(), emissiveMap: coinTex(), emissive: '#ffffff', emissiveIntensity: 0.45, metalness: 0.4, roughness: 0.32 });
    const coinMat = [coinSide, coinFace, coinFace];
    for (const c of this.coins) {
      const m = new THREE.Mesh(coinGeo, coinMat);
      m.position.set(c.x, c.y, 0);
      m.castShadow = true;
      c.mesh = m;
      root.add(m);
    }

    // stars
    const starGeo = g('star', () => {
      const s = new THREE.ExtrudeGeometry(starShape(), { depth: 0.1, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 1 });
      s.center();
      return s;
    });
    const starMat = lambert('#ffd23f', { emissive: '#ffae00', emissiveIntensity: 0.55 });
    for (const s of this.stars) {
      const m = new THREE.Mesh(starGeo, starMat);
      m.position.set(s.x, s.y, 0);
      m.castShadow = true;
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: '#ffe066', transparent: true, depthWrite: false, opacity: 0.8 }));
      glow.scale.set(1.8, 1.8, 1);
      m.add(glow);
      s.mesh = m;
      root.add(m);
    }

    // pickups
    for (const p of this.pickups) {
      const m = new THREE.Mesh(g('bubble', () => new THREE.SphereGeometry(0.42, 20, 14)), phong({ color: '#7ad7ff', transparent: true, opacity: 0.45, shininess: 120, specular: '#ffffff', depthWrite: false }));
      const icon = new THREE.Mesh(g('shieldIcon', () => {
        const s = new THREE.Shape();
        s.moveTo(0, 0.2); s.quadraticCurveTo(0.16, 0.16, 0.18, 0.14); s.quadraticCurveTo(0.17, -0.1, 0, -0.22); s.quadraticCurveTo(-0.17, -0.1, -0.18, 0.14); s.quadraticCurveTo(-0.16, 0.16, 0, 0.2);
        return new THREE.ShapeGeometry(s);
      }), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
      icon.position.z = 0.05;
      m.add(icon);
      m.position.set(p.x, p.y, 0);
      p.mesh = m;
      root.add(m);
    }

    if (this.boss) this.buildBoss();
    this.buildFinish();
  }

  buildProps(props) {
    if (!props.length) return;
    const b = this.biome;
    const kinds = {
      meadow: [
        () => mg([0, 1, 2, 3, 4].map((i) => new THREE.ConeGeometry(0.035, 0.32, 3).translate(Math.cos(i * 1.3) * 0.08, 0.16, Math.sin(i * 1.3) * 0.08).rotateZ((i - 2) * 0.12))), '#4fae2e',
        () => new THREE.IcosahedronGeometry(0.16, 0).scale(1.3, 0.7, 1).translate(0, 0.06, 0), '#a8a8a0',
        () => mg([new THREE.CylinderGeometry(0.012, 0.012, 0.28, 4).translate(0, 0.14, 0), new THREE.IcosahedronGeometry(0.06, 0).translate(0, 0.3, 0)]), '#ff8ad8',
        () => new THREE.IcosahedronGeometry(0.2, 1).scale(1.2, 0.8, 1).translate(0, 0.12, 0), '#3f9e3a',
      ],
      desert: [
        () => new THREE.IcosahedronGeometry(0.16, 0).scale(1.4, 0.6, 1).translate(0, 0.05, 0), '#c9783a',
        () => new THREE.CapsuleGeometry(0.06, 0.18, 3, 6).translate(0, 0.15, 0), '#4f9a3a',
        () => new THREE.IcosahedronGeometry(0.1, 0).translate(0, 0.05, 0), '#f2c58a',
        () => mg([0, 1, 2].map((i) => new THREE.ConeGeometry(0.03, 0.26, 3).translate(i * 0.05 - 0.05, 0.13, 0).rotateZ((i - 1) * 0.3))), '#b89a4a',
      ],
      candy: [
        () => new THREE.SphereGeometry(0.12, 10, 8).scale(1, 0.8, 1).translate(0, 0.08, 0), '#ff5fa2',
        () => new THREE.SphereGeometry(0.1, 10, 8).translate(0, 0.08, 0), '#7ad7ff',
        () => mg([new THREE.CylinderGeometry(0.015, 0.015, 0.4, 4).translate(0, 0.2, 0), new THREE.CylinderGeometry(0.11, 0.11, 0.04, 14).rotateX(Math.PI / 2).translate(0, 0.44, 0)]), '#ffd23f',
        () => new THREE.ConeGeometry(0.1, 0.16, 8).translate(0, 0.08, 0), '#7cf07c',
      ],
      snow: [
        () => new THREE.SphereGeometry(0.2, 8, 6).scale(1.5, 0.5, 1).translate(0, 0.04, 0), '#ffffff',
        () => new THREE.OctahedronGeometry(0.12, 0).scale(0.6, 1.8, 0.6).translate(0, 0.18, 0), '#9fd8ff',
        () => new THREE.ConeGeometry(0.16, 0.4, 7).translate(0, 0.2, 0), '#2f7f5a',
        () => new THREE.IcosahedronGeometry(0.14, 0).translate(0, 0.07, 0), '#c8d6ea',
      ],
      neon: [
        () => new THREE.BoxGeometry(0.06, 0.4, 0.06).translate(0, 0.2, 0), '#4dfcff',
        () => new THREE.OctahedronGeometry(0.1, 0).scale(0.7, 1.6, 0.7).translate(0, 0.16, 0), '#ff4dd2',
        () => new THREE.BoxGeometry(0.2, 0.06, 0.2).translate(0, 0.03, 0), '#b6ff4d',
        () => new THREE.OctahedronGeometry(0.08, 0).translate(0, 0.08, 0), '#4dfcff',
      ],
    }[b.decor] || [];
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3();
    for (let k = 0; k < 4; k++) {
      const list = props.filter((pp) => pp[4] === k);
      if (!list.length || !kinds[k * 2]) continue;
      const color = kinds[k * 2 + 1];
      const mat = b.night ? std('#111', { emissive: color, emissiveIntensity: 1.2 }) : std(color, { roughness: 0.7, flatShading: true });
      const im = new THREE.InstancedMesh(kinds[k * 2](), mat, list.length);
      list.forEach(([x, y, z, s], i) => {
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), x * 7.1);
        m4.compose(p.set(x, y, z), q, sc.set(s, s, s));
        im.setMatrixAt(i, m4);
      });
      im.castShadow = k !== 0;
      im.receiveShadow = true;
      this.root.add(im);
    }
    // a few trees on the far edge of the islands
    const spots = props.filter((pp, i) => pp[2] < -1.0 && i % 9 === 0).map(([x, y, z, s]) => [x, y, -1.2, 0.35 + s * 0.25]);
    addTrees(this.root, b, spots, mulberry32(this.n));
  }

  buildBoss() {
    const B = this.boss;
    const grp = new THREE.Group();
    const r = B.r;
    const mats = [];
    const M = (m) => { mats.push(m); return m; };
    let body;
    switch (B.type) {
      case 'pineapple': {
        body = new THREE.Mesh(new THREE.SphereGeometry(r, 28, 20), M(new THREE.MeshStandardMaterial({ map: pineappleTex() })));
        body.scale.set(1, 1.08, 1);
        for (let i = 0; i < 7; i++) {
          const l = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.5, 5), M(new THREE.MeshStandardMaterial({ color: '#2fae4a' })));
          l.position.y = r + 0.5;
          l.rotation.z = Math.cos((i / 7) * Math.PI * 2) * 0.5;
          l.rotation.x = Math.sin((i / 7) * Math.PI * 2) * 0.5;
          grp.add(l);
        }
        B.flesh = '#ffe066';
        B.juice = '#ffd23f';
        break;
      }
      case 'donutKing': {
        body = new THREE.Mesh(new THREE.TorusGeometry(r * 0.68, r * 0.36, 16, 36), M(new THREE.MeshStandardMaterial({ color: '#e9a95d' })));
        const fr = new THREE.Mesh(new THREE.TorusGeometry(r * 0.68, r * 0.37, 16, 36, Math.PI * 1.1), M(new THREE.MeshStandardMaterial({ map: sprinkleTex('#ff7ac4') })));
        fr.rotation.z = -0.05;
        fr.scale.z = 1.02;
        grp.add(fr);
        B.flesh = '#f3c98b';
        B.juice = '#ff7ac4';
        break;
      }
      case 'snowman': {
        body = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), M(new THREE.MeshStandardMaterial({ color: '#ffffff' })));
        const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.8, 16), M(new THREE.MeshStandardMaterial({ color: '#222' })));
        hat.position.y = r + 0.3;
        const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.08, 18), M(new THREE.MeshStandardMaterial({ color: '#222' })));
        brim.position.y = r - 0.08;
        grp.add(hat, brim);
        const nose = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.7, 10), M(new THREE.MeshStandardMaterial({ color: '#ff8c1a' })));
        nose.rotation.z = Math.PI / 2;
        nose.position.set(-r * 0.95, 0.05, r * 0.25);
        grp.add(nose);
        B.flesh = '#eef8ff';
        B.juice = '#ffffff';
        break;
      }
      case 'neonCube': {
        body = new THREE.Mesh(new THREE.BoxGeometry(r * 1.7, r * 1.7, r * 1.7), M(new THREE.MeshStandardMaterial({ color: '#160f30', emissive: '#ff4dd2', emissiveIntensity: 0.55 })));
        const wire = new THREE.Mesh(new THREE.BoxGeometry(r * 1.74, r * 1.74, r * 1.74), M(new THREE.MeshBasicMaterial({ color: '#4dfcff', wireframe: true })));
        grp.add(wire);
        B.flesh = '#ffffff';
        B.juice = '#4dfcff';
        break;
      }
      default: {
        body = new THREE.Mesh(new THREE.SphereGeometry(r, 30, 20), M(new THREE.MeshStandardMaterial({ map: melonTex() })));
        body.scale.set(1.08, 0.98, 1);
        B.flesh = '#ff4a62';
        B.juice = '#ff2e4f';
      }
    }
    body.castShadow = true;
    grp.add(body);
    // crown (except snowman who has a hat)
    if (B.type !== 'snowman') {
      const crown = new THREE.Group();
      const gold = M(phong({ color: '#ffc61a', emissive: '#7a4a00', emissiveIntensity: 0.4, shininess: 90 }));
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.66, 0.32, 18, 1, true), gold);
      crown.add(band);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const sp = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.36, 6), gold);
        sp.position.set(Math.cos(a) * 0.62, 0.32, Math.sin(a) * 0.62);
        crown.add(sp);
      }
      crown.position.y = B.type === 'donutKing' ? r * 1.05 + 0.12 : B.type === 'neonCube' ? r * 0.85 + 0.15 : r + 0.05;
      if (B.type === 'pineapple') crown.position.y = r * 1.08 + 0.02;
      crown.rotation.z = 0.15;
      grp.add(crown);
    }
    // face, looking toward the incoming blade (left / camera side)
    const eyeWhite = M(new THREE.MeshBasicMaterial({ color: '#ffffff' }));
    const pupil = M(new THREE.MeshBasicMaterial({ color: '#1a1a2e' }));
    const eyes = [];
    // place the face on the camera side (+z), slightly toward the incoming blade (-x)
    const surf = (ex, ey) => {
      if (B.type === 'neonCube') return r * 0.86;
      if (B.type === 'donutKing') return r * 0.36 + 0.05;
      const k = B.type === 'melon' ? 1.0 : 1.0;
      return Math.sqrt(Math.max(0.01, r * r * k - ex * ex - ey * ey));
    };
    const faceY = B.type === 'donutKing' ? r * 0.68 : 0.3;
    for (const side of [-1, 1]) {
      const ex = -0.45 + side * 0.36;
      const e = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 10), eyeWhite);
      e.position.set(ex, faceY, surf(ex, faceY) - 0.02);
      e.scale.z = 0.5;
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), pupil);
      p.position.set(-0.06, 0, 0.18);
      e.add(p);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.09, 0.08), pupil);
      brow.position.set(0, 0.3, 0.1);
      brow.rotation.z = side * -0.35;
      e.add(brow);
      grp.add(e);
      eyes.push(p);
    }
    const my = B.type === 'donutKing' ? r * 0.36 : -0.3;
    const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.05, 6, 14, Math.PI), pupil);
    mouth.position.set(-0.45, my, surf(-0.45, my) + 0.01);
    grp.add(mouth);
    B.eyes = eyes;
    B.mouth = mouth;
    B.mats = mats;
    B.group = grp;
    grp.position.set(B.x, B.y, 0);
    this.root.add(grp);
    // cage bars on the gate side for flavour
  }

  buildFinish() {
    const F = this.finish;
    const root = this.root;
    // checkered finish strip
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(1.2, DEPTH), new THREE.MeshStandardMaterial({ map: checkerTex() }));
    strip.rotation.x = -Math.PI / 2;
    strip.position.set(F.x, F.top + 0.01, 0);
    strip.receiveShadow = true;
    root.add(strip);
    // arch (hidden while aiming so it never blocks the view)
    const arch = new THREE.Group();
    const poleMat = lambert('#ffffff');
    for (const z of [-DEPTH / 2 - 0.1, DEPTH / 2 + 0.1]) {
      const pole = new THREE.Mesh(g('fpole', () => new THREE.CylinderGeometry(0.08, 0.08, 3.6, 10)), poleMat);
      pole.position.set(F.x, F.top + 1.8, z);
      pole.castShadow = true;
      arch.add(pole);
    }
    const banner = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, DEPTH + 0.4), new THREE.MeshStandardMaterial({ map: checkerTex() }));
    banner.position.set(F.x, F.top + 3.4, 0);
    banner.castShadow = true;
    arch.add(banner);
    F.arch = arch;
    root.add(arch);

    // target board
    const B = this.board;
    const grp = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(B.R + 0.18, B.R + 0.18, 0.5, 48), WOOD_MAT());
    rim.rotation.z = Math.PI / 2;
    rim.castShadow = true;
    grp.add(rim);
    const face = new THREE.Mesh(new THREE.CircleGeometry(B.R, 64), new THREE.MeshStandardMaterial({ map: targetTex() }));
    face.rotation.y = -Math.PI / 2;
    face.position.x = -0.26;
    grp.add(face);
    // legs
    const legMat = lambert('#8b5a2b');
    for (const z of [-1.2, 1.2]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.3, B.cy - this.floorTopForBoard(), 0.3), legMat);
      leg.position.set(0.4, -(B.cy - this.floorTopForBoard()) / 2, z);
      leg.castShadow = true;
      grp.add(leg);
    }
    grp.position.set(B.x, B.cy, 0);
    B.group = grp;
    root.add(grp);
    // ground under the board
    const pg = new THREE.BoxGeometry(5, 0.5, 5);
    scaleBoxUV(pg, 5, 0.5, 5);
    const plat = new THREE.Mesh(pg, [std('#ffffff', { map: sideTex(this.biome.id) }), std('#ffffff', { map: sideTex(this.biome.id) }), std('#ffffff', { map: topTex(this.biome.id) }), std('#ffffff', { map: rockTex(this.biome.id) }), std('#ffffff', { map: sideTex(this.biome.id) }), std('#ffffff', { map: sideTex(this.biome.id) })]);
    const under = new THREE.Mesh(new THREE.ConeGeometry(2.4, 3.5, 7), std('#ffffff', { map: rockTex(this.biome.id), flatShading: true }));
    under.rotation.x = Math.PI;
    under.position.set(this.board.x + 0.4, this.floorTopForBoard() - 0.5 - 1.75, 0);
    root.add(under);
    plat.position.set(B.x + 0.4, this.floorTopForBoard() - 0.25, 0);
    plat.receiveShadow = true;
    root.add(plat);
    // aim marker (hidden until aiming)
    const marker = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.06, 8, 24), new THREE.MeshBasicMaterial({ color: '#00e1ff' }));
    ring.rotation.y = Math.PI / 2;
    marker.add(ring);
    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.1, 16), new THREE.MeshBasicMaterial({ color: '#00e1ff' }));
    dot.rotation.y = -Math.PI / 2;
    marker.add(dot);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: '#00e1ff', transparent: true, depthWrite: false }));
    glow.scale.set(1.6, 1.6, 1);
    marker.add(glow);
    marker.position.set(B.x - 0.32, B.cy, 0);
    marker.visible = false;
    B.marker = marker;
    root.add(marker);
    // aim line
    const line = new THREE.Mesh(new THREE.BoxGeometry(1, 0.03, 0.03), new THREE.MeshBasicMaterial({ color: '#00e1ff', transparent: true, opacity: 0.55 }));
    line.visible = false;
    B.line = line;
    root.add(line);
  }

  floorTopForBoard() {
    return this.board.cy - this.board.R - 1.6;
  }

  // -------------------------------------------------------------------------
  // Runtime helpers
  // -------------------------------------------------------------------------
  groundTopAt(x, below = Infinity) {
    let top = -Infinity;
    for (const s of this.solids) {
      if (!s.active) continue;
      if (x >= s.x0 && x <= s.x1 && s.y1 <= below + 0.01 && s.y1 > top) top = s.y1;
    }
    if (this.board && Math.abs(x - this.board.x) < 2.5) top = Math.max(top, this.floorTopForBoard());
    return top === -Infinity ? this.floorY : top;
  }

  removeItem(it) {
    it.alive = false;
    if (it.group) {
      this.root.remove(it.group);
    }
    if (it.pile) it.pile.dirty = true;
  }

  update(dt, time) {
    this.time = time;
    // saws & moving spikes
    for (const hz of this.hazards) {
      if (!hz.active) continue;
      if (hz.kind === 'saw') {
        const s = Math.sin(time * hz.speed + hz.phase);
        hz.x = hz.cx + hz.ax * s;
        hz.y = hz.cy + hz.ay * s;
        hz.mesh.position.set(hz.x, hz.y, 0);
        hz.spin.rotation.z -= dt * 14;
      } else if (hz.kind === 'mspike') {
        const s = Math.sin(time * hz.speed + hz.phase);
        const off = clamp(s * 1.6, -0.5, 0.0);
        hz.y1 = hz.base + 0.38 + off;
        hz.y0 = hz.y1 - 0.43;
        hz.mesh.position.y = hz.base + off;
        hz.armed = hz.y1 > hz.base + 0.08;
      } else if (hz.kind === 'seed') {
        hz.vy -= 6 * dt;
        hz.x += hz.vx * dt;
        hz.y += hz.vy * dt;
        hz.life -= dt;
        hz.mesh.position.set(hz.x, hz.y, 0);
        hz.mesh.rotation.z += dt * 8;
        if (hz.life <= 0 || hz.y < this.groundTopAt(hz.x, hz.y + 0.5)) this.killSeed(hz);
      }
    }
    // jelly squash
    for (const p of this.pads) {
      p.squash = Math.max(0, p.squash - dt * 3);
      const k = Math.sin(p.squash * 18) * p.squash * 0.6;
      p.mesh.scale.set(1 + k * 0.4, 1 - k, 1 + k * 0.4);
    }
    // rings
    for (const r of this.rings) {
      r.mesh.rotation.x = time * 0.8;
      if (r.pulse > 0) {
        r.pulse = Math.max(0, r.pulse - dt * 2);
        const s = 1 + r.pulse * 0.5;
        r.mesh.scale.set(s, s, s);
      }
    }
    // coins
    for (const c of this.coins) {
      if (c.taken) continue;
      c.mesh.rotation.y = time * 3 + c.x;
      c.mesh.position.set(c.x, c.y + Math.sin(time * 2.5 + c.x) * 0.06, 0);
    }
    for (const s of this.stars) {
      if (s.taken) continue;
      s.mesh.rotation.y = time * 2;
      s.mesh.position.y = s.y + Math.sin(time * 2 + s.x) * 0.12;
    }
    for (const p of this.pickups) {
      if (p.taken) continue;
      p.mesh.position.y = p.y + Math.sin(time * 2.4) * 0.15;
      const s = 1 + Math.sin(time * 5) * 0.05;
      p.mesh.scale.set(s, s, s);
    }
    // piles settle with gravity when something under them was sliced
    for (const pile of this.piles) {
      if (!pile.dirty) continue;
      let moving = false;
      for (const it of pile.items) {
        if (!it.alive) continue;
        let support = this.groundTopAt(it.x, it.y);
        for (const o of pile.items) {
          if (o === it || !o.alive) continue;
          const top = o.y + o.h * (o.def.layer ? 1 : 0.92);
          if (Math.abs(o.x - it.x) < (o.hw + it.hw) * 0.8 && top <= it.y + 0.02 && top > support) support = top;
        }
        if (it.y > support + 0.001) {
          it.vy -= 30 * dt;
          it.y = Math.max(support, it.y + it.vy * dt);
          if (it.y === support) it.vy = 0;
          moving = true;
        }
        it.group.position.y = it.y;
      }
      pile.dirty = moving;
    }
    // boss
    const B = this.boss;
    if (B && B.alive) {
      B.cool = Math.max(0, B.cool - dt);
      B.flash = Math.max(0, B.flash - dt * 4);
      B.squash = Math.max(0, B.squash - dt * 3);
      const bob = Math.sin(time * 3) * 0.05;
      const sq = Math.sin(B.squash * 20) * B.squash * 0.25;
      B.group.position.y = B.baseY + bob;
      B.group.scale.set(1 + sq, 1 - sq, 1 + sq);
      for (const m of B.mats) if (m.emissive) {
        if (!m.userData.baseEm) m.userData.baseEm = m.emissive.clone();
        m.emissive.copy(m.userData.baseEm).lerp(new THREE.Color('#ffffff'), B.flash * 0.7);
      }
    }
    if (B && B.gate && B.gate.sinking) {
      const gm = B.gate.mesh;
      gm.position.y -= dt * 6;
      if (gm.position.y < B.gate.restY - 16) {
        gm.visible = false;
        B.gate.sinking = false;
      }
    }
  }

  spawnSeed(tx, ty) {
    const B = this.boss;
    const sx = B.x - B.r * 0.7, sy = B.y + 0.1;
    const dx = tx - sx, dy = ty - sy;
    const T = clamp(Math.abs(dx) / 5, 0.5, 1.4);
    const seed = {
      kind: 'seed', x: sx, y: sy, r: 0.2,
      vx: dx / T, vy: dy / T + 3 * T, life: 3, active: true,
    };
    const m = new THREE.Mesh(g('seed', () => {
      const s = new THREE.SphereGeometry(0.2, 10, 8);
      s.scale(1.4, 0.8, 0.8);
      return s;
    }), lambert('#2b1a12'));
    m.castShadow = true;
    m.position.set(sx, sy, 0);
    seed.mesh = m;
    this.root.add(m);
    this.hazards.push(seed);
    return seed;
  }

  killSeed(hz) {
    hz.active = false;
    this.root.remove(hz.mesh);
  }

  dispose() {
    // cached geometries (items, coins, stars...) are shared between levels
    this.root.traverse((o) => {
      if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose();
    });
  }
}
