import type { Language } from "../../data/commonTranslations";

export type RelationshipType =
  | "direct_lover"
  | "wary_flirt"
  | "devoted_giver"
  | "emotion_hider"
  | "immersive_obsessive"
  | "stability_seeker"
  | "atmosphere_sensitive"
  | "deep_emotionalist";

export interface Question {
  id: number;
  text: Record<Language, string>;
  options: {
    text: Record<Language, string>;
    value: string;
  }[];
}
