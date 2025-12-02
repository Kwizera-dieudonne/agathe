import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base should match the GitHub Pages repo name when deploying to
  // https://<user>.github.io/<repo>/
  base: '/agathe/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
