// 📂 src/i18n/translations.ts

// Diccionario de traducciones
export const translations = {
  es: {
    home: "Inicio",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
    about: "Sobre mí",
  },
  en: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    about: "About me",
  },
} as const; // 👈 importante para que TypeScript infiera bien las claves

// Tipo para los idiomas disponibles
export type Lang = keyof typeof translations; // "es" | "en"

// Tipo para las claves de traducción (home | projects | skills...)
export type TranslationKey = keyof (typeof translations)["es"];
