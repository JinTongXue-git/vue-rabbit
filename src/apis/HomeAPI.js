

import httpInstance from '@/utils/http'

export function getHomeBannerApi() {
  return httpInstance({
    url: '/home/banner'
  })
}



/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function getNewApi(){
  return httpInstance({
    url: '/home/new'
  })
}



/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHotApi() {
  return  httpInstance({
    url: '/home/hot',
    method: 'GET'
  })
}



/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export function getGoodsApi(){
  return httpInstance({
    url: '/home/goods',
    method: 'GET' 
  })
}






