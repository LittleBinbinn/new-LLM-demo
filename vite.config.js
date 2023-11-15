import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import http from 'http'  
// import {createProxy} = require( 'http-proxy-middleware'  )
  
// const proxy = createProxy('/api', { target: 'http://218.218.218.141:3000' })  
  
// export default defineConfig({  
//   // ...其他配置项  
//   server: {  
//     proxy: {  
//       '/api': 'http://218.218.218.141:3000' // 将需要跨域的请求路径前缀与代理服务器的路径前缀匹配  
//     },  
//     middlewareMode: 'html' // 使用html模式启动服务，这样可以直接在html中使用相对路径  
//   },  
//   build: {  
//     rollupOptions: {  
//       input: {  
//         main: path.resolve(__dirname, 'index.html') // 指定入口html文件路径  
//       }  
//     }  
//   }  
// })




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
        target: 'http://218.218.218.141:3000',   
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
