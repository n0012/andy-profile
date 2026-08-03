import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'node:path'

// Served from the apex of andylosier.com, so base is root. If this ever moves back
// to a github.io project path, base must return to '/andy-profile/' or every asset 404s.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cu: resolve(__dirname, 'cu.html'),
        msu: resolve(__dirname, 'msu.html'),
        dps: resolve(__dirname, 'dps.html'),
      },
    },
  },
  server: {
    host: true,
    port: 8080,
  },
})
