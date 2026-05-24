<script setup>
// 导入需要用到的东西
import { getCategoryApi01 } from '@/apis/CategoryAPI'  // 获取分类详情的接口
import { useRoute } from 'vue-router'                   // 用来获取路由参数
import { onMounted, ref } from 'vue'                   // 生命周期钩子和响应式变量

// ========================================
// 1. 获取路由参数（就是从 URL 里拿到分类 ID）
// ========================================
// 比如 URL 是 /category/1，那这里拿到的 id 就是 '1'
const route = useRoute()
const categoryId = route.params.id  // 把变量名改得更有意义一些

// ========================================
// 2. 定义响应式数据
// ========================================
// 用来存储分类详情数据，比如分类名称、子分类列表这些
const categoryDetail = ref({})

// ========================================
// 3. 页面加载时获取数据
// ========================================
onMounted(() => {
  // 调用接口，传入分类 ID
  getCategoryApi01(categoryId).then(res => {
    console.log('一级分类详情数据:', res)
    // 把接口返回的数据存到 categoryDetail 里
    categoryDetail.value = res.result
  }).catch(err => {
    // 如果请求失败，打印错误信息
    console.error('获取分类详情失败:', err)
  })
})



</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryDetail.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>