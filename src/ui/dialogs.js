import { formatTime } from '../core/math.js';
import { DAILY_REWARDS, dailyStatus } from '../battlepass/daily.js';
import { RANKS, rankIconSVG, rankName } from '../ranked/ranks.js';
import { LANGS, getLang, itemName, t } from '../i18n/i18n.js';
import { getItem, getSkin } from '../cosmetics/catalog.js';
import { ACHIEVEMENTS, achievementProgress, claimAchievement } from '../progress/achievements.js';
import { chestStatus, doubleChest, openChest } from '../progress/chest.js';
import { drawThumb } from './preview.js';
import { countUp, fmtClock, h, sleep } from './dom.js';
import { coin, icon } from './icons.js';
import { esc } from './hud.js';

/* ----------------------------------------------------------------- revive */

/** Resolves 'revive' or 'decline' (also on timeout). */
export function reviveDialog(app, info) {
  const seconds = 8;
  return app.modals.show((close) => {
    const ring = h('div.revive-ring', {}, h('span', { text: seconds }));
    const num = ring.querySelector('span');
    const t0 = performance.now();
    let raf = 0;
    const tick = (now) => {
      const left = Math.max(0, seconds - (now - t0) / 1000);
      ring.style.setProperty('--p', left / seconds);
      num.textContent = Math.ceil(left);
      if (left <= 0) { close('decline'); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const stop = () => cancelAnimationFrame(raf);
    const reason = t(`death.${info.cause || 'cut'}`, { name: info.killerName || '?' });
    return h('div', {},
      h('h2', { text: t('revive.title') }),
      h('p.res-reason', { text: reason }),
      ring,
      h('p', { text: t('revive.text') }),
      h('div.actions', {},
        h('button.btn.gold.big.pulse', { html: `${icon('video')}${t('revive.button')}`, on: { click: () => { stop(); app.sfx('click'); close('revive'); } } }),
        h('button.link', { text: t('revive.decline'), on: { click: () => { stop(); app.sfx('click'); close('decline'); } } })));
  }, { dismissible: false });
}

/* ---------------------------------------------------------------- results */

/**
 * Animated results. `data` = { result, coins, rp, xp, newBest, rankBefore, rankAfter }
 * Resolves with 'again' | 'menu'.
 */
export function resultsDialog(app, data) {
  const { result, coins } = data;
  return app.modals.show((close) => {
    const title = h(`h2.res-title${result.won ? '.win' : ''}`, { text: result.won ? t('results.victory') : t('results.over') });
    const reason = result.won ? '' : t(`death.${result.cause || 'cut'}`, { name: result.killerName || '?' });
    const stat = (ic, label, cls = '') => {
      const b = h('b', { text: '0' });
      const el = h(`div.stat${cls}`, {}, h('span', { html: icon(ic) }), b, h('small', { text: label }));
      return { el, b };
    };
    const sLand = stat('map', t('results.territory'), data.newBest ? '.best' : '');
    if (data.newBest) sLand.el.append(h('span.tag', { text: t('results.newBest') }));
    const sKills = stat('sword', t('results.kills'));
    const sTime = stat('clock', t('results.time'));
    const sPlace = stat('trophy', t('results.place'));

    const totalEl = h('span', { text: '0' });
    const list = h('ul');
    const line = (label, value, cls = '') => {
      const li = h(`li${cls}`, {}, h('span', { text: label }), h('span', { text: value }));
      list.append(li);
      return li;
    };
    const lines = [
      line(t('results.bLand'), `+${coins.territory}`),
      line(t('results.bKills'), `+${coins.kills}`),
      line(t('results.bTime'), `+${coins.time}`),
    ];
    if (coins.win) lines.push(line(t('results.bWin'), `+${coins.win}`));
    if (coins.bonus) lines.push(line(t('results.bBonus'), `+${coins.bonus}`));
    if (coins.ranked) lines.push(line(t('menu.ranked'), '×0.5', '.mult.ranked'));
    if (coins.magnet) lines.push(line(t('boost.magnet'), '×1.5', '.mult'));
    const coinbox = h('div.coinbox', {}, h('div.total', {}, h('span', { text: t('results.coins') }), h('b', { html: coin() }, totalEl)), list);

    let rpbox = null, rpBar = null, rpDelta = null;
    if (data.rp) {
      const r = data.rankAfter;
      rpBar = h('i', { style: { width: `${data.rankBefore.need ? (data.rankBefore.rp / data.rankBefore.need) * 100 : 100}%` } });
      rpDelta = h(`span.rk-delta${data.rp.delta >= 0 ? '.pos' : '.neg'}`, { text: `${data.rp.delta >= 0 ? '+' : ''}${data.rp.delta} RP` });
      rpbox = h('div.rpbox', {},
        h('div.rk-ic', { html: rankIconSVG(r.tier, 52) }),
        h('div.rk-info', {}, h('div.rk-name', {}, h('span', { text: rankName(r.tier, t) }), rpDelta), h('div.rk-bar', {}, rpBar)));
    }
    const xp = h('div.xpline', { html: `${icon('ticket')}${esc(t('results.xp', { n: data.xp }))}` });
    // "next goal": a concrete reason to play one more match
    let goal = null;
    if (data.goal) {
      const g = data.goal;
      const name = itemName(g.item);
      if (g.affordable) {
        goal = h('div.goal.can', {},
          h('span', { html: icon('cart') }),
          h('b', { text: t('results.canBuy', { name }) }),
          h('button.btn.small.gold', { text: t('results.toShop'), on: { click: () => { app.sfx('click'); close('shop'); } } }));
      } else {
        goal = h('div.goal', {},
          h('span', { html: icon('star') }),
          h('div.goal-info', {}, h('b', { text: t('results.next', { name }) }),
            h('div.goal-bar', {}, h('i', { style: { width: `${Math.round(g.progress * 100)}%` } })),
            h('small', { text: t('results.nextLeft', { n: g.left }) })));
      }
    }

    const doubleBtn = h('button.btn.gold.pulse', {
      html: `${icon('video')}${t('results.double')}`,
      disabled: coins.total <= 0,
      on: {
        click: async () => {
          doubleBtn.disabled = true;
          const ok = await app.doubleCoins(coins.total);
          if (ok) {
            doubleBtn.innerHTML = `${icon('check')}${t('results.doubled')}`;
            doubleBtn.classList.remove('pulse');
            await countUp(totalEl, coins.total, coins.total * 2, 700, (v) => Math.round(v).toLocaleString());
            app.celebrateAt(totalEl, true);
          } else {
            doubleBtn.disabled = false;
          }
        },
      },
    });
    const again = h('button.btn.green.big', { html: `${icon('refresh')}${t('results.again')}`, on: { click: () => { app.sfx('click'); close('again'); } } });
    const menu = h('button.btn.ghost', { html: `${icon('back')}${t('common.menu')}`, on: { click: () => { app.sfx('click'); close('menu'); } } });

    const root = h('div', {}, title, reason ? h('p.res-reason', { text: reason }) : null,
      h('div.stats', {}, sLand.el, sKills.el, sTime.el, sPlace.el), coinbox, rpbox, xp, goal,
      h('div.actions', {}, doubleBtn, again, menu));

    // animated count-up sequence
    (async () => {
      await sleep(350);
      app.sfx('tick');
      const c1 = countUp(sLand.b, 0, result.share * 100, 900, (v) => `${v.toFixed(1)}%`, () => app.sfx('tick'));
      await sleep(150);
      countUp(sKills.b, 0, result.kills, 600);
      await sleep(150);
      countUp(sTime.b, 0, result.seconds, 700, (v) => formatTime(v));
      await sleep(150);
      countUp(sPlace.b, 0, result.place, 500, (v) => `#${Math.max(1, Math.round(v))}`);
      await c1;
      for (const li of lines) { li.classList.add('in'); app.sfx('tick'); await sleep(140); }
      await countUp(totalEl, 0, coins.total, 900, (v) => Math.round(v).toLocaleString(), () => app.sfx('coin'));
      if (coins.total > 0) app.celebrateAt(totalEl, true);
      if (rpBar) {
        await sleep(200);
        const after = data.rankAfter;
        const need = RANKS[after.tier].need;
        const target = data.rp.promoted ? 100 : data.rp.demoted ? 0 : need ? (after.rp / need) * 100 : 100;
        rpBar.style.width = `${target}%`;
        app.sfx(data.rp.delta >= 0 ? 'reward' : 'error');
      }
    })();
    return root;
  }, { wide: true, dismissible: false });
}

/* ----------------------------------------------------------- rank change */

export function rankChangeDialog(app, change) {
  const up = change.promoted;
  return app.modals.show((close) => {
    const show = h(`div.rank-show${up ? '' : '.down'}`, {},
      h('div.rays'),
      h('div.rk.old', { html: rankIconSVG(change.from.tier, 140) }),
      h('div.rk.new', { html: rankIconSVG(change.to.tier, 140) }));
    setTimeout(() => app.sfx(up ? 'rankup' : 'rankdown'), 900);
    if (up) setTimeout(() => app.confettiScreen(), 1200);
    return h('div', {},
      h('h2', { text: up ? t('rank.up') : t('rank.down') }),
      show,
      h('p', { text: up ? t('rank.reached', { rank: rankName(change.to.tier, t) }) : t('rank.dropped', { rank: rankName(change.to.tier, t) }) }),
      h('div.actions', {}, h('button.btn.big', { class: up ? 'gold' : '', text: t('common.ok'), on: { click: () => { app.sfx('click'); close(); } } })));
  }, { dismissible: false });
}

/* ----------------------------------------------------------------- daily */

export function dailyDialog(app) {
  return app.modals.show((close) => {
    const st = dailyStatus(app.state);
    const days = h('div.days');
    DAILY_REWARDS.forEach((r, k) => {
      const dayStreak = k + 1;
      const got = st.claimedToday ? k <= st.index : k < st.index;
      const today = !st.claimedToday && k === st.index;
      days.append(h(`div.day${got ? '.got' : ''}${today ? '.today' : ''}`, {},
        h('span', { text: t('daily.day', { n: dayStreak }) }),
        h('span', { html: coin() }),
        h('b', { text: r.coins }),
        r.boost ? h('span', { html: icon({ speed: 'bolt', shield: 'shield', magnet: 'magnet' }[r.boost]) }) : null));
    });
    const actions = h('div.actions');
    if (st.claimedToday) {
      actions.append(h('button.btn.ghost', { disabled: true, text: t('daily.done') }));
    } else {
      actions.append(
        h('button.btn.gold.big.pulse', { html: `${icon('video')}${t('daily.claim2')}`, on: { click: async (e) => { const ok = await app.claimDaily(true, e.currentTarget); if (ok) close(); } } }),
        h('button.btn.green', { text: t('daily.claim'), on: { click: async (e) => { await app.claimDaily(false, e.currentTarget); close(); } } }));
    }
    return h('div', {},
      h('h2', { text: t('daily.title') }),
      h('p', { text: t('daily.streak', { n: st.streak }) }),
      days, actions);
  }, { wide: true });
}

/* -------------------------------------------------------------- settings */

export function settingsDialog(app) {
  return app.modals.show((close) => {
    const s = app.state.settings;
    const slider = (key, label, ic) => {
      const input = h('input.slider', { type: 'range', min: 0, max: 100, value: Math.round(s[key] * 100) });
      input.style.setProperty('--v', s[key]);
      input.addEventListener('input', () => {
        s[key] = Number(input.value) / 100;
        input.style.setProperty('--v', s[key]);
        app.applyAudioSettings();
      });
      input.addEventListener('change', () => { app.persist(); app.sfx('click'); });
      return h('div.set-row', {}, h('label', { html: `${icon(ic)}${label}` }), input);
    };
    const muteToggle = h(`button.toggle${s.muted ? '.on' : ''}`, { 'aria-label': t('settings.mute'), on: { click: () => { app.toggleMute(); muteToggle.classList.toggle('on', app.state.settings.muted); } } });
    const seg = (options, current, onPick) => {
      const el = h('div.seg');
      for (const o of options) {
        el.append(h(`button${o.value === current ? '.on' : ''}`, {
          text: o.label,
          on: { click: () => { app.sfx('click'); onPick(o.value); [...el.children].forEach((b, i) => b.classList.toggle('on', options[i].value === o.value)); } },
        }));
      }
      return el;
    };
    const lang = seg(LANGS.map((l) => ({ value: l.code, label: l.label })), getLang(), (v) => { app.setLanguage(v); close(); setTimeout(() => settingsDialog(app), 280); });
    const gfx = seg([{ value: 'high', label: t('settings.high') }, { value: 'low', label: t('settings.low') }], s.quality, (v) => app.setQuality(v));
    return h('div', {},
      h('h2', { text: t('settings.title') }),
      h('div.set-list', {},
        slider('music', t('settings.music'), 'music'),
        slider('sfx', t('settings.sfx'), 'sound'),
        h('div.set-row', {}, h('label', { html: `${icon('mute')}${t('settings.mute')}` }), muteToggle),
        h('div.set-row', {}, h('label', { html: `${icon('globe')}${t('settings.language')}` }), lang),
        h('div.set-row', {}, h('label', { html: `${icon('sparkle')}${t('settings.graphics')}` }), gfx),
        h('div.set-row', {}, h('label', { html: `${icon('keyboard')}${t('settings.controls')}` })),
        h('div.set-note', { text: t('settings.controlsText') }),
        h('button.btn.ghost', { html: `${icon('flag')}${t('settings.tutorial')}`, on: { click: () => { app.sfx('click'); close(); app.startTutorial(); } } })),
      h('div.set-note', { style: { textAlign: 'center', marginTop: '12px' }, text: `CrownLand.io v${app.version}` }));
  });
}

/* ----------------------------------------------------------------- pause */

export function pauseDialog(app) {
  return app.modals.show((close) => h('div', {},
    h('h2', { text: t('pause.title') }),
    h('div.actions', {},
      h('button.btn.green.big', { html: `${icon('play')}${t('pause.resume')}`, on: { click: () => { app.sfx('click'); close('resume'); } } }),
      h('button.btn.ghost', { html: `${icon('gear')}${t('menu.settings')}`, on: { click: () => { app.sfx('click'); close('settings'); } } }),
      h('button.btn.red', { html: `${icon('back')}${t('pause.quit')}`, on: { click: () => { app.sfx('click'); close('quit'); } } }))),
  { dismissible: true });
}

/* ------------------------------------------------------------------ chest */

const CHEST_SVG = `<svg class="chest-svg" viewBox="0 0 120 112" aria-hidden="true">
<ellipse cx="60" cy="104" rx="46" ry="6" fill="rgba(30,50,80,.18)"/>
<rect x="14" y="48" width="92" height="52" rx="7" fill="#b8642a" stroke="#6e3810" stroke-width="4"/>
<path d="M18 62h84M18 80h84" stroke="#9a4f1d" stroke-width="3"/>
<rect x="14" y="48" width="92" height="9" fill="#ffc21a" stroke="#a86b00" stroke-width="3"/>
<rect x="53" y="48" width="14" height="52" fill="#ffc21a" stroke="#a86b00" stroke-width="3"/>
<rect x="50" y="57" width="20" height="17" rx="4" fill="#fff1a6" stroke="#a86b00" stroke-width="3"/>
<circle cx="60" cy="65" r="2.6" fill="#a86b00"/>
<g class="lid"><path d="M14 48 Q14 16 60 16 Q106 16 106 48 Z" fill="#cf7a34" stroke="#6e3810" stroke-width="4" stroke-linejoin="round"/>
<path d="M53 17h14v31H53z" fill="#ffc21a" stroke="#a86b00" stroke-width="3"/>
<path d="M24 40 Q26 24 46 21" fill="none" stroke="#f0a25e" stroke-width="4" stroke-linecap="round"/></g>
</svg>`;

const BOOST_ICON = { bigStart: 'expand', shield: 'shield', speed: 'bolt', magnet: 'magnet' };

export function chestDialog(app) {
  let timer = 0;
  return app.modals.show((close) => {
    const s = app.state;
    const box = h('div.chest', { html: CHEST_SVG });
    const info = h('p');
    const reveal = h('div.chest-reward.hidden');
    const actions = h('div.actions');
    const renderWaiting = () => {
      const st = chestStatus(s);
      if (st.ready) {
        box.classList.add('ready');
        info.textContent = t('chest.hint');
        actions.replaceChildren(h('button.btn.gold.big.pulse', { html: `${icon('gift')}${t('chest.open')}`, on: { click: open } }));
        clearInterval(timer);
        return;
      }
      box.classList.remove('ready');
      info.textContent = t('chest.wait', { time: fmtClock(st.msLeft) });
      if (!actions.childElementCount) actions.append(h('button.btn.ghost', { text: t('common.close'), on: { click: () => { clearInterval(timer); close(); } } }));
    };
    const open = async () => {
      const reward = openChest(s);
      if (!reward) return;
      app.persist(true);
      app.sfx('buy');
      box.classList.remove('ready');
      box.classList.add('open');
      actions.replaceChildren();
      await sleep(450);
      app.sfx('reward');
      app.celebrateAt(box, !!reward.coins);
      const parts = [];
      if (reward.skin) {
        const cv = h('canvas');
        parts.push(cv, h('b', { text: t('chest.skin', { name: itemName(getSkin(reward.skin)) }) }));
        requestAnimationFrame(() => drawThumb(cv, getItem('skin', reward.skin)));
      }
      if (reward.coins) parts.push(h('div.cr-coins', { html: `${coin()}<span>+${reward.coins}</span>` }));
      if (reward.boost) parts.push(h('div.cr-boost', { html: `${icon(BOOST_ICON[reward.boost])}<span>${t(`boost.${reward.boost}`)} ×1</span>` }));
      reveal.replaceChildren(...parts);
      reveal.classList.remove('hidden');
      info.textContent = '';
      const collect = h('button.btn.green', { text: t('chest.collect'), on: { click: () => { app.sfx('click'); close(); } } });
      if (reward.coins || reward.boost) {
        const dbl = h('button.btn.gold.pulse', {
          html: `${icon('video')}${t('chest.double')}`,
          on: {
            click: async () => {
              dbl.disabled = true;
              const ok = await app.ads.rewarded('chest');
              if (!ok) { app.toast(t('toast.noAd'), 'bad'); dbl.disabled = false; return; }
              doubleChest(s, reward);
              app.persist(true);
              app.sfx('reward');
              app.celebrateAt(dbl, !!reward.coins);
              dbl.innerHTML = `${icon('check')}×2`;
              dbl.classList.remove('pulse');
              const span = reveal.querySelector('.cr-coins span');
              if (span) span.textContent = `+${reward.coins * 2}`;
              const bs = reveal.querySelector('.cr-boost span');
              if (bs) bs.textContent = `${t(`boost.${reward.boost}`)} ×2`;
            },
          },
        });
        actions.replaceChildren(dbl, collect);
      } else actions.replaceChildren(collect);
      app.menu.refresh();
      app.checkAchievements(800);
    };
    renderWaiting();
    timer = setInterval(renderWaiting, 1000);
    return h('div', {}, h('h2', { text: t('chest.title') }), box, reveal, info, actions);
  }, { onClose: () => { clearInterval(timer); app.menu.refresh(); } });
}

/* ----------------------------------------------------------- achievements */

export function achievementsDialog(app) {
  return app.modals.show(() => {
    const s = app.state;
    const list = h('div.ach-list');
    const render = () => {
      const rows = ACHIEVEMENTS.map((a) => {
        const p = achievementProgress(s, a);
        let right;
        if (p.claimed) right = h('span.ach-done', { html: icon('check') });
        else if (p.done) {
          right = h('button.btn.small.gold.pulse', {
            html: `${coin()} ${a.reward}`,
            on: {
              click: (e) => {
                const btn = e.currentTarget;
                if (!claimAchievement(s, a.id)) return;
                app.persist(true);
                app.sfx('reward');
                app.celebrateAt(btn, true);
                setTimeout(render, 300);
              },
            },
          });
        } else right = h('span.ach-reward', { html: `${coin()} ${a.reward}` });
        return h(`div.ach${p.done ? '.done' : ''}${p.claimed ? '.claimed' : ''}`, {},
          h('div.ach-ic', { html: icon(a.icon) }),
          h('div.ach-info', {},
            h('b', { text: t(`ach.${a.id}`) }),
            h('small', { text: t(`ach.${a.id}.desc`) }),
            h('div.ach-bar', {}, h('i', { style: { width: `${(p.cur / p.target) * 100}%` } })),
            h('span.ach-num', { text: `${p.cur} / ${p.target}` })),
          right);
      });
      list.replaceChildren(...rows);
    };
    render();
    return h('div', {}, h('h2', { text: t('ach.title') }), h('p', { text: `${s.achievements.claimed.length} / ${ACHIEVEMENTS.length}` }), list);
  }, { wide: true, onClose: () => app.menu.refresh() });
}
