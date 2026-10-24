/**
 * TemplateFactory 源码商店 — 商品数据（唯一数据源）
 * 信条：文案可以夸张，数据必须真实。files 为仓库真实文件数，price 为真实售价。
 * 修改联系邮箱：只改 contact.email 一处。
 */
window.TF = {
  brand: 'TemplateFactory 源码商店',
  tagline: '一人公司源码商店',
  contact: {
    email: 'sales@templatefactory.dev'
  },
  bundle: {
    slug: 'bundle',
    name: '全家桶（全部 40 套）',
    price: 99,
    includes: 40,
    license: 'MIT',
    support: '7 天售后 + 15 分钟远程部署指导'
  },
  products: [
    {
      slug: 'ai-chat-streaming',
      name: 'AI 聊天流式应用',
      nameEn: 'AI Chat Streaming',
      tagline: '真·SSE 流式输出的 ChatGPT 界面：打字机渲染 + 会话持久化，不填 Key 也能跑',
      desc: 'Next.js 14 (App Router) + TypeScript 生产级聊天模板。/api/chat 以 Server-Sent-Events 流式转发 OpenAI 兼容接口，无轮询、无假延迟；不配置 API Key 时自动切换内置 mock provider，离线也能完整体验。',
      price: 29,
      originalPrice: 99,
      files: 32,
      category: 'AI 应用',
      stack: ['Next.js 14', 'React 18', 'TypeScript', 'SSE'],
      features: [
        '真 SSE 流式：/api/chat 流式转发 chat/completions，含优雅错误帧',
        '打字机渲染：流式增量按帧率缓冲刷新，突发输出也丝滑',
        'Markdown + 代码高亮：GFM 表格/任务列表，代码块带复制按钮',
        '会话持久化：localStorage 版本化存储层，带 schema 校验与迁移',
        'Token 计量 UI：逐消息 + 全会话 token 统计',
        '零配置演示模式：留空 OPENAI_API_KEY 即走确定性 mock provider'
      ],
      tags: ['AI', '前端', 'Next.js']
    },
    {
      slug: 'rag-pipeline',
      name: 'RAG 知识库管道',
      nameEn: 'RAG Pipeline',
      tagline: 'load→chunk→embed→retrieve 四段式 RAG 管道，换模型只改一行配置',
      desc: 'Python 生产级 RAG 管道，四个阶段各自独立成模块：换加载器、切分器、向量 provider 互不影响。CLI 一键建索引、带分数检索，mypy 严格类型 + 离线可跑的 pytest 测试套件。',
      price: 29,
      originalPrice: 99,
      files: 38,
      category: 'AI 应用',
      stack: ['Python', 'Pydantic', 'pytest'],
      features: [
        '四段式架构：loaders / chunking / embedding / retrieval 独立模块',
        '配置换模型：RAG_EMBEDDING_PROVIDER 一行切换，自带离线 hash provider',
        '三种打分策略：cosine / dot product / MMR 可互换',
        'CLI 工作流：rag index 建持久化索引，rag query 带分数与来源检索',
        'mypy 严格类型 + py.typed，pytest 离线全绿'
      ],
      tags: ['AI', 'Python', '后端']
    },
    {
      slug: 'wechat-miniprogram',
      name: '微信小程序（数字商品店铺）',
      nameEn: 'WeChat Mini Program',
      tagline: '原生小程序店铺模板：登录/无限滚动/详情评价/分包加载，导入开发者工具即跑',
      desc: '生产形态的原生微信小程序模板（无 Taro/uni-app 依赖）：类型化请求层带 401 单飞刷新，登录三通道，详情/评价分包拆包，preloadRule 控制首包体积。改改品牌就能交付客户。',
      price: 39,
      originalPrice: 129,
      files: 58,
      category: '小程序',
      stack: ['微信小程序原生', 'JavaScript', 'WXS'],
      features: [
        '类型化请求层：wx.request Promise 封装，401 单飞刷新，错误四分类',
        '登录三通道：wx.login 换 code / 手机号 / 短信验证码（60s 冷却）',
        '分包加载：packageDetail 详情分包 + preloadRule，首开下载更小',
        '无限滚动列表：防抖搜索 + 游标分页 + 加载更多 + 错误重试空态',
        '自定义组件：product-card / empty-state，props/events 契约清晰',
        '存储封装：wx.setStorageSync 命名空间包装，存储满时内存兜底'
      ],
      tags: ['小程序', '前端', '微信']
    },
    {
      slug: 'vue3-admin',
      name: 'Vue3 后台管理系统',
      nameEn: 'Vue 3 Admin Dashboard',
      tagline: 'Vue3+Vite+Pinia 后台全家桶：登录鉴权/数据表格/持久化深色模式，接外包直接改皮',
      desc: '生产可用的 Admin 模板：strict TypeScript 全链路无 any，fetch 封装带超时/鉴权头/HttpError，mock 适配器藏在一个文件后面——换真后端只改一处。登录页/侧栏/面包屑/用户菜单一应俱全。',
      price: 29,
      originalPrice: 99,
      files: 44,
      category: '前端',
      stack: ['Vue 3', 'Vite', 'Pinia', 'Tailwind'],
      features: [
        '全链路类型化：strict TS，类型化 API envelope / 路由 meta / Pinia store',
        '真实数据层：fetch 封装（超时/鉴权头/HttpError），换真后端只改一个文件',
        '完整应用壳：登录页（带 redirect）/ 可折叠侧栏 / 面包屑 / 用户菜单',
        '搜索 + 分页组件：防抖搜索，Products/Orders/Users 页面复用',
        '深色模式持久化：localStorage + 首访跟随 prefers-color-scheme'
      ],
      tags: ['前端', 'Vue', '后台']
    },
    {
      slug: 'chrome-extension',
      name: 'Chrome MV3 插件（网页剪藏）',
      nameEn: 'Chrome Extension MV3',
      tagline: 'Manifest V3 生产级插件：剪藏进笔记，storage 迁移 + 消息契约 + 零依赖打包',
      desc: '不是 Hello World：真实可用的网页剪藏插件（选中文本/整页存笔记，可选同步远端 API），MV3 service worker 架构，类型化消息契约，storage 版本化迁移，Node 脚本校验并打包 zip 直接上架。',
      price: 29,
      originalPrice: 99,
      files: 34,
      category: '前端',
      stack: ['Chrome MV3', 'JavaScript ES2020+', 'Node 打包脚本'],
      features: [
        'MV3 service worker 架构（非持久页面），Chrome 102+ 可装',
        '真实功能：剪藏选中文本/整页到 chrome.storage，可选同步远端 API',
        '类型化消息契约：content script 与 worker 共享一份 contract',
        'storage 封装：版本化迁移，local + sync 双区',
        'chrome.alarms 同步 worker + 指数退避，chrome.commands 快捷键',
        '零依赖构建：scripts/build.js 校验 + 烘焙 env + 打包 Web Store zip'
      ],
      tags: ['前端', '插件', 'JavaScript']
    },
    {
      slug: 'nextjs-saas',
      name: 'Next.js 多租户 SaaS',
      nameEn: 'Next.js SaaS Multitenant',
      tagline: '组织/成员/邀请/工作区一次搭好，SaaS MVP 直接开写业务',
      desc: 'Next.js 15 + TypeScript 多租户底座：Google OAuth 登录、Prisma 会话、组织/成员/邀请/订阅数据模型，/org/[slug]/dashboard 工作区示例并在查询侧二次校验权限。本地 SQLite 快速启动。',
      price: 39,
      files: 24,
      category: '全栈',
      stack: ['Next.js 15', 'TypeScript', 'NextAuth v5', 'Prisma'],
      features: [
        'Next.js App Router + Tailwind + NextAuth v5 + Prisma',
        'Google OAuth 登录与数据库会话',
        '组织 / 成员 / 邀请 / 订阅数据模型',
        '/org/[slug]/dashboard 工作区示例，数据查询侧二次校验成员权限',
        '本地 SQLite 快速启动，Stripe 字段预留'
      ],
      tags: ['SaaS', '全栈', 'Next.js']
    },
    {
      slug: 'express-rest-api',
      name: 'Express 5 REST API',
      nameEn: 'Express REST API',
      tagline: 'JWT 登录 + Prisma + Zod 校验的分层 API 骨架，接业务就完事',
      desc: 'Express 5 + TypeScript 生产型 REST 骨架：注册登录、bcrypt、带过期的签名 JWT、Helmet、Zod 校验环境变量/参数/分页，所有权范围内的 Items CRUD，统一错误响应 + 健康检查 + 优雅关闭，Vitest schema 测试。',
      price: 29,
      files: 26,
      category: '后端',
      stack: ['Node.js', 'Express 5', 'TypeScript', 'Prisma 6'],
      features: [
        'Express 5 + TypeScript + Prisma 6 + SQLite',
        'bcrypt 密码哈希 + 签名且带过期时间的 JWT + Helmet + 请求体限制',
        'Zod 校验环境变量 / 请求参数 / 分页',
        '用户所有权范围内的 Items CRUD + 统一错误响应 + 健康检查 + 优雅关闭',
        'Vitest schema 测试，README + MIT LICENSE + .env.example 齐全'
      ],
      tags: ['后端', 'Node.js', 'API']
    },
    {
      slug: 'fastapi-service',
      name: 'FastAPI 微服务',
      nameEn: 'FastAPI Microservice',
      tagline: 'app factory + 三层分层的 FastAPI 骨架：JWT 刷新 / 异步 SQLAlchemy / Prometheus',
      desc: '生产型 Python 微服务骨架：app factory + router/service/repository 分层，JWT access/refresh，SQLAlchemy 2.0 async + Alembic，结构化 JSON 日志 + Request ID + /health /ready + Prometheus metrics，Docker Compose 一键起 API + PostgreSQL + Adminer。',
      price: 29,
      files: 37,
      category: '后端',
      stack: ['Python 3.12', 'FastAPI', 'SQLAlchemy 2.0', 'Docker'],
      features: [
        'FastAPI + Pydantic v2 + SQLAlchemy 2.0 async + Alembic',
        'JWT access/refresh token + 密码哈希 + 角色依赖',
        '结构化 JSON 日志 + Request ID + /health /ready + Prometheus metrics',
        'Docker Compose：API + PostgreSQL + Adminer，也可本地 venv/SQLite 启动',
        'pytest / pytest-asyncio / httpx 测试布局'
      ],
      tags: ['后端', 'Python', '微服务']
    },
    {
      slug: 'telegram-bot',
      name: 'Telegram Bot',
      nameEn: 'Telegram Bot',
      tagline: '异步命令 + 多步对话 + 轮询/Webhook 双模式，BotFather 拿 Token 即跑',
      desc: 'python-telegram-bot 异步机器人模板：模块化命令注册，/setup 演示分步收集资料的多步对话，本地默认轮询、生产切 Webhook，Pydantic Settings 校验 Token 与运行模式，Docker 镜像 + Compose + pytest。',
      price: 29,
      files: 20,
      category: '机器人',
      stack: ['Python', 'python-telegram-bot', 'Docker'],
      features: [
        '异步 handler + 模块化命令注册',
        '/start /help /setup /cancel /profile 示例命令',
        'Pydantic Settings 校验 Bot Token、运行模式与 Webhook 配置',
        '本地轮询开箱即跑，生产 Webhook 一键切换',
        'Python Docker 镜像 + Compose 服务 + pytest 配置'
      ],
      tags: ['机器人', 'Python', 'Telegram']
    },
    {
      slug: 'discord-bot',
      name: 'Discord.js Bot',
      nameEn: 'Discord Bot',
      tagline: 'Slash 命令 + 工单系统 + SQLite 的 discord.js v14 服务器管理 bot',
      desc: 'discord.js v14 生产型 bot：Slash 命令模块注册、Button 交互路由、内部 Event Bus，工单创建/认领/关闭、警告管理、服务器配置与使用统计，SQLite WAL + 迁移 + DAO/服务层，可选 Sharding 启动脚本。',
      price: 39,
      files: 40,
      category: '机器人',
      stack: ['Node.js', 'discord.js v14', 'SQLite'],
      features: [
        'Slash command 模块注册 + Button 交互路由 + 内部 Event Bus',
        '工单创建/认领/关闭、警告管理、服务器配置与使用统计',
        'SQLite WAL + 迁移 + DAO/服务层 + 统一错误处理',
        '可选 Sharding 启动脚本与独立分片文档',
        '.env.example + 命令部署步骤 + README + MIT LICENSE'
      ],
      tags: ['机器人', 'Node.js', 'Discord']
    },
    {
      slug: 'slack-app',
      name: 'Slack Bolt App',
      nameEn: 'Slack App',
      tagline: 'OAuth 安装 + Slash 命令 + Modal 交互 + 全文搜索的团队工具底座',
      desc: 'Bolt for JS 生产型模板，以团队 Notes 为示例跑通主要交互链路：/notes 命令、消息事件、DM、快捷方式，Modal 新建/编辑/删除确认，OAuth 安装流程 + SQLite 安装记录，Pino JSON 日志敏感字段脱敏。',
      price: 39,
      files: 33,
      category: '机器人',
      stack: ['Node.js', 'Slack Bolt', 'ExpressReceiver', 'SQLite'],
      features: [
        'Slack Bolt + ExpressReceiver：/notes 命令、消息事件、DM、快捷方式',
        'Modal 新建/编辑/删除确认 + 输入校验 + 结果反馈',
        'OAuth 安装流程 + SQLite 安装记录',
        'Notes 个人/团队列表 + 全文搜索 + 使用统计',
        'SQLite 迁移 + Pino JSON 日志（敏感字段脱敏）+ /healthz /readyz'
      ],
      tags: ['机器人', 'Node.js', 'Slack']
    },
    {
      slug: 'rust-axum-api',
      name: 'Rust Axum REST API',
      nameEn: 'Rust Axum API',
      tagline: 'Axum 0.8 + SQLx 工程：JWT/权限校验/内嵌迁移/tracing，不重复踩坑',
      desc: 'Rust 生产型后端工程：routes/services/repositories 三层，JWT HS256 + bcrypt + 账户停用即时拒绝，SQLx + SQLite 启动自动执行内嵌迁移（WAL 模式），商品 CRUD/搜索分页/Owner-Admin 授权，tracing 结构化日志 + 健康探针 + CORS，cargo test 集成测试。',
      price: 39,
      files: 32,
      category: '后端',
      stack: ['Rust', 'Axum 0.8', 'SQLx', 'SQLite'],
      features: [
        'Axum 路由/中间件 + routes/services/repositories 分层',
        'JWT HS256 + bcrypt，服务端账户停用即时拒绝',
        'SQLx + SQLite：启动自动执行内嵌迁移，WAL 模式',
        '商品 CRUD、搜索分页、Owner/Admin 授权、统一 JSON 错误',
        'tracing 结构化日志 + Request ID + 健康/就绪探针 + CORS',
        'cargo test 路由集成测试'
      ],
      tags: ['后端', 'Rust', 'API']
    },
    {
      slug: 'go-gin-api',
      name: 'Go Gin REST API',
      nameEn: 'Go Gin API',
      tagline: 'Gin + GORM 分层 API：JWT/分页/Swagger 注解/Makefile，make run 即起',
      desc: 'Go 1.22 + Gin + GORM 生产型工程：handler/service/repository 分层，JWT Bearer 登录 + bcrypt + 结构化错误响应，用户与商品 CRUD + 所有权检查 + 搜索/排序/分页，每个 handler 带 OpenAPI 注解，Makefile 一键 build/run/test/lint/swagger。默认 SQLite，预留 MySQL 路径。',
      price: 39,
      files: 36,
      category: '后端',
      stack: ['Go 1.22', 'Gin', 'GORM', 'SQLite'],
      features: [
        'Go 1.22 + Gin + GORM，handler/service/repository 分层',
        'JWT Bearer 登录 + bcrypt 密码哈希 + 请求校验 + 结构化错误响应',
        '用户与商品 CRUD + 所有权检查 + 搜索/排序/分页',
        'Health/version 接口 + 每个 handler 的 OpenAPI 注解',
        'Makefile：build/run/test/lint/swagger/tidy/clean'
      ],
      tags: ['后端', 'Go', 'API']
    },
    {
      slug: 'graphql-api',
      name: 'GraphQL API（Apollo Server 4）',
      nameEn: 'GraphQL API',
      tagline: '@auth 指令 + DataLoader 批量 + JWT 的电商域 GraphQL 服务端',
      desc: 'Apollo Server 4 + Express 4 + TypeScript strict 的 SDL-first GraphQL 模板：@auth Schema Directive 统一用户/角色校验，每请求 DataLoader 批量关联解决 N+1，用户/商品/订单、订单状态流转、分页、Node 接口、GraphQL Playground，内存 Repository 可替换数据库。',
      price: 39,
      files: 40,
      category: '后端',
      stack: ['TypeScript', 'Apollo Server 4', 'Express 4'],
      features: [
        'Apollo Server 4 + Express 4 + TypeScript strict，SDL-first schema',
        '@auth Schema Directive 统一用户/角色校验',
        '每请求 DataLoader，批量关联 User/Product 解决 N+1',
        'JWT 登录 + bcrypt + 统一 GraphQL 错误码',
        '用户/商品/订单、订单状态流转、分页、Node 接口、Playground'
      ],
      tags: ['后端', 'GraphQL', 'API']
    },
    {
      slug: 'react-component-library',
      name: 'React 组件库',
      nameEn: 'React Component Library',
      tagline: 'ESM/CJS 双格式 + 主题 Token + 无障碍 Modal + 文档 Playground 的组件库工程',
      desc: 'React + TypeScript 组件库工程，不是单页 Demo：Button/Input/Modal/泛型 Table 公共 API，Vite library mode 输出 ESM/CJS + 类型声明 + 独立 CSS，ThemeProvider + CSS Variables 支持 light/dark，Modal 焦点管理/ESC/滚动锁/焦点恢复，stories/ 演示页可直接体验。',
      price: 39,
      files: 28,
      category: '前端',
      stack: ['React 18/19', 'TypeScript', 'Vite'],
      features: [
        'Button / Input / Modal / 泛型 Table 组件与公共 API',
        'Vite library mode：ESM/CJS 双格式 + 类型声明 + 独立 CSS',
        'ThemeProvider + CSS Variables，light/dark 主题定制',
        'Modal 焦点管理/ESC/滚动锁/焦点恢复；Input 关联 label 与错误提示',
        'stories/ 组件演示页 + 发布构建脚本'
      ],
      tags: ['前端', 'React', '组件库']
    }
  ]
};
