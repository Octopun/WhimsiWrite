import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: './allTheReactStuff',
  build: {
    outDir: '../dist'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './allTheReactStuff/src'),
      '@assets': resolve(__dirname, './allTheReactStuff/src/assets')
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
})
