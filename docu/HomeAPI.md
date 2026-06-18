好的！我来帮你分析一下。

---

## 📋 第一步：检查 Home 相关的 API

让我先看看 Home 页面的 API 文件：

        
            
toolName: view_files
            
status: success
          
            
filePath: e:\ccccccccccccccccccc\vue-rabbit\src\apis\HomeAPI.js
          

        
            
toolName: view_folder
            
status: success
          
e:\ccccccccccccccccccc\vue-rabbit\public\data
          
好的！让我帮你分析一下：

---

## 📊 Home 相关 API 数据对比

### HomeAPI.js 中定义的 API

| API 函数 | URL | 下载状态 |
|---------|-----|---------|
| `getHomeBannerApi` | `/home/banner` | ✅ 已下载 |
| `getNewApi` | `/home/new` | ✅ 已下载 |
| `getHotApi` | `/home/hot` | ✅ 已下载 |
| `getGoodsApi` | `/home/goods` | ✅ 已下载 |

### 本地已有数据

```
public/data/
├── home-banner.json       ✅
├── home-category.json     ✅
├── home-goods.json        ✅
├── home-hot.json          ✅
└── home-new.json         ✅
```

### ✅ Home 相关数据全部下载完毕！

---

## 📋 Store 文件命名建议

### 建议命名：`home-store.js`

**理由**：
1. **与已有命名一致**：`category-store.js`（已存在）
2. **简洁明了**：清晰表达用途
3. **符合规范**：Pinia 官方推荐 `*-store.js` 格式

### 📁 完整路径

```
src/stores/home-store.js
```

---

## 📝 创建步骤

### 1. 创建文件

在 `src/stores/` 目录下创建 `home-store.js`

### 2. 封装方法

```javascript
// src/stores/home-store.js

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', () => {
  // 响应式数据
  const bannerList = ref([])
  const newList = ref([])
  const hotList = ref([])
  const goodsList = ref([])

  // 方法：获取本地数据或请求接口
  async function getHomeData() {
    // 1. 获取轮播图
    try {
      const res = await fetch('/data/home-banner.json')
      if (res.ok) {
        const data = await res.json()
        bannerList.value = data.result
      }
    } catch (error) {
      console.log('读取本地轮播图失败')
    }

    // 2. 获取新鲜好物
    try {
      const res = await fetch('/data/home-new.json')
      if (res.ok) {
        const data = await res.json()
        newList.value = data.result
      }
    } catch (error) {
      console.log('读取本地新鲜好物失败')
    }

    // 3. 获取人气推荐
    try {
      const res = await fetch('/data/home-hot.json')
      if (res.ok) {
        const data = await res.json()
        hotList.value = data.result
      }
    } catch (error) {
      console.log('读取本地人气推荐失败')
    }

    // 4. 获取商品模块
    try {
      const res = await fetch('/data/home-goods.json')
      if (res.ok) {
        const data = await res.json()
        goodsList.value = data.result
      }
    } catch (error) {
      console.log('读取本地商品模块失败')
    }
  }

  return {
    bannerList,
    newList,
    hotList,
    goodsList,
    getHomeData
  }
})
```

### 3. 在 Home 页面中使用

```javascript
// Home/index.vue

import { onMounted } from 'vue'
import { useHomeStore } from '@/stores/home-store'

const homeStore = useHomeStore()

onMounted(() => {
  homeStore.getHomeData()  // 一次性获取所有数据
})
```

---

## 🚀 你现在可以开始了！

1. ✅ Home 数据已经全部下载好了
2. ✅ Store 文件名建议：`home-store.js`
3. ✅ 文件路径：`src/stores/home-store.js`

你可以开始创建文件并编写代码了！