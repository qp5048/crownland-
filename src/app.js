import { ECONOMY } from './config.js';
import { GameLoop } from './core/loop.js';
import { Input } from './core/input.js';
import { AudioEngine } from './audio/audio.js';
import { initSDK, GameplayTracker } from './ads/sdk.js';
import { AdManager } from './ads/ads.js';
import { SaveManager } from './save/save.js';
import { localStorageBackend, memoryStorage, safe, sdkDataBackend } from './save/storage.js';
import { applyDom, detectLang, setLang, t } from './i18n/i18n.js';
import { BOOSTS } from './cosmetics/catalog.js';
import { Renderer } from './game/renderer.js';
import { Match } from './game/match.js';
import { Particles } from './game/particles.js';
import { addCoins, computeMatchCoins, consumeBoosts } from './shop/economy.js';
import { addPassXP, ensureSeason, matchXP } from './battlepass/pass.js';
import { dayKey, ensureQuests, trackMatch } from './battlepass/quests.js';
import { claimDaily, dailyStatus, doubleDaily } from './battlepass/daily.js';
import { applyRP, computeRP, RANKS } from './ranked/ranks.js';
import { flyCoins, h, Modals, sleep, Toasts } from './ui/dom.js';
import { coin, icon, logoSVG } from './ui/icons.js';
import { Hud } from './ui/hud.js';
import { Menu } from './ui/menu.js';
import { ShopPage, FREE_BOOSTS_PER_DAY } from './ui/shop.js';
import { PassPage, questText } from './ui/pass.js';
import { dailyDialog, pauseDialog, rankChangeDialog, resultsDialog, reviveDialog, settingsDialog } from './ui/dialogs.js';
import { Tutorial } from './ui/tutorial.js';

export class App {
  constructor() {
    this.version = '1.0.0';
    this.canvas = document.getElementById('game');
    this.uiRoot = document.getElementById('ui');
    this.match = null;
    this.demo = null;
    this.paused = false;
    this.screen = 'loading';
    this.lastMode = 'normal';
    this.dailyShown = false;
  }

  // ------------------------------------------------------------------ boot

  async boot() {
    this.buildLoading();
    this.setLoad(0.1);
    this.sdk = await initSDK();
    this.gameplay = new GameplayTracker(this.sdk);
    this.gameplay.loading(true);
    this.allowFullscreenButton = !!this.sdk.isMock && !!document.documentElement.requestFullscreen;
    this.setLoad(0.35);

    const backend = (!this.sdk.isMock && sdkDataBackend(this.sdk)) || localStorageBackend() || memoryStorage();
    this.saveMgr = new SaveManager(safe(backend));
    this.state = this.saveMgr.load();
    ensureSeason(this.state);
    ensureQuests(this.state);
    setLang(this.state.settings.lang || detectLang());
    this.setLoad(0.55);

    this.audio = new AudioEngine();
    this.applyAudioSettings();
    const unlock = () => this.audio.unlock();
    window.addEventListener('pointerdown', unlock, { capture: true });
    window.addEventListener('keydown', unlock, { capture: true });
    try {
      this.audio.duck('sdk', !!this.sdk.game.settings?.muteAudio);
      this.sdk.game.addSettingsChangeListener?.((s) => this.audio.duck('sdk', !!s.muteAudio));
    } catch { /* optional */ }

    this.renderer = new Renderer(this.canvas);
    this.setQuality(this.state.settings.quality, false);
    this.input = new Input(this.canvas, document.getElementById('joystick'));
    this.input.on('boost', () => this.useBoost());
    this.input.on('pause', () => this.togglePause());

    this.ads = new AdManager(this.sdk);
    this.ads.on('adStart', () => {
      this.audio.duck('ad', true);
      this.adSimPaused = this.loop.simPaused;
      this.loop.simPaused = true;
      this.input.enabled = false;
    });
    this.ads.on('adEnd', () => {
      this.audio.duck('ad', false);
      this.loop.simPaused = this.adSimPaused || this.paused;
    });

    // UI
    this.fxCanvas = h('canvas', { style: { position: 'fixed', inset: '0', width: '100%', height: '100%', zIndex: 45, pointerEvents: 'none' } });
    document.body.append(this.fxCanvas);
    this.fx = new Particles(400);
    this.toasts = new Toasts(this.uiRoot);
    this.modalRoot = h('div', { style: { position: 'absolute', inset: '0', zIndex: 20 } });
    this.hud = new Hud(this.uiRoot, { onPause: () => { this.sfx('click'); this.pauseGame(); }, onBoost: () => this.useBoost() });
    this.menu = new Menu(this.uiRoot, this);
    this.shop = new ShopPage(this.uiRoot, this);
    this.pass = new PassPage(this.uiRoot, this);
    this.uiRoot.append(this.modalRoot);
    this.modals = new Modals(this.modalRoot, (n) => this.sfx(n));
    this.tutorial = new Tutorial(this);
    this.setLoad(0.8);

    this.loop = new GameLoop({ update: (dt) => this.update(dt), render: (a, dt) => this.render(a, dt) });
    this.bindWindow();

    await Promise.race([document.fonts?.ready || Promise.resolve(), sleep(1500)]);
    this.setLoad(1);
    this.loop.start();
    this.gameplay.loading(false);
    await sleep(250);
    this.loadingEl.classList.remove('show');
    setTimeout(() => this.loadingEl.remove(), 500);
    if (this.saveMgr.corrupted) this.toast(t('toast.saved'));

    if (!this.state.tutorialDone) this.startTutorial();
    else this.showMenu();
  }

