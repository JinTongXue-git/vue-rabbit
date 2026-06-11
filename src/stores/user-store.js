import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginApi } from '@/apis/LoginAPI'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

export const useUserStore = defineStore('user', () => {
  // 1.定义管理用户数据的state
  const userInfo = ref({})
  //2.定义获取接口数据的action函数
  async function getUserInfo ({ account, password}){
    try {
      const res = await loginApi({ account, password })
      userInfo.value = res.result
      
    } catch (error) {
      ElMessage.error(error.message)
    }
  }
  //3.以对象的格式把state和actionreturn
  return {
    userInfo,
    getUserInfo
  }
},
{
  // p开启数据持久化
  persist: true
}
)