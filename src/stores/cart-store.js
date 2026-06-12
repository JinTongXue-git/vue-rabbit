// 封装购物车模块状态管理

import { defineStore } from 'pinia'
import { ref } from 'vue'

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
    if(item){
      item.count++
    }else{
      // 3. 如果没有相同的商品，就添加到购物车
      cartList.value.push(goods)
    }
  }






  return {
    cartList,addCart
    
  }
},{persist: true})






