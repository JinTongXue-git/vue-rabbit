
import {ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/LayoutAPI'


/**
 * 分类数据状态管理 Store
 * 
 * 用途：统一管理商品分类数据，实现数据共享和缓存
 * 
 * 使用场景：
 * 1. LayoutHeader.vue - 渲染顶部导航分类列表
 * 2. LayoutFixed.vue - 渲染吸顶导航分类列表
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

  function getCategory (){
    getCategoryApi()
    .then((result) =>{
      categoryList.value = result.result
    })
    .catch((error) =>{
      console.log('分类接口请求失败，使用静态数据:', error);
      categoryList.value = [
        { id: '1', name: '居家'},
        { id: '2', name: '美食'},
        { id: '3', name: '服饰'},
        { id: '4', name: '母婴'},
        { id: '5', name: '个护'},
        { id: '6', name: '严选'},
        { id: '7', name: '数码'},
        { id: '8', name: '运动'},
        { id: '9', name: '杂项'}
      ]
    })
  }

  return {
    categoryList,
    getCategory
  }
})