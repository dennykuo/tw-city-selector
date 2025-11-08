import { defineConfig } from 'vite';
import { resolve } from 'path';

// 用於構建中文數據檔案
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/data-zh.js'),
      formats: ['umd'],
      name: 'data',
      fileName: () => 'data-zh.js'
    },
    outDir: 'docs/js',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      output: {
        exports: 'default'
      }
    }
  }
});
