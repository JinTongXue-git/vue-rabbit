# 静态数据存储说明文档

## 📁 文件夹结构说明

本项目采用静态数据存储方案，用于支持离线运行和静态部署场景（如 GitHub Pages）。

### 整体结构

```
public/
├── data/                     # JSON 数据文件目录
│   ├── home-banner.json      # 首页轮播图数据
│   ├── home-new.json         # 新鲜好物数据
│   ├── home-hot.json         # 人气推荐数据
│   ├── home-goods.json       # 所有商品模块数据
│   ├── home-category.json    # 分类导航数据（给 category-store 使用）
│   └── category-detail-[id].json # 分类详情数据（按分类ID命名）
│
└── images/                   # 图片资源目录
    ├── banner/               # 轮播图图片
    ├── products/             # 商品图片
    │   ├── new/              # 新鲜好物图片
    │   ├── hot/              # 人气推荐图片
    │   └── goods/            # 商品模块封面图
    └── category/             # 分类相关图片（Logo 等）
```

---

## 📊 JSON 数据文件说明

### 1. home-banner.json
**用途**：首页轮播图数据  
**字段说明**：
- `id`: 轮播图ID
- `imgUrl`: 图片地址（建议使用相对路径 `/images/banner/xxx.jpg`）
- `href`: 跳转链接（可选）

### 2. home-new.json
**用途**：新鲜好物商品列表  
**字段说明**：
- `id`: 商品ID
- `name`: 商品名称
- `price`: 商品价格
- `picture`: 商品图片地址

### 3. home-hot.json
**用途**：人气推荐商品列表  
**字段说明**：
- `id`: 商品ID
- `title`: 商品标题
- `alt`: 商品描述
- `picture`: 商品图片地址

### 4. home-goods.json
**用途**：所有商品模块数据  
**字段说明**：
- `id`: 模块ID
- `name`: 模块名称
- `saleInfo`: 促销信息
- `picture`: 模块封面图
- `goods`: 商品列表（包含商品详情）

### 5. home-category.json
**用途**：分类导航数据  
**字段说明**：
- `id`: 分类ID
- `name`: 分类名称
- `children`: 子分类列表
- `goods`: 分类推荐商品

### 6. category-detail-[id].json
**用途**：单个分类详情数据  
**命名规则**：`category-detail-{分类ID}.json`  
**示例**：`category-detail-1.json`（分类ID为1的详情）

---

## 🖼️ 图片文件说明

### 图片存放规则

| 图片类型 | 存放目录 | 命名规范 |
|---------|---------|---------|
| 轮播图 | `/public/images/banner/` | `banner-{序号}.jpg` |
| 新鲜好物商品图 | `/public/images/products/new/` | `new-{商品ID}.jpg` |
| 人气推荐商品图 | `/public/images/products/hot/` | `hot-{商品ID}.jpg` |
| 商品模块封面图 | `/public/images/products/goods/` | `goods-{模块ID}.jpg` |
| 分类相关图片 | `/public/images/category/` | 自定义命名 |

### 图片格式建议
- 格式：JPG 或 PNG
- 大小：根据实际需要压缩
- 命名：使用英文或数字，避免中文

---

## 🎯 使用说明

### 开发阶段
1. 正常运行项目，通过浏览器获取 API 数据
2. 将数据复制到对应 JSON 文件中
3. 修改图片路径为本地路径

### 生产/部署阶段
1. 确保所有 JSON 文件已填充完整数据
2. 确保所有图片已下载并放入对应目录
3. 修改 API 调用逻辑，优先读取本地 JSON

### 离线运行
- 打包后直接打开 `dist/index.html` 即可运行
- 无需后端服务器支持
- 适合演示、交作业等场景

---

## 📝 注意事项

1. **路径问题**：JSON 中引用图片时，请使用相对路径（如 `/images/banner/banner-1.jpg`）
2. **数据更新**：如果后端 API 数据更新，需要手动同步到 JSON 文件
3. **图片版权**：确保使用的图片有合法使用权限
4. **文件编码**：所有 JSON 文件请使用 UTF-8 编码
5. **数据结构**：请保持与后端 API 返回的数据结构一致

---

## 🔄 后续计划

当前文件夹已创建完成，待项目开发完成后：
1. 通过浏览器控制台获取 API 响应数据
2. 将数据复制到对应 JSON 文件
3. 下载图片并放入对应目录
4. 修改图片路径
5. 调整 API 调用逻辑实现本地优先读取

---

*文档创建时间：2026年6月*
*项目：vue-rabbit（小兔鲜电商项目）*