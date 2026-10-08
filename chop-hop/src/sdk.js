// Thin wrapper around the CrazyGames HTML5 SDK v3.
// Works without the SDK too (local play / other portals): ads are simulated.

const SDK_URL = 'https://sdk.crazygames.com/crazygames-sdk-v3.js';

function loadScript(src, timeout = 4000) {
  return new Promise((resolve) => {
    if (window.CrazyGames && window.CrazyGames.SDK) return resolve(true);
    const s = document.createElement('script');
    let done = false;
    const finish = (ok) => { if (!done) { done = true; resolve(ok); } };
    s.src = src;
    s.async = true;
    s.onload = () => finish(true);
    s.onerror = () => finish(false);
    setTimeout(() => finish(false), timeout);
    document.head.appendChild(s);
  });
}

class Portal {
  constructor() {
    this.sdk = null;
    this.enabled = false;
    this.inGameplay = false;
    this.adPlaying = false;
    this.onAdStart = () => {};
    this.onAdEnd = () => {};
  }

  async init() {
    // Only try the SDK when hosted (not on file://)
    if (location.protocol === 'file:') return;
    try {
      const ok = await loadScript(SDK_URL);
      if (!ok || !window.CrazyGames || !window.CrazyGames.SDK) return;
      const sdk = window.CrazyGames.SDK;
      await sdk.init();
      this.sdk = sdk;
      this.enabled = sdk.environment && sdk.environment !== 'disabled';
    } catch (e) {
      this.sdk = null;
      this.enabled = false;
    }
  }

  get storage() {
    if (this.enabled && this.sdk && this.sdk.data) return this.sdk.data;
    try {
      const k = '__t';
      localStorage.setItem(k, '1');
      localStorage.removeItem(k);
      return localStorage;
    } catch (e) {
      return null;
    }
  }

  get lang() {
    try {
      if (this.enabled && this.sdk.user && this.sdk.user.systemInfo) {
        return (this.sdk.user.systemInfo.locale || '').slice(0, 2);
      }
    } catch (e) { /* ignore */ }
    return (navigator.language || 'en').slice(0, 2);
  }

  call(fn) {
    if (!this.enabled) return;
    try { fn(this.sdk); } catch (e) { /* ignore */ }
  }

  loadingStart() { this.call((s) => s.game.loadingStart()); }
  loadingStop() { this.call((s) => s.game.loadingStop()); }

  gameplayStart() {
    if (this.inGameplay) return;
    this.inGameplay = true;
    this.call((s) => s.game.gameplayStart());
  }

  gameplayStop() {
    if (!this.inGameplay) return;
    this.inGameplay = false;
    this.call((s) => s.game.gameplayStop());
  }

  happytime() { this.call((s) => s.game.happytime()); }

  _ad(type) {
    return new Promise((resolve) => {
      if (!this.enabled) {
        // Simulated ad outside of CrazyGames so every feature is testable.
        this.adPlaying = true;
        this.onAdStart();
        setTimeout(() => {
          this.adPlaying = false;
          this.onAdEnd();
          resolve(true);
        }, type === 'rewarded' ? 700 : 150);
        return;
      }
      const wasInGameplay = this.inGameplay;
      if (wasInGameplay) this.gameplayStop();
      let settled = false;
      const end = (ok) => {
        if (settled) return;
        settled = true;
        this.adPlaying = false;
        this.onAdEnd();
        resolve(ok);
      };
      try {
        this.sdk.ad.requestAd(type, {
          adStarted: () => { this.adPlaying = true; this.onAdStart(); },
          adFinished: () => end(true),
          adError: () => end(type !== 'rewarded'),
        });
      } catch (e) {
        end(type !== 'rewarded');
      }
    });
  }

  rewarded() { return this._ad('rewarded'); }
  midgame() { return this._ad('midgame'); }
}

export const portal = new Portal();
