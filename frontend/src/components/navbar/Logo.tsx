import type { LogoProps } from "./NavbarTypes";
export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label="torcoDev logo"
    >
      <div className="relative h-12  p- flex items-center justify-center">
        {/* Círculo decorativo con brillo */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#F875AA] to-[#FDEDED] opacity-80 blur-md"></div>

        {/* Contenedor central */}
        <div className="relative h-full w-full p-5 rounded-xl bg-white  flex items-center justify-center shadow-lg border border-slate-200 ">
          <h2 className="font-extrabold  text-slate-700 text-lg tracking-tight">
            Torco
            <span className="text-[#F875AA] font-extrabold">Dev</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
