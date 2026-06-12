// 封装购物车模块状态管理

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 定义购物车模块的状态管理
export const useCartStore = defineStore('cart', () => {
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
  function addCart(goods) {
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


  // 从购物车删除商品
  // @param {String} skuId - 要删除的商品的 SKU ID
  function delCart(skuId) {
    // 1. 根据 skuId 查找商品在数组中的索引
    const index = cartList.value.findIndex(item => skuId === item.skuId)
    if (index !== -1) {
      // 2. 如果找到了（index 不为 -1），从数组中移除该商品
      cartList.value.splice(index, 1)
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
    = computed(() =>  cartList.value.reduce((pre, cur) => pre + cur.price * cur.count, 0))

  return {
    cartList,
    addCart,
    delCart,
    getCount,
    getTotalPrice
  }
}, { persist: true })






