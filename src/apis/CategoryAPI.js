
// 导入 axios 基础地址实例
import httpInstance from '@/utils/http'


/**
 * 获取分类列表
 * @returns  Promise对象
 */
export function getCategoryApi(){
  return httpInstance({
    url: '/home/category/head'
  })
}




