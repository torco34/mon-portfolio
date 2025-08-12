import { useState } from "react";

import { Menu, X } from "lucide-react"; // Iconos bonitos
import { DesktopMenu } from "./DesktopMenu";
import Logo from "./Logo";
import { MobileMenu } from "./MobileMenu";
export default function Navbar() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Sobre mí" },
    { path: "/projects", label: "Proyectos" },
    { path: "/contact", label: "Contacto" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed  w-full bg-white shadow-md z-150">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Menú escritorio */}
        <DesktopMenu links={links} />

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil  */}
      {menuOpen && (
        <MobileMenu links={links} onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
}
