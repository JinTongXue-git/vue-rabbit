<script setup>
import { ref , onMounted} from 'vue'
import { useRoute } from 'vue-router'
import { getDetailApi } from '@/apis/DetailAPI.js'
import DetailHot from '@/views/Detail/components/DetailHot.vue'

const goods = ref({})
async function getGoods(){
  const res = await getDetailApi(useRoute().params.id)
  goods.value = res.result
  console.log(res)
}


onMounted(() => {
  getGoods()
})
</script>

<template>
  <div class="xtx-goods-page">
    <!-- ✅ 判断 goods 是否为 null -->
    <div class="container" v-if="goods.id">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <!-- 常见错误 goods.categories[1].id 页面加载时为空  因为
            亲求的内容还未返回，但是已经渲染了，导致空指针异常
            解决方法：
            1. 可选链操作  goods.categories[1]?.id
            2. v-if 判断数据是否存在
          -->
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/${goods.categories?.[1].id}`  }">
            {{  goods.categories?.[1].name}}
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/sub/${goods.categories?.[0].id}`  }">
            {{  goods.categories?.[0].name}}   
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ goods?.name || '无商品名称' }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 商品信息 -->
      <div class="info-container">
        <div>
          <div class="goods-info">
            <div class="media">
              <!-- 图片预览区 -->

              <!-- 统计数量 -->
              <ul class="goods-sales">
                <!-- <li>
                  <p>销量人气</p>
                  <p> 100+ </p>
                  <p><i class="iconfont icon-task-filling"></i>销量人气</p>
                </li> -->
                <li>
                  <p>销量人气</p>
                  <p> {{ goods.salesCount }} </p>
                  <p><i class="iconfont icon-task-filling"></i>销量人气</p>
                </li>
                <li>
                  <p>商品评价</p>
                  <p> {{ goods.commentCount }} </p>
                  <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
                </li>
                <li>
                  <p>收藏人气</p>
                  <p> {{ goods.collectCount }} </p>
                  <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
                </li>
                <li>
                  <p>品牌信息</p>
                  <p> {{ goods.brand?.name || '无品牌' }} </p>
                  <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
                </li>
              </ul>
            </div>
            <div class="spec">
              <!-- 商品信息区 -->
              <!-- <p class="g-name"> 抓绒保暖，毛毛虫儿童鞋 </p> -->
              <p class="g-name"> {{ goods?.name || '无商品名称' }} </p>
              <!-- <p class="g-desc">好穿 </p> -->
              <p class="g-desc"> {{ goods?.desc || '无商品描述' }} </p>
              <p class="g-price">
                <span>{{ goods.price }}</span>
                <span> {{ goods.oldPrice }}</span>
              </p>
              <div class="g-service">
                <dl>
                  <dt>促销</dt>
                  <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
                <dl>
                  <dt>服务</dt>
                  <dd>
                    <span>无忧退货</span>
                    <span>快速退款</span>
                    <span>免费包邮</span>
                    <a href="javascript:;">了解详情</a>
                  </dd>
                </dl>
              </div>
              <!-- sku组件 -->

              <!-- 数据组件 -->

              <!-- 按钮组件 -->
              <div>
                <el-button size="large" class="btn">
                  加入购物车
                </el-button>
              </div>

            </div>
          </div>
          <div class="goods-footer">
            <div class="goods-article">
              <!-- 商品详情 -->
              <div class="goods-tabs">
                <nav>
                  <a>商品详情</a>
                </nav>
                <div class="goods-detail">
                  <!-- 属性 -->
                  <ul class="attrs">
                    <li v-for="item in goods.details.properties" :key="item.value">
                      <span class="dt">{{ item.name }}</span>
                      <span class="dd">{{ item.value }}</span>
                    </li>
                  </ul>
                  <!-- 图片 -->
                  <img v-for="img in goods.details.pictures" :key="img" :src="img" alt="">
                </div>
              </div>
            </div>
            <!-- 24热榜+专题推荐 -->
            <div class="goods-aside">
              <!-- 24热榜 -->
              <DetailHot />
              <!-- 周日榜单 -->
              <DetailHot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.xtx-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }

  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }

  .number-box {
    display: flex;
    align-items: center;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-price {
    margin-top: 10px;

    span {
      &::before {
        content: "¥";
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: "•";
              color: $xtxColor;
              margin-right: 2px;
            }
          }

          a {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      ~li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: "";
      }

      p {
        &:first-child {
          color: #999;
        }

        &:nth-child(2) {
          color: $priceColor;
          margin-top: 10px;
        }

        &:last-child {
          color: #666;
          margin-top: 10px;

          i {
            color: $xtxColor;
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      >span {
        color: $priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  >img {
    width: 100%;
  }
}

.btn {
  margin-top: 20px;

}

.bread-container {
  padding: 25px 0;
}
</style>

<!--  /*
{
    "code": "1",
    "msg": "操作成功",
    "result": {
        "id": "1369155859933827074",
        "name": "钻石陶瓷涂层多用锅18cm 小奶锅",
        "spuCode": "goods-spu-001",
        "desc": "安全耐用，易于清洗",
        "price": "128.00",
        "oldPrice": "128.00",
        "discount": 1,
        "inventory": 0,
        "brand": null,
        "salesCount": 0,
        "commentCount": 0,
        "collectCount": 1,
        "mainVideos": [],
        "videoScale": null,
        "mainPictures": [
            "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/6fdcac19-dd44-442c-9212-f7ec3cf3ed18.jpg",
            "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/45fd1372-05d2-4ff8-8669-79463a1e589f.jpg",
            "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/e5a9f569-accc-4006-9064-2180e7f2b691.jpg",
            "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/81119a14-5311-4011-af4a-273894375c74.jpg",
            "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/dafec715-761b-438b-afc8-1e3f55bf3c1c.png"
        ],
        "specs": [
            {
                "name": "颜色",
                "id": "1369139574067957762",
                "values": [
                    {
                        "name": "黑色",
                        "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/cd6c46b6-b944-4479-b547-cdee294568a1.png",
                        "desc": ""
                    },
                    {
                        "name": "蓝色",
                        "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/2d5ba800-1868-48c8-9213-1a5f8965a05b.png",
                        "desc": ""
                    }
                ]
            },
            {
                "name": "尺寸",
                "id": "1369141324204216321",
                "values": [
                    {
                        "name": "30cm",
                        "picture": null,
                        "desc": ""
                    },
                    {
                        "name": "20cm",
                        "picture": null,
                        "desc": ""
                    },
                    {
                        "name": "10cm",
                        "picture": null,
                        "desc": ""
                    }
                ]
            },
-->
   