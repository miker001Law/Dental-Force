import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    open: true,
    watch: {
      usePolling: true,
      interval: 1000,
    }
  }
}) 