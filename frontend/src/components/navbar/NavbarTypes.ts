// 📂 src/components/navbar/NavbarTypes.ts
import type { NavbarLinkKey } from "../constants/navbarLinks";

export interface LogoProps {
  showText?: boolean;
  className?: string;
}

export interface MenuToggleButtonProps {
  menuOpen: boolean;
  onClick: () => void;
}

export interface MobileMenuProps {
  links: readonly { path: string; key: NavbarLinkKey }[];
  onClick?: () => void;
}

export interface DesktopMenuProps {
  links: readonly { path: string; key: NavbarLinkKey }[];
}
