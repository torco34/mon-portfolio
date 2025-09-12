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
      className={`ml-4 flex items-center gap-2 px-3 py-2 border border-orange-400 bg-orange-50 text-orange-500 rounded-full shadow-md hover:bg-orange-200 transition ${className}`}
    >
      {lang === "es" ? (
        <>
          <Globe size={18} /> <span className="hidden sm:inline">ENGLISH</span>
        </>
      ) : (
        <>
          <Languages size={18} />{" "}
          <span className="hidden sm:inline">ESPAÑOL</span>
        </>
      )}
    </button>
  );
}
