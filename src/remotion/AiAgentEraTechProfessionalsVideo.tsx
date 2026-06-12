/**
 * Remotion Video Component — AI Agent Era Tech Professionals
 *
 * A short opinion video about AI Agents reshaping tech careers.
 * 7 sections: hero → status → turn → solution → summary → references → outro
 * Duration: ~2.8 min
 */

import React from "react";
import { Audio, staticFile, AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import type { VideoProps } from "./Root";
import {
  Scale4K,
  FullBleedLayout,
  PaddedLayout,
  useEntrance,
  getPresentation,
  ChapterProgressBar,
  Subtitles,
  Icon,
  useTiming,
} from "./components";
import type { TimingSection } from "./components";

// Section renderer
const SectionComponent = ({
  section,
  props,
}: {
  section: TimingSection;
  props: VideoProps;
}) => {
  const { opacity, translateY, scale } = useEntrance(props.enableAnimations);
  const animStyle = {
    opacity,
    transform: `translateY(${translateY}px) scale(${scale})`,
  };
  const v = props.orientation === "vertical";
  const sectionPadding = v ? "120px 60px 160px" : "60px 100px 120px";
  const accent = props.accentColor;
  const primary = props.primaryColor;

  switch (section.name) {
    case "hero":
      return (
        <FullBleedLayout bg={props.backgroundColor}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at 50% 30%, ${primary}15 0%, transparent 70%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -160,
              right: -100,
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: `${primary}06`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -100,
              left: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: `${accent}08`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: v ? "0 60px" : 0,
              ...animStyle,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 16,
                marginBottom: 32,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 56 }}>🤖</span>
              <span style={{ fontSize: 56 }}>⚡</span>
              <span style={{ fontSize: 56 }}>💻</span>
            </div>
            <h1
              style={{
                fontSize: props.titleSize,
                fontWeight: 800,
                color: props.textColor,
                lineHeight: 1.2,
                maxWidth: 1400,
              }}
            >
              AIAgent 时代
            </h1>
            <h1
              style={{
                fontSize: props.titleSize - 8,
                fontWeight: 800,
                color: primary,
                lineHeight: 1.2,
                marginTop: 8,
              }}
            >
              技术人员何去何从？
            </h1>
            <p
              style={{
                fontSize: props.subtitleSize,
                color: props.textColor,
                marginTop: 28,
                opacity: 0.55,
                fontWeight: 500,
              }}
            >
              Google 75% 代码由 AI 生成，这不是未来，这是现在
            </p>
          </div>
        </FullBleedLayout>
      );

    case "status":
      return (
        <FullBleedLayout bg="#f8f9ff">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 200,
              background: `linear-gradient(180deg, ${primary}08, transparent)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: sectionPadding,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              ...animStyle,
            }}
          >
            <h2
              style={{
                fontSize: v ? 72 : 68,
                fontWeight: 700,
                color: primary,
                marginBottom: v ? 40 : 36,
                textAlign: "center",
              }}
            >
              AI 的冲击波
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: v ? "column" : "row",
                gap: v ? 28 : 32,
                width: "100%",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  value: "75%",
                  label: "Google 代码由 AI 生成",
                  color: primary,
                },
                {
                  value: "70-90%",
                  label: "Anthropic 代码 AI 撰写",
                  color: accent,
                },
                {
                  value: "-50%",
                  label: "初级开发招聘较 2019 减少",
                  color: "#FF6B6B",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    borderRadius: 24,
                    padding: v ? "36px 40px" : "40px 48px",
                    textAlign: "center",
                    minWidth: v ? "100%" : 280,
                    flex: 1,
                    border: `1px solid ${item.color}20`,
                    boxShadow: `0 4px 20px ${item.color}10, 0 8px 32px rgba(0,0,0,0.03)`,
                  }}
                >
                  <div
                    style={{
                      fontSize: v ? 72 : 64,
                      fontWeight: 900,
                      color: item.color,
                      lineHeight: 1.1,
                      marginBottom: 12,
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: v ? 28 : 24,
                      color: props.textColor,
                      opacity: 0.6,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: v ? 28 : 26,
                color: props.textColor,
                opacity: 0.5,
                marginTop: v ? 36 : 28,
                textAlign: "center",
                maxWidth: 1200,
              }}
            >
              高级工程师一将难求，Anthropic 57 万美元年薪招人
            </p>
          </div>
        </FullBleedLayout>
      );

    case "turn":
      return (
        <FullBleedLayout bg={props.backgroundColor}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at 30% 50%, ${accent}08 0%, transparent 60%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: sectionPadding,
              ...animStyle,
            }}
          >
            <div
              style={{
                background: `${accent}10`,
                borderRadius: 999,
                padding: "12px 32px",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: accent,
                }}
              >
                换个角度看
              </span>
            </div>
            <h2
              style={{
                fontSize: v ? 64 : 72,
                fontWeight: 800,
                color: props.textColor,
                textAlign: "center",
                maxWidth: 1400,
                lineHeight: 1.3,
              }}
            >
              不是替代，是
              <span style={{ color: primary }}> 重新定价</span>
            </h2>
            <div
              style={{
                marginTop: 40,
                background: `linear-gradient(135deg, ${primary}08, ${accent}08)`,
                borderRadius: 24,
                padding: v ? "32px 36px" : "36px 56px",
                maxWidth: 1300,
                border: `1px solid ${primary}15`,
              }}
            >
              <p
                style={{
                  fontSize: props.bodySize,
                  color: props.textColor,
                  lineHeight: 1.7,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                AI 淘汰的不是程序员，是"把人当编译器用"的工作方式。 能驾驭
                AI、能判断输出质量、能做架构决策的人——价值在急速上升。
              </p>
            </div>
          </div>
        </FullBleedLayout>
      );

    case "solution":
      return (
        <PaddedLayout bg="#f8f9ff" orientation={props.orientation}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 200,
              background: `linear-gradient(180deg, ${primary}08, transparent)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: sectionPadding,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ...animStyle,
            }}
          >
            <h2
              style={{
                fontSize: v ? 72 : 68,
                fontWeight: 700,
                color: primary,
                textAlign: "center",
                marginBottom: v ? 32 : 28,
              }}
            >
              三条转型路径
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: v ? "column" : "row",
                gap: v ? 20 : 24,
                width: "100%",
                justifyContent: "center",
              }}
            >
              {[
                {
                  icon: "arrow-up-circle",
                  title: "向上走",
                  desc: "从写代码变成定义问题，做AI的任务架构师",
                  color: primary,
                },
                {
                  icon: "target",
                  title: "向下扎",
                  desc: "深耕医疗/金融/工程等领域，知识是护城河",
                  color: "#22c55e",
                },
                {
                  icon: "cpu",
                  title: "学会驾驭",
                  desc: "设计让AI写出好代码的系统，Context工程",
                  color: accent,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: "#ffffff",
                    borderRadius: 24,
                    padding: v ? "32px 28px" : "36px 40px",
                    border: `1px solid ${item.color}20`,
                    boxShadow: `0 4px 20px ${item.color}10`,
                    textAlign: "center",
                  }}
                >
                  <Icon
                    name={item.icon}
                    size={v ? 64 : 56}
                    color={item.color}
                    animate="bounce"
                    delay={i * 8}
                  />
                  <h3
                    style={{
                      fontSize: v ? 38 : 34,
                      fontWeight: 700,
                      color: item.color,
                      marginTop: 16,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: v ? 28 : 26,
                      color: props.textColor,
                      opacity: 0.7,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PaddedLayout>
      );

    case "summary":
      return (
        <FullBleedLayout bg={props.backgroundColor}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at 50% 50%, ${primary}12 0%, transparent 70%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: sectionPadding,
              ...animStyle,
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${primary}10, ${accent}10)`,
                borderRadius: 28,
                padding: v ? "72px 60px" : "56px 80px",
                textAlign: "center",
                maxWidth: 1400,
                border: `1px solid ${primary}20`,
                boxShadow: `0 4px 24px ${primary}12, 0 8px 48px rgba(0,0,0,0.04)`,
              }}
            >
              <h2
                style={{
                  fontSize: v ? 60 : 52,
                  fontWeight: 700,
                  color: primary,
                  marginBottom: 28,
                }}
              >
                核心分水岭
              </h2>
              <p
                style={{
                  fontSize: v ? 36 : 32,
                  color: props.textColor,
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                你能不能把人类独有的工程判断力，
              </p>
              <p
                style={{
                  fontSize: v ? 36 : 32,
                  color: primary,
                  lineHeight: 1.7,
                  fontWeight: 700,
                  marginTop: 8,
                }}
              >
                系统化地注入到 AI 工作流中。
              </p>
              <div
                style={{
                  marginTop: 32,
                  padding: "20px 32px",
                  background: `${accent}10`,
                  borderRadius: 16,
                  display: "inline-block",
                }}
              >
                <p
                  style={{
                    fontSize: v ? 30 : 28,
                    color: accent,
                    fontWeight: 700,
                  }}
                >
                  不是 AI 取代你，是用 AI 的人取代不用 AI 的人
                </p>
              </div>
            </div>
          </div>
        </FullBleedLayout>
      );

    case "references":
      return (
        <FullBleedLayout bg={props.backgroundColor}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: sectionPadding,
              ...animStyle,
            }}
          >
            <h2
              style={{
                fontSize: v ? 52 : 48,
                fontWeight: 600,
                color: props.textColor,
                opacity: 0.4,
                marginBottom: 20,
              }}
            >
              参考资料
            </h2>
            <p
              style={{
                fontSize: v ? 24 : 22,
                color: props.textColor,
                opacity: 0.35,
                textAlign: "center",
                maxWidth: 1200,
                lineHeight: 1.6,
              }}
            >
              ACM Communications · Business Insider · InfoQ · 新华网 ·
              腾讯云开发者社区
            </p>
          </div>
        </FullBleedLayout>
      );

    case "outro":
      return (
        <FullBleedLayout bg={props.backgroundColor}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse at 50% 50%, ${primary}10 0%, transparent 70%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              ...animStyle,
            }}
          >
            <h2
              style={{
                fontSize: v ? 72 : 80,
                fontWeight: 700,
                color: props.textColor,
                marginBottom: v ? 48 : 40,
              }}
            >
              一键三连！
            </h2>
            <div
              style={{
                display: "flex",
                gap: v ? 48 : 36,
                flexDirection: v ? "column" : "row",
              }}
            >
              {[
                { icon: "thumbs-up", text: "点赞" },
                { icon: "message-circle", text: "评论" },
                { icon: "share-2", text: "转发" },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <Icon
                    name={item.icon}
                    size={v ? 72 : 56}
                    color={accent}
                    animate="bounce"
                    delay={i * 10}
                  />
                  <div
                    style={{
                      fontSize: v ? 30 : 24,
                      color: "rgba(0,0,0,0.45)",
                      marginTop: 8,
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: v ? 40 : 34,
                color: primary,
                marginTop: v ? 48 : 40,
                fontWeight: 600,
              }}
            >
              下期再见！
            </p>
          </div>
        </FullBleedLayout>
      );

    default:
      return (
        <PaddedLayout
          bg={props.backgroundColor}
          orientation={props.orientation}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: sectionPadding,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ...animStyle,
            }}
          >
            <h2
              style={{
                fontSize: v ? 72 : 80,
                fontWeight: 700,
                color: primary,
                textAlign: "center",
              }}
            >
              {section.name}
            </h2>
            <div
              style={{
                background: `linear-gradient(135deg, ${primary}06, ${accent}06)`,
                borderRadius: 24,
                padding: v ? "40px 44px" : "40px 56px",
                boxShadow:
                  "0 2px 8px rgba(0,0,0,0.03), 0 8px 32px rgba(0,0,0,0.05)",
                border: `1px solid ${primary}10`,
                width: "100%",
              }}
            >
              <p
                style={{
                  fontSize: props.bodySize,
                  color: props.textColor,
                  fontWeight: 500,
                  lineHeight: v ? 1.8 : 1.5,
                }}
              >
                Section content goes here...
              </p>
            </div>
          </div>
        </PaddedLayout>
      );
  }
};

// Merge "outro" chapter into "references" for progress bar display only
const useProgressChapters = (sections: TimingSection[]) =>
  React.useMemo(() => {
    const merged = sections.map((s) => ({ ...s }));
    const outroIdx = merged.findIndex((s) => s.name === "outro");
    if (outroIdx > 0) {
      const prev = merged[outroIdx - 1];
      const outro = merged[outroIdx];
      prev.duration_frames += outro.duration_frames;
      prev.duration += outro.duration;
      prev.end_time = outro.end_time;
      merged.splice(outroIdx, 1);
    }
    return merged;
  }, [sections]);

// Main video component
export const Video = (props: VideoProps) => {
  const timing = useTiming();
  const sections = timing.sections;
  const transitionFrames = props.transitionDuration;
  // Each section (except last) gets extra frames for the outgoing transition
  const compensatedSections = sections.map((s, i) => ({
    ...s,
    duration_frames:
      i < sections.length - 1
        ? s.duration_frames + transitionFrames
        : s.duration_frames,
  }));

  // Chapters for progress bar (outro merged into references)
  const progressChapters = useProgressChapters(sections);

  return (
    <AbsoluteFill style={{ backgroundColor: props.backgroundColor }}>
      <Scale4K orientation={props.orientation}>
        <TransitionSeries>
          {compensatedSections.map((section, i) => (
            <React.Fragment key={section.name}>
              <TransitionSeries.Sequence
                durationInFrames={section.duration_frames}
              >
                <SectionComponent section={section} props={props} />
              </TransitionSeries.Sequence>
              {i < sections.length - 1 &&
                transitionFrames > 0 &&
                props.transitionType !== "none" && (
                  <TransitionSeries.Transition
                    presentation={getPresentation(props.transitionType) as any}
                    timing={linearTiming({
                      durationInFrames: transitionFrames,
                    })}
                  />
                )}
            </React.Fragment>
          ))}
        </TransitionSeries>
      </Scale4K>
      <ChapterProgressBar props={props} chapters={progressChapters} />
      <Subtitles src={staticFile("podcast_audio.srt")} bottomOffset={150} />
      {props.bgmVolume > 0 && (
        <Audio src={staticFile("bgm.mp3")} volume={props.bgmVolume} />
      )}
      <Audio src={staticFile("podcast_audio.wav")} />
    </AbsoluteFill>
  );
};

export default Video;
