import { type DopamineQuestion } from '../data/questions';
import { type TranslationType } from '../../mentalAge/data/translations';

export interface DopamineResult {
  score: number;
  scoreText: string;
  resultTitle: string;
  desc: string;
  icon: string;
  brainTemp: number;
  brainStatus: string;
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
    
    rawTotalScore += score * weight;
    maxPossibleScore += 5 * weight;

    categoryScores[q.category] += score * weight;
    categoryMax[q.category] += 5 * weight;
  });

  const normalizedScore = ((rawTotalScore - questions.length) / (maxPossibleScore - questions.length)) * 40;

  const getIndex = (cat: keyof typeof categoryScores) => {
    if (categoryMax[cat] === 0) return 0;
    return Math.round((categoryScores[cat] / categoryMax[cat]) * 100);
  };

  let resultTitle = "";
  let desc = "";
  let icon = "";
  let brainStatus = "";
  // 뇌의 온도 계산: 36.5도 기본 + (정규화된 점수 * 계수)
  // 0점일 때 36.5도, 40점일 때 약 90~100도 느낌
  const brainTemp = Number((36.5 + (normalizedScore * 1.5)).toFixed(1));

  if (normalizedScore <= 15) {
    resultTitle = t.results.dopamineLow.title;
    desc = t.results.dopamineLow.desc;
    icon = "🌿";
    brainStatus = t.brainStatus.cool;
  } else if (normalizedScore <= 25) {
    resultTitle = t.results.dopamineMid.title;
    desc = t.results.dopamineMid.desc;
    icon = "🌤️";
    brainStatus = t.brainStatus.warm;
  } else if (normalizedScore <= 35) {
    resultTitle = t.results.dopamineHigh.title;
    desc = t.results.dopamineHigh.desc;
    icon = "🔥";
    brainStatus = t.brainStatus.hot;
  } else {
    resultTitle = t.results.dopamineDanger.title;
    desc = t.results.dopamineDanger.desc;
    icon = "💀"; // 타버린 뇌 느낌
    brainStatus = t.brainStatus.burnt;
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
    brainTemp,
    brainStatus,
    indices: {
      digital: digitalIdx,
      food: getIndex('food'),
      habit: getIndex('habit'),
      emotion: getIndex('emotion')
    },
    specialMsg
  };
};
