// 1. 第三方库
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 2. 项目核心组件/模块
import App from './App.vue'
import router from './router'

// 3. 自定义插件/工具
import { imgLazyPlugin } from '@/directives/index.js'

// 4. 样式文件
import '@/styles/common.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(imgLazyPlugin)
app.mount('#app')





