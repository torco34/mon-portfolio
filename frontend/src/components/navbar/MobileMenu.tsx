import { Link } from "react-router-dom";
import type { MobileMenuProps } from "./NavbarTypes";


export const MobileMenu = ({ links, onClick }: MobileMenuProps) => {
  return (
    <div className="md:hidden bg-blue-200 shadow-md">
      <ul className="flex flex-col items-center gap-4 py-6 font-medium">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="hover:text-blue-600 transition-colors"
              onClick={onClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
