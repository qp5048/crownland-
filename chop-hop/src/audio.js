// Procedural sound effects + a small generative music loop (no audio files needed).

class Audio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.soundOn = true;
    this.musicOn = true;
    this.suspendedByAd = false;
    this.noiseBuf = null;
    this.musicTimer = null;
    this.step = 0;
    this.nextTime = 0;
    this.tempo = 112;
    this.intensity = 0; // 0..1, raises during fever
    this.lastPlay = {};
  }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.9;
      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 4;
      this.master.connect(comp).connect(this.ctx.destination);
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = this.soundOn ? 0.8 : 0;
      this.sfxGain.connect(this.master);
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = this.musicOn ? 0.32 : 0;
      this.musicGain.connect(this.master);
      const len = this.ctx.sampleRate;
      this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.startMusic();
    }
    if (this.ctx.state === 'suspended' && !this.suspendedByAd) this.ctx.resume();
  }

  setSound(on) {
    this.soundOn = on;
    if (this.sfxGain) this.sfxGain.gain.setTargetAtTime(on ? 0.8 : 0, this.ctx.currentTime, 0.02);
  }

  setMusic(on) {
    this.musicOn = on;
    if (this.musicGain) this.musicGain.gain.setTargetAtTime(on ? 0.32 : 0, this.ctx.currentTime, 0.1);
  }

  pauseAll() {
    this.suspendedByAd = true;
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend();
  }

  resumeAll() {
    this.suspendedByAd = false;
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  // --- building blocks -------------------------------------------------
  tone({ type = 'sine', f0 = 440, f1 = null, dur = 0.15, vol = 0.3, attack = 0.005, delay = 0, dest = null, q = null, filter = null }) {
    const c = this.ctx;
    const t = c.currentTime + delay;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = o;
    if (filter) {
      const bf = c.createBiquadFilter();
      bf.type = filter;
      bf.frequency.value = q || 1200;
      node.connect(bf);
      node = bf;
    }
    node.connect(g).connect(dest || this.sfxGain);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  noise({ dur = 0.2, vol = 0.3, type = 'bandpass', f0 = 1000, f1 = null, q = 1, delay = 0, attack = 0.005, dest = null }) {
    const c = this.ctx;
    const t = c.currentTime + delay;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const bf = c.createBiquadFilter();
    bf.type = type;
    bf.Q.value = q;
    bf.frequency.setValueAtTime(f0, t);
    if (f1) bf.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(bf).connect(g).connect(dest || this.sfxGain);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.05);
  }

  // --- effects ---------------------------------------------------------
  play(name, p = 0) {
    if (!this.ctx || !this.soundOn || this.suspendedByAd) return;
    const now = performance.now();
    const minGap = name === 'slice' ? 28 : name === 'coin' ? 35 : 15;
    if (this.lastPlay[name] && now - this.lastPlay[name] < minGap) return;
    this.lastPlay[name] = now;
    const r = 1 + (Math.random() - 0.5) * 0.08;
    switch (name) {
      case 'flip':
        this.noise({ dur: 0.16, vol: 0.18, f0: 600 * r, f1: 2600, q: 2.5, attack: 0.03 });
        break;
      case 'slice': {
        const pitch = Math.min(2.2, 1 + p * 0.06);
        this.noise({ dur: 0.09, vol: 0.25, type: 'highpass', f0: 3000, q: 0.7 });
        this.tone({ type: 'triangle', f0: 520 * pitch * r, f1: 900 * pitch, dur: 0.09, vol: 0.12 });
        this.noise({ dur: 0.14, vol: 0.2, f0: 900, f1: 300, q: 4, delay: 0.015 });
        break;
      }
      case 'squish':
        this.noise({ dur: 0.18, vol: 0.28, f0: 500, f1: 160, q: 6 });
        this.tone({ type: 'sine', f0: 300 * r, f1: 120, dur: 0.15, vol: 0.18 });
        break;
      case 'stick':
        this.tone({ type: 'sine', f0: 190 * r, f1: 70, dur: 0.16, vol: 0.45 });
        this.noise({ dur: 0.05, vol: 0.3, type: 'highpass', f0: 2500, q: 0.5 });
        break;
      case 'stickWood':
        this.tone({ type: 'triangle', f0: 260 * r, f1: 110, dur: 0.12, vol: 0.4 });
        this.noise({ dur: 0.07, vol: 0.3, f0: 1400, q: 3 });
        break;
      case 'perfect':
        this.tone({ type: 'sine', f0: 880, dur: 0.12, vol: 0.18 });
        this.tone({ type: 'sine', f0: 1320, dur: 0.18, vol: 0.18, delay: 0.07 });
        break;
      case 'bounce':
        this.tone({ type: 'square', f0: 240 * r, f1: 150, dur: 0.06, vol: 0.08, filter: 'lowpass', q: 900 });
        break;
      case 'coin':
        this.tone({ type: 'square', f0: 988, dur: 0.06, vol: 0.07, filter: 'lowpass', q: 4000 });
        this.tone({ type: 'square', f0: 1319, dur: 0.12, vol: 0.07, delay: 0.05, filter: 'lowpass', q: 4000 });
        break;
      case 'star':
        [784, 988, 1175, 1568].forEach((f, i) => this.tone({ type: 'triangle', f0: f, dur: 0.18, vol: 0.14, delay: i * 0.06 }));
        break;
      case 'jelly':
        this.tone({ type: 'sine', f0: 160, f1: 620, dur: 0.28, vol: 0.35 });
        this.tone({ type: 'triangle', f0: 320, f1: 900, dur: 0.22, vol: 0.12, delay: 0.03 });
        break;
      case 'ring':
        this.tone({ type: 'sine', f0: 660, f1: 1320, dur: 0.3, vol: 0.18 });
        this.noise({ dur: 0.35, vol: 0.12, f0: 1500, f1: 5000, q: 1.5 });
        break;
      case 'death':
        this.tone({ type: 'sawtooth', f0: 420, f1: 60, dur: 0.6, vol: 0.18, filter: 'lowpass', q: 1600 });
        this.noise({ dur: 0.3, vol: 0.3, f0: 800, f1: 200, q: 1 });
        break;
      case 'shieldPop':
        this.noise({ dur: 0.25, vol: 0.35, type: 'highpass', f0: 1800, q: 0.7 });
        this.tone({ type: 'sine', f0: 900, f1: 300, dur: 0.2, vol: 0.2 });
        break;
      case 'smash':
        this.noise({ dur: 0.35, vol: 0.4, type: 'lowpass', f0: 1800, f1: 200, q: 0.8 });
        this.tone({ type: 'sine', f0: 120, f1: 40, dur: 0.35, vol: 0.4 });
        break;
      case 'fever':
        this.tone({ type: 'sawtooth', f0: 220, f1: 880, dur: 0.5, vol: 0.12, filter: 'lowpass', q: 2400 });
        this.noise({ dur: 0.6, vol: 0.18, f0: 400, f1: 6000, q: 1.2 });
        break;
      case 'bossHit':
        this.tone({ type: 'square', f0: 140 * r, f1: 70, dur: 0.12, vol: 0.18, filter: 'lowpass', q: 1200 });
        this.noise({ dur: 0.12, vol: 0.25, f0: 700, f1: 250, q: 5 });
        break;
      case 'target':
        this.tone({ type: 'sine', f0: 150, f1: 50, dur: 0.3, vol: 0.55 });
        this.noise({ dur: 0.12, vol: 0.35, f0: 2200, q: 1 });
        break;
      case 'throw':
        this.noise({ dur: 0.35, vol: 0.22, f0: 500, f1: 3500, q: 2, attack: 0.05 });
        break;
      case 'win':
        [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone({ type: 'triangle', f0: f, dur: 0.25, vol: 0.16, delay: i * 0.08 }));
        this.tone({ type: 'sine', f0: 1047, dur: 0.6, vol: 0.12, delay: 0.42 });
        break;
      case 'click':
        this.tone({ type: 'sine', f0: 700, f1: 500, dur: 0.05, vol: 0.12 });
        break;
      case 'buy':
        this.tone({ type: 'triangle', f0: 660, dur: 0.08, vol: 0.14 });
        this.tone({ type: 'triangle', f0: 990, dur: 0.14, vol: 0.14, delay: 0.07 });
        this.noise({ dur: 0.2, vol: 0.08, type: 'highpass', f0: 5000, q: 0.5, delay: 0.07 });
        break;
      case 'tick':
        this.tone({ type: 'square', f0: 1800, dur: 0.02, vol: 0.05, filter: 'lowpass', q: 3000 });
        break;
      case 'error':
        this.tone({ type: 'square', f0: 200, dur: 0.12, vol: 0.08, filter: 'lowpass', q: 800 });
        this.tone({ type: 'square', f0: 150, dur: 0.16, vol: 0.08, delay: 0.1, filter: 'lowpass', q: 800 });
        break;
      default:
        break;
    }
  }

  // --- music -----------------------------------------------------------
  startMusic() {
    if (this.musicTimer) return;
    this.nextTime = this.ctx.currentTime + 0.1;
    this.step = 0;
    this.musicTimer = setInterval(() => this.schedule(), 50);
  }

  schedule() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const spb = 60 / this.tempo / 4; // 16th notes
    while (this.nextTime < this.ctx.currentTime + 0.2) {
      this.playStep(this.step, this.nextTime, spb);
      this.nextTime += spb;
      this.step = (this.step + 1) % 128;
    }
  }

  playStep(s, t, spb) {
    if (!this.musicOn) return;
    const c = this.ctx;
    const dest = this.musicGain;
    // I - V - vi - IV in C major, two bars each chord
    const prog = [
      [48, 52, 55, 60],
      [43, 47, 50, 55],
      [45, 48, 52, 57],
      [41, 45, 48, 53],
    ];
    const bar = Math.floor(s / 32) % 4;
    const chord = prog[bar];
    const st = s % 16;
    const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);
    const env = (node, g, start, dur, vol) => {
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(vol, start + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    };
    // bass on 8ths
    if (st % 4 === 0 || st === 6 || st === 14) {
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = 'triangle';
      o.frequency.value = midi(chord[0] - 12 + (st === 6 || st === 14 ? 12 : 0));
      env(o, g, t, spb * 2.2, 0.32);
      o.connect(g).connect(dest);
      o.start(t);
      o.stop(t + spb * 2.5);
    }
    // plucky arpeggio
    const arp = [0, 1, 2, 3, 2, 1, 2, 3];
    if (st % 2 === 0) {
      const note = chord[arp[(st / 2) % 8]] + 12 + (this.intensity > 0.5 && st % 4 === 2 ? 12 : 0);
      const o = c.createOscillator();
      const g = c.createGain();
      const f = c.createBiquadFilter();
      o.type = 'square';
      o.frequency.value = midi(note);
      f.type = 'lowpass';
      f.frequency.value = 1400 + this.intensity * 2200;
      env(o, g, t, spb * 1.6, 0.06);
      o.connect(f).connect(g).connect(dest);
      o.start(t);
      o.stop(t + spb * 2);
    }
    // melody sparkle every bar start
    if (st === 0 && s % 64 === 0) {
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = 'sine';
      o.frequency.value = midi(chord[3] + 24);
      env(o, g, t, spb * 6, 0.05);
      o.connect(g).connect(dest);
      o.start(t);
      o.stop(t + spb * 7);
    }
    // kick
    if (st % 8 === 0) {
      const o = c.createOscillator();
      const g = c.createGain();
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
      env(o, g, t, 0.16, 0.5);
      o.connect(g).connect(dest);
      o.start(t);
      o.stop(t + 0.2);
    }
    // snare / clap
    if (st === 4 || st === 12) {
      const src = c.createBufferSource();
      src.buffer = this.noiseBuf;
      const f = c.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = 1800;
      const g = c.createGain();
      env(src, g, t, 0.12, 0.16);
      src.connect(f).connect(g).connect(dest);
      src.start(t, Math.random() * 0.5);
      src.stop(t + 0.15);
    }
    // hats
    if (st % 2 === 1 || this.intensity > 0.5) {
      const src = c.createBufferSource();
      src.buffer = this.noiseBuf;
      const f = c.createBiquadFilter();
      f.type = 'highpass';
      f.frequency.value = 7000;
      const g = c.createGain();
      env(src, g, t, 0.04, st % 4 === 2 ? 0.07 : 0.04);
      src.connect(f).connect(g).connect(dest);
      src.start(t, Math.random() * 0.5);
      src.stop(t + 0.06);
    }
  }
}

export const audio = new Audio();
