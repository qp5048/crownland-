import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const watch = process.argv.includes('--watch');
mkdirSync('dist', { recursive: true });
copyFileSync('src/index.html', 'dist/index.html');

const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: !watch,
  format: 'iife',
  target: ['es2019'],
  outfile: 'dist/game.js',
  legalComments: 'none',
  logLevel: 'info',
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  await esbuild.build(options);
  // single-file version: everything inlined into one HTML
  const html = readFileSync('dist/index.html', 'utf8');
  const js = readFileSync('dist/game.js', 'utf8').replace(/<\/script/g, '<\\/script');
  writeFileSync('chop-hop.html', html.replace('<script src="game.js"></script>', () => '<script>\n' + js + '\n</script>'));
  console.log('  chop-hop.html (single file)');
}
