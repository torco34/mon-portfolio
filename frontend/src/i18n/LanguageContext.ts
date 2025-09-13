// 📂 src/i18n/translations.ts
import { header } from "./header";
import { home } from "./home";
import { skills } from "./skills";

export const translations = {
  es: {
    header: header.es,
    home: home.es,
    skills: skills.es,
  },
  en: {
    header: header.en,
    home: home.en,
    skills: skills.en,
  },
} as const;

export type Lang = keyof typeof translations;

// ✅ Traducciones con autocompletado seguro
export type TranslationKey =
  | `header.${keyof (typeof header)["es"]}`
  | `home.${keyof (typeof home)["es"]}`
  | `skills.${keyof (typeof skills)["es"]}`;
