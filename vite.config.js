import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import metadata from './src/lib/metadata.js';
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      }
    })
  ],
  base: metadata.path,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})