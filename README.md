# TemplateFactory 源码商店（静态官网）

一人公司源码商店官网：纯 HTML/CSS/JS，零依赖、零构建、零外部 CDN。
`file://` 双击直接打开，也能原样丢到任意静态托管。

- 首页：`index.html`（Hero 价格锚点 + 15 商品卡 + 评价 + FAQ + Footer）
- 价格：`pricing.html`（单套 vs 全家桶，与 `js/data.js` 同源渲染）
- 商品：`products/<slug>.html` × 15（详情由 `js/data.js` 渲染）+ `products/index.html` 目录页
- 数据：`js/data.js`（唯一数据源：name/slug/desc/price/files/features/tags）
- 交互：`js/main.js`（渲染 + mailto 订购，无购物车）
- 样式：`css/style.css`（手写深色主题，响应式，卡片 hover）

订购方式：所有「购买」按钮为 `mailto:` 链接，自动带商品名与价格，回信发网盘链接。

## 本地预览

无需任何工具链，二选一：

```bash
# 方式一：直接双击 index.html（file:// 协议即可完整运行）
open index.html

# 方式二：任意静态服务器（Python 自带，非必需）
python3 -m http.server 8080
# 浏览器访问 http://localhost:8080
```

## 部署（三选一）

### 1. GitHub Pages

```bash
# 假设仓库为 <user>/<repo>，本目录为仓库根（或把 site/ 内容推到 gh-pages 分支）
git init && git add . && git commit -m "site: launch"
git branch -M main
git remote add origin git@github.com:<user>/<repo>.git
git push -u origin main
```

然后：仓库 **Settings → Pages → Source** 选 `main` 分支 `/ (root)`，保存。
1 分钟后访问 `https://<user>.github.io/<repo>/`。

### 2. Netlify（拖拽即上线，最快）

1. 打开 <https://app.netlify.com/drop>
2. 把本目录（`site/` 整个文件夹）拖进浏览器窗口
3. 立即获得 `https://<随机名>.netlify.app`，可在 Site settings 里改域名

CLI 方式（可选）：

```bash
npx netlify-cli deploy --dir . --prod
```

### 3. Vercel

```bash
npx vercel --prod
# 或：打开 https://vercel.com/new → Import Git 仓库 → Framework Preset 选 "Other" → Deploy
```

无需任何构建命令与输出目录配置：根目录即产物（Framework Preset 选 **Other**，Build Command 留空，Output Directory 留空或填 `./`）。

## 商品清单（15 套在售，数据与 js/data.js 一致）

| # | 模板 | slug | 文件数 | 价格 | 分类 |
|---|------|------|-------|------|------|
| 1 | AI 聊天流式应用 | `ai-chat-streaming` | 32 | ¥29（划线 ¥99） | AI 应用 |
| 2 | RAG 知识库管道 | `rag-pipeline` | 38 | ¥29（划线 ¥99） | AI 应用 |
| 3 | 微信小程序（数字商品店铺） | `wechat-miniprogram` | 58 | ¥39（划线 ¥129） | 小程序 |
| 4 | Vue3 后台管理系统 | `vue3-admin` | 44 | ¥29（划线 ¥99） | 前端 |
| 5 | Chrome MV3 插件（网页剪藏） | `chrome-extension` | 34 | ¥29（划线 ¥99） | 前端 |
| 6 | Next.js 多租户 SaaS | `nextjs-saas` | 24 | ¥19 | 全栈 |
| 7 | Express 5 REST API | `express-rest-api` | 26 | ¥19 | 后端 |
| 8 | FastAPI 微服务 | `fastapi-service` | 37 | ¥19 | 后端 |
| 9 | Telegram Bot | `telegram-bot` | 20 | ¥19 | 机器人 |
| 10 | Discord.js Bot | `discord-bot` | 40 | ¥19 | 机器人 |
| 11 | Slack Bolt App | `slack-app` | 33 | ¥19 | 机器人 |
| 12 | Rust Axum REST API | `rust-axum-api` | 32 | ¥19 | 后端 |
| 13 | Go Gin REST API | `go-gin-api` | 36 | ¥19 | 后端 |
| 14 | GraphQL API（Apollo Server 4） | `graphql-api` | 40 | ¥19 | 后端 |
| 15 | React 组件库 | `react-component-library` | 28 | ¥19 | 前端 |

- 单套合计：¥345；**全家桶 ¥99**（划线价 ¥395；全部 40 套：当前 15 套在售 + 后续 25 套上新免费补发）
- 许可：全部 MIT（可商用、可二改、可再集成出售，保留版权声明即可）
- 文件数为仓库真实统计，非虚构

## 改数据 / 改邮箱

- **改商品**：只编辑 `js/data.js`（价格、文件数、卖点、features），所有页面自动同步。
- **改联系邮箱**：`js/data.js` 顶部 `contact.email` 一处 + 各 HTML 里的 `mailto:` 字面链接（全局搜索 `sales@templatefactory.dev` 替换）。
- **加商品**：`data.js` 加一条 SKU + 复制任一 `products/*.html` 改 `data-slug` 即可。

## License

MIT — Copyright (c) 2026 TemplateFactory（见 `LICENSE`）。
