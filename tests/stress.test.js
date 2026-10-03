import test from 'node:test';
import assert from 'node:assert/strict';
import { World } from '../src/game/world.js';
import { BotController } from '../src/ai/bot.js';
import { botProfile, PERSONALITIES } from '../src/ai/difficulty.js';
import { Rng } from '../src/core/rng.js';
import { DT, GRID, MAX_SLOTS } from '../src/config.js';

/** Every structural invariant the world must keep after any tick. */
function checkInvariants(w, label) {
  const g = w.grid;
  const owned = new Int32Array(MAX_SLOTS + 1);
  for (let i = 0; i < g.n; i++) owned[g.owner[i]]++;
  for (let id = 1; id <= MAX_SLOTS; id++) assert.equal(g.counts[id], owned[id], `${label}: count of ${id}`);
  const trailOf = new Map();
  for (const p of w.players) {
    if (w.byId[p.id] !== p) continue;
    if (!p.alive) { assert.equal(p.trail.length, 0, `${label}: dead ${p.name} keeps a trail`); continue; }
    assert.ok(p.x >= 0 && p.y >= 0 && p.x <= w.size && p.y <= w.size, `${label}: ${p.name} off the map`);
    assert.ok(g.counts[p.id] > 0, `${label}: ${p.name} alive without land`);
    for (const c of p.trail) {
      assert.equal(g.trail[c], p.id, `${label}: trail cell of ${p.name} not marked`);
      assert.notEqual(g.owner[c], -1);
      trailOf.set(c, p.id);
    }
    assert.equal(new Set(p.trail).size, p.trail.length, `${label}: duplicate trail cells for ${p.name}`);
  }
  for (let i = 0; i < g.n; i++) {
    if (g.trail[i]) assert.equal(trailOf.get(i), g.trail[i], `${label}: orphan trail cell ${i}`);
  }
}

for (const transferOnKill of [false, true]) {
  test(`stress: 15 bots for 3 minutes keep the world consistent (${transferOnKill ? 'ranked' : 'normal'})`, () => {
    const w = new World({ size: 110 * GRID, seed: transferOnKill ? 77 : 78, transferOnKill });
    const rng = new Rng(transferOnKill ? 5 : 6);
    const add = () => w.addPlayer({ name: `b${rng.int(1, 999)}`, controller: new BotController(botProfile(rng.float(0, 1.25), rng.pick(PERSONALITIES)), new Rng(rng.int(1, 1e9))) });
    for (let k = 0; k < 15; k++) add();
    let deaths = 0, captures = 0;
    const respawn = [];
    w.on('death', () => { deaths++; respawn.push(w.time + rng.float(1, 4)); });
    w.on('capture', () => captures++);
    for (let k = 0; k < 60 * 180; k++) {
      w.tick(DT);
      while (respawn.length && respawn[0] <= w.time) { respawn.shift(); add(); }
      if (k % 30 === 0) checkInvariants(w, `t=${w.time.toFixed(1)}`);
    }
    checkInvariants(w, 'end');
    assert.ok(captures > 200, `bots expand (${captures} captures)`);
    assert.ok(deaths > 10, `bots fight (${deaths} deaths)`);
  });
}
