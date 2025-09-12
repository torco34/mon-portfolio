/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react"; // 👈 importar como type
import { createContext, useContext, useState } from "react";

import type { Lang, TranslationKey } from "../i18n/LanguageContext";
import { translations } from "../i18n/LanguageContext";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  const t = (key: TranslationKey) => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return ctx;
};
