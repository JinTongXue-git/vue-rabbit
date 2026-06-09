<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryFilterApi ,getSubCategoryListApi } from '@/apis/CategoryAPI.js'

import GoodsItem from '@/views/Home/components/GoodsItem.vue'

const CategoryData = ref([])
async function getCategoryData() {
  try {
    const data = await getCategoryFilterApi(useRoute().params.id)
    CategoryData.value = data.result
  } catch (error) {
    console.log('获取二级分类数据失败', error)
  }
}

const RequestBody = ref({
  categoryId: useRoute().params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const goodsList = ref([])
async function getGoodsList() {
  try {
    const data = await getSubCategoryListApi(RequestBody.value)
    console.log('/category/goods/temporary' , data)
    goodsList.value = data.result.items
  } catch (error) {
    console.log('/category/goods/temporary获取商品列表失败', error)
  }
}




onMounted(() => {
  getCategoryData()
  getGoodsList()
})

function tabChange() {
  console.log('tabChange()' , RequestBody.value.sortField)
  RequestBody.value.page = 1
  getGoodsList()
}

async function load(){
  RequestBody.value.page++
  const data = await getSubCategoryListApi(RequestBody.value)
  goodsList.value.push(...data.result.items)
}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${CategoryData.parentId}` }">
          {{ CategoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ CategoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="RequestBody.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load">
        <!-- 商品列表-->
        <GoodsItem v-for="item in goodsList" :key="item.id" :good="item" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
