
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        ...files(
          'index.html',
          'offscreen-snapshot-testing.html',
          'template.html',
          'legacy-service-health.html'
        )
      },
    },
  },
})

function files(...paths) {
  const input = {};

  paths.forEach(p => {
    const slug = p.split('-')[0];
    input[slug] = resolve(__dirname, p);
  });

  return input;
}
