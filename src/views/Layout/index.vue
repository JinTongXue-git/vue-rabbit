<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'

import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category-store.js' 

// show 组件挂载完毕后获取分类列表在副主键这里勾取一次的话，
// 就不用在主键那里分别勾取两次发起这个网络请求了
onMounted(() => {
  useCategoryStore().getCategory()
})
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <router-view></router-view>
  <LayoutFooter />
</template>




<style scoped lang="scss"></style>