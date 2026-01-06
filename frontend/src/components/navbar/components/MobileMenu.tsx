import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import type { MobileMenuProps } from "../NavbarTypes";

export const MobileMenu = ({ links, onClick }: MobileMenuProps) => {
  const { t } = useLanguage();

  return (
    <div className="md:hidden bg-gradient-to-br from-gray-900/98 to-gray-800/98 backdrop-blur-sm border-t border-white/10 shadow-lg animate-fadeIn">
      <ul className="flex flex-col items-center gap-0 py-2">
        {links.map((link) => (
          <li key={link.path} className="w-full">
            <Link
              to={link.path}
              className="group block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 text-center"
              onClick={onClick}
            >
              <span className="relative font-medium">
                {t(`header.${link.key}`)}
                <span className="absolute left-1/2 -bottom-1 h-[1px] bg-gradient-to-r from-pink-500 to-purple-600 w-0 group-hover:w-4/5 transition-all duration-300 transform -translate-x-1/2"></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
