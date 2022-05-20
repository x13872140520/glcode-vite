/*
 * @Author: your name
 * @Date: 2022-04-22 11:30:19
 * @LastEditTime: 2022-05-05 09:11:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mac/vite/vite-dmeo/vite.config.js
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { resolve } = require('path')
import fs from 'fs/promises';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  css: {
    modules: {
      test: /.(css|less|sass|scss|styl|stylus|pcss|postcss)/
    }
  },
  assetsInclude: [
    // images
    'png',
    'jpe?g',
    'gif',
    'svg',
    'ico',
    'webp',
    'avif',

    // media
    'mp4',
    'webm',
    'ogg',
    'mp3',
    'wav',
    'flac',
    'aac',

    // fonts
    'woff2?',
    'eot',
    'ttf',
    'otf',

    // other
    'wasm',
    'webmanifest',
    'pdf',
    'txt'

  ],
  // 配置下拦截器
  server: {
    host: true,
    port: 3000,  //端口
    strictPort: false,  //是否制定端口
    open: true,  // 可以是字符串
    proxy: {
      target: '',
      // changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  resolve: {
    alias: {
      recoils: resolve(__dirname, 'src/recoils'),
      api: resolve(__dirname, 'src/api'),
      route: resolve(__dirname, 'src/route'),
      utils: resolve(__dirname, 'src/utils'),
      page: resolve(__dirname, 'src/page'),
      public: resolve(__dirname, 'src/public'),
      "@": resolve(__dirname, 'src'),
      "react-dom": resolve(__dirname, 'node_modules/react-dom'),

    }
  }
})
