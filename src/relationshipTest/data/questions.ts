import type { Question } from "./types";

export const relationshipQuestions: Question[] = [
  {
    id: 1,
    text: "좋아하는 사람이 생겼을 때, 당신은?",
    options: [
      { text: "티 안 내려고 해도 결국 먼저 표현하게 됨", value: "A" },
      { text: "상대 반응을 계속 보면서 조심스럽게 다가감", value: "B" },
      { text: "확신 생길 때까지 혼자 마음 키움", value: "C" },
    ],
  },
  {
    id: 2,
    text: "연락 스타일은?",
    options: [
      { text: "하고 싶을 때 바로 함 (답장 속도 중요)", value: "A" },
      { text: "상대 속도 맞추려고 노력함", value: "B" },
      { text: "너무 자주 하면 부담될까 봐 조절함", value: "C" },
    ],
  },
  {
    id: 3,
    text: "상대가 연락이 뜸해졌을 때",
    options: [
      { text: "이유를 바로 물어봄", value: "A" },
      { text: "나도 템포를 맞으면서 상황 지켜봄", value: "B" },
      { text: "혼자 의미 부여하면서 고민함", value: "C" },
    ],
  },
  {
    id: 4,
    text: "연애에서 가장 중요한 건?",
    options: [
      { text: "감정 표현과 솔직함", value: "A" },
      { text: "안정감과 신뢰", value: "B" },
      { text: "서로에게 주는 감정의 깊이", value: "C" },
    ],
  },
  {
    id: 5,
    text: "다툼이 생겼을 때 당신은?",
    options: [
      { text: "바로 풀고 싶어서 대화 시도함", value: "A" },
      { text: "서로 정리할 시간 갖는 게 필요함", value: "B" },
      { text: "혼자 생각 많아지면서 말 줄어듦", value: "C" },
    ],
  },
  {
    id: 6,
    text: "상대가 힘들어할 때",
    options: [
      { text: "적극적으로 해결하려고 함", value: "A" },
      { text: "옆에서 안정적으로 지켜줌", value: "B" },
      { text: "감정적으로 깊이 공감함", value: "C" },
    ],
  },
  {
    id: 7,
    text: "연애 초반 당신의 모습은?",
    options: [
      { text: "설레는 감정 그대로 적극 표현", value: "A" },
      { text: "천천히 거리 조절하면서 알아감", value: "B" },
      { text: "감정은 크지만 표현은 조심스러움", value: "C" },
    ],
  },
  {
    id: 8,
    text: "질투 상황에서 당신은?",
    options: [
      { text: "티 내고 솔직하게 말함", value: "A" },
      { text: "티 안 내려고 하지만 신경 쓰임", value: "B" },
      { text: "겉으로는 괜찮은 척, 속으로는 계속 생각남", value: "C" },
    ],
  },
  {
    id: 9,
    text: "연애가 안정기에 들어가면",
    options: [
      { text: "여전히 표현 중요하다고 생각", value: "A" },
      { text: "편안함이 더 중요해짐", value: "B" },
      { text: "감정 깊어지면서 의존도도 올라감", value: "C" },
    ],
  },
  {
    id: 10,
    text: "이별을 마주할 때 당신은?",
    options: [
      { text: "힘들어도 빨리 정리하려고 함", value: "A" },
      { text: "이유를 이해하려고 노력함", value: "B" },
      { text: "오래 붙잡고 감정 정리 힘들어함", value: "C" },
    ],
  },
];
