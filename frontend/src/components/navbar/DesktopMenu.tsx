import { Link } from "react-router-dom";

interface DesktopMenuProps {
  links: { path: string; label: string }[];
}

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  return (
    <ul className="hidden md:flex gap-8 font-medium">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className="hover:text-blue-600 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
