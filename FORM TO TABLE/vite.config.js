import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set this to your base path if deploying in a subdirectory
  build: {
    rollupOptions: {
      // If you have any specific external dependencies, list them here
      // external: ['your-external-module'],
    },
  },
});
