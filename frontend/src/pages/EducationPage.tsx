import { useEffect, useState } from "react";
import { 
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  Clock,
  Star,
  TrendingUp,
  Zap,
  ExternalLink
} from "lucide-react";

type EduItem = {
  id: string;
  titulo: string;
  institucion?: string;
  inicio?: string;
  period?: string;
  duracion?: string;
  description: string;
  level?: "Básico" | "Intermedio" | "Avanzado";
  link?: string;
};

export default function EducationPage() {
  const [eduData, setEduData] = useState<EduItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Datos de ejemplo mientras carga la API
    const mockData: EduItem[] = [
      {
        id: "1",
        titulo: "Full Stack Development Bootcamp",
        institucion: "Tech Academy",
        inicio: "2023",
        duracion: "6 meses",
        description: "Bootcamp intensivo cubriendo React, Node.js, bases de datos y despliegue en la nube.",
        level: "Avanzado",
        link: "#"
      },
      {
        id: "2",
        titulo: "React & TypeScript Masterclass",
        institucion: "Frontend Masters",
        inicio: "2023",
        duracion: "3 meses",
        description: "Dominio completo de React con TypeScript, hooks avanzados y patrones de diseño.",
        level: "Avanzado",
        link: "#"
      },
      {
        id: "3",
        titulo: "AWS Certified Solutions Architect",
        institucion: "Amazon Web Services",
        inicio: "2022",
        duracion: "4 meses",
        description: "Certificación en arquitectura de soluciones en la nube con AWS.",
        level: "Intermedio",
        link: "#"
      },
      {
        id: "4",
        titulo: "UI/UX Design Principles",
        institucion: "Design Institute",
        inicio: "2022",
        duracion: "2 meses",
        description: "Fundamentos de diseño de interfaces y experiencia de usuario.",
        level: "Intermedio",
        link: "#"
      },
      {
        id: "5",
        titulo: "DevOps & CI/CD Pipeline",
        institucion: "Cloud Academy",
        inicio: "2023",
        duracion: "3 meses",
        description: "Automatización de despliegues y pipelines de integración continua.",
        level: "Avanzado",
        link: "#"
      },
      {
        id: "6",
        titulo: "Mobile Development with React Native",
        institucion: "Mobile Masters",
        inicio: "2022",
        duracion: "4 meses",
        description: "Desarrollo de aplicaciones móviles multiplataforma con React Native.",
        level: "Intermedio",
        link: "#"
      }
    ];

    // Simular carga de API
    setTimeout(() => {
      setEduData(mockData);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/15 mb-4">
            <BookOpen className="w-4 h-4 text-pink-300" />
            <span className="text-sm font-medium bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Cargando educación...
            </span>
          </div>
          <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // Stats
  const educationStats = [
    { icon: <BookOpen className="w-5 h-5" />, value: "15+", label: "Cursos Completados" },
    { icon: <Award className="w-5 h-5" />, value: "8", label: "Certificaciones" },
    { icon: <Clock className="w-5 h-5" />, value: "2000+", label: "Horas de Estudio" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "95%", label: "Tasa de Completación" },
  ];

  // Level colors
  const levelColors = {
    "Básico": "from-blue-500 to-cyan-500",
    "Intermedio": "from-green-500 to-emerald-500",
    "Avanzado": "from-pink-500 to-purple-500"
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 blur-3xl animate-pulse delay-1000 right-0 bottom-0" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        
        {/* Floating Icons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/30 animate-float"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              fontSize: '32px',
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + Math.random() * 4}s`,
            }}
          >
            📚
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <section className="pt-20 pb-12 md:pt-24 md:pb-16 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/15 mb-6">
                <GraduationCap className="w-4 h-4 text-pink-300" />
                <span className="text-sm font-medium bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Formación Continua
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Educación
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  & Cursos
                </span>
              </h1>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                Inversión constante en conocimiento. Bootcamps, certificaciones y cursos 
                que han formado mi expertise técnico.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {educationStats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/15 hover:border-pink-500/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}
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

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Timeline Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-white/15 backdrop-blur-sm mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-pink-400" />
                      Línea de Aprendizaje
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Evolución constante desde fundamentos hasta stacks modernos.
                    </p>

                    <ol className="space-y-4">
                      {eduData.slice(0, 4).map((course) => (
                        <li key={course.id} className="group">
                          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 mt-2 shrink-0" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-white">{course.titulo}</p>
                              <p className="text-xs text-gray-400 mt-1">{course.inicio}</p>
                              {course.level && (
                                <div className={`mt-2 px-2 py-1 text-xs rounded-full bg-gradient-to-r ${levelColors[course.level]} w-fit`}>
                                  {course.level}
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Learning Philosophy */}
                  <div className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 p-6 rounded-xl border border-white/15">
                    <h4 className="font-semibold text-white mb-3">Mi Filosofía de Aprendizaje</h4>
                    <p className="text-gray-200 text-sm">
                      Creo en el aprendizaje continuo y práctico. Cada curso es una inversión 
                      en habilidades que luego aplico en proyectos reales.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-200">Aprendizaje aplicado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses Grid */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {eduData.map((course) => (
                    <article
                      key={course.id}
                      className="group relative"
                    >
                      <div className="absolute -inset-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-white/15 backdrop-blur-sm h-full">
                        {/* Course Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">{course.titulo}</h4>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 text-sm text-gray-400">
                                <BookOpen className="w-4 h-4" />
                                <span>{course.institucion}</span>
                              </div>
                              {course.inicio && (
                                <>
                                  <span className="text-gray-600">•</span>
                                  <div className="flex items-center gap-1 text-sm text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>{course.inicio}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          
                          {course.level && (
                            <div className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${levelColors[course.level]}`}>
                              {course.level}
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-200 mb-6">{course.description}</p>

                        {/* Course Details */}
                        <div className="space-y-3 mb-6">
                          {course.duracion && (
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-cyan-400" />
                              <span className="text-gray-200">Duración: {course.duracion}</span>
                            </div>
                          )}
                          
                          {/* Progress Indicator */}
                          <div className="pt-2">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Progreso</span>
                              <span>100%</span>
                            </div>
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-full"></div>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-sm text-gray-400">Completado</span>
                          </div>
                          
                          {course.link && (
                            <a
                              href={course.link}
                              target="_blank"
                              rel="noreferrer"
                              className="group/link inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                            >
                              <span>Ver Certificado</span>
                              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Learning Journey */}
                <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-white/15">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-4">
                      <TrendingUp className="w-4 h-4 text-cyan-300" />
                      <span className="text-sm font-medium bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                        Próximos Objetivos
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Mi Viaje de Aprendizaje Continúa</h3>
                    <p className="text-gray-200 max-w-2xl mx-auto mb-6">
                      Siempre buscando nuevos desafíos y tecnologías para dominar. 
                      El aprendizaje nunca termina en el mundo del desarrollo.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/30 text-pink-300">
                        Machine Learning
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 text-cyan-300">
                        Blockchain
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 text-green-300">
                        DevOps Avanzado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/15 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      ¿Listo para aplicar este conocimiento?
                    </span>
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Todo este aprendizaje se traduce en soluciones reales y efectivas para tus proyectos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/projects"
                      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-xl hover:scale-105 transition-all duration-300 hover-glow"
                    >
                      Ver Proyectos
                    </a>
                    <a
                      href="/contact"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Colaborar
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