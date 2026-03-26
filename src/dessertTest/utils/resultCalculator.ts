import type { DessertType } from "../data/types";
import { dessertQuestions } from "../data/questions";

export const calculateDessertResult = (answers: ("A" | "B" | "C" | "D")[]) => {
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

  answers.forEach((answer, idx) => {
    const question = dessertQuestions[idx];
    const mapping = question.options[answer].scores;

    Object.entries(mapping).forEach(([dessert, score]) => {
      scores[dessert as DessertType] += score!;
    });
  });

  // Sort by score and return the highest
  const sortedResults = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sortedResults[0][0] as DessertType;
};
