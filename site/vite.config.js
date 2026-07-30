import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages project subpath, or every asset 404s in prod.
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: '/andy-profile/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cu: resolve(__dirname, 'cu.html'),
      },
    },
  },
  server: {
    host: true,
    port: 8080,
  },
})
