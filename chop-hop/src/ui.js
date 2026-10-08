import { t, setLang, getLang, LANGS } from './i18n.js';
import { save, persist, resetSave } from './save.js';
import { SKINS, skinById } from './skins.js';
import { UPGRADES, buyUpgrade, isOwned, own, progressSkin, WHEEL, WHEEL_COOLDOWN, wheelFree, wheelScale } from './meta.js';
import { audio } from './audio.js';
import { portal } from './sdk.js';
import { fmt } from './util.js';

const $ = (id) => document.getElementById(id);
const svgUse = (id, cls = 'i') => `<svg class="${cls}"><use href="#${id}"/></svg>`;

export class UI {
  constructor(game) {
    this.g = game;
    this.thumbs = {};
    this.el = {
      coins: $('coinsTotal'), stars: $('starsTotal'), pillCoins: $('pillCoins'), pillStars: $('pillStars'),
      hud: $('hud'), menu: $('menu'), progBar: $('progBar'), lvlA: $('lvlA'), lvlB: $('lvlB'),
      lvlCoins: $('lvlCoins'), lvlCoinsTxt: $('lvlCoins').querySelector('span'),
      fever: $('fever'), feverFill: $('fever').querySelector('i'),
      bossbar: $('bossbar'), bossFill: $('bossbar').querySelector('i'), progressWrap: $('progressWrap'),
      banner: $('banner'), hint: $('hint'), toast: $('toast'), vignette: $('vignette'),
      btnPause: $('btnPause'), lvlLabel: $('lvlLabel'),
    };
    this.lastCoins = -1;
    this.lastLvlCoins = -1;
    this.starMarks = [];
    this.hintTimer = 0;
    this.toastTimer = 0;
    this.shopTab = 'blades';
    this.wheelSpinning = false;
    this.wheelAngle = 0;
    this.bind();
    this.applyTexts();
  }

