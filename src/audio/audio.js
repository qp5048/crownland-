/**
 * Procedural audio: every sound effect and both music loops are synthesised
 * with the Web Audio API, so the build ships zero audio files. All gain changes
 * use short ramps to avoid clicks; the master bus can be "ducked" by several
 * independent reasons (ad playing, tab hidden, SDK mute) at once.
 */
const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.musicVol = 0.55;
    this.sfxVol = 0.8;
    this.muted = false;
    this.duckReasons = new Set();
    this.track = null;
    this.wantTrack = null;
    this.stepTimer = null;
    this.lastPlay = new Map();
  }

  /** Must be called from a user gesture; safe to call repeatedly. */
  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try { this.ctx = new AC({ latencyHint: 'interactive' }); } catch { return; }
      const c = this.ctx;
      this.master = c.createGain();
      this.comp = c.createDynamicsCompressor();
      this.comp.threshold.value = -14; this.comp.knee.value = 10; this.comp.ratio.value = 4;
      this.comp.attack.value = 0.004; this.comp.release.value = 0.2;
      this.master.connect(this.comp).connect(c.destination);
      this.musicBus = c.createGain();
      this.sfxBus = c.createGain();
      this.musicBus.connect(this.master);
      this.sfxBus.connect(this.master);
      this.noise = this.makeNoise();
      this.applyVolumes(true);
      if (this.wantTrack) this.playMusic(this.wantTrack);
    }
    if (this.ctx.state === 'suspended' && !this.duckReasons.size) this.ctx.resume().catch(() => {});
  }

  makeNoise() {
    const c = this.ctx;
    const buf = c.createBuffer(1, c.sampleRate * 1.5, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  setVolumes(music, sfx) { this.musicVol = music; this.sfxVol = sfx; this.applyVolumes(); }
  setMuted(m) { this.muted = m; this.applyVolumes(); }

  applyVolumes(instant = false) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const ramp = (param, v) => {
      param.cancelScheduledValues(now);
      if (instant) param.setValueAtTime(v, now);
      else { param.setValueAtTime(param.value, now); param.linearRampToValueAtTime(v, now + 0.12); }
    };
    const silent = this.muted || this.duckReasons.size > 0;
    ramp(this.master.gain, silent ? 0 : 1);
    ramp(this.musicBus.gain, this.musicVol * 0.5);
    ramp(this.sfxBus.gain, this.sfxVol * 0.9);
  }

  /** Silence everything for a reason ('ad', 'hidden', 'sdk'); resumes when all reasons clear. */
  duck(reason, on) {
    const had = this.duckReasons.size > 0;
    if (on) this.duckReasons.add(reason); else this.duckReasons.delete(reason);
    if (!this.ctx) return;
    this.applyVolumes();
    const has = this.duckReasons.size > 0;
    if (has && !had) {
      clearTimeout(this.suspendTimer);
      this.suspendTimer = setTimeout(() => { if (this.duckReasons.size) this.ctx.suspend().catch(() => {}); }, 160);
    } else if (!has && had) {
      clearTimeout(this.suspendTimer);
      this.ctx.resume().catch(() => {});
    }
  }

  // ------------------------------------------------------------------ voices

  env(gain, t, a, peak, d, sustain = 0) {
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(peak, t + a);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, sustain || 0.0001), t + a + d);
  }

  tone({ type = 'sine', f, f2, t, a = 0.005, d = 0.2, vol = 0.3, bus, detune = 0, filter }) {
    const c = this.ctx;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + a + d);
    o.detune.value = detune;
    this.env(g, t, a, vol, d);
    let node = o;
    if (filter) {
      const bq = c.createBiquadFilter();
      bq.type = filter.type || 'lowpass';
      bq.frequency.setValueAtTime(filter.f, t);
      if (filter.f2) bq.frequency.exponentialRampToValueAtTime(filter.f2, t + a + d);
      bq.Q.value = filter.q || 0.7;
      node.connect(bq);
      node = bq;
    }
    node.connect(g).connect(bus || this.sfxBus);
    o.start(t);
    o.stop(t + a + d + 0.05);
  }

  noiseHit({ t, d = 0.1, vol = 0.3, type = 'highpass', f = 6000, f2, q = 0.8, bus }) {
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.noise;
    const bq = c.createBiquadFilter();
    bq.type = type;
    bq.frequency.setValueAtTime(f, t);
    if (f2) bq.frequency.exponentialRampToValueAtTime(f2, t + d);
    bq.Q.value = q;
    const g = c.createGain();
    this.env(g, t, 0.002, vol, d);
    src.connect(bq).connect(g).connect(bus || this.sfxBus);
    src.start(t, Math.random() * 0.5);
    src.stop(t + d + 0.05);
  }

  // ------------------------------------------------------------------- sfx

  play(name, opts = {}) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const nowMs = performance.now();
    const minGap = { tick: 35, click: 40, coin: 30 }[name] ?? 25;
    if (nowMs - (this.lastPlay.get(name) || 0) < minGap) return;
    this.lastPlay.set(name, nowMs);
    const t = this.ctx.currentTime + 0.005;
    const fn = SFX[name];
    if (fn) fn(this, t, opts);
  }

  // ----------------------------------------------------------------- music

  playMusic(name) {
    this.wantTrack = name;
    if (!this.ctx) return;
    if (this.track && this.track.name === name) return;
    const c = this.ctx;
    const now = c.currentTime;
    if (this.track) {
      const old = this.track;
      old.stopped = true;
      old.gain.gain.cancelScheduledValues(now);
      old.gain.gain.setValueAtTime(old.gain.gain.value, now);
      old.gain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
      setTimeout(() => old.gain.disconnect(), 1200);
    }
    if (!name || !TRACKS[name]) { this.track = null; return; }
    const gain = c.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(1, now + 1.2);
    gain.connect(this.musicBus);
    const def = TRACKS[name];
    this.track = { name, def, gain, step: 0, next: now + 0.1, stopped: false };
    if (!this.stepTimer) this.stepTimer = setInterval(() => this.schedule(), 25);
  }

  schedule() {
    const tr = this.track;
    if (!tr || !this.ctx) return;
    if (this.ctx.state !== 'running') { tr.next = Math.max(tr.next, this.ctx.currentTime + 0.05); return; }
    const spb = 60 / tr.def.bpm / 4; // seconds per 16th
    // after a long stall (tab throttling) skip ahead instead of bursting notes
    if (tr.next < this.ctx.currentTime - 0.2) tr.next = this.ctx.currentTime + 0.05;
    while (tr.next < this.ctx.currentTime + 0.14) {
      tr.def.step(this, tr.gain, tr.step, tr.next, spb);
      tr.step++;
      tr.next += spb;
    }
  }
}

