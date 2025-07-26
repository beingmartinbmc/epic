import { defineConfig } from 'vite';

export default defineConfig({
  base: '/epic/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
}); 