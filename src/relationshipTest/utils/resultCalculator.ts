import type { RelationshipType } from "../data/types";

export const calculateRelationshipResult = (
  answers: string[],
): RelationshipType => {
  const scores: Record<RelationshipType, number> = {
    direct_lover: 0,
    wary_flirt: 0,
    devoted_giver: 0,
    emotion_hider: 0,
    immersive_obsessive: 0,
    stability_seeker: 0,
    atmosphere_sensitive: 0,
    deep_emotionalist: 0,
  };

  answers.forEach((ans, index) => {
    const qIdx = index + 1;

    if (ans === "A") {
      // 주로 표현 및 적극성
      if ([1, 4, 7, 9].includes(qIdx)) scores.direct_lover += 3;
      if ([2, 5, 8, 10].includes(qIdx)) scores.atmosphere_sensitive += 3;
      if ([3, 6].includes(qIdx)) scores.direct_lover += 2;
    } else if (ans === "B") {
      // 주로 안정 및 배려
      if ([1, 3, 6, 10].includes(qIdx)) scores.devoted_giver += 3;
      if ([2, 4, 7, 9].includes(qIdx)) scores.stability_seeker += 3;
      if ([5, 8].includes(qIdx)) scores.stability_seeker += 2;
    } else if (ans === "C") {
      // 주로 몰입 및 깊은 감성
      if ([1, 4, 6, 8, 10].includes(qIdx)) scores.deep_emotionalist += 3;
      if ([2, 3, 5, 7, 9].includes(qIdx)) scores.immersive_obsessive += 3;
    } else if (ans === "D") {
      // 주로 신중 및 거리두기
      if ([1, 2, 5, 7, 10].includes(qIdx)) scores.wary_flirt += 3;
      if ([3, 4, 6, 8, 9].includes(qIdx)) scores.emotion_hider += 3;
    }
  });

  // 결과 산출
  const priorities: RelationshipType[] = [
    "direct_lover",
    "wary_flirt",
    "devoted_giver",
    "emotion_hider",
    "immersive_obsessive",
    "stability_seeker",
    "atmosphere_sensitive",
    "deep_emotionalist",
  ];

  let resultType = priorities[0];
  let maxScore = -1;

  priorities.forEach((type) => {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  });

  return resultType;
};
