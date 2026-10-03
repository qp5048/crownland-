import { ECONOMY } from '../config.js';
import { TAU } from '../core/math.js';
import { resolveLook } from '../cosmetics/catalog.js';
import { t } from '../i18n/i18n.js';
import { h, sleep } from './dom.js';
import { coin, icon } from './icons.js';

const TOTAL_STEPS = 5;

/** Follows a list of waypoints; when done, optionally asks for a new list. */
class ScriptedController {
  constructor(wps = [], { next } = {}) { this.wps = wps; this.next = next; }
  update(world, p, dt) {
    if (p.frozen) return;
    if (!this.wps.length && this.next) this.wps = this.next(world, p) || [];
    const wp = this.wps[0];
    if (!wp) { p.targetAngle = p.angle + dt * 2.2; return; } // idle: gentle circling
    if (Math.hypot(wp.x - p.x, wp.y - p.y) < 0.9) { this.wps.shift(); return; }
    p.targetAngle = Math.atan2(wp.y - p.y, wp.x - p.x);
  }
}

/** True if the straight segment a→b crosses no land of player `id`. */
function segmentClear(world, a, b, id) {
  const n = Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / 0.5);
  for (let k = 0; k <= n; k++) {
    const o = world.ownerAt(a.x + ((b.x - a.x) * k) / n, a.y + ((b.y - a.y) * k) / n);
    if (o === id || o < 0) return false;
  }
  return true;
}

/**
 * A rectangular loop beside the player: the first leg runs sideways (so the
 * trail passes near the player), the rest bends away from them. Never crosses
 * the player's land, so the dummy can't steal it.
 */
function loopBeside(world, p, target, out = 7, side = 5) {
  const clampPt = (x, y) => ({ x: Math.max(2.5, Math.min(world.size - 2.5, x)), y: Math.max(2.5, Math.min(world.size - 2.5, y)) });
  const vx0 = target.x - p.x, vy0 = target.y - p.y;
  const vl = Math.hypot(vx0, vy0) || 1;
  const vx = vx0 / vl, vy = vy0 / vl;          // towards the player
  for (let shrink = 1; shrink > 0.4; shrink -= 0.2) {
    for (const sgn of [1, -1]) {
      const tx = -vy * sgn, ty = vx * sgn;     // sideways
      let ex = p.x, ey = p.y;
      for (let d = 0; d < 20 && world.ownerAt(ex, ey) === p.id; d += 0.5) { ex += tx * 0.5; ey += ty * 0.5; }
      const e = { x: ex, y: ey };
      const a = clampPt(ex + tx * out * shrink, ey + ty * out * shrink);
      const b = clampPt(a.x - vx * side * shrink, a.y - vy * side * shrink);
      const c = clampPt(ex - vx * side * shrink, ey - vy * side * shrink);
      if (segmentClear(world, e, a, target.id) && segmentClear(world, a, b, target.id) && segmentClear(world, b, c, target.id)) {
        return [a, b, c, { x: p.x, y: p.y }];
      }
    }
  }
  return [];
}

/**
 * Interactive first-run tutorial: move → claim → see a trail cut → cut one
 * yourself → quick menu tour → starter coins.
 */
export class Tutorial {
  constructor(app) {
    this.app = app;
    this.layer = h('div.tut-layer');
    app.uiRoot.append(this.layer);
    this.active = false;
  }

  get human() { return this.match?.human; }

  start() {
    const app = this.app;
    this.active = true;
    this.step = -1;
    this.timer = 0;
    this.moved = 0;
    this.lastPos = null;
    this.match = app.startMatch('tutorial');
    this.human.invuln = 1e9; // can't die while learning
    this.match.on('humanCapture', (e) => this.onCapture(e));
    this.match.on('botDeath', (e) => this.onBotDeath(e));
    this.match.on('go', () => this.goTo(0));
    this.dim = h('div.tut-dim');
    this.pointer = h('div.pointer.anim', { html: icon(app.input.isTouchDevice ? 'hand' : 'cursor') });
    this.ring = h('div.tut-ring.hidden');
    this.edgeArrow = h('div.tut-arrow.hidden', { html: icon('chevron') });
    this.layer.replaceChildren(this.dim, this.ring, this.pointer, this.edgeArrow);
    this.pointer.classList.add('hidden');
  }

