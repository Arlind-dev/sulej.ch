import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
  start: {
    server: {
      preset: 'cloudflare_module',
      rollupConfig: {
        external: ['__STATIC_CONTENT_MANIFEST', 'node:async_hooks'],
      },
    },
  },
});
