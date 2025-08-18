import { CardInform } from "../common/CardInform";
const projects = [
  {
    title: "Portfolio Web",
    subtitle: "React + Node.js",
    description:
      "Aplicación web moderna con frontend en React y backend en Node.js. Incluye autenticación y CRUD.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    actions: [
      { label: "Ver Proyecto", href: "https://mi-portfolio.com" },
      { label: "GitHub", href: "https://github.com/miusuario/portfolio" },
    ],
  },
  {
    title: "E-commerce App",
    subtitle: "Next.js + MongoDB",
    description:
      "Plataforma de comercio electrónico con pasarela de pagos e integración de carrito.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    actions: [
      { label: "Demo", href: "https://mi-ecommerce.com" },
      { label: "GitHub", href: "https://github.com/miusuario/ecommerce" },
    ],
  },
  {
    title: "Blog Personal",
    subtitle: "Astro + Tailwind",
    description:
      "Un blog rápido y optimizado para SEO con contenido dinámico y diseño minimalista.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Astro_Logo.svg",
    actions: [
      { label: "Visitar", href: "https://mi-blog.com" },
      { label: "GitHub", href: "https://github.com/miusuario/blog" },
    ],
  },
];
export const ProjectsSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-10 text-center">
          Mis Proyectos
        </h2>

        {/* Grid responsive */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <CardInform
              key={idx}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              image={project.image}
              actions={project.actions}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
