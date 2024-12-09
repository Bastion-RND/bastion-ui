// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [
        { src: 'lib/theme', dest: 'styles' },
      ],
    }),
  ],
  build: {
    lib: {
      entry: 'lib/main.ts',
      name: 'bastion-ui',
      fileName: 'bastion-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@ionic/react'],
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
