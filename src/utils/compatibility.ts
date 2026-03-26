export type Trait = {
  expressiveness: number;
  stability: number;
  depth: number;
  independence: number;
};

export const calculateCompatibilityScore = (t1: Trait, t2: Trait) => {
  let score = 0;
  // 1. 감정 깊이 (비슷할수록 좋음)
  score += 5 - Math.abs(t1.depth - t2.depth);
  // 2. 안정성 (비슷할수록 좋음)
  score += 5 - Math.abs(t1.stability - t2.stability);
  // 3. 표현력 (차이 있으면 오히려 좋음 - 보완)
  score += Math.abs(t1.expressiveness - t2.expressiveness);
  // 4. 독립성 (너무 차이나면 안 좋음)
  score += 5 - Math.abs(t1.independence - t2.independence);

  // 총점 20점 만점을 백분율로 환산 (최소 40% 보정)
  const percentage = Math.floor((score / 20) * 100);
  return Math.max(percentage, 40);
};

export const getCompatibilityStatus = (score: number) => {
  if (score >= 90) return { text: '💘 환상의 궁합', color: '#ff4d7d' };
  if (score >= 75) return { text: '😊 안정적인 관계', color: '#4dabf7' };
  if (score >= 60) return { text: '😐 노력이 필요한 관계', color: '#fab005' };
  return { text: '💥 맞지 않는 스타일', color: '#fa5252' };
};
