import { defineConfig } from 'vite';

export default defineConfig({
  // Los archivos de /public se sirven con rutas absolutas desde la raíz.
  base: '/',
  build: { outDir: 'dist' },
});
