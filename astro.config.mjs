import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yammer2.github.io',
  base: '/homepage',
  integrations: [tailwind()],
  trailingSlash: 'always',
});
