import * as THREE from 'three';
import { portal } from './sdk.js';
import { save, persist, initSave } from './save.js';
import { setLang, t } from './i18n.js';
import { audio } from './audio.js';
import { biomeForLevel, createSky, buildDecor, setSky, createMotes, updateMotes } from './world.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Level } from './level.js';
import { Blade, P } from './player.js';
import { FX } from './fx.js';
import { UI } from './ui.js';
import { skinById, renderThumbsAsync } from './skins.js';
import { incomeMult, feverDuration, magnetRadius, shieldChance, checkAutoUnlocks, progressSkin, own } from './meta.js';
import { TARGET_RINGS } from './textures.js';
import { clamp, lerp, damp, segDist, isTouch, fmt, angDiff } from './util.js';

const STEP = 1 / 120;

function segBox(ax, ay, bx, by, x0, y0, x1, y1) {
  let t0 = 0, t1 = 1;
  const dx = bx - ax, dy = by - ay;
  const p = [-dx, dx, -dy, dy];
  const q = [ax - x0, x1 - ax, ay - y0, y1 - ay];
  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) {
      if (q[i] < 0) return false;
    } else {
      const r = q[i] / p[i];
      if (p[i] < 0) {
        if (r > t1) return false;
        if (r > t0) t0 = r;
      } else {
        if (r < t0) return false;
        if (r < t1) t1 = r;
      }
    }
  }
  return true;
}

const easeOutCubic = (k) => 1 - Math.pow(1 - k, 3);

class Game {
  constructor() {
    this.state = 'boot';
    this.paused = false;
    this.time = 0;
    this.acc = 0;
    this.timeScale = 1;
    this.look = new THREE.Vector3();
    this.lastAd = performance.now();
    this.fpsAcc = 0;
    this.fpsFrames = 0;
    this.autoScale = 1;
    this.unlockQueue = [];
  }

  // -----------------------------------------------------------------------
  // Boot
  // -----------------------------------------------------------------------
  async boot() {
    await portal.init();
    portal.loadingStart();
    initSave(portal.storage);
    const sys = (save.settings.lang || portal.lang || 'en').toLowerCase();
    setLang(['ru', 'uk', 'be', 'kk'].includes(sys) ? 'ru' : sys);
    document.querySelector('#loading span').textContent = t('loading');
    audio.setSound(save.settings.sound);
    audio.setMusic(save.settings.music);
    portal.onAdStart = () => {
      audio.pauseAll();
      if (!portal.enabled) document.getElementById('adCover').classList.remove('hidden');
    };
    portal.onAdEnd = () => {
      audio.resumeAll();
      document.getElementById('adCover').classList.add('hidden');
      this.last = performance.now();
    };

    this.initRenderer();
    this.initScene();
    this.ui = new UI(this);
    this.blade.setSkin(skinById(save.skin));
    this.ui.setWallet();
    this.loadLevel(save.level);
    this.toMenu(false);
    this.bindInput();

    // shop previews render in the background after the game is visible
    this.ui.thumbs = { priority: (progressSkin() || {}).id };
    setTimeout(() => renderThumbsAsync(this.ui.thumbs, () => this.ui.onThumb()), 300);
    const loading = document.getElementById('loading');
    loading.style.opacity = '0';
    setTimeout(() => loading.remove(), 450);
    portal.loadingStop();

    this.last = performance.now();
    const loop = (now) => {
      requestAnimationFrame(loop);
      this.frame(now);
    };
    requestAnimationFrame(loop);
    // pending auto unlocks (e.g. after a cloud-save restore)
    setTimeout(() => this.checkUnlocks(), 600);
  }

