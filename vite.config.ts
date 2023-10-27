import { defineConfig } from 'vite'
// import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

// ignore test setup files
// const vitestExclude = ['src/test/**']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vitest
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/test/setup.ts',
  //   include: ['**/*.{test,spec}.?(c|m)[t]s?(x)'],
  //   exclude: [...configDefaults.exclude, ...vitestExclude],
  //   // coverage: {
  //   //   provider: 'v8',
  //   // },
  // },
})
