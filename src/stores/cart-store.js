// 封装购物车模块状态管理

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user-store.js'
import { insertCartApi, findNewCartListApi ,delCartApi } from '@/apis/CartAPI.js'







// 定义购物车模块的状态管理
export const useCartStore = defineStore('cart', () => {

  const userStore = useUserStore()
  // 获取登录状态
  const isLogin = computed(() => userStore.userInfo.token )

  async function updataNewList (){
    // 1. 刷新购物车列表
    const res = await findNewCartListApi()
    cartList.value = res.result
  }

  // 购物车列表
  // 数据结构: { id, name, picture, price, count, skuId, attrsText, selected }
  // - id: 商品ID
  // - name: 商品名称
  // - picture: 商品图片
  // - price: 商品价格
  // - count: 商品数量
  // - skuId: SKU ID（用于区分不同规格）
  // - attrsText: 规格属性文本（如"颜色: 黑色 尺寸: M"）
  // - selected: 是否选中
  const cartList = ref([])

  
  // 添加商品到购物车
  // @param {Object} goods - 商品对象，包含 id, name, picture, price, count, skuId, attrsText, selected
  async function addCart(goods) {
    if (isLogin.value) {
      //登录状态，加入购物车接口
      await insertCartApi({skuId: goods.skuId, count: goods.count})
      // 1. 刷新购物车列表
      updataNewList()
    }else{
      // 1. 先判断是否有相同的商品（根据 skuId 判断）
      const item = cartList.value.find(item => item.skuId === goods.skuId)
      // 2. 如果有相同的商品，就增加数量
      if (item) {
        item.count++
      } else {
        // 3. 如果没有相同的商品，就添加到购物车
        cartList.value.push(goods)
      }
    }
  }


  // 从购物车删除商品
  // @param {String} skuId - 要删除的商品的 SKU ID
  async function delCart(skuId) {
    if(isLogin.value){
      await delCartApi([skuId])
      // 1. 刷新购物车列表
      updataNewList()
    }else{
      // 1. 根据 skuId 查找商品在数组中的索引
      const index = cartList.value.findIndex(item => skuId === item.skuId)
      if (index !== -1) {
        // 2. 如果找到了（index 不为 -1），从数组中移除该商品
        cartList.value.splice(index, 1)
      }
    }

    
  }


  // 计算购物车商品总数量
  // 使用数组的 reduce 方法，遍历 cartList 中每个商品对象的 count 字段并累加
  // @returns {Number} - 返回购物车中所有商品的数量总和
  // reduce: 数组的归约方法
  // pre: 累积值（初始值为 0）
  // cur: 当前元素（购物车中的每个商品对象）
  // cur.count: 当前商品的数量
  // 最终返回所有商品 count 的总和
  const getCount 
    = computed(() =>  cartList.value.reduce((pre, cur) => pre + cur.count, 0))

  const getTotalPrice 
    = computed(() =>  cartList.value.reduce((pre, cur) => {
      // 1. 累加选中的商品的总价
      if (cur.selected) {
        pre += cur.price * cur.count
      }
      return pre
    }, 0))



  // 计算购物车中选中的商品数量
  const getSelectedCount = computed(() =>  cartList.value.reduce((pre, cur) => {
      // 1. 累加选中的商品的数量
      if (cur.selected) {
        pre +=  cur.count
      }
      return pre
  }, 0))
 


  // ========== 全选逻辑说明 ==========
  // 全选功能分为两套独立逻辑，互不冲突：
  // 
  // 【逻辑一：全选框控制单选框】
  // 当用户点击全选框时，根据全选框的状态（true/false），
  // 批量设置所有商品的选中状态。
  // 
  // 【逻辑二：单选框影响全选框】
  // 当用户点击单个商品的单选框时，全选框的状态由所有单选框决定：
  //   - 所有单选框都选中 → 全选框为 true
  //   - 任意一个单选框未选中 → 全选框为 false
  // 
  // 实现方式：
  // - allSelected：计算属性，自动判断是否所有商品都被选中
  // - toggleAll：方法，批量设置所有商品的选中状态
  // ===================================

  // 全选状态（计算属性）
  // 判断逻辑：购物车非空 且 所有商品都被选中时返回 true，否则返回 false
  const allSelected = computed(() => {
    if (cartList.value.length === 0) return false
    return cartList.value.every(item => item.selected)
  })

  // 全选/取消全选方法
  // @param {Boolean} checked - 是否全选
  async function toggleAll(checked) {
    cartList.value.forEach(item => {
      item.selected = checked
    })
    // 1. 刷新购物车列表
    updataNewList()
  }

  
  return {
    cartList,
    addCart,
    delCart,
    getCount,
    getTotalPrice,
    getSelectedCount,
    allSelected,
    toggleAll
  }
}, { persist: true })






