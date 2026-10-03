/**
 * Storage backends with an identical tiny interface. The CrazyGames Data
 * module (SDK v3) mirrors localStorage's API and syncs progress for logged-in
 * players; everything is wrapped so a throwing backend never breaks the game.
 */
export function memoryStorage() {
  const m = new Map();
  return {
    name: 'memory',
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => { m.set(k, String(v)); },
    removeItem: (k) => { m.delete(k); },
  };
}

export function localStorageBackend() {
  try {
    const ls = globalThis.localStorage;
    if (!ls) return null;
    const probe = '__crownland_probe__';
    ls.setItem(probe, '1');
    ls.removeItem(probe);
    return {
      name: 'localStorage',
      getItem: (k) => ls.getItem(k),
      setItem: (k, v) => ls.setItem(k, v),
      removeItem: (k) => ls.removeItem(k),
    };
  } catch {
    return null;
  }
}

export function sdkDataBackend(sdk) {
  const data = sdk?.data;
  if (!data || typeof data.getItem !== 'function') return null;
  return {
    name: 'crazygames',
    getItem: (k) => data.getItem(k),
    setItem: (k, v) => data.setItem(k, v),
    removeItem: (k) => data.removeItem(k),
  };
}

/** Wrap a backend so every call is exception-safe. */
export function safe(backend) {
  const fallback = memoryStorage();
  return {
    name: backend.name,
    getItem(k) {
      try { return backend.getItem(k); } catch (e) { console.warn('[storage] read failed', e); return fallback.getItem(k); }
    },
    setItem(k, v) {
      try { backend.setItem(k, v); } catch (e) { console.warn('[storage] write failed', e); fallback.setItem(k, v); }
    },
    removeItem(k) {
      try { backend.removeItem(k); } catch { fallback.removeItem(k); }
    },
  };
}
