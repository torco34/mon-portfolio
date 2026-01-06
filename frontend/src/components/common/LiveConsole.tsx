import { useEffect, useState } from "react";

interface ConsoleMessage {
  id: number;
  text: string;
  type: "log" | "info" | "success" | "error" | "warning";
  timestamp: string;
}

export const LiveConsole = () => {
  const [messages, setMessages] = useState<ConsoleMessage[]>([
    { id: 1, text: "Initializing portfolio...", type: "info", timestamp: "10:30:15" },
    { id: 2, text: "Loading components... ✓", type: "success", timestamp: "10:30:16" },
    { id: 3, text: "Fetching projects data...", type: "info", timestamp: "10:30:17" },
    { id: 4, text: "Building UI... ✓", type: "success", timestamp: "10:30:18" },
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);

  const commands = [
    "npm run dev",
    "git status",
    "npm test",
    "npm run build",
    "git push origin main",
    "deploy --production",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (commandIndex < commands.length) {
        const command = commands[commandIndex];
        let charIndex = 0;
        
        const typeCommand = () => {
          if (charIndex <= command.length) {
            setCurrentCommand(command.substring(0, charIndex));
            charIndex++;
            setTimeout(typeCommand, 50);
          } else {
            setTimeout(() => {
              setMessages(prev => [
                ...prev,
                {
                  id: prev.length + 1,
                  text: `$ ${command}`,
                  type: "log" as const,
                  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
                },
                {
                  id: prev.length + 2,
                  text: getCommandResponse(command),
                  type: "success" as const,
                  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
                }
              ].slice(-8)); // Mantener solo los últimos 8 mensajes
              
              setCurrentCommand("");
              setCommandIndex(prev => (prev + 1) % commands.length);
            }, 1000);
          }
        };
        
        typeCommand();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [commandIndex, commands]);

  const getCommandResponse = (command: string) => {
    switch (command) {
      case "npm run dev":
        return "✓ Development server running on http://localhost:5173";
      case "git status":
        return "On branch main\nYour branch is up to date with 'origin/main'.";
      case "npm test":
        return "✓ All tests passed (42/42)";
      case "npm run build":
        return "✓ Build completed successfully in 2.3s";
      case "git push origin main":
        return "✓ Pushed 3 commits to origin/main";
      case "deploy --production":
        return "✓ Deployment successful! Portfolio is live 🚀";
      default:
        return "Command executed successfully";
    }
  };

  const getTypeColor = (type: ConsoleMessage["type"]) => {
    switch (type) {
      case "success": return "text-green-400";
      case "error": return "text-red-400";
      case "warning": return "text-yellow-400";
      case "info": return "text-cyan-400";
      default: return "text-gray-300";
    }
  };

  const getTypeIcon = (type: ConsoleMessage["type"]) => {
    switch (type) {
      case "success": return "✓";
      case "error": return "✗";
      case "warning": return "⚠";
      case "info": return "ℹ";
      default: return ">";
    }
  };

  return (
    <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-green-500/30 shadow-2xl font-mono">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-green-500/20">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-sm text-gray-400">terminal — zsh</div>
        </div>
        <div className="text-xs text-gray-500">Live Console</div>
      </div>

      {/* Messages */}
      <div className="p-4 h-64 overflow-y-auto">
        <div className="space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-start gap-3 animate-fade-in-up"
            >
              <div className={`flex-shrink-0 w-6 text-right ${getTypeColor(msg.type)}`}>
                {getTypeIcon(msg.type)}
              </div>
              <div className="flex-1">
                <div className={`${getTypeColor(msg.type)}`}>
                  {msg.text.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Current command line */}
        <div className="flex items-center gap-2 mt-4">
          <div className="text-green-400">$</div>
          <div className="flex-1">
            <span className="text-cyan-300">{currentCommand}</span>
            <span className="ml-1 w-2 h-4 bg-green-400 animate-pulse inline-block" />
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="px-4 py-2 bg-gray-900 border-t border-green-500/20 text-xs text-gray-400 flex justify-between">
        <div>Portfolio v2.0</div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Live</span>
          </div>
          <div>React 18 • TypeScript 5 • Tailwind 3</div>
        </div>
      </div>
    </div>
  );
};

// Componente de estadísticas en tiempo real
export const LiveStats = () => {
  const [stats, setStats] = useState({
    visitors: 1247,
    projects: 42,
    commits: 856,
    uptime: "99.9%"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        visitors: prev.visitors + Math.floor(Math.random() * 3),
        commits: prev.commits + Math.floor(Math.random() * 2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(stats).map(([key, value]) => (
        <div
          key={key}
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-white/15 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 animate-pulse-glow"
        >
          <div className="text-2xl font-bold text-white mb-1">{value}</div>
          <div className="text-sm text-gray-300 capitalize">{key}</div>
        </div>
      ))}
    </div>
  );
};