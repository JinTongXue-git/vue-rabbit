
// 导入封装好的 axios 实例
import httpInstance from '@/utils/http.js'

/**
 * 获取一级分类详情
 * 
 * 这个函数是用来请求后端的分类数据接口的
 * 比如点击顶部导航的"居家"、"美食"这些分类时，就会调用这个接口
 * 
 * @param {string|number} id - 分类的 ID 号，比如"1"代表居家，"2"代表美食
 * @returns {Promise} - 返回一个 Promise，成功后会拿到分类的详细数据
 * 
 * @example
 * // 调用方式
 * getCategoryApi01('1').then(res => {
 *   console.log('分类详情:', res)
 * })
 */
export function getCategoryApi01(id){
  return httpInstance({
    url: '/category',
    params: {
      id: id  // ES6 简写，等同于 id: id
    }
  })
}


export function getCategoryFilterApi(id){
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id: id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export function getSubCategoryListApi(data){
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'POST',
    data: data
  })
}
