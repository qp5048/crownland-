import test from 'node:test';
import assert from 'node:assert/strict';
import { Grid } from '../src/game/grid.js';

/** Build a grid from ASCII art: '.' neutral, digits = owner, '*' = trail of player 1. */
function fromArt(art) {
  const rows = art.trim().split('\n').map((r) => r.trim());
  const g = new Grid(rows[0].length, rows.length);
  const trail = [];
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const i = g.idx(x, y);
      if (ch === '*') { g.trail[i] = 1; trail.push(i); }
      else if (ch !== '.') g.setOwner(i, Number(ch));
    });
  });
  return { g, trail };
}

function toArt(g) {
  let s = '';
  for (let y = 0; y < g.h; y++) {
    for (let x = 0; x < g.w; x++) s += g.owner[g.idx(x, y)] || '.';
    s += '\n';
  }
  return s.trim();
}

function assertCounts(g) {
  for (let id = 1; id < 6; id++) assert.equal(g.counts[id], g.recount(id), `count of ${id}`);
}

test('simple loop off the side of the territory is filled', () => {
  const { g, trail } = fromArt(`
    ..........
    .111......
    .111****..
    .111...*..
    .111****..
    ..........`);
  g.capture(1, trail);
  assert.equal(toArt(g), `
    ..........
    .111......
    .1111111..
    .1111111..
    .1111111..
    ..........`.trim().split('\n').map((r) => r.trim()).join('\n'));
  assertCounts(g);
});

test('capturing a region takes enemy land inside it', () => {
  const { g, trail } = fromArt(`
    ...........
    .11*****...
    .11.222*...
    .11.222*...
    .11*****...
    ...........`);
  const res = g.capture(1, trail);
  assert.equal(g.counts[2], 0);
  assert.equal(g.recount(1), g.counts[1]);
  assert.ok(res.prev.includes(2));
  assertCounts(g);
});

test('pre-existing holes not touched by the trail stay holes', () => {
  const { g, trail } = fromArt(`
    ............
    .11111......
    .1.2.1***...
    .11111..*...
    .11111***...
    ............`);
  g.capture(1, trail);
  // the hole with the neutral cell and the enemy cell is untouched
  assert.equal(g.owner[g.idx(2, 2)], 0);
  assert.equal(g.owner[g.idx(3, 2)], 2);
  assert.equal(g.owner[g.idx(6, 3)], 1);
  assert.equal(g.owner[g.idx(7, 3)], 1);
  assertCounts(g);
});

test('nested loop: a loop drawn inside an enemy island inside the area', () => {
  const { g, trail } = fromArt(`
    .............
    .1***********
    .1*222222...*
    .1*2.....2..*
    .1*222222...*
    .1***********`);
  g.capture(1, trail);
  for (let y = 1; y <= 5; y++) for (let x = 1; x <= 12; x++) assert.equal(g.owner[g.idx(x, y)], 1, `${x},${y}`);
  assertCounts(g);
});

test('a loop against the map edge is not enclosed unless the edge cells are ours', () => {
  const a = fromArt(`
    .1*.*.
    .1*.*.
    .1***.
    ......`);
  a.g.capture(1, a.trail);
  // column 3 rows 0-1 touches the top edge → still outside
  assert.equal(a.g.owner[a.g.idx(3, 0)], 0);
  assert.equal(a.g.owner[a.g.idx(3, 1)], 0);

  const b = fromArt(`
    11****
    11...*
    11****
    ......`);
  b.g.capture(1, b.trail);
  assert.equal(b.g.owner[b.g.idx(3, 1)], 1);
  assert.equal(b.g.owner[b.g.idx(4, 1)], 1);
  assertCounts(b.g);
});

test('trail running along the border row encloses land next to it', () => {
  const { g, trail } = fromArt(`
    1*****
    1....*
    1....*
    111111`);
  g.capture(1, trail);
  assert.equal(g.counts[1], 24);
  assertCounts(g);
});

test('diagonal trail steps still seal the region (4-connected flood)', () => {
  const { g, trail } = fromArt(`
    .........
    .111.....
    .111*....
    .111.*...
    .111*....
    .........`);
  g.capture(1, trail);
  assert.equal(g.owner[g.idx(4, 3)], 1);
  assertCounts(g);
});

test('two players capturing in the same tick keep a consistent grid (both orders)', () => {
  for (const order of [[1, 2], [2, 1]]) {
    const g = new Grid(12, 9);
    for (let y = 0; y < 9; y++) { g.setOwner(g.idx(0, y), 1); g.setOwner(g.idx(1, y), 1); }
    for (let x = 4; x <= 8; x++) g.setOwner(g.idx(x, 4), 2); // p2 island inside p1's loop
    const t1 = [], t2 = [];
    for (let x = 2; x <= 10; x++) t1.push(g.idx(x, 1), g.idx(x, 7));
    for (let y = 2; y <= 6; y++) t1.push(g.idx(10, y));
    t2.push(g.idx(4, 3), g.idx(4, 2), g.idx(5, 2), g.idx(6, 2), g.idx(7, 2), g.idx(8, 2), g.idx(8, 3));
    for (const i of t1) g.trail[i] = 1;
    for (const i of t2) g.trail[i] = 2;
    for (const id of order) g.capture(id, id === 1 ? t1 : t2);
    assertCounts(g);
    let owned = 0;
    for (let i = 0; i < g.n; i++) if (g.owner[i]) owned++;
    assert.equal(g.counts[1] + g.counts[2], owned);
    // p1's loop interior is always p1's except whatever p2 grabbed afterwards
    assert.equal(g.owner[g.idx(3, 5)], 1);
    if (order[0] === 1) assert.equal(g.owner[g.idx(6, 3)], 1); // p2 found nothing left to enclose
    else assert.equal(g.counts[2], 0);                          // p1 swallowed p2 entirely
  }
});

test('reassignAll moves every cell and keeps counts right', () => {
  const { g } = fromArt(`
    1122
    1122
    ..22`);
  const moved = g.reassignAll(2, 1);
  assert.equal(moved.length, 6);
  assert.equal(g.counts[2], 0);
  assert.equal(g.counts[1], 10);
  assertCounts(g);
});

test('large random captures never desync counters', () => {
  const g = new Grid(64, 64);
  let seed = 7;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  for (let round = 0; round < 200; round++) {
    const id = 1 + Math.floor(rnd() * 4);
    const x0 = Math.floor(rnd() * 50), y0 = Math.floor(rnd() * 50);
    const wdt = 3 + Math.floor(rnd() * 10), hgt = 3 + Math.floor(rnd() * 10);
    const trail = [];
    for (let x = x0; x <= x0 + wdt; x++) { trail.push(g.idx(x, y0), g.idx(x, y0 + hgt)); }
    for (let y = y0 + 1; y < y0 + hgt; y++) { trail.push(g.idx(x0, y), g.idx(x0 + wdt, y)); }
    g.capture(id, trail);
    // the rectangle interior is fully owned after a closed rectangular loop
    assert.equal(g.owner[g.idx(x0 + 1, y0 + 1)], id);
  }
  assertCounts(g);
});
