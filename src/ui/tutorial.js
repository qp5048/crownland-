import { ECONOMY } from '../config.js';
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

/** A rectangular loop leaving the land towards (tx, ty) and coming back. */
function loopTowards(world, p, tx, ty, out = 6, side = 6) {
  const th = Math.atan2(ty - p.y, tx - p.x);
  const dx = Math.cos(th), dy = Math.sin(th);
  let ex = p.x, ey = p.y;
  for (let d = 0; d < 20 && world.ownerAt(ex, ey) === p.id; d += 0.5) { ex += dx * 0.5; ey += dy * 0.5; }
  const px = -dy, py = dx;
  const clampPt = (x, y) => ({ x: Math.max(2.5, Math.min(world.size - 2.5, x)), y: Math.max(2.5, Math.min(world.size - 2.5, y)) });
  const a = clampPt(ex + dx * out, ey + dy * out);
  const b = clampPt(a.x + px * side, a.y + py * side);
  const c = clampPt(ex + px * side - dx * 1.5, ey + py * side - dy * 1.5);
  return [a, b, c, { x: p.x, y: p.y }];
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

  spot(dx, dy) {
    const size = this.match.world.size;
    const p = this.human;
    return { x: Math.max(6, Math.min(size - 6, p.x + dx)), y: Math.max(6, Math.min(size - 6, p.y + dy)) };
  }

  addDummy(x, y, controller, speedMul) {
    const w = this.match.world;
    const p = w.addPlayer({ name: t('tut.dummy'), look: resolveLook({ skin: 'slate', hat: 'none', trail: 'classic' }), controller }, { x, y, radius: 2.2 });
    if (p) p.speed *= speedMul;
    return p;
  }

  setupDemo() {
    const w = this.match.world;
    const h0 = this.human;
    h0.frozen = true;
    h0.speedMul = 0.0001;
    const size = w.size;
    // put the show on the side of the map with more room
    const sx = h0.x < size / 2 ? 1 : -1;
    const a = this.spot(9 * sx, -5);
    const b = this.spot(9 * sx, 6);
    this.demoA = this.addDummy(a.x, a.y, new ScriptedController([]), 0.6);
    const A = this.demoA;
    A.look = resolveLook({ skin: 'tangerine', hat: 'none', trail: 'classic' });
    A.controller.wps = [{ x: a.x + 6 * sx, y: a.y }, { x: a.x + 6 * sx, y: a.y + 5 }, { x: a.x - 2 * sx, y: a.y + 5 }, { x: a.x, y: a.y }];
    this.demoB = this.addDummy(b.x, b.y, new ScriptedController([]), 0.8);
    this.demoB.look = resolveLook({ skin: 'grape', hat: 'none', trail: 'classic' });
    this.match.cameraTarget = { x: (a.x + b.x) / 2 + 2 * sx, y: (a.y + b.y) / 2 };
    this.demoBWait = true;
  }

  setupPrey() {
    const w = this.match.world;
    const h0 = this.human;
    const size = w.size;
    const sx = h0.x < size / 2 ? 1 : -1;
    const s = this.spot(10 * sx, h0.y < size / 2 ? 6 : -6);
    // remove the demo actors so the arena stays readable
    for (const d of [this.demoA, this.demoB]) if (d && w.players.includes(d)) w.removePlayer(d);
    this.demoA = this.demoB = null;
    const ctrl = new ScriptedController([], { next: (world, p) => loopTowards(world, p, this.human.x, this.human.y, 7, 7) });
    this.prey = this.addDummy(s.x, s.y, ctrl, 0.42);
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
