import { Menu, X } from "lucide-react";
import type { MenuToggleButtonProps } from "../NavbarTypes";

export const MenuToggleButton = ({
  menuOpen,
  onClick,
}: MenuToggleButtonProps) => {
  return (
    <button
      className="md:hidden p-2 rounded-lg bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-all duration-300"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};
