import { useEffect, useRef, useState } from "react";
import { 
  Sparkles, 
  Code, 
  Rocket, 
  Zap, 
  Target, 
  Users,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
  ExternalLink,
  Github,
  Globe,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

export default function PremiumHomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Premium Projects Data
  const premiumProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico escalable con carrito inteligente, pagos integrados y panel de administración avanzado.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Carrito inteligente", "Pagos seguros", "Panel admin", "Analytics"]
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description: "Aplicación de seguimiento de salud con IA que analiza rutinas de ejercicio, nutrición y progreso personalizado.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w-800&auto=format&fit=crop",
      technologies: ["React Native", "Firebase", "TensorFlow", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["IA personalizada", "Seguimiento en tiempo real", "Comunidad", "Retos"]
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      description: "Dashboard financiero en tiempo real con visualización de datos, predicciones de mercado y gestión de portafolios.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      technologies: ["Next.js", "TypeScript", "D3.js", "WebSocket", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Tiempo real", "Gráficos interactivos", "Alertas", "Exportación PDF"]
    },
    {
      id: 4,
      title: "Collaboration Suite",
      description: "Suite de colaboración empresarial con chat en tiempo real, gestión de proyectos y videoconferencias integradas.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      technologies: ["Vue.js", "Socket.io", "WebRTC", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Chat en vivo", "Videollamadas", "Gestión de tareas", "Cloud storage"]
    }
  ];

  const stats = [
    { icon: <Code className="w-5 h-5" />, value: "50+", label: "Proyectos" },
    { icon: <Zap className="w-5 h-5" />, value: "99.9%", label: "Uptime" },
    { icon: <Users className="w-5 h-5" />, value: "30+", label: "Clientes" },
    { icon: <Award className="w-5 h-5" />, value: "15+", label: "Certificaciones" },
  ];

  const techStack = [
    { name: "React", level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 90, color: "from-blue-400 to-indigo-500" },
    { name: "Node.js", level: 88, color: "from-green-400 to-emerald-500" },
    { name: "Next.js", level: 85, color: "from-gray-400 to-black" },
    { name: "Tailwind", level: 92, color: "from-teal-400 to-cyan-500" },
    { name: "AWS", level: 80, color: "from-orange-400 to-yellow-500" },
  ];

  // Premium Projects Slider Component
  const PremiumProjectsSlider = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
      if (!autoPlay) return;
      
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % premiumProjects.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }, [autoPlay]);

    const nextProject = () => {
      setCurrentProject((prev) => (prev + 1) % premiumProjects.length);
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 10000);
    };

    const prevProject = () => {
      setCurrentProject((prev) => (prev === 0 ? premiumProjects.length - 1 : prev - 1));
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 10000);
    };

    const goToProject = (index: number) => {
      setCurrentProject(index);
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 10000);
    };

    const project = premiumProjects[currentProject];

    return (
      <div className="relative group">
        {/* Background Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10 backdrop-blur-sm overflow-hidden">
          {/* Project Counter */}
          <div className="absolute top-6 right-6 z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
              <div className="flex gap-1">
                {premiumProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToProject(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentProject 
                        ? 'bg-gradient-to-r from-pink-500 to-cyan-500 w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir al proyecto ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400 ml-2">
                {currentProject + 1}/{premiumProjects.length}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur-xl animate-pulse" />
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Live Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-xs font-semibold">LIVE</span>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevProject}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Proyecto anterior"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextProject}
                  className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Siguiente proyecto"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">TECNOLOGÍAS</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 text-sm rounded-lg border border-white/10 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">CARACTERÍSTICAS</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.liveUrl}
                  className="flex-1 group/live flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  <span>Ver Demo</span>
                  <ExternalLink className="w-4 h-4 group-hover/live:translate-x-1 transition-transform" />
                </a>
                <a
                  href={project.githubUrl}
                  className="flex-1 group/github flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Github className="w-4 h-4" />
                  <span>Código</span>
                </a>
              </div>
            </div>
          </div>

          {/* Auto-play Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${autoPlay ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-xs text-gray-400">
              {autoPlay ? 'Auto-play activado' : 'Auto-play pausado'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 blur-3xl animate-pulse delay-1000"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Más compacta */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 md:px-8 lg:px-12 xl:px-20 py-12 md:py-20">
          <div className="max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column - Hero Content */}
              <div className="space-y-8 animate-fadeInUp">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10">
                  <Sparkles className="w-4 h-4 text-pink-300" />
                  <span className="text-sm font-medium bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                    Disponible para contratación
                  </span>
                </div>

                {/* Main Headline - Más compacto */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Desarrollador</span>
                    <span className="relative">
                      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                        Full Stack
                      </span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" />
                    </span>
                  </h1>
                  
                  <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                    Transformo ideas en experiencias digitales excepcionales con tecnologías modernas.
                  </p>
                </div>

                {/* CTA Buttons - Más compactos */}
                <div className="flex flex-wrap gap-3">
                  <button className="group px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <span>Ver Proyectos</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Contactar
                    </span>
                  </button>
                </div>

                {/* Stats - Más compactas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-lg font-bold">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Profile más compacto */}
              <div className="space-y-6">
                {/* Profile Card */}
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-pink-500/30">
                          <img 
                            src="/img/foto.jpg" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 p-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                          <Rocket className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">Torco Dev</h3>
                        <p className="text-gray-400 text-sm mt-1">Senior Full Stack Developer</p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs">4.9/5 Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Progress - Más compacto */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 border border-white/10 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-pink-400" />
                    Stack Tecnológico
                  </h4>
                  <div className="space-y-3">
                    {techStack.map((tech, index) => (
                      <div key={index} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span>{tech.name}</span>
                          <span className="text-gray-400">{tech.level}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${tech.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase - Justo después del hero */}
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-white/10 mb-4">
                <Zap className="w-4 h-4 text-cyan-300" />
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Proyectos Destacados
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Innovación
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  en Acción
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Soluciones que transforman negocios y mejoran experiencias
              </p>
            </div>

            <PremiumProjectsSlider />
          </div>
        </section>

        {/* Value Proposition - Más compacta */}
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 xl:px-20 bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Rendimiento Óptimo",
                  description: "Aplicaciones optimizadas para velocidad y escalabilidad",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Código Limpio",
                  description: "Arquitectura sólida y mantenible con mejores prácticas",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Experiencia UX",
                  description: "Interfaces intuitivas que encantan a los usuarios",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-lg w-fit mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Más compacta */}
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    ¿Listo para transformar
                  </span>{" "}
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    tu visión?
                  </span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                  Colaboremos para crear algo extraordinario.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Iniciar Proyecto</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Ver Portafolio
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}