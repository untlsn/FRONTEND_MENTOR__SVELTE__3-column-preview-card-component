import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import windi from 'vite-plugin-windicss';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), windi()],
  base: '/FRONTEND_MENTOR__SVELTE__3-column-preview-card-component/',
  resolve: {
    alias: {
      '~': resolve('./src'),
    },
  },
});
