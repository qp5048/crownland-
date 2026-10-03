/**
 * Hand-tuned 24×24 vector icons with one consistent style (2px round strokes).
 * `icon(name, cls)` returns an inline SVG string.
 */
const P = {
  play: '<path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="currentColor" stroke="none"/>',
  pause: '<path d="M8.5 5v14M15.5 5v14"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  sound: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18.2 6.5a8 8 0 0 1 0 11"/>',
  mute: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="m16 9.5 5 5m0-5-5 5"/>',
  music: '<path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
  fullscreen: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  back: '<path d="M15 5 8 12l7 7"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
  cart: '<path d="M3 4h2.2l2.3 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2"/><circle cx="9.5" cy="20" r="1.4" fill="currentColor"/><circle cx="17" cy="20" r="1.4" fill="currentColor"/>',
  ticket: '<path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V10a2 2 0 0 0 0 4v2.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5V14a2 2 0 0 0 0-4z"/><path d="M14 6v12" stroke-dasharray="2 2.2"/>',
  gift: '<rect x="3.5" y="8.5" width="17" height="4" rx="1"/><path d="M5 12.5V20h14v-7.5M12 8.5V20M12 8.5S10.5 4 8 4.5 7 8.5 12 8.5Zm0 0s1.5-4.5 4-4 1 4-4 4Z"/>',
  scroll: '<path d="M7 4h11a2 2 0 0 1 2 2v1h-4M7 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7"/><path d="M8.5 9h6M8.5 12.5h6M8.5 16h4"/>',
  trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 5.5H4v1.5a4 4 0 0 0 4 4M17 5.5h3v1.5a4 4 0 0 1-4 4M12 14v4M8 21h8M9.5 18h5"/>',
  sword: '<path d="M14.5 4H20v5.5L10 19.5l-5.5-5.5zM7 17l-3 3M5.5 13.5l5 5"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  map: '<path d="m9 4.5-5 2v13l5-2 6 2 5-2v-13l-5 2z"/><path d="M9 4.5v13M15 6.5v13"/>',
  shield: '<path d="M12 3.5 5 6v5.5c0 4.4 3 7.8 7 9 4-1.2 7-4.6 7-9V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  bolt: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z" fill="currentColor" stroke-linejoin="round"/>',
  magnet: '<path d="M6 4v8a6 6 0 0 0 12 0V4h-4v8a2 2 0 0 1-4 0V4z"/><path d="M6 8h4M14 8h4"/>',
  expand: '<rect x="8" y="8" width="8" height="8" rx="1.5"/><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2.5"/><path d="m16 10.5 5-3v9l-5-3z" fill="currentColor"/>',
  star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" fill="currentColor"/>',
  crown: '<path d="M4 18V8l4.5 4L12 5l3.5 7L20 8v10z" fill="currentColor"/><path d="M4 18h16"/>',
  flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5S14.5 17.9 12 20.5C9.5 17.9 8.5 15.1 8.5 12S9.5 6.1 12 3.5Z"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4.5V11h-6.5"/>',
  hand: '<path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12m0-1.5V5a1.5 1.5 0 0 1 3 0v6m0-4.5a1.5 1.5 0 0 1 3 0V13m0-3.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.6a6 6 0 0 1-4.6-2.2L4.6 15.6a1.6 1.6 0 0 1 2.4-2.1L8 14.5"/>',
  cursor: '<path d="M5 3.5 19 11l-6 1.8L10.5 19z" fill="currentColor" stroke-linejoin="round"/>',
  users: '<circle cx="9" cy="8.5" r="3.5"/><path d="M3 20a6 6 0 0 1 12 0M16 5.2a3.5 3.5 0 0 1 0 6.6M18 14.5a6 6 0 0 1 3 5.5"/>',
  keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7.5 14h9"/>',
};

export function icon(name, cls = '') {
  return `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
}

/** The coin: a filled, layered vector, used everywhere money appears. */
export function coin(cls = '') {
  return `<svg class="coin ${cls}" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12.8" r="9.2" fill="#d98a00"/><circle cx="12" cy="11.6" r="9.2" fill="#ffc21a"/><circle cx="12" cy="11.6" r="6.6" fill="none" stroke="#ffe27a" stroke-width="1.6"/><path d="M12 7.6v8M9.8 9.4c0-1 1-1.6 2.2-1.6s2.2.6 2.2 1.5c0 2.1-4.4 1.2-4.4 3.4 0 .9 1 1.6 2.2 1.6s2.2-.6 2.2-1.6" fill="none" stroke="#b56d00" stroke-width="1.5" stroke-linecap="round"/></svg>`;
}

export function logoSVG(cls = '') {
  return `<svg class="${cls}" viewBox="0 0 64 44" aria-hidden="true"><path d="M7 36V12l12 11 13-18 13 18 12-11v24z" fill="#ffd23f" stroke="#a86b00" stroke-width="3.2" stroke-linejoin="round"/><rect x="5" y="32" width="54" height="9" rx="3.5" fill="#f0a500" stroke="#a86b00" stroke-width="3.2"/><circle cx="32" cy="22" r="3.6" fill="#ff4d6d"/><circle cx="18" cy="27" r="2.6" fill="#3fa9f5"/><circle cx="46" cy="27" r="2.6" fill="#3ddc84"/></svg>`;
}
