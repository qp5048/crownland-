import { DT, MAX_FRAME_STEPS } from '../config.js';

/**
 * Fixed-step simulation with interpolated rendering.
 * update(dt) runs at exactly TICK_RATE; render(alpha, frameDt) runs once per
 * animation frame with alpha ∈ [0,1) describing how far we are between the
 * previous and the current simulation state.
 */
export class GameLoop {
  constructor({ update, render }) {
    this.update = update;
    this.render = render;
    this.acc = 0;
    this.last = 0;
    this.running = false;
    this.simPaused = false;
    this.raf = 0;
    this.frame = this.frame.bind(this);
    this.fps = 60;
  }
  start() {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }
  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }
  frame(now) {
    if (!this.running) return;
    this.raf = requestAnimationFrame(this.frame);
    let frameDt = (now - this.last) / 1000;
    this.last = now;
    if (frameDt > 0.25) frameDt = 0.25; // tab was in background or a long GC pause
    if (frameDt < 0) frameDt = 0;
    this.fps += (1 / Math.max(frameDt, 1e-3) - this.fps) * 0.05;
    if (!this.simPaused) {
      this.acc += frameDt;
      let steps = 0;
      while (this.acc >= DT && steps < MAX_FRAME_STEPS) {
        this.update(DT);
        this.acc -= DT;
        steps++;
      }
      if (steps === MAX_FRAME_STEPS) this.acc = 0;
    }
    this.render(this.simPaused ? 1 : this.acc / DT, frameDt);
  }
}
