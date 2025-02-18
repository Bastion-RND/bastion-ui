// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [{ src: 'lib/app/styles', dest: 'styles' }],
    }),
  ],
  build: {
    lib: {
      entry: 'lib/app/main.ts',
      name: 'bastion-ui',
      fileName: 'bastion-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
