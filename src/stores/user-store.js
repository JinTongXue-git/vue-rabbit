import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginApi } from '@/apis/LoginAPI'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useCartStore } from '@/stores/cart-store'
import { mergeCartApi } from '@/apis/CartAPI.js'


export const useUserStore = defineStore('user', () => {
  // 1.定义管理用户数据的state
  const userInfo = ref({})
  //2.定义获取接口数据的action函数
  async function getUserInfo ({ account, password}){
    try {
      const res = await loginApi({ account, password })
      userInfo.value = res.result
      // 1. 合并本地购物车到服务器购物车
      await mergeCartApi(useCartStore().cartList.map(item => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      }))
      // 2. 刷新购物车列表
      useCartStore().updataNewList()
    } catch (error) {
      ElMessage.error(error.message)
    }
  }
  // 4.定义清除用户数据的action函数
  function clearUserInfo (){
    userInfo.value = {}
    // 1. 清空购物车
    useCartStore().clearCart()
  }

  //3.以对象的格式把state和actionreturn
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
{
  // p开启数据持久化
  persist: true
}
)