  buildLoading() {
    this.loadBar = h('i');
    this.loadingEl = h('section#loading.screen.show', {},
      h('div.load-box', {},
        h('div.load-logo', { html: logoSVG() }),
        h('div.load-title', { html: 'CrownLand<em>.io</em>' }),
        h('div.load-bar', {}, this.loadBar)));
    this.uiRoot.append(this.loadingEl);
  }

  setLoad(k) { this.loadBar.style.width = `${Math.round(k * 100)}%`; }

  bindWindow() {
    let rt = 0;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        this.renderer.resize();
        this.hud.resize();
        this.fitFx();
      }, 60);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', () => setTimeout(onResize, 250));
    window.visualViewport?.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.audio.duck('hidden', true);
        this.pauseGame();
        this.saveMgr.flush();
      } else {
        this.audio.duck('hidden', false);
      }
    });
    window.addEventListener('pagehide', () => this.saveMgr.flush());
    window.addEventListener('beforeunload', () => this.saveMgr.flush());
    this.fitFx();
  }

  fitFx() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.fxDpr = dpr;
    this.fxCanvas.width = Math.round(window.innerWidth * dpr);
    this.fxCanvas.height = Math.round(window.innerHeight * dpr);
  }

  // --------------------------------------------------------------- helpers

  sfx(name, opts) { this.audio?.play(name, opts); }
  persist(immediate = false) { this.saveMgr.save(immediate); }
  toast(html, kind) { this.toasts.show(html, kind); }
  today() { return dayKey(); }

  applyAudioSettings() {
    const s = this.state.settings;
    this.audio.setVolumes(s.music, s.sfx);
    this.audio.setMuted(s.muted);
  }

  toggleMute() {
    this.state.settings.muted = !this.state.settings.muted;
    this.applyAudioSettings();
    this.persist();
    this.menu.refresh();
  }

  setLanguage(code) {
    this.state.settings.lang = code;
    setLang(code);
    applyDom();
    this.persist();
    this.menu.refresh();
    if (this.shop.isOpen) this.shop.render();
    if (this.pass.isOpen) this.pass.render();
    if (this.match) this.hud.relabel(this.input.isTouchDevice);
  }

  setQuality(q, save = true) {
    this.state.settings.quality = q;
    this.renderer.setQuality(q);
    document.body.classList.toggle('lowfx', q === 'low');
    if (save) this.persist();
  }

  toggleFullscreen() {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen?.();
    } catch { /* not allowed */ }
  }

  /** Little celebration at a DOM element: confetti burst, optional coins flying to the wallet. */
  celebrateAt(el, coins = false) {
    if (!el || !el.isConnected) return;
    const r = el.getBoundingClientRect();
    const x = (r.left + r.width / 2) * this.fxDpr, y = (r.top + r.height / 2) * this.fxDpr;
    this.fx.confetti(x, y, 22 * this.fxDpr, 40);
    if (coins) {
      const wallet = this.shop.isOpen ? this.shop.wallet : this.pass.isOpen ? this.pass.el.querySelector('.pill') : this.menu.wallet;
      flyCoins(el, wallet, 8, coin());
      setTimeout(() => this.sfx('coin'), 650);
    }
    setTimeout(() => this.refreshWallets(), 700);
  }

  confettiScreen() {
    const w = this.fxCanvas.width, hgt = this.fxCanvas.height;
    for (let k = 0; k < 3; k++) setTimeout(() => this.fx.confetti(w * (0.2 + k * 0.3), hgt * 0.6, 26 * this.fxDpr, 50), k * 160);
  }

  refreshWallets() {
    this.menu.refresh();
    this.menu.bumpWallet();
    if (this.shop.isOpen) this.shop.coinsEl.textContent = this.state.coins.toLocaleString();
    if (this.pass.isOpen) this.pass.coinsEl.textContent = this.state.coins.toLocaleString();
  }

  // ------------------------------------------------------------- screens

  showMenu() {
    this.screen = 'menu';
    this.gameplay.stop();
    this.input.enabled = false;
    this.hud.hide();
    this.shop.close();
    this.pass.close();
    if (!this.demo) this.demo = new Match({ mode: 'demo', renderer: this.renderer, audio: null, input: null });
    this.menu.show();
    this.audio.playMusic('menu');
    if (this.state.tutorialDone && !this.dailyShown && !dailyStatus(this.state).claimedToday) {
      this.dailyShown = true;
      setTimeout(() => { if (this.screen === 'menu' && !this.modals.open) this.openDaily(); }, 700);
    }
  }

  openShop(tab) {
    this.screen = 'shop';
    this.menu.hide();
    this.pass.close();
    this.shop.open(tab);
  }

  openPass(focusQuests = false) {
    ensureSeason(this.state);
    ensureQuests(this.state);
    this.screen = 'pass';
    this.menu.hide();
    this.shop.close();
    this.pass.open(focusQuests);
  }

  closePages() {
    this.shop.close();
    this.pass.close();
    this.showMenu();
  }

  openSettings() { return settingsDialog(this); }

  openDaily() {
    ensureQuests(this.state);
    return dailyDialog(this);
  }

  toggleBoost(id) {
    const s = this.state;
    if (s.boosts[id] <= 0) {
      this.sfx('error');
      this.openShop('boost');
      return;
    }
    s.armed[id] = !s.armed[id];
    this.sfx(s.armed[id] ? 'coin' : 'click');
    this.persist();
    this.menu.refresh();
  }

  // ------------------------------------------------------------- matches

  play(mode) {
    this.lastMode = mode;
    this.startMatch(mode);
  }

  startMatch(mode) {
    this.endMatch();
    this.demo?.destroy();
    this.demo = null;
    this.modals.closeAll();
    const s = this.state;
    const boosts = mode === 'tutorial' ? {} : consumeBoosts(s, mode === 'ranked');
    this.persist();
    const m = new Match({
      mode,
      tier: s.rank.tier,
      look: s.equipped,
      nickname: s.nickname || 'Player',
      boosts,
      renderer: this.renderer,
      input: this.input,
      audio: this.audio,
    });
    this.match = m;
    this.paused = false;
    this.loop.simPaused = false;
    this.screen = 'match';
    this.menu.hide();
    this.shop.close();
    this.pass.close();
    this.hud.show(m, this.input.isTouchDevice);
    this.input.reset();
    this.input.enabled = true;
    this.audio.playMusic('match');
    this.gameplay.start();
    m.on('countdown', (n) => this.hud.countdown(n));
    m.on('go', () => this.hud.go());
    m.on('feed', (e) => this.hud.feed(e.kind, e));
    m.on('offerRevive', (info) => this.offerRevive(info));
    m.on('over', (res) => this.onMatchOver(res));
    return m;
  }

  endMatch() {
    if (!this.match) return;
    this.match.destroy();
    this.match = null;
    this.paused = false;
    this.loop.simPaused = false;
    this.input.enabled = false;
    this.hud.hide();
  }

  useBoost() {
    if (this.match && !this.paused && this.match.activateSpeed()) this.hud.boostUsed();
  }

  togglePause() {
    if (!this.match) return;
    if (this.paused) { this.modals.current?.close('resume'); return; }
    this.pauseGame();
  }

  async pauseGame() {
    const m = this.match;
    if (!m || this.paused || m.mode === 'tutorial' && this.tutorial.step >= 4) return;
    if (m.state !== 'playing' && m.state !== 'countdown') return;
    if (this.modals.open) return;
    this.paused = true;
    this.loop.simPaused = true;
    this.input.enabled = false;
    this.gameplay.stop();
    const choice = await pauseDialog(this);
    if (!this.match || this.match !== m) return;
    if (choice === 'settings') {
      await settingsDialog(this);
      if (this.match !== m) return; // e.g. "replay tutorial" started a new match
      this.paused = false;
      this.pauseGame();
      return;
    }
    if (choice === 'quit') {
      this.paused = false;
      this.loop.simPaused = false;
      if (m.mode === 'tutorial') { this.tutorial.skip(); return; }
      this.forfeit();
      return;
    }
    this.resumeGame();
  }

  resumeGame() {
    if (!this.match) return;
    this.paused = false;
    this.loop.simPaused = false;
    this.input.reset();
    this.input.enabled = this.match.state === 'playing' || this.match.state === 'countdown';
    if (this.input.enabled) this.gameplay.start();
  }

  forfeit() {
    const m = this.match;
    if (!m || m.state === 'over') return;
    if (m.state === 'playing') m.aliveTime += m.world.time - (m.aliveSince ?? m.world.time);
    m.state = 'over';
    m.place = m.world.placeOf(m.human);
    m.result = m.buildResult(false);
    m.result.cause = null;
    this.onMatchOver(m.result);
  }

  async offerRevive(info) {
    const m = this.match;
    this.gameplay.stop();
    this.input.enabled = false;
    const choice = await reviveDialog(this, info);
    if (this.match !== m) return;
    if (choice === 'revive') {
      const ok = await this.ads.rewarded('revive');
      if (this.match !== m) return;
      if (ok) {
        m.revive();
        this.hud.feed('revived');
        this.input.reset();
        this.input.enabled = true;
        this.gameplay.start();
        return;
      }
      this.toast(t('toast.noAd'), 'bad');
    }
    m.finishDeath();
  }

  /** Credit coins, XP, rank points, quests and stats; returns data for the results screen. */
  processMatch(result) {
    const s = this.state;
    const coins = computeMatchCoins({ share: result.share, kills: result.kills, seconds: result.seconds, won: result.won, ranked: result.ranked, magnet: result.magnet });
    addCoins(s, coins.total);
    const xp = matchXP(result);
    ensureSeason(s);
    const passGain = addPassXP(s, xp);
    const newBest = result.share > s.stats.bestShare + 1e-9 && result.share > 0.005;
    s.stats.matches++;
    if (result.ranked) s.stats.ranked++;
    s.stats.kills += result.kills;
    s.stats.bestShare = Math.max(s.stats.bestShare, result.share);
    s.stats.wins += result.won ? 1 : 0;
    s.stats.playTime += Math.round(result.seconds);
    s.stats.captures += result.captures;
    ensureQuests(s);
    const completed = trackMatch(s, { ...result, coins: coins.total });
    let rp = null, rankBefore = null, rankAfter = null;
    if (result.ranked) {
      rankBefore = { tier: s.rank.tier, rp: s.rank.rp, need: RANKS[s.rank.tier].need };
      const delta = computeRP({ ...result, tier: s.rank.tier });
      rp = applyRP(s.rank, delta);
      rankAfter = { tier: s.rank.tier, rp: s.rank.rp };
    }
    this.persist(true);
    return { result, coins, xp, passGain, newBest, completed, rp, rankBefore, rankAfter };
  }

  async onMatchOver(result) {
    const m = this.match;
    this.input.enabled = false;
    this.gameplay.stop();
    this.ads.matchFinished();
    if (m.mode === 'tutorial') return;
    await sleep(900); // let the death animation breathe
    if (this.match !== m) return;
    const data = this.processMatch(result);
    if (data.newBest || result.won) this.gameplay.happytime();
    this.audio.playMusic('menu');
    const choicePromise = resultsDialog(this, data);
    for (const q of data.completed) setTimeout(() => this.toast(`${icon('scroll')}${t('toast.questDone', { name: questText(q) })}`, 'good'), 2400);
    if (data.passGain.levelsGained > 0) setTimeout(() => this.toast(`${icon('ticket')}${t('toast.passLevel', { n: data.passGain.after })}`, 'good'), 3000);
    const choice = await choicePromise;
    if (data.rp && (data.rp.promoted || data.rp.demoted)) {
      if (data.rp.promoted) this.gameplay.happytime();
      await rankChangeDialog(this, data.rp);
    }
    if (this.match !== m) return;
    // midgame ads only ever run here: between the results screen and what comes next
    await this.ads.midgame();
    if (choice === 'again') this.startMatch(this.lastMode);
    else { this.endMatch(); this.showMenu(); }
  }

  async doubleCoins(amount) {
    const ok = await this.ads.rewarded('double');
    if (!ok) { this.toast(t('toast.noAd'), 'bad'); return false; }
    addCoins(this.state, amount);
    this.persist(true);
    this.sfx('reward');
    return true;
  }

  async claimDaily(double, el) {
    if (double) {
      const ok = await this.ads.rewarded('daily');
      if (!ok) { this.toast(t('toast.noAd'), 'bad'); return false; }
    }
    const res = claimDaily(this.state, { double });
    if (!res) return false;
    this.persist(true);
    this.sfx('reward');
    this.celebrateAt(el, true);
    const boost = res.boost ? ` + ${t(`boost.${res.boost}`)}` : '';
    this.toast(`${coin()}+${res.coins}${boost}`, 'good');
    this.menu.refresh();
    return true;
  }

  async watchAdForBoost() {
    const s = this.state;
    const today = this.today();
    if (s.adBoost.day !== today) s.adBoost = { day: today, count: 0 };
    if (s.adBoost.count >= FREE_BOOSTS_PER_DAY) return false;
    const ok = await this.ads.rewarded('boost');
    if (!ok) { this.toast(t('toast.noAd'), 'bad'); return false; }
    s.adBoost.count++;
    const b = BOOSTS[Math.floor(Math.random() * BOOSTS.length)];
    s.boosts[b.id]++;
    s.armed[b.id] = true;
    this.persist(true);
    this.sfx('reward');
    this.toast(`${icon(b.icon)}${t('shop.gotBoost', { name: t(`boost.${b.id}`) })}`, 'good');
    return true;
  }

  // ------------------------------------------------------------- tutorial

  startTutorial() {
    this.modals.closeAll();
    this.shop.close();
    this.pass.close();
    this.menu.hide();
    this.tutorial.start();
  }

  completeTutorial() {
    const s = this.state;
    s.tutorialDone = true;
    if (!s.tutorialRewarded) {
      s.tutorialRewarded = true;
      addCoins(s, ECONOMY.tutorialReward);
    }
    this.persist(true);
    if (this.screen !== 'menu') this.showMenu();
    this.menu.refresh();
    this.menu.bumpWallet();
  }

  // ----------------------------------------------------------------- loop

  update(dt) {
    if (this.match) {
      this.match.update(dt);
      if (this.tutorial.active) this.tutorial.update(dt);
    } else if (this.demo && this.screen === 'menu') {
      this.demo.update(dt);
    }
  }

  /** Drop to the fast renderer once if a match keeps running well below 60 FPS. */
  watchPerformance(frameDt) {
    if (this.autoLowDone || this.state.settings.quality !== 'high' || !this.match || this.loop.simPaused) { this.slowTime = 0; return; }
    if (frameDt > 1 / 38) this.slowTime = (this.slowTime || 0) + frameDt;
    else this.slowTime = Math.max(0, (this.slowTime || 0) - frameDt * 0.5);
    if (this.slowTime > 4) {
      this.autoLowDone = true;
      this.setQuality('low');
      this.toast(`${icon('bolt')}${t('toast.autoLow')}`);
    }
  }

  render(alpha, frameDt) {
    this.watchPerformance(frameDt);
    if (this.match) {
      this.match.frame(alpha, frameDt);
      this.hud.update(frameDt);
      if (this.tutorial.active) this.tutorial.frame();
    } else if (this.demo && this.screen === 'menu') {
      this.demo.frame(alpha, frameDt);
    }
    // UI-level particles (confetti on buttons, rank ups)
    const fx = this.fx;
    if (fx.n > 0 || this.fxDirty) {
      const ctx = this.fxCanvas.getContext('2d');
      ctx.clearRect(0, 0, this.fxCanvas.width, this.fxCanvas.height);
      fx.update(frameDt);
      fx.draw(ctx, 1, 0, 0, 0, 0);
      this.fxDirty = fx.n > 0;
    }
  }
}
