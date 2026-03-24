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
  worstCategory: 'digital' | 'food' | 'habit' | 'emotion';
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

  const digitalIdx = getIndex('digital');
  const foodIdx = getIndex('food');
  const habitIdx = getIndex('habit');
  const emotionIdx = getIndex('emotion');

  // 가장 점수가 높은(취약한) 카테고리 찾기
  const indices = {
    digital: digitalIdx,
    food: foodIdx,
    habit: habitIdx,
    emotion: emotionIdx
  };

  const worstCategory = Object.entries(indices).reduce((a, b) => a[1] > b[1] ? a : b)[0] as 'digital' | 'food' | 'habit' | 'emotion';

  let resultTitle = "";
  let desc = "";
  let icon = "";
  let brainStatus = "";
  
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
    icon = "💀";
    brainStatus = t.brainStatus.burnt;
  }

  let specialMsg = "";
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
    indices,
    worstCategory,
    specialMsg
  };
};
