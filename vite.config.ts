import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  server: { 
    port: 8081 
  },
  plugins: [
    vue(),
    checker({
      vueTsc: true
    })
  ],
})
