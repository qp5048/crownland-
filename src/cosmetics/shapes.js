import { TAU } from '../core/math.js';

/** Shared vector helpers for heads and characters. */

export function rrect(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Outline of a head centred at (x, y). Most skins are rounded squares; a few
 * characters have their own animated silhouette.
 */
export function headPath(ctx, skin, x, y, s, t) {
  if (skin.shape === 'ghost') {
    const w = s * 0.98, top = y - s * 0.5, base = y + s * 0.34;
    ctx.beginPath();
    ctx.moveTo(x - w / 2, base);
    ctx.lineTo(x - w / 2, top + w / 2);
    ctx.arc(x, top + w / 2, w / 2, Math.PI, 0);
    ctx.lineTo(x + w / 2, base);
    // wavy hem, scrolling sideways
    const waves = 4, ph = t * 5;
    for (let k = 0; k < waves; k++) {
      const x1 = x + w / 2 - ((k + 0.5) * w) / waves, x2 = x + w / 2 - ((k + 1) * w) / waves;
      const dip = s * (0.13 + 0.05 * Math.sin(ph + k * 1.7));
      ctx.quadraticCurveTo(x1, base + dip * 2, x2, base);
    }
    ctx.closePath();
    return;
  }
  if (skin.shape === 'slime') {
    const k = Math.sin(t * 5) * 0.07;
    const w = s * (1 + k), h = s * (1 - k);
    rrect(ctx, x - w / 2, y + s / 2 - h, w, h, s * 0.42);
    return;
  }
  rrect(ctx, x - s / 2, y - s / 2, s, s, s * 0.26);
}

/** 0 = open … 1 = closed, a quick smooth blink every few seconds. */
export function blinkAmount(t, seed) {
  const p = (t + seed * 1.7) % 4.3;
  return p < 0.18 ? Math.sin((p / 0.18) * Math.PI) : 0;
}

/**
 * Cartoon eyes looking towards `angle`.
 * o: { y, sep, r, pupil, white, lashes, glow, smile, mouth, squint }
 */
export function drawEyes(ctx, x, y, s, angle, t, seed, o = {}) {
  const dx = Math.cos(angle), dy = Math.sin(angle);
  const er = s * (o.r ?? 0.12);
  const sep = s * (o.sep ?? 0.19);
  const ox = dx * s * 0.07, oy = dy * s * 0.05 + s * (o.y ?? -0.05);
  const open = 1 - blinkAmount(t, seed) * 0.92;
  ctx.save();
  for (const side of [-1, 1]) {
    const ex = x + side * sep + ox, ey = y + oy;
    if (o.glow) { ctx.shadowColor = o.glow; ctx.shadowBlur = s * 0.25; }
    ctx.fillStyle = o.white || '#ffffff';
    ctx.beginPath();
    ctx.ellipse(ex, ey, er, Math.max(er * 0.08, er * 1.18 * open), 0, 0, TAU);
    ctx.fill();
    ctx.shadowBlur = 0;
    if (open > 0.3) {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(ex, ey, er, er * 1.18 * open, 0, 0, TAU);
      ctx.clip();
      ctx.fillStyle = o.pupil || '#1f2540';
      ctx.beginPath();
      ctx.arc(ex + dx * er * 0.42, ey + dy * er * 0.42, er * 0.6, 0, TAU);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(ex + dx * er * 0.42 - er * 0.22, ey + dy * er * 0.42 - er * 0.26, er * 0.22, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
    if (o.lashes) {
      ctx.strokeStyle = '#1f2540';
      ctx.lineWidth = Math.max(1, s * 0.03);
      ctx.lineCap = 'round';
      for (let k = 0; k < 3; k++) {
        const a = -Math.PI / 2 + side * (0.35 + k * 0.32);
        ctx.beginPath();
        ctx.moveTo(ex + Math.cos(a) * er * 0.95, ey + Math.sin(a) * er * 1.1 * open);
        ctx.lineTo(ex + Math.cos(a) * er * 1.45, ey + Math.sin(a) * er * 1.55 * open);
        ctx.stroke();
      }
    }
  }
  if (o.smile !== false) {
    ctx.strokeStyle = o.mouth || 'rgba(31,37,64,0.7)';
    ctx.lineWidth = Math.max(1, s * 0.042);
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(x + ox * 0.6, y + oy + s * 0.15, s * 0.075, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();
  }
  ctx.restore();
}

export function triangle(ctx, ax, ay, bx, by, cx, cy) {
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.lineTo(cx, cy);
  ctx.closePath();
}
