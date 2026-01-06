import { useState, type ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "scale-in" | "slide-in-up" | "slide-in-right";
  delay?: number;
  hoverEffect?: "glow" | "scale" | "lift" | "neon" | "ripple";
  color?: "pink" | "cyan" | "purple" | "gradient";
}

export const AnimatedCard = ({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  hoverEffect = "glow",
  color = "gradient",
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const animationClasses = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in-down": "animate-fade-in-down",
    "fade-in-left": "animate-fade-in-left",
    "fade-in-right": "animate-fade-in-right",
    "scale-in": "animate-scale-in",
    "slide-in-up": "animate-slide-in-up",
    "slide-in-right": "animate-slide-in-right",
  };

  const hoverClasses = {
    glow: "hover-glow",
    scale: "hover:scale-[1.02] transition-transform duration-300",
    lift: "hover:-translate-y-2 transition-transform duration-300",
    neon: "neon-border hover:animate-neon-glow",
    ripple: "ripple-effect",
  };

  const colorClasses = {
    pink: "bg-gradient-to-br from-pink-900/20 via-pink-800/15 to-pink-900/10",
    cyan: "bg-gradient-to-br from-cyan-900/20 via-cyan-800/15 to-cyan-900/10",
    purple: "bg-gradient-to-br from-purple-900/20 via-purple-800/15 to-purple-900/10",
    gradient: "bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-gray-900/40",
  };

  const borderColors = {
    pink: "border-pink-500/20 hover:border-pink-500/40",
    cyan: "border-cyan-500/20 hover:border-cyan-500/40",
    purple: "border-purple-500/20 hover:border-purple-500/40",
    gradient: "border-white/10 hover:border-pink-500/30",
  };

  return (
    <div
      className={`
        relative rounded-2xl p-6 backdrop-blur-sm
        ${colorClasses[color]}
        ${borderColors[color]}
        border transition-all duration-300
        ${hoverClasses[hoverEffect]}
        ${animationClasses[animation]}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de brillo interior */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-cyan-500/5 rounded-2xl pointer-events-none" />
      )}

      {/* Efecto de borde animado */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Contenido */}
      <div className="relative z-10">{children}</div>

      {/* Partículas flotantes en hover */}
      {isHovered && (
        <>
          <div
            className="absolute top-2 right-2 w-1 h-1 bg-pink-500 rounded-full animate-bounce-subtle"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-500 rounded-full animate-bounce-subtle"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="absolute top-2 left-2 w-1 h-1 bg-purple-500 rounded-full animate-bounce-subtle"
            style={{ animationDelay: "0.6s" }}
          />
        </>
      )}
    </div>
  );
};

// Componente para títulos con gradiente animado
export const AnimatedTitle = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h3 className={`text-xl font-bold text-gradient-animated ${className}`}>
    {children}
  </h3>
);

// Componente para badges animados
export const AnimatedBadge = ({ 
  children, 
  color = "pink",
  className = "" 
}: { 
  children: ReactNode; 
  color?: "pink" | "cyan" | "purple";
  className?: string;
}) => {
  const colorStyles = {
    pink: "bg-gradient-to-r from-pink-500/10 to-pink-600/20 text-pink-300 border-pink-500/30",
    cyan: "bg-gradient-to-r from-cyan-500/10 to-cyan-600/20 text-cyan-300 border-cyan-500/30",
    purple: "bg-gradient-to-r from-purple-500/10 to-purple-600/20 text-purple-300 border-purple-500/30",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
        border backdrop-blur-sm animate-float
        ${colorStyles[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};