/* ------------------------------------------------------------- sfx bank */

const SFX = {
  click(a, t) { a.tone({ type: 'sine', f: 900, f2: 620, t, d: 0.07, vol: 0.18 }); },
  hover(a, t) { a.tone({ type: 'sine', f: 1300, t, d: 0.03, vol: 0.05 }); },
  open(a, t) { a.noiseHit({ t, d: 0.18, vol: 0.08, type: 'bandpass', f: 800, f2: 3000, q: 1.2 }); },
  tick(a, t) { a.tone({ type: 'triangle', f: 1500, t, d: 0.03, vol: 0.07 }); },
  coin(a, t) {
    a.tone({ type: 'sine', f: 1318, t, d: 0.08, vol: 0.14 });
    a.tone({ type: 'sine', f: 1976, t: t + 0.06, d: 0.18, vol: 0.12 });
  },
  capture(a, t, { size = 1 } = {}) {
    const base = 72 + Math.min(7, Math.round(Math.log2(1 + size) * 1.5));
    [0, 4, 7, 12].forEach((n, k) => {
      a.tone({ type: 'triangle', f: midi(base + n), t: t + k * 0.055, d: 0.22, vol: 0.13 });
      a.tone({ type: 'sine', f: midi(base + n + 12), t: t + k * 0.055, d: 0.14, vol: 0.04 });
    });
    a.noiseHit({ t, d: 0.25, vol: 0.05, type: 'highpass', f: 5000 });
  },
  kill(a, t) {
    a.tone({ type: 'square', f: 660, f2: 140, t, d: 0.22, vol: 0.09, filter: { f: 3000, f2: 400 } });
    a.noiseHit({ t, d: 0.18, vol: 0.25, type: 'lowpass', f: 2500, f2: 200 });
    [0, 7, 12].forEach((n, k) => a.tone({ type: 'triangle', f: midi(76 + n), t: t + 0.08 + k * 0.05, d: 0.25, vol: 0.1 }));
  },
  enemyDeath(a, t) {
    a.noiseHit({ t, d: 0.14, vol: 0.08, type: 'lowpass', f: 1600, f2: 200 });
    a.tone({ type: 'sine', f: 420, f2: 180, t, d: 0.16, vol: 0.06 });
  },
  death(a, t) {
    a.tone({ type: 'sawtooth', f: 440, f2: 70, t, d: 0.8, vol: 0.16, filter: { f: 2200, f2: 180 } });
    a.tone({ type: 'sine', f: 120, f2: 40, t, d: 0.5, vol: 0.3 });
    a.noiseHit({ t, d: 0.5, vol: 0.22, type: 'lowpass', f: 1800, f2: 120 });
  },
  buy(a, t) {
    a.tone({ type: 'sine', f: 1046, t, d: 0.1, vol: 0.15 });
    a.tone({ type: 'sine', f: 1568, t: t + 0.07, d: 0.12, vol: 0.14 });
    a.tone({ type: 'sine', f: 2093, t: t + 0.14, d: 0.35, vol: 0.12 });
    a.noiseHit({ t: t + 0.12, d: 0.3, vol: 0.05, type: 'highpass', f: 7000 });
  },
  reward(a, t) {
    [0, 4, 7, 12, 16].forEach((n, k) => {
      a.tone({ type: 'triangle', f: midi(72 + n), t: t + k * 0.07, d: 0.35, vol: 0.12 });
      a.tone({ type: 'sine', f: midi(84 + n), t: t + k * 0.07, d: 0.25, vol: 0.04 });
    });
  },
  rankup(a, t) {
    const seq = [[60, 0], [64, 0.12], [67, 0.24], [72, 0.36], [76, 0.62], [79, 0.62], [84, 0.62]];
    for (const [n, dt] of seq) {
      a.tone({ type: 'sawtooth', f: midi(n), t: t + dt, d: dt > 0.5 ? 0.9 : 0.2, vol: 0.06, filter: { f: 3200 } });
      a.tone({ type: 'triangle', f: midi(n), t: t + dt, d: dt > 0.5 ? 1 : 0.22, vol: 0.1 });
    }
    a.noiseHit({ t: t + 0.62, d: 0.7, vol: 0.08, type: 'highpass', f: 6000 });
  },
  rankdown(a, t) {
    [67, 63, 60, 55].forEach((n, k) => a.tone({ type: 'triangle', f: midi(n), t: t + k * 0.14, d: 0.3, vol: 0.11 }));
  },
  count(a, t) { a.tone({ type: 'sine', f: 660, t, d: 0.16, vol: 0.18 }); a.tone({ type: 'sine', f: 1320, t, d: 0.08, vol: 0.05 }); },
  go(a, t) {
    a.tone({ type: 'triangle', f: 990, t, d: 0.35, vol: 0.2 });
    a.tone({ type: 'sine', f: 1980, t, d: 0.25, vol: 0.06 });
  },
  shield(a, t) {
    a.tone({ type: 'sine', f: 400, f2: 1600, t, d: 0.25, vol: 0.12 });
    a.noiseHit({ t, d: 0.3, vol: 0.07, type: 'bandpass', f: 2000, f2: 8000, q: 2 });
  },
  boost(a, t) {
    a.noiseHit({ t, d: 0.45, vol: 0.14, type: 'bandpass', f: 400, f2: 4000, q: 1.5 });
    a.tone({ type: 'sawtooth', f: 180, f2: 720, t, d: 0.4, vol: 0.05, filter: { f: 1500 } });
  },
  error(a, t) { a.tone({ type: 'square', f: 180, t, d: 0.15, vol: 0.06, filter: { f: 900 } }); },
  leave(a, t) { a.tone({ type: 'sine', f: 520, f2: 600, t, d: 0.05, vol: 0.04 }); },
};

