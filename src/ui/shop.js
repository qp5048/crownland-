import { BOOSTS, RARITIES, listFor, resolveLook } from '../cosmetics/catalog.js';
import { buyBoost, buyItem, equipItem, isOwned } from '../shop/economy.js';
import { itemName, t } from '../i18n/i18n.js';
import { h } from './dom.js';
import { coin, icon } from './icons.js';
import { drawThumb, Preview } from './preview.js';

const TABS = [
  { kind: 'skin', key: 'shop.skins', icon: 'sparkle' },
  { kind: 'hat', key: 'shop.hats', icon: 'crown' },
  { kind: 'trail', key: 'shop.trails', icon: 'map' },
  { kind: 'boost', key: 'shop.boosts', icon: 'bolt' },
];
export const FREE_BOOSTS_PER_DAY = 3;

export class ShopPage {
  constructor(root, app) {
    this.app = app;
    this.tab = 'skin';
    this.selected = null;
    this.el = h('section.screen.page.interactive');
    root.append(this.el);
    this.build();
  }

  build() {
    const app = this.app;
    this.title = h('h2');
    this.coinsEl = h('span');
    this.wallet = h('div.pill', { html: coin() }, this.coinsEl);
    this.backBtn = h('button.icon-btn', { html: icon('back'), on: { click: () => { app.sfx('click'); app.closePages(); } } });
    this.el.append(h('header.page-head', {}, this.backBtn, this.title, this.wallet));

    this.canvas = h('canvas');
    this.preview = new Preview(this.canvas, { compact: true });
    this.spName = h('div.sp-name');
    this.spDesc = h('div.sp-desc');
    this.spActions = h('div.sp-actions');
    const previewCard = h('div.shop-preview', {}, this.canvas, h('div.sp-info', {}, this.spName, this.spDesc, this.spActions));
    this.tabsEl = h('div.tabs');
    this.gridEl = h('div.grid-scroll');
    this.body = h('div.page-body', {}, h('div.shop', {}, previewCard, h('div.shop-main', {}, this.tabsEl, this.gridEl)));
    this.el.append(this.body);
  }

  open(tab = 'skin') {
    this.tab = tab;
    this.selected = null;
    this.el.classList.add('show');
    this.preview.setActive(true);
    this.render();
  }

  close() {
    this.el.classList.remove('show');
    this.preview.setActive(false);
  }

  get isOpen() { return this.el.classList.contains('show'); }

  render() {
    const s = this.app.state;
    this.title.textContent = t('shop.title');
    this.coinsEl.textContent = s.coins.toLocaleString();
    this.tabsEl.replaceChildren(...TABS.map((tb) => h(`button.tab${tb.kind === this.tab ? '.on' : ''}`, {
      html: `${icon(tb.icon)}<span>${t(tb.key)}</span>`,
      on: { click: () => { this.app.sfx('click'); this.tab = tb.kind; this.selected = null; this.render(); this.gridEl.scrollTop = 0; } },
    })));
    if (this.tab === 'boost') this.renderBoosts();
    else this.renderItems();
  }

  sortedItems() {
    return [...listFor(this.tab)].sort((a, b) => {
      const pa = a.price === null ? 1 : 0, pb = b.price === null ? 1 : 0;
      if (pa !== pb) return pa - pb;
      const r = RARITIES[a.rarity].order - RARITIES[b.rarity].order;
      return r || (a.price ?? 0) - (b.price ?? 0);
    });
  }

  renderItems() {
    const s = this.app.state;
    const items = this.sortedItems();
    if (!this.selected || this.selected.kind !== this.tab) this.selected = items.find((i) => i.id === s.equipped[this.tab]) || items[0];
    const grid = h('div.items');
    const thumbs = [];
    for (const it of items) {
      const owned = isOwned(s, it.kind, it.id);
      const equipped = s.equipped[it.kind] === it.id;
      let status;
      if (equipped) status = h('span.st.eq', { html: `${icon('check')}${t('common.equipped')}` });
      else if (owned) status = h('span.st', { html: `${icon('check')}${t('common.owned')}` });
      else if (it.price === null) status = h('span.st.pass', { html: `${icon('ticket')}${t('pass.exclusive')}` });
      else status = h(`span.pr${s.coins < it.price ? '.cant' : ''}`, { html: `${coin()}${it.price.toLocaleString()}` });
      const cv = h('canvas');
      const card = h(`button.item.r-${it.rarity}${this.selected === it ? '.sel' : ''}`, {
        style: { '--rc': RARITIES[it.rarity].color },
        title: `${itemName(it)} · ${t(`rarity.${it.rarity}`)}`,
        on: { click: () => { this.app.sfx('click'); this.selected = it; this.render(); } },
      }, h('span.rbar'), cv, h('span.nm', { text: itemName(it) }), status);
      card.style.setProperty('--rc', RARITIES[it.rarity].color);
      grid.append(card);
      thumbs.push([cv, it]);
    }
    const scroll = this.gridEl.scrollTop;
    this.gridEl.replaceChildren(grid);
    this.gridEl.scrollTop = scroll;
    requestAnimationFrame(() => { for (const [cv, it] of thumbs) drawThumb(cv, it); });
    this.renderDetail();
  }

