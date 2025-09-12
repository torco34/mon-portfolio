// 📂 src/i18n/translations.ts
export const translations = {
  es: {
    home: "Inicio",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
    about: "Sobre mí",
    education: "Educación", // 👈 agregado
  },
  en: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    about: "About me",
    education: "Education", // 👈 agregado
  },
} as const;

export type Lang = keyof typeof translations; // "es" | "en"
export type TranslationKey = keyof (typeof translations)["es"];
