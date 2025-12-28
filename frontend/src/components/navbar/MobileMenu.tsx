import { Link } from "react-router-dom";
import type { MobileMenuProps } from "./NavbarTypes";


import { useLanguage } from "../../context/LanguageContext";

export const MobileMenu = ({ links, onClick }: MobileMenuProps) => {
  const { t } = useLanguage();

  return (
    <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-stone-200 shadow-lg animate-fadeIn">
      <ul className="flex flex-col items-center gap-0 py-2">
        {links.map((link) => (
          <li key={link.path} className="w-full">
            <Link
              to={link.path}
              className="group block px-6 py-3 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-all duration-300 text-center"
              onClick={onClick}
            >
              <span className="relative font-medium">
                {t(`header.${link.key}`)}
                <span className="absolute left-1/2 -bottom-1 h-[1px] bg-stone-800 w-0 group-hover:w-4/5 transition-all duration-300 transform -translate-x-1/2"></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
