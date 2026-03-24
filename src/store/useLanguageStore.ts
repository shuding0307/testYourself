import { create } from "zustand";
import {
  type Language,
  commonTranslations,
  type CommonTranslationType,
} from "../data/commonTranslations";

interface LanguageState {
  lang: Language;
  common: CommonTranslationType;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: "ko",
  common: commonTranslations["ko"],
  setLang: (lang: Language) => set({ lang, common: commonTranslations[lang] }),
}));
