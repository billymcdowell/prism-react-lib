import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    include: ['src'],
    exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx']
  }),
  cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(dirname, 'src/index.ts'),
      name: 'prism-react-lib',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': resolve(dirname, './src')
    }
  },
});