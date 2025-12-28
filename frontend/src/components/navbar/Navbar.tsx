import { useState } from "react";

import { navbarLinks } from "../constants/navbarLinks";
import { DesktopMenu } from "./DesktopMenu";
import { LanguageToggleButton } from "./LanguageToggleButton";
import { Logo } from "./Logo";
import { MenuToggleButton } from "./MenuToggleButton";
import { MobileMenu } from "./MobileMenu";

// import { Globe, Languages } from "lucide-react";

// 👇 Importa el hook del contexto

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 👇 Hook de idioma
  // const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed w-full h-16 md:h-20 text-stone-700 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full flex justify-between items-center">
        <Logo />

        {/* Menú escritorio */}
        <DesktopMenu links={navbarLinks} />

        <div className="flex items-center gap-4">
          {/* Botón para cambiar idioma */}
          <LanguageToggleButton className="ml-4" />

          {/* Botón menú móvil */}
          <MenuToggleButton
            menuOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <MobileMenu links={navbarLinks} onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}
