// 导入封装好的 axios 实例
import httpInstance from '@/utils/http.js'

/**
 * 获取结算信息
 */
export function getCheckoutInfoApi(){
  return httpInstance({
    url: '/member/order/pre',
    method: 'GET'
  })
}