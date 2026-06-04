import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'electron-vite'

export default defineConfig({
  main: {
    build: {
      externalizeDeps: true,
      rollupOptions: {
        input: resolve(__dirname, 'src/main/index.ts')
      }
    }
  },
  preload: {
    build: {
      externalizeDeps: true,
      rollupOptions: {
        input: resolve(__dirname, 'src/preload/index.ts')
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src/renderer')
      }
    },
    plugins: [react()],
    test: {
      environment: 'jsdom',
      globals: true,
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html', 'lcov'],
        include: ['src/renderer/**/*.{ts,tsx}'],
        exclude: ['src/renderer/**/*.test.{ts,tsx}', 'src/renderer/main.tsx', 'src/**/*.d.ts']
      }
    }
  }
})
