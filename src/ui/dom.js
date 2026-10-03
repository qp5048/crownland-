import { ease } from '../core/math.js';

/** Tiny hyperscript: h('div.card#id', { on: { click }, html, text, attrs, style }, ...children) */
export function h(spec, props = {}, ...children) {
  const m = /^([a-z0-9-]+)?((?:[.#][\w-]+)*)$/i.exec(spec);
  const el = document.createElement((m && m[1]) || 'div');
  if (m && m[2]) {
    for (const part of m[2].match(/[.#][\w-]+/g)) {
      if (part[0] === '.') el.classList.add(part.slice(1));
      else el.id = part.slice(1);
    }
  }
  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === 'on') for (const [ev, fn] of Object.entries(v)) el.addEventListener(ev, fn);
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'text') el.textContent = v;
      else if (k === 'class') el.className += ` ${v}`;
      else if (k === 'style') Object.assign(el.style, v);
      else if (k === 'dataset') Object.assign(el.dataset, v);
      else el.setAttribute(k, v === true ? '' : v);
    }
  }
  for (const c of children.flat()) {
    if (c === null || c === undefined || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Animated number with easing; returns a promise resolved at the end. */
export function countUp(el, from, to, dur = 900, fmt = (v) => Math.round(v), onStep) {
  return new Promise((resolve) => {
    const t0 = performance.now();
    let lastShown = null;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      const v = from + (to - from) * ease.outCubic(k);
      const shown = fmt(v);
      if (shown !== lastShown) { el.textContent = shown; lastShown = shown; onStep?.(v); }
      if (k < 1) requestAnimationFrame(step);
      else resolve();
    };
    if (dur <= 0) { el.textContent = fmt(to); resolve(); return; }
    requestAnimationFrame(step);
  });
}

export class Toasts {
  constructor(root) {
    this.root = h('div.toasts');
    root.append(this.root);
  }
  show(html, kind = '', ms = 2600) {
    const el = h(`div.toast${kind ? `.${kind}` : ''}`, { html, role: 'status' });
    this.root.append(el);
    while (this.root.children.length > 3) this.root.firstChild.remove();
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 320); }, ms);
  }
}

/**
 * One modal at a time with a queue, so reward popups chain nicely
 * (results → rank up → quest complete...).
 */
export class Modals {
  constructor(root, sounds) {
    this.root = root;
    this.sounds = sounds;
    this.queue = [];
    this.current = null;
  }
  get open() { return !!this.current; }

  /** show(content, { wide, dismissible, onClose }) → Promise resolved with the close value. */
  show(content, opts = {}) {
    return new Promise((resolve) => {
      this.queue.push({ content, opts, resolve });
      if (!this.current) this.next();
    });
  }

  next() {
    const job = this.queue.shift();
    if (!job) return;
    const { content, opts } = job;
    const wrap = h('div.modal-root.interactive');
    const backdrop = h('div.backdrop');
    const dialog = h(`div.dialog${opts.wide ? '.wide' : ''}`, { role: 'dialog', 'aria-modal': 'true' });
    const close = (value) => {
      if (!this.current || this.current.wrap !== wrap) return;
      this.current = null;
      wrap.classList.remove('show');
      document.removeEventListener('keydown', onKey);
      setTimeout(() => { wrap.remove(); this.next(); }, 260);
      opts.onClose?.(value);
      job.resolve(value);
    };
    const onKey = (e) => { if (e.key === 'Escape' && opts.dismissible !== false) { e.stopPropagation(); close(null); } };
    if (opts.dismissible !== false) {
      backdrop.addEventListener('click', () => close(null));
      dialog.append(h('button.x', { html: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>', 'aria-label': 'Close', on: { click: () => { this.sounds?.('click'); close(null); } } }));
    }
    dialog.append(typeof content === 'function' ? content(close) : content);
    wrap.append(backdrop, h('div.dialog-wrap', {}, dialog));
    this.root.append(wrap);
    this.current = { wrap, close };
    document.addEventListener('keydown', onKey);
    requestAnimationFrame(() => wrap.classList.add('show'));
    this.sounds?.('open');
  }

  closeAll() {
    this.queue.length = 0;
    this.current?.close(null);
  }
}

/** Little coins flying from an element to the wallet pill. */
export function flyCoins(fromEl, toEl, n = 8, coinSvg) {
  if (!fromEl || !toEl) return;
  const a = fromEl.getBoundingClientRect(), b = toEl.getBoundingClientRect();
  for (let k = 0; k < n; k++) {
    const el = h('div.fly-coin', { html: coinSvg });
    const sx = a.left + a.width / 2 + (Math.random() - 0.5) * 60, sy = a.top + a.height / 2 + (Math.random() - 0.5) * 30;
    el.style.left = `${sx}px`; el.style.top = `${sy}px`;
    document.body.append(el);
    setTimeout(() => {
      el.style.transform = `translate(${b.left + 14 - sx}px, ${b.top + 8 - sy}px) scale(0.7)`;
      el.style.opacity = '0.2';
    }, 30 + k * 45);
    setTimeout(() => el.remove(), 900 + k * 45);
  }
}

export function fmtPct(share, digits = 2) {
  return `${(share * 100).toFixed(digits)}%`;
}

export function fmtDuration(ms, t) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400), hh = Math.floor((s % 86400) / 3600), mm = Math.floor((s % 3600) / 60);
  const ru = t && t('common.on') === 'Вкл';
  if (d > 0) return ru ? `${d} д ${hh} ч` : `${d}d ${hh}h`;
  if (hh > 0) return ru ? `${hh} ч ${mm} мин` : `${hh}h ${mm}m`;
  return ru ? `${mm} мин` : `${mm}m`;
}
