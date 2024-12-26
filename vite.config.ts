import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = '/hello-react18/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  assetsInclude: ['**/*.glb', '**/*.usdz'],
})
