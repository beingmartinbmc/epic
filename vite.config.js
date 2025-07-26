import { defineConfig } from 'vite';

export default defineConfig({
  base: '/epic/', // Replace with your repository name
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/index.html'
      }
    }
  }
}); 