/**
 * CrazyGames HTML5 SDK v3 integration with a faithful local mock.
 *
 * The real SDK is loaded by the <script> tag in index.html. When it is missing
 * (offline, blocked, itch/local file) or reports environment "disabled", the
 * game transparently uses the mock so everything — including rewarded ads —
 * can be tested without CrazyGames.
 */

export function createMockSDK({ adDuration = 2200, failRewarded = false, failMidgame = false } = {}) {
  const settingsListeners = new Set();
  const log = [];
  const sdk = {
    environment: 'mock',
    isMock: true,
    log,
    init: async () => {},
    game: {
      settings: { muteAudio: false, disableChat: false },
      gameplayStart: () => log.push('gameplayStart'),
      gameplayStop: () => log.push('gameplayStop'),
      happytime: () => log.push('happytime'),
      loadingStart: () => log.push('loadingStart'),
      loadingStop: () => log.push('loadingStop'),
      addSettingsChangeListener: (fn) => settingsListeners.add(fn),
      removeSettingsChangeListener: (fn) => settingsListeners.delete(fn),
    },
    ad: {
      hasAdblock: async () => false,
      requestAd(type, cb = {}) {
        log.push(`ad:${type}`);
        const fail = type === 'rewarded' ? failRewarded : failMidgame;
        if (fail) {
          setTimeout(() => cb.adError?.({ code: 'unfilled', message: 'No ad available (mock)' }), 0);
          return;
        }
        cb.adStarted?.();
        const done = () => cb.adFinished?.();
        if (adDuration <= 0 || typeof document === 'undefined') { setTimeout(done, 0); return; }
        showMockAdOverlay(type, adDuration, done);
      },
    },
    data: null, // the mock persists through localStorage instead
  };
  return sdk;
}

function showMockAdOverlay(type, duration, done) {
  const el = document.createElement('div');
  el.className = 'mock-ad';
  el.setAttribute('role', 'dialog');
  el.innerHTML = `<div class="mock-ad-box"><div class="mock-ad-tag">AD · ${type === 'rewarded' ? 'REWARDED' : 'MIDGAME'}</div>
    <div class="mock-ad-title">CrazyGames SDK mock</div><div class="mock-ad-sub">A real ad would play here</div>
    <div class="mock-ad-bar"><i></i></div></div>`;
  document.body.appendChild(el);
  const bar = el.querySelector('i');
  bar.style.transitionDuration = `${duration}ms`;
  requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = '100%'; }));
  setTimeout(() => { el.remove(); done(); }, duration);
}

/** Resolve the SDK to use: real CrazyGames when present and enabled, else the mock. */
export async function initSDK() {
  const real = typeof window !== 'undefined' ? window.CrazyGames?.SDK : null;
  if (real) {
    try {
      await real.init();
      if (real.environment && real.environment !== 'disabled') {
        real.isMock = false;
        return real;
      }
    } catch (e) {
      console.warn('[sdk] CrazyGames SDK init failed, using mock', e);
    }
  }
  return createMockSDK();
}

/**
 * Keeps gameplayStart/gameplayStop calls balanced: the SDK must only be told
 * about real state changes (menu ↔ gameplay ↔ pause).
 */
export class GameplayTracker {
  constructor(sdk) { this.sdk = sdk; this.active = false; }
  start() {
    if (this.active) return;
    this.active = true;
    try { this.sdk.game.gameplayStart(); } catch (e) { console.warn(e); }
  }
  stop() {
    if (!this.active) return;
    this.active = false;
    try { this.sdk.game.gameplayStop(); } catch (e) { console.warn(e); }
  }
  happytime() { try { this.sdk.game.happytime(); } catch (e) { console.warn(e); } }
  loading(on) {
    try { on ? this.sdk.game.loadingStart() : this.sdk.game.loadingStop(); } catch { /* optional API */ }
  }
}
