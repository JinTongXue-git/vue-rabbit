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


/// 删除购物车商品接口  根据 Array[skuId] 删除
export function delCartApi(skuIds){
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids: skuIds
    }
  })
}

//合并本地购物车到服务器购物车
// @param {Array} cartList - 本地购物车列表
export function mergeCartApi(cartList){
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data: cartList
  })
}
