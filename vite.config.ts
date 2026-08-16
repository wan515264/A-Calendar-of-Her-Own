import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoBase = '/A-Calendar-of-Her-Own/';

export default defineConfig({
  base: repoBase,
  plugins: [react()]
});