  renderDetail() {
    const s = this.app.state;
    const it = this.selected;
    if (!it) return;
    const look = { ...s.equipped, [it.kind]: it.id };
    this.preview.setLook(resolveLook(look));
    const rar = RARITIES[it.rarity];
    this.spName.replaceChildren(h('span', { text: itemName(it) }), h('span.rar', { text: t(`rarity.${it.rarity}`), style: { background: rar.color } }));
    this.spDesc.textContent = it.price === null ? t('shop.passOnly') : '';
    const owned = isOwned(s, it.kind, it.id);
    const equipped = s.equipped[it.kind] === it.id;
    let btn;
    if (equipped) btn = h('button.btn.ghost', { disabled: true, html: `${icon('check')}${t('common.equipped')}` });
    else if (owned) btn = h('button.btn.green', { html: t('common.equip'), on: { click: () => this.equip(it) } });
    else if (it.price === null) btn = h('button.btn.gold', { html: `${icon('ticket')}${t('menu.pass')}`, on: { click: () => this.app.openPass() } });
    else btn = h(`button.btn.gold${s.coins < it.price ? '' : '.pulse'}`, { html: `${t('common.buy')} · ${coin()} ${it.price.toLocaleString()}`, on: { click: (e) => this.buy(it, e.currentTarget) } });
    this.spActions.replaceChildren(btn);
  }

  buy(it, el) {
    const res = buyItem(this.app.state, it.kind, it.id);
    if (!res.ok) {
      this.app.sfx('error');
      if (res.reason === 'coins') this.app.toast(t('toast.notEnough'), 'bad');
      return;
    }
    equipItem(this.app.state, it.kind, it.id);
    this.app.persist(true);
    this.app.sfx('buy');
    this.app.toast(`${icon('check')}${t('toast.bought')} ${itemName(it)}`, 'good');
    this.app.celebrateAt(el);
    this.render();
    this.app.checkAchievements(600);
  }

  equip(it) {
    if (equipItem(this.app.state, it.kind, it.id)) {
      this.app.persist();
      this.app.sfx('click');
      this.render();
    }
  }

  renderBoosts() {
    const s = this.app.state;
    this.selected = null;
    this.preview.setLook(resolveLook(s.equipped));
    this.spName.replaceChildren(h('span', { text: t('shop.boosts') }));
    this.spDesc.textContent = t('menu.boosts');
    this.spActions.replaceChildren();
    const wrap = h('div.boost-items');
    for (const b of BOOSTS) {
      const cant = s.coins < b.price;
      wrap.append(h('div.boost-card', {},
        h('div.b-ic', { html: icon(b.icon) }),
        h('div.b-info', {},
          h('b', { text: t(`boost.${b.id}`) }),
          h('p', { text: t(`boost.${b.id}.desc`) }),
          h('div.b-meta', {},
            h('span', {}, t('shop.inStock', { n: s.boosts[b.id] }), b.rankedAllowed ? null : h('div.warn', { text: t('shop.rankedOff') })),
            h(`button.btn.small.gold${cant ? '' : ''}`, { html: `${coin()} ${b.price}`, on: { click: (e) => this.buyBoost(b, e.currentTarget) } })))));
    }
    const today = this.app.today();
    const used = s.adBoost.day === today ? s.adBoost.count : 0;
    const left = Math.max(0, FREE_BOOSTS_PER_DAY - used);
    wrap.append(h('div.boost-card.ad', {},
      h('div.b-ic', { html: icon('video') }),
      h('div.b-info', {},
        h('b', { text: t('shop.freeBoost') }),
        h('p', { text: left ? t('shop.freeBoostDesc', { n: left }) : t('shop.freeBoostDone') }),
        h('div.b-meta', {}, h('span'),
          h('button.btn.small', { disabled: !left, html: `${icon('video', 'ad-ic')}${t('common.watchAd')}`, on: { click: () => this.app.watchAdForBoost().then(() => this.render()) } })))));
    this.gridEl.replaceChildren(wrap);
  }

  buyBoost(b, el) {
    const res = buyBoost(this.app.state, b.id);
    if (!res.ok) { this.app.sfx('error'); this.app.toast(t('toast.notEnough'), 'bad'); return; }
    this.app.state.armed[b.id] = true;
    this.app.persist(true);
    this.app.sfx('buy');
    this.app.toast(`${icon(b.icon)}${t('toast.boostArmed', { name: t(`boost.${b.id}`) })}`, 'good');
    this.app.celebrateAt(el);
    this.render();
  }
}
