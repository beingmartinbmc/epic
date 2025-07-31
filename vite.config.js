import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/epic/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['franc-min', 'cld3-asm']
        }
      }
    },
    // Enable minification with esbuild (default)
    minify: 'esbuild',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})