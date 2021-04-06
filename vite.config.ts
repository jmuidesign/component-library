import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

declare const __dirname: string

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'LcComponents',
      entry: path.resolve(__dirname, 'src/main.ts'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    open: true,
  },
  plugins: [
    vue(),
    WindiCSS({
      preflight: false,
    }),
  ],
})
