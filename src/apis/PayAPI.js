// 导入封装好的 axios 实例
import httpInstance from '@/utils/http.js'



/**
 * 获取订单详情
 */
export function getOrderApi(orderId){
  return httpInstance({
    url: `/member/order/${orderId}`,
    method: 'GET'
  })
}
