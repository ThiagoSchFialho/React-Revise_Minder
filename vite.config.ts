import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['react-revise-minder.onrender.com'],
  },
  server: {
    host: '0.0.0.0',
  },
})
