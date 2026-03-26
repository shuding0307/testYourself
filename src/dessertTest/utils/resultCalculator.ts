import type { DessertType } from "../data/types";

export const calculateDessertResult = (answers: ("A" | "B" | "C" | "D")[]): DessertType => {
  const scores: Record<DessertType, number> = {
    macaron: 0,
    brownie: 0,
    pudding: 0,
    gelato: 0,
    baklava: 0,
    bingsu: 0,
    mochi: 0,
    creme_brulee: 0,
    egg_tart: 0,
    tiramisu: 0,
  };

  answers.forEach((ans, index) => {
    const qIdx = index + 1;

    if (ans === "A") {
      if ([1, 4, 7, 10].includes(qIdx)) scores.macaron += 3;
      if ([2, 5, 8].includes(qIdx)) scores.gelato += 3;
      if ([3, 6, 9].includes(qIdx)) scores.bingsu += 3;
    } else if (ans === "B") {
      if ([1, 4, 7, 10].includes(qIdx)) scores.pudding += 3;
      if ([2, 5, 8].includes(qIdx)) scores.mochi += 3;
      if ([3, 6].includes(qIdx)) scores.egg_tart += 3;
      if ([9].includes(qIdx)) scores.bingsu += 3;
    } else if (ans === "C") {
      if ([1, 4, 7, 10].includes(qIdx)) scores.tiramisu += 3;
      if ([2, 5, 8, 9].includes(qIdx)) scores.brownie += 3;
      if ([3, 6].includes(qIdx)) scores.baklava += 3;
    } else if (ans === "D") {
      if ([1, 4, 7, 10].includes(qIdx)) scores.creme_brulee += 3;
      if ([2, 5].includes(qIdx)) scores.egg_tart += 3;
      if ([3, 6, 9].includes(qIdx)) scores.baklava += 3;
      if ([8].includes(qIdx)) scores.mochi += 3;
    }
  });

  const priorities: DessertType[] = [
    "macaron", "brownie", "pudding", "gelato", "baklava",
    "bingsu", "mochi", "creme_brulee", "egg_tart", "tiramisu"
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
