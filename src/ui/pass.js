import { ADS } from '../config.js';
import { getItem } from '../cosmetics/catalog.js';
import {
  addPassXP, canClaim, claim, FREE_TRACK, passLevel, PASS_LEVELS, PREMIUM_TRACK, registerPremiumAdView, seasonInfo,
} from '../battlepass/pass.js';
import { claimQuest } from '../battlepass/quests.js';
import { itemName, t } from '../i18n/i18n.js';
import { fmtDuration, h } from './dom.js';
import { coin, icon } from './icons.js';
import { drawThumb } from './preview.js';

const BOOST_ICON = { bigStart: 'expand', shield: 'shield', speed: 'bolt', magnet: 'magnet' };
const QUEST_ICON = { share: 'map', kills: 'sword', matches: 'play', survive: 'clock', rankedTop: 'trophy', captures: 'flag', coins: 'star' };

export function questText(q) {
  const n = q.type === 'survive' ? Math.round(q.target / 60) : q.target;
  return t(`quest.${q.type}`, { n });
}

export function rewardLabel(r) {
  if (r.type === 'coins') return t('common.coins', { n: r.amount });
  if (r.type === 'boost') return `${t(`boost.${r.id}`)} ×${r.n}`;
  return itemName(getItem(r.kind, r.id));
}

export class PassPage {
  constructor(root, app) {
    this.app = app;
    this.el = h('section.screen.page.interactive');
    root.append(this.el);
    this.timer = 0;
    this.build();
  }

  build() {
    const app = this.app;
    this.title = h('h2');
    this.coinsEl = h('span');
    this.el.append(h('header.page-head', {},
      h('button.icon-btn', { html: icon('back'), on: { click: () => { app.sfx('click'); app.closePages(); } } }),
      this.title, h('div.pill', { html: coin() }, this.coinsEl)));
    this.hero = h('div.pass-hero');
    this.prem = h('div.prem-card');
    this.track = h('div.track');
    this.labels = h('div.track-labels');
    this.questsEl = h('div.quests');
    this.questHead = h('h3', { style: { margin: '4px 0 0', fontSize: '18px', fontWeight: 900 } });
    this.body = h('div.page-body', { style: { overflowY: 'auto', touchAction: 'pan-y' } },
      h('div.pass', {},
        h('div.pass-top', {}, this.hero, this.prem),
        h('div.track-wrap', {}, this.labels, this.track),
        this.questHead,
        this.questsEl));
    this.el.append(this.body);
  }

  open(focusQuests = false) {
    this.el.classList.add('show');
    this.render(true);
    clearInterval(this.timer);
    this.timer = setInterval(() => this.renderHero(), 30_000);
    if (focusQuests) setTimeout(() => this.questHead.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
  }

  close() {
    this.el.classList.remove('show');
    clearInterval(this.timer);
  }

  get isOpen() { return this.el.classList.contains('show'); }

  render(scrollToCurrent = false) {
    this.title.textContent = t('pass.title');
    this.coinsEl.textContent = this.app.state.coins.toLocaleString();
    this.renderHero();
    this.renderPremium();
    this.renderTrack(scrollToCurrent);
    this.renderQuests();
  }

  renderHero() {
    const s = this.app.state;
    const info = seasonInfo();
    const lvl = passLevel(s.pass.xp);
    this.hero.replaceChildren(
      h('div.pass-lvl', { text: lvl.level }),
      h('div.pass-meta', {},
        h('h3', { text: t('pass.season', { n: info.season }) }),
        h('div.sub', {}, h('span', { html: `${icon('clock')}` }), h('span', { text: t('pass.endsIn', { time: fmtDuration(info.msLeft) }) }),
          h('span', { text: s.pass.premium ? `★ ${t('pass.premiumActive')}` : '' })),
        h('div.xpbar', {}, h('i', { style: { width: `${lvl.progress * 100}%` } })),
        h('div.xptext', { text: lvl.level >= PASS_LEVELS ? t('pass.maxed') : `${t('pass.level', { n: lvl.level + 1 })} · ${lvl.into} / ${lvl.need} XP` })));
    const ic = this.hero.querySelector('.sub .ic');
    if (ic) { ic.style.width = '15px'; ic.style.height = '15px'; ic.style.verticalAlign = '-3px'; }
  }

  renderPremium() {
    const s = this.app.state;
    const dots = h('div.prem-dots');
    for (let k = 0; k < ADS.premiumPassViews; k++) dots.append(h(`i${k < s.pass.adViews || s.pass.premium ? '.on' : ''}`));
    if (s.pass.premium) {
      this.prem.replaceChildren(h('b', { html: `${icon('star')}${t('pass.unlocked')}` }), dots, h('p', { text: t('pass.premiumActive') }));
      return;
    }
    this.prem.replaceChildren(
      h('b', { html: `${icon('lock')}${t('pass.unlock')}` }),
      h('p', { text: t('pass.unlockDesc', { n: ADS.premiumPassViews }) }),
      dots,
      h('button.btn.purple.small', {
        html: `${icon('video', 'ad-ic')}${t('pass.watch', { v: s.pass.adViews, n: ADS.premiumPassViews })}`,
        on: { click: () => this.watchForPremium() },
      }));
  }

  async watchForPremium() {
    const app = this.app;
    app.sfx('click');
    const ok = await app.ads.rewarded('pass');
    if (!ok) { app.toast(t('toast.noAd'), 'bad'); return; }
    const res = registerPremiumAdView(app.state);
    app.persist(true);
    if (res.unlocked) {
      app.sfx('rankup');
      app.toast(`${icon('star')}${t('pass.unlocked')}`, 'good');
      app.gameplay.happytime();
    } else {
      app.sfx('reward');
      app.toast(t('toast.adThanks'), 'good');
    }
    this.render();
  }

  rewardCard(track, level, reward) {
    const s = this.app.state;
    const reached = passLevel(s.pass.xp).level >= level;
    const claimed = (track === 'premium' ? s.pass.claimedPrem : s.pass.claimedFree).includes(level);
    const claimable = canClaim(s, track, level);
    const locked = track === 'premium' && !s.pass.premium;
    let visual;
    let cv = null;
    if (reward.type === 'item') {
      cv = h('canvas');
      visual = cv;
    } else if (reward.type === 'coins') visual = h('span.rw-ic', { html: coin() });
    else visual = h('span.rw-ic', { html: icon(BOOST_ICON[reward.id]) });
    const card = h(`button.reward${track === 'premium' ? '.prem' : ''}${locked ? '.locked' : ''}${claimable ? '.claimable' : ''}${claimed ? '.claimed' : ''}`, {
      title: rewardLabel(reward),
      on: { click: (e) => this.claim(track, level, e.currentTarget) },
    }, visual, h('span', { text: rewardLabel(reward) }));
    if (locked) card.append(h('span.lock', { html: icon('lock') }));
    if (claimed) card.append(h('span.done', { html: icon('check') }));
    if (reward.type === 'item' && getItem(reward.kind, reward.id)?.pass) card.append(h('span.ex', { text: t('pass.exclusive') }));
    if (!reached) card.style.opacity = '0.75';
    return { card, cv, item: reward.type === 'item' ? getItem(reward.kind, reward.id) : null };
  }

  renderTrack(scrollToCurrent) {
    const s = this.app.state;
    const lvl = passLevel(s.pass.xp).level;
    this.labels.replaceChildren(h('span.lf', { text: t('common.free') }), h('span'), h('span.lp', { text: t('common.premium') }));
    const cols = [];
    const thumbs = [];
    for (let l = 1; l <= PASS_LEVELS; l++) {
      const f = this.rewardCard('free', l, FREE_TRACK[l - 1]);
      const p = this.rewardCard('premium', l, PREMIUM_TRACK[l - 1]);
      if (f.cv) thumbs.push([f.cv, f.item]);
      if (p.cv) thumbs.push([p.cv, p.item]);
      cols.push(h('div.lvl-col', { dataset: { lvl: l } }, f.card,
        h(`div.lvl-num${l <= lvl ? '.reached' : ''}${l === lvl + 1 ? '.current' : ''}`, {}, h('b', { text: l })), p.card));
    }
    const sl = this.track.scrollLeft;
    this.track.replaceChildren(...cols);
    this.track.scrollLeft = sl;
    requestAnimationFrame(() => {
      for (const [cv, it] of thumbs) drawThumb(cv, it);
      if (scrollToCurrent) {
        const target = this.track.querySelector(`[data-lvl="${Math.max(1, lvl)}"]`);
        if (target) this.track.scrollLeft = Math.max(0, target.offsetLeft - this.track.clientWidth / 2 + 60);
      }
    });
  }

  claim(track, level, el) {
    const app = this.app;
    const s = app.state;
    if (track === 'premium' && !s.pass.premium) { app.sfx('error'); this.prem.classList.remove('pop'); void this.prem.offsetWidth; this.prem.classList.add('pop'); return; }
    const res = claim(s, track, level);
    if (!res) { app.sfx('error'); return; }
    app.persist(true);
    app.sfx('reward');
    el.classList.add('pop');
    app.celebrateAt(el, res.type === 'coins');
    let msg = rewardLabel(res);
    if (res.duplicateCoins) msg += ` · ${t('pass.dup', { n: res.duplicateCoins })}`;
    app.toast(`${res.type === 'coins' ? coin() : icon('gift')}${msg}`, 'good');
    setTimeout(() => this.render(), 450);
    app.menu.refresh();
  }

  renderQuests() {
    const s = this.app.state;
    this.questHead.textContent = t('pass.quests');
    const rows = s.quests.list.map((q) => {
      const done = q.progress >= q.target;
      const shown = q.type === 'survive' ? `${Math.floor(q.progress / 60)}:${String(q.progress % 60).padStart(2, '0')} / ${q.target / 60}:00` : `${q.progress} / ${q.target}`;
      const btn = q.claimed
        ? h('span.st', { html: `${icon('check')}` })
        : h(`button.btn.small${done ? '.gold.pulse' : '.ghost'}`, { disabled: !done, text: done ? t('common.claim') : t('pass.xp', { n: q.xp }), on: { click: (e) => this.claimQuest(q, e.currentTarget) } });
      return h(`div.quest${done ? '.done' : ''}${q.claimed ? '.claimed' : ''}`, {},
        h('div.q-ic', { html: icon(QUEST_ICON[q.type] || 'star') }),
        h('div.q-info', {}, h('b', { text: questText(q) }), h('div.q-bar', {}, h('i', { style: { width: `${(q.progress / q.target) * 100}%` } })),
          h('div.q-meta', {}, h('span', { text: shown }), h('span', { text: t('pass.xp', { n: q.xp }) }))),
        btn);
    });
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    this.questsEl.replaceChildren(...rows, h('div.q-refresh', { text: t('pass.refresh', { time: fmtDuration(midnight - now) }) }));
  }

  claimQuest(q, el) {
    const app = this.app;
    const res = claimQuest(app.state, q.id);
    if (!res) return;
    const gain = addPassXP(app.state, res.xp);
    app.persist(true);
    app.sfx('reward');
    app.celebrateAt(el, false);
    app.toast(`${icon('star')}+${res.xp} XP`, 'good');
    if (gain.levelsGained > 0) setTimeout(() => app.toast(`${icon('ticket')}${t('toast.passLevel', { n: gain.after })}`, 'good'), 600);
    this.render();
    app.menu.refresh();
  }
}
