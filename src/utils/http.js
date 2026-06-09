// 自定义axios基础实例 用于封装axios请求

import axios from 'axios'

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
httpInstance.interceptors.response.use(
  response => {
    return response.data
  } , 
  error => {
    return Promise.reject(error)
  }
)



export default httpInstance