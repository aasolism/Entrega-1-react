import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Entrega-1-react/', // Ruta base para GitHub Pages
  plugins: [react()],
});
