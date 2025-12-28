import { useEffect, useState } from "react";

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements?: string[];
};

export default function ExperiencePage() {
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Datos de ejemplo para experiencia
    const mockData: ExperienceItem[] = [
      {
        id: "1",
        title: "Desarrollador Full Stack",
        company: "Tech Solutions Inc.",
        period: "2022 - Presente",
        location: "Ciudad, País",
        description: "Desarrollo de aplicaciones web completas utilizando tecnologías modernas como React, Node.js y bases de datos NoSQL.",
        technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Tailwind"],
        achievements: [
          "Lideré el desarrollo de una plataforma que aumentó la eficiencia en un 40%",
          "Implementé sistema de autenticación JWT seguro",
          "Optimicé rendimiento de aplicaciones reduciendo tiempos de carga en 60%"
        ]
      },
      {
        id: "2",
        title: "Frontend Developer",
        company: "Digital Agency",
        period: "2020 - 2022",
        location: "Ciudad, País",
        description: "Creación de interfaces de usuario responsivas y accesibles para diversos clientes corporativos.",
        technologies: ["React", "JavaScript", "CSS", "SASS", "Webpack"],
        achievements: [
          "Desarrollé 15+ sitios web responsivos",
          "Implementé mejores prácticas de accesibilidad WCAG 2.1",
          "Reduje tiempos de desarrollo en 30% con componentes reutilizables"
        ]
      },
      {
        id: "3",
        title: "Junior Developer",
        company: "Startup Innovadora",
        period: "2019 - 2020",
        location: "Ciudad, País",
        description: "Participación en el desarrollo de MVP y prototipos para validación de productos.",
        technologies: ["JavaScript", "HTML", "CSS", "Git", "Figma"],
        achievements: [
          "Contribuí al lanzamiento exitoso de 3 productos MVP",
          "Automatizé procesos de testing reduciendo errores en 25%",
          "Colaboré en diseño de arquitectura de software"
        ]
      }
    ];

    // Simular carga de API
    setTimeout(() => {
      setExperienceData(mockData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-pink-50 to-cyan-50 min-h-screen flex items-center justify-center">
        <p className="text-pink-500 text-xl">Cargando experiencia...</p>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-pink-50 to-cyan-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Experiencia <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Profesional</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo de software. Aquí encontrarás 
            mis roles, responsabilidades y logros en cada posición.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-400">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Línea de tiempo
                </h3>
                <p className="text-gray-600 text-sm">
                  Mi recorrido profesional desde los inicios hasta el presente.
                </p>

                <ol className="mt-6 space-y-4">
                  {experienceData.map((exp) => (
                    <li key={exp.id} className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-pink-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {exp.title}
                        </p>
                        <p className="text-xs text-gray-500">{exp.period}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Stats */}
              <div className="mt-6 bg-gradient-to-r from-pink-400 to-cyan-500 p-6 rounded-xl shadow text-white">
                <h4 className="text-lg font-semibold mb-4">Resumen</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm opacity-90">Años de experiencia</p>
                    <p className="text-2xl font-bold">4+</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Proyectos completados</p>
                    <p className="text-2xl font-bold">20+</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Tecnologías dominadas</p>
                    <p className="text-2xl font-bold">15+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="md:col-span-2">
            <div className="space-y-8">
              {experienceData.map((exp) => (
                <article
                  key={exp.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition border-l-4 border-cyan-400"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-lg font-semibold text-pink-600">
                            {exp.company}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-600">{exp.location}</span>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg font-medium">
                        {exp.period}
                      </div>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6">
                      <h5 className="text-sm font-semibold text-gray-900 mb-3">
                        Tecnologías utilizadas
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-pink-50 to-cyan-50 text-gray-700 text-sm rounded-full border border-pink-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-6">
                        <h5 className="text-sm font-semibold text-gray-900 mb-3">
                          Logros principales
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
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
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            ¿Interesado en colaborar o conocer más sobre mi experiencia?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
            >
              Contactarme
            </a>
            <a
              href="/projects"
              className="inline-block px-6 py-3 bg-white text-pink-600 rounded-lg hover:bg-pink-50 transition font-medium border border-pink-300"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}