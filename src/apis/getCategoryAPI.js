
// 导入 axios 基础地址实例
import httpInstance from '@/utils/http'

export function getCategoryAPI(){
  return httpInstance({
    url: '/home/category/head'
  })
}




