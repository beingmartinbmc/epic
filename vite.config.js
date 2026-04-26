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
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }

          if (id.includes('node_modules/franc-all')) {
            return 'language-detection'
          }

          if (id.includes('node_modules/bootstrap') || id.includes('node_modules/@fortawesome/fontawesome-free')) {
            return 'ui-vendor'
          }

          if (id.endsWith('/src/utils.js') || id.endsWith('/src/config.js')) {
            return 'app-core'
          }

          if (id.endsWith('/src/prompts.js')) {
            return 'prompts'
          }
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