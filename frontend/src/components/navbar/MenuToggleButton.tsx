import { Menu, X } from "lucide-react";
import type { MenuToggleButtonProps } from "./NavbarTypes";

export const MenuToggleButton = ({
  menuOpen,
  onClick,
}: MenuToggleButtonProps) => {
  return (
    <button
      className="md:hidden  text-orange-600"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};
