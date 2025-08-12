// src/pages/ProjectsPage.tsx
interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}
const projects: Project[] = [
  {
    title: "Portfolio Personal",
    description:
      "Diseñado con React, TypeScript y Tailwind CSS. Un sitio responsivo para mostrar mis habilidades y proyectos.",
    image: "/images/portfolio.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://tusitio.com",
  },
  {
    title: "Gestor de Tareas",
    description:
      "Aplicación para gestionar tareas con autenticación y base de datos en tiempo real.",
    image: "/images/task-manager.png",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "https://tusitio.com",
  },
  {
    title: "E-commerce Demo",
    description:
      "Tienda online con carrito de compras, pasarela de pago y panel de administración.",
    image: "/images/ecommerce.png",
    tech: ["Next.js", "Stripe", "MongoDB"],
    link: "https://tusitio.com",
  },
];
export default function ProjectsPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Mis Proyectos
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
