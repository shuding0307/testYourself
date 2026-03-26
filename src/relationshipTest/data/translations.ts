import type { RelationshipType } from "./types";

export interface RelationshipTranslation {
  title: string;
  subtitle: string;
  startBtn: string;
  nextBtn: string;
  resultBtn: string;
  retryBtn: string;
  shareBtn: string;
  strengthLabel: string;
  strengthDescription: string;
  results: Record<
    RelationshipType,
    {
      title: string;
      subTitle: string;
      desc: string;
      strengthId: string;
      strengthReason: string;
    }
  >;
}

export const relationshipTranslations: Record<string, RelationshipTranslation> =
  {
    ko: {
      title: "연애 타입 테스트",
      subtitle: "당신은 어떤 사랑을 하고 있나요?",
      startBtn: "테스트 시작하기",
      nextBtn: "다음",
      resultBtn: "결과 확인하기",
      retryBtn: "다시 하기",
      shareBtn: "공유하기",
      strengthLabel: "💡 당신의 기본 성향:",
      strengthDescription: "그래서 연애에서도 {desc}",
      results: {
        direct_lover: {
          title: "🔥 직진형 사랑러",
          subTitle: "감정에 솔직한 열정가",
          desc: "당신은 감정을 숨기기보다는 표현하는 데 익숙한 사람입니다. 좋아하는 마음이 생기면 자연스럽게 행동으로 이어지고, 관계에서도 솔직함을 가장 중요하게 생각합니다.\n\n상대방에게 자신의 감정을 분명하게 전달하려고 하기 때문에 오해가 쌓이는 일이 적고, 관계가 빠르게 깊어지는 경우가 많아요. 다만 때로는 상대의 속도보다 앞서 나가면서 부담을 줄 수도 있습니다.\n\n그럼에도 불구하고, 당신의 진심은 분명하게 전달되는 편이며, 연애에서 가장 중요한 ‘확실함’을 만들어내는 타입입니다. 감정을 행동으로 옮길 줄 아는 사람, 그래서 관계를 움직이게 만드는 사람이 바로 당신입니다.",
          strengthId: "drive_creativity",
          strengthReason: "감정보다 행동이 먼저 나오는 편이에요.",
        },
        wary_flirt: {
          title: "👀 눈치형 밀당러",
          subTitle: "관계의 흐름을 읽는 전략가",
          desc: "당신은 감정보다 상황과 흐름을 먼저 보는 타입입니다. 상대방의 말투, 행동, 연락 속도까지 세심하게 관찰하며 관계의 균형을 맞추려고 합니다.\n\n먼저 다가가기보다는 “이 타이밍이 맞을까?”를 고민하는 경우가 많아요. 그래서 쉽게 상처받지 않지만, 동시에 기회를 놓칠 수도 있는 타입입니다.\n\n주변에서는 당신을 신중하고 센스 있는 사람으로 보지만, 속으로는 꽤 많은 생각을 하고 있는 경우가 많습니다. 확신이 생기면 움직이지만, 그 전까지는 절대 쉽게 행동하지 않는 사람입니다.",
          strengthId: "analytical_empathy",
          strengthReason: "상대의 반응을 세심하게 살피며 움직이는 편이에요.",
        },
        devoted_giver: {
          title: "🫶 헌신형 퍼주러",
          subTitle: "아낌없이 주는 나무",
          desc: "당신은 연애를 시작하면 상대방을 중심에 두는 타입입니다. 좋아하는 사람이 생기면 자연스럽게 맞춰주고, 상대가 편한 방향으로 관계를 유지하려고 합니다.\n\n그래서 상대방 입장에서는 굉장히 편안하고 안정적인 연애를 느낄 수 있어요. 다만 그 과정에서 자신의 감정이나 욕구를 뒤로 미루는 경우가 많습니다.\n\n가끔은 “왜 나만 맞추지?”라는 생각이 들 수도 있지만, 그만큼 상대를 깊이 생각하는 사람입니다. 사랑을 줄 줄 아는 사람, 하지만 때로는 자신도 챙겨야 하는 타입입니다.",
          strengthId: "empathy_patience",
          strengthReason: "상대의 행복에서 자신의 기쁨을 찾는 편이에요.",
        },
        emotion_hider: {
          title: "🧊 감정 숨김형",
          subTitle: "알면 알수록 깊은 진국",
          desc: "당신은 감정이 없는 게 아니라, 표현이 어려운 타입입니다. 좋아하는 마음이 있어도 쉽게 드러내지 않고, 스스로 정리하려고 하는 경향이 있습니다.\n\n그래서 상대방 입장에서는 당신의 마음을 파악하기 어려울 수도 있어요. 하지만 한 번 마음을 열면 깊고 안정적인 관계를 만들어가는 사람입니다.\n\n겉으로는 차분해 보이지만, 속에서는 많은 생각과 감정이 오가고 있는 타입이에요. 표현보다 진심이 더 큰 사람입니다.",
          strengthId: "patience_drive",
          strengthReason:
            "감정을 겉으로 드러내기보다 속으로 단단히 다지는 편이에요.",
        },
        immersive_obsessive: {
          title: "🎯 몰입 집착형",
          subTitle: "온 마음을 다하는 사랑꾼",
          desc: "당신은 연애를 시작하면 깊이 빠져드는 타입입니다. 상대방이 삶에서 차지하는 비중이 커지고, 자연스럽게 많은 시간과 감정을 투자하게 됩니다.\n\n사랑을 가볍게 하지 않는 만큼, 관계에서도 진지함이 강하게 드러납니다. 하지만 그만큼 상대의 행동 하나하나에 영향을 많이 받기도 합니다.\n\n감정의 깊이가 큰 만큼 기쁨도 크고, 상처도 깊을 수 있는 타입입니다. 누군가를 진심으로 사랑할 수 있는 사람입니다.",
          strengthId: "drive_patience",
          strengthReason:
            "한 사람에게 깊게 집중하고 모든 에너지를 쏟는 편이에요.",
        },
        stability_seeker: {
          title: "🐢 안정 추구형",
          subTitle: "편안한 쉼터 같은 사랑",
          desc: "당신은 빠른 감정보다 오래 갈 수 있는 관계를 중요하게 생각하는 타입입니다. 연애에서도 급하게 가까워지기보다는, 시간을 두고 천천히 관계를 쌓아갑니다.\n\n상대방과의 신뢰, 안정감, 편안함을 중요하게 여기며, 감정의 기복이 크지 않은 편이에요. 그래서 관계가 오래 지속되는 경우가 많습니다.\n\n자극적이지는 않지만 가장 현실적이고 건강한 연애를 하는 타입입니다.",
          strengthId: "analytical_drive",
          strengthReason:
            "관계의 미래를 신중하게 설계하고 안정감을 우선시하는 편이에요.",
        },
        atmosphere_sensitive: {
          title: "🎭 분위기 감성형",
          subTitle: "낭만을 꿈꾸는 로맨티스트",
          desc: "당신은 연애에서 ‘느낌’을 굉장히 중요하게 생각하는 타입입니다. 설렘, 분위기, 감정의 흐름에 민감하고, 그 순간의 감정을 깊이 느끼는 사람입니다.\n\n그래서 연애가 시작될 때의 설렘을 중요하게 여기고, 관계 속에서도 감정적인 교류를 중요하게 생각합니다. 다만 분위기에 영향을 많이 받기 때문에 감정 기복이 생길 수도 있습니다.\n\n연애를 하나의 경험으로 깊게 느끼는 타입입니다.",
          strengthId: "creativity_drive",
          strengthReason:
            "매 순간의 감정과 분위기를 창의적으로 즐기는 편이에요.",
        },
        deep_emotionalist: {
          title: "🌊 감정 깊이형",
          subTitle: "바다보다 깊은 내면의 소유자",
          desc: "당신은 겉으로 드러나는 것보다 훨씬 깊은 감정을 가지고 있는 타입입니다. 사랑을 가볍게 하지 않고, 한 번 마음이 생기면 오래 지속되는 편입니다.\n\n관계에서도 깊은 유대감을 중요하게 생각하고, 쉽게 정리하지 못하는 경우가 많아요. 그래서 이별 이후에도 감정이 오래 남는 편입니다.\n\n하지만 그만큼 진짜 관계를 만들 수 있는 사람입니다.",
          strengthId: "patience_creativity",
          strengthReason:
            "눈에 보이지 않는 깊은 유대감을 소중히 여기는 편이에요.",
        },
      },
    },
  };

// 타 언어들에 대해 기본값(ko) 설정 (번역 데이터 부족 시 fallback)
relationshipTranslations.en = relationshipTranslations.ko;
relationshipTranslations.jp = relationshipTranslations.ko;
relationshipTranslations.zh = relationshipTranslations.ko;
relationshipTranslations.lt = relationshipTranslations.ko;

export type RelationshipTranslationType = typeof relationshipTranslations.ko;
