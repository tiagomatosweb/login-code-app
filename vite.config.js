import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'blue',
        },
        input: {
          slots: {
            root: 'w-full'
          }
        }
      }
    })
  ],
})
