import { defineConfig } from 'vite'
import path from 'node:path';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@src" as *;`,
        includePaths: [path.resolve(__dirname, 'src')],
        sassOptions: {
          javascriptEnabled: false,
        },
      },
    },
  },  assetsInclude: ['**/*.ttf']
})
