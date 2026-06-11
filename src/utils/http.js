// 自定义axios基础实例 用于封装axios请求

import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'


const httpInstance = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
} , error => Promise.reject(error))

// axios响应拦截器
//Day5-05.登录-基础功能实现 401错误处理 5.2登录失败后，提示用户登录失败(用响应拦截器，统一处理401错误)
httpInstance.interceptors.response.use(
  response => {
    return response.data
  } , 
  error => {
    ElMessage({
      type:'warning',
      message: error.response.data.message || '登录失败，请重新登录'
    })
    return Promise.reject(error)
  }
)



export default httpInstance