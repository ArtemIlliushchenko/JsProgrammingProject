import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base - назва репозиторію для GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/JsProgramming/',
});
