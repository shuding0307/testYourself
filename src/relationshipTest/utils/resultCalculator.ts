import type { RelationshipType } from "../data/types";

export const calculateRelationshipResult = (
  answers: string[],
): RelationshipType => {
  const counts = { A: 0, B: 0, C: 0 };
  answers.forEach((ans) => {
    if (ans === "A") counts.A++;
    if (ans === "B") counts.B++;
    if (ans === "C") counts.C++;
  });

  // Simple weighted logic to differentiate between 8 types based on A, B, C counts
  // A: Direct, Active, Expressive
  // B: Observant, Stable, Strategic
  // C: Deep, Internal, Sensitive

  if (counts.A >= 7) return "direct_lover";
  if (counts.B >= 7) return "stability_seeker";
  if (counts.C >= 7) return "deep_emotionalist";

  if (counts.A >= 4 && counts.B >= 3) return "wary_flirt";
  if (counts.B >= 4 && counts.C >= 3) return "devoted_giver";
  if (counts.C >= 4 && counts.A >= 3) return "immersive_obsessive";
  if (counts.A >= 4 && counts.C >= 3) return "atmosphere_sensitive";

  // Default fallback based on highest count
  if (counts.A >= counts.B && counts.A >= counts.C) {
    return counts.B > counts.C ? "direct_lover" : "atmosphere_sensitive";
  }
  if (counts.B >= counts.A && counts.B >= counts.C) {
    return counts.C > counts.A ? "stability_seeker" : "wary_flirt";
  }
  return counts.A > counts.B ? "immersive_obsessive" : "emotion_hider";
};