  coach({ title, text, ic = 'flag', celebrate = false, actions = [], bottom = false }) {
    this.coachEl?.remove();
    const step = Math.min(this.step + 1, TOTAL_STEPS);
    this.coachEl = h(`div.coach${celebrate ? '.celebrate' : ''}${bottom ? '.bottom' : ''}`, {},
      h('div.c-ic', { html: icon(ic) }),
      h('div.c-body', {},
        h('div.c-step', { text: t('tut.step', { n: step, total: TOTAL_STEPS }) }),
        h('h4', { text: title }),
        h('p', { text }),
        h('div.c-actions', {}, ...actions,
          h('button.c-skip', { text: t('tut.skip'), on: { click: () => { this.app.sfx('click'); this.skip(); } } }))));
    this.layer.append(this.coachEl);
  }

  goTo(step) {
    this.step = step;
    this.timer = 0;
    const app = this.app;
    const touch = app.input.isTouchDevice;
    this.pointer.classList.add('hidden');
    this.ring.classList.add('hidden');
    this.edgeArrow.classList.add('hidden');
    this.dim.classList.remove('on');
    if (step === 0) {
      this.coach({ title: t('tut.move.title'), text: touch ? t('tut.move.touch') : t('tut.move.desktop'), ic: touch ? 'hand' : 'cursor' });
      this.pointer.classList.remove('hidden');
    } else if (step === 1) {
      this.coach({ title: t('tut.claim.title'), text: t('tut.claim.text'), ic: 'map' });
      this.dim.classList.add('on');
    } else if (step === 2) {
      this.setupDemo();
      this.coach({ title: t('tut.danger.title'), text: t('tut.danger.text'), ic: 'sword' });
      this.dim.classList.add('on');
    } else if (step === 3) {
      this.setupPrey();
      this.coach({ title: t('tut.kill.title'), text: t('tut.kill.text'), ic: 'sword' });
      this.ring.classList.remove('hidden');
      this.pointer.classList.remove('hidden');
    } else if (step === 4) {
      this.menuTour();
    }
  }

  celebrate(text, then) {
    const app = this.app;
    const p = this.human;
    app.sfx('reward');
    app.renderer.particles.confetti(p.x, p.y - 1, 1, 70);
    app.renderer.camera.shake(4);
    this.coach({ title: '★', text, ic: 'star', celebrate: true });
    this.pending = setTimeout(then, 2300);
  }

  onCapture(e) {
    if (this.step === 1 && e.cells >= 3) {
      this.step = 1.5;
      this.dim.classList.remove('on');
      this.celebrate(t('tut.claim.done'), () => this.goTo(2));
    }
  }

  onBotDeath({ victim, killer }) {
    if (this.step === 2 && (victim === this.demoA || victim === this.demoB)) {
      this.step = 2.5;
      this.pending = setTimeout(() => {
        this.human.frozen = false;
        this.human.speedMul = 1;
        this.match.cameraTarget = null;
        this.goTo(3);
      }, 1800);
    }
    if (this.step === 3 && victim === this.prey) {
      if (killer === this.human) {
        this.step = 3.5;
        this.celebrate(t('tut.kill.done'), () => this.goTo(4));
      } else {
        this.setupPrey(); // the dummy tripped over itself: send another one
      }
    }
  }

  /**
   * The free point closest to (px, py): nobody's land or trail within 5 cells,
   * at least 7 cells from the player (and from `avoid` points), inside the map.
   */
  freeSpot(px, py, avoid = []) {
    const w = this.match.world, g = w.grid, size = w.size, me = this.human;
    const clear = (x, y) => {
      if (x < 6 || y < 6 || x > size - 6 || y > size - 6) return false;
      if (Math.hypot(x - me.x, y - me.y) < 7) return false;
      for (const a of avoid) if (Math.hypot(x - a.x, y - a.y) < 7) return false;
      for (let dy = -5; dy <= 5; dy++) {
        for (let dx = -5; dx <= 5; dx++) {
          if (dx * dx + dy * dy > 25) continue;
          const cx = Math.floor(x) + dx, cy = Math.floor(y) + dy;
          if (!g.inside(cx, cy)) continue;
          const i = g.idx(cx, cy);
          if (g.owner[i] || g.trail[i]) return false;
        }
      }
      return true;
    };
    for (let r = 0; r <= 30; r += 1.5) {
      const steps = r ? 20 : 1;
      for (let k = 0; k < steps; k++) {
        const a = (k * TAU) / steps;
        const x = px + Math.cos(a) * r, y = py + Math.sin(a) * r;
        if (clear(x, y)) return { x, y };
      }
    }
    // a crowded map: take the emptiest of a few candidates rather than the player's land
    let best = null, bestCost = Infinity;
    for (let k = 0; k < 60; k++) {
      const x = 6 + Math.random() * (size - 12), y = 6 + Math.random() * (size - 12);
      const cost = w.spawnCost(x, y, 2.2) + (Math.hypot(x - me.x, y - me.y) < 7 ? 1e6 : 0);
      if (cost < bestCost) { bestCost = cost; best = { x, y }; }
    }
    return best;
  }

