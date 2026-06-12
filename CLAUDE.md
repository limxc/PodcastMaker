# PodcastMaker 项目规则

## 脚本审查确认

使用 `video-podcast-maker` 时，**第 4 步（Write Narration Script）生成 `podcast.txt` 后**：

1. **自动执行 `humanizer-zh` skill**，对脚本内容进行去 AI 痕迹处理
2. **执行方式**：使用 `Skill` 工具调用 `humanizer-zh`，在参数中附上 `podcast.txt` 全文，**并明确要求保留 `[SECTION:xxx]` 标记和 `#` 注释行不变，仅处理内容文本**
3. 将 humanizer-zh 的输出写入 `podcast-humanizer.txt`
4. **等待用户人工校对并修改 `podcast.txt`**（可参考 `podcast-humanizer.txt` 的建议）
5. **用户确认脚本无误后**，方可继续执行后续步骤
