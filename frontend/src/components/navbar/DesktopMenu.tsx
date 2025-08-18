import { NavLink } from "react-router-dom";
import type { DesktopMenuProps } from "./NavbarTypes";

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  return (
    <ul className="hidden font-bold  md:flex gap-8 ">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-orange-400 border-b-2 font-bold border-primary pb-1" // activo
                  : "hover:text-orange-400" // hover
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
