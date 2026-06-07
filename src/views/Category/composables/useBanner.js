import { onMounted, ref } from 'vue'
import { getHomeBannerApi } from '@/apis/HomeAPI'


export function useBanner() {
  const bannerList = ref([])

  onMounted(() => {
    // 获取轮播图数据
    getHomeBannerApi({ distributionSite: '2' })
    .then(res => {
      bannerList.value = res.result
    }).catch(err => {
      console.log(err)
    })
  })

  return {
    bannerList
  }
}