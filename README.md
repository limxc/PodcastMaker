# PodcastMaker

AI 驱动的播客视频自动生成工具。基于 [Remotion](https://remotion.dev) 构建，由 Claude Code 技能编排 15 步制作流水线。

## 环境要求

| 工具 | 版本要求 | 用途 |
|------|---------|------|
| [Node.js](https://nodejs.org) | >= 20 | Remotion 渲染 |
| [Python 3](https://python.org) | >= 3.10 | TTS 音频生成 |
| [ffmpeg](https://ffmpeg.org) | latest | 音频/视频处理 |
| [Claude Code CLI](https://claude.ai/code) | latest | 执行流水线 |

## 初始化

克隆后依次执行：

```bash
# 1. 安装 Node.js 依赖（node_modules 已在 .gitignore 中排除）
npm install

# 2. 配置 TTS 后端及 API 密钥（.env 已在 .gitignore 中排除）
cp .agents/skills/video-podcast-maker/.env.example .env
# 编辑 .env，至少设置 TTS_BACKEND 和对应后端的密钥

# 3. 用户偏好配置（可选，流水线首次运行时自动从模板创建）
#    .agents/skills/video-podcast-maker/user_prefs.template.json
```

### TTS 后端选择

`.env` 中 `TTS_BACKEND` 可选值：

| 后端 | 需配置的密钥 | 费用 |
|------|------------|------|
| `edge`（默认） | 无 | 免费 |
| `azure` | `AZURE_SPEECH_KEY` + `AZURE_SPEECH_REGION` | 按量计费 |
| `doubao` | `VOLCENGINE_APPID` + `VOLCENGINE_ACCESS_TOKEN` | 按量计费 |
| `cosyvoice` | `DASHSCOPE_API_KEY` | 按量计费 |
| `elevenlabs` | `ELEVENLABS_API_KEY` | 按量计费 |
| `openai` | `OPENAI_API_KEY` | 按量计费 |
| `google` | `GOOGLE_TTS_API_KEY` | 按量计费 |

## 使用方法

在项目根目录下运行 Claude Code：

```bash
claude
```

然后在对话中调用技能：

```
/video-podcast-maker <主题描述>
```

流水线将依次执行以下步骤：

1. 定义主题方向
2. 搜索研究资料
3. 设计视频章节
4. **编写脚本 → 自动经 humanizer-zh 去 AI 痕迹 → 人工校对确认**
5. 生成发布信息 & 缩略图
6. 生成 TTS 音频
7. Remotion Studio 预览（**强制人工确认**）
8. 渲染 4K 视频
9. 混音 & 最终输出

详细流程见 `.agents/skills/video-podcast-maker/SKILL.md`。

## 项目结构

```
PodcastMaker/
├── src/                          # Remotion 视频组件
│   ├── Root.tsx                  # 根组合
│   ├── Composition.tsx           # 视频合成
│   ├── index.ts                  # 入口
│   └── index.css                 # 全局样式
├── .agents/skills/
│   ├── video-podcast-maker/      # 核心流水线技能
│   │   ├── SKILL.md              # 技能定义 & 15 步流程
│   │   ├── scripts/              # TTS / 验证 / 缩略图等工具
│   │   ├── references/           # 各阶段工作流文档
│   │   ├── templates/            # 脚本模板 & Remotion 组件
│   │   └── assets/               # BGM 等媒体资源
│   └── humanizer-zh/             # 中文去 AI 痕迹工具
├── CLAUDE.md                     # 项目级规则（脚本审查确认）
├── remotion.config.ts            # Remotion 配置
└── package.json                  # 依赖声明
```

## 关键文件说明

| 文件 | 说明 |
|------|------|
| `.env` | TTS 后端及 API 密钥（不提交） |
| `.env.example` | `.env` 模板 |
| `user_prefs.template.json` | 用户偏好模板 |
| `skills-lock.json` | 技能版本锁定 |
| `CLAUDE.md` | 项目规则（人工确认节点） |

## .gitignore 已排除的内容

```
node_modules/      # npm 依赖
dist/              # 构建产物
.env               # 密钥配置
out/               # 渲染输出视频
.DS_Store          # 系统文件
```

## 协议

UNLICENSED — 私有项目。
