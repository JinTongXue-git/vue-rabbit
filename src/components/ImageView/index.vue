<!--
  商品图片组件

  思路：Vue 是数据驱动的，有生产力的前端应该根据数据来渲染内容，而不是写死静态代码。
  这个组件的核心就是围绕 imageList 数组的下标来搞事情：

  1. 有一个 activeIndex 记录当前展示哪张图
  2. 鼠标移入小图时，把当前小图的下标赋给 activeIndex
  3. 大图区域根据 activeIndex 去 imageList 里取对应的图片来显示
  4. 小图的选中样式也是根据 activeIndex 来判断，用动态类名 active 来切换

  说白了，整个组件就是靠一个下标变量来联动大图和小图的展示。
-->

<script setup>
import { ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
// 图片列表
const imageList = [
  'https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png',
  'https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg',
  'https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg',
  'https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg',
  'https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg'
]

const activeIndex = ref(0)
function enterhandler(index){
  activeIndex.value = index
}
//2.1. 获取鼠标相对位置
const target = ref(null)

//
const {elementX , elementY , isOutside} = useMouseInElement(target)
const left = ref(0)
const top = ref(0)
const positionX = ref(0)
const positionY = ref(0)
// })
// watch(() => [elementX.value, elementY.value], () => {
//   if (isOutside.value === false) {
//     // 水平方向：限制在 0-200 范围内
//     if (elementX.value < 100) {
//       left.value = 0
//     } else if (elementX.value > 300) {
//       left.value = 200
//     } else {
//       left.value = elementX.value - 100
//     }
    
//     // 垂直方向：限制在 0-200 范围内
//     if (elementY.value < 100) {
//       top.value = 0
//     } else if (elementY.value > 300) {
//       top.value = 200
//     } else {
//       top.value = elementY.value - 100
//     }
//   }
// })
watch(() => [elementX.value, elementY.value], () => {
  if (isOutside.value === false) {
    // 限制范围：[0, 200]
    left.value = Math.max(0, Math.min(200, elementX.value - 100))
    top.value = Math.max(0, Math.min(200, elementY.value - 100))
  }
  // 计算背景图的移动距离
  positionX.value = -left.value * 2
  positionY.value = -top.value * 2



})
</script>


<template>
  {{elementX }} , {{ elementY }} , {{ isOutside }} , {{ left }} , {{ top }}
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer"  :style="{ left: `${left}px`, top: `${top}px` }" v-show="isOutside === false"></div> 
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <!-- 鼠标进入事件 小图把小图的下标赋值给activeIndex ；样式切换 用动态类名（active） -->
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="enterhandler(i)"
      :class="{'active': activeIndex === i}">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imageList[activeIndex]})`,
        backgroundPositionX: `${positionX}px`,
        backgroundPositionY: `${positionY}px`,
      },
    ]" v-show="isOutside === false"></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>