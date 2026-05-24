<script setup>
import { useCategoryStore } from '@/stores/category-store.js'
import {useScroll} from '@vueuse/core'

const {y} = useScroll(window)

// import { ref, onMounted, onUnmounted } from 'vue'
// show 1 绑定DOM元素
// const stickyRef = ref(null)

// function handleShow (){
//   let scrollTop = window.scrollY || document.documentElement.scrollTop

//   // show 1.1 根据scroll和窗口顶部的距离  来判断是否显示”粘性导航栏“ 通过添加 | 移除 ".show"
//   if (scrollTop > 78){
//     stickyRef.value.classList.add('show')
//   }else{
//     stickyRef.value.classList.remove('show')
//   }
// }

// show 组件挂载完毕后给window对象添加scroll事件
// onMounted(() => {
//   window.addEventListener('scroll' , handleShow)
// })
// show 在卸载组件时移除window的scroll事件  比如 切换同级路由 或 上级路由
// onUnmounted(() => {
//   window.removeEventListener('scroll', handleShow)
// })

</script>

<template>
  <!-- <div ref="stickyRef" class="app-header-sticky"> -->
    <!-- show 动态绑定class-->
  <div class="app-header-sticky" :class="{'show': y > 78}">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home" >
          <router-link to="/"> 首页</router-link>
        </li>
        <li class="home" v-for="item in useCategoryStore().categoryList" :key="item.id" >
          <router-link :to="`/category/${item.id}`">{{ item.name }}</router-link>
        </li>

        <!-- <li>
          <RouterLink to="/">居家</RouterLink>
        </li>
        <li>
          <RouterLink to="/">美食</RouterLink>
        </li>
        <li>
          <RouterLink to="/">服饰</RouterLink>
        </li>
        <li>
          <RouterLink to="/">母婴</RouterLink>
        </li>
        <li>
          <RouterLink to="/">个护</RouterLink>
        </li>
        <li>
          <RouterLink to="/">严选</RouterLink>
        </li>
        <li>
          <RouterLink to="/">数码</RouterLink>
        </li>
        <li>
          <RouterLink to="/">运动</RouterLink>
        </li>
        <li>
          <RouterLink to="/">杂项</RouterLink>
        </li> -->
      </ul>

      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>