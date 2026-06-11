// 1. 第三方库
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 2. 项目核心组件/模块
import App from './App.vue'
import router from './router'

// 3. 自定义插件/工具
import { imgLazyPlugin } from '@/directives/index.js'

// 5. 全局组件
// import { componenntPlugin } from '@/components/index.js'


// 4. 样式文件
import '@/styles/common.scss'

// 6. 数据持久化插件，开启数据持久化，记得下载插件 pnpm add pinia-plugin-persistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
// p1. 配置pinia插件,开启数据持久化
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(imgLazyPlugin)
// 5. 全局组件 不想用，没高亮提示 ，在使用的时候再引入
// app.use(componenntPlugin)
app.mount('#app')





