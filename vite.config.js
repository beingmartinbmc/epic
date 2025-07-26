import { defineConfig } from 'vite';

export default defineConfig({
  base: '/epic/', // Replace with your repository name
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Clean the output directory before building
    rollupOptions: {
      input: 'index.html' // Now it's in the root
    }
  },
  // Clear cache on build
  server: {
    fs: {
      strict: false
    }
  }
}); 