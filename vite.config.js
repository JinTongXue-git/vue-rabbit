import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导入 ElementPlus 组件 安需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 导入 ElementPlus 组件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        // 配置elementplus采用sass的样式配色
        ElementPlusResolver({importStyle: "sass"})

      ],
    }),
  ],
  // GitHub Pages 部署需要配置 base 路径
  base: '/vue-rabbit/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      // 自动导入定制化样式文件进行样式覆盖
      // 全局导入全局var.scss样式变量
      scss: {
        additionalData: 
        `@use "@/styles/element/index.scss" as *;
         @use "@/styles/var.scss" as *;`,
      },
    },
  },
})
