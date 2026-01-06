import { useEffect, useState } from "react";

export const CodeCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [trailCount, setTrailCount] = useState(0);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Añadir punto al trail (menos frecuente para mejor performance)
      if (trailCount % 3 === 0) {
        setTrail(prev => {
          const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
          return newTrail.slice(-8); // Mantener solo los últimos 8 puntos
        });
      }
      
      setTrailCount(prev => prev + 1);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [trailCount]);

  // Limpiar trail periódicamente
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.filter(point => Date.now() - point.id < 800));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail de puntos - más sutil */}
      {trail.map((point, index) => {
        const size = 2 + (index / trail.length) * 4;
        const opacity = 0.05 + (index / trail.length) * 0.2;
        
        return (
          <div
            key={point.id}
            className="fixed pointer-events-none z-50 rounded-full bg-gradient-to-r from-pink-400/30 to-cyan-400/30"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              opacity,
              transition: "all 0.15s ease-out",
            }}
          />
        );
      })}

      {/* Cursor principal */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          transition: "left 0.05s linear, top 0.05s linear",
        }}
      >
        {/* Círculo exterior con efecto de click */}
        <div 
          className={`absolute rounded-full border-2 transition-all duration-150 ${
            isClicking 
              ? 'w-10 h-10 border-pink-500/70 bg-pink-500/20' 
              : 'w-8 h-8 border-pink-500/40'
          }`}
        />
        
        {/* Círculo interior */}
        <div className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500" />
        
        {/* Símbolo de código */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-[10px] font-bold">
            {trailCount % 4 === 0 ? "<>" : "{}"}
          </div>
        </div>
        
        {/* Partículas que salen del cursor (menos frecuentes) */}
        {trailCount % 15 === 0 && (
          <>
            <div
              className="absolute w-1 h-1 bg-pink-400 rounded-full animate-particle-float"
              style={{ 
                animationDelay: "0s",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
            <div
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle-float"
              style={{ 
                animationDelay: "0.1s",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
          </>
        )}
      </div>

      {/* Efecto de click */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-40 rounded-full border-2 border-pink-500/40"
          style={{
            left: position.x - 20,
            top: position.y - 20,
            width: 40,
            height: 40,
            animation: "ripple 0.6s ease-out",
          }}
        />
      )}
    </>
  );
};

