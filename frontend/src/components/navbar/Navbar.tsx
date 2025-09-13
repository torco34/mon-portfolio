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
    <nav className="fixed w-full bg-orange-50 shadow-md z-150">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Menú escritorio */}
        <DesktopMenu links={navbarLinks} />

        {/* Botón para cambiar idioma */}
        <LanguageToggleButton className="ml-4" />

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
