export interface LogoProps {
  showText?: boolean;
  className?: string;
}
export interface MenuToggleButtonProps {
  menuOpen: boolean;
  onClick: () => void;
}
export interface MobileMenuProps {
  links: { path: string; label: string }[];
  onClick?: () => void;
}
export interface DesktopMenuProps {
  links: { path: string; label: string }[];
}
