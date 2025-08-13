type EduItem = {
  id: string;
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  level?: "Básico" | "Intermedio" | "Avanzado";
  link?: string; // url a certificado o proyecto
};

const eduData: EduItem[] = [
  {
    id: "bootcamp",
    title: "Bootcamp Full Stack",
    subtitle: "Curso intensivo práctico",
    period: "2023",
    description:
      "Bootcamp intensivo con proyectos reales enfocando buenas prácticas, Git, despliegue y metodología ágil.",
    level: "Avanzado",
  },
  {
    id: "react",
    title: "React",
    subtitle: "SPAs y hooks",
    period: "2023 - 2024",
    description:
      "Construcción de interfaces con React, hooks, rutas, gestión de estado y optimización de rendimiento.",
    level: "Avanzado",
  },
  {
    id: "node",
    title: "Node.js + Express",
    subtitle: "APIs REST",
    period: "2023",
    description:
      "Creación de APIs REST con Express, manejo de middlewares, autenticación y rutas protegidas.",
    level: "Intermedio",
  },
  {
    id: "mysql",
    title: "MySQL",
    subtitle: "Bases de datos relacionales",
    period: "2023",
    description:
      "Modelado de datos, consultas, joins, índices y conexión desde Node.js usando mysql2.",
    level: "Intermedio",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    subtitle: "Diseño utilitario",
    period: "2023",
    description:
      "Diseño rápido y responsivo usando utilidades, temas y configuración en tailwind.config.js.",
    level: "Intermedio",
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    subtitle: "Componentes y grid",
    period: "2022",
    description:
      "Prototipado rápido con componentes, utilidades y sistema de grid tradicional.",
    level: "Básico",
  },
  {
    id: "css",
    title: "CSS puro",
    subtitle: "Layout y responsive",
    period: "2022",
    description:
      "Selectores, flexbox, grid, animaciones básicas y buenas prácticas de organización CSS.",
    level: "Intermedio",
  },
  {
    id: "html",
    title: "HTML",
    subtitle: "Estructura semántica",
    period: "2021",
    description:
      "Etiquetas semánticas, accesibilidad básica, formularios y mejores prácticas SEO on-page.",
    level: "Avanzado",
  },
];
export default function EducationPage() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Educación y Cursos
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Formación práctica y tecnologías que domino. Aquí encontrarás
            bootcamps, cursos y experiencias relevantes ordenadas para mostrar
            tus competencias.
          </p>
        </header>

        {/* GRID: timeline left + cards right on md+, stacked on mobile */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Timeline column */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Línea de aprendizaje
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Desde fundamentos hasta stacks modernos — ordena por prioridad
                  o fecha.
                </p>

                <ol className="mt-6 space-y-4">
                  {eduData.slice(0, 4).map((e) => (
                    <li key={e.id} className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {e.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {e.period}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                          {e.subtitle}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Cards column */}
          <div className="md:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {eduData.map((item) => (
                <article
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.subtitle}{" "}
                          {item.period ? `· ${item.period}` : ""}
                        </p>
                      </div>
                      <div className="text-sm px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                        {item.level}
                      </div>
                    </div>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {/* placeholder tags: puedes mapear tech o badges reales */}
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-200">
                        {item.title.includes("React") ? "React" : item.title}
                      </span>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                        >
                          Ver certificado
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ¿Quieres ver proyectos relacionados con estas tecnologías?
          </p>
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
