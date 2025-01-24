import react from '@vitejs/plugin-react-swc';
import { defineConfig, UserConfig } from 'vite';

import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
} as UserConfig);
