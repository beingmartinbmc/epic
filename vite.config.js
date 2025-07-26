import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    __OPENAI_PROXY_URL__: JSON.stringify(process.env.OPENAI_PROXY_URL)
  }
})