/* ---------------------------------------------------------------- music */

function pluck(a, bus, f, t, d, vol, type = 'triangle') {
  a.tone({ type, f, t, a: 0.004, d, vol, bus, filter: { f: 4200, f2: 900 } });
}
function pad(a, bus, notes, t, d, vol) {
  for (const n of notes) {
    for (const det of [-7, 7]) {
      const c = a.ctx;
      const o = c.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = midi(n);
      o.detune.value = det;
      const f = c.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 900;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(vol, t + d * 0.3);
      g.gain.linearRampToValueAtTime(vol * 0.8, t + d * 0.75);
      g.gain.linearRampToValueAtTime(0.0001, t + d);
      o.connect(f).connect(g).connect(bus);
      o.start(t);
      o.stop(t + d + 0.05);
    }
  }
}
function kick(a, bus, t, vol = 0.55) {
  const c = a.ctx;
  const o = c.createOscillator();
  const g = c.createGain();
  o.frequency.setValueAtTime(150, t);
  o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.004);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
  o.connect(g).connect(bus);
  o.start(t);
  o.stop(t + 0.3);
}
const hat = (a, bus, t, vol = 0.05, d = 0.04) => a.noiseHit({ t, d, vol, type: 'highpass', f: 8000, bus });
const clap = (a, bus, t, vol = 0.12) => a.noiseHit({ t, d: 0.14, vol, type: 'bandpass', f: 1600, q: 1.4, bus });

