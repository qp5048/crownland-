import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync } from 'node:fs';

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
}
