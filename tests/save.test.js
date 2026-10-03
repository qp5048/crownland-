import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultState, migrate, sanitize, SaveManager } from '../src/save/save.js';
import { memoryStorage, safe } from '../src/save/storage.js';
import { SAVE_KEY, SAVE_VERSION } from '../src/config.js';

test('empty storage gives a fresh default save', () => {
  const m = new SaveManager(memoryStorage());
  const s = m.load();
  assert.deepEqual(s, defaultState());
});

test('corrupted JSON falls back to backup, then to defaults', () => {
  const st = memoryStorage();
  const good = defaultState();
  good.coins = 777;
  st.setItem(`${SAVE_KEY}.bak`, JSON.stringify(good));
  st.setItem(SAVE_KEY, '{"coins": 12, broken');
  const m = new SaveManager(st);
  assert.equal(m.load().coins, 777);
  assert.equal(m.corrupted, true);

  const st2 = memoryStorage();
  st2.setItem(SAVE_KEY, 'null-ish garbage');
  assert.deepEqual(new SaveManager(st2).load(), defaultState());

  const st3 = memoryStorage();
  st3.setItem(SAVE_KEY, '[1,2,3]');
  assert.deepEqual(new SaveManager(st3).load(), defaultState());
});

test('wrong types and hostile values are repaired', () => {
  const s = sanitize({
    v: SAVE_VERSION,
    coins: -500,
    owned: { skin: ['galaxy', 'not_a_skin', 42], hat: 'oops', trail: null },
    equipped: { skin: 'prism', hat: 'crown', trail: 'fire' },
    boosts: { speed: 1e12, shield: 'x' },
    armed: { speed: true, shield: true },
    rank: { tier: 99, rp: -4 },
    settings: { music: 5, sfx: -1, lang: 'de', quality: 'ultra' },
    pass: { xp: NaN, claimedFree: [1, 1, 'a', 2.5] },
  });
  assert.equal(s.coins, 0);
  assert.deepEqual(s.owned.skin, ['sky', 'galaxy']);
  assert.deepEqual(s.owned.hat, ['none']);
  assert.equal(s.equipped.skin, 'sky', 'not owned → default');
  assert.equal(s.equipped.hat, 'none');
  assert.equal(s.boosts.speed, 999);
  assert.equal(s.boosts.shield, 0);
  assert.equal(s.armed.shield, false, 'cannot arm a boost you do not have');
  assert.equal(s.rank.tier, 16);
  assert.equal(s.rank.rp, 0);
  assert.equal(s.settings.music, 1);
  assert.equal(s.settings.sfx, 0);
  assert.equal(s.settings.lang, '');
  assert.equal(s.settings.quality, 'high');
  assert.equal(s.pass.xp, 0);
  assert.deepEqual(s.pass.claimedFree, [1]);
});

test('old schema versions are migrated', () => {
  const v1 = { coins: 300, skins: ['sky', 'mint'], skin: 'mint', trails: ['classic', 'fire'], trail: 'fire', rank: 357 };
  const m = migrate({ ...v1 });
  assert.equal(m.v, 3);
  const s = sanitize(v1);
  assert.equal(s.coins, 300);
  assert.ok(s.owned.skin.includes('mint'));
  assert.equal(s.equipped.skin, 'mint');
  assert.equal(s.equipped.trail, 'fire');
  assert.equal(s.rank.tier, 3);
  assert.equal(s.rank.rp, 57);
});

test('save → load round trip and throwing storage is survivable', async () => {
  const st = memoryStorage();
  const a = new SaveManager(st);
  a.load();
  a.state.coins = 1234;
  a.state.owned.skin.push('candy');
  a.save(true);
  const b = new SaveManager(st);
  b.load();
  assert.equal(b.state.coins, 1234);
  assert.ok(b.state.owned.skin.includes('candy'));

  const broken = safe({ name: 'broken', getItem() { throw new Error('denied'); }, setItem() { throw new Error('quota'); }, removeItem() {} });
  const c = new SaveManager(broken);
  assert.doesNotThrow(() => c.load());
  c.state.coins = 5;
  assert.doesNotThrow(() => c.save(true));
});
