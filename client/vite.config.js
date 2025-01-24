import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  esbuild: {
    loader: 'jsx', // This ensures JSX syntax is recognized
    include: /src\/.*\.jsx?$/, // Process all .jsx and .js files in the `src` directory
    exclude: /node_modules/, // Exclude `node_modules` from being processed
  },
});
