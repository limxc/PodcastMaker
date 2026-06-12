# PodcastMaker 项目规则

## 脚本审查确认

使用 `video-podcast-maker` 时，**第 4 步（Write Narration Script）生成 `podcast.txt` 后**：

1. **自动执行 `humanizer-zh` skill**，对脚本内容进行去 AI 痕迹处理
2. **执行方式**：使用 `Skill` 工具调用 `humanizer-zh`，在参数中附上 `podcast.txt` 全文，**并明确要求保留 `[SECTION:xxx]` 标记和 `#` 注释行不变，仅处理内容文本**
3. 将 humanizer-zh 的输出写入 `podcast-humanizer.txt`
4. **等待用户人工校对并修改 `podcast.txt`**（可参考 `podcast-humanizer.txt` 的建议）
5. **用户确认脚本无误后**，方可继续执行后续步骤

## 脚本格式注意事项

### 1. podcast.txt 格式规范

#### 不要保留 `#` 注释行

`[SECTION:xxx]` 标记后面紧随的 `# 注释` 行会被 Edge TTS 朗读出来，变成视频中的无效音频。**编写 `podcast.txt` 时，每个 `[SECTION:xxx]` 后直接跟正文内容，不要写注释行**。

```text
# ❌ 错误写法
[SECTION:hero]
# 开场引入 - 抓住观众注意力
你能想象吗？...

# ✅ 正确写法
[SECTION:hero]
你能想象吗？...
```

#### 不要使用破折号（——）

`——`（em dash）在字幕恢复标点时可能被误处理，且 TTS 朗读效果不好。**一律使用中文标点替代**：
- 解释说明 → 使用 `：`（冒号）
- 语气停顿 → 使用 `，`（逗号）
- 举例：`他说——这个很重要` → `他说，这个很重要`

### 2. 视频底部章节名称需 AI 生成 + 人工确认

`timing.json` 中的 `label` 字段控制视频底部进度条显示的章节名。**不允许使用脚本自动提取的标签**，流程如下：

1. **AI 根据章节内容和视频节奏，主动生成合适的章节名称**（简洁、准确、4-6 个字）
2. **以表格形式呈现给用户确认**
3. **用户确认后**，手动写入 `timing.json`

### 3. 进度条不要显示"outro"章节

"下期再见" / "outro" 章节不应作为进度条的独立分段出现。**做法**：`templates/Video.tsx` 已内置 `useProgressChapters` hook，自动将 `outro` 的时长合并到前一个章节（通常是 `references`），新视频无需额外处理。已有视频如 `AiAgentEraTechProfessionalsVideo.tsx` 也已同步更新。

### 4. 输出视频命名规范

全部流程完成后（Step 14 verify 通过后），根据分辨率和是否混入 BGM 重命名最终文件：

分辨率后缀规则：`3840×2160` → `4k`，`1920×1080` → `1080p`，以此类推。

**保留原始文件，复制一份改名**（而非移动/重命名），确保 `output.mp4` / `final_video.mp4` 仍然存在：

- **有 BGM**：`final_video.mp4` 保留，复制为 `{video-name}-{resolution_suffix}-bgm.mp4`
- **无 BGM**：`output.mp4` 保留，复制为 `{video-name}-{resolution_suffix}.mp4`

**示例：**
| 场景 | 最终文件 | 重命名后 |
|------|---------|---------|
| Step 11 混音 | `final_video.mp4` | `ai-agent-era-tech-professionals-4k-bgm.mp4` |
| 跳过 BGM | `output.mp4` | `ai-agent-era-tech-professionals-4k.mp4` |

"下期再见" / "outro" 章节不应作为进度条的独立分段出现。**做法**：`templates/Video.tsx` 已内置 `useProgressChapters` hook，自动将 `outro` 的时长合并到前一个章节（通常是 `references`），新视频无需额外处理。已有视频如 `AiAgentEraTechProfessionalsVideo.tsx` 也已同步更新。
