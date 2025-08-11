import { useState } from "react";

import { Menu, X } from "lucide-react"; // Iconos bonitos
import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-white shadow-md">
//       <h1 className="text-2xl font-bold text-blue-600">Mi Portafolio</h1>
//       <ul className="flex gap-6">
//         <li>
//           <Link to="/" className="hover:text-blue-600">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="hover:text-blue-600">
//             Sobre mí
//           </Link>
//         </li>
//         <li>
//           <Link to="/projects" className="hover:text-blue-600">
//             Proyectos
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-blue-600">
//             Contacto
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixe w-full bg-white shadow-md z-150">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          Mi Portafolio
        </h1>

        {/* Menú escritorio */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-blue-600 transition-colors"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
