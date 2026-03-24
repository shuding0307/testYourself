import { create } from "zustand";
import {
  type Language,
  translations,
  type TranslationType,
} from "../mentalAge/data/translations";

interface LanguageState {
  lang: Language;
  transType: TranslationType;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: "ko",
  transType: translations["ko"],
  setLang: (lang: Language) => set({ lang, transType: translations[lang] }),
}));
