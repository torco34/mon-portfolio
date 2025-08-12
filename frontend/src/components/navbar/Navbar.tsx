import { useState } from "react";

import { navbarLinks } from "../constants/navbarLinks";
import { DesktopMenu } from "./DesktopMenu";
import { Logo } from "./Logo";
import { MenuToggleButton } from "./MenuToggleButton";
import { MobileMenu } from "./MobileMenu";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed  w-full bg-white shadow-md z-150">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Menú escritorio */}
        <DesktopMenu links={navbarLinks} />

        {/* Botón menú móvil */}

        <MenuToggleButton
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Menú móvil  */}
      {menuOpen && (
        <MobileMenu links={navbarLinks} onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}
