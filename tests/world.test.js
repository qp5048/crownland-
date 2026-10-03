import test from 'node:test';
import assert from 'node:assert/strict';
import { World } from '../src/game/world.js';
import { DT, GAME } from '../src/config.js';

/** Controller that follows a list of [angle, seconds] instructions. */
function script(steps) {
  let i = 0, t = 0;
  return {
    update(world, p, dt) {
      if (i >= steps.length) return;
      p.targetAngle = steps[i][0];
      t += dt;
      if (t >= steps[i][1]) { t = 0; i++; }
    },
  };
}
const R = 0, D = Math.PI / 2, L = Math.PI, U = -Math.PI / 2;
const run = (w, sec) => { for (let k = 0; k < Math.round(sec / DT); k++) w.tick(DT); };

test('leaving and returning home captures land', () => {
  const w = new World({ size: 60, seed: 1 });
  const p = w.addPlayer({ name: 'A', controller: script([[R, 1.2], [D, 1], [L, 1.2], [U, 1.5]]) }, { x: 20, y: 20, angle: R });
  const before = w.grid.counts[p.id];
  run(w, 5);
  assert.ok(p.alive);
  assert.ok(w.grid.counts[p.id] > before + 20, `grew from ${before} to ${w.grid.counts[p.id]}`);
  assert.equal(w.grid.recount(p.id), w.grid.counts[p.id]);
});

test('crossing your own trail is fatal', () => {
  const w = new World({ size: 60, seed: 2 });
  // go out, make a tight square that crosses the outgoing segment
  const p = w.addPlayer({ name: 'A', controller: script([[R, 1.6], [D, 0.7], [L, 0.7], [U, 1.6]]) }, { x: 15, y: 30, angle: R });
  run(w, 4);
  assert.equal(p.alive, false);
  assert.equal(p.deathCause, 'self');
});

test('hitting the wall is fatal', () => {
  const w = new World({ size: 40, seed: 3 });
  const p = w.addPlayer({ name: 'A', controller: script([[L, 10]]) }, { x: 8, y: 20, angle: L });
  run(w, 3);
  assert.equal(p.alive, false);
  assert.equal(p.deathCause, 'wall');
});

test('cutting a trail kills its owner and credits the killer, even at boosted speed', () => {
  for (const mul of [1, GAME.speedBoostMul, 2]) {
    const w = new World({ size: 70, seed: 4 });
    const victim = w.addPlayer({ name: 'V', controller: script([[R, 30]]) }, { x: 5, y: 30, angle: R });
    const killer = w.addPlayer({ name: 'K', controller: script([[U, 30]]) }, { x: 25, y: 62, angle: U });
    killer.speedMul = mul;
    victim.speedMul = mul;
    let dead = false;
    for (let k = 0; k < 600 && !dead; k++) { w.tick(DT); dead = !victim.alive; }
    assert.ok(dead, `victim should die at speed x${mul}`);
    assert.equal(victim.deathCause, 'cut');
    assert.equal(victim.killerId, killer.id);
    assert.equal(killer.kills, 1);
    assert.ok(killer.alive);
    assert.equal(w.grid.counts[victim.id], 0, 'normal mode: land disappears');
    for (let i = 0; i < w.grid.n; i++) assert.notEqual(w.grid.trail[i], victim.id);
  }
});

test('diagonal movement never lets a head slip through a trail', () => {
  // victim's trail runs horizontally; killers cross it at many diagonal angles
  for (let a = 0.2; a < Math.PI - 0.2; a += 0.17) {
    const w = new World({ size: 80, seed: 5 });
    const victim = w.addPlayer({ name: 'V', controller: script([[R, 60]]) }, { x: 6, y: 40, angle: R });
    run(w, 6); // long horizontal trail from x≈9 to x≈48
    const sx = 30 - Math.cos(-a) * 12, sy = 40 - Math.sin(-a) * 12;
    const killer = w.addPlayer({ name: 'K', controller: script([[-a, 60]]) }, { x: sx, y: sy + 0.37, angle: -a });
    killer.speedMul = 2.2;
    run(w, 3);
    assert.equal(victim.alive, false, `angle ${a.toFixed(2)}`);
    assert.equal(victim.killerId, killer.id);
  }
});

test('ranked: the killer takes over the victim\'s territory', () => {
  const w = new World({ size: 70, seed: 6, transferOnKill: true });
  const victim = w.addPlayer({ name: 'V', controller: script([[R, 30]]) }, { x: 5, y: 30, angle: R });
  const killer = w.addPlayer({ name: 'K', controller: script([[U, 30]]) }, { x: 25, y: 62, angle: U });
  const victimLand = w.grid.counts[victim.id];
  const killerLand = w.grid.counts[killer.id];
  let transfer = null;
  w.on('transfer', (e) => { transfer = e; });
  for (let k = 0; k < 600 && victim.alive; k++) w.tick(DT);
  assert.equal(victim.alive, false);
  assert.ok(transfer, 'transfer event');
  assert.equal(transfer.cells.length, victimLand);
  assert.equal(w.grid.counts[victim.id], 0);
  assert.ok(w.grid.counts[killer.id] >= killerLand + victimLand);
  assert.equal(w.grid.recount(killer.id), w.grid.counts[killer.id]);
});

