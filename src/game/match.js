import { ECONOMY, GAME, GRID, MAPS } from '../config.js';
import { Emitter } from '../core/emitter.js';
import { clamp } from '../core/math.js';
import { Rng } from '../core/rng.js';
import { BotController } from '../ai/bot.js';
import { botProfile, normalLevel, PERSONALITIES } from '../ai/difficulty.js';
import { pickName } from '../ai/names.js';
import { HATS, SKINS, TRAILS, resolveLook } from '../cosmetics/catalog.js';
import { skinPalette } from '../cosmetics/draw.js';
import { rankBotCount, rankBotSpeed, rankLevel, rankMapSize } from '../ranked/ranks.js';
import { World } from './world.js';

/** Steers the human's square from the unified input. */
class HumanController {
  constructor(match) { this.m = match; }
  update(world, p) {
    if (p.frozen) return;
    const s = this.m.renderer.worldToScreen(p.rx ?? p.x, p.ry ?? p.y);
    const a = this.m.input?.targetAngle(s.x, s.y);
    if (a !== null && a !== undefined) p.targetAngle = a;
  }
}

const RARITY_WEIGHTS = {
  common: [10, 6], rare: [5, 6], epic: [1.2, 4], legendary: [0.25, 2], mythic: [0.05, 0.8],
};

/**
 * One match (or the attract-mode demo behind the menu).
 * mode: 'normal' | 'ranked' | 'tutorial' | 'demo'
 * Emits: countdown(n), go, feed({kind, ...}), humanCapture, offerRevive, revived, over(results)
 */
export class Match extends Emitter {
  constructor({ mode, tier = 0, look, nickname = 'You', boosts = {}, renderer, input, audio, best = 0 }) {
    super();
    this.mode = mode;
    this.ranked = mode === 'ranked';
    this.tier = tier;
    this.renderer = renderer;
    this.input = input;
    this.audio = audio;
    this.boosts = boosts;
    this.rng = new Rng();
    this.usedNames = new Set();
    this.respawns = [];
    this.reviveUsed = false;
    this.speedUsed = false;
    this.state = mode === 'demo' ? 'demo' : 'countdown';
    this.countdown = 3.2;
    this.lastCount = 4;
    this.cameraTarget = null;
    this.demoFocus = null;
    this.demoTimer = 0;
    this.aliveTime = 0;
    this.lbTimer = 0;
    this.result = null;
    // engagement extras: kill streaks, the "king" bounty, personal record
    this.best = best;
    this.recordShown = false;
    this.bonusCoins = 0;
    this.streak = 0;
    this.lastKillAt = -99;
    this.maxStreak = 0;
    this.kingKills = 0;
    this.king = null;
    this.kingTimer = 0;
    this.wasKing = false;

    let size, bots, level;
    if (mode === 'ranked') { size = rankMapSize(tier); bots = rankBotCount(tier); level = rankLevel(tier); }
    else if (mode === 'tutorial') { size = MAPS.tutorial.size; bots = 0; level = 0; }
    else if (mode === 'demo') { size = 96 * GRID; bots = 9; level = 0.35; }
    else { size = MAPS.normal.size; bots = MAPS.normal.bots; level = null; }
    this.botCount = bots;
    this.level = level;
    this.world = new World({ size, transferOnKill: this.ranked });

    if (mode !== 'demo') {
      // Big Start: a disc whose area is exactly bigStartShare of the map
      const radius = boosts.bigStart ? Math.sqrt((GAME.bigStartShare * size * size) / Math.PI) : GAME.startRadius;
      const spawn = mode === 'tutorial'
        ? { x: size / 2, y: size / 2, radius: 3.2 * GRID, angle: 0 }
        : { x: size / 2 + this.rng.float(-size * 0.2, size * 0.2), y: size / 2 + this.rng.float(-size * 0.2, size * 0.2), radius };
      this.human = this.world.addPlayer({ name: nickname || 'You', isHuman: true, look: resolveLook(look), controller: new HumanController(this) }, spawn);
      this.human.deferDeath = true;
      if (boosts.shield) this.human.shield = 1;
      this.playerSkinId = look.skin;
    }
    for (let k = 0; k < bots; k++) this.addBot();

    this.bindWorld();
    const focus = this.human || this.world.players[0];
    if (focus) renderer.camera.snap(focus.x, focus.y);
    renderer.camera.zoom = renderer.camera.targetZoom = 1;
    renderer.particles.clear();
    renderer.floaters.length = 0;
  }

