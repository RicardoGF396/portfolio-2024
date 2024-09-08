import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
});
