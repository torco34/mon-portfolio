import { NavLink } from "react-router-dom";
import type { DesktopMenuProps } from "./NavbarTypes";

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  return (
    <ul className="hidden md:flex gap-8 font-medium">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-orange-700 border-b-2 border-primary pb-1" // activo
                  : "hover:text-orange-600" // hover
              }`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
