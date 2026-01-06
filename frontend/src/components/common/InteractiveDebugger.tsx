import { useState, useEffect } from "react";
import { Bug, CheckCircle, XCircle, Play, Pause, SkipForward } from "lucide-react";

interface DebugStep {
  id: number;
  line: number;
  code: string;
  description: string;
  variableState: Record<string, string | number | boolean | null | object>;
  isBreakpoint: boolean;
  isCurrent: boolean;
}

export const InteractiveDebugger = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [bugsFound, setBugsFound] = useState(0);
  const [isDebugging, setIsDebugging] = useState(false);

  const debugSteps: DebugStep[] = [
    {
      id: 1,
      line: 15,
      code: "function calculateTotal(items) {",
      description: "Iniciando función calculateTotal",
      variableState: { items: "[...]" },
      isBreakpoint: true,
      isCurrent: true
    },
    {
      id: 2,
      line: 16,
      code: "  let total = 0;",
      description: "Declarando variable total",
      variableState: { items: "[...]", total: 0 },
      isBreakpoint: false,
      isCurrent: false
    },
    {
      id: 3,
      line: 17,
      code: "  for (let item of items) {",
      description: "Iniciando bucle for",
      variableState: { items: "[{price: 10}, {price: 20}]", total: 0, item: null },
      isBreakpoint: false,
      isCurrent: false
    },
    {
      id: 4,
      line: 18,
      code: "    total += item.price;",
      description: "Sumando precio del primer item",
      variableState: { items: "[...]", total: 10, item: { price: 10 } },
      isBreakpoint: true,
      isCurrent: false
    },
    {
      id: 5,
      line: 18,
      code: "    total += item.price;",
      description: "Sumando precio del segundo item",
      variableState: { items: "[...]", total: 30, item: { price: 20 } },
      isBreakpoint: false,
      isCurrent: false
    },
    {
      id: 6,
      line: 19,
      code: "  }",
      description: "Finalizando bucle for",
      variableState: { items: "[...]", total: 30 },
      isBreakpoint: false,
      isCurrent: false
    },
    {
      id: 7,
      line: 20,
      code: "  return total * 1.16; // IVA incluido",
      description: "Aplicando IVA y retornando total",
      variableState: { items: "[...]", total: 34.8 },
      isBreakpoint: true,
      isCurrent: false
    },
    {
      id: 8,
      line: 21,
      code: "}",
      description: "Función completada exitosamente",
      variableState: { result: 34.8 },
      isBreakpoint: false,
      isCurrent: false
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentStep < debugSteps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= debugSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentStep, speed, debugSteps.length]);

  const handleStep = (direction: "next" | "prev" | "reset") => {
    if (direction === "next") {
      setCurrentStep(prev => Math.min(prev + 1, debugSteps.length - 1));
    } else if (direction === "prev") {
      setCurrentStep(prev => Math.max(prev - 1, 0));
    } else {
      setCurrentStep(0);
      setIsPlaying(false);
    }
  };

  const toggleBreakpoint = (stepId: number) => {
    // En una implementación real, esto cambiaría el estado del breakpoint
    console.log(`Toggle breakpoint en step ${stepId}`);
  };

  const findBug = () => {
    if (!isDebugging) {
      setIsDebugging(true);
      setTimeout(() => {
        const foundBug = Math.random() > 0.5;
        if (foundBug) {
          setBugsFound(prev => prev + 1);
        }
        setIsDebugging(false);
      }, 1500);
    }
  };

  return (
    <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-green-500/30 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-green-500/20">
        <div className="flex items-center gap-3">
          <Bug className="w-5 h-5 text-green-400" />
          <div className="text-sm font-mono text-gray-300">debugger.js</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
            <span className="text-xs text-gray-400">
              {isPlaying ? 'Debugging...' : 'Paused'}
            </span>
          </div>
          <div className="text-xs text-gray-500">
            Step {currentStep + 1}/{debugSteps.length}
          </div>
        </div>
      </div>

      {/* Debugger Content */}
      <div className="p-4">
        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-2 rounded-lg ${isPlaying ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'} hover:opacity-80 transition-opacity`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => handleStep("next")}
              className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:opacity-80 transition-opacity"
              disabled={currentStep >= debugSteps.length - 1}
            >
              <SkipForward className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleStep("reset")}
              className="p-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm"
            >
              Reset
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400">
              Speed: 
              <select 
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="ml-2 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-gray-300"
              >
                <option value="2000">Slow</option>
                <option value="1000">Normal</option>
                <option value="500">Fast</option>
                <option value="200">Very Fast</option>
              </select>
            </div>

            <button
              onClick={findBug}
              disabled={isDebugging}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-2 ${isDebugging ? 'bg-yellow-500/20 text-yellow-400' : 'bg-purple-500/20 text-purple-400'} hover:opacity-80 transition-opacity`}
            >
              <Bug className="w-4 h-4" />
              {isDebugging ? 'Scanning...' : 'Find Bug'}
            </button>
          </div>
        </div>

        {/* Code Viewer */}
        <div className="bg-gray-950 rounded-lg overflow-hidden mb-6">
          <div className="px-4 py-2 bg-gray-900 border-b border-gray-800 text-sm text-gray-400">
            calculateTotal.js
          </div>
          <div className="p-4 font-mono text-sm">
            {debugSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-start gap-4 py-1 ${step.isCurrent ? 'bg-blue-500/10' : ''} ${step.isBreakpoint ? 'border-l-2 border-red-500 pl-2' : 'pl-6'}`}
                onClick={() => setCurrentStep(index)}
              >
                <div className="flex items-center gap-2 w-16">
                  <div className="text-gray-500 text-right w-6">{step.line}</div>
                  {step.isBreakpoint && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBreakpoint(step.id);
                      }}
                      className="w-2 h-2 rounded-full bg-red-500 hover:bg-red-400"
                    />
                  )}
                  {step.isCurrent && (
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  )}
                </div>
                <div className={`flex-1 ${step.isCurrent ? 'text-green-300' : 'text-gray-300'}`}>
                  {step.code}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Variable Watch */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-950 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Current State
            </h4>
            <div className="space-y-2">
              {Object.entries(debugSteps[currentStep].variableState).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-cyan-300">{key}:</span>
                  <span className="text-green-300 font-mono">
                    {typeof value === 'object' ? JSON.stringify(value) : value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-950 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              Debug Info
            </h4>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-400">Current Step</div>
                <div className="text-sm text-gray-200">{debugSteps[currentStep].description}</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">Bugs Found</div>
                  <div className="text-lg font-bold text-green-400">{bugsFound}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Breakpoints</div>
                  <div className="text-lg font-bold text-red-400">
                    {debugSteps.filter(s => s.isBreakpoint).length}
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 italic">
                {isDebugging 
                  ? "🔍 Scanning for bugs..." 
                  : "Click 'Find Bug' to search for issues in the code"}
              </div>
            </div>
          </div>
        </div>

        {/* Console Output */}
        <div className="mt-6 bg-gray-950 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Console Output</h4>
          <div className="font-mono text-sm space-y-1">
            <div className="text-green-400">$ node debugger.js</div>
            <div className="text-cyan-300">▶ Starting debug session...</div>
            <div className="text-gray-300">Breakpoint hit at line {debugSteps[currentStep].line}</div>
            <div className="text-yellow-300">▶ Executing: {debugSteps[currentStep].description}</div>
            {bugsFound > 0 && (
              <div className="text-red-300">⚠ Found {bugsFound} potential bug(s)</div>
            )}
            <div className="text-green-400">$ Ready for next command</div>
          </div>
        </div>
      </div>
    </div>
  );
};