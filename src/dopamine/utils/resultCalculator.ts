import { type DopamineQuestion } from '../data/questions';
import { type TranslationType } from '../../mentalAge/data/translations';

export interface DopamineResult {
  score: number;
  scoreText: string;
  resultTitle: string;
  desc: string;
  icon: string;
  indices: {
    digital: number;
    food: number;
    habit: number;
    emotion: number;
  };
  specialMsg: string;
}

export const calculateDopamineResult = (
  questions: DopamineQuestion[],
  scores: number[],
  t: TranslationType
): DopamineResult => {
  let rawTotalScore = 0;
  let maxPossibleScore = 0;

  const categoryScores = { digital: 0, food: 0, habit: 0, emotion: 0 };
  const categoryMax = { digital: 0, food: 0, habit: 0, emotion: 0 };

  questions.forEach((q, index) => {
    const score = scores[index]; // 1 ~ 5
    const weight = q.weight || 1.0;
    
    // 점수 계산 (1~5점을 0~4점 혹은 사용자 의도에 맞게 조정 가능하나, 
    // 여기서는 질문 개수와 합산 점수를 고려하여 1~5점 체계를 유지하되 
    // 사용자 요청 기준(최대 40점대)에 가깝게 정규화하거나 기준치를 조정합니다.)
    // 12문항 기준 12~60점. 사용자 요청은 10문항 40점 만점 기준인듯 함
    // 1.25로 나누어 12~60점을 9.6~48점으로 변환하여 기준 적용
    rawTotalScore += score * weight;
    maxPossibleScore += 5 * weight;

    categoryScores[q.category] += score * weight;
    categoryMax[q.category] += 5 * weight;
  });

  // 사용자 요청 점수 체계(최대 40점 수준)로 변환 (12~60 -> 0~40 느낌)
  const normalizedScore = ((rawTotalScore - questions.length) / (maxPossibleScore - questions.length)) * 40;

  const getIndex = (cat: keyof typeof categoryScores) => {
    if (categoryMax[cat] === 0) return 0;
    return Math.round((categoryScores[cat] / categoryMax[cat]) * 100);
  };

  let resultTitle = "";
  let desc = "";
  let icon = "";

  if (normalizedScore <= 15) {
    resultTitle = t.results.dopamineLow.title;
    desc = t.results.dopamineLow.desc;
    icon = "🌿";
  } else if (normalizedScore <= 25) {
    resultTitle = t.results.dopamineMid.title;
    desc = t.results.dopamineMid.desc;
    icon = "⚠️";
  } else if (normalizedScore <= 35) {
    resultTitle = t.results.dopamineHigh.title;
    desc = t.results.dopamineHigh.desc;
    icon = "🔥";
  } else {
    resultTitle = t.results.dopamineDanger.title;
    desc = t.results.dopamineDanger.desc;
    icon = "🚨";
  }

  let specialMsg = "";
  const digitalIdx = getIndex('digital');

  if (digitalIdx > 80) {
    specialMsg = t.specialMsgs.digitalDetox;
  } else if (normalizedScore > 30) {
    specialMsg = t.specialMsgs.meditation;
  }

  return {
    score: Math.round(normalizedScore),
    scoreText: `${Math.round(normalizedScore)}점`,
    resultTitle,
    desc,
    icon,
    indices: {
      digital: digitalIdx,
      food: getIndex('food'),
      habit: getIndex('habit'),
      emotion: getIndex('emotion')
    },
    specialMsg
  };
};
