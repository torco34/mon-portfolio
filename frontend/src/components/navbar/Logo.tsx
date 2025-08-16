import type { LogoProps } from "./NavbarTypes";
export const Logo = ({ showText = false, className = "" }: LogoProps) => {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label="torcoDev logo"
    >
      <div className="w-20 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
        <span className="text-white font-bold">TorcoDev</span>
      </div>
      {showText && (
        <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-blue-800">
          Portafolio
        </span>
      )}
    </div>
  );
};
