import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // Directiorio de salida
  },
  base: '/'  // Asegura que las rutas sean absolutas
});
