import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [react(),
    tsConfigPaths(),
    dts({
      include: ['src/components/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'UsoDesign',
      formats: ['es', 'umd'],
      fileName: (format) => `uso-design.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
