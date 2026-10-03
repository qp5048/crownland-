import { defineConfig } from 'vite';

// Relative base so the build runs from any folder (CrazyGames upload, file server, itch…)
export default defineConfig({
  base: './',
  build: {
    target: 'es2019',
    outDir: 'dist',
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    sourcemap: false,
    reportCompressedSize: true,
  },
  server: { host: true },
});
