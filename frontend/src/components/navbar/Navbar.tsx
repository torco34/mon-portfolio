import { useState } from "react";

import { navbarLinks } from "../constants/navbarLinks";
import { DesktopMenu } from "./components/DesktopMenu";
import { LanguageToggleButton } from "./components/LanguageToggleButton";
import { Logo } from "./components/Logo";
import { MenuToggleButton } from "./components/MenuToggleButton";
import { MobileMenu } from "./components/MobileMenu";

// import { Globe, Languages } from "lucide-react";

// 👇 Importa el hook del contexto

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 👇 Hook de idioma
  // const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed w-full h-16 md:h-20 text-white bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm border-b border-white/10 shadow-sm z-50">
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
