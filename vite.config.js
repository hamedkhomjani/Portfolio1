import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages serves the site from /Portfolio1/, while Netlify serves it from the root.
// Netlify sets NETLIFY=true during its builds.
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/Portfolio1/',
})
