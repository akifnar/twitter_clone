// .storybook/vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // CSS yapılandırmaları için
  css: {
    // Vite'a projenin kök dizinindeki (root)
    // postcss.config.js dosyasını kullanmasını söyler.
    postcss: true,
  },
});