import { useState } from "react";

import { Globe, Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { navbarLinks } from "../constants/navbarLinks";
import { DesktopMenu } from "./DesktopMenu";
import { Logo } from "./Logo";
import { MenuToggleButton } from "./MenuToggleButton";
import { MobileMenu } from "./MobileMenu";

// 👇 Importa el hook del contexto

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 👇 Hook de idioma
  const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed w-full bg-orange-50 shadow-md z-150">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Menú escritorio */}
        <DesktopMenu links={navbarLinks} />

        {/* Botón para cambiar idioma */}
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="ml-4 flex items-center gap-2 px-3 py-2 border border-orange-400  bg-orange-100 text-orange-500 rounded-full shadow-md hover:bg-orange-100 transition"
        >
          {lang === "es" ? (
            <>
              <Globe size={18} /> Espanol
            </>
          ) : (
            <>
              <Languages size={18} /> Englesh
            </>
          )}
        </button>

        {/* Botón menú móvil */}
        <MenuToggleButton
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <MobileMenu links={navbarLinks} onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}