  // ------------------------------------------------------------------ bots

  randomLook() {
    const fancy = this.ranked ? clamp(this.tier / 16, 0, 1) : 0.15;
    const pool = SKINS.filter((s) => s.price !== null && s.id !== this.playerSkinId);
    let total = 0;
    const weights = pool.map((s) => {
      const [a, b] = RARITY_WEIGHTS[s.rarity];
      const wgt = a + (b - a) * fancy;
      total += wgt;
      return wgt;
    });
    let r = this.rng.float(0, total), skin = pool[0];
    for (let k = 0; k < pool.length; k++) { r -= weights[k]; if (r <= 0) { skin = pool[k]; break; } }
    const hats = HATS.filter((x) => x.price !== null && x.id !== 'none');
    const trails = TRAILS.filter((x) => x.price !== null && x.id !== 'classic');
    const hat = this.rng.chance(0.3 + fancy * 0.3) ? this.rng.pick(hats).id : 'none';
    const trail = this.rng.chance(0.2 + fancy * 0.3) ? this.rng.pick(trails).id : 'classic';
    return resolveLook({ skin: skin.id, hat, trail });
  }

  addBot(spawnOpts) {
    const level = this.level ?? normalLevel(this.rng);
    const personality = this.rng.pick(PERSONALITIES);
    const profile = botProfile(clamp(level + this.rng.float(-0.06, 0.06), 0, 1.25), personality);
    const name = pickName(this.rng, this.usedNames);
    this.usedNames.add(name);
    const bot = this.world.addPlayer({
      name, look: this.randomLook(), controller: new BotController(profile, new Rng(this.rng.int(1, 2 ** 30))),
    }, spawnOpts);
    if (bot) {
      bot.personality = personality;
      if (this.ranked) bot.speed *= rankBotSpeed(this.tier);
    }
    return bot;
  }

  // ---------------------------------------------------------------- events

  isVisible(x, y) {
    const r = this.renderer;
    const s = r.worldToScreen(x, y);
    return s.x > -60 && s.y > -60 && s.x < r.w / r.dpr + 60 && s.y < r.h / r.dpr + 60;
  }

  bindWorld() {
    const w = this.world;
    const ps = this.renderer.particles;
    w.on('capture', ({ player, cells }) => {
      if (!player.isHuman) return;
      const pct = (cells.length / w.grid.n) * 100;
      this.audio?.play('capture', { size: cells.length });
      if (pct >= 0.05) this.renderer.floatText(player.x, player.y - 0.6 * GRID, `+${pct.toFixed(pct < 1 ? 2 : 1)}%`, '#ffffff', pct > 2 ? 1.25 : 1);
      ps.burst(player.x, player.y, skinPalette(player.look.skin).land, 10 + Math.min(30, cells.length / (6 * GRID * GRID)), GRID, 5);
      this.emit('humanCapture', { cells: cells.length, pct });
    });
    w.on('death', ({ victim, killer, cause }) => {
      const pal = skinPalette(victim.look.skin);
      const visible = this.isVisible(victim.x, victim.y);
      if (visible) {
        ps.burst(victim.x, victim.y, pal.mid, 26, GRID, 8);
        ps.burst(victim.x, victim.y, '#ffffff', 10, GRID, 5, 'circle');
      }
      if (victim === this.human) { this.onHumanDeath(killer, cause); return; }
      if (this.mode !== 'tutorial' && this.mode !== 'scripted') this.scheduleRespawn();
      if (killer && killer === this.human) {
        this.audio?.play('kill');
        this.renderer.camera.shake(7);
        const coins = Math.round(ECONOMY.coinsPerKill * (this.ranked ? ECONOMY.rankedMultiplier : 1) * (this.boosts.magnet ? ECONOMY.magnetMultiplier : 1));
        this.renderer.floatText(victim.x, victim.y - 0.5 * GRID, `+${coins}`, '#ffd23f', 1.3, true);
        this.emit('feed', { kind: 'kill', name: victim.name });
        this.onHumanKill(victim);
      } else if (visible) {
        this.audio?.play('enemyDeath');
      }
      this.emit('botDeath', { victim, killer, cause });
    });
    w.on('transfer', ({ from, to, cells }) => {
      if (to !== this.human) return;
      this.audio?.play('capture', { size: cells.length * 2 });
      this.emit('feed', { kind: 'transfer', name: from.name });
    });
    w.on('shield', ({ player }) => {
      if (player !== this.human) return;
      this.audio?.play('shield');
      this.renderer.camera.shake(5);
      ps.burst(player.x, player.y, '#8fe3ff', 24, GRID, 6, 'circle');
      this.emit('feed', { kind: 'shield' });
    });
  }

