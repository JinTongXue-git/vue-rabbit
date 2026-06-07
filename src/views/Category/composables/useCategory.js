
import { onMounted, ref, watch } from 'vue'
import { getCategoryApi01 } from '@/apis/CategoryAPI'
import { useRoute } from 'vue-router'


export function useCategory(  ) {

  const categoryDetail = ref({})

  // 封装分类数据请求函数
  async function fetchCategoryData(categoryId) {
    try {
      const res = await getCategoryApi01(categoryId)
      categoryDetail.value = res.result
      console.log('一级分类详情数据:', res)
    } catch (err) {
      console.error('获取分类详情失败:', err)
    }
  }
  
  const route = useRoute()
  // 页面加载时获取数据
  onMounted(() => {
    fetchCategoryData(route.params.id)
  })

  // 监听路由参数变化，重新请求数据
  watch(() => route.params.id, (newId) => {
    console.log('路由参数变化:', newId)
    fetchCategoryData(newId)
  })

  return {
    categoryDetail
  }

}
