

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











