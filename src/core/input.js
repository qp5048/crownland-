/**
 * Unified steering input:
 *  - mouse / trackpad: head towards the cursor;
 *  - keyboard: WASD / arrows (8 directions), Space = boost, Esc/P = pause;
 *  - touch: floating virtual joystick (drag anywhere), quick swipes also work.
 * The most recently used device wins.
 */
export class Input {
  constructor(canvas, joystickEl) {
    this.canvas = canvas;
    this.joy = joystickEl;
    this.knob = joystickEl?.querySelector('.joy-knob');
    this.mode = 'mouse';
    this.mouse = { x: 0, y: 0, seen: false };
    this.keys = new Set();
    this.touch = null;      // { id, ox, oy, x, y }
    this.touchAngle = null;
    this.enabled = false;
    this.handlers = { boost: [], pause: [], any: [] };
    this.isTouchDevice = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    this.bind();
  }

  on(type, fn) { this.handlers[type].push(fn); }
  fire(type, e) { for (const fn of this.handlers[type]) fn(e); }

  bind() {
    const c = this.canvas;
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      const dx = e.clientX - this.mouse.x, dy = e.clientY - this.mouse.y;
      this.mouse.x = e.clientX; this.mouse.y = e.clientY;
      if (!this.mouse.seen || dx * dx + dy * dy > 9) { this.mode = 'mouse'; this.mouse.seen = true; }
    }, { passive: true });

    c.addEventListener('touchstart', (e) => {
      this.fire('any', e);
      if (!this.enabled || this.touch) return;
      const t = e.changedTouches[0];
      this.touch = { id: t.identifier, ox: t.clientX, oy: t.clientY, x: t.clientX, y: t.clientY };
      this.mode = 'touch';
      this.showJoy(true);
      e.preventDefault();
    }, { passive: false });
    c.addEventListener('touchmove', (e) => {
      if (!this.touch) return;
      for (const t of e.changedTouches) {
        if (t.identifier !== this.touch.id) continue;
        this.touch.x = t.clientX; this.touch.y = t.clientY;
        let dx = t.clientX - this.touch.ox, dy = t.clientY - this.touch.oy;
        const len = Math.hypot(dx, dy);
        const maxR = 52;
        if (len > 10) this.touchAngle = Math.atan2(dy, dx);
        // drag the joystick base along when the finger goes far, like most .io games
        if (len > maxR * 1.6) {
          this.touch.ox = t.clientX - (dx / len) * maxR * 1.6;
          this.touch.oy = t.clientY - (dy / len) * maxR * 1.6;
          dx = t.clientX - this.touch.ox; dy = t.clientY - this.touch.oy;
        }
        this.updateJoy(dx, dy, maxR);
      }
      e.preventDefault();
    }, { passive: false });
    const end = (e) => {
      if (!this.touch) return;
      for (const t of e.changedTouches) if (t.identifier === this.touch.id) { this.touch = null; this.showJoy(false); }
    };
    c.addEventListener('touchend', end);
    c.addEventListener('touchcancel', end);
    c.addEventListener('mousedown', (e) => this.fire('any', e));

    window.addEventListener('keydown', (e) => {
      this.fire('any', e);
      const k = e.code;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(k)) {
        this.keys.add(k);
        this.mode = 'keys';
        if (this.enabled) e.preventDefault();
      } else if (k === 'Space') {
        if (this.enabled) { e.preventDefault(); if (!e.repeat) this.fire('boost'); }
      } else if (k === 'Escape' || k === 'KeyP') {
        if (!e.repeat) this.fire('pause');
      }
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => { this.keys.clear(); this.touch = null; this.showJoy(false); });
  }

  showJoy(on) {
    if (!this.joy) return;
    if (on && this.touch) {
      this.joy.style.transform = `translate(${this.touch.ox}px, ${this.touch.oy}px)`;
      this.updateJoy(0, 0, 52);
    }
    this.joy.classList.toggle('on', on);
  }

  updateJoy(dx, dy, maxR) {
    if (!this.knob) return;
    const len = Math.hypot(dx, dy);
    const k = len > maxR ? maxR / len : 1;
    this.knob.style.transform = `translate(${dx * k}px, ${dy * k}px)`;
    if (this.touch) this.joy.style.transform = `translate(${this.touch.ox}px, ${this.touch.oy}px)`;
  }

  keyAngle() {
    const k = this.keys;
    let x = 0, y = 0;
    if (k.has('ArrowLeft') || k.has('KeyA')) x -= 1;
    if (k.has('ArrowRight') || k.has('KeyD')) x += 1;
    if (k.has('ArrowUp') || k.has('KeyW')) y -= 1;
    if (k.has('ArrowDown') || k.has('KeyS')) y += 1;
    if (!x && !y) return null;
    return Math.atan2(y, x);
  }

  /**
   * Desired heading for a player drawn at (sx, sy) CSS pixels, or null to keep
   * the current one.
   */
  targetAngle(sx, sy) {
    if (!this.enabled) return null;
    if (this.mode === 'keys') return this.keyAngle();
    if (this.mode === 'touch') return this.touchAngle;
    if (!this.mouse.seen) return null;
    const dx = this.mouse.x - sx, dy = this.mouse.y - sy;
    if (dx * dx + dy * dy < 100) return null;
    return Math.atan2(dy, dx);
  }

  reset() {
    this.keys.clear();
    this.touch = null;
    this.touchAngle = null;
    this.showJoy(false);
  }
}