  /** Unit vector pointing from the player towards the roomier part of the map. */
  roomyDirection() {
    const size = this.match.world.size, me = this.human;
    const dx = size / 2 - me.x, dy = size / 2 - me.y;
    const l = Math.hypot(dx, dy);
    if (l < 4) return { x: 1, y: 0 };
    return { x: dx / l, y: dy / l };
  }

  addDummy(x, y, controller, speedMul) {
    const w = this.match.world;
    const p = w.addPlayer({ name: t('tut.dummy'), look: resolveLook({ skin: 'slate', hat: 'none', trail: 'classic' }), controller }, { x, y, radius: 2.2 });
    if (p) p.speed *= speedMul;
    return p;
  }

  setupDemo() {
    const h0 = this.human;
    h0.frozen = true;
    h0.speedMul = 0.0001;
    // stage the show in free space on the roomy side, never on the player's land
    const u = this.roomyDirection();
    const pv = { x: -u.y, y: u.x };
    const a = this.freeSpot(h0.x + u.x * 11 - pv.x * 5, h0.y + u.y * 11 - pv.y * 5);
    const b = this.freeSpot(a.x + pv.x * 11, a.y + pv.y * 11, [a]);
    this.demoA = this.addDummy(a.x, a.y, new ScriptedController([]), 0.75);
    const A = this.demoA;
    A.look = resolveLook({ skin: 'tangerine', hat: 'none', trail: 'classic' });
    // A walks a loop away from the player, towards B's side
    const ux = Math.cos(Math.atan2(u.y, u.x)), uy = Math.sin(Math.atan2(u.y, u.x));
    const clampPt = (x, y) => ({ x: Math.max(3, Math.min(this.match.world.size - 3, x)), y: Math.max(3, Math.min(this.match.world.size - 3, y)) });
    A.controller.wps = [
      clampPt(a.x + ux * 6, a.y + uy * 6),
      clampPt(a.x + ux * 6 + pv.x * 5, a.y + uy * 6 + pv.y * 5),
      clampPt(a.x + pv.x * 5 - ux * 1, a.y + pv.y * 5 - uy * 1),
      { x: a.x, y: a.y },
    ];
    this.demoB = this.addDummy(b.x, b.y, new ScriptedController([]), 0.95);
    this.demoB.look = resolveLook({ skin: 'grape', hat: 'none', trail: 'classic' });
    this.match.cameraTarget = { x: (a.x + b.x) / 2 + ux * 3, y: (a.y + b.y) / 2 + uy * 3 };
    this.demoBWait = true;
  }

  setupPrey() {
    const w = this.match.world;
    const h0 = this.human;
    // remove the demo actors so the arena stays readable
    for (const d of [this.demoA, this.demoB]) if (d && w.players.includes(d)) w.removePlayer(d);
    this.demoA = this.demoB = null;
    const u = this.roomyDirection();
    const s = this.freeSpot(h0.x + u.x * 10, h0.y + u.y * 10);
    const ctrl = new ScriptedController([], { next: (world, p) => loopBeside(world, p, this.human, 7, 5) });
    this.prey = this.addDummy(s.x, s.y, ctrl, 0.55);
  }

  /** Called every simulation tick. */
  update(dt) {
    if (!this.active || !this.match) return;
    this.timer += dt;
    const p = this.human;
    if (this.step === 0 && p) {
      if (this.lastPos) this.moved += Math.hypot(p.x - this.lastPos.x, p.y - this.lastPos.y);
      this.lastPos = { x: p.x, y: p.y };
      if (this.moved > 7 && this.timer > 1.2) this.goTo(1);
    }
    if (this.step === 2 && this.demoA && this.demoB && this.demoBWait && this.demoA.trail.length >= 7) {
      // B goes for the middle of A's trail
      this.demoBWait = false;
      const w = this.match.world.grid.w;
      const c = this.demoA.trail[Math.floor(this.demoA.trail.length / 2)];
      const tx = (c % w) + 0.5, ty = ((c / w) | 0) + 0.5;
      const B = this.demoB;
      B.controller.wps = [{ x: tx + (tx - B.x) * 0.3, y: ty + (ty - B.y) * 0.3 }, { x: B.x, y: B.y }];
    }
  }

