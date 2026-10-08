import * as THREE from 'three';
import { capMaterial } from './items.js';

const discGeo = new THREE.CircleGeometry(1, 40);
const Z = new THREE.Vector3(0, 0, 1);

const tmpM = new THREE.Matrix4();
const tmpQ = new THREE.Quaternion();
const tmpE = new THREE.Euler();
const tmpS = new THREE.Vector3();
const tmpP = new THREE.Vector3();
const tmpC = new THREE.Color();

class ParticleSystem {
  constructor(scene, max, material, geometry) {
    this.max = max;
    this.list = [];
    this.mesh = new THREE.InstancedMesh(geometry, material, max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.setColorAt(0, new THREE.Color('#fff'));
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }

  add(p) {
    if (this.list.length >= this.max) this.list.shift();
    this.list.push(p);
  }

  update(dt) {
    const L = this.list;
    let w = 0;
    for (let i = 0; i < L.length; i++) {
      const p = L[i];
      p.life -= dt;
      if (p.life <= 0) continue;
      p.vy -= p.grav * dt;
      p.vx *= 1 - p.drag * dt;
      p.vy *= 1 - p.drag * dt;
      p.vz *= 1 - p.drag * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      p.rot += p.spin * dt;
      L[w++] = p;
    }
    L.length = w;
    for (let i = 0; i < w; i++) {
      const p = L[i];
      const k = p.life / p.max;
      const s = p.size * (p.shrink ? Math.min(1, k * 2.2) : 1);
      tmpP.set(p.x, p.y, p.z);
      tmpE.set(p.rot, p.rot * 0.7, p.rot * 0.3);
      tmpQ.setFromEuler(tmpE);
      tmpS.set(s * p.sx, s, s);
      tmpM.compose(tmpP, tmpQ, tmpS);
      this.mesh.setMatrixAt(i, tmpM);
      this.mesh.setColorAt(i, p.color);
    }
    this.mesh.count = w;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  clear() {
    this.list.length = 0;
    this.mesh.count = 0;
  }
}

export class FX {
  constructor(scene, camera, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.root = new THREE.Group();
    scene.add(this.root);
    this.halves = [];
    this.juice = new ParticleSystem(scene, 700, new THREE.MeshBasicMaterial({ color: '#ffffff' }), new THREE.IcosahedronGeometry(1, 0));
    this.spark = new ParticleSystem(scene, 400, new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }), new THREE.OctahedronGeometry(1, 0));
    this.confetti = new ParticleSystem(scene, 300, new THREE.MeshStandardMaterial({ color: '#ffffff', side: THREE.DoubleSide }), new THREE.PlaneGeometry(1, 0.6));
    // juice splats on the ground
    const sg = new THREE.CircleGeometry(1, 14);
    sg.rotateX(-Math.PI / 2);
    this.splatMesh = new THREE.InstancedMesh(sg, new THREE.MeshStandardMaterial({ color: '#ffffff', polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }), 60);
    this.splatMesh.setColorAt(0, new THREE.Color('#fff'));
    this.splatMesh.count = 0;
    this.splatMesh.frustumCulled = false;
    this.splatMesh.receiveShadow = true;
    scene.add(this.splatMesh);
    this.splats = [];
    this.floats = [];
    this.floatLayer = document.getElementById('floats');
    this.shakeT = 0;
    this.shakeAmp = 0;
    this.shakeOff = new THREE.Vector3();
  }

  // ---- slicing -----------------------------------------------------------
  slice(obj, cx, cy, nx, ny, flesh, opts = {}) {
    obj.updateWorldMatrix(true, true);
    const pos = new THREE.Vector3(), quat = new THREE.Quaternion(), scl = new THREE.Vector3();
    obj.matrixWorld.decompose(pos, quat, scl);
    const sp = opts.speed || 2.6;
    const fleshColor = new THREE.Color(flesh);
    const maxHalves = opts.low ? 30 : 70;
    while (this.halves.length > maxHalves) this.removeHalf(this.halves.shift());
    for (const side of [1, -1]) {
      const h = obj.clone(true);
      h.position.copy(pos);
      h.quaternion.copy(quat);
      h.scale.copy(scl);
      this.root.add(h);
      h.updateMatrixWorld(true);
      const worldPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(nx * side, ny * side, 0), new THREE.Vector3(cx, cy, 0));
      const local = worldPlane.clone().applyMatrix4(h.matrixWorld.clone().invert());
      const plane = worldPlane.clone();
      const capMat = new THREE.MeshBasicMaterial({ color: fleshColor, side: THREE.BackSide, clippingPlanes: [plane] });
      const mats = [capMat];
      const meshes = [];
      h.traverse((o) => { if (o.isMesh) meshes.push(o); });
      for (const m of meshes) {
        const mm = m.material.clone();
        mm.clippingPlanes = [plane];
        mm.clipShadows = true;
        if (mm.side === THREE.DoubleSide) mm.side = THREE.FrontSide;
        mats.push(mm);
        m.material = mm;
        m.castShadow = !opts.low;
        if (!mm.wireframe && !mm.transparent) {
          const cap = new THREE.Mesh(m.geometry, capMat);
          m.add(cap);
        }
      }
      // textured cut face (seeds, segments...) for round fruit
      const cm = capMaterial(opts.cap);
      if (cm && opts.capR) {
        const disc = new THREE.Mesh(discGeo, cm);
        const R = opts.capR * scl.x * 0.985;
        disc.scale.set(R, R, 1);
        disc.position.set(cx - nx * side * 0.004, cy - ny * side * 0.004, 0);
        disc.quaternion.setFromUnitVectors(Z, new THREE.Vector3(-nx * side, -ny * side, 0));
        disc.rotateZ(Math.random() * 6.28);
        disc.updateMatrixWorld(true);
        h.attach(disc);
      }
      const r = Math.random;
      this.halves.push({
        obj: h, local, plane, mats,
        vx: nx * side * sp * (0.7 + r() * 0.6) + (opts.vx || 0) * 0.25,
        vy: ny * side * sp * (0.7 + r() * 0.6) + (opts.up !== undefined ? opts.up : 2.2) + r(),
        vz: (r() - 0.5) * 2.2 + (side > 0 ? 0.6 : -0.6),
        wx: (r() - 0.5) * 4, wy: (r() - 0.5) * 4, wz: -side * (3 + r() * 5),
        life: 0, base: scl.clone(), size: opts.size || 0.4, maxLife: opts.life || 1.6,
      });
    }
  }

  removeHalf(h) {
    this.root.remove(h.obj);
    for (const m of h.mats) m.dispose();
  }

  // ---- particles ---------------------------------------------------------
  burst(x, y, color, count = 12, o = {}) {
    const col = new THREE.Color(color);
    const sys = o.spark ? this.spark : o.confetti ? this.confetti : this.juice;
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = (o.speed || 4) * (0.35 + Math.random() * 0.8);
      const c = o.palette ? new THREE.Color(o.palette[Math.floor(Math.random() * o.palette.length)]) : col;
      sys.add({
        x: x + (Math.random() - 0.5) * (o.spread || 0.2),
        y: y + (Math.random() - 0.5) * (o.spread || 0.2),
        z: (o.z || 0) + (Math.random() - 0.5) * (o.zs || 0.4),
        vx: Math.cos(a) * sp + (o.vx || 0),
        vy: Math.sin(a) * sp + (o.up !== undefined ? o.up : 2.5),
        vz: (Math.random() - 0.5) * sp * (o.zv || 1),
        life: (o.life || 0.6) * (0.6 + Math.random() * 0.7),
        max: o.life || 0.6,
        size: (o.size || 0.08) * (0.6 + Math.random() * 0.8),
        sx: o.confetti ? 1 : 1,
        grav: o.grav !== undefined ? o.grav : 18,
        drag: o.drag || 0.6,
        rot: Math.random() * 6,
        spin: (Math.random() - 0.5) * (o.confetti ? 14 : 6),
        shrink: o.shrink !== false,
        color: c,
      });
    }
  }

  splat(x, y, color, size = 0.4) {
    if (this.splats.length >= 60) this.splats.shift();
    this.splats.push({ x, y: y + 0.012, z: (Math.random() - 0.5) * 1.4, size: size * (0.7 + Math.random() * 0.6), t: 0, color: new THREE.Color(color), rot: Math.random() * 6 });
  }

  // ---- floating DOM text -------------------------------------------------
  floatText(x, y, text, cls = '', life = 0.95) {
    if (!this.floatLayer) return;
    if (this.floats.length > 28) {
      const f = this.floats.shift();
      f.el.remove();
    }
    const el = document.createElement('div');
    el.className = 'ft ' + cls;
    const span = document.createElement('span');
    span.textContent = text;
    el.appendChild(span);
    this.floatLayer.appendChild(el);
    this.floats.push({ el, x, y, t: 0, life });
  }

  shake(amp = 0.2, t = 0.25) {
    this.shakeAmp = Math.max(this.shakeAmp, amp);
    this.shakeT = Math.max(this.shakeT, t);
  }

  clear() {
    for (const h of this.halves) this.removeHalf(h);
    this.halves.length = 0;
    this.juice.clear();
    this.spark.clear();
    this.confetti.clear();
    this.splats.length = 0;
    this.splatMesh.count = 0;
    for (const f of this.floats) f.el.remove();
    this.floats.length = 0;
  }

  update(dt, level) {
    // halves
    const H = this.halves;
    let w = 0;
    for (let i = 0; i < H.length; i++) {
      const h = H[i];
      h.life += dt;
      if (h.life > h.maxLife) {
        this.removeHalf(h);
        continue;
      }
      h.vy -= 22 * dt;
      const o = h.obj;
      o.position.x += h.vx * dt;
      o.position.y += h.vy * dt;
      o.position.z += h.vz * dt;
      if (level) {
        const top = level.groundTopAt(o.position.x, o.position.y + 0.6);
        const rest = top + h.size * 0.45;
        if (o.position.y < rest && h.vy < 0 && o.position.y > top - 0.8 && Math.abs(o.position.z) < 1.4) {
          o.position.y = rest;
          h.vy *= -0.28;
          h.vx *= 0.55;
          h.vz *= 0.55;
          h.wx *= 0.5; h.wy *= 0.5; h.wz *= 0.5;
        }
      }
      tmpE.set(h.wx * dt, h.wy * dt, h.wz * dt);
      tmpQ.setFromEuler(tmpE);
      o.quaternion.premultiply(tmpQ);
      const fadeStart = h.maxLife - 0.4;
      if (h.life > fadeStart) {
        const s = Math.max(0.001, 1 - (h.life - fadeStart) / 0.4);
        o.scale.copy(h.base).multiplyScalar(s);
      }
      o.updateMatrixWorld(true);
      h.plane.copy(h.local).applyMatrix4(o.matrixWorld);
      H[w++] = h;
    }
    H.length = w;

    this.juice.update(dt);
    this.spark.update(dt);
    this.confetti.update(dt);

    // splats
    const S = this.splats;
    let k = 0;
    for (let i = 0; i < S.length; i++) {
      const s = S[i];
      s.t += dt;
      if (s.t > 6) continue;
      S[k++] = s;
    }
    S.length = k;
    for (let i = 0; i < k; i++) {
      const s = S[i];
      const grow = Math.min(1, s.t * 12);
      const fade = s.t > 5 ? 1 - (s.t - 5) : 1;
      const sz = s.size * grow * fade;
      tmpP.set(s.x, s.y, s.z);
      tmpQ.setFromAxisAngle(new THREE.Vector3(0, 1, 0), s.rot);
      tmpS.set(sz, 1, sz * 0.8);
      tmpM.compose(tmpP, tmpQ, tmpS);
      this.splatMesh.setMatrixAt(i, tmpM);
      this.splatMesh.setColorAt(i, s.color);
    }
    this.splatMesh.count = k;
    this.splatMesh.instanceMatrix.needsUpdate = true;
    if (this.splatMesh.instanceColor) this.splatMesh.instanceColor.needsUpdate = true;

    // shake
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const a = this.shakeAmp * Math.max(0, this.shakeT) * 4;
      this.shakeOff.set((Math.random() - 0.5) * a, (Math.random() - 0.5) * a, 0);
      if (this.shakeT <= 0) this.shakeAmp = 0;
    } else this.shakeOff.set(0, 0, 0);
  }

  updateFloats(dt) {
    const F = this.floats;
    if (!F.length) return;
    const wdt = this.renderer.domElement.clientWidth;
    const hgt = this.renderer.domElement.clientHeight;
    let w = 0;
    for (let i = 0; i < F.length; i++) {
      const f = F[i];
      f.t += dt;
      if (f.t > f.life) {
        f.el.remove();
        continue;
      }
      tmpP.set(f.x, f.y, 0).project(this.camera);
      const sx = (tmpP.x * 0.5 + 0.5) * wdt;
      const sy = (-tmpP.y * 0.5 + 0.5) * hgt;
      f.el.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
      F[w++] = f;
    }
    F.length = w;
  }
}

export { tmpC };
