import type { DessertQuestion } from "./types";

export const dessertQuestions: DessertQuestion[] = [
  {
    id: 1,
    text: {
      ko: "새로운 사람을 만났을 때 나는?",
      en: "When I meet someone new...",
      jp: "新しい人に会ったとき、私は？",
      zh: "遇到新朋友时，我...",
      lt: "Kai sutinku naują žmogų...",
    },
    options: {
      A: {
        text: {
          ko: "먼저 말을 걸고 분위기를 이끈다",
          en: "Speak first and lead the atmosphere",
          jp: "自分から話しかけて雰囲気をリードする",
          zh: "主动搭话并带动气氛",
          lt: "Pirmas užkalbinu ir užvedu pokalbį",
        },
        scores: { gelato: 2, macaron: 1 },
      },
      B: {
        text: {
          ko: "자연스럽게 섞이지만 주도하진 않는다",
          en: "Blend in naturally but don't lead",
          jp: "自然に馴染むがリードはしない",
          zh: "自然融入但不主导",
          lt: "Natūraliai įsilieju, bet nevadovauju",
        },
        scores: { bingsu: 2, pudding: 1 },
      },
      C: {
        text: {
          ko: "상대를 관찰하며 천천히 다가간다",
          en: "Observe and approach slowly",
          jp: "相手を観察しながらゆっくり近づく",
          zh: "观察对方并慢慢靠近",
          lt: "Stebiu kitą ir lėtai artėju",
        },
        scores: { tiramisu: 2, creme_brulee: 1 },
      },
      D: {
        text: {
          ko: "익숙해지기 전까지는 조용히 있는다",
          en: "Stay quiet until I feel comfortable",
          jp: "慣れるまでは静かにしている",
          zh: "在熟悉之前保持安静",
          lt: "Būnu tylus, kol apsiprantu",
        },
        scores: { brownie: 2, baklava: 1 },
      },
    },
  },
  {
    id: 2,
    text: {
      ko: "연애에서 더 중요한 것은?",
      en: "What is more important in a relationship?",
      jp: "恋愛でより重要なのは？",
      zh: "恋爱中更重要的是？",
      lt: "Kas svarbiau santykiuose?",
    },
    options: {
      A: {
        text: {
          ko: "설렘과 재미",
          en: "Excitement and fun",
          jp: "ときめきと楽しさ",
          zh: "心动与趣味",
          lt: "Jaudulys ir pramogos",
        },
        scores: { macaron: 3, gelato: 2 },
      },
      B: {
        text: {
          ko: "편안함과 자연스러움",
          en: "Comfort and naturalness",
          jp: "心地よさと自然体",
          zh: "舒适与自然",
          lt: "Patogumas ir natūralumas",
        },
        scores: { bingsu: 3, pudding: 2 },
      },
      C: {
        text: {
          ko: "깊은 감정과 진심",
          en: "Deep emotions and sincerity",
          jp: "深い感情と真心",
          zh: "深厚的情感与真心",
          lt: "Gilus ryšys ir nuoširdumas",
        },
        scores: { tiramisu: 3, brownie: 2 },
      },
      D: {
        text: {
          ko: "안정감과 신뢰",
          en: "Stability and trust",
          jp: "安定感と信頼",
          zh: "稳定感与信任",
          lt: "Stabilumas ir pasitikėjimas",
        },
        scores: { creme_brulee: 3, egg_tart: 2 },
      },
    },
  },
  {
    id: 3,
    text: {
      ko: "스트레스를 받을 때 나는?",
      en: "When I'm stressed...",
      jp: "ストレスを感じたとき、私は？",
      zh: "压力大时，我...",
      lt: "Kai patiriu stresą...",
    },
    options: {
      A: {
        text: {
          ko: "사람을 만나서 푼다",
          en: "Meet people to relieve it",
          jp: "人に会って解消する",
          zh: "见朋友来排解",
          lt: "Susitinku su žmonėmis",
        },
        scores: { gelato: 2, bingsu: 1 },
      },
      B: {
        text: {
          ko: "맛있는 거 먹거나 쉬면서 푼다",
          en: "Eat something delicious or rest",
          jp: "美味しいものを食べたり休んだりして解消する",
          zh: "吃好吃的或休息来排解",
          lt: "Skaniai valgau arba ilsėjausi",
        },
        scores: { pudding: 2, macaron: 1 },
      },
      C: {
        text: {
          ko: "혼자 생각하며 정리한다",
          en: "Think and organize thoughts alone",
          jp: "一人で考えて整理する",
          zh: "独自思考并整理心情",
          lt: "Galvoju ir susidėlioju mintis vienas",
        },
        scores: { tiramisu: 2, brownie: 1 },
      },
      D: {
        text: {
          ko: "아무것도 안 하고 시간을 둔다",
          en: "Do nothing and let time pass",
          jp: "何もしないで時間を置く",
          zh: "什么都不做，顺其自然",
          lt: "Nieko nedarau ir leidžiu laikui bėgti",
        },
        scores: { creme_brulee: 2, egg_tart: 1 },
      },
    },
  },
  {
    id: 4,
    text: {
      ko: "친구들이 보는 나는?",
      en: "How do my friends see me?",
      jp: "友達から見た私は？",
      zh: "朋友眼中的我是？",
      lt: "Kaip mane mato draugai?",
    },
    options: {
      A: {
        text: {
          ko: "밝고 에너지 넘치는 사람",
          en: "A bright and energetic person",
          jp: "明るくてエネルギー溢れる人",
          zh: "开朗且充满活力的人",
          lt: "Šviesus ir energingas žmogus",
        },
        scores: { macaron: 2, gelato: 1 },
      },
      B: {
        text: {
          ko: "편하고 같이 있기 좋은 사람",
          en: "A comfortable person to be with",
          jp: "心地よくて一緒にいやすい人",
          zh: "随和且容易相处的人",
          lt: "Malonus ir paprastas žmogus",
        },
        scores: { bingsu: 2, pudding: 1 },
      },
      C: {
        text: {
          ko: "생각이 깊고 진지한 사람",
          en: "A thoughtful and serious person",
          jp: "思慮深くて真面目な人",
          zh: "思想深刻且认真的人",
          lt: "Mąstantis ir rimtas žmogus",
        },
        scores: { tiramisu: 2, brownie: 1 },
      },
      D: {
        text: {
          ko: "차분하고 믿음직한 사람",
          en: "A calm and reliable person",
          jp: "落ち着いていて信頼できる人",
          zh: "沉着且值得信赖的人",
          lt: "Ramus ir patikimas žmogus",
        },
        scores: { creme_brulee: 2, baklava: 1 },
      },
    },
  },
  {
    id: 5,
    text: {
      ko: "갑자기 여행을 가게 된다면?",
      en: "If I suddenly go on a trip...",
      jp: "急に旅行に行くことになったら？",
      zh: "如果突然去旅行...",
      lt: "Jei staiga tektų keliauti...",
    },
    options: {
      A: {
        text: {
          ko: "계획 없이 바로 떠난다",
          en: "Leave immediately without a plan",
          jp: "計画なしですぐに出発する",
          zh: "不做计划直接出发",
          lt: "Išvykstu iškart be plano",
        },
        scores: { gelato: 2, macaron: 1 },
      },
      B: {
        text: {
          ko: "대충만 정하고 간다",
          en: "Make a rough plan and go",
          jp: "大まかにだけ決めて行く",
          zh: "只定个大概就出发",
          lt: "Susidėlioju preliminarų planą",
        },
        scores: { bingsu: 2, pudding: 1 },
      },
      C: {
        text: {
          ko: "일정과 코스를 꼼꼼히 짠다",
          en: "Plan the schedule and route meticulously",
          jp: "日程とコースを細かく立てる",
          zh: "仔细制定行程和路线",
          lt: "Kruopščiai susiplanuoju maršrutą",
        },
        scores: { creme_brulee: 2, tiramisu: 1 },
      },
      D: {
        text: {
          ko: "익숙한 장소를 선호한다",
          en: "Prefer familiar places",
          jp: "慣れた場所を好む",
          zh: "倾向于熟悉的地点",
          lt: "Renkuosi žinomas vietas",
        },
        scores: { brownie: 2, egg_tart: 1 },
      },
    },
  },
  {
    id: 6,
    text: {
      ko: "누군가 나에게 다가올 때 나는?",
      en: "When someone approaches me...",
      jp: "誰かが近づいてきたとき、私は？",
      zh: "当有人靠近我时，我...",
      lt: "Kai kas nors prieina prie manęs...",
    },
    options: {
      A: {
        text: {
          ko: "금방 친해진다",
          en: "Get close quickly",
          jp: "すぐに仲良くなる",
          zh: "很快就能变熟",
          lt: "Greitai susidraugauju",
        },
        scores: { macaron: 2, gelato: 1 },
      },
      B: {
        text: {
          ko: "상황에 따라 다르다",
          en: "Depends on the situation",
          jp: "状況によって違う",
          zh: "视情况而定",
          lt: "Priklauso nuo situacijos",
        },
        scores: { bingsu: 2, pudding: 1 },
      },
      C: {
        text: {
          ko: "시간을 두고 친해진다",
          en: "Take time to get close",
          jp: "時間をかけて仲良くなる",
          zh: "需要时间慢慢变熟",
          lt: "Reikia laiko susidraugauti",
        },
        scores: { tiramisu: 2, creme_brulee: 1 },
      },
      D: {
        text: {
          ko: "쉽게 마음을 열지 않는다",
          en: "Don't open up easily",
          jp: "簡単に心を開かない",
          zh: "不容易敞开心扉",
          lt: "Lengvai neatsiveriu",
        },
        scores: { brownie: 2, egg_tart: 1 },
      },
    },
  },
  {
    id: 7,
    text: {
      ko: "감정을 표현하는 스타일은?",
      en: "What is my style of expressing emotions?",
      jp: "感情を表現するスタイルは？",
      zh: "我表达感情的方式是？",
      lt: "Kaip išreiškiu emocijas?",
    },
    options: {
      A: {
        text: {
          ko: "바로 표현한다",
          en: "Express them immediately",
          jp: "すぐに表現する",
          zh: "直接表达",
          lt: "Išreiškiu iškart",
        },
        scores: { macaron: 2, gelato: 1 },
      },
      B: {
        text: {
          ko: "자연스럽게 드러난다",
          en: "They show naturally",
          jp: "自然に表れる",
          zh: "自然流露",
          lt: "Parodau natūraliai",
        },
        scores: { bingsu: 2, pudding: 1 },
      },
      C: {
        text: {
          ko: "가까운 사람에게만 표현한다",
          en: "Only express to close people",
          jp: "親しい人にだけ表現する",
          zh: "只对亲近的人表达",
          lt: "Tik artimiems žmonėms",
        },
        scores: { tiramisu: 2, brownie: 1 },
      },
      D: {
        text: {
          ko: "잘 표현하지 않는다",
          en: "Don't express them much",
          jp: "あまり表現しない",
          zh: "不怎么表达",
          lt: "Nelabai išreiškiu",
        },
        scores: { creme_brulee: 2, egg_tart: 1 },
      },
    },
  },
  {
    id: 8,
    text: {
      ko: "나는 어떤 사람에 가까운가?",
      en: "What kind of person am I closer to?",
      jp: "私はどんな人に近い？",
      zh: "我更接近哪种类型的人？",
      lt: "Koks aš esu žmogus?",
    },
    options: {
      A: {
        text: {
          ko: "자극적이고 재미있는 스타일",
          en: "Exciting and fun style",
          jp: "刺激的で楽しいスタイル",
          zh: "刺激且有趣的人",
          lt: "Jaudinantis ir smagus",
        },
        scores: { macaron: 2 },
      },
      B: {
        text: {
          ko: "부드럽고 편안한 스타일",
          en: "Soft and comfortable style",
          jp: "柔らかくて心地よいスタイル",
          zh: "温柔且随和的人",
          lt: "Švelnus ir paprastas",
        },
        scores: { pudding: 2 },
      },
      C: {
        text: {
          ko: "깊고 진한 스타일",
          en: "Deep and intense style",
          jp: "深くて濃厚なスタイル",
          zh: "深沉且浓郁的人",
          lt: "Gilus ir intensyvus",
        },
        scores: { tiramisu: 2 },
      },
      D: {
        text: {
          ko: "단단하고 안정적인 스타일",
          en: "Solid and stable style",
          jp: "堅実で安定したスタイル",
          zh: "坚实且稳定的人",
          lt: "Tvirtas ir stabilus",
        },
        scores: { creme_brulee: 2 },
      },
    },
  },
  {
    id: 9,
    text: {
      ko: "갈등 상황이 생기면?",
      en: "When a conflict arises...",
      jp: "葛藤が生じたら？",
      zh: "遇到冲突时...",
      lt: "Iškilus konfliktui...",
    },
    options: {
      A: {
        text: {
          ko: "바로 풀려고 한다",
          en: "Try to solve it immediately",
          jp: "すぐに解決しようとする",
          zh: "想立即解决",
          lt: "Bandau spręsti iškart",
        },
        scores: { gelato: 2, macaron: 1 },
      },
      B: {
        text: {
          ko: "대화로 자연스럽게 해결한다",
          en: "Resolve naturally through conversation",
          jp: "会話で自然に解決する",
          zh: "通过对话自然解决",
          lt: "Sprendžiu kalbėdamasis",
        },
        scores: { bingsu: 2, pudding: 1 },
      },
      C: {
        text: {
          ko: "시간을 두고 생각한다",
          en: "Take time to think",
          jp: "時間を置いて考える",
          zh: "给自己时间思考",
          lt: "Reikia laiko pagalvoti",
        },
        scores: { tiramisu: 2, brownie: 1 },
      },
      D: {
        text: {
          ko: "쉽게 말하지 않고 참는다",
          en: "Endure without speaking easily",
          jp: "簡単には言わずに我慢する",
          zh: "不容易说出口，忍耐",
          lt: "Nekalbu ir kenčiu",
        },
        scores: { creme_brulee: 2, egg_tart: 1 },
      },
    },
  },
  {
    id: 10,
    text: {
      ko: "내가 원하는 관계는?",
      en: "What kind of relationship do I want?",
      jp: "私が望む関係は？",
      zh: "我想要的这种关系是？",
      lt: "Kokių santykių noriu?",
    },
    options: {
      A: {
        text: {
          ko: "즐겁고 설레는 관계",
          en: "A fun and exciting relationship",
          jp: "楽しくてときめく関係",
          zh: "开心且心动的关系",
          lt: "Smagūs ir jaudinantys santykiai",
        },
        scores: { macaron: 4, gelato: 3 },
      },
      B: {
        text: {
          ko: "편하고 오래가는 관계",
          en: "A comfortable and long-lasting relationship",
          jp: "心地よくて長く続く関係",
          zh: "舒服且长久的关系",
          lt: "Patogūs ir ilgalaikiai santykiai",
        },
        scores: { bingsu: 4, pudding: 3 },
      },
      C: {
        text: {
          ko: "깊고 특별한 관계",
          en: "A deep and special relationship",
          jp: "深くて特別な関係",
          zh: "深厚且特别的关系",
          lt: "Gilūs ir ypatingi santykiai",
        },
        scores: { tiramisu: 4, brownie: 3 },
      },
      D: {
        text: {
          ko: "안정적이고 흔들리지 않는 관계",
          en: "A stable and unwavering relationship",
          jp: "安定的で揺るぎない関係",
          zh: "稳定且坚定的关系",
          lt: "Stabilūs ir tvirti santykiai",
        },
        scores: { creme_brulee: 4, egg_tart: 3 },
      },
    },
  },
];