  /** Called every rendered frame to keep the overlay glued to the world. */
  frame() {
    if (!this.active || !this.match || this.step >= 4) return;
    const r = this.app.renderer;
    const p = this.human;
    if (!p) return;
    const ps = r.worldToScreen(p.rx ?? p.x, p.ry ?? p.y);
    if (this.step === 0) {
      const off = 70 + Math.sin(performance.now() / 300) * 10;
      this.pointer.style.transform = `translate(${ps.x + off}px, ${ps.y + 20}px)`;
    }
    if (this.step === 1 || this.step === 2) {
      let c = ps;
      if (this.step === 2 && this.match.cameraTarget) c = r.worldToScreen(this.match.cameraTarget.x, this.match.cameraTarget.y);
      this.dim.style.setProperty('--x', `${c.x}px`);
      this.dim.style.setProperty('--y', `${c.y}px`);
      this.dim.style.setProperty('--r', `${Math.max(140, r.camera.cellPx * (this.step === 2 ? 9 : 6))}px`);
    }
    if (this.step === 3 && this.prey && this.prey.alive) {
      const target = this.prey.trail.length
        ? (() => { const w = this.match.world.grid.w; const c = this.prey.trail[Math.floor(this.prey.trail.length / 2)]; return r.worldToScreen((c % w) + 0.5, ((c / w) | 0) + 0.5); })()
        : r.worldToScreen(this.prey.rx ?? this.prey.x, this.prey.ry ?? this.prey.y);
      const vw = window.innerWidth, vh = window.innerHeight, m = 56;
      const off = target.x < m || target.y < m || target.x > vw - m || target.y > vh - m;
      this.ring.classList.toggle('hidden', off);
      this.pointer.classList.toggle('hidden', off);
      this.edgeArrow.classList.toggle('hidden', !off);
      if (off) {
        // clamp an arrow to the screen edge, pointing at the dummy
        const cx = vw / 2, cy = vh / 2;
        const dx = target.x - cx, dy = target.y - cy;
        const k = Math.min((vw / 2 - m) / Math.abs(dx || 1e-6), (vh / 2 - m) / Math.abs(dy || 1e-6));
        const ax = cx + dx * k, ay = cy + dy * k;
        this.edgeArrow.style.transform = `translate(${ax - 28}px, ${ay - 28}px) rotate(${Math.atan2(dy, dx)}rad)`;
      } else {
        this.ring.style.left = `${target.x}px`;
        this.ring.style.top = `${target.y}px`;
        this.pointer.style.transform = `translate(${target.x + 18}px, ${target.y + 14}px)`;
      }
    } else if (this.edgeArrow) {
      this.edgeArrow.classList.add('hidden');
    }
  }

  async menuTour() {
    const app = this.app;
    this.cleanupLayer();
    app.endMatch();
    app.showMenu();
    await sleep(500);
    const spotEl = h('div.spot');
    this.layer.append(spotEl);
    const steps = [
      { el: app.menu.tileShop, text: t('tut.menu.shop'), ic: 'cart' },
      { el: app.menu.rankedCard, text: t('tut.menu.ranked'), ic: 'trophy' },
      { el: app.menu.tilePass, text: t('tut.menu.pass'), ic: 'ticket' },
    ];
    for (const s of steps) {
      if (!this.active) return;
      const r = s.el.getBoundingClientRect();
      Object.assign(spotEl.style, { left: `${r.left - 6}px`, top: `${r.top - 6}px`, width: `${r.width + 12}px`, height: `${r.height + 12}px` });
      await new Promise((resolve) => {
        this.coach({ title: '', text: s.text, ic: s.ic, bottom: r.top > window.innerHeight / 2 ? false : true, actions: [h('button.btn.small', { text: t('common.next'), on: { click: () => { app.sfx('click'); resolve(); } } })] });
        this.coachEl.querySelector('h4').remove();
      });
    }
    spotEl.remove();
    if (!this.active) return;
    await new Promise((resolve) => {
      this.coach({
        title: '',
        text: t('tut.menu.reward', { n: ECONOMY.tutorialReward }),
        ic: 'gift',
        celebrate: true,
        actions: [h('button.btn.gold', { html: `${coin()} +${ECONOMY.tutorialReward}`, on: { click: (e) => { app.sfx('buy'); app.celebrateAt(e.currentTarget, true); resolve(); } } })],
      });
      this.coachEl.querySelector('h4').remove();
    });
    this.finish();
  }

  cleanupLayer() {
    clearTimeout(this.pending);
    this.layer.replaceChildren();
    this.coachEl = null;
  }

  skip() {
    if (!this.active) return;
    const inMatch = this.step < 4;
    this.cleanupLayer();
    if (inMatch) { this.app.endMatch(); this.app.showMenu(); }
    this.finish();
  }

  finish() {
    if (!this.active) return;
    this.active = false;
    this.cleanupLayer();
    this.match = null;
    this.app.completeTutorial();
  }
}
