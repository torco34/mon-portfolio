import { useState, useEffect } from "react";

export const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);
  
  const codeSnippets = [
    "const Torco = () => { return <Dev />; }",
    "class TorcoDev extends Developer {}",
    "export default function TorcoDev() {}",
    "interface TorcoDev { skills: string[]; }",
    "torcoDev.compile('awesome_portfolio')",
  ];

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, codeSnippets.length]);

  return (
    <div 
      className="h-16 md:h-20 flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Logo principal */}
        <div className="flex items-center gap-2">
          {/* Cubo 3D animado */}
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg animate-rotate-3d" />
            <div className="absolute inset-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-md" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white font-mono font-bold text-lg md:text-xl">
                {"</>"}
              </div>
            </div>
            
            {/* Puntos animados en las esquinas */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-900" />
          </div>

          {/* Texto del logo */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-gradient-animated">Torco</span>
              <span className="text-white">Dev</span>
            </h1>
            <div className="text-xs text-gray-400 font-mono mt-0.5">
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* Tooltip con código animado */}
        {isHovered && (
          <div className="absolute top-full left-0 mt-2 w-64 p-4 bg-gray-900/95 backdrop-blur-sm rounded-xl border border-pink-500/30 shadow-2xl z-50 animate-fade-in-up">
            <div className="font-mono text-sm">
              <div className="text-green-400 mb-2">// Hover effect activated</div>
              <div className="text-cyan-300 animate-pulse">
                {codeSnippets[codeIndex]}
              </div>
              <div className="text-gray-400 text-xs mt-2">
                <span className="text-pink-400">▶</span> Portfolio v2.0 • React • TypeScript
              </div>
            </div>
            
            {/* Líneas de código flotantes */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300" />
          </div>
        )}

        {/* Efecto de brillo al hover */}
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
};
