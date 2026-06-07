<script setup>
import HomeCategory  from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'

import { onMounted } from 'vue'
import { useHomeStore } from '@/stores/home-store.js'

onMounted(() => {
  console.log('<HomeBanner /> 组件挂载了,开始获取banner数据')
  useHomeStore().getHomeBanner()
  console.log('<HomeNew /> 组件挂载了,开始获取new数据')
  useHomeStore().getHomeNew()
  console.log('<HomeHot /> 组件挂载了,开始获取hot数据')
  useHomeStore().getHomeHot()
  console.log('<HomeProduct /> 组件挂载了,开始获取goods数据数据')
  useHomeStore().getHomeGoodsProduct()

})

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>

<style scoped lang="scss">
</style>