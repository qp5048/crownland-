import { ADS } from '../config.js';
import { Emitter } from '../core/emitter.js';

/**
 * Ad policy on top of the SDK:
 *  - midgame only between matches, never before the 2nd finished match and
 *    never more often than once every 3 minutes;
 *  - rewarded only on explicit player request, reward only on adFinished;
 *  - emits adStart/adEnd so audio can be muted and input blocked.
 */
export class AdManager extends Emitter {
  constructor(sdk, { now = () => Date.now() } = {}) {
    super();
    this.sdk = sdk;
    this.now = now;
    this.matchesFinished = 0;
    this.lastMidgameAt = -Infinity;
    this.busy = false;
    this.adblock = false;
    Promise.resolve()
      .then(() => sdk.ad?.hasAdblock?.())
      .then((v) => { this.adblock = !!v; })
      .catch(() => {});
  }

  matchFinished() { this.matchesFinished++; }

  canMidgame() {
    return !this.busy
      && this.matchesFinished >= ADS.midgameMinMatches
      && this.now() - this.lastMidgameAt >= ADS.midgameMinInterval * 1000;
  }

  /** Try a midgame ad; resolves when gameplay may continue (never throws). */
  async midgame() {
    if (!this.canMidgame()) return false;
    this.lastMidgameAt = this.now();
    return this.request('midgame');
  }

  /** Resolves true only if the rewarded ad was watched to the end. */
  async rewarded(reason = '') {
    if (this.busy) return false;
    const ok = await this.request('rewarded');
    this.emit(ok ? 'rewardGranted' : 'rewardFailed', { reason });
    return ok;
  }

  /**
   * CrazyGames display banner (menus only, never during gameplay). A container
   * is filled at most once per minute; returns true if a banner was requested.
   */
  async banner(id, width, height) {
    const api = this.sdk.banner;
    if (!api?.requestBanner) return false;
    this.bannerAt = this.bannerAt || {};
    const key = `${id}:${width}x${height}`;
    if (this.now() - (this.bannerAt[key] ?? -Infinity) < 60_000) return false;
    this.bannerAt[key] = this.now();
    try {
      await api.requestBanner({ id, width, height });
      return true;
    } catch (error) {
      this.emit('bannerError', { id, error });
      return false;
    }
  }

  clearBanners() {
    // the refresh timestamps are kept: re-showing within a minute is skipped
    try { this.sdk.banner?.clearAllBanners?.(); } catch { /* ignore */ }
  }

  request(type) {
    this.busy = true;
    return new Promise((resolve) => {
      let started = false, settled = false;
      const finish = (ok, error) => {
        if (settled) return;
        settled = true;
        this.busy = false;
        if (started) this.emit('adEnd', { type, ok });
        if (!ok) this.emit('adError', { type, error });
        resolve(ok);
      };
      // safety net: a broken SDK must not freeze the game forever
      const guard = setTimeout(() => finish(false, { code: 'timeout' }), 90_000);
      try {
        this.sdk.ad.requestAd(type, {
          adStarted: () => {
            if (started) return;
            started = true;
            this.emit('adStart', { type });
          },
          adFinished: () => { clearTimeout(guard); finish(true); },
          adError: (error) => { clearTimeout(guard); finish(false, error); },
        });
      } catch (error) {
        clearTimeout(guard);
        finish(false, error);
      }
    });
  }
}
