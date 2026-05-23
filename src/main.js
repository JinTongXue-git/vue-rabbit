import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

import { getCategory } from '@/apis/testAPI'


// 调用获取分类列表接口
getCategory().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})





const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
