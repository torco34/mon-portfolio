import { useEffect, useState } from "react";
import { 
  Briefcase,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Zap,
  Star,
  ChevronRight,
  Sparkles
} from "lucide-react";

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  gradient: string;
  icon: string;
};

export default function ExperiencePage() {
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    // Datos de ejemplo para experiencia con diseño premium
    const mockData: ExperienceItem[] = [
      {
        id: "1",
        title: "Senior Full Stack Developer",
        company: "Tech Solutions Inc.",
        period: "2022 - Presente",
        location: "Lima, Perú (Remoto)",
        description: "Liderazgo técnico en desarrollo de aplicaciones web escalables utilizando arquitecturas modernas de microservicios y tecnologías de vanguardia.",
        technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL", "Redis", "PostgreSQL"],
        achievements: [
          "Lideré el desarrollo de una plataforma que procesa 1M+ transacciones mensuales",
          "Implementé sistema de caching que redujo tiempos de respuesta en 70%",
          "Mentoré a 5 desarrolladores junior en mejores prácticas",
          "Arquitectura de microservicios que escaló a 50K usuarios concurrentes"
        ],
        gradient: "from-pink-500 to-purple-600",
        icon: "🚀"
      },
      {
        id: "2",
        title: "Frontend Tech Lead",
        company: "Digital Agency",
        period: "2020 - 2022",
        location: "Barcelona, España",
        description: "Dirección de equipos frontend en proyectos internacionales, estableciendo estándares de calidad y arquitectura para aplicaciones empresariales.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Storybook", "Jest", "Cypress", "Webpack"],
        achievements: [
          "Desarrollé 20+ aplicaciones web para Fortune 500 companies",
          "Establecí sistema de design system usado por 50+ desarrolladores",
          "Reduje bundle size en 40% con code splitting avanzado",
          "Implementé testing automatizado con 95% coverage"
        ],
        gradient: "from-cyan-500 to-blue-500",
        icon: "🎨"
      },
      {
        id: "3",
        title: "Full Stack Developer",
        company: "Startup Innovadora",
        period: "2019 - 2020",
        location: "Silicon Valley (Remoto)",
        description: "Desarrollo integral de MVP y prototipos para validación de productos, trabajando en equipos ágiles multidisciplinarios.",
        technologies: ["Vue.js", "Python", "Django", "MongoDB", "Firebase", "Stripe", "Socket.io", "Heroku"],
        achievements: [
          "Contribuí al lanzamiento exitoso de 3 productos con 100K+ usuarios",
          "Desarrollé API REST que maneja 10K+ requests/minuto",
          "Implementé sistema de pagos con Stripe processing $500K+",
          "Creé dashboard de analytics en tiempo real"
        ],
        gradient: "from-green-500 to-emerald-500",
        icon: "⚡"
      }
    ];

    // Simular carga de API
    setTimeout(() => {
      setExperienceData(mockData);
      setLoading(false);
    }, 500);
  }, []);

  // Stats
  const experienceStats = [
    { icon: <Calendar className="w-5 h-5" />, value: "4+", label: "Años de experiencia" },
    { icon: <Briefcase className="w-5 h-5" />, value: "15+", label: "Proyectos completados" },
    { icon: <Users className="w-5 h-5" />, value: "10+", label: "Equipos liderados" },
    { icon: <Award className="w-5 h-5" />, value: "99%", label: "Satisfacción cliente" },
  ];

  const skillsByExperience = [
    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind"], level: 95 },
    { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "Redis"], level: 90 },
    { category: "DevOps", skills: ["AWS", "Docker", "CI/CD", "Kubernetes"], level: 85 },
    { category: "Leadership", skills: ["Mentoring", "Architecture", "Agile", "Documentation"], level: 88 },
  ];

  if (loading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 text-white flex items-center justify-center">
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 animate-pulse"></div>
            <span className="text-sm font-medium text-pink-300">Cargando experiencia...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 text-white">
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
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-pink-300" />
                <span className="text-sm font-medium text-pink-200">Trayectoria Profesional</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Experiencia & Logros
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Mi recorrido profesional en el desarrollo de software, desde proyectos startups 
                hasta soluciones empresariales escalables. Cada experiencia ha sido un paso 
                hacia la excelencia técnica.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {experienceStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:border-pink-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Skills Overview */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/15 rounded-2xl p-8 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-pink-400" />
                    <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                      Habilidades por Experiencia
                    </span>
                  </h2>
                  
                  <div className="space-y-6">
                    {skillsByExperience.map((skillSet, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-white">{skillSet.category}</h3>
                          <span className="text-sm text-pink-300">{skillSet.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                            style={{ width: `${skillSet.level}%` }}
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skillSet.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-800/50 text-sm rounded-full border border-white/15 text-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-white">Línea de Tiempo</h3>
                    <div className="space-y-4">
                      {experienceData.map((exp) => (
                        <div key={exp.id} className="flex items-start gap-3">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mt-2 shrink-0" />
                          <div>
                            <p className="font-medium text-white">{exp.title}</p>
                            <p className="text-sm text-pink-300">{exp.period}</p>
                            <p className="text-xs text-gray-400">{exp.company}</p>
                          </div>
                        </div>
                      ))}
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

              {/* Experience Cards */}
              <div className="lg:col-span-2 space-y-8">
                {experienceData.map((exp) => (
                  <article
                    key={exp.id}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-2xl`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white">
                              {exp.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-lg font-semibold text-pink-300">
                                {exp.company}
                              </span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-lg font-medium text-pink-300">
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-200 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Tecnologías utilizadas
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gradient-to-r from-pink-500/10 to-purple-600/10 text-pink-300 text-sm rounded-full border border-pink-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Logros principales
                          </h5>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 mt-2 shrink-0" />
                                <span className="text-gray-200">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-cyan-500/10 border border-pink-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <Sparkles className="w-8 h-8 text-pink-300" />
                <h3 className="text-2xl font-bold text-white">
                  ¿Listo para colaborar?
                </h3>
                <p className="text-gray-200">
                  Mi experiencia está a tu disposición. Hablemos sobre cómo puedo 
                  contribuir a tu próximo proyecto exitoso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-medium hover:scale-105"
                  >
                    <span>Contactarme</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-white/15 text-white rounded-xl hover:border-pink-500/40 transition-all duration-300 font-medium hover:scale-105"
                  >
                    <span>Ver Proyectos</span>
                    <Star className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}