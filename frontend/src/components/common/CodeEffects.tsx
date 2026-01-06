import { useEffect, useState } from "react";

// Efecto de terminal typing
export const TerminalTyping = ({ 
  text, 
  speed = 50,
  className = "" 
}: { 
  text: string; 
  speed?: number;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-green-400">$ </span>
      <span className="text-cyan-300">{displayedText}</span>
      <span className={`ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"} text-green-400`}>▊</span>
    </div>
  );
};

// Efecto de líneas de código que caen
export const FallingCode = ({ count = 20 }: { count?: number }) => {
  const [lines, setLines] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newLines = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setLines(newLines);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute text-xs font-mono text-green-400/30 animate-fall"
          style={{
            left: `${line.left}%`,
            top: "-20px",
            animationDelay: `${line.delay}s`,
            animationDuration: `${line.duration}s`,
          }}
        >
          {Math.random() > 0.5 ? "const" : "function"} {Math.random().toString(36).substring(7)}() {"{"}
        </div>
      ))}
    </div>
  );
};

// Efecto de consola con logs
export const ConsoleLogs = ({ logs = 5 }: { logs?: number }) => {
  const logMessages = [
    "Compiling TypeScript... ✓",
    "Building components... ✓",
    "Optimizing images... ✓",
    "Generating bundle... ✓",
    "Deploying to production... ✓",
    "Running tests... ✓",
    "Checking dependencies... ✓",
    "Linting code... ✓",
  ];

  return (
    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm border border-green-500/20">
      <div className="text-green-400 mb-2">~/portfolio $ npm run dev</div>
      <div className="space-y-1">
        {logMessages.slice(0, logs).map((log, i) => (
          <div
            key={i}
            className="text-gray-300 animate-fade-in-left"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <span className="text-green-500">▶</span> {log}
          </div>
        ))}
      </div>
      <div className="mt-3 text-green-400 animate-pulse">
        $ <span className="text-cyan-300">Ready on http://localhost:5173</span>
      </div>
    </div>
  );
};

// Efecto de carga de progreso con animación
export const CodeProgress = ({ 
  label, 
  percentage, 
  color = "from-cyan-500 to-blue-500" 
}: { 
  label: string; 
  percentage: number;
  color?: string;
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-200 font-mono">{label}</span>
        <span className="text-green-400 font-mono">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
        <div className="relative -top-2 h-4 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

// Efecto de partículas de código
export const CodeParticles = () => {
  const symbols = ["{", "}", "<", ">", "(", ")", "[", "]", ";", "=", "+", "-", "*", "/"];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const colors = ["text-pink-400/20", "text-cyan-400/20", "text-green-400/20", "text-purple-400/20"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <div
            key={i}
            className={`absolute font-mono text-lg ${color} animate-particle-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            {symbol}
          </div>
        );
      })}
    </div>
  );
};

// Efecto de terminal con comandos
export const TerminalWindow = () => {
  const commands = [
    { cmd: "git status", output: "On branch main\nYour branch is up to date with 'origin/main'." },
    { cmd: "npm run build", output: "✓ Built successfully in 2.3s" },
    { cmd: "npm test", output: "✓ All tests passed (15/15)" },
  ];

  return (
    <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-green-500/30 shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-green-500/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-sm text-gray-400 font-mono ml-2">terminal</div>
      </div>
      <div className="p-4 space-y-3">
        {commands.map((command, i) => (
          <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 300}ms` }}>
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-cyan-300 font-mono">{command.cmd}</span>
            </div>
            <div className="text-gray-300 text-sm mt-1 ml-4 font-mono">{command.output}</div>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-green-400 animate-pulse">$</span>
          <div className="flex-1 h-4 bg-green-500/20 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// Estilos CSS para animaciones
const styles = `
@keyframes fall {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.animate-fall {
  animation: fall linear infinite;
}
`;

// Componente para inyectar estilos
export const CodeEffectsStyles = () => (
  <style>{styles}</style>
);