import { formatTime } from '../core/math.js';
import { skinPalette } from '../cosmetics/draw.js';
import { Minimap } from '../game/renderer.js';
import { t } from '../i18n/i18n.js';
import { h } from './dom.js';
import { icon } from './icons.js';

/** In-match overlay: score card, leaderboard, minimap, boost button, kill feed. */
export class Hud {
  constructor(root, { onPause, onBoost }) {
    this.el = h('section#hud.screen');
    this.modeTag = h('span.mode-tag');
    this.pct = h('strong', { html: '0.00<small>%</small>' });
    this.bar = h('i');
    this.kills = h('span');
    this.time = h('span');
    this.landLabel = h('span');
    this.score = h('div.score', {},
      h('div.s-top', {}, this.landLabel, this.modeTag),
      this.pct,
      h('div.s-bar', {}, this.bar),
      h('div.s-meta', {}, this.kills, this.time));
    this.lbTitle = h('h3');
    this.lbList = h('ol');
    this.lb = h('aside.lb', {}, this.lbTitle, this.lbList);
    this.mmCanvas = h('canvas');
    this.minimapEl = h('div.minimap', {}, this.mmCanvas);
    this.minimap = new Minimap(this.mmCanvas);
    this.pauseBtn = h('button.icon-btn.interactive', { html: icon('pause'), on: { click: onPause } });
    this.btns = h('div.hud-btns', {}, this.pauseBtn);
    this.boostLabel = h('small');
    this.boostBtn = h('button.boost-btn.interactive.hidden', { html: icon('bolt'), on: { click: onBoost } }, this.boostLabel);
    this.feedEl = h('div.feed');
    this.countEl = h('div.countdown');
    this.el.append(this.score, this.lb, this.minimapEl, this.btns, this.boostBtn, this.feedEl, this.countEl);
    root.append(this.el);
    this.lbTimer = 0;
    this.lastPct = '';
    this.lastTime = -1;
    this.lastKills = -1;
  }

  show(match, isTouch) {
    this.match = match;
    this.el.classList.add('show');
    this.relabel(isTouch);
    this.feedEl.innerHTML = '';
    this.countEl.innerHTML = '';
    this.boostBtn.classList.toggle('hidden', !match.boosts.speed);
    this.boostBtn.classList.remove('used');
    this.boostBtn.classList.add('ready');
    this.lastPct = ''; this.lastTime = -1; this.lastKills = -1;
    requestAnimationFrame(() => this.minimap.resize());
    this.update(0, true);
  }

  relabel(isTouch) {
    const m = this.match;
    this.landLabel.textContent = t('hud.land');
    this.lbTitle.textContent = t('hud.leaderboard');
    this.pauseBtn.title = t('hud.pause');
    this.pauseBtn.setAttribute('aria-label', t('hud.pause'));
    this.boostLabel.textContent = isTouch ? t('hud.boost') : `${t('hud.boost')} · Space`;
    if (m) {
      this.modeTag.textContent = m.ranked ? t('menu.ranked') : m.mode === 'tutorial' ? '★' : t('menu.classic');
      this.modeTag.classList.toggle('ranked', m.ranked);
    }
  }

  hide() { this.el.classList.remove('show'); this.match = null; }

  resize() { this.minimap.resize(); }

  boostUsed() { this.boostBtn.classList.add('used'); this.boostBtn.classList.remove('ready'); }

  countdown(n) {
    this.countEl.innerHTML = '';
    this.countEl.append(h('span', { text: n }));
  }

  go() {
    this.countEl.innerHTML = '';
    this.countEl.append(h('span', { text: t('hud.go'), style: { fontSize: '0.7em' } }));
    setTimeout(() => { this.countEl.innerHTML = ''; }, 900);
  }

  feed(kind, data = {}) {
    let html;
    let cls = '';
    if (kind === 'kill') { html = `${icon('sword')}${esc(t('toast.killed', { name: data.name }))}`; cls = 'good'; }
    else if (kind === 'transfer') { html = `${icon('crown')}${esc(t('toast.transfer', { name: data.name }))}`; cls = 'gold'; }
    else if (kind === 'shield') { html = `${icon('shield')}${esc(t('toast.shield'))}`; cls = 'good'; }
    else if (kind === 'speed') { html = `${icon('bolt')}${esc(t('toast.speed'))}`; cls = 'gold'; }
    else if (kind === 'streak') { html = `${icon('bolt')}${esc(t(`feed.streak${Math.min(4, data.n)}`, { n: data.coins }))}`; cls = 'gold big'; }
    else if (kind === 'kingKill') { html = `${icon('crown')}${esc(t('feed.kingKill', { name: data.name, n: data.coins }))}`; cls = 'gold big'; }
    else if (kind === 'kingMe') { html = `${icon('crown')}${esc(t('feed.kingMe'))}`; cls = 'gold'; }
    else if (kind === 'record') { html = `${icon('trophy')}${esc(t('feed.record'))}`; cls = 'good big'; }
    else if (kind === 'revived') { html = `${icon('refresh')}${esc(t('toast.revived'))}`; cls = 'good'; }
    else html = esc(data.text || '');
    const el = h(`div.feed-item${cls ? `.${cls.split(' ').join('.')}` : ''}`, { html });
    this.feedEl.append(el);
    while (this.feedEl.children.length > 3) this.feedEl.firstChild.remove();
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 360); }, 2400);
  }

  update(dt, force = false) {
    const m = this.match;
    if (!m || !m.human) return;
    const w = m.world, g = w.grid, me = m.human;
    const share = g.counts[me.id] / g.n;
    const pct = (share * 100).toFixed(2);
    if (pct !== this.lastPct) {
      this.lastPct = pct;
      this.pct.innerHTML = `${pct}<small>%</small>`;
      this.bar.style.width = `${Math.min(100, share * 100 * 2.5)}%`;
    }
    if (me.kills !== this.lastKills) {
      this.lastKills = me.kills;
      this.kills.innerHTML = `${icon('sword')}${me.kills}`;
    }
    const secs = Math.floor(m.aliveTime + (m.state === 'playing' ? w.time - (m.aliveSince ?? w.time) : 0));
    if (secs !== this.lastTime) { this.lastTime = secs; this.time.innerHTML = `${icon('clock')}${formatTime(secs)}`; }

    this.lbTimer -= dt;
    if (this.lbTimer <= 0 || force) {
      this.lbTimer = 0.3;
      this.renderLeaderboard(m);
    }
    this.minimap.update(w, dt, me, m.renderer);
  }

  renderLeaderboard(m) {
    const rows = m.world.leaderboard();
    const myIndex = rows.findIndex((r) => r.player === m.human);
    const top = rows.slice(0, 5);
    const frag = document.createDocumentFragment();
    const maxShare = Math.max(0.0001, rows[0]?.share || 0);
    const add = (r, place) => {
      const pal = skinPalette(r.player.look.skin);
      const li = h(`li${r.player === m.human ? '.me' : ''}`, {},
        h('span.bar', { style: { width: `${(r.share / maxShare) * 100}%`, background: pal.mid } }),
        h('span.pl', { text: place }),
        h('span.sw', { style: { background: pal.mid } }),
        h('span.nm', { text: r.player === m.human ? `${r.player.name}` : r.player.name }),
        h('span.pc', { text: `${(r.share * 100).toFixed(1)}%` }));
      frag.append(li);
    };
    top.forEach((r, k) => add(r, k + 1));
    if (myIndex >= 5) {
      frag.append(h('li.sep'));
      add(rows[myIndex], myIndex + 1);
    }
    this.lbList.replaceChildren(frag);
  }
}

export function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
