import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/shop-component/',
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: split vendor code
          vendor: [
            'react',
            'react-dom',
            'react-window',
            '@testing-library/react',
            '@testing-library/jest-dom',
          ],
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
