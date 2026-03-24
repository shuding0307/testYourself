import type { StrengthCategory, StrengthQuestion } from "../data/questions";

export interface StrengthResult {
  mainType: StrengthCategory;
  subType: StrengthCategory;
  scores: Record<StrengthCategory, number>;
  percentages: Record<StrengthCategory, number>;
  title: string;
  description: string;
  icon: string;
  typeKey: string;
}

// 10가지 고유 캐릭터 템플릿
const characterTemplates: Record<
  string,
  { title: string; desc: string; icon: string }
> = {
  drive_creativity: {
    title: "🔥 돌진형 실행러",
    desc: "일단 하고 보는 스타일. 고민보다 행동이 빠른 타입이에요. 방식도 남달라서 혁신가 소리를 듣기도 합니다.",
    icon: "🔥",
  },
  empathy_patience: {
    title: "🫶 감정 공감러",
    desc: "사람 마음을 잘 읽는 타입. 주변에 있으면 편안해져요. 타인의 아픔을 자기 일처럼 느끼는 따뜻한 분입니다.",
    icon: "🫶",
  },
  creativity_drive: {
    title: "💡 아이디어 폭발러",
    desc: "가만히 있어도 아이디어가 튀어나오는 타입. 평범한 건 재미없죠. 독창적인 시각으로 세상을 봅니다.",
    icon: "💡",
  },
  analytical_drive: {
    title: "🧠 전략 설계자",
    desc: "전체 그림을 보고 움직이는 타입. 계획 없이 움직이지 않아요. 복잡한 문제도 척척 해결하는 해결사입니다.",
    icon: "🧠",
  },
  patience_drive: {
    title: "🪨 꾸준한 버티기형",
    desc: "쉽게 포기하지 않는 사람. 결국 끝까지 가는 건 이런 타입이에요. 조용한 강함이 당신의 무기입니다.",
    icon: "🪨",
  },
  analytical_empathy: {
    title: "👀 눈치 100단 관찰러",
    desc: "상황 파악이 빠른 타입. 말 안 해도 다 알아차려요. 논리적이면서도 사람의 감정을 놓치지 않습니다.",
    icon: "👀",
  },
  drive_patience: {
    title: "🎯 목표 집착형",
    desc: "한 번 꽂히면 끝까지 파는 타입. 집중력이 미쳤어요. 당신의 열정은 아무도 못 말립니다.",
    icon: "🎯",
  },
  patience_creativity: {
    title: "🐢 느긋한 마이웨이형",
    desc: "남들 속도 신경 안 쓰는 타입. 자기 페이스가 중요해요. 묵묵히 자신만의 세계를 구축하는 예술가 타입입니다.",
    icon: "🐢",
  },
  empathy_drive: {
    title: "🎭 분위기 메이커형",
    desc: "사람들 사이에서 자연스럽게 분위기 만드는 타입이에요. 탁월한 공감 능력과 에너지로 모임을 주도합니다.",
    icon: "🎭",
  },
  empathy_creativity: {
    title: "🌊 감정 기복 공감형",
    desc: "기분에 따라 움직이는 타입. 감정이 풍부한 사람이에요. 인간적이고 감성적인 면이 당신의 매력 포인트입니다.",
    icon: "🌊",
  },
  // 기본값 (조합이 없을 경우를 대비)
  default: {
    title: "💎 숨겨진 보석",
    desc: "하나의 타입으로 딱 나눌 수 없는 희귀한 케이스예요. 상황에 따라 다른 강점을 자연스럽게 꺼내 쓰는, 유연한 사람입니다.",
    icon: "💎",
  },
};

export const calculateStrengthResult = (
  questions: StrengthQuestion[],
  answers: ("A" | "B" | "C")[],
): StrengthResult => {
  const BASE_SCORE = 2; // 최소값 보정 (Min-Value Padding): 기본 잠재력 점수 부여
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
  const key = `${mainType}_${subType}`;
  let character = characterTemplates[key];
  let finalKey = key;

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
    title: character.title,
    description: character.desc,
    icon: character.icon,
    typeKey: finalKey,
  };
};
