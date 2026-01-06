import { useState, useEffect } from "react";
import { 
  Code, 
  Cloud, 
  Palette,
  Shield,
  Zap,
  Smartphone,
  Server,
  Layers,
  Workflow
} from "lucide-react";

export default function SkillsPage() {
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

  // Categories of skills
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
       color: "from-pink-500 to-purple-600",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Vue.js", level: 75, icon: "🟢" },
        { name: "Svelte", level: 70, icon: "⚡" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
       color: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express", level: 85, icon: "🚂" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "Django", level: 78, icon: "🎸" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
       color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 75, icon: "⚓" },
        { name: "CI/CD", level: 88, icon: "🔄" },
        { name: "Terraform", level: 72, icon: "🏗️" },
        { name: "Linux", level: 90, icon: "🐧" },
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
       color: "from-green-500 to-emerald-600",
      skills: [
        { name: "React Native", level: 85, icon: "📱" },
        { name: "Flutter", level: 78, icon: "🎯" },
        { name: "iOS (Swift)", level: 70, icon: "🍎" },
        { name: "Android (Kotlin)", level: 72, icon: "🤖" },
        { name: "PWA", level: 88, icon: "🌐" },
        { name: "Expo", level: 82, icon: "⚡" },
      ]
    }
  ];

  // Featured skills with detailed descriptions
  const featuredSkills = [
    {
      title: "Full Stack Architecture",
      description: "Diseño de arquitecturas escalables desde frontend hasta backend",
      icon: <Layers className="w-8 h-8" />,
      projects: 25,
       gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Performance Optimization",
      description: "Optimización de rendimiento y tiempos de carga",
      icon: <Zap className="w-8 h-8" />,
      projects: 18,
       gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Security Best Practices",
      description: "Implementación de seguridad y mejores prácticas",
      icon: <Shield className="w-8 h-8" />,
      projects: 22,
       gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Team Leadership",
      description: "Liderazgo técnico y mentoría de equipos",
      icon: <Workflow className="w-8 h-8" />,
      projects: 15,
       gradient: "from-orange-500 to-yellow-600"
    }
  ];

  // Stats
  const stats = [
    { label: "Tecnologías Dominadas", value: "40+", icon: "🚀" },
    { label: "Proyectos Completados", value: "50+", icon: "📦" },
    { label: "Años de Experiencia", value: "4+", icon: "📅" },
    { label: "Clientes Satisfechos", value: "30+", icon: "😊" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500/15 to-purple-600/15 blur-3xl animate-pulse-glow"
          style={{
            left: `${mousePosition.x * 0.03}px`,
            top: `${mousePosition.y * 0.03}px`,
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 blur-3xl animate-pulse-glow delay-1000"
          style={{
            right: `${mousePosition.x * 0.02}px`,
            bottom: `${mousePosition.y * 0.02}px`,
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />
        
        {/* Code symbols floating */}
        {[...Array(20)].map((_, i) => {
          const symbols = ["{ }", "< />", "() =>", "const", "async", "export", "import", "function"];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];
          const colors = ["text-pink-400/20", "text-cyan-400/20", "text-green-400/20", "text-purple-400/20"];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <div
              key={i}
              className={`absolute font-mono text-sm ${color} animate-float`}
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

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 md:pt-24 md:pb-16 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-pink-500/30 mb-6">
                <Code className="w-4 h-4 text-pink-300" />
                <span className="text-sm font-medium text-pink-200">
                  Stack Tecnológico
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                  Habilidades
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  & Expertise
                </span>
              </h1>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                Dominio completo del stack tecnológico moderno para crear soluciones innovadoras y escalables.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {stats.map((stat, index) => (
                 <div 
                  key={index}
                  className="p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl border border-white/15 hover:border-pink-500/40 transition-all duration-300 group hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-200">{stat.label}</div>
                    <div className="mt-2 text-2xl">{stat.icon}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Skills */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {featuredSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute -inset-3 bg-gradient-to-r ${skill.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                   <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/15 h-full">
                    <div className={`p-3 bg-gradient-to-r ${skill.gradient} rounded-lg w-fit mb-4`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{skill.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full border border-pink-500/30">
                        <span className="text-sm font-medium text-pink-300">{skill.projects} proyectos</span>
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
              ))}
            </div>

            {/* Skill Categories */}
            <div className="space-y-12">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}>
                      {category.icon}
                    </div>
                     <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                       <div 
                        key={skillIndex}
                        className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-white/15 hover:border-pink-500/40 transition-all duration-300 hover:scale-105"
                      >
                       <div className="flex items-center justify-between mb-4 animate-fade-in-up" style={{ animationDelay: `${skillIndex * 100}ms` }}>
                         <div className="flex items-center gap-3">
                           <span className="text-2xl">{skill.icon}</span>
                           <span className="font-bold text-white text-lg">{skill.name}</span>
                         </div>
                         <span className="text-lg font-bold text-pink-300 animate-pulse">
                           {skill.level}%
                         </span>
                       </div>
                       
                        {/* Progress Bar */}
                       <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden mb-5">
                         <div 
                           className={`absolute h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                           style={{ width: `${skill.level}%` }}
                         />
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                       </div>

                       {/* Skill Level Indicator */}
                       <div className="flex justify-between mt-3">
                         <span className="text-xs text-gray-400">Básico</span>
                         <span className="text-xs text-gray-400">Intermedio</span>
                         <span className="text-xs text-gray-400">Avanzado</span>
                         <span className="text-xs text-gray-400">Experto</span>
                       </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Herramientas & Tecnologías Adicionales</h2>
                <p className="text-gray-600">Otras tecnologías y herramientas que domino</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-pink-100">
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    "Git", "GitHub", "GitLab", "Jest", "Cypress", "Storybook",
                    "Figma", "Adobe XD", "Webpack", "Vite", "ESLint", "Prettier",
                    "GraphQL", "REST API", "WebSocket", "JWT", "OAuth", "Redis",
                    "Nginx", "PM2", "Jenkins", "GitHub Actions", "Vercel", "Netlify"
                  ].map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-pink-50 to-cyan-50 rounded-lg border border-pink-200 text-gray-700 hover:border-pink-300 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-white rounded-2xl p-8 border border-pink-100">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                      ¿Necesitas un desarrollador con estas habilidades?
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Tengo la experiencia y el expertise para llevar tu proyecto al siguiente nivel.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/contact"
                      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-xl hover:scale-105 transition-all duration-300 hover-glow"
                    >
                      Contactar Ahora
                    </a>
                    <a
                      href="/projects"
                      className="px-8 py-3 bg-white rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-pink-200"
                    >
                      <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Ver Proyectos
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}