import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getHomeBannerApi } from '@/apis/HomeAPI.js'
import { getNewApi } from '@/apis/HomeAPI.js'
import { getHotApi } from '@/apis/HomeAPI.js'
import { getGoodsApi } from '@/apis/HomeAPI.js'


/**
 * @/views/Home/components/HomeBanner.vue{}
 * /data/home-banner.json本地数据
 * import { getHomeBannerApi } from '@/apis/HomeAPI.js'
 * const bannerList
 * getHomeBanner()
 * }
 */
/**
 * @/views/Home/components/HomeNew.vue{}
 * /data/home-new.json本地数据
 * import { getNewApi } from '@/apis/HomeAPI.js'
 * const newList = ref([])
 * getHomeNew()
 * }
 * */
/**
 * @/views/Home/components/HomeHot.vue{}
 * /data/home-hot.json本地数据
 * import { getHotApi } from '@/apis/HomeAPI.js'
 * const hotList = ref([])
 * getHomeHot()
 * }
 */
/**
 * @/views/Home/components/HomeProduct.vue{}
 * /data/home-product.json本地数据
 * import { getGoodsApi } from '@/apis/HomeAPI.js'
 * const goodsProductList = ref([])
 * getHomeGoodsProduct() {
()
 * }
 */

export const useHomeStore = defineStore('home-store' ,() => {

  const bannerList = ref([])
  async function getHomeBanner() {
    // 1. 尝试获取本地数据
    try{
      console.log('尝试获取本地数据home-banner.json')
       const response = await fetch('/data/home-banner.json')
       if(response.ok){
        const data = await response.json()
        bannerList.value = data.result
        return
       }
    }catch(error){
      console.log('获取本地数据失败home-banner.json', error)
    }

    // 2. 本地没有数据，请求接口
    try {
      console.log('请求网络数据...')
      const result = await getHomeBannerApi()
      bannerList.value = result.result
      console.log('http/home/banner成功获取网络数据')
    } catch (error) {
      console.error('http/home/banner网络请求也失败了:', error)
    }
  }


  const newList = ref([])
  async function getHomeNew() {
      // 1. 尝试获取本地数据
    try{
      console.log('尝试获取本地数据home-new.json')
      const response = await fetch('/data/home-new.json')
      if(response.ok){
       const data = await response.json()
       newList.value = data.result
       return
      }
    }catch(error){
      console.log('获取本地数据失败home-new.json', error)
    }

    // 2. 本地没有数据，请求接口
    try {
      console.log('请求网络数据...')
      const result = await getNewApi()
      newList.value = result.result
      console.log('http/home/new成功获取网络数据')
    } catch (error) {
      console.error('http/home/new网络请求也失败了:', error)
    }
  }


  const hotList = ref([])
  async function getHomeHot() {
      // 1. 尝试获取本地数据
    try{
      console.log('尝试获取本地数据home-hot.json')
      const response = await fetch('/data/home-hot.json')
      if(response.ok){
       const data = await response.json()
       hotList.value = data.result
       return
      }
    }catch(error){
      console.log('获取本地数据失败home-hot.json', error)
    }

    // 2. 本地没有数据，请求接口
    try {
      console.log('请求网络数据...')
      const result = await getHotApi()
      hotList.value = result.result
      console.log('http/home/hot成功获取网络数据')
    } catch (error) {
      console.error('http/home/hot网络请求也失败了:', error)
    }
  }


  const goodsProductList = ref([])
  async function getHomeGoodsProduct() {
      // 1. 尝试获取本地数据
    try{
      console.log('尝试获取本地数据home-goods.json')
      const response = await fetch('/data/home-goods.json')
      if(response.ok){
       const data = await response.json()
       goodsProductList.value = data.result
       return
      }
    }catch(error){
      console.log('获取本地数据失败home-goods.json', error)
    }

    // 2. 本地没有数据，请求接口
    try {
      console.log('请求网络数据...')
      const result = await getGoodsApi()
      goodsProductList.value = result.result
      console.log('http/home/goods成功获取网络数据')
    } catch (error) {
      console.error('http/home/goods网络请求也失败了:', error)
    }
  }


  return {
    bannerList,
    getHomeBanner,
    newList,
    getHomeNew,
    hotList,
    getHomeHot,
    goodsProductList,
    getHomeGoodsProduct
  }

})