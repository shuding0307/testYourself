import type { Question } from '../data/questions';
import { translations } from '../data/translations';

type TranslationType = typeof translations['ko'];

export interface TestResult {
  mentalAge: string;
  resultTitle: string;
  desc: string;
  comparisonMsg: string;
  icon: string;
  indices: {
    social: number;
    childlike: number;
    stubborn: number;
  };
  specialMsg: string;
}

export const calculateMentalAgeResult = (
  actualAge: number,
  activeQuestions: Question[],
  scores: number[],
  t: TranslationType
): TestResult => {
  let totalScore = 0;
  let maxPossibleScore = 0;
  let minPossibleScore = 0;

  const categoryScores = { social: 0, childlike: 0, stubborn: 0, general: 0 };
  const categoryMax = { social: 0, childlike: 0, stubborn: 0, general: 0 };

  activeQuestions.forEach((q, index) => {
    const score = scores[index];
    const weight = q.weight || 1.0;
    const adjustedScore = q.direction === "+" ? score : 6 - score;

    const weightedScore = adjustedScore * weight;
    totalScore += weightedScore;
    maxPossibleScore += 5 * weight;
    minPossibleScore += 1 * weight;

    categoryScores[q.category] += weightedScore;
    categoryMax[q.category] += 5 * weight;
  });

  const scorePercentage =
    ((totalScore - minPossibleScore) / (maxPossibleScore - minPossibleScore)) * 100;

  const getIndex = (cat: 'social' | 'childlike' | 'stubborn') => {
    if (categoryMax[cat] === 0) return 0;
    return Math.round((categoryScores[cat] / categoryMax[cat]) * 100);
  };

  const socialIdx = getIndex('social');
  const childlikeIdx = getIndex('childlike');
  const stubbornIdx = getIndex('stubborn');

  let mentalAge = 0;
  let resultTitle = "";
  let desc = "";
  let icon = "";

  if (scorePercentage <= 25) {
    mentalAge = Math.floor((scorePercentage / 25) * (13 - 8) + 8);
    resultTitle = t.results.child.title;
    desc = t.results.child.desc;
    icon = "🐥";
  } else if (scorePercentage <= 55) {
    mentalAge = Math.floor(((scorePercentage - 25) / 30) * (19 - 14) + 14);
    resultTitle = t.results.teen.title;
    desc = t.results.teen.desc;
    icon = "🔥";
  } else if (scorePercentage <= 85) {
    mentalAge = Math.floor(((scorePercentage - 55) / 30) * (39 - 20) + 20);
    resultTitle = t.results.adult.title;
    desc = t.results.adult.desc;
    icon = "☕";
  } else {
    mentalAge = Math.floor(((scorePercentage - 85) / 15) * (65 - 40) + 40);
    resultTitle = t.results.sage.title;
    desc = t.results.sage.desc;
    icon = "🍵";
  }

  let specialMsg = "";
  if (childlikeIdx > 70) {
    specialMsg = t.specialMsgs.childlike;
  } else if (stubbornIdx > 70) {
    specialMsg = t.specialMsgs.stubborn;
  } else if (socialIdx > 80) {
    specialMsg = t.specialMsgs.social;
  }

  const ageDiff = mentalAge - actualAge;
  let comparisonMsg = "";
  if (Math.abs(ageDiff) <= 2) {
    comparisonMsg = t.comparisonSimilar;
  } else if (ageDiff > 0) {
    comparisonMsg = t.comparisonOlder.replace("{diff}", String(ageDiff));
  } else {
    comparisonMsg = t.comparisonYounger.replace("{diff}", String(Math.abs(ageDiff)));
  }

  return {
    mentalAge: `${mentalAge}${t.ageUnit}`,
    resultTitle,
    desc,
    comparisonMsg,
    icon,
    indices: { social: socialIdx, childlike: childlikeIdx, stubborn: stubbornIdx },
    specialMsg,
  };
};
