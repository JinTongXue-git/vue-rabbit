<script setup>
import HomePanel from '@/views/Home/components/HomePanel.vue'
import { useHomeStore } from '@/stores/home-store.js'

// import { ref, onMounted } from 'vue'
// import { getHotApi } from '@/apis/HomeAPI.js'
// // 存储人气推荐列表
// const hotList = ref([])
// // 在页面挂载后 获取人气推荐列表
// onMounted(() => {
//   getHotApi()
//     .then((result) => {
//       console.log('hot:', result);
//       hotList.value = result.result
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// })


</script>
<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in useHomeStore().hotList" :key="item.id">
          <RouterLink to="/">
            <!-- 自定义指令，用这个 V杠 image立方绑定这个 image 标签，
             然后这个时候就可以通过这个v-img-lazy找到这个 img 标签，
             然后它这里的值是这个 item picture，这里面是我从外部调用进来的那个。
             调用进来的一个这个 URL 相片的地址。 -->
            <!-- <img :src="item.picture" alt=""> -->
            <img v-img-lazy="item.picture"  alt="">
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>