  initRenderer() {
    const canvas = document.getElementById('c');
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.localClippingEnabled = true;
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 200));
  }

  initScene() {
    const scene = (this.scene = new THREE.Scene());
    this.camera = new THREE.PerspectiveCamera(48, 1, 0.1, 1400);
    this.hemi = new THREE.HemisphereLight('#ffffff', '#88cc77', 1.9);
    scene.add(this.hemi);
    const sun = (this.sun = new THREE.DirectionalLight('#fff5e0', 2.6));
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    const sc = sun.shadow.camera;
    sc.left = -14; sc.right = 14; sc.top = 11; sc.bottom = -11; sc.near = 1; sc.far = 70;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.03;
    scene.add(sun, sun.target);
    this.sky = createSky();
    scene.add(this.sky);
    // soft studio reflections so metal blades, coins and fruit skins shine
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    scene.fog = new THREE.Fog('#cdeefe', 55, 190);
    this.blade = new Blade(scene);
    this.fx = new FX(scene, this.camera, this.renderer);
    this.applyQuality();
    this.resize();
  }

  applyQuality() {
    const q = save.settings.quality;
    const dpr = window.devicePixelRatio || 1;
    const mobile = isTouch();
    let pr, shadows, map;
    if (q === 'low') {
      pr = Math.min(dpr, 1);
      shadows = false;
      map = 512;
    } else if (q === 'high') {
      pr = Math.min(dpr, 2);
      shadows = true;
      map = 2048;
    } else {
      pr = Math.min(dpr, mobile ? 1.6 : 1.75) * this.autoScale;
      shadows = this.autoScale > 0.7;
      map = mobile ? 1024 : 1536;
    }
    this.lowFx = q === 'low';
    this.renderer.setPixelRatio(Math.max(0.6, pr));
    this.sun.castShadow = shadows;
    if (this.sun.shadow.mapSize.x !== map) {
      this.sun.shadow.mapSize.set(map, map);
      if (this.sun.shadow.map) {
        this.sun.shadow.map.dispose();
        this.sun.shadow.map = null;
      }
    }
    this.resize();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  bindInput() {
    const onDown = (e) => {
      if (e.button !== undefined && e.button > 0) return;
      if (e.target.closest && e.target.closest('button, .modal, .pill')) return;
      e.preventDefault();
      this.tap();
    };
    window.addEventListener('pointerdown', onDown, { passive: false });
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      if (['Space', 'ArrowUp', 'KeyW', 'Enter'].includes(e.code)) {
        e.preventDefault();
        if (!this.ui.anyModal()) this.tap();
      } else if (e.code === 'Escape' || e.code === 'KeyP') {
        if (this.paused) this.resume();
        else this.pause();
      }
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (['play', 'aim', 'throw'].includes(this.state)) this.pause();
        audio.pauseAll();
      } else if (!portal.adPlaying) {
        audio.resumeAll();
        this.last = performance.now();
      }
    });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('wheel', (e) => { if (!e.target.closest('.scroll')) e.preventDefault(); }, { passive: false });
  }

  vib(ms) {
    if (!save.settings.vibro || !navigator.vibrate) return;
    try { navigator.vibrate(ms); } catch (e) { /* ignore */ }
  }

  // -----------------------------------------------------------------------
  // Level lifecycle
  // -----------------------------------------------------------------------
  loadLevel(n) {
    if (this.level) {
      this.scene.remove(this.level.root);
      this.level.dispose();
    }
    if (this.decor) {
      this.scene.remove(this.decor);
      this.decor.traverse((o) => { if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose(); });
    }
    this.fx.clear();
    const biome = biomeForLevel(n);
    const level = (this.level = new Level(n, biome));
    this.scene.add(level.root);
    this.decor = buildDecor(biome, -40, level.board.x + 40, level.floorY, n);
    this.decorT = 0;
    this.scene.add(this.decor);
    this.applyBiome(biome);

    const b = this.blade;
    b.ragdoll = false;
    b.speedMul = 1;
    b.reset(level.startX, level.startTop);
    b.bubble.visible = false;
    b.trail.fire = false;
    b.group.visible = true;

    this.run = {
      coins: 0, stars: 0, fever: 0, feverOn: false, feverT: 0,
      combo: 0, lastSlice: -9, shield: false, invuln: 0,
      bossStarted: false, hints: new Set(), revived: false, mult: 1,
      safe: { x: b.x, y: b.y, a: b.a }, stickHint: false, deaths: 0,
    };
    if (Math.random() < shieldChance()) this.giveShield(true);
    this.time = 0;
    this.acc = 0;
    this.timeScale = 1;
    this.paused = false;
    audio.intensity = 0;
    this.ui.setupLevelHUD(level);
    // snap camera
    this.look.set(b.x + 2.4, level.startTop + 1.3, 0);
    this.updateCamera(1, true);
  }

  applyBiome(b) {
    setSky(this.sky, b);
    this.scene.environmentIntensity = b.envI;
    if (this.motes) {
      this.scene.remove(this.motes);
      this.motes.geometry.dispose();
    }
    this.motes = createMotes(b);
    this.scene.add(this.motes);
    this.scene.fog.color.set(b.fog);
    this.hemi.color.set(b.hemiSky);
    this.hemi.groundColor.set(b.hemiGround);
    this.hemi.intensity = b.hemiI;
    this.sun.color.set(b.light);
    this.sun.intensity = b.lightI;
    document.body.style.background = b.skyTop;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', b.skyTop);
  }

  toMenu(reload = true) {
    this.paused = false;
    if (reload) this.loadLevel(save.level);
    this.state = 'menu';
    portal.gameplayStop();
    this.ui.showHUD(false);
    this.ui.hideHint();
    this.ui.showMenu(true, this.level);
    this.ui.setWallet();
  }

  refreshMenu() {
    if (this.state === 'menu') this.ui.showMenu(true, this.level);
  }

  startPlay() {
    this.state = 'play';
    this.ui.showMenu(false);
    this.ui.showHUD(true);
    portal.gameplayStart();
    if (this.level.n % 5 === 1 && this.level.n > 1) this.ui.banner(t('world_' + this.level.biome.id));
  }

  restartLevel(direct = true) {
    this.paused = false;
    this.maybeMidgame(() => {
      this.loadLevel(save.level);
      if (direct) {
        this.state = 'play';
        this.ui.showMenu(false);
        this.ui.showHUD(true);
        portal.gameplayStart();
      } else this.toMenu(false);
    });
  }

  maybeMidgame(then) {
    const now = performance.now();
    if (save.level >= 3 && now - this.lastAd > 150000) {
      this.lastAd = now;
      portal.gameplayStop();
      portal.midgame().then(then);
    } else then();
  }

  pause() {
    if (this.paused || !['play', 'aim', 'throw'].includes(this.state)) return;
    this.paused = true;
    portal.gameplayStop();
    this.ui.showPause();
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    document.getElementById('mPause').classList.add('hidden');
    portal.gameplayStart();
    this.last = performance.now();
  }

  onModalClosed(id) {
    if (id === 'mPause' && this.paused) this.resume();
    if (id === 'mUnlock' && this.unlockQueue.length) {
      setTimeout(() => this.ui.showUnlock(this.unlockQueue.shift()), 250);
    }
    if (id === 'mShop' || id === 'mWheel' || id === 'mUnlock') this.refreshMenu();
  }

  equip(id) {
    save.skin = id;
    persist();
    this.blade.setSkin(skinById(id));
  }

  checkUnlocks() {
    const fresh = checkAutoUnlocks();
    if (!fresh.length) return;
    this.unlockQueue.push(...fresh);
    if (!this.ui.anyModal()) this.ui.showUnlock(this.unlockQueue.shift());
  }

  afterReset() {
    this.equip('chef');
    this.ui.setWallet();
    this.toMenu(true);
  }

  // -----------------------------------------------------------------------
  // Input
  // -----------------------------------------------------------------------
  tap() {
    audio.unlock();
    if (this.paused || this.ui.anyModal()) return;
    switch (this.state) {
      case 'menu':
        this.startPlay();
        this.hop();
        break;
      case 'play':
        this.hop();
        break;
      case 'aim':
        if (this.aimT > 0.3) this.throwBlade();
        break;
      default:
        break;
    }
  }

  hop() {
    const L = this.level;
    const inArena = L.boss && L.boss.alive && this.run.bossStarted;
    this.blade.speedMul = this.run.feverOn ? 1.12 : 1;
    this.blade.hop({ vx: inArena ? 1.9 : P.VX });
    audio.play('flip');
  }

  // -----------------------------------------------------------------------
  // Main loop
  // -----------------------------------------------------------------------
  frame(now) {
    const rawDt = Math.min(0.05, Math.max(0, (now - this.last) / 1000));
    this.last = now;
    if (!this.paused && !portal.adPlaying) this.update(rawDt);
    this.renderer.render(this.scene, this.camera);
    this.autoQuality(rawDt);
  }

  autoQuality(dt) {
    if (save.settings.quality !== 'auto' || this.state === 'menu' || this.paused) return;
    this.fpsAcc += dt;
    this.fpsFrames++;
    if (this.fpsAcc > 3) {
      const fps = this.fpsFrames / this.fpsAcc;
      this.fpsAcc = 0;
      this.fpsFrames = 0;
      if (fps < 42 && this.autoScale > 0.6) {
        this.autoScale = Math.max(0.6, this.autoScale - 0.15);
        this.applyQuality();
      }
    }
  }

  update(dt) {
    this.timeScale = damp(this.timeScale, 1, 3, dt);
    const sdt = dt * this.timeScale;
    this.time += sdt;
    const st = this.state;

    if (st === 'play' || st === 'dead') {
      this.acc += sdt;
      let n = 0;
      while (this.acc >= STEP && n < 12) {
        this.stepPhysics(STEP);
        this.acc -= STEP;
        n++;
        if (this.state !== st) break;
      }
      if (n >= 12) this.acc = 0;
    } else if (st === 'aim') this.updateAim(sdt);
    else if (st === 'throw') this.updateThrow(sdt);

    const L = this.level;
    L.update(sdt, this.time);
    if (this.state === 'play') this.updateRun(sdt);

    const b = this.blade;
    b.sync();
    const trailOn = (this.state === 'play' && (b.flipping || b.tipSpeed() > 7)) || this.state === 'throw';
    b.updateTrail(sdt, trailOn, this.time);
    this.fx.update(sdt, L);
    this.updateCamera(dt);
    this.fx.updateFloats(dt);
    this.updateDecor(sdt);
    if (this.motes) updateMotes(this.motes, this.camera.position, sdt, this.time);

    if (this.state === 'play') {
      this.ui.setProgress((b.x - L.startX) / (L.finish.x - L.startX));
    }
    this.ui.setLevelCoins(this.run.coins);
  }

  updateRun(dt) {
    const r = this.run;
    r.invuln = Math.max(0, r.invuln - dt);
    if (r.feverOn) {
      r.feverT -= dt;
      r.fever = Math.max(0, r.feverT / feverDuration());
      const [tx, ty] = this.blade.point(0.7);
      this.fx.burst(tx, ty, Math.random() < 0.5 ? '#ffb03a' : '#ff5a1a', 2, { spark: true, speed: 1.4, up: 1.6, grav: -3, life: 0.4, size: 0.1 });
      if (r.feverT <= 0) {
        r.feverOn = false;
        r.fever = 0;
        this.blade.trail.fire = false;
        audio.intensity = 0;
      }
    } else {
      r.fever = Math.max(0, r.fever - 0.03 * dt);
    }
    this.ui.setFever(r.fever, r.feverOn);
    // the blade's shield bubble wobbles
    if (this.blade.bubble.visible) {
      const s = 1 + Math.sin(this.time * 6) * 0.04;
      this.blade.bubble.scale.set(s, s, s);
    }
    // boss eyes follow the blade
    const B = this.level.boss;
    if (B && B.alive && B.eyes) {
      const dx = clamp((this.blade.x - B.x) * 0.03, -0.08, 0.08);
      const dy = clamp((this.blade.y - B.y) * 0.03, -0.06, 0.06);
      for (const e of B.eyes) e.position.set(-0.06 + dx, dy, 0.18);
    }
  }

  updateDecor(dt) {
    const cx = this.camera.position.x;
    for (const o of this.decor.children) {
      if (o.userData.drift) o.position.x += o.userData.drift * dt;
      if (o.userData.scroll && o.material.map) o.material.map.offset.x += o.userData.scroll * dt;
      if (o.userData.spin) o.material.rotation += o.userData.spin * dt;
      if (o.userData.follow) {
        if (o.userData.baseX === undefined) o.userData.baseX = o.position.x;
        o.position.x = cx + o.userData.baseX;
      }
    }
  }

  updateCamera(dt, snap = false) {
    const L = this.level;
    const b = this.blade;
    const aspect = this.camera.aspect || 1.6;
    const far = clamp(1.35 / aspect, 0.95, 1.6);
    let lx, ly, ox, oy, oz, k;
    if (this.state === 'aim' || this.state === 'throw' || this.state === 'won') {
      // over-the-shoulder view: blade in the foreground, target centred
      lx = L.board.x;
      ly = L.board.cy - 0.2;
      const back = 3.4 + (far - 1) * 6;
      ox = L.finish.launchX - back - lx;
      oy = L.finish.launchY + 1.1 - ly;
      oz = 2.4 + (far - 1) * 2.5;
      k = 4;
    } else {
      const lead = far > 1.3 ? 1.0 : 1.8;
      lx = b.x + lead;
      const ground = L.groundTopAt(b.x + 1.5, b.y + 1.2);
      const g = ground < L.floorY + 1 ? L.groundTopAt(b.x - 1, b.y + 1.2) : ground;
      ly = Math.max(g + 1.0, lerp(g + 1.0, b.y + 0.2, 0.55));
      if (this.state === 'dead') ly = Math.max(ly, L.killY + 2);
      const zoom = L.boss && L.boss.alive && this.run.bossStarted ? 1.12 : this.run.feverOn ? 1.06 : 1;
      ox = -2.1 * far * zoom; oy = 3.3 * far * zoom; oz = 8.6 * far * zoom;
      k = 4;
    }
    if (snap) {
      this.look.set(lx, ly, 0);
      this.camOff = new THREE.Vector3(ox, oy, oz);
    } else {
      this.look.x = damp(this.look.x, lx, k, dt);
      this.look.y = damp(this.look.y, ly, k * 0.75, dt);
      const ck = k > 3 ? 3.5 : 2.5;
      this.camOff.x = damp(this.camOff.x, ox, ck, dt);
      this.camOff.y = damp(this.camOff.y, oy, ck, dt);
      this.camOff.z = damp(this.camOff.z, oz, ck, dt);
    }
    const cam = this.camera;
    cam.position.set(this.look.x + this.camOff.x, this.look.y + this.camOff.y, this.camOff.z).add(this.fx.shakeOff);
    cam.lookAt(this.look.x, this.look.y - (this.state === 'aim' || this.state === 'throw' || this.state === 'won' ? 0 : 0.4), -0.4);
    this.sun.position.set(this.look.x - 7, this.look.y + 16, 11);
    this.sun.target.position.set(this.look.x + 2, this.look.y - 3, 0);
    this.sky.position.copy(cam.position);
  }

  // -----------------------------------------------------------------------
  // Physics & interactions
  // -----------------------------------------------------------------------
  stepPhysics(h) {
    const b = this.blade;
    const ev = b.step(h, this.level);
    if (this.state === 'dead') return;
    if (ev) this.onBladeEvent(ev);
    this.interactions(h);
  }

  onBladeEvent(ev) {
    const b = this.blade;
    const [tx, ty] = b.point(P.TIP);
    if (ev === 'stick' || ev === 'perfect') {
      audio.play('stick');
      this.fx.burst(tx, ty, this.level.biome.blockSide, 6, { speed: 2, up: 1.5, size: 0.06, life: 0.4 });
      this.fx.shake(0.05, 0.12);
      this.vib(8);
      const s = b.stuck && b.stuck.solid;
      if (s && s.kind === 'ground') this.run.safe = { x: b.x, y: b.y, a: b.a };
      if (ev === 'perfect') {
        audio.play('perfect');
        this.fx.floatText(b.x, b.y + 1.3, t('perfect'), 'perfect');
        this.addCoins(1 * incomeMult(), null);
        this.addFever(0.06);
      }
    } else if (ev === 'stickWood') {
      audio.play('stickWood');
      this.fx.burst(tx, ty, '#b8743a', 7, { speed: 2.5, up: 1, size: 0.06, life: 0.5 });
      this.fx.shake(0.05, 0.12);
      this.vib(8);
    } else if (ev === 'bounce') {
      audio.play('bounce');
      if (this.level.n <= 2 && !this.run.stickHint) {
        this.run.stickHint = true;
        this.ui.hint(t('hint_stick'), 3);
      }
    }
  }

  interactions(h) {
    const b = this.blade;
    const L = this.level;
    const r = this.run;
    const [tx, ty] = b.point(P.TIP);
    const [gx, gy] = b.point(0.08);
    const [bx, by] = b.point(P.BUTT);
    const [mx, my] = b.point(0.55);
    const pts = [[tx, ty], [mx, my], [gx, gy], [bx, by]];

    if (b.y < L.killY) return this.die('fall');

    // hazards
    for (const hz of L.hazards) {
      if (!hz.active) continue;
      let hit = false;
      if (hz.kind === 'spike' || (hz.kind === 'mspike' && hz.armed)) {
        for (const [px, py] of pts) {
          if (px > hz.x0 + 0.05 && px < hz.x1 - 0.05 && py > hz.y0 && py < hz.y1) { hit = true; break; }
        }
      } else if (hz.kind === 'saw') {
        hit = segDist(hz.x, hz.y, bx, by, tx, ty) < hz.r * 0.85;
      } else if (hz.kind === 'seed') {
        if (segDist(hz.x, hz.y, gx, gy, tx, ty) < hz.r + 0.08 && (b.flipping || b.tipSpeed() > 3)) {
          L.killSeed(hz);
          this.fx.burst(hz.x, hz.y, '#2b1a12', 8, { speed: 3 });
          this.addCoins(2 * incomeMult(), hz.x, hz.y + 0.5);
          audio.play('slice', 3);
          continue;
        }
        hit = segDist(hz.x, hz.y, bx, by, gx, gy) < hz.r + 0.05;
      }
      if (hit && r.invuln <= 0) {
        if (this.hitHazard(hz)) return;
      }
    }

    // jelly pads
    for (const p of L.pads) {
      if (b.vy > 2) continue;
      for (const [px, py] of pts) {
        if (px > p.x0 - 0.05 && px < p.x1 + 0.05 && py > p.y - 0.1 && py < p.y + p.h + 0.08) {
          b.hop({ vy: 14, vx: 4.6, turns: 2, pad: true });
          p.squash = 1;
          audio.play('jelly');
          this.fx.burst((p.x0 + p.x1) / 2, p.y + p.h, '#57e389', 12, { speed: 3, up: 3 });
          this.vib(15);
          break;
        }
      }
    }

    // boost rings
    for (const ring of L.rings) {
      if (ring.done) continue;
      if (Math.abs(b.x - ring.x) < 0.35 && Math.abs(b.y - ring.y) < ring.r - 0.1) {
        ring.done = true;
        ring.pulse = 1;
        ring.mesh.material = ring.mesh.material.clone();
        ring.mesh.material.color.set('#57e389');
        ring.mesh.material.emissive.set('#1a9e4c');
        this.addCoins(5 * incomeMult() * (r.feverOn ? 2 : 1), ring.x, ring.y + 1.2, 'gold big');
        this.fx.floatText(ring.x, ring.y + 0.4, t('nice'), 'perfect');
        this.addFever(0.25);
        audio.play('ring');
        this.fx.burst(ring.x, ring.y, '#ffd23f', 20, { spark: true, speed: 4, up: 0, grav: 0, life: 0.6, size: 0.1 });
        b.vy = Math.max(b.vy, 5);
      }
    }

    // slicing
    const sharp = b.flipping || b.tipSpeed() > 3.2;
    if (sharp) {
      for (const it of L.items) {
        if (!it.alive || Math.abs(it.x - b.x) > 2.4) continue;
        const cy = it.y + it.hh;
        if (segBox(gx, gy, tx, ty, it.x - it.hw, cy - it.hh, it.x + it.hw, cy + it.hh)) this.sliceItem(it);
      }
    }

    // coins
    const mr = magnetRadius();
    for (const c of L.coins) {
      if (c.taken || Math.abs(c.x - b.x) > mr + 2.5) continue;
      const d = segDist(c.x, c.y, bx, by, tx, ty);
      if (d < 0.42) this.collectCoin(c);
      else if (d < mr) c.magnet = true;
      if (c.magnet && !c.taken) {
        c.x = lerp(c.x, mx, 0.12);
        c.y = lerp(c.y, my, 0.12);
      }
    }
    // stars
    L.stars.forEach((s, i) => {
      if (!s.taken && segDist(s.x, s.y, bx, by, tx, ty) < 0.65) this.collectStar(s, i);
    });
    // pickups
    for (const p of L.pickups) {
      if (!p.taken && segDist(p.x, p.y, bx, by, tx, ty) < 0.7) {
        p.taken = true;
        p.mesh.visible = false;
        this.giveShield(false);
      }
    }

    if (L.boss) this.bossStep(h, gx, gy, tx, ty, sharp);

    for (const hint of L.hints) {
      if (!r.hints.has(hint) && b.x >= hint.x) {
        r.hints.add(hint);
        this.ui.hint(t(hint.key), 3);
      }
    }

    if (b.x >= L.finish.x) this.startAim();
  }

  hitHazard(hz) {
    const r = this.run;
    if (r.feverOn) {
      this.smashHazard(hz);
      return false;
    }
    if (r.shield) {
      this.popShield();
      return false;
    }
    this.die('hazard');
    return true;
  }

  smashHazard(hz) {
    const L = this.level;
    hz.active = false;
    if (hz.kind === 'seed') L.killSeed(hz);
    else hz.mesh.visible = false;
    const x = hz.x !== undefined ? hz.x : (hz.x0 + hz.x1) / 2;
    const y = hz.y !== undefined ? hz.y : hz.y1;
    this.fx.burst(x, y, L.biome.spike, 22, { speed: 5, size: 0.09 });
    this.fx.burst(x, y, '#ffb03a', 14, { spark: true, speed: 4, life: 0.5 });
    this.addCoins(3 * incomeMult() * 2, x, y + 0.8, 'fever');
    audio.play('smash');
    this.fx.shake(0.15, 0.2);
  }

  giveShield(silent) {
    this.run.shield = true;
    this.blade.bubble.visible = true;
    if (!silent) {
      audio.play('star');
      this.fx.floatText(this.blade.x, this.blade.y + 1.4, t('shield'), 'perfect');
    }
  }

  popShield() {
    const b = this.blade;
    this.run.shield = false;
    this.run.invuln = 1.1;
    b.bubble.visible = false;
    audio.play('shieldPop');
    this.fx.burst(b.x, b.y, '#7ad7ff', 24, { speed: 5, up: 1, size: 0.08 });
    this.fx.shake(0.15, 0.2);
    b.bounceUp(10.5);
    b.vx = 3;
  }

  addFever(v) {
    const r = this.run;
    if (r.feverOn) return;
    r.fever = Math.min(1, r.fever + v);
    if (r.fever >= 1) {
      r.feverOn = true;
      r.feverT = feverDuration();
      this.blade.trail.fire = true;
      audio.intensity = 1;
      audio.play('fever');
      this.ui.banner(t('fever'));
      this.timeScale = 0.4;
      this.vib(40);
    }
  }

  addCoins(v, x, y, cls = 'gold') {
    this.run.coins += v;
    if (x !== null && x !== undefined) {
      const shown = v >= 10 ? Math.round(v) : Math.round(v * 10) / 10;
      this.fx.floatText(x, y, '+' + (Number.isInteger(shown) ? shown : shown.toFixed(1)), cls);
    }
  }

  sliceItem(it) {
    const b = this.blade;
    const L = this.level;
    const r = this.run;
    L.removeItem(it);
    const [dx, dy] = b.dir();
    const cy = it.y + it.hh;
    this.fx.slice(it.group, it.x, cy, -dy, dx, it.def.flesh, { vx: b.vx, size: it.h, low: this.lowFx, cap: it.golden ? 'golden' : it.def.cap, capR: it.def.capR });
    const big = it.def.big || it.golden;
    this.fx.burst(it.x, cy, it.juice, big ? 26 : it.def.layer ? 6 : 14, { speed: big ? 5.5 : 4.2, size: big ? 0.1 : 0.075, up: 2 });
    if (!it.def.layer || Math.random() < 0.35) {
      this.fx.splat(it.x + (Math.random() - 0.5) * 0.6, L.groundTopAt(it.x, it.y + 0.05), it.juice, big ? 0.75 : 0.42);
    }
    if (this.time - r.lastSlice < 0.75) r.combo++;
    else r.combo = 1;
    r.lastSlice = this.time;
    const v = it.value * incomeMult() * (r.feverOn ? 2 : 1);
    this.addCoins(v, it.x, cy + it.hh + 0.25, it.golden ? 'gold big' : r.feverOn ? 'fever' : 'gold');
    this.addFever(it.def.fever);
    audio.play('slice', r.combo);
    if (big) {
      audio.play('squish');
      this.fx.shake(0.08, 0.15);
      this.timeScale = Math.min(this.timeScale, 0.35); // juicy hit-stop
    }
    if (it.golden) this.fx.burst(it.x, cy, '#ffe066', 30, { spark: true, speed: 5, life: 0.7, size: 0.1 });
    this.vib(6);
    save.totalSlices++;
    if (r.combo >= 5 && r.combo % 5 === 0) {
      const words = { 10: 'great', 20: 'amazing', 30: 'insane' };
      const w = words[r.combo] ? t(words[r.combo]) + ' ' : '';
      this.fx.floatText(b.x, b.y + 1.8, w + t('combo', r.combo), 'combo', 1.1);
      this.addCoins(Math.floor(r.combo / 5) * incomeMult(), null);
    }
  }

  collectCoin(c) {
    c.taken = true;
    c.mesh.visible = false;
    this.run.coins += incomeMult() * (this.run.feverOn ? 2 : 1);
    this.fx.burst(c.x, c.y, '#ffd23f', 5, { spark: true, speed: 2.5, up: 0.5, grav: 2, life: 0.35, size: 0.08 });
    audio.play('coin');
  }

  collectStar(s, i) {
    s.taken = true;
    s.mesh.visible = false;
    this.run.stars++;
    this.ui.starGot(i);
    this.fx.burst(s.x, s.y, '#ffe066', 26, { spark: true, speed: 5, up: 0, grav: 0, life: 0.7, size: 0.11 });
    this.fx.floatText(s.x, s.y + 0.6, t('star'), 'star');
    audio.play('star');
    this.vib(20);
  }

  bossStep(h, gx, gy, tx, ty, sharp) {
    const B = this.level.boss;
    const r = this.run;
    if (!B.alive) return;
    const b = this.blade;
    if (!r.bossStarted) {
      if (b.x > B.arenaX) {
        r.bossStarted = true;
        this.ui.banner(t('boss'));
        this.ui.setBoss(true, 1);
        audio.play('fever');
      }
      return;
    }
    if (B.shoots) {
      B.shootT -= h;
      if (B.shootT <= 0) {
        B.shootT = Math.max(1.6, 2.6 - (this.level.n - 10) * 0.03);
        this.level.spawnSeed(b.x, b.y + 0.3);
        audio.play('bounce');
      }
    }
    if (sharp && B.cool <= 0 && segDist(B.x, B.y, gx, gy, tx, ty) < B.r) {
      B.hp--;
      B.cool = 0.16;
      B.flash = 1;
      B.squash = 1;
      this.fx.burst(tx, ty, B.juice, 14, { speed: 5, size: 0.09 });
      this.addCoins(2 * incomeMult() * (r.feverOn ? 2 : 1), B.x, B.y + B.r + 0.4);
      audio.play('bossHit');
      this.fx.shake(0.1, 0.12);
      this.addFever(0.05);
      this.vib(12);
      this.ui.setBoss(true, Math.max(0, B.hp / B.maxHp));
      if (B.hp <= 0) this.bossDie();
    }
  }

  bossDie() {
    const L = this.level;
    const B = L.boss;
    B.alive = false;
    const [dx, dy] = this.blade.dir();
    this.fx.slice(B.group, B.x, B.y, -dy, dx, B.flesh, { speed: 3.8, size: B.r * 2, life: 2.8, up: 5, cap: B.cap, capR: B.r * 1.02 });
    L.root.remove(B.group);
    this.fx.burst(B.x, B.y, B.juice, 70, { speed: 8.5, size: 0.14, life: 0.9 });
    this.fx.burst(B.x, B.y, '#ffd23f', 40, { spark: true, speed: 7, life: 0.9, size: 0.13 });
    this.fx.splat(B.x, L.groundTopAt(B.x, B.y), B.juice, 1.6);
    this.addCoins(40 * incomeMult(), B.x, B.y + 2.2, 'gold big');
    B.gate.active = false;
    B.gate.sinking = true;
    B.gate.restY = B.gate.mesh.position.y;
    for (const hz of L.hazards) if (hz.kind === 'seed' && hz.active) L.killSeed(hz);
    audio.play('smash');
    setTimeout(() => audio.play('win'), 250);
    this.fx.shake(0.5, 0.5);
    this.timeScale = 0.25;
    this.ui.banner(t('bossDown'));
    this.ui.setBoss(false);
    this.vib(80);
    portal.happytime();
  }

  die(reason) {
    if (this.state !== 'play') return;
    const b = this.blade;
    this.state = 'dead';
    this.run.deaths++;
    audio.play('death');
    this.fx.shake(0.35, 0.35);
    this.vib(90);
    this.ui.hideHint();
    b.ragdoll = true;
    b.stuck = null;
    b.flipT = 99;
    if (reason === 'hazard') {
      b.vx = -2.5;
      b.vy = 8;
      b.w = 16;
      this.fx.burst(b.x, b.y, '#ff4d6d', 16, { speed: 4 });
      this.timeScale = 0.35;
    }
    portal.gameplayStop();
    setTimeout(() => {
      if (this.state !== 'dead') return;
      this.ui.showFail(!this.run.revived, () => this.revive(), () => this.restartLevel(false));
    }, 1000);
  }

  revive() {
    const b = this.blade;
    const r = this.run;
    r.revived = true;
    r.invuln = 2;
    b.ragdoll = false;
    b.x = r.safe.x;
    b.y = r.safe.y;
    b.a = r.safe.a;
    b.vx = b.vy = b.w = 0;
    b.flipT = 99;
    b.stuck = { solid: null, n: [0, 1] };
    b.trail.clear();
    for (const hz of this.level.hazards) if (hz.kind === 'seed' && hz.active) this.level.killSeed(hz);
    this.giveShield(true);
    this.state = 'play';
    portal.gameplayStart();
    this.fx.burst(b.x, b.y, '#7ad7ff', 24, { spark: true, speed: 4, life: 0.6 });
    audio.play('star');
  }

  // -----------------------------------------------------------------------
  // Finale: aim & throw at the target board
  // -----------------------------------------------------------------------
  startAim() {
    const L = this.level;
    const b = this.blade;
    this.state = 'aim';
    this.aimT = 0;
    this.aimPhase = Math.random() * Math.PI * 2;
    this.aimSpeed = 2.5 + Math.min(2.6, L.n * 0.09);
    this.aimFrom = { x: b.x, y: b.y, a: b.a };
    b.stuck = { solid: null, n: [0, 1] };
    b.flipT = 99;
    b.vx = b.vy = b.w = 0;
    L.board.marker.visible = true;
    L.board.line.visible = true;
    L.finish.arch.visible = false;
    this.ui.hideHint();
    this.ui.banner(t('tapThrow'));
    if (L.n <= 2) this.ui.hint(t('hint_throw'), 3);
    this.ui.setBoss(false);
    audio.play('ring');
  }

  aimWave(p) {
    const n = this.level.n;
    if (n < 3) return Math.sin(p);
    const w = Math.sin(p) + 0.35 * Math.sin(p * 2.3 + 1.3);
    return w / 1.35;
  }

  updateAim(dt) {
    const L = this.level;
    const B = L.board;
    const b = this.blade;
    this.aimT += dt;
    this.aimPhase += dt * this.aimSpeed;
    const my = B.cy + B.R * 0.94 * this.aimWave(this.aimPhase);
    this.markerY = my;
    B.marker.position.y = my;
    const k = easeOutCubic(Math.min(1, this.aimT / 0.45));
    const lx = L.finish.launchX, ly = L.finish.launchY + Math.sin(this.time * 3) * 0.05;
    b.x = lerp(this.aimFrom.x, lx, k);
    b.y = lerp(this.aimFrom.y, ly, k) + Math.sin(k * Math.PI) * 0.8;
    const aim = Math.atan2(my - ly, B.x - 0.3 - lx);
    b.a = this.aimFrom.a + angDiff(aim, this.aimFrom.a) * k;
    // aim line from the blade tip to the marker
    const [tx, ty] = b.point(P.TIP);
    const ex = B.x - 0.3, ey = my;
    const len = Math.hypot(ex - tx, ey - ty);
    B.line.position.set((tx + ex) / 2, (ty + ey) / 2, 0);
    B.line.scale.x = Math.max(0.01, len);
    B.line.rotation.z = Math.atan2(ey - ty, ex - tx);
    B.line.material.opacity = 0.35 + Math.sin(this.time * 10) * 0.15;
  }

  throwBlade() {
    const L = this.level;
    const B = L.board;
    const b = this.blade;
    this.state = 'throw';
    this.throwT = 0;
    B.line.visible = false;
    const ty = this.markerY;
    const faceX = B.x - 0.26;
    const endA = Math.atan2(ty - b.y, faceX - b.x) * 0.5;
    this.throwData = {
      x0: b.x, y0: b.y, a0: b.a,
      x1: faceX + P.EMBED - Math.cos(endA) * P.TIP,
      y1: ty - Math.sin(endA) * P.TIP,
      a1: endA, ty,
    };
    audio.play('throw');
  }

  updateThrow(dt) {
    const d = this.throwData;
    const b = this.blade;
    this.throwT += dt / 0.5;
    const k = Math.min(1, this.throwT);
    b.x = lerp(d.x0, d.x1, k);
    b.y = lerp(d.y0, d.y1, k) + Math.sin(k * Math.PI) * 0.7;
    b.a = d.a1 - Math.PI * 2 * 3 * (1 - easeOutCubic(k));
    if (k >= 1) this.hitBoard();
  }

  hitBoard() {
    const L = this.level;
    const B = L.board;
    const dist = Math.abs(this.throwData.ty - B.cy) / B.R;
    let mult = 1;
    for (const ring of TARGET_RINGS) {
      if (dist <= ring.r) { mult = ring.mult; break; }
    }
    this.run.mult = mult;
    this.state = 'won';
    B.marker.visible = false;
    audio.play('target');
    this.fx.shake(0.3, 0.3);
    this.vib(50);
    const hx = B.x - 0.4, hy = this.throwData.ty;
    this.fx.burst(hx, hy, '#ffffff', 16, { spark: true, speed: 4, life: 0.5 });
    this.fx.floatText(hx - 0.5, hy + 0.9, 'x' + mult, 'big gold', 1.4);
    this.ui.banner(mult >= 25 ? t('bullseye') : 'x' + mult);
    // board wobble
    const g = B.group;
    const t0 = performance.now();
    const wob = () => {
      const e = (performance.now() - t0) / 1000;
      g.rotation.z = Math.sin(e * 25) * 0.06 * Math.max(0, 1 - e * 1.5);
      if (e < 0.8) requestAnimationFrame(wob);
    };
    wob();
    setTimeout(() => {
      audio.play('win');
      const pal = ['#ff4d6d', '#ffd23f', '#2fa8ff', '#2fd36b', '#a14dff', '#ff8a3d'];
      this.fx.burst(B.x - 1.5, B.cy + B.R, '#fff', 60, { confetti: true, palette: pal, speed: 7, up: 6, grav: 6, drag: 1.2, life: 2.2, size: 0.14, zs: 3, zv: 1.5, spread: 3 });
      this.fx.burst(L.finish.launchX, L.finish.top + 1, '#fff', 40, { confetti: true, palette: pal, speed: 6, up: 7, grav: 6, drag: 1.2, life: 2.2, size: 0.14, zs: 3, zv: 1.5, spread: 2 });
      if (mult >= 10) portal.happytime();
    }, 350);
    setTimeout(() => this.showWin(), 1700);
  }

  showWin() {
    const L = this.level;
    const r = this.run;
    portal.gameplayStop();
    this.ui.showHUD(false);
    const result = Math.max(1, Math.round(r.coins * r.mult));
    const prev = save.skinProgress;
    const ps = progressSkin();
    const inc = L.isBoss ? 35 : 25;
    const next = ps ? Math.min(100, prev + inc) : prev;
    this.ui.showWin({ level: L.n, stars: r.stars, coins: r.coins, mult: r.mult, result, prevProgress: prev, newProgress: next }, (x) => this.claim(result * x, next));
  }

  claim(amount, progress) {
    const L = this.level;
    save.coins += amount;
    save.best = Math.max(save.best, amount);
    save.stars += this.run.stars;
    save.levelStars[L.n] = Math.max(save.levelStars[L.n] || 0, this.run.stars);
    save.level = L.n + 1;
    save.skinProgress = progress;
    let unlocked = null;
    if (progress >= 100) {
      const ps = progressSkin();
      if (ps) {
        own(ps.id);
        unlocked = ps;
      }
      save.skinProgress = 0;
    }
    persist();
    audio.play('buy');
    this.ui.setWallet(true);
    this.maybeMidgame(() => {
      this.loadLevel(save.level);
      this.toMenu(false);
      if (unlocked) this.unlockQueue.push(unlocked);
      this.unlockQueue.push(...checkAutoUnlocks());
      if (this.unlockQueue.length) this.ui.showUnlock(this.unlockQueue.shift());
    });
  }
}

const game = new Game();
window.__game = game;
game.boot().catch((e) => {
  console.error(e);
  const l = document.getElementById('loading');
  if (l) l.querySelector('span').textContent = 'Error: ' + e.message;
});
export { fmt };
