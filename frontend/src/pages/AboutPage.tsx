import { useState, useEffect } from "react";
import { 
  Heart,
  Code,
  Trophy,
  Users,
  Music,
  BookOpen,
  Zap,
  Star,
  Smile
} from "lucide-react";

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Personal story sections
  const storySections = [
    {
      year: "2020",
      title: "Los Inicios",
      description: "Mi primer contacto con el código fue por curiosidad. Quería entender cómo funcionaban las aplicaciones que usaba todos los días.",
      icon: "👨‍💻",
      color: "from-pink-500 to-rose-500"
    },
    {
      year: "2021",
      title: "Primer Proyecto Real",
      description: "Desarrollé mi primera aplicación completa para un cliente local. Fue un reto enorme pero aprendí más en 3 meses que en años de estudio.",
      icon: "🚀",
      color: "from-purple-500 to-indigo-500"
    },
    {
      year: "2022",
      title: "Especialización",
      description: "Me enfoqué en desarrollo Full Stack, dominando React, Node.js y bases de datos. Comencé a trabajar en proyectos más complejos.",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500"
    },
    {
      year: "2023 - Presente",
      title: "Crecimiento Profesional",
      description: "He trabajado en más de 15 aplicaciones reales, colaborando con equipos internacionales y resolviendo problemas complejos.",
      icon: "🌟",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Passions and hobbies
  const passions = [
    {
      title: "Deporte & Fitness",
      description: "El deporte es mi pasión. Me mantiene enfocado, disciplinado y con energía para enfrentar cualquier reto.",
      icon: <Trophy className="w-6 h-6" />,
      items: ["🏃 Running diario", "🏋️‍♂️ Entrenamiento funcional", "⚽ Fútbol los fines de semana", "🧘 Yoga para la mente"],
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Desarrollo Personal",
      description: "Creo en el crecimiento constante. Siempre estoy aprendiendo algo nuevo, ya sea técnico o personal.",
      icon: <BookOpen className="w-6 h-6" />,
      items: ["📚 Lectura técnica", "🎧 Podcasts de tecnología", "💡 Resolución de problemas", "🌍 Idiomas"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Creatividad & Arte",
      description: "La creatividad no se limita al código. Disfruto expresarme a través del diseño y la música.",
      icon: <Music className="w-6 h-6" />,
      items: ["🎨 Diseño UI/UX", "🎵 Producción musical", "📸 Fotografía digital", "✏️ Sketching"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  // Professional values
  const values = [
    {
      title: "Pasión por el Código",
      description: "No solo escribo código, creo soluciones. Cada línea tiene un propósito y cada proyecto una historia.",
      icon: <Heart className="w-8 h-8" />,
      stat: "50K+ líneas de código"
    },
    {
      title: "Aprendizaje Continuo",
      description: "En tecnología, si dejas de aprender, te quedas atrás. Me mantengo actualizado con las últimas tendencias.",
      icon: <Zap className="w-8 h-8" />,
      stat: "3+ años de experiencia"
    },
    {
      title: "Trabajo en Equipo",
      description: "Creo en la colaboración. Los mejores resultados vienen de equipos diversos trabajando juntos.",
      icon: <Users className="w-8 h-8" />,
      stat: "15+ proyectos colaborativos"
    },
    {
      title: "Calidad & Detalle",
      description: "La atención al detalle marca la diferencia entre un buen producto y uno excepcional.",
      icon: <Star className="w-8 h-8" />,
      stat: "99% satisfacción cliente"
    }
  ];

  // Fun facts
  const funFacts = [
    { icon: "☕", fact: "Tomo 3 tazas de café al día mientras programo" },
    { icon: "🌙", fact: "Soy más productivo en las noches" },
    { icon: "🎮", fact: "Los videojuegos me inspiraron a aprender a programar" },
    { icon: "🐶", fact: "Tengo un perro que me acompaña en las sesiones de código" },
    { icon: "✈️", fact: "He trabajado con equipos de 5 países diferentes" },
    { icon: "📱", fact: "Mi primera app fue un gestor de tareas para mí mismo" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 text-white">
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
        
        {/* Floating Hearts */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              fontSize: '24px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 md:pt-24 md:pb-16 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-pink-500/30 mb-6">
                <Smile className="w-4 h-4 text-pink-300" />
                <span className="text-sm font-medium text-pink-200">
                  Más que un desarrollador
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hola, soy
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Torco
                </span>
              </h1>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                Desarrollador Full Stack apasionado por crear experiencias digitales extraordinarias. 
                Amo el deporte, el código de calidad y los retos que me hacen crecer.
              </p>
            </div>

            {/* Profile Card */}
            <div className="relative group mb-16">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/15 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-xl opacity-30" />
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <img 
                        src="/img/foto.jpg" 
                        alt="Torco" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating badges */}
                    <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">Torco Dev</h2>
                    <p className="text-pink-300 font-medium mb-4">Senior Full Stack Developer</p>
                    
                    <div className="space-y-3 mb-6">
                      <p className="text-gray-200">
                        <span className="font-semibold">💻 3+ años</span> desarrollando aplicaciones reales
                      </p>
                      <p className="text-gray-200">
                        <span className="font-semibold">🏆 Deportista</span> apasionado que aplica disciplina al código
                      </p>
                      <p className="text-gray-200">
                        <span className="font-semibold">🚀 +15 aplicaciones</span> entregadas con éxito
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                        React Expert
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        Sports Lover
                      </span>
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

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {[
                { id: "story", label: "Mi Historia", icon: "📖" },
                { id: "passions", label: "Pasiones", icon: "❤️" },
                { id: "values", label: "Valores", icon: "⭐" },
                { id: "fun", label: "Datos Curiosos", icon: "😊" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                   className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                     activeTab === tab.id
                       ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                       : 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm text-gray-200 hover:text-white border border-white/15 hover:border-pink-500/40'
                   }`}
                >
                  <span>{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mb-16">
              {/* My Story */}
              {activeTab === "story" && (
                <div className="space-y-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Mi Viaje en el Desarrollo</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      De la curiosidad a la profesión. Cada año ha sido un capítulo de aprendizaje y crecimiento.
                    </p>
                  </div>

                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 hidden lg:block" />
                    
                    <div className="space-y-12 lg:space-y-0">
                      {storySections.map((section, index) => (
                        <div 
                          key={index}
                          className={`relative group ${
                            index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                          }`}
                        >
                          {/* Timeline dot */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-pink-500 z-10 hidden lg:block" />
                          
                          <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105">
                              <div className="flex items-center gap-3 mb-4">
                                <div className={`p-3 bg-gradient-to-r ${section.color} rounded-lg`}>
                                  <span className="text-2xl">{section.icon}</span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-pink-300">{section.year}</div>
                                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                                </div>
                              </div>
                              <p className="text-gray-400">{section.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Passions */}
              {activeTab === "passions" && (
                <div className="space-y-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Lo que me Apasiona</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Más allá del código, estas son las cosas que dan sentido a mi vida y energía a mi trabajo.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {passions.map((passion, index) => (
                      <div 
                        key={index}
                        className="group relative"
                      >
                        <div className={`absolute -inset-3 bg-gradient-to-r ${passion.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-white/15 backdrop-blur-sm h-full">
                          <div className={`p-3 bg-gradient-to-r ${passion.gradient} rounded-lg w-fit mb-4`}>
                            {passion.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{passion.title}</h3>
                          <p className="text-gray-400 mb-4">{passion.description}</p>
                          <ul className="space-y-2">
                            {passion.items.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full" />
                                <span className="text-sm text-gray-200">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sports Quote */}
                  <div className="text-center mt-12">
                    <div className="inline-block p-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl">
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6">
                        <div className="text-4xl mb-4">🏆</div>
                        <p className="text-xl font-bold text-white mb-2">
                          "El deporte me enseñó que la disciplina y la constancia son la clave del éxito, en el código y en la vida."
                        </p>
                         <p className="text-gray-400">- Torco</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Values */}
              {activeTab === "values" && (
                <div className="space-y-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Mis Valores Profesionales</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Los principios que guían mi trabajo y mi forma de colaborar con otros.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                       <div 
                        key={index}
                        className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/15 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 text-center"
                      >
                        <div className="inline-flex p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg mb-4">
                          {value.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                        <p className="text-gray-200 text-sm mb-4">{value.description}</p>
                        <div className="text-sm font-semibold text-pink-300">
                          {value.stat}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Work Philosophy */}
                  <div className="bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-2xl p-8 border border-white/15">
                    <div className="text-center">
                      <div className="text-4xl mb-4">💭</div>
                      <h3 className="text-2xl font-bold text-white mb-4">Mi Filosofía de Trabajo</h3>
                      <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                        Creo que el mejor código no es el más complejo, sino el que resuelve problemas reales de manera elegante. 
                        Combino la disciplina del deporte con la creatividad del desarrollo para crear soluciones que no solo funcionen, 
                        sino que inspiren.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Fun Facts */}
              {activeTab === "fun" && (
                <div className="space-y-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Datos Curiosos Sobre Mí</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Pequeños detalles que me hacen quien soy, dentro y fuera del código.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {funFacts.map((fact, index) => (
                       <div 
                         key={index}
                         className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/15 hover:border-pink-500/40 transition-all duration-300 hover:scale-105"
                       >
                         <div className="flex items-center gap-4">
                           <div className="text-3xl">{fact.icon}</div>
                           <p className="text-gray-200">{fact.fact}</p>
                         </div>
                       </div>
                     ))}
                  </div>

                  {/* Personal Quote */}
                  <div className="text-center mt-12">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-20" />
                      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/15">
                        <div className="text-4xl mb-4">✨</div>
                        <p className="text-xl font-bold text-white mb-4">
                          "Soy un desarrollador que cree que la pasión por el deporte y la tecnología pueden coexistir para crear cosas extraordinarias."
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-sm">TD</span>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Torco Dev</p>
                            <p className="text-sm text-gray-400">Developer & Sports Enthusiast</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/15 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      ¿Listo para crear algo increíble juntos?
                    </span>
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Si buscas un desarrollador apasionado, disciplinado y con experiencia real, estoy aquí para ayudarte.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/contact"
                      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-xl hover:scale-105 transition-all duration-300 hover-glow"
                    >
                      ¡Hablemos!
                    </a>
                    <a
                      href="/projects"
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Ver Mis Proyectos
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