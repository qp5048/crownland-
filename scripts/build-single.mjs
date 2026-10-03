// Inline the Vite build (JS, CSS, fonts) into one self-contained HTML file:
// dist-single/crownland.html opens with a double click and can be zipped as
// index.html for CrazyGames. Run after `vite build` (see `npm run build:single`).
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const assets = path.join(dist, 'assets');
let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const files = fs.readdirSync(assets);
const js = files.find((f) => f.endsWith('.js'));
const css = files.find((f) => f.endsWith('.css'));

const style = fs.readFileSync(path.join(assets, css), 'utf8').replace(
  /url\(\.\/([^)]+\.woff2)\)/g,
  (m, f) => `url(data:font/woff2;base64,${fs.readFileSync(path.join(assets, f)).toString('base64')})`,
);
// a literal "</script" inside the bundle would end the inline tag early
const script = fs.readFileSync(path.join(assets, js), 'utf8').replace(/<\/script/gi, '<\\/script');

html = html
  .replace(/\s*<script type="module"[^>]*><\/script>/, '')
  .replace(/\s*<link rel="stylesheet"[^>]*>/, '')
  .replace('</head>', () => `<style>${style}</style>\n</head>`)
  .replace('</body>', () => `<script type="module">${script}</script>\n</body>`);

fs.mkdirSync('dist-single', { recursive: true });
fs.writeFileSync('dist-single/crownland.html', html);
console.log(`dist-single/crownland.html  ${(html.length / 1024).toFixed(0)} KB`);