  bind() {
    const click = (id, fn) => $(id).addEventListener('click', (e) => {
      e.stopPropagation();
      audio.unlock();
      audio.play('click');
      fn(e);
    });
    click('btnSettings', () => this.showSettings());
    click('btnPause', () => this.g.pause());
    click('btnShop', () => this.showShop('blades'));
    click('btnUpgrades', () => this.showShop('ups'));
    click('btnWheel', () => this.showWheel());
    click('tabBlades', () => this.setShopTab('blades'));
    click('tabUps', () => this.setShopTab('ups'));
    click('btnFreeCoins', () => this.freeCoins());
    click('btnSpin', () => this.spin());
    click('btnResume', () => this.g.resume());
    click('btnRestart', () => { this.close('mPause'); this.g.restartLevel(); });
    click('btnHome', () => { this.close('mPause'); this.g.toMenu(); });
    click('qSound', () => this.toggleSetting('sound'));
    click('qMusic', () => this.toggleSetting('music'));
    click('tgSound', () => this.toggleSetting('sound'));
    click('tgMusic', () => this.toggleSetting('music'));
    click('tgVibro', () => this.toggleSetting('vibro'));
    click('btnReset', () => this.resetProgress());
    click('btnEquipNew', () => {
      if (this.unlockSkin) this.g.equip(this.unlockSkin.id);
      this.close('mUnlock');
    });
    document.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.play('click');
      const m = b.closest('.modal');
      this.close(m.id);
    }));
    $('segQuality').querySelectorAll('button').forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.play('click');
      save.settings.quality = b.dataset.v;
      persist();
      this.g.applyQuality();
      this.refreshSettings();
    }));
    const segLang = $('segLang');
    segLang.innerHTML = LANGS.map(([k, n]) => `<button data-v="${k}">${n}</button>`).join('');
    segLang.querySelectorAll('button').forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.play('click');
      save.settings.lang = b.dataset.v;
      persist();
      setLang(b.dataset.v);
      this.applyTexts();
      this.refreshSettings();
      this.g.refreshMenu();
    }));
    // stop modal backgrounds from passing taps to the game
    document.querySelectorAll('.modal').forEach((m) => {
      m.addEventListener('pointerdown', (e) => e.stopPropagation());
    });
    if (!('vibrate' in navigator)) $('rowVibro').classList.add('hidden');
  }

  applyTexts() {
    document.querySelectorAll('[data-t]').forEach((n) => { n.textContent = t(n.dataset.t); });
    $('feverTxt').textContent = t('feverLabel');
  }

  // ---------------------------------------------------------------------
  // HUD
  // ---------------------------------------------------------------------
  setWallet(bump = false) {
    if (this.el.coins.textContent !== fmt(save.coins)) {
      this.el.coins.textContent = fmt(save.coins);
      if (bump) this.bump(this.el.pillCoins);
    }
    this.el.stars.textContent = save.stars;
  }

  bump(el) {
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
  }

  showHUD(on) {
    this.el.hud.classList.toggle('hidden', !on);
    this.el.btnPause.classList.toggle('hidden', !on);
    $('btnSettings').classList.toggle('hidden', on);
  }

  setupLevelHUD(level) {
    this.el.lvlA.textContent = level.n;
    this.el.lvlB.textContent = level.n + 1;
    this.starMarks.forEach((m) => m.remove());
    this.starMarks = level.stars.map((s) => {
      const m = document.createElement('span');
      m.className = 'smark';
      m.innerHTML = `<svg><use href="#i-star-plain"/></svg>`;
      m.style.left = Math.min(100, (s.x / level.length) * 100) + '%';
      this.el.progBar.appendChild(m);
      return m;
    });
    this.setProgress(0);
    this.setLevelCoins(0);
    this.setFever(0, false);
    this.setBoss(false);
  }

  setProgress(p) {
    this.el.progBar.firstElementChild.style.width = (Math.max(0, Math.min(1, p)) * 100).toFixed(1) + '%';
  }

  starGot(i) {
    if (this.starMarks[i]) this.starMarks[i].classList.add('got');
  }

  setLevelCoins(n) {
    const v = Math.floor(n);
    if (v === this.lastLvlCoins) return;
    this.lastLvlCoins = v;
    this.el.lvlCoinsTxt.textContent = fmt(v);
    this.el.lvlCoins.classList.remove('pop');
    void this.el.lvlCoins.offsetWidth;
    this.el.lvlCoins.classList.add('pop');
  }

  setFever(v, on) {
    this.el.feverFill.style.width = (v * 100).toFixed(1) + '%';
    this.el.fever.classList.toggle('on', on);
    this.el.vignette.classList.toggle('on', on);
  }

  setBoss(visible, frac = 1) {
    this.el.bossbar.classList.toggle('hidden', !visible);
    this.el.progressWrap.classList.toggle('hidden', visible);
    this.el.bossFill.style.width = (frac * 100).toFixed(1) + '%';
  }

  banner(text) {
    const b = this.el.banner;
    b.textContent = text;
    b.classList.remove('show');
    void b.offsetWidth;
    b.classList.add('show');
  }

  hint(text, dur = 2.6) {
    this.el.hint.querySelector('span').textContent = text;
    this.el.hint.classList.add('show');
    clearTimeout(this.hintTimer);
    this.hintTimer = setTimeout(() => this.el.hint.classList.remove('show'), dur * 1000);
  }

  hideHint() {
    clearTimeout(this.hintTimer);
    this.el.hint.classList.remove('show');
  }

  toast(text) {
    this.el.toast.textContent = text;
    this.el.toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.el.toast.classList.remove('show'), 1800);
  }

  onThumb() {
    clearTimeout(this.thumbT);
    this.thumbT = setTimeout(() => {
      if (!document.getElementById('mShop').classList.contains('hidden') && this.shopTab === 'blades') this.renderBlades();
      this.g.refreshMenu();
    }, 60);
  }

  // ---------------------------------------------------------------------
  // Menu
  // ---------------------------------------------------------------------
  showMenu(on, level) {
    this.el.menu.classList.toggle('hidden', !on);
    if (!on) return;
    const b = level.biome;
    this.el.lvlLabel.innerHTML = `${level.isBoss ? t('bossLevel', level.n) : t('level', level.n)}<small>${t('world_' + b.id)}</small>`;
    $('wheelBadge').classList.toggle('hidden', !wheelFree());
    const ps = progressSkin();
    $('skinProg').classList.toggle('hidden', !ps);
    if (ps) {
      $('skinProgImg').src = this.thumbs[ps.id] || '';
      $('skinProgBar').style.width = save.skinProgress + '%';
      $('skinProgPct').textContent = save.skinProgress + '%';
    }
    $('btnSettings').classList.remove('hidden');
  }

  // ---------------------------------------------------------------------
  // Modals
  // ---------------------------------------------------------------------
  open(id) {
    $(id).classList.remove('hidden');
  }

  close(id) {
    $(id).classList.add('hidden');
    if (id === 'mFail') clearInterval(this.failIv);
    this.g.onModalClosed(id);
  }

  anyModal() {
    return !!document.querySelector('.modal:not(.hidden)');
  }

  // fail / continue
  showFail(canRevive, onRevive, onSkip) {
    this.open('mFail');
    const fg = $('failTimer');
    const noThanks = $('btnNoThanks');
    const revive = $('btnRevive');
    revive.classList.toggle('hidden', !canRevive);
    noThanks.classList.add('hidden');
    let tLeft = canRevive ? 5 : 0;
    const total = 5;
    fg.style.strokeDashoffset = '0';
    clearInterval(this.failIv);
    const done = (fn) => {
      clearInterval(this.failIv);
      $('mFail').classList.add('hidden');
      fn();
    };
    revive.onclick = async (e) => {
      e.stopPropagation();
      audio.play('click');
      clearInterval(this.failIv);
      const ok = await portal.rewarded();
      if (ok) done(onRevive);
      else {
        this.toast(t('adUnavailable'));
        done(onSkip);
      }
    };
    noThanks.onclick = (e) => {
      e.stopPropagation();
      audio.play('click');
      done(onSkip);
    };
    if (!canRevive) {
      noThanks.textContent = t('tryAgain');
      noThanks.classList.remove('hidden');
      noThanks.classList.remove('link');
      noThanks.classList.add('btn', 'green');
      return;
    }
    noThanks.textContent = t('noThanks');
    noThanks.classList.add('link');
    noThanks.classList.remove('btn', 'green');
    const start = performance.now();
    this.failIv = setInterval(() => {
      const el = (performance.now() - start) / 1000;
      tLeft = total - el;
      fg.style.strokeDashoffset = String(314 * (1 - Math.max(0, tLeft) / total));
      if (el > 1.4) noThanks.classList.remove('hidden');
      if (tLeft <= 0) done(onSkip);
    }, 50);
  }

  // level complete
  showWin(d, onClaim) {
    this.open('mWin');
    $('winTitle').textContent = t('levelDone', d.level);
    const stars = $('winStars').children;
    for (let i = 0; i < 3; i++) {
      stars[i].classList.remove('got');
      stars[i].style.animationDelay = (0.25 + i * 0.22) + 's';
      if (i < d.stars) setTimeout(() => { stars[i].classList.add('got'); audio.play('star'); }, 250 + i * 220);
    }
    $('winScore').textContent = fmt(d.coins);
    $('winMult').textContent = 'x' + d.mult;
    $('winBest').textContent = fmt(Math.max(save.best, d.result));
    const res = $('winResult');
    const t0 = performance.now();
    const countUp = () => {
      const k = Math.min(1, (performance.now() - t0) / 900);
      res.textContent = fmt(d.result * (1 - Math.pow(1 - k, 3)));
      if (k < 1 && !$('mWin').classList.contains('hidden')) requestAnimationFrame(countUp);
    };
    countUp();
    const ps = progressSkin();
    const nb = document.querySelector('#mWin .newblade');
    nb.classList.toggle('hidden', !ps);
    if (ps) {
      $('winSkinImg').src = this.thumbs[ps.id] || '';
      $('winSkinBar').style.width = d.prevProgress + '%';
      $('winSkinPct').textContent = d.prevProgress + '%';
      setTimeout(() => {
        $('winSkinBar').style.width = Math.min(100, d.newProgress) + '%';
        $('winSkinPct').textContent = Math.min(100, d.newProgress) + '%';
      }, 500);
    }
    const c3 = $('btnClaim3');
    const c1 = $('btnClaim');
    c1.classList.add('hidden');
    c3.disabled = false;
    c1.disabled = false;
    setTimeout(() => c1.classList.remove('hidden'), 1300);
    const finish = (mult) => {
      c3.disabled = true;
      c1.disabled = true;
      $('mWin').classList.add('hidden');
      onClaim(mult);
    };
    c3.onclick = async (e) => {
      e.stopPropagation();
      audio.play('click');
      c3.disabled = true;
      const ok = await portal.rewarded();
      if (ok) finish(3);
      else {
        this.toast(t('adUnavailable'));
        c3.disabled = false;
      }
    };
    c1.onclick = (e) => {
      e.stopPropagation();
      audio.play('click');
      finish(1);
    };
  }

  // ---------------------------------------------------------------------
  // Shop
  // ---------------------------------------------------------------------
  showShop(tab) {
    this.open('mShop');
    this.setShopTab(tab);
    $('freeCoinsTxt').textContent = '+' + this.freeCoinAmount();
  }

  freeCoinAmount() {
    return 200 + save.level * 25;
  }

  async freeCoins() {
    const ok = await portal.rewarded();
    if (!ok) return this.toast(t('adUnavailable'));
    save.coins += this.freeCoinAmount();
    persist();
    audio.play('buy');
    this.setWallet(true);
    this.renderShop();
  }

  setShopTab(tab) {
    this.shopTab = tab;
    $('tabBlades').classList.toggle('on', tab === 'blades');
    $('tabUps').classList.toggle('on', tab === 'ups');
    $('shopGrid').classList.toggle('hidden', tab !== 'blades');
    $('upList').classList.toggle('hidden', tab !== 'ups');
    $('shopTitle').textContent = t(tab === 'blades' ? 'shop' : 'upgrades');
    this.renderShop();
  }

  renderShop() {
    if (this.shopTab === 'blades') this.renderBlades();
    else this.renderUpgrades();
  }

  renderBlades() {
    const grid = $('shopGrid');
    grid.innerHTML = '';
    const lang = getLang();
    for (const s of SKINS) {
      const owned = isOwned(s.id);
      const sel = save.skin === s.id;
      const card = document.createElement('button');
      card.className = 'card' + (owned ? '' : ' locked') + (sel ? ' sel' : '');
      let st = '';
      const u = s.unlock;
      if (sel) st = svgUse('i-check') + t('selected');
      else if (owned) st = t('equip');
      else if (u.type === 'coins') {
        st = svgUse('i-coin') + fmt(u.price);
        if (save.coins >= u.price) card.classList.add('afford');
      } else if (u.type === 'stars') st = `<svg class="i" style="color:#ffd23f"><use href="#i-star"/></svg>${save.stars}/${u.count}`;
      else if (u.type === 'level') st = svgUse('i-lock') + t('unlockAt', u.level);
      else if (u.type === 'ads') st = svgUse('i-ad') + `${save.adProgress[s.id] || 0}/${u.count}`;
      card.innerHTML = `<img alt="" src="${this.thumbs[s.id] || ''}"><span class="nm">${s.name[lang] || s.name.en}</span><span class="st">${st}</span>`;
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onBladeCard(s);
      });
      grid.appendChild(card);
    }
  }

  async onBladeCard(s) {
    audio.unlock();
    if (isOwned(s.id)) {
      audio.play('click');
      this.g.equip(s.id);
      this.renderBlades();
      return;
    }
    const u = s.unlock;
    if (u.type === 'coins') {
      if (save.coins < u.price) {
        audio.play('error');
        return this.toast(t('notEnough'));
      }
      save.coins -= u.price;
      own(s.id);
      audio.play('buy');
      this.setWallet(true);
      this.g.equip(s.id);
      this.renderBlades();
    } else if (u.type === 'ads') {
      const ok = await portal.rewarded();
      if (!ok) return this.toast(t('adUnavailable'));
      save.adProgress[s.id] = (save.adProgress[s.id] || 0) + 1;
      if (save.adProgress[s.id] >= u.count) {
        own(s.id);
        this.g.equip(s.id);
        audio.play('buy');
      }
      persist();
      this.renderBlades();
    } else {
      audio.play('error');
      this.toast(u.type === 'stars' ? t('starsReq', u.count) : t('unlockAt', u.level));
    }
  }

  renderUpgrades() {
    const list = $('upList');
    list.innerHTML = '';
    for (const u of UPGRADES) {
      const lvl = save.upgrades[u.id] || 0;
      const maxed = lvl >= u.max;
      const cost = u.cost(lvl);
      const row = document.createElement('div');
      row.className = 'up';
      const pips = Array.from({ length: Math.min(u.max, 10) }, (_, i) => `<i class="${i < Math.ceil((lvl / u.max) * Math.min(u.max, 10)) ? 'on' : ''}"></i>`).join('');
      row.innerHTML = `<div class="ic" style="background:${u.color}">${svgUse(u.icon, '')}</div>
        <div class="info"><div class="t">${t('up_' + u.id)} <span style="color:var(--muted);font-size:13px">${t('lvlShort', lvl)}</span></div><div class="d">${t('up_' + u.id + '_d')}</div><div class="pips">${pips}</div></div>
        <button class="btn ${maxed ? 'blue' : 'yellow'}" ${maxed || save.coins < cost ? 'disabled' : ''}>${maxed ? t('max') : svgUse('i-coin') + fmt(cost)}</button>`;
      row.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation();
        if (buyUpgrade(u.id)) {
          audio.play('buy');
          this.setWallet(true);
          this.renderUpgrades();
        } else {
          audio.play('error');
          this.toast(t('notEnough'));
        }
      });
      list.appendChild(row);
    }
  }

  // ---------------------------------------------------------------------
  // Lucky wheel
  // ---------------------------------------------------------------------
  showWheel() {
    this.open('mWheel');
    this.drawWheel();
    this.refreshWheel();
    clearInterval(this.wheelIv);
    this.wheelIv = setInterval(() => {
      if ($('mWheel').classList.contains('hidden')) return clearInterval(this.wheelIv);
      if (!this.wheelSpinning) this.refreshWheel();
    }, 1000);
  }

  refreshWheel() {
    const free = wheelFree();
    const btn = $('btnSpin');
    btn.className = 'btn ' + (free ? 'green' : 'purple');
    btn.innerHTML = free ? `<span>${t('spin')}</span>` : `${svgUse('i-ad')}<span>${t('spinAd')}</span>`;
    btn.disabled = this.wheelSpinning;
    if (free) $('wheelInfo').textContent = t('free') + '!';
    else {
      const left = WHEEL_COOLDOWN - (Date.now() - save.wheelAt);
      const h = Math.floor(left / 3600000), m = Math.floor((left % 3600000) / 60000), s = Math.floor((left % 60000) / 1000);
      $('wheelInfo').textContent = t('nextFreeSpin', `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
    }
    $('wheelBadge').classList.toggle('hidden', !free);
  }

  wheelLabel(seg) {
    if (seg.type === 'coins') return fmt(Math.round(seg.v * wheelScale()));
    if (seg.type === 'stars') return '★' + seg.v;
    return '?';
  }

  drawWheel() {
    const c = $('wheelCanvas');
    const g = c.getContext('2d');
    const W = c.width, R = W / 2;
    g.clearRect(0, 0, W, W);
    const n = WHEEL.length;
    for (let i = 0; i < n; i++) {
      const a0 = -Math.PI / 2 + (i / n) * Math.PI * 2 - Math.PI / n;
      const a1 = a0 + (Math.PI * 2) / n;
      g.beginPath();
      g.moveTo(R, R);
      g.arc(R, R, R, a0, a1);
      g.closePath();
      g.fillStyle = WHEEL[i].color;
      g.fill();
      g.strokeStyle = 'rgba(255,255,255,.7)';
      g.lineWidth = 6;
      g.stroke();
      g.save();
      g.translate(R, R);
      g.rotate((a0 + a1) / 2);
      g.textAlign = 'right';
      g.textBaseline = 'middle';
      g.font = '900 46px "Arial Black", Arial, sans-serif';
      g.lineWidth = 10;
      g.strokeStyle = '#1d2b4f';
      const label = WHEEL[i].type === 'blade' ? '🗡' : this.wheelLabel(WHEEL[i]);
      g.strokeText(label, R - 30, 0);
      g.fillStyle = WHEEL[i].type === 'stars' ? '#ffe066' : '#fff';
      g.fillText(label, R - 30, 0);
      g.restore();
    }
    c.style.transform = `rotate(${this.wheelAngle}deg)`;
  }

  async spin() {
    if (this.wheelSpinning) return;
    if (!wheelFree()) {
      const ok = await portal.rewarded();
      if (!ok) return this.toast(t('adUnavailable'));
    } else {
      save.wheelAt = Date.now();
      persist();
    }
    this.wheelSpinning = true;
    $('btnSpin').disabled = true;
    // weighted pick
    const total = WHEEL.reduce((s, w) => s + w.w, 0);
    let r = Math.random() * total, idx = 0;
    for (let i = 0; i < WHEEL.length; i++) {
      r -= WHEEL[i].w;
      if (r <= 0) { idx = i; break; }
    }
    const n = WHEEL.length;
    const segDeg = 360 / n;
    const target = 360 * 6 + (360 - idx * segDeg) + (Math.random() - 0.5) * segDeg * 0.6;
    const start = this.wheelAngle % 360;
    const end = start + target - (start % 360);
    const c = $('wheelCanvas');
    const t0 = performance.now();
    const dur = 4200;
    let lastTick = 0;
    await new Promise((resolve) => {
      const tick = () => {
        const k = Math.min(1, (performance.now() - t0) / dur);
        const e = 1 - Math.pow(1 - k, 4);
        this.wheelAngle = start + (end - start) * e;
        c.style.transform = `rotate(${this.wheelAngle}deg)`;
        const seg = Math.floor((this.wheelAngle + segDeg / 2) / segDeg);
        if (seg !== lastTick) { lastTick = seg; audio.play('tick'); }
        if (k < 1) requestAnimationFrame(tick);
        else resolve();
      };
      tick();
    });
    const prize = WHEEL[idx];
    let txt = '';
    if (prize.type === 'coins') {
      const v = Math.round(prize.v * wheelScale());
      save.coins += v;
      txt = fmt(v) + ' 🪙';
    } else if (prize.type === 'stars') {
      save.stars += prize.v;
      txt = prize.v + ' ★';
    } else {
      const ps = progressSkin();
      if (ps) {
        own(ps.id);
        txt = ps.name[getLang()] || ps.name.en;
        setTimeout(() => this.showUnlock(ps), 600);
      } else {
        save.coins += 2000;
        txt = '2000 🪙';
      }
    }
    persist();
    audio.play('win');
    this.toast(t('youWon', txt));
    this.setWallet(true);
    this.wheelSpinning = false;
    this.refreshWheel();
    this.g.checkUnlocks();
  }

  // ---------------------------------------------------------------------
  // Settings / pause / unlock
  // ---------------------------------------------------------------------
  showSettings() {
    this.open('mSettings');
    this.resetArmed = false;
    $('btnReset').textContent = t('resetProgress');
    this.refreshSettings();
  }

  refreshSettings() {
    const s = save.settings;
    $('tgSound').classList.toggle('on', s.sound);
    $('tgMusic').classList.toggle('on', s.music);
    $('tgVibro').classList.toggle('on', s.vibro);
    $('qSound').style.opacity = s.sound ? 1 : 0.4;
    $('qMusic').style.opacity = s.music ? 1 : 0.4;
    $('segQuality').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === s.quality));
    $('segLang').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === getLang()));
  }

  toggleSetting(k) {
    save.settings[k] = !save.settings[k];
    persist();
    audio.setSound(save.settings.sound);
    audio.setMusic(save.settings.music);
    this.refreshSettings();
  }

  resetProgress() {
    if (!this.resetArmed) {
      this.resetArmed = true;
      $('btnReset').textContent = t('resetConfirm');
      return;
    }
    resetSave();
    this.close('mSettings');
    this.g.afterReset();
  }

  showPause() {
    this.open('mPause');
    this.refreshSettings();
  }

  showUnlock(skin) {
    this.unlockSkin = skin;
    $('unlockImg').src = this.thumbs[skin.id] || '';
    $('unlockName').textContent = skin.name[getLang()] || skin.name.en;
    this.open('mUnlock');
    audio.play('star');
  }
}

export { skinById };
