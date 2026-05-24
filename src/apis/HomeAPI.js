

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










