import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/epic/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimize bundle size with better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom'],
          // Language detection library (lighter alternative)
          'language-detection': ['franc-all'],
          // UI libraries
          'ui-vendor': ['bootstrap', '@fortawesome/fontawesome-free'],
          // Application logic
          'app-core': ['./src/utils.js', './src/config.js'],
          // Prompts (large file, lazy load)
          'prompts': ['./src/prompts.js']
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Enable aggressive minification
    minify: 'esbuild',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging (disable in production)
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable tree shaking
    target: 'esnext'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'bootstrap',
      '@fortawesome/fontawesome-free',
      'franc-all'
    ]
  },
  // Development optimizations
  server: {
    // Enable HMR for faster development
    hmr: true
  }
})