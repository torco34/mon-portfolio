import { NavLink } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import type { DesktopMenuProps } from "./NavbarTypes";

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  const { t } = useLanguage();

  return (
    <ul className="hidden font-medium md:flex gap-6 lg:gap-8">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink to={link.path}>
            {({ isActive }) => (
              <span
                className={`group relative inline-block px-3 py-2 tracking-wide transition-all duration-300
      ${isActive ? "text-stone-900 font-semibold" : "text-stone-600 hover:text-stone-900"}`}
              >
                {t(`header.${link.key}`)}

                <span
                  className={`absolute left-1/2 -bottom-1 h-[1px] bg-stone-800 transition-all duration-300 transform -translate-x-1/2
      ${isActive ? "w-4/5" : "w-0 group-hover:w-4/5"}`}
                />
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
