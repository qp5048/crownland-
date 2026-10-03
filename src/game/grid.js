import { MAX_SLOTS } from '../config.js';

/**
 * Territory grid.
 *  owner[i]  — id of the player owning cell i (0 = neutral)
 *  trail[i]  — id of the player whose open trail passes through cell i
 *  trailSeq[i] — order in which the cell was added to that trail (self-hit grace)
 *  fxPrev / fxAt — previous owner and reveal time, used only for rendering waves
 *
 * All flood fills are 4-connected BFS on preallocated typed arrays, so a capture
 * never allocates more than the list of captured cells it returns.
 */
export class Grid {
  constructor(w, h = w) {
    this.w = w;
    this.h = h;
    this.n = w * h;
    this.owner = new Uint8Array(this.n);
    this.trail = new Uint8Array(this.n);
    this.trailSeq = new Int32Array(this.n);
    this.counts = new Int32Array(MAX_SLOTS + 1);
    this.stamp = new Uint32Array(this.n);
    this.gen = 0;
    this.queue = new Int32Array(this.n);
    this.fxPrev = new Uint8Array(this.n);
    this.fxAt = new Float32Array(this.n);
    this.version = 0; // bumps on every ownership change (minimap cache key)
  }

  idx(x, y) { return y * this.w + x; }
  inside(x, y) { return x >= 0 && y >= 0 && x < this.w && y < this.h; }

  nextGen() {
    if (this.gen >= 0xfffffff0) { this.stamp.fill(0); this.gen = 0; }
    return ++this.gen;
  }

  setOwner(i, id) {
    const o = this.owner[i];
    if (o === id) return o;
    if (o) this.counts[o]--;
    if (id) this.counts[id]++;
    this.owner[i] = id;
    this.version++;
    return o;
  }

  /** Mark a filled disc of cells as owned by id (used for spawns). */
  fillDisc(cx, cy, r, id, out) {
    const r2 = r * r;
    const x0 = Math.max(0, Math.floor(cx - r)), x1 = Math.min(this.w - 1, Math.ceil(cx + r));
    const y0 = Math.max(0, Math.floor(cy - r)), y1 = Math.min(this.h - 1, Math.ceil(cy + r));
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const dx = x + 0.5 - cx, dy = y + 0.5 - cy;
        if (dx * dx + dy * dy < r2) {
          const i = y * this.w + x;
          const prev = this.setOwner(i, id);
          if (out) out.push(i, prev);
        }
      }
    }
  }

  /**
   * Close a trail for player `id`.
   *  1. every trail cell becomes owned by id;
   *  2. BFS from the map border through cells NOT owned by id marks "outside";
   *  3. every non-outside, non-owned region that touches the new trail is filled.
   * Holes that existed before and are not touched by the trail stay holes, other
   * players' land inside the loop is taken, and regions against the map edge are
   * only enclosed when the edge cells themselves belong to id.
   * Returns { cells, prev } — captured cell indices and their previous owners.
   */
  capture(id, trailCells) {
    const { w, h, owner, stamp, queue, trail } = this;
    const cells = [];
    const prev = [];
    for (let k = 0; k < trailCells.length; k++) {
      const c = trailCells[k];
      if (trail[c] === id) trail[c] = 0;
      if (owner[c] !== id) {
        prev.push(owner[c]);
        cells.push(c);
        this.setOwner(c, id);
      }
    }

    // 1) outside flood fill seeded from the border
    const outside = this.nextGen();
    let head = 0, tail = 0;
    const seed = (i) => {
      if (owner[i] !== id && stamp[i] !== outside) { stamp[i] = outside; queue[tail++] = i; }
    };
    for (let x = 0; x < w; x++) { seed(x); seed((h - 1) * w + x); }
    for (let y = 1; y < h - 1; y++) { seed(y * w); seed(y * w + w - 1); }
    while (head < tail) {
      const i = queue[head++];
      const x = i % w;
      if (x > 0) seed(i - 1);
      if (x < w - 1) seed(i + 1);
      if (i >= w) seed(i - w);
      if (i < this.n - w) seed(i + w);
    }

    // 2) fill enclosed regions adjacent to the trail
    const fill = this.nextGen();
    head = 0; tail = 0;
    const push = (i) => {
      const s = stamp[i];
      if (owner[i] !== id && s !== outside && s !== fill) { stamp[i] = fill; queue[tail++] = i; }
    };
    for (let k = 0; k < trailCells.length; k++) {
      const c = trailCells[k];
      const x = c % w;
      if (x > 0) push(c - 1);
      if (x < w - 1) push(c + 1);
      if (c >= w) push(c - w);
      if (c < this.n - w) push(c + w);
    }
    while (head < tail) {
      const i = queue[head++];
      prev.push(owner[i]);
      cells.push(i);
      this.setOwner(i, id);
      const x = i % w;
      if (x > 0) push(i - 1);
      if (x < w - 1) push(i + 1);
      if (i >= w) push(i - w);
      if (i < this.n - w) push(i + w);
    }
    return { cells, prev };
  }

  /** Remove every cell of `id` (optionally giving it to `to`). Returns changed cells. */
  reassignAll(id, to = 0) {
    const cells = [];
    if (!this.counts[id]) return cells;
    const { owner } = this;
    for (let i = 0; i < this.n; i++) {
      if (owner[i] === id) { cells.push(i); this.setOwner(i, to); }
    }
    return cells;
  }

  clearTrail(cells, id) {
    for (let k = 0; k < cells.length; k++) {
      if (this.trail[cells[k]] === id) this.trail[cells[k]] = 0;
    }
  }

  /** Total cells owned by id, recounted from scratch (tests / sanity checks). */
  recount(id) {
    let c = 0;
    for (let i = 0; i < this.n; i++) if (this.owner[i] === id) c++;
    return c;
  }

  share(id) { return this.counts[id] / this.n; }
}
