import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import baseConfig from '../vite.config'

export default mergeConfig(baseConfig, {
  plugins: [vue()],
  server: {
    port: 8080
  },
  build: {
    outDir: '../dist/client',
    copyPublicDir: '../dist/server'
  }
})
