import { useState, useEffect } from "react";
import { Home, Search, AlertCircle, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 text-white flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500/10 to-purple-600/10 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse delay-1000"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
        
        {/* Floating 404 Numbers */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/10 text-6xl font-bold animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            404
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <div className="max-w-2xl mx-auto">
          {/* Error Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full px-4 py-2 mb-8">
            <AlertCircle className="w-4 h-4 text-pink-300" />
            <span className="text-sm font-medium text-pink-200">Página no encontrada</span>
          </div>

          {/* 404 Display */}
          <div className="relative mb-8">
            <div className="text-[180px] md:text-[240px] font-bold leading-none">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                404
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-32 h-32 text-pink-300/20 animate-pulse" />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              ¡Ups! Página perdida en el espacio
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 max-w-xl mx-auto">
            La página que estás buscando no existe o ha sido movida a otra ubicación. 
            No te preocupes, podemos guiarte de vuelta a casa.
          </p>

          {/* Search Suggestions */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/15 rounded-2xl p-6 mb-10 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-5 h-5 text-pink-300" />
              <h3 className="text-lg font-semibold text-white">¿Buscas algo específico?</h3>
            </div>
            <div className="space-y-3 text-left">
              <Link 
                to="/" 
                className="block p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors text-gray-200 hover:text-white"
              >
                🏠 Página de inicio
              </Link>
              <Link 
                to="/projects" 
                className="block p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors text-gray-200 hover:text-white"
              >
                🚀 Proyectos
              </Link>
              <Link 
                to="/skills" 
                className="block p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors text-gray-200 hover:text-white"
              >
                💪 Habilidades
              </Link>
              <Link 
                to="/contact" 
                className="block p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors text-gray-200 hover:text-white"
              >
                📞 Contacto
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Volver al inicio</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-white/15 text-white rounded-xl hover:border-pink-500/40 transition-all duration-300 font-semibold hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Regresar atrás</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-300">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">0s</div>
              <div className="text-sm text-gray-400">Tiempo de carga</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300">∞</div>
              <div className="text-sm text-gray-400">Posibilidades
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400/30 to-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
