import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use root locally, and the correct repository subpath on GitHub Pages.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build'
    ? '/Interface-Design-System-React.js-Project/'
    : '/',
  server: { port: 5173 },
}));
