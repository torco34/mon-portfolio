import { NavLink } from "react-router-dom";

import { useLanguage } from "../../../context/LanguageContext";
import type { DesktopMenuProps } from "../NavbarTypes";

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  const { t } = useLanguage();

  return (
    <ul className="hidden font-medium md:flex gap-6 lg:gap-8">
      {links.map((link) => {
        const isPremium = link.key === "premium";

        return (
          <li key={link.path}>
            <NavLink to={link.path}>
              {({ isActive }) => (
                <span
                  className={`group relative inline-block px-3 py-2 tracking-wide transition-all duration-300
                    ${
                      isPremium
                        ? "px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:scale-105"
                        : isActive
                        ? "text-pink-600 font-semibold"
                        : "text-gray-600 hover:text-pink-600"
                    }`}
                >
                  {t(`header.${link.key}`)}

                  {!isPremium && (
                    <span
                      className={`absolute left-1/2 -bottom-1 h-[1px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 transform -translate-x-1/2
                        ${isActive ? "w-4/5" : "w-0 group-hover:w-4/5"}`}
                    />
                  )}

                  {isPremium && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  )}
                </span>
              )}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
