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

好的，我直接把内容发给你，你复制到 README.md 的第 54 行位置（替换那些空行）：

---

```markdown
---

## 三、Nginx 部署指南

### 3.1 部署步骤

1. **构建项目**

```bash
pnpm build
```

构建完成后，会在项目根目录生成 `dist` 文件夹。

2. **复制静态文件到 Nginx**

将 `dist` 文件夹中的所有内容复制到 Nginx 的 `html` 目录下：

```
你的Nginx安装目录/html/
├── index.html
├── assets/
│   ├── index-xxx.js
│   └── index-xxx.css
└── data/          # 如果有本地 JSON 数据
    └── *.json
```

3. **配置 Nginx**

将以下配置复制到你的 `nginx.conf` 文件中：

```nginx
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;
        client_max_body_size 10m;
        
        # 前端项目部署配置
        location / {
            # ⚠️ 注意：这里需要修改为你自己的 Nginx 安装路径
            root   D:/develop/nginx-1.22.0-web/html;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }

        # API 反向代理配置（解决跨域问题）
        location /api/ {
            # 重写路径，去掉 /api 前缀
            rewrite ^/api/(.*)$ /$1 break;
            
            # 代理到后端服务器
            proxy_pass http://pcapi-xiaotuxian-front-devtest.itheima.net;
            
            # 保持主机头
            proxy_set_header Host $host;
            
            # 允许跨域
            proxy_set_header Origin "";
            
            # 超时设置
            proxy_connect_timeout 10s;
            proxy_send_timeout 10s;
            proxy_read_timeout 10s;
        }
        
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            # ⚠️ 注意：这里需要修改为你自己的 Nginx 安装路径
            root   D:/develop/nginx-1.22.0-web/html;
        }
    }
}
```

4. **需要修改的地方**

| 配置项 | 说明 | 示例 |
|-------|------|------|
| `root` | Nginx 静态文件目录 | `D:/develop/nginx-1.22.0-web/html` |
| `listen` | 监听端口（可选） | 默认 `80`，可改为其他端口如 `8080` |

> ⚠️ **重要**：将配置中所有 `D:/develop/nginx-1.22.0-web/html` 替换为你自己的 Nginx 安装路径下的 `html` 目录。

5. **启动 Nginx**

```bash
# Windows 下启动
nginx

# 或者重新加载配置
nginx -s reload
```

6. **访问项目**

打开浏览器访问：`http://localhost`（如果修改了端口则访问 `http://localhost:端口号`）

---

## 四、项目技术栈
```

---

把这段内容复制到你的 README.md 文件中，
替换掉原来第 54-67 行的空行，然后把后面的 "
三、项目技术栈" 改成 "四、项目技术栈" 即可。

```



















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

