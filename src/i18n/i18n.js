import { STRINGS } from './strings.js';

export const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
];

let lang = 'en';
const listeners = new Set();
const plural = {};

export function detectLang() {
  const nav = (globalThis.navigator?.languages?.[0] || globalThis.navigator?.language || 'en').toLowerCase();
  return nav.startsWith('ru') || nav.startsWith('uk') || nav.startsWith('be') || nav.startsWith('kk') ? 'ru' : 'en';
}

export function setLang(code) {
  lang = STRINGS[code] ? code : 'en';
  if (globalThis.document) document.documentElement.lang = lang;
  for (const fn of listeners) fn(lang);
}
export const getLang = () => lang;
export function onLangChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }

function pick(value, n) {
  if (typeof value !== 'object') return value;
  if (!plural[lang]) plural[lang] = new Intl.PluralRules(lang);
  const form = plural[lang].select(n ?? 0);
  return value[form] ?? value.other ?? value.many ?? value.one;
}

/** Translate `key`, substituting {params}. Falls back to English, then the key. */
export function t(key, params) {
  let v = STRINGS[lang][key];
  if (v === undefined) v = STRINGS.en[key];
  if (v === undefined) return key;
  v = pick(v, params?.n);
  if (params) v = v.replace(/\{(\w+)\}/g, (m, k) => (params[k] !== undefined ? String(params[k]) : m));
  return v;
}

export const itemName = (item) => t(item.kind === 'skin' ? `item.${item.id}` : `${item.kind}.${item.id}`);

/** Fill elements carrying data-i18n / data-i18n-placeholder / data-i18n-title. */
export function applyDom(root = globalThis.document) {
  if (!root) return;
  root.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  root.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
    el.setAttribute('aria-label', el.title);
  });
}
