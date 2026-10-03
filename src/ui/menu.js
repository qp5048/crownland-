import { BOOSTS, SKINS, resolveLook } from '../cosmetics/catalog.js';
import { claimableCount, passLevel } from '../battlepass/pass.js';
import { dailyStatus } from '../battlepass/daily.js';
import { ACHIEVEMENTS, claimableAchievements } from '../progress/achievements.js';
import { chestStatus } from '../progress/chest.js';
import { RANKS, rankIconSVG, rankName } from '../ranked/ranks.js';
import { t } from '../i18n/i18n.js';
import { fmtClock, h } from './dom.js';
import { coin, icon, logoSVG } from './icons.js';
import { Preview } from './preview.js';

/** Main menu screen. All actions are delegated to the app. */
export class Menu {
  constructor(root, app) {
    this.app = app;
    this.mode = 'normal';
    this.el = h('section#menu.screen');
    root.append(this.el);
    this.build();
  }

  build() {
    const app = this.app;
    const click = (fn) => (e) => { app.sfx('click'); fn(e); };

    // top bar
    this.coinsEl = h('span');
    this.wallet = h('div.pill.interactive', { html: coin() }, this.coinsEl);
    this.soundBtn = h('button.icon-btn.interactive', { on: { click: click(() => app.toggleMute()) } });
    this.settingsBtn = h('button.icon-btn.interactive', { html: icon('gear'), on: { click: click(() => app.openSettings()) } });
    this.fsBtn = h('button.icon-btn.interactive', { html: icon('fullscreen'), on: { click: click(() => app.toggleFullscreen()) } });
    if (!app.allowFullscreenButton) this.fsBtn.classList.add('hidden');
    this.el.append(h('header.topbar', {}, h('div.group', {}, this.wallet), h('div.group', {}, this.soundBtn, this.fsBtn, this.settingsBtn)));

    // left: logo, preview, nickname
    this.taglineEl = h('p.tagline');
    this.previewCanvas = h('canvas');
    this.preview = new Preview(this.previewCanvas);
    this.nick = h('input.nick.interactive', { maxlength: 16, autocomplete: 'off', spellcheck: 'false' });
    this.nick.addEventListener('input', () => { app.state.nickname = this.nick.value.trim().slice(0, 16); app.persist(); });
    this.nick.addEventListener('keydown', (e) => { if (e.key === 'Enter') { this.nick.blur(); app.play(this.mode); } e.stopPropagation(); });
    const left = h('div.menu-col.left', {},
      h('div.logo', {}, h('div', { html: logoSVG() }), h('h1', { html: 'CrownLand<em>.io</em>' })),
      this.taglineEl,
      h('div.preview-card', {}, this.previewCanvas),
      this.nick);

    // centre: modes, play, boosts
    this.classicCard = h('button.mode.classic.interactive', { on: { click: click(() => this.setMode('normal')) } });
    this.rankedCard = h('button.mode.ranked.interactive', { on: { click: click(() => this.setMode('ranked')) } });
    this.playBtn = h('button.btn.big.green.play-btn.interactive', { on: { click: click(() => app.play(this.mode)) } });
    this.boostsTitle = h('h4');
    this.boostRow = h('div.boost-row');
    this.boostNote = h('p.boost-note');
    const center = h('div.menu-col.center', {},
      h('div.modes', {}, this.classicCard, this.rankedCard),
      this.playBtn,
      h('div.boosts.interactive', {}, this.boostsTitle, this.boostRow, this.boostNote));

    // right: tiles
    this.tileShop = h('button.tile.t-shop.interactive', { on: { click: click(() => app.openShop()) } });
    this.tilePass = h('button.tile.t-pass.interactive', { on: { click: click(() => app.openPass()) } });
    this.tileQuests = h('button.tile.t-quests.interactive', { on: { click: click(() => app.openPass(true)) } });
    this.tileDaily = h('button.tile.t-daily.interactive', { on: { click: click(() => app.openDaily()) } });
    this.tileAch = h('button.tile.t-ach.interactive', { on: { click: click(() => app.openAchievements()) } });
    this.tileChest = h('button.tile.t-chest.interactive', { on: { click: click(() => app.openChest()) } });
    const right = h('div.menu-col.right', {}, h('div.tiles', {}, this.tileShop, this.tilePass, this.tileQuests, this.tileDaily, this.tileAch, this.tileChest));

    this.foot = h('div.menu-foot');
    // CrazyGames display banner slot (filled through the SDK, menus only)
    this.bannerEl = h('div#cg-banner-menu.cg-banner.hidden');
    this.el.append(h('div.menu-wrap', {}, left, center, right), this.foot, this.bannerEl);
  }

  setMode(mode) {
    this.mode = mode;
    this.refresh();
  }

  show() {
    this.el.classList.add('show');
    this.preview.setActive(true);
    this.refresh();
    clearInterval(this.clock);
    this.clock = setInterval(() => this.renderChestTile(), 1000);
  }

  hide() {
    this.el.classList.remove('show');
    this.preview.setActive(false);
    clearInterval(this.clock);
  }

  renderChestTile() {
    const st = chestStatus(this.app.state);
    if (this.chestReady === st.ready && !st.ready && this.chestTime) {
      this.chestTime.textContent = fmtClock(st.msLeft);
      return;
    }
    this.chestReady = st.ready;
    this.chestTime = h('small', { text: st.ready ? t('chest.ready') : fmtClock(st.msLeft) });
    this.tileChest.classList.toggle('ready', st.ready);
    this.tileChest.replaceChildren(h('span.t-ic', { html: icon('gift') }), h('b', { text: t('menu.chest') }), this.chestTime);
  }

