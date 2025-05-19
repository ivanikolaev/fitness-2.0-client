import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 5173,
      allowedHosts: ['fitness-2-0-client.onrender.com', 'localhost', '127.0.0.1'],
    }
  })