// 导入封装好的 axios 实例
import httpInstance from '@/utils/http.js'

// 添加商品到购物车  接口
export function insertCartApi({skuId, count}){
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取  最新的  购物车列表  接口
export function findNewCartListApi(){
  return httpInstance({
    url: '/member/cart',
    method: 'GET'
  })
}