  /** Coin multiplier that applies to in-match bonuses (same rules as the results screen). */
  bonusMul() { return (this.ranked ? ECONOMY.rankedMultiplier : 1) * (this.boosts.magnet ? ECONOMY.magnetMultiplier : 1); }

  onHumanKill(victim) {
    const t = this.world.time;
    this.streak = t - this.lastKillAt <= 7 ? this.streak + 1 : 1;
    this.lastKillAt = t;
    this.maxStreak = Math.max(this.maxStreak, this.streak);
    if (this.streak >= 2) {
      const bonus = this.streak === 2 ? 10 : this.streak === 3 ? 25 : 50;
      this.bonusCoins += bonus;
      this.audio?.play('reward');
      this.emit('feed', { kind: 'streak', n: this.streak, coins: Math.round(bonus * this.bonusMul()) });
    }
    if (victim.isKing) {
      this.kingKills++;
      this.bonusCoins += 50;
      this.renderer.camera.shake(9);
      this.emit('feed', { kind: 'kingKill', name: victim.name, coins: Math.round(50 * this.bonusMul()) });
      this.emit('happy');
    }
  }

  /** The current leader wears a crown; knocking them out pays a bounty. */
  updateKing(dt) {
    this.kingTimer -= dt;
    if (this.kingTimer > 0) return;
    this.kingTimer = 0.5;
    const top = this.world.leaderboard()[0];
    const king = top && top.share > 0.004 && top.player.alive ? top.player : null;
    if (king !== this.king) {
      if (this.king) this.king.isKing = false;
      this.king = king;
      if (king) king.isKing = true;
      if (king && king === this.human && !this.wasKing && this.mode !== 'tutorial') {
        this.wasKing = true;
        this.audio?.play('reward');
        this.emit('feed', { kind: 'kingMe' });
      }
    }
    const h = this.human;
    if (h && h.alive && !this.recordShown && this.mode !== 'tutorial' && this.best >= 0.01 && h.maxShare > this.best) {
      this.recordShown = true;
      this.audio?.play('reward');
      this.emit('feed', { kind: 'record' });
      this.emit('happy');
    }
  }

  scheduleRespawn() {
    const h = this.human;
    if (h && this.world.grid.counts[h.id] / this.world.grid.n > GAME.noRespawnAbove) return;
    const [a, b] = GAME.respawnDelay;
    this.respawns.push(this.world.time + this.rng.float(a, b));
    this.respawns.sort((x, y) => x - y);
  }

  onHumanDeath(killer, cause) {
    const h = this.human;
    this.state = 'dead';
    this.aliveTime += this.world.time - (this.aliveSince ?? 0);
    this.deathInfo = { killerName: killer?.name || '', cause, killer };
    this.place = this.world.placeOf(h);
    this.audio?.play('death');
    this.renderer.camera.shake(16);
    this.renderer.particles.burst(h.x, h.y, skinPalette(h.look.skin).mid, 40, GRID, 10);
    this.input?.reset();
    if (this.mode === 'tutorial') return;
    if (this.canRevive()) this.emit('offerRevive', this.deathInfo);
    else this.finishDeath();
  }

  canRevive() { return this.mode === 'normal' && !this.reviveUsed; }

  revive() {
    if (this.state !== 'dead') return;
    this.reviveUsed = true;
    this.world.revive(this.human);
    this.human.deferDeath = true;
    this.state = 'playing';
    this.aliveSince = this.world.time;
    this.renderer.particles.burst(this.human.x, this.human.y, '#ffffff', 30, GRID, 6, 'circle');
    this.emit('revived');
  }

