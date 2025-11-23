import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext"; // 👈 Importa el contexto
import type { DesktopMenuProps } from "./NavbarTypes";

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  const { t } = useLanguage(); // 👈 función de traducción

  return (
    <ul className="hidden font-bold md:flex gap-8">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-[#F875AA] border-b-2 font-bold border-primary pb-1"
                  : "hover:text-[#F875AA]"
              }`
            }
          >
            {t(`header.${link.key}`)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
