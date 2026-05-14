import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alvaroquero.dev',
  experimental: {
    contentLayer: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
