import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import postCssPxToRem from 'postcss-pxtorem';
import svgLoader from 'vite-svg-loader';
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  base: "./",
  plugins: [
    // ElementPlus(),
    vue(),
    vueJsx(),
    VueDevTools(),
    svgLoader(),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16, // 1rem 对应的像素值，这里设置为 16px，根据你的设计稿调整
          propList: ['*'], // 要转换的 CSS 属性，这里表示全部属性都转换
          selectorBlackList: [], // 忽略的选择器，可以用正则表达式
          replace: true, // 是否替换原有的像素单位
          mediaQuery: false, // 是否在媒体查询中也进行转换
          minPixelValue: 2 // 小于指定像素值的不转换
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'src': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})