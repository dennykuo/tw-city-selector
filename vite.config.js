import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve';

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/tw-city-selector.js'),
        name: 'TwCitySelector',
        formats: ['umd'],
        fileName: () => 'tw-city-selector.js'
      },
      outDir: 'dist',
      sourcemap: true,
      minify: false, // 使用單獨的 minify 命令
      emptyOutDir: false, // 不清空目錄，因為我們有多次構建
      rollupOptions: {
        output: {
          exports: 'default',
          // 保持 UMD 格式乾淨
          assetFileNames: '[name][extname]',
          entryFileNames: '[name].js'
        }
      }
    },
    server: {
      open: '/test.html',
      port: 8080,
      root: './docs'
    },
    root: isDev ? './docs' : './',
    publicDir: false
  };
});
