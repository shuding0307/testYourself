export type StrengthCategory = 'drive' | 'empathy' | 'creativity' | 'analytical' | 'patience';

export interface StrengthOption {
  text: {
    ko: string;
    en: string;
  };
  scores: Partial<Record<StrengthCategory, number>>;
}

export interface StrengthQuestion {
  id: number;
  text: {
    ko: string;
    en: string;
  };
  options: {
    A: StrengthOption;
    B: StrengthOption;
    C: StrengthOption;
  };
}

export const strengthQuestions: StrengthQuestion[] = [
  {
    id: 1,
    text: { ko: "친구들이 메뉴를 못 정하고 있을 때, 당신은?", en: "When friends can't decide on a menu, you...?" },
    options: {
      A: { text: { ko: "답답해서 그냥 내가 정해버림", en: "Decide myself because it's frustrating" }, scores: { drive: 1 } },
      B: { text: { ko: "다 비교해보고 제일 괜찮은 선택 찾음", en: "Compare all options and find the best one" }, scores: { analytical: 1 } },
      C: { text: { ko: "다들 원하는 거 맞추다 보니 아무 데나 가게 됨", en: "Go anywhere while trying to match everyone's wish" }, scores: { empathy: 1 } }
    }
  },
  {
    id: 2,
    text: { ko: "갑자기 일정이 취소됐다. 지금 당신은?", en: "A schedule is suddenly canceled. What do you do?" },
    options: {
      A: { text: { ko: "이럴 때 뭐라도 해야지 하고 바로 움직임", en: "Move immediately to do something else" }, scores: { drive: 1 } },
      B: { text: { ko: "쉬는 것도 계획이라 생각하고 편하게 쉼", en: "Relax, thinking that resting is also a plan" }, scores: { patience: 1 } },
      C: { text: { ko: "평소 안 해본 거 하나 해볼까 싶어짐", en: "Feel like trying something I've never done before" }, scores: { creativity: 1 } }
    }
  },
  {
    id: 3,
    text: { ko: "새 물건을 샀다. 당신의 첫 행동은?", en: "You bought something new. What's your first action?" },
    options: {
      A: { text: { ko: "설명서부터 읽고 제대로 이해함", en: "Read the manual first to understand it properly" }, scores: { analytical: 1 } },
      B: { text: { ko: "일단 만져보면서 감으로 익힘", en: "Just start using it and learn by feel" }, scores: { drive: 1 } },
      C: { text: { ko: "이걸 더 재밌게 쓸 방법부터 생각함", en: "Think of ways to use it more fun" }, scores: { creativity: 1 } }
    }
  },
  {
    id: 4,
    text: { ko: "친구가 힘들다고 털어놓는다. 당신 반응은?", en: "A friend opens up about their struggles. Your reaction?" },
    options: {
      A: { text: { ko: "감정 이입돼서 같이 속상해짐", en: "Empathize and feel upset together" }, scores: { empathy: 1 } },
      B: { text: { ko: "왜 그런 상황이 생겼는지 분석하게 됨", en: "Start analyzing why that situation happened" }, scores: { analytical: 1 } },
      C: { text: { ko: "말 안 해도 옆에 있어주는 게 중요하다고 생각함", en: "Think staying by their side silently is important" }, scores: { patience: 1 } }
    }
  },
  {
    id: 5,
    text: { ko: "길을 잃었다. 당신은?", en: "You're lost. What do you do?" },
    options: {
      A: { text: { ko: "일단 움직이면서 해결함", en: "Start moving and solve it on the go" }, scores: { drive: 1 } },
      B: { text: { ko: "지도부터 켜고 상황 정리함", en: "Open the map first and assess the situation" }, scores: { analytical: 1 } },
      C: { text: { ko: "“이것도 재밌네” 하면서 돌아다님", en: "Roam around thinking 'This is also fun'" }, scores: { creativity: 1 } }
    }
  },
  {
    id: 6,
    text: { ko: "결심은 했는데… 현실의 당신은?", en: "You made a resolution... but in reality?" },
    options: {
      A: { text: { ko: "느리더라도 꾸준히는 하는 편", en: "Tend to do it steadily even if slowly" }, scores: { patience: 1 } },
      B: { text: { ko: "초반에 불태우고 점점 흐지부지됨", en: "Burn bright at first then fizzle out" }, scores: { drive: 1 } },
      C: { text: { ko: "질리면 새로운 방식으로 다시 시작함", en: "Start again in a new way when bored" }, scores: { creativity: 1 } }
    }
  },
  {
    id: 7,
    text: { ko: "분위기가 어색해졌다. 당신은?", en: "The atmosphere gets awkward. What do you do?" },
    options: {
      A: { text: { ko: "뭐라도 던져서 분위기 살림", en: "Say something to liven up the mood" }, scores: { drive: 1 } },
      B: { text: { ko: "사람들 상태부터 살핌", en: "Check people's status first" }, scores: { empathy: 1 } },
      C: { text: { ko: "조용히 흐름을 기다림", en: "Wait quietly for the flow" }, scores: { patience: 1 } }
    }
  },
  {
    id: 8,
    text: { ko: "쇼핑할 때 당신 스타일은?", en: "What's your shopping style?" },
    options: {
      A: { text: { ko: "꽂히면 그냥 삼", en: "Just buy it if I'm hooked" }, scores: { drive: 1 } },
      B: { text: { ko: "비교하다가 결국 제일 합리적인 선택", en: "Compare and eventually make the most rational choice" }, scores: { analytical: 1 } },
      C: { text: { ko: "나중까지 쓸지 계속 고민함", en: "Keep worrying about whether I'll use it later" }, scores: { patience: 1 } }
    }
  },
  {
    id: 9,
    text: { ko: "과제/일할 때 당신은?", en: "When working on a task/job...?" },
    options: {
      A: { text: { ko: "빨리 끝내는 게 중요", en: "Finishing fast is important" }, scores: { drive: 1 } },
      B: { text: { ko: "완벽하게 하는 게 중요", en: "Doing it perfectly is important" }, scores: { analytical: 1 } },
      C: { text: { ko: "남들과 다르게 하는 게 중요", en: "Doing it differently from others is important" }, scores: { creativity: 1 } }
    }
  },
  {
    id: 10,
    text: { ko: "당신이 멋있다고 생각하는 사람은?", en: "Who do you think is cool?" },
    options: {
      A: { text: { ko: "일단 실행하는 사람", en: "Someone who just executes first" }, scores: { drive: 1 } },
      B: { text: { ko: "사람을 잘 챙기는 사람", en: "Someone who takes good care of people" }, scores: { empathy: 1 } },
      C: { text: { ko: "끝까지 버티는 사람", en: "Someone who endures until the end" }, scores: { patience: 1 } }
    }
  }
];
