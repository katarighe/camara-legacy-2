import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure that Vite resolves SVG imports correctly
      // Adjust the path if necessary
      '@assets': 'src/assets', // Adjusted path without leading slash
    },
  },
  assetsInclude: ['**/*.JPG'], // Add assetsInclude option to handle JPG files
});
