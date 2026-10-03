import './ui/styles.css';
import { App } from './app.js';

const app = new App();
app.boot().catch((err) => {
  console.error('[boot] failed', err);
  const el = document.getElementById('ui');
  if (el) el.innerHTML = '<div style="position:fixed;inset:0;display:grid;place-items:center;font:600 16px system-ui;color:#1d2b45">Something went wrong. Please reload the page.</div>';
});
// handy for debugging in the console
window.__crownland = app;
