import { create } from 'zustand';
import { type Language, translations, type TranslationType } from '../mentalAge/data/translations';

interface LanguageState {
  lang: Language;
  t: TranslationType;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: 'ko',
  t: translations['ko'],
  setLang: (lang: Language) => set({ lang, t: translations[lang] }),
}));
