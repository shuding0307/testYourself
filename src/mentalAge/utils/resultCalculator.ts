import type { Question } from '../data/questions';

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
  scores: number[]
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
    resultTitle = "[초딩 멘탈]";
    desc = "호기심 천국, 자기중심적이지만 순수한 영혼.";
    icon = "🐥";
  } else if (scorePercentage <= 55) {
    mentalAge = Math.floor(((scorePercentage - 25) / 30) * (19 - 14) + 14);
    resultTitle = "[질풍노도 중고딩]";
    desc = "자의식이 강하고 감정 기복이 있지만 에너지가 넘침.";
    icon = "🔥";
  } else if (scorePercentage <= 85) {
    mentalAge = Math.floor(((scorePercentage - 55) / 30) * (39 - 20) + 20);
    resultTitle = "[갓생 사는 어른이]";
    desc = "사회적 예의를 갖췄고 적절히 타협할 줄 아는 상태.";
    icon = "☕";
  } else {
    mentalAge = Math.floor(((scorePercentage - 85) / 15) * (65 - 40) + 40);
    resultTitle = "[인생 2회차 선비]";
    desc = "해탈의 경지. 어떤 상황에서도 흔들리지 않는 편안함.";
    icon = "🍵";
  }

  let specialMsg = "";
  if (childlikeIdx > 70) {
    specialMsg = "✨ 몸은 어른이지만 마음만은 여전히 순수한 동심을 간직하고 계시네요!";
  } else if (stubbornIdx > 70) {
    specialMsg = "⚠️ 나이에 비해 생각이 조금 딱딱하게 굳어있을 수 있으니 유연한 사고가 필요해요.";
  } else if (socialIdx > 80) {
    specialMsg = "🤝 타인에 대한 배려와 사회적 성숙도가 매우 높으신 멋진 분이시군요.";
  }

  const ageDiff = mentalAge - actualAge;
  let comparisonMsg = "";
  if (Math.abs(ageDiff) <= 2) {
    comparisonMsg = "실제 나이와 정신 연령이 아주 비슷하시네요! 건강한 밸런스를 유지하고 있습니다.";
  } else if (ageDiff > 0) {
    comparisonMsg = `실제 나이보다 ${ageDiff}살 정도 더 깊고 성숙한 생각을 가지고 계시군요.`;
  } else {
    comparisonMsg = `실제 나이보다 ${Math.abs(ageDiff)}살 정도 더 젊고 유연한 감각을 유지하고 계시네요!`;
  }

  return {
    mentalAge: `${mentalAge}세`,
    resultTitle,
    desc,
    comparisonMsg,
    icon,
    indices: { social: socialIdx, childlike: childlikeIdx, stubborn: stubbornIdx },
    specialMsg,
  };
};
