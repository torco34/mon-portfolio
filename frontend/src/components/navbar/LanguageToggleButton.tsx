import { Globe, Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface LanguageToggleButtonProps {
  className?: string; // opcional para estilos extra
}

export function LanguageToggleButton({ className }: LanguageToggleButtonProps) {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      aria-label="Cambiar idioma"
      className={`group flex items-center gap-2 px-3 py-2 bg-stone-100 text-stone-700 rounded-lg border border-stone-200 shadow-sm hover:shadow hover:bg-stone-200 hover:text-stone-900 transition-all duration-300 ${className}`}
    >
      {lang === "es" ? (
        <>
          <Globe size={16} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden sm:inline text-xs font-medium">EN</span>
        </>
      ) : (
        <>
          <Languages size={16} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden sm:inline text-xs font-medium">ES</span>
        </>
      )}
    </button>
  );
}
