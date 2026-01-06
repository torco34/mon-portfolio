import { useState, useEffect } from "react";
import { 
  Code, 
  Github, 
  Globe,
  Zap,
  Filter,
  Search,
  Star,
  ArrowUpRight
} from "lucide-react";

export default function ProjectsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Project categories
  const categories = [
    { id: "all", label: "Todos", icon: "🌟", count: 12 },
    { id: "web", label: "Web Apps", icon: "🌐", count: 6 },
    { id: "mobile", label: "Mobile", icon: "📱", count: 3 },
    { id: "ecommerce", label: "E-commerce", icon: "🛒", count: 2 },
    { id: "dashboard", label: "Dashboards", icon: "📊", count: 4 },
    { id: "api", label: "APIs", icon: "⚡", count: 3 },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Pro",
      description: "Plataforma de comercio electrónico completa con carrito inteligente, sistema de pagos y panel de administración avanzado.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      category: "ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "10K+",
        revenue: "$500K+",
        rating: 4.9,
        uptime: "99.9%"
      },
      featured: true,
      gradient: "from-pink-500 to-purple-600"
    },
    {
      id: 2,
      title: "Health & Fitness AI",
      description: "Aplicación de seguimiento de salud con IA que analiza rutinas de ejercicio, nutrición y progreso personalizado.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "TensorFlow", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "50K+",
        downloads: "100K+",
        rating: 4.8,
        active: "85%"
      },
      featured: true,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      title: "Fintech Analytics Dashboard",
      description: "Dashboard financiero en tiempo real con visualización de datos, predicciones de mercado y gestión de portafolios.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      category: "dashboard",
      technologies: ["Next.js", "TypeScript", "D3.js", "WebSocket", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        clients: "200+",
        accuracy: "95%",
        speed: "2ms",
        uptime: "99.99%"
      },
      featured: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Collaboration Suite Enterprise",
      description: "Suite de colaboración empresarial con chat en tiempo real, gestión de proyectos y videoconferencias integradas.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      category: "web",
      technologies: ["Vue.js", "Socket.io", "WebRTC", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        teams: "500+",
        messages: "1M+",
        storage: "10TB",
        uptime: "99.95%"
      },
      featured: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Plataforma inmobiliaria con búsqueda inteligente, tours virtuales 360° y sistema de citas automatizado.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      category: "web",
      technologies: ["React", "Three.js", "Mapbox", "Node.js", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        properties: "5K+",
        agents: "200+",
        visits: "50K+",
        sales: "$10M+"
      },
      featured: false,
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "Education LMS Platform",
      description: "Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones automáticas y analytics de progreso.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
      category: "web",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        students: "20K+",
        courses: "500+",
        completion: "85%",
        rating: 4.7
      },
      featured: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 7,
      title: "Food Delivery API",
      description: "API escalable para servicio de delivery de comida con geolocalización, pagos y sistema de repartidores.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
      category: "api",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        requests: "1M+/day",
        latency: "<50ms",
        uptime: "99.9%",
        partners: "500+"
      },
      featured: false,
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 8,
      title: "Travel Planning App",
      description: "Aplicación móvil para planificación de viajes con itinerarios inteligentes, reservas y recomendaciones personalizadas.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Google Maps API", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "100K+",
        countries: "50+",
        bookings: "500K+",
        rating: 4.6
      },
      featured: false,
      gradient: "from-teal-500 to-green-500"
    },
    {
      id: 9,
      title: "Healthcare Management System",
      description: "Sistema integral de gestión hospitalaria con historiales médicos, citas y telemedicina integrada.",
      image: "https://images.unsplash.com/photo-1516549655669-df6654e435de?w=800&auto=format&fit=crop",
      category: "dashboard",
      technologies: ["Angular", "NestJS", "PostgreSQL", "Docker", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        patients: "50K+",
        doctors: "500+",
        accuracy: "99%",
        uptime: "99.99%"
      },
      featured: false,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  // Filter projects based on category and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Featured projects (first 3)
  const featuredProjects = projects.filter(p => p.featured);

  // Stats
  const projectStats = {
    total: projects.length,
    completed: 9,
    inProgress: 3,
    clients: 30,
    revenue: "$2M+"
  };

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
        
        {/* Code particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-green-400/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            >
              {Math.random() > 0.5 ? "<Code>" : "() => {}"}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 md:pt-24 md:pb-16 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/25 to-purple-600/25 backdrop-blur-sm rounded-full border border-pink-500/40 mb-6 animate-float">
                 <Code className="w-4 h-4 text-pink-300 animate-pulse" />
                 <span className="text-sm font-medium text-pink-200">
                   Portafolio de Proyectos
                 </span>
               </div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                 <span className="text-gradient-animated">
                   Proyectos Destacados
                 </span>
               </h1>
               
               {/* Terminal typing effect */}
               <div className="max-w-2xl mx-auto mb-8">
                 <div className="bg-gray-900/50 rounded-xl p-6 border border-green-500/20 font-mono text-left animate-fade-in-up delay-300">
                   <div className="text-green-400 mb-4">$ cat projects.txt</div>
                   <div className="space-y-2 text-gray-200">
                     <div className="animate-fade-in-left" style={{ animationDelay: "0.5s" }}>
                       <span className="text-cyan-300">▶</span> Proyectos completados: <span className="text-green-400">9/9</span>
                     </div>
                     <div className="animate-fade-in-left" style={{ animationDelay: "0.7s" }}>
                       <span className="text-cyan-300">▶</span> Tecnologías utilizadas: <span className="text-pink-300">15+</span>
                     </div>
                     <div className="animate-fade-in-left" style={{ animationDelay: "0.9s" }}>
                       <span className="text-cyan-300">▶</span> Clientes satisfechos: <span className="text-yellow-300">30+</span>
                     </div>
                     <div className="animate-fade-in-left" style={{ animationDelay: "1.1s" }}>
                       <span className="text-cyan-300">▶</span> Tasa de éxito: <span className="text-green-400">100%</span>
                     </div>
                   </div>
                   <div className="mt-4 text-green-400 animate-pulse">
                     $ <span className="text-cyan-300">Ready to explore projects...</span>
                   </div>
                 </div>
               </div>
               
               <p className="text-lg text-gray-200 max-w-3xl mx-auto animate-fade-in-up delay-500">
                 Soluciones innovadoras que han transformado negocios y mejorado experiencias de usuario.
               </p>
             </div>

             {/* Stats */}
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
               {Object.entries(projectStats).map(([key, value], index) => (
                  <div 
                   key={key}
                   className="p-5 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl border border-white/15 hover:border-pink-500/40 transition-all duration-300 group hover:scale-105 hover-glow animate-scale-in"
                   style={{ animationDelay: `${index * 100}ms` }}
                 >
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white mb-2 animate-pulse">{value}</div>
                     <div className="text-sm text-gray-200 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                   </div>
                 </div>
               ))}
             </div>

             {/* Search and Filter */}
             <div className="mb-12 animate-fade-in-up delay-300">
               <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                 {/* Search Bar */}
                 <div className="relative flex-1 max-w-md group">
                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
                    <input
                     type="text"
                     placeholder="Buscar proyectos, tecnologías..."
                     className="w-full pl-12 pr-4 py-3.5 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl border border-white/15 focus:border-pink-500/40 focus:outline-none focus:ring-2 focus:ring-pink-500/30 text-white placeholder-gray-400 hover-glow transition-all duration-300"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                   />
                 </div>

                 {/* Category Filter */}
                 <div className="flex items-center gap-3">
                   <Filter className="w-5 h-5 text-gray-500 animate-pulse" />
                   <div className="flex flex-wrap gap-2">
                     {categories.map((category, index) => (
                       <button
                         key={category.id}
                         onClick={() => setSelectedCategory(category.id)}
                          className={`px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 animate-fade-in-up hover:scale-105 ${
                           selectedCategory === category.id
                             ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover-glow'
                             : 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm text-gray-300 hover:text-white border border-white/15 hover:border-pink-500/40 hover-glow'
                         }`}
                         style={{ animationDelay: `${index * 50}ms` }}
                       >
                         <span className="text-lg">{category.icon}</span>
                         <span className="font-medium">{category.label}</span>
                         <span className="text-xs opacity-75 bg-black/20 px-1.5 py-0.5 rounded">({category.count})</span>
                       </button>
                     ))}
                   </div>
                 </div>
               </div>
             </div>

             {/* Featured Projects */}
             {selectedCategory === "all" && (
               <div className="mb-16 animate-fade-in-up delay-400">
                  <div className="flex items-center gap-3 mb-8">
                    <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                    <h2 className="text-2xl font-bold text-white">Proyectos Destacados</h2>
                  </div>
                 <div className="grid md:grid-cols-3 gap-8">
                   {featuredProjects.map((project, index) => (
                     <div 
                       key={project.id}
                       className="group relative animate-scale-in"
                       style={{ animationDelay: `${index * 200}ms` }}
                     >
                       <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow`} />
                        <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/15 h-full hover-glow">
                         {/* Project Image */}
                         <div className="relative h-56 overflow-hidden group/image">
                           <img
                             src={project.image}
                             alt={project.title}
                             className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                           <div className="absolute top-5 left-5 animate-bounce-subtle">
                             <div className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg">
                               <span className="text-sm font-bold text-white">FEATURED</span>
                             </div>
                           </div>
                         </div>

                         {/* Project Content */}
                          <div className="p-7">
                           <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                           <p className="text-gray-200 text-base mb-5 line-clamp-2">{project.description}</p>

                           {/* Technologies */}
                           <div className="flex flex-wrap gap-2 mb-5">
                             {project.technologies.slice(0, 3).map((tech, idx) => (
                                <span
                                 key={idx}
                                 className="px-3 py-1.5 bg-gradient-to-r from-pink-500/25 to-purple-600/25 text-pink-200 text-sm rounded-lg border border-pink-500/40 hover:scale-105 transition-transform duration-300"
                                 style={{ animationDelay: `${idx * 100}ms` }}
                               >
                                 {tech}
                               </span>
                             ))}
                             {project.technologies.length > 3 && (
                                <span className="px-3 py-1.5 bg-gradient-to-br from-gray-800/60 to-gray-900/60 text-gray-300 text-sm rounded-lg border border-white/15">
                                 +{project.technologies.length - 3}
                               </span>
                             )}
                           </div>

                           {/* Stats */}
                           <div className="grid grid-cols-2 gap-3 mb-6">
                             {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                                <div key={key} className="text-center p-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl border border-white/15">
                                 <div className="text-base font-bold text-white">{value}</div>
                                 <div className="text-xs text-gray-300 capitalize">{key}</div>
                               </div>
                             ))}
                           </div>

                           {/* Action Buttons */}
                           <div className="flex gap-3">
                             <a
                               href={project.liveUrl}
                               className="flex-1 group/live flex items-center justify-center gap-3 px-5 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white text-base font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 hover-glow"
                             >
                               <Globe className="w-5 h-5" />
                               <span>Demo</span>
                               <ArrowUpRight className="w-4 h-4 group-hover/live:translate-x-1 group-hover/live:-translate-y-1 transition-transform" />
                             </a>
                              <a
                               href={project.githubUrl}
                               className="flex-1 group/github flex items-center justify-center gap-3 px-5 py-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl text-gray-200 text-base font-bold hover:text-white transition-all duration-300 border border-white/15 hover:border-pink-500/40 hover-glow"
                             >
                               <Github className="w-5 h-5" />
                               <span>Código</span>
                             </a>
                           </div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             )}

             {/* All Projects Grid */}
             <div className="mb-12 animate-fade-in-up delay-500">
                <div className="flex items-center justify-between mb-8">
                 <h2 className="text-2xl font-bold text-white">
                   {selectedCategory === "all" ? "Todos los Proyectos" : 
                    categories.find(c => c.id === selectedCategory)?.label + " Projects"}
                 </h2>
                 <div className="flex items-center gap-3">
                   <div className="px-4 py-2 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl border border-white/15">
                     <span className="text-gray-200 font-medium">
                       {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'} encontrados
                     </span>
                   </div>
                 </div>
               </div>

               {filteredProjects.length === 0 ? (
                  <div className="text-center py-16 animate-fade-in-up">
                    <div className="text-6xl mb-6 animate-bounce-subtle">🔍</div>
                    <h3 className="text-2xl font-bold text-white mb-3">No se encontraron proyectos</h3>
                    <p className="text-gray-300 text-lg">Intenta con otros términos de búsqueda o selecciona otra categoría</p>
                  </div>
               ) : (
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {filteredProjects.map((project, index) => (
                      <div 
                       key={project.id}
                       className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-white/15 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 h-full hover-glow animate-scale-in"
                       style={{ animationDelay: `${index * 100}ms` }}
                     >
                       {/* Project Image */}
                       <div className="relative h-48 overflow-hidden group/image">
                         <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                         <div className="absolute top-4 right-4 animate-bounce-subtle">
                           <div className={`px-3 py-2 bg-gradient-to-r ${project.gradient} rounded-xl shadow-lg`}>
                             <span className="text-sm font-bold text-white">
                               {categories.find(c => c.id === project.category)?.icon}
                             </span>
                           </div>
                         </div>
                       </div>

                       {/* Project Content */}
                        <div className="p-6">
                         <div className="flex items-start justify-between mb-4">
                           <h3 className="text-xl font-bold text-white">{project.title}</h3>
                           {project.featured && (
                             <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
                           )}
                         </div>
                         
                         <p className="text-gray-200 text-base mb-5 line-clamp-2">{project.description}</p>

                         {/* Technologies */}
                         <div className="flex flex-wrap gap-2 mb-5">
                            {project.technologies.slice(0, 4).map((tech, idx) => (
                             <span
                               key={tech}
                               className="px-3 py-1.5 bg-gradient-to-r from-pink-500/25 to-purple-600/25 text-pink-200 text-sm rounded-lg border border-pink-500/40 hover:scale-105 transition-transform duration-300"
                               style={{ animationDelay: `${idx * 50}ms` }}
                             >
                               {tech}
                             </span>
                           ))}
                         </div>

                         {/* Stats */}
                         <div className="grid grid-cols-2 gap-3 mb-6">
                           {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                             <div key={key} className="text-center p-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl border border-white/15">
                               <div className="text-base font-bold text-white">{value}</div>
                               <div className="text-xs text-gray-300 capitalize">{key}</div>
                             </div>
                           ))}
                         </div>

                         {/* Action Buttons */}
                         <div className="flex gap-3">
                           <a
                             href={project.liveUrl}
                             className="flex-1 group/live flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white text-base font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 hover-glow"
                           >
                             <Globe className="w-4 h-4" />
                             <span>Demo</span>
                           </a>
                            <a
                             href={project.githubUrl}
                             className="flex-1 group/github flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-lg text-gray-200 text-base font-bold hover:text-white transition-all duration-300 border border-white/15 hover:border-pink-500/40 hover-glow"
                           >
                             <Github className="w-4 h-4" />
                             <span>Code</span>
                           </a>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>

             {/* CTA Section */}
             <div className="text-center animate-scale-in delay-600">
               <div className="relative">
                 <div className="absolute -inset-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse-glow" />
                  <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 border border-white/15 hover-glow">
                   <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     <span className="text-gradient-animated">
                       ¿Listo para crear algo increíble juntos?
                     </span>
                   </h2>
                   <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                     Tengo la experiencia y el expertise para llevar tu proyecto al siguiente nivel.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-6 justify-center">
                     <a
                       href="/contact"
                       className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl font-bold text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 hover-glow"
                     >
                       Iniciar Proyecto
                     </a>
                     <a
                       href="/skills"
                       className="px-10 py-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl font-bold hover:bg-gray-800/80 transition-all duration-300 border border-white/15 hover:border-pink-500/40 hover-glow"
                     >
                       <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                         Ver Habilidades
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