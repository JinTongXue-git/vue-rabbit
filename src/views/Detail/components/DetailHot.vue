<script setup>
import { fetchHotGoodsApi } from '@/apis/DetailAPI.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  title : {
    type : String,
    default : 'XX榜单'
  }
})


// 掉用接口获取周日榜单数据
const detailHotList = ref([])
async function getDetailHotList(){
  const res = await fetchHotGoodsApi({
    id : useRoute().params.id,
    type : 2,
    limit : 3
  })
  console.log('detailHotList组件生效了' , res)
  detailHotList.value = res.result
}

onMounted(() => {
  getDetailHotList()
})
</script>
<template>
  <div class="goods-hot">
    <h3>周日榜单</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in detailHotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{item.price}}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>