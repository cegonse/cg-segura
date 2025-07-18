
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        offscreen: resolve(__dirname, 'offscreen-snapshot-testing.html'),
        template: resolve(__dirname, 'template.html'),
      },
    },
  },
})
