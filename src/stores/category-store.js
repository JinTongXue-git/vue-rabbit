
import {ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/LayoutAPI'


/**
 * 分类数据状态管理 Store
 * 
 * 用途：统一管理商品分类数据，实现数据共享和缓存
 * 
 * 使用场景：
 * 1. @views/layout/components/LayoutHeader.vue - 渲染顶部导航分类列表
 * 2. @views/layout/components/LayoutFixed.vue - 渲染吸顶导航分类列表
 * 3. @views/Home/components/HomeCategory.vue - 渲染分类推荐列表
 * 
 * 工作流程：
 * 1. 调用 getCategory() 方法发起 API 请求
 * 2. 成功：将接口返回数据存入 categoryList
 * 3. 失败：使用本地静态数据作为 fallback
 * 
 * 数据结构：
 * categoryList: [{ id: string, name: string, pic?: string }, ...]
 * 
 * 使用方式：
 * import { useCategoryStore } from '@/stores/category-store'
 * const categoryStore = useCategoryStore()
 * categoryStore.getCategory()  // 初始化数据
 * categoryStore.categoryList    // 获取分类列表
 */


export const useCategoryStore = defineStore('category-store' , () => {
  const categoryList = ref([])

  async function getCategory (){

    // 1. 先尝试读取本地 JSON 文件
    try {
      console.log('📦 尝试读取本地分类数据...')
      const response = await fetch('/data/home-category.json')
      
      if (response.ok) {
        const data = await response.json()
        categoryList.value = data.result
        console.log('✅ 成功使用本地数据')
        return  // 成功了就直接返回，不用请求接口
      }
    } catch (error) {
      console.log('⚠️ 本地数据读取失败:', error)
    }

    // 2. 本地没有数据，请求接口
    try {
      console.log('🔌 请求网络数据...')
      const result = await getCategoryApi()
      categoryList.value = result.result
      console.log('✅ 成功获取网络数据')
    } catch (error) {
      console.error('❌ 网络请求也失败了:', error)
      // 使用静态 fallback 数据
      // categoryList.value = [
      //   { id: '1005000', name: '居家' },
      //   { id: '1005002', name: '美食' },
      //   { id: '1010000', name: '服饰' },
      //   { id: '1011000', name: '母婴' },
      //   { id: '1013001', name: '个护' },
      //   { id: '1019000', name: '严选' },
      //   { id: '1043000', name: '数码' }
      // ]
    }

  }

  return {
    categoryList,
    getCategory
  }
})