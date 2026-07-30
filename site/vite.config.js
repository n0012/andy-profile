import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages project subpath, or every asset 404s in prod.
export default defineConfig({
  plugins: [react()],
  base: '/andy-profile/',
  server: {
    host: true,
    port: 8080,
  },
})
