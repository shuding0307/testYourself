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
    const questionIndex = index + 1;

    if (ans === "A") {
      scores.direct_lover += 2;
      if ([1, 4, 7, 9].includes(questionIndex)) scores.atmosphere_sensitive += 1;
      if ([2, 3, 5, 6, 8, 10].includes(questionIndex)) scores.direct_lover += 1;
    } else if (ans === "B") {
      scores.wary_flirt += 2;
      scores.stability_seeker += 1;
      if ([2, 6, 7, 10].includes(questionIndex)) scores.devoted_giver += 1;
    } else if (ans === "C") {
      scores.deep_emotionalist += 2;
      scores.immersive_obsessive += 1;
      if ([4, 5, 8, 9].includes(questionIndex)) scores.immersive_obsessive += 1;
    } else if (ans === "D") {
      scores.emotion_hider += 2;
      if ([3, 4, 8, 9].includes(questionIndex)) scores.stability_seeker += 1;
      if ([2, 5, 6, 7, 10].includes(questionIndex)) scores.emotion_hider += 1;
      if (questionIndex === 1) scores.direct_lover += 1;
    }
  });

  // Find the type with the highest score
  let maxScore = -1;
  let resultType: RelationshipType = "stability_seeker";

  for (const type in scores) {
    const relationshipType = type as RelationshipType;
    if (scores[relationshipType] > maxScore) {
      maxScore = scores[relationshipType];
      resultType = relationshipType;
    } else if (scores[relationshipType] === maxScore) {
      // Tie-breaking: priority order (arbitrary but consistent)
      const priorities: RelationshipType[] = [
        "direct_lover",
        "deep_emotionalist",
        "emotion_hider",
        "stability_seeker",
        "immersive_obsessive",
        "devoted_giver",
        "wary_flirt",
        "atmosphere_sensitive",
      ];
      if (priorities.indexOf(relationshipType) < priorities.indexOf(resultType)) {
        resultType = relationshipType;
      }
    }
  }

  return resultType;
};
