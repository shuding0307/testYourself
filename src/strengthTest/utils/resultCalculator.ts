import type { StrengthCategory, StrengthQuestion } from "../data/questions";
import type { StrengthTypeKey } from "../data/types";

export interface StrengthResult {
  mainType: StrengthCategory;
  subType: StrengthCategory;
  scores: Record<StrengthCategory, number>;
  percentages: Record<StrengthCategory, number>;
  icon: string;
  typeKey: StrengthTypeKey;
}

// 10가지 고유 캐릭터 템플릿 (아이콘 및 키 매핑용)
const characterTemplates: Record<StrengthTypeKey, { icon: string }> = {
  drive_creativity: { icon: "🔥" },
  empathy_patience: { icon: "🫶" },
  creativity_drive: { icon: "💡" },
  analytical_drive: { icon: "🧠" },
  patience_drive: { icon: "🪨" },
  analytical_empathy: { icon: "👀" },
  drive_patience: { icon: "🎯" },
  patience_creativity: { icon: "🐢" },
  empathy_drive: { icon: "🎭" },
  empathy_creativity: { icon: "🌊" },
  default: { icon: "💎" },
};

export const calculateStrengthResult = (
  questions: StrengthQuestion[],
  answers: ("A" | "B" | "C")[],
): StrengthResult => {
  const BASE_SCORE = 1; // 최소값 보정 (Min-Value Padding) 수정: 2 -> 1
  const scores: Record<StrengthCategory, number> = {
    drive: BASE_SCORE,
    empathy: BASE_SCORE,
    creativity: BASE_SCORE,
    analytical: BASE_SCORE,
    patience: BASE_SCORE,
  };

  answers.forEach((ans, idx) => {
    const option = questions[idx].options[ans];
    Object.entries(option.scores).forEach(([cat, score]) => {
      scores[cat as StrengthCategory] += score || 0;
    });
  });

  const sorted = (Object.entries(scores) as [StrengthCategory, number][]).sort(
    (a, b) => b[1] - a[1],
  );

  const mainType = sorted[0][0];
  const subType = sorted[1][0];

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const percentages: Record<StrengthCategory, number> = {
    drive: Math.round((scores.drive / total) * 100),
    empathy: Math.round((scores.empathy / total) * 100),
    creativity: Math.round((scores.creativity / total) * 100),
    analytical: Math.round((scores.analytical / total) * 100),
    patience: Math.round((scores.patience / total) * 100),
  };

  // 캐릭터 매핑 로직
  const key = `${mainType}_${subType}` as StrengthTypeKey;
  let character = characterTemplates[key];
  let finalKey: StrengthTypeKey = key;

  // 만약 정확한 키가 없으면 메인 타입 기반으로 매핑
  if (!character) {
    if (mainType === "drive") {
      character = characterTemplates["drive_creativity"];
      finalKey = "drive_creativity";
    } else if (mainType === "empathy") {
      character = characterTemplates["empathy_patience"];
      finalKey = "empathy_patience";
    } else if (mainType === "creativity") {
      character = characterTemplates["creativity_drive"];
      finalKey = "creativity_drive";
    } else if (mainType === "analytical") {
      character = characterTemplates["analytical_drive"];
      finalKey = "analytical_drive";
    } else if (mainType === "patience") {
      character = characterTemplates["patience_drive"];
      finalKey = "patience_drive";
    } else {
      character = characterTemplates["default"];
      finalKey = "default";
    }
  }

  return {
    mainType,
    subType,
    scores,
    percentages,
    icon: character.icon,
    typeKey: finalKey,
  };
};
