import { type DopamineQuestion } from '../data/questions';
import { type TranslationType } from '../../mentalAge/data/translations';

export interface DopamineResult {
  score: number;
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
  let totalScore = 0;
  let maxPossibleScore = 0;

  const categoryScores = { digital: 0, food: 0, habit: 0, emotion: 0 };
  const categoryMax = { digital: 0, food: 0, habit: 0, emotion: 0 };

  questions.forEach((q, index) => {
    const score = scores[index]; // 1 ~ 5
    const weight = q.weight || 1.0;
    
    totalScore += score * weight;
    maxPossibleScore += 5 * weight;

    categoryScores[q.category] += score * weight;
    categoryMax[q.category] += 5 * weight;
  });

  const scorePercentage = (totalScore / maxPossibleScore) * 100;

  const getIndex = (cat: keyof typeof categoryScores) => {
    if (categoryMax[cat] === 0) return 0;
    return Math.round((categoryScores[cat] / categoryMax[cat]) * 100);
  };

  let resultTitle = "";
  let desc = "";
  let icon = "";

  if (scorePercentage <= 30) {
    resultTitle = t.results.dopamineLow.title;
    desc = t.results.dopamineLow.desc;
    icon = "🌿";
  } else if (scorePercentage <= 60) {
    resultTitle = t.results.dopamineMid.title;
    desc = t.results.dopamineMid.desc;
    icon = "⚠️";
  } else if (scorePercentage <= 85) {
    resultTitle = t.results.dopamineHigh.title;
    desc = t.results.dopamineHigh.desc;
    icon = "🌪️";
  } else {
    resultTitle = t.results.dopamineDanger.title;
    desc = t.results.dopamineDanger.desc;
    icon = "🚨";
  }

  let specialMsg = "";
  const digitalIdx = getIndex('digital');
  const emotionIdx = getIndex('emotion');

  if (digitalIdx > 80) {
    specialMsg = t.specialMsgs.digitalDetox;
  } else if (scorePercentage > 70) {
    specialMsg = t.specialMsgs.meditation;
  }

  return {
    score: Math.round(scorePercentage),
    resultTitle,
    desc,
    icon,
    indices: {
      digital: digitalIdx,
      food: getIndex('food'),
      habit: getIndex('habit'),
      emotion: emotionIdx
    },
    specialMsg
  };
};
