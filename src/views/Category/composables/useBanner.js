import { onMounted, ref } from 'vue'
import { getHomeBannerApi } from '@/apis/HomeAPI'

export function useBanner() {
  const bannerList = ref([])

  // 封装成一个 async 函数
  async function fetchBannerData() {
    try {
      console.log('📦 尝试读取本地轮播图数据...')
      console.log('📍 本地数据路径: /data/category-banner.json (项目相对路径: /public/data/category-banner.json)')
      const localResponse = await fetch('/data/category-banner.json')
      
      if (localResponse.ok) {
        const localData = await localResponse.json()
        bannerList.value = localData.result
        console.log('✅ 使用本地轮播图数据')
        return
      } else {
        console.log('⚠️ 本地数据不存在或读取失败')
      }
    } catch (error) {
      console.log('⚠️ 本地读取失败:', error)
    }

    // 只有本地失败了才会到这里
    try {
      console.log('🌐 请求网络轮播图数据...')
      console.log('🚀 API接口路径: /home/banner?distributionSite=2')
      const res = await getHomeBannerApi({ distributionSite: '2' })
      bannerList.value = res.result
      console.log('✅ 使用网络轮播图数据')
    } catch (error) {
      console.error('❌ 网络请求也失败了:', error)
    }
  }

  onMounted(() => {
    fetchBannerData()
  })

  return {
    bannerList
  }
}