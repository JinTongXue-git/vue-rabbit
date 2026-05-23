import httpInstance from '@/utils/http'


/**
 * 获取分类列表
 * @returns  Promise对象
 */
export function getCategory() {
  return httpInstance({
    url: '/home/category/head'
  })
}