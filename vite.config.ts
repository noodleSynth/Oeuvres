import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: "../public"
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import ./src/styles/vars.sass
          @import ./src/styles/global.sass
          `
      }
    }
  },
  
})

