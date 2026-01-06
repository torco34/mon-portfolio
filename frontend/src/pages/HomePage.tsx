
import { useState, useEffect } from "react";
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

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentProject, setCurrentProject] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

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
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % premiumProjects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, premiumProjects.length]);

  const stats = [
    { icon: <Code className="w-5 h-5" />, value: "50+", label: "Proyectos" },
    { icon: <Zap className="w-5 h-5" />, value: "99.9%", label: "Uptime" },
    { icon: <Users className="w-5 h-5" />, value: "30+", label: "Clientes" },
    { icon: <Award className="w-5 h-5" />, value: "15+", label: "Certificaciones" },
  ];

  const techStack = [
    { name: "React", level: 95, color: "from-cyan-500 to-blue-600" },
    { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-600" },
    { name: "Node.js", level: 88, color: "from-green-500 to-emerald-600" },
    { name: "Next.js", level: 85, color: "from-gray-500 to-gray-800" },
    { name: "Tailwind", level: 92, color: "from-teal-500 to-cyan-600" },
    { name: "AWS", level: 80, color: "from-orange-500 to-yellow-600" },
  ];

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

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 md:px-8 lg:px-12 xl:px-20 py-12 md:py-20">
          <div className="max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               {/* Left Column - Hero Content */}
               <div className="space-y-8 animate-fade-in-up">
                 {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/25 to-purple-600/25 backdrop-blur-sm rounded-full border border-pink-500/40 animate-float">
                   <Sparkles className="w-4 h-4 text-pink-300 animate-pulse" />
                   <span className="text-sm font-medium text-pink-200">
                     Disponible para contratación
                   </span>
                 </div>

                 {/* Main Headline */}
                 <div className="space-y-6">
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                     <span className="block text-gray-100">Desarrollador</span>
                     <span className="relative inline-block mt-2">
                       <span className="text-gradient-animated text-5xl md:text-6xl lg:text-7xl">
                         Full Stack
                       </span>
                       <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full animate-pulse-glow" />
                     </span>
                   </h1>
                   
                    <p className="text-lg text-gray-200 max-w-xl leading-relaxed animate-fade-in-up delay-300">
                     Transformo ideas en experiencias digitales excepcionales con tecnologías modernas.
                   </p>
                 </div>

                 {/* CTA Buttons */}
                 <div className="flex flex-wrap gap-3 animate-fade-in-up delay-500">
                   <button className="group px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 hover-glow">
                     <span>Ver Proyectos</span>
                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </button>
                    <button className="group px-6 py-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl font-semibold hover:bg-gray-800/80 transition-all duration-300 border border-white/15 hover:border-pink-500/40 hover-glow">
                     <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                       Contactar
                     </span>
                   </button>
                 </div>

                  {/* Stats */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 animate-fade-in-up delay-700">
                   {stats.map((stat, index) => (
                     <div 
                       key={index}
                       className="p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl border border-white/15 hover:border-pink-500/40 transition-all duration-300 group hover:scale-105 hover-glow animate-scale-in"
                       style={{ animationDelay: `${index * 100}ms` }}
                     >
                       <div className="flex items-center gap-3">
                         <div className="p-2 bg-gradient-to-br from-pink-500/25 to-purple-500/25 rounded-lg group-hover:scale-110 transition-transform duration-300">
                           {stat.icon}
                         </div>
                          <div>
                           <div className="text-xl font-bold text-white">{stat.value}</div>
                           <div className="text-sm text-gray-200">{stat.label}</div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

               {/* Right Column - Profile */}
               <div className="space-y-6 animate-fade-in-up delay-300">
                 {/* Profile Card */}
                 <div className="relative group">
                   <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow" />
                    <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/15 shadow-2xl hover-glow">
                     <div className="flex items-center gap-6">
                       <div className="relative">
                         <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-lg opacity-30 animate-pulse" />
                         <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-pink-400/50">
                           <img 
                             src="/img/foto.jpg" 
                             alt="Profile" 
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                         </div>
                         <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce-subtle">
                           <Rocket className="w-5 h-5 text-white" />
                         </div>
                       </div>
                          <div className="flex-1">
                         <h3 className="text-2xl font-bold text-white">Torco Dev</h3>
                         <p className="text-gray-200 text-base mt-1">Senior Full Stack Developer</p>
                         <div className="flex items-center gap-2 mt-3">
                           <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                           <span className="text-sm text-gray-200">4.9/5 Rating</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                  {/* Tech Stack Progress */}
                 <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-white/15 shadow-2xl hover-glow animate-fade-in-up delay-500">
                   <h4 className="font-semibold text-white mb-5 flex items-center gap-3">
                     <Target className="w-5 h-5 text-pink-400 animate-pulse" />
                     <span className="text-lg">Stack Tecnológico</span>
                   </h4>
                   <div className="space-y-4">
                     {techStack.map((tech, index) => (
                       <div key={index} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="flex justify-between">
                           <span className="text-white font-medium">{tech.name}</span>
                           <span className="text-pink-300 font-bold">{tech.level}%</span>
                         </div>
                         <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden">
                           <div 
                             className={`absolute h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                             style={{ width: `${tech.level}%` }}
                           />
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 backdrop-blur-sm rounded-full border border-cyan-500/40 mb-5 animate-float">
                 <Zap className="w-4 h-4 text-cyan-300 animate-pulse" />
                 <span className="text-sm font-medium text-cyan-200">
                   Proyectos Destacados
                 </span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                 <span className="text-gradient-animated">
                   Innovación en Acción
                 </span>
               </h2>
               <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                 Soluciones que transforman negocios y mejoran experiencias
               </p>
             </div>

             {/* Premium Projects Slider */}
             <div className="relative group animate-scale-in">
               {/* Background Glow */}
               <div className="absolute -inset-6 bg-gradient-to-r from-pink-500/25 via-purple-500/25 to-cyan-500/25 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow" />
               
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 border border-white/15 shadow-2xl overflow-hidden hover-glow">
                 {/* Project Counter */}
                 <div className="absolute top-8 right-8 z-10 animate-fade-in-right">
                    <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-full border border-white/15">
                     <div className="flex gap-1.5">
                       {premiumProjects.map((_, idx) => (
                         <button
                           key={idx}
                           onClick={() => goToProject(idx)}
                           className={`w-2 h-2 rounded-full transition-all duration-300 ${
                             idx === currentProject 
                               ? 'bg-gradient-to-r from-pink-500 to-cyan-500 w-8 scale-125' 
                               : 'bg-gray-500 hover:bg-gray-400'
                           }`}
                           aria-label={`Ir al proyecto ${idx + 1}`}
                         />
                       ))}
                     </div>
                     <span className="text-sm text-gray-200 ml-3 font-medium">
                       {currentProject + 1}/{premiumProjects.length}
                     </span>
                   </div>
                 </div>

                 <div className="grid lg:grid-cols-2 gap-10">
                   {/* Project Image */}
                   <div className="relative animate-fade-in-left">
                     <div className="absolute -inset-5 bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-cyan-500/40 rounded-2xl blur-2xl animate-pulse-glow" />
                      <div className="relative overflow-hidden rounded-2xl border border-white/15 group/image">
                       <img
                         src={project.image}
                         alt={project.title}
                         className="w-full h-72 md:h-96 object-cover group-hover/image:scale-110 transition-transform duration-700"
                       />
                       {/* Overlay Gradient */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                       
                       {/* Live Badge */}
                       <div className="absolute top-6 left-6 animate-bounce-subtle">
                         <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg">
                           <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                           <span className="text-sm font-bold text-white">LIVE</span>
                         </div>
                       </div>
                     </div>

                     {/* Navigation Buttons */}
                     <div className="flex justify-center gap-6 mt-8">
                       <button
                         onClick={prevProject}
                         className="p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-full border border-white/15 hover:border-pink-500/40 transition-all duration-300 hover:scale-110 hover-glow"
                         aria-label="Proyecto anterior"
                       >
                         <ArrowLeft className="w-6 h-6 text-gray-200" />
                       </button>
                       <button
                         onClick={nextProject}
                         className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110 hover-glow"
                         aria-label="Siguiente proyecto"
                       >
                         <ArrowRight className="w-6 h-6 text-white" />
                       </button>
                     </div>
                  </div>

                   {/* Project Details */}
                   <div className="space-y-8 animate-fade-in-right">
                      <div>
                       <h3 className="text-4xl font-bold text-white mb-4">{project.title}</h3>
                       <p className="text-gray-200 leading-relaxed text-lg">{project.description}</p>
                     </div>

                     {/* Technologies */}
                      <div>
                       <h4 className="text-base font-semibold text-gray-300 mb-4">TECNOLOGÍAS</h4>
                       <div className="flex flex-wrap gap-3">
                         {project.technologies.map((tech, idx) => (
                           <span
                             key={idx}
                             className="px-4 py-2 bg-gradient-to-r from-pink-500/15 to-cyan-500/15 text-sm rounded-xl border border-pink-500/30 text-pink-200 font-medium hover:scale-105 transition-transform duration-300"
                             style={{ animationDelay: `${idx * 100}ms` }}
                           >
                             {tech}
                           </span>
                         ))}
                       </div>
                     </div>

                     {/* Features */}
                      <div>
                       <h4 className="text-base font-semibold text-gray-300 mb-4">CARACTERÍSTICAS</h4>
                       <div className="grid grid-cols-2 gap-3">
                         {project.features.map((feature, idx) => (
                           <div
                             key={idx}
                             className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-pink-500/15 to-purple-600/15 rounded-xl border border-pink-500/30 hover:scale-105 transition-transform duration-300"
                             style={{ animationDelay: `${idx * 100}ms` }}
                           >
                             <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" />
                             <span className="text-sm text-gray-200 font-medium">{feature}</span>
                           </div>
                         ))}
                       </div>
                     </div>

                     {/* Action Buttons */}
                     <div className="flex gap-6 pt-6">
                       <a
                         href={project.liveUrl}
                         className="flex-1 group/live flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-bold text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 hover-glow"
                       >
                         <Globe className="w-5 h-5" />
                         <span>Ver Demo</span>
                         <ExternalLink className="w-5 h-5 group-hover/live:translate-x-2 transition-transform duration-300" />
                       </a>
                        <a
                         href={project.githubUrl}
                         className="flex-1 group/github flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl font-bold hover:bg-gray-800/80 transition-all duration-300 border border-white/15 hover:border-pink-500/40 hover-glow"
                       >
                         <Github className="w-5 h-5 text-gray-200" />
                         <span className="text-gray-200">Código</span>
                       </a>
                     </div>
                  </div>
                </div>

                 {/* Auto-play Indicator */}
                 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 animate-fade-in-up">
                   <div className={`w-3 h-3 rounded-full ${autoPlay ? 'bg-green-400 animate-pulse-glow' : 'bg-gray-500'}`} />
                    <span className="text-sm text-gray-300 font-medium">
                     {autoPlay ? 'Auto-play activado' : 'Auto-play pausado'}
                   </span>
                 </div>
              </div>
            </div>
          </div>
        </section>

          {/* Value Proposition */}
         <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12 xl:px-20">
           <div className="max-w-7xl mx-auto">
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 {
                   icon: <TrendingUp className="w-7 h-7" />,
                   title: "Rendimiento Óptimo",
                   description: "Aplicaciones optimizadas para velocidad y escalabilidad",
                   gradient: "from-green-500 to-emerald-500",
                   animation: "fade-in-up"
                 },
                 {
                   icon: <Code className="w-7 h-7" />,
                   title: "Código Limpio",
                   description: "Arquitectura sólida y mantenible con mejores prácticas",
                   gradient: "from-blue-500 to-cyan-500",
                   animation: "fade-in-up delay-200"
                 },
                 {
                   icon: <Users className="w-7 h-7" />,
                   title: "Experiencia UX",
                   description: "Interfaces intuitivas que encantan a los usuarios",
                   gradient: "from-purple-500 to-pink-500",
                   animation: "fade-in-up delay-400"
                 }
               ].map((item, index) => (
                  <div 
                   key={index}
                   className={`group p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/15 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 shadow-2xl hover-glow animate-${item.animation}`}
                 >
                   <div className={`p-4 bg-gradient-to-r ${item.gradient} rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                     {item.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                   <p className="text-gray-200 text-base">{item.description}</p>
                 </div>
               ))}
             </div>
           </div>
         </section>

         {/* CTA Section */}
         <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12 xl:px-20">
           <div className="max-w-4xl mx-auto text-center animate-scale-in">
             <div className="relative">
               <div className="absolute -inset-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse-glow" />
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-12 border border-white/15 shadow-2xl hover-glow">
                 <h2 className="text-4xl md:text-5xl font-bold mb-6">
                   <span className="text-gradient-animated">
                     ¿Listo para transformar tu visión?
                   </span>
                 </h2>
                 <p className="text-xl text-gray-200 mb-10 max-w-xl mx-auto">
                   Colaboremos para crear algo extraordinario.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <button className="group px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl font-bold text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 hover-glow">
                     <span>Iniciar Proyecto</span>
                     <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                   </button>
                   <button className="group px-10 py-5 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl font-bold hover:bg-gray-800/80 transition-all duration-300 border border-white/15 hover:border-pink-500/40 hover-glow">
                     <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                       Ver Portafolio
                     </span>
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </section>
      </div>
    </div>
  );
}