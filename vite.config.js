import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/nakshNewPage/",
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
})