  refresh() {
    const app = this.app;
    const s = app.state;
    this.coinsEl.textContent = s.coins.toLocaleString();
    this.soundBtn.innerHTML = icon(s.settings.muted ? 'mute' : 'sound');
    this.soundBtn.title = t('settings.mute');
    this.settingsBtn.title = t('menu.settings');
    this.fsBtn.title = t('settings.fullscreen');
    this.taglineEl.textContent = t('app.tagline');
    this.nick.placeholder = t('menu.nickname');
    if (document.activeElement !== this.nick) this.nick.value = s.nickname;
    this.preview.setLook(resolveLook(s.equipped));

    const r = RANKS[s.rank.tier];
    this.classicCard.classList.toggle('on', this.mode === 'normal');
    this.rankedCard.classList.toggle('on', this.mode === 'ranked');
    this.classicCard.innerHTML = '';
    this.classicCard.append(
      h('b', {}, h('span.mode-ic', { html: icon('flag') }), t('menu.classic')),
      h('small', { text: t('menu.classicDesc') }),
      h('div.rk-line', {}, h('span', { text: t('menu.best', { pct: `${(s.stats.bestShare * 100).toFixed(1)}%` }) })));
    const need = r.need;
    this.rankedCard.innerHTML = '';
    this.rankedCard.append(
      h('b', {}, h('span.mode-ic', { html: rankIconSVG(s.rank.tier, 40) }), t('menu.ranked')),
      h('small', { text: t('menu.rankedDesc') }),
      h('div.rk-line', {}, h('span', { text: rankName(s.rank.tier, t) }),
        h('span', { text: need ? t('rank.progress', { rp: s.rank.rp, need }) : t('rank.legendRp', { rp: s.rank.rp }) })),
      h('div.rk-bar', {}, h('i', { style: { width: `${need ? (s.rank.rp / need) * 100 : 100}%` } })));
    this.playBtn.innerHTML = `${icon('play')}<span>${t('common.play')}</span>`;
    this.playBtn.classList.toggle('purple', this.mode === 'ranked');
    this.playBtn.classList.toggle('green', this.mode !== 'ranked');

    // boosts
    this.boostsTitle.textContent = t('menu.boosts');
    this.boostRow.innerHTML = '';
    let any = false;
    for (const b of BOOSTS) {
      const count = s.boosts[b.id];
      if (count > 0) any = true;
      const offRanked = this.mode === 'ranked' && !b.rankedAllowed;
      const chip = h(`button.boost-chip${s.armed[b.id] ? '.on' : ''}${count ? '' : '.empty'}${offRanked ? '.off-ranked' : ''}`, {
        title: `${t(`boost.${b.id}`)} — ${t(`boost.${b.id}.desc`)}`,
        on: { click: () => app.toggleBoost(b.id) },
      }, h('span.cnt', { text: count ? `×${count}` : '' }), h('span', { html: icon(b.icon) }), h('span', { text: t(`boost.${b.id}`) }));
      this.boostRow.append(chip);
    }
    this.boostNote.textContent = !any ? t('menu.noBoosts') : this.mode === 'ranked' ? t('menu.rankedOff') + ': ' + BOOSTS.filter((b) => !b.rankedAllowed).map((b) => t(`boost.${b.id}`)).join(', ') : '';

    // tiles
    const lvl = passLevel(s.pass.xp);
    const claimable = claimableCount(s);
    const questsReady = s.quests.list.filter((q) => q.progress >= q.target && !q.claimed).length;
    const daily = dailyStatus(s);
    this.tileShop.replaceChildren(h('span.t-ic', { html: icon('cart') }), h('b', { text: t('menu.shop') }), h('small', { text: `${s.owned.skin.length} / ${SKINS.length}` }));
    this.tilePass.replaceChildren(...[h('span.t-ic', { html: icon('ticket') }), h('b', { text: t('menu.pass') }), h('small', { text: t('menu.level', { n: lvl.level }) }),
      h('div.mini-bar', {}, h('i', { style: { width: `${lvl.progress * 100}%` } })), claimable ? h('span.badge', { text: claimable }) : null].filter(Boolean));
    this.tileQuests.replaceChildren(...[h('span.t-ic', { html: icon('scroll') }), h('b', { text: t('menu.quests') }),
      h('small', { text: `${s.quests.list.filter((q) => q.claimed).length} / ${s.quests.list.length}` }), questsReady ? h('span.badge', { text: questsReady }) : null].filter(Boolean));
    this.tileDaily.replaceChildren(...[h('span.t-ic', { html: icon('gift') }), h('b', { text: t('menu.daily') }),
      h('small', { text: t('daily.streak', { n: Math.max(1, daily.streak) }) }), daily.claimedToday ? null : h('span.badge', { text: '!' })].filter(Boolean));
    const achReady = claimableAchievements(s);
    this.tileAch.replaceChildren(...[h('span.t-ic', { html: icon('trophy') }), h('b', { text: t('menu.achievements') }),
      h('small', { text: `${s.achievements.claimed.length} / ${ACHIEVEMENTS.length}` }), achReady ? h('span.badge', { text: achReady }) : null].filter(Boolean));
    this.chestReady = null;
    this.renderChestTile();
    this.foot.textContent = app.input.isTouchDevice ? t('menu.controlsTouch') : t('menu.controlsDesktop');
  }

  bumpWallet() {
    this.wallet.classList.remove('bump');
    void this.wallet.offsetWidth;
    this.wallet.classList.add('bump');
  }
}
