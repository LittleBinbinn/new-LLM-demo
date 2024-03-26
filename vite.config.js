import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
   transpileDependencies: true,
   assetsDir: 'static',
   parallel: false,
   publicPath: './',
   productionSourceMap: false,
    devServer: {
    port: 5000,
    host: 'localhost',
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',   
        changeOrigin: true, 
        pathRewrite: {     
          "^/api": "",
        }
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