test('ranked: simultaneous mutual kills never hand land to a dead player', () => {
  const w = new World({ size: 60, seed: 7, transferOnKill: true });
  const a = w.addPlayer({ name: 'A' }, { x: 15, y: 15, angle: R });
  const b = w.addPlayer({ name: 'B' }, { x: 45, y: 45, angle: L });
  w.resolveDeaths([
    { victim: a, killer: b, cause: 'cut' },
    { victim: b, killer: a, cause: 'cut' },
  ]);
  assert.equal(a.alive, false);
  assert.equal(b.alive, false);
  assert.equal(w.grid.counts[a.id], 0);
  assert.equal(w.grid.counts[b.id], 0);
});

test('shield absorbs one lethal hit', () => {
  const w = new World({ size: 40, seed: 8 });
  // drive into the left wall once, then steer away after the bounce
  const p = w.addPlayer({ name: 'A', controller: script([[L, 1.3], [R, 10]]) }, { x: 6, y: 20, angle: L });
  p.shield = 1;
  let shielded = 0;
  w.on('shield', () => shielded++);
  run(w, 2);
  assert.ok(p.alive, 'survives the first wall hit');
  assert.equal(shielded, 1);
  assert.equal(p.shield, 0);
});

test('head-on outside both territories kills both; the one at home survives', () => {
  const w = new World({ size: 60, seed: 9 });
  const a = w.addPlayer({ name: 'A', controller: script([[R, 30]]) }, { x: 20, y: 30, angle: R });
  const b = w.addPlayer({ name: 'B', controller: script([[L, 30]]) }, { x: 40, y: 30, angle: L });
  for (let k = 0; k < 300 && (a.alive || b.alive); k++) w.tick(DT);
  assert.equal(a.alive, false);
  assert.equal(b.alive, false);

  const w2 = new World({ size: 60, seed: 10 });
  const home = w2.addPlayer({ name: 'H', controller: script([[L, 0.05], [R, 30]]) }, { x: 30, y: 30, radius: 4, angle: R });
  const inv = w2.addPlayer({ name: 'I', controller: script([[L, 30]]) }, { x: 44, y: 30, angle: L });
  home.speed = 0.0001; // stays inside its land
  for (let k = 0; k < 400 && inv.alive; k++) w2.tick(DT);
  assert.equal(inv.alive, false);
  assert.ok(home.alive);
});

test('engulfing someone\'s whole territory eliminates them', () => {
  const w = new World({ size: 60, seed: 11 });
  const big = w.addPlayer({ name: 'Big' }, { x: 20, y: 20, angle: R });
  const small = w.addPlayer({ name: 'Small' }, { x: 40, y: 20, radius: 1.2, angle: R });
  small.speed = 0.0001;
  // hand-build a trail around the small player that starts and ends on big's land
  const g = w.grid;
  const trail = [];
  for (let x = 22; x <= 45; x++) trail.push(g.idx(x, 14), g.idx(x, 26));
  for (let y = 15; y <= 25; y++) {
    trail.push(g.idx(45, y));
    if (g.owner[g.idx(22, y)] !== big.id) trail.push(g.idx(22, y));
  }
  for (const c of trail) { g.trail[c] = big.id; g.trailSeq[c] = big.trail.length; big.trail.push(c); }
  w.closeTrail(big);
  assert.equal(small.alive, false);
  assert.equal(small.deathCause, 'engulf');
  assert.equal(big.kills, 1);
});

test('deferred death keeps land until finalised, revive restores the player', () => {
  const w = new World({ size: 60, seed: 12 });
  const p = w.addPlayer({ name: 'P', isHuman: true }, { x: 20, y: 20 });
  p.deferDeath = true;
  const land = w.grid.counts[p.id];
  w.kill(p, null, 'wall');
  assert.equal(p.alive, false);
  assert.ok(p.pendingDeath);
  assert.equal(w.grid.counts[p.id], land);
  assert.equal(w.freeSlot() === p.id, false, 'slot is reserved while pending');
  w.revive(p);
  assert.ok(p.alive);
  assert.ok(p.invuln > 0);
  assert.ok(w.grid.counts[p.id] >= land);
  p.deferDeath = false;
  p.invuln = 0;
  w.kill(p, null, 'wall');
  assert.equal(w.grid.counts[p.id], 0);
});
