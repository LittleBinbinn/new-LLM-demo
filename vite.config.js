import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
   transpileDependencies: true,
   assetsDir: 'static',
   parallel: false,
   publicPath: './',
   productionSourceMap: false,
  devServer: {
     //解决跨域
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
    viteMockServe({
      mockPath: 'src/mock/',  // 设置模拟数据的存储文件夹
      localEnabled:true,  
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
