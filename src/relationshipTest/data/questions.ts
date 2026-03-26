import type { Question } from "./types";

export const relationshipQuestions: Question[] = [
  {
    id: 1,
    text: {
      ko: "좋아하는 사람이 생겼을 때, 당신은?",
      en: "When you have a crush on someone, how do you behave?",
      jp: "好きな人ができたとき、あなたはどうしますか？",
      zh: "当你喜欢上某人时，你会怎么做？",
      lt: "Kai ką nors įsimylite, kaip elgiatės?",
    },
    options: [
      {
        text: {
          ko: "티 안 내려고 해도 결국 먼저 표현하게 됨",
          en: "Even if I try to hide it, I eventually express it first",
          jp: "隠そうとしても、結局自分から表現してしまう",
          zh: "即使想掩饰，最终还是会先表白",
          lt: "Net jei bandau tai paslėpti, galiausiai tai išreiškiu pirmas",
        },
        value: "A",
      },
      {
        text: {
          ko: "상대 반응을 계속 보면서 조심스럽게 다가감",
          en: "Approaching carefully while watching their reaction",
          jp: "相手の反応を見ながら慎重に近づく",
          zh: "一边观察对方的反应，一边谨慎接近",
          lt: "Atsargiai artėju stebėdamas jų reakciją",
        },
        value: "B",
      },
      {
        text: {
          ko: "확신 생길 때까지 혼자 마음 키움",
          en: "Keeping my feelings to myself until I'm certain",
          jp: "確信が持てるまで一人で想いを温める",
          zh: "在确定之前一直把感情藏在心里",
          lt: "Slepiu savo jausmus, kol būnu tikras",
        },
        value: "C",
      },
      {
        text: {
          ko: "바로 호감있음을 표현함",
          en: "Expressing my feelings immediately",
          jp: "すぐに好意を表現する",
          zh: "立刻表达好感",
          lt: "Iškart išreiškiu savo jausmus",
        },
        value: "D",
      },
    ],
  },
  {
    id: 2,
    text: {
      ko: "연락 스타일은?",
      en: "What is your texting style?",
      jp: "連絡のスタイルは？",
      zh: "你的联系风格是？",
      lt: "Koks jūsų susirašinėjimo stilius?",
    },
    options: [
      {
        text: {
          ko: "하고 싶을 때 바로 함 (답장 속도 중요)",
          en: "Text whenever I want (reply speed matters)",
          jp: "したいときにすぐする（返信の早さが大事）",
          zh: "想发就发（回复速度很重要）",
          lt: "Rašau, kai tik noriu (atsakymo greitis svarbus)",
        },
        value: "A",
      },
      {
        text: {
          ko: "상대 속도 맞추려고 노력함",
          en: "Trying to match the other person's pace",
          jp: "相手のペースに合わせようと努力する",
          zh: "努力配合对方的速度",
          lt: "Stengiuosi prisitaikyti prie kito asmens tempo",
        },
        value: "B",
      },
      {
        text: {
          ko: "너무 자주 하면 부담될까 봐 조절함",
          en: "Adjusting to avoid overwhelming them",
          jp: "頻繁すぎると負担になるかと思って調節する",
          zh: "担心太频繁会给对方压力而进行调整",
          lt: "Reguliuoju, kad jų neperkrautų",
        },
        value: "C",
      },
      {
        text: {
          ko: "뭐라고 보낼지 고민하다 답장이 늦어지는 편임",
          en: "Reply late because I worry about what to say",
          jp: "何と送るか悩んで返信が遅れがち",
          zh: "纠结发什么内容导致回复变慢",
          lt: "Vėluoju atsakyti, nes suku galvą, ką pasakyti",
        },
        value: "D",
      },
    ],
  },
  {
    id: 3,
    text: {
      ko: "상대가 연락이 뜸해졌을 때",
      en: "When the other person texts less frequently",
      jp: "相手からの連絡が少なくなったとき",
      zh: "当对方联系变少时",
      lt: "Kai kitas asmuo rašo rečiau",
    },
    options: [
      {
        text: {
          ko: "이유를 바로 물어봄",
          en: "Asking for the reason immediately",
          jp: "理由をすぐに聞く",
          zh: "立刻询问原因",
          lt: "Iškart klausiu priežasties",
        },
        value: "A",
      },
      {
        text: {
          ko: "나도 템포를 맞으면서 상황 지켜봄",
          en: "Watching the situation while matching their pace",
          jp: "自分もペースを合わせて様子を見る",
          zh: "我也配合对方的节奏观察情况",
          lt: "Stebiu situaciją prisitaikydamas prie jų tempo",
        },
        value: "B",
      },
      {
        text: {
          ko: "혼자 의미 부여하면서 고민함",
          en: "Worrying and overanalyzing by myself",
          jp: "一人で意味を考えて悩む",
          zh: "一个人在那儿瞎想和纠结",
          lt: "Vienas suku galvą ir viską analizuoju",
        },
        value: "C",
      },
      {
        text: {
          ko: "크게 신경 쓰지 않고 내 할 일 함",
          en: "Don't care much and just do my own thing",
          jp: "あまり気にせず自分のことをする",
          zh: "不太在意，照常做自己的事",
          lt: "Man tai nelabai rūpi, tiesiog užsiimu savo reikalais",
        },
        value: "D",
      },
    ],
  },
  {
    id: 4,
    text: {
      ko: "연애에서 가장 중요한 건?",
      en: "What's the most important thing in a relationship?",
      jp: "恋愛で一番大切なことは？",
      zh: "恋爱中最重要的事是？",
      lt: "Kas svarbiausia santykiuose?",
    },
    options: [
      {
        text: {
          ko: "감정 표현과 솔직함",
          en: "Expression of feelings and honesty",
          jp: "感情表現と素直さ",
          zh: "感情表达和坦诚",
          lt: "Jausmų išraiška ir nuoširdumas",
        },
        value: "A",
      },
      {
        text: {
          ko: "안정감과 신뢰",
          en: "Sense of stability and trust",
          jp: "安定感と信頼",
          zh: "安定感和信任",
          lt: "Stabilumo jausmas ir pasitikėjimas",
        },
        value: "B",
      },
      {
        text: {
          ko: "서로에게 주는 감정의 깊이",
          en: "The depth of emotions shared",
          jp: "お互いに与える感情の深さ",
          zh: "给彼此的情感深度",
          lt: "Dalijamų emocijų gylis",
        },
        value: "C",
      },
      {
        text: {
          ko: "서로의 삶을 존중하는 적당한 거리감",
          en: "Maintaining distance to respect each other's life",
          jp: "お互いの生活を尊重する適度な距離感",
          zh: "尊重彼此生活的适当距离感",
          lt: "Atstumo išlaikymas gerbiant vienas kito gyvenimą",
        },
        value: "D",
      },
    ],
  },
  {
    id: 5,
    text: {
      ko: "다툼이 생겼을 때 당신은?",
      en: "When an argument arises, what do you do?",
      jp: "喧嘩になったとき、あなたはどうしますか？",
      zh: "吵架时，你会？",
      lt: "Kai kyla ginčas, ką darote?",
    },
    options: [
      {
        text: {
          ko: "바로 풀고 싶어서 대화 시도함",
          en: "Try to talk immediately to resolve it",
          jp: "すぐに解決したくて話し合いを試みる",
          zh: "想立刻解决而尝试对话",
          lt: "Bandau iškart pasikalbėti, kad viską išspręstume",
        },
        value: "A",
      },
      {
        text: {
          ko: "서로 정리할 시간 갖는 게 필요함",
          en: "Need some time to cool down and process",
          jp: "お互いに整理する時間が必要だと思う",
          zh: "需要彼此冷静整理的时间",
          lt: "Reikia šiek tiek laiko atvėsti ir viską apgalvoti",
        },
        value: "B",
      },
      {
        text: {
          ko: "혼자 생각 많아지면서 말 줄어듦",
          en: "Become quiet while thinking deeply alone",
          jp: "一人で考え込んで言葉が少なくなる",
          zh: "陷入沉思而话变少",
          lt: "Tyliu ir giliai mąstau vienas",
        },
        value: "C",
      },
      {
        text: {
          ko: "감정이 정리될 때까지 혼자 시간을 갖는다",
          en: "Spending time alone until emotions are settled",
          jp: "感情が整理されるまで一人の時間を持つ",
          zh: "在情绪平复前保持独处",
          lt: "Leidžiu laiką vienas, kol nurimsta emocijos",
        },
        value: "D",
      },
    ],
  },
  {
    id: 6,
    text: {
      ko: "상대가 힘들어할 때",
      en: "When the other person is having a hard time",
      jp: "相手が辛い思いをしているとき",
      zh: "当对方感到疲惫时",
      lt: "Kai kitam asmeniui sunku",
    },
    options: [
      {
        text: {
          ko: "적극적으로 해결하려고 함",
          en: "Trying to actively solve the problem",
          jp: "積極的に解決しようとする",
          zh: "积极尝试解决问题",
          lt: "Aktyviai bandau išspręsti problemą",
        },
        value: "A",
      },
      {
        text: {
          ko: "옆에서 안정적으로 지켜줌",
          en: "Staying by their side to provide stability",
          jp: "隣で安定して見守る",
          zh: "在身边安稳地陪伴",
          lt: "Būnu šalia, kad suteikčiau stabilumą",
        },
        value: "B",
      },
      {
        text: {
          ko: "감정적으로 깊이 공감함",
          en: "Empathizing deeply with their feelings",
          jp: "感情的に深く共感する",
          zh: "给予深切的情感共鸣",
          lt: "Giliai užjaučiu jų jausmus",
        },
        value: "C",
      },
      {
        text: {
          ko: "어떻게 도와야 할지 고민하다 조심스럽게 다가간다",
          en: "Approaching carefully after thinking about how to help",
          jp: "どう助けるか悩んでから慎重に近づく",
          zh: "纠结如何帮忙后谨慎地接近",
          lt: "Atsargiai prieinu apgalvojęs, kaip padėti",
        },
        value: "D",
      },
    ],
  },
  {
    id: 7,
    text: {
      ko: "연애 초반 당신의 모습은?",
      en: "What are you like at the beginning of a relationship?",
      jp: "恋愛初期のあなたの姿は？",
      zh: "恋爱初期的你是怎样的？",
      lt: "Koks esate santykių pradžioje?",
    },
    options: [
      {
        text: {
          ko: "설레는 감정 그대로 적극 표현",
          en: "Actively expressing exciting feelings",
          jp: "ときめく感情をそのまま積極的に表現する",
          zh: "直白地表达心动的感情",
          lt: "Aktyviai išreiškiu džiugius jausmus",
        },
        value: "A",
      },
      {
        text: {
          ko: "천천히 거리 조절하면서 알아감",
          en: "Getting to know them while adjusting distance slowly",
          jp: "ゆっくり距離を調節しながら知っていく",
          zh: "慢慢调整距离并了解对方",
          lt: "Po truputį pažįstu juos reguliuodamas atstumą",
        },
        value: "B",
      },
      {
        text: {
          ko: "감정은 크지만 표현은 조심스러움",
          en: "Deep emotions but cautious expression",
          jp: "感情は大きいが表現は慎重になる",
          zh: "感情浓烈但表达谨慎",
          lt: "Gilios emocijos, bet atsargi išraiška",
        },
        value: "C",
      },
      {
        text: {
          ko: "상대를 충분히 파악하기 전까지는 신중하게 행동한다",
          en: "Behaving cautiously until I know them well enough",
          jp: "相手を十分に把握するまで慎중に行動する",
          zh: "在充分了解对方前保持谨慎",
          lt: "Elgiuosi atsargiai, kol pakankamai gerai juos pažįstu",
        },
        value: "D",
      },
    ],
  },
  {
    id: 8,
    text: {
      ko: "질투 상황에서 당신은?",
      en: "How do you react in a jealous situation?",
      jp: "嫉妬する状況で、あなたはどうしますか？",
      zh: "吃醋时，你会？",
      lt: "Kaip reaguojate pavydo situacijoje?",
    },
    options: [
      {
        text: {
          ko: "티 내고 솔직하게 말함",
          en: "Showing it and speaking honestly",
          jp: "顔に出して素直に言う",
          zh: "表现出来并坦诚沟通",
          lt: "Parodau tai ir kalbu nuoširdžiai",
        },
        value: "A",
      },
      {
        text: {
          ko: "티 안 내려고 하지만 신경 쓰임",
          en: "Trying not to show it but still bothered",
          jp: "出さないようにするが気になってしまう",
          zh: "虽然想掩饰但还是在意",
          lt: "Bandau nerodyti, bet vis tiek graužiuosi",
        },
        value: "B",
      },
      {
        text: {
          ko: "겉으로는 괜찮은 척, 속으로는 계속 생각남",
          en: "Pretending to be fine but thinking about it internally",
          jp: "表面上は平気なふり、心の中ではずっと考えている",
          zh: "表面装没事，内心一直在意",
          lt: "Apsimetu, kad viskas gerai, bet viduje apie tai galvoju",
        },
        value: "C",
      },
      {
        text: {
          ko: "크게 질투를 느끼지 않는 편이다",
          en: "I don't usually feel much jealousy",
          jp: "あまり嫉妬を感じない方だ",
          zh: "不太容易感到嫉妒",
          lt: "Paprastai nejaučiu didelio pavydo",
        },
        value: "D",
      },
    ],
  },
  {
    id: 9,
    text: {
      ko: "연애가 안정기에 들어가면",
      en: "When the relationship reaches a stable phase",
      jp: "恋愛が安定期に入ると",
      zh: "当恋爱进入稳定期",
      lt: "Kai santykiai tampa stabilūs",
    },
    options: [
      {
        text: {
          ko: "여전히 표현 중요하다고 생각",
          en: "Still think expression is important",
          jp: "相変わらず表現が大切だと思う",
          zh: "依然认为表达很重要",
          lt: "Vis tiek manau, kad jausmų išraiška svarbi",
        },
        value: "A",
      },
      {
        text: {
          ko: "편안함이 더 중요해짐",
          en: "Comfort becomes more important",
          jp: "心地よさがより大切になる",
          zh: "感到舒适变得更重要",
          lt: "Komfortas tampa svarbesnis",
        },
        value: "B",
      },
      {
        text: {
          ko: "감정 깊어지면서 의존도도 올라감",
          en: "Emotions deepen and dependency increases",
          jp: "感情が深まるとともに依存度も上がる",
          zh: "随着感情加深，依赖度也随之增加",
          lt: "Emocijos gilėja, o priklausomybė didėja",
        },
        value: "C",
      },
      {
        text: {
          ko: "각자의 시간을 존중하는 게 더 중요해진다",
          en: "Respecting each other's time becomes more important",
          jp: "お互いの時間を尊重することがより大切になる",
          zh: "尊重彼此的时间变得更重要",
          lt: "Svarbiau tampa gerbti vienas kito laiką",
        },
        value: "D",
      },
    ],
  },
  {
    id: 10,
    text: {
      ko: "이별을 마주할 때 당신은?",
      en: "How do you face a breakup?",
      jp: "別れに向き合うとき、あなたはどうしますか？",
      zh: "面对分手，你会？",
      lt: "Kaip pasitinkate išsiskyrimą?",
    },
    options: [
      {
        text: {
          ko: "힘들어도 빨리 정리하려고 함",
          en: "Trying to move on quickly despite the pain",
          jp: "辛くても早く整理しようとする",
          zh: "虽然痛苦但想尽快走出来",
          lt: "Bandau greitai judėti pirmyn, nepaisant skausmo",
        },
        value: "A",
      },
      {
        text: {
          ko: "이유를 이해하려고 노력함",
          en: "Trying to understand the reason",
          jp: "理由を理解しようと努力する",
          zh: "尝试去理解原因",
          lt: "Bandau suprasti priežastį",
        },
        value: "B",
      },
      {
        text: {
          ko: "오래 붙잡고 감정 정리 힘들어함",
          en: "Hold on for a long time and struggle with emotions",
          jp: "長く引きずって感情の整理に苦労する",
          zh: "纠缠很久，难以平复心情",
          lt: "Ilgai nepaleidžiu ir kovoju su emocijomis",
        },
        value: "C",
      },
      {
        text: {
          ko: "겉으로는 괜찮은 척하며 담담하게 넘기려 한다",
          en: "Pretending to be fine and trying to move on calmly",
          jp: "表面上は平気なふりをして淡々とやり過ごそうとする",
          zh: "表面装作没事，平静地面对",
          lt: "Apsimetu, kad viskas gerai, ir bandau ramiai judėti pirmyn",
        },
        value: "D",
      },
    ],
  },
];