  finishDeath() {
    if (this.state === 'over') return;
    const h = this.human;
    this.world.releaseTerritory(h, this.deathInfo?.killer || null);
    this.state = 'over';
    this.result = this.buildResult(false);
    this.emit('over', this.result);
  }

  buildResult(won) {
    const h = this.human;
    return {
      mode: this.mode,
      ranked: this.ranked,
      share: h.maxShare,
      kills: h.kills,
      seconds: this.aliveTime,
      place: won ? 1 : (this.place || this.world.placeOf(h)),
      players: this.botCount + 1,
      won,
      captures: h.captures,
      cause: this.deathInfo?.cause || null,
      killerName: this.deathInfo?.killerName || '',
      magnet: !!this.boosts.magnet,
      tier: this.tier,
      bonus: this.bonusCoins,
      maxStreak: this.maxStreak,
      kingKills: this.kingKills,
    };
  }

  activateSpeed() {
    const h = this.human;
    if (!h || !this.boosts.speed || this.speedUsed || this.state !== 'playing' || !h.alive) return false;
    this.speedUsed = true;
    h.speedMul = GAME.speedBoostMul;
    h.boostTime = GAME.speedBoostTime;
    this.audio?.play('boost');
    this.renderer.camera.shake(4);
    this.emit('feed', { kind: 'speed' });
    return true;
  }

  // ------------------------------------------------------------------ loop

  update(dt) {
    if (this.state === 'countdown') {
      this.countdown -= dt;
      const n = Math.ceil(this.countdown);
      if (n !== this.lastCount && n >= 1 && n <= 3) { this.lastCount = n; this.emit('countdown', n); this.audio?.play('count'); }
      if (this.countdown <= 0) {
        this.state = 'playing';
        this.aliveSince = this.world.time;
        this.emit('go');
        this.audio?.play('go');
      }
      return;
    }
    if (this.state !== 'playing' && this.state !== 'demo') return;
    this.world.tick(dt);
    if (this.state === 'playing' && this.mode !== 'tutorial') this.updateKing(dt);
    while (this.respawns.length && this.respawns[0] <= this.world.time) {
      this.respawns.shift();
      if (this.world.players.filter((p) => p.alive && !p.isHuman).length < this.botCount) this.addBot();
    }
    const h = this.human;
    if (this.state === 'playing' && h && h.alive && this.world.grid.counts[h.id] >= this.world.grid.n) {
      this.aliveTime += this.world.time - this.aliveSince;
      this.state = 'over';
      this.result = this.buildResult(true);
      this.emit('over', this.result);
    }
  }

  /** Per-frame camera + render. */
  frame(alpha, frameDt) {
    const r = this.renderer;
    const cam = r.camera;
    const h = this.human;
    let tx, ty;
    if (this.cameraTarget) { tx = this.cameraTarget.x; ty = this.cameraTarget.y; }
    else if (h && (h.alive || h.pendingDeath || this.state === 'over')) {
      tx = h.px + (h.x - h.px) * (h.alive ? alpha : 1);
      ty = h.py + (h.y - h.py) * (h.alive ? alpha : 1);
      const share = this.world.grid.counts[h.id] / this.world.grid.n;
      cam.targetZoom = 1 - Math.min(0.24, share * 0.7);
    } else {
      // attract mode: drift between interesting bots
      this.demoTimer -= frameDt;
      if (!this.demoFocus || !this.demoFocus.alive || this.demoTimer <= 0) {
        const alive = this.world.players.filter((p) => p.alive);
        this.demoFocus = alive.length ? alive[Math.floor(Math.random() * alive.length)] : null;
        this.demoTimer = 9;
      }
      tx = this.demoFocus ? this.demoFocus.x : this.world.size / 2;
      ty = this.demoFocus ? this.demoFocus.y : this.world.size / 2;
      cam.targetZoom = 0.85;
      cam.x += (tx - cam.x) * Math.min(1, frameDt * 0.6);
      cam.y += (ty - cam.y) * Math.min(1, frameDt * 0.6);
      tx = cam.x; ty = cam.y;
    }
    cam.follow(tx, ty, frameDt);
    r.render(this.world, alpha, frameDt);
  }

  destroy() {
    this.world.clear();
    this.clear();
  }
}
