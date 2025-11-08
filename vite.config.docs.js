import { defineConfig } from 'vite';
import { resolve } from 'path';

// 用於構建 docs 版本的主函式庫
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/tw-city-selector.js'),
      name: 'TwCitySelector',
      formats: ['umd'],
      fileName: () => 'tw-city-selector.js'
    },
    outDir: 'docs/js',
    sourcemap: false,
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      output: {
        exports: 'default',
        entryFileNames: '[name].js'
      }
    }
  }
});