const TRACKS = {
  // relaxed, lo-fi menu loop: Cmaj7 – Am7 – Fmaj7 – G6, 2 bars each
  menu: {
    bpm: 88,
    step(a, bus, s, t, spb) {
      const bar = Math.floor(s / 16) % 8;
      const i = s % 16;
      const chords = [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 64]];
      const ch = chords[Math.floor(bar / 2)];
      if (i === 0 && bar % 2 === 0) pad(a, bus, ch, t, spb * 32, 0.018);
      if (i === 0 || i === 10) kick(a, bus, t, 0.28);
      if (i === 4 || i === 12) a.noiseHit({ t, d: 0.09, vol: 0.05, type: 'bandpass', f: 2200, q: 1, bus });
      if (i % 2 === 0) hat(a, bus, t, i % 4 === 2 ? 0.025 : 0.014, 0.03);
      const arp = [0, 2, 1, 3, 2, 1, 3, 0];
      if (i % 2 === 0) {
        const n = ch[arp[(i / 2) % arp.length]] + 12;
        pluck(a, bus, midi(n), t, spb * 3, 0.05);
      }
      if (i === 0) a.tone({ type: 'sine', f: midi(ch[0] - 24), t, d: spb * 12, vol: 0.14, bus });
      if (i === 8 && bar % 2 === 1) a.tone({ type: 'sine', f: midi(ch[2] - 24), t, d: spb * 7, vol: 0.1, bus });
    },
  },
  // energetic match loop: Am – F – C – G at 124 BPM
  match: {
    bpm: 124,
    step(a, bus, s, t, spb) {
      const bar = Math.floor(s / 16) % 8;
      const i = s % 16;
      const roots = [57, 53, 60, 55];
      const r = roots[Math.floor(bar / 2)];
      const third = r === 57 ? 3 : 4;
      if (i % 4 === 0) kick(a, bus, t, 0.5);
      if (i === 4 || i === 12) clap(a, bus, t, 0.1);
      if (i % 4 === 2) hat(a, bus, t, 0.045, 0.05);
      else if (i % 2 === 1) hat(a, bus, t, 0.015, 0.025);
      // driving bass on 8ths with an octave hop
      if (i % 2 === 0) {
        const n = r - 24 + (i % 8 === 6 ? 12 : 0);
        a.tone({ type: 'sawtooth', f: midi(n), t, a: 0.004, d: spb * 1.6, vol: 0.1, bus, filter: { f: 700, f2: 250 } });
      }
      // arpeggiated lead
      const pattern = [0, 7, 12, third + 12, 7, 12, third, 7];
      if (bar >= 2) {
        const n = r + 12 + pattern[i % 8];
        pluck(a, bus, midi(n), t, spb * 1.5, i % 4 === 0 ? 0.045 : 0.03, 'square');
      }
      if (i === 0 && bar % 2 === 0) pad(a, bus, [r, r + third, r + 7], t, spb * 32, 0.012);
    },
  },
};
