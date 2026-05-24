# vue-rabbit

我的跟黑马练习的小兔鲜肉项目

GitHub 地址：https://github.com/JinTongXue-git/vue-rabbit.git

---

## 一、如何克隆项目并启动

### 1. 克隆项目到本地

```bash
git clone https://github.com/JinTongXue-git/vue-rabbit.git
```

### 2. 进入项目目录

```bash
cd vue-rabbit
```

### 3. 安装依赖（必须使用 pnpm）

```bash
pnpm install
```

> 注意：本项目使用 pnpm 作为包管理器，不能使用 npm 或 yarn

### 4. 启动开发服务器

```bash
pnpm dev
```

### 5. 在浏览器中访问

打开浏览器访问显示的地址，通常是：`http://localhost:5173`

---

## 二、常用命令

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装依赖 |
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm lint` | 代码检查 |

---

## 三、项目技术栈

### 3.1 初始化时自动引入的技术栈
使用 Vite 脚手架创建项目时，默认选中的技术栈：

| 技术 | 说明 |
|------|------|
| Vue 3 | 前端框架（Composition API） |
| Vite | 构建工具 |
| Vue Router | 路由管理 |
| Pinia | 状态管理 |
| ESLint | 代码检查工具 |

---

### 3.2 手动引入的技术栈

| 技术 | 说明 | 引入方式 |
|------|------|----------|
| Element Plus | UI 组件库 | `pnpm add element-plus` + 按需导入配置 |
| unplugin-auto-import | 自动导入 API | 搭配 Element Plus 使用 |
| unplugin-vue-components | 自动导入组件 | 搭配 Element Plus 使用 |
| SCSS | CSS 预处理器 | `pnpm add sass -D` |
| axios | 网络请求库 | `pnpm add axios` |
| @vueuse/core | Vue 组合式工具函数库 | `pnpm add @vueuse/core` |

---

### 3.3 其他配置

- **字体图标**：直接在 `index.html` 入口文件中引入外部字体图标


---

## 四、推荐 IDE 配置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

