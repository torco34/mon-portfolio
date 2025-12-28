type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tech?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Colegio Digital",
    description:
      "Sitio web desarrollado con WordPress, HTML y PHP, actualmente en producción y administrado para garantizar su correcto funcionamiento y mantenimiento continuo.",
    image: "/img/colegio.png",
    link: "#",
    tech: ["WordPress", "PHP", "HTML", "CSS"]
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard full stack con visualización de datos en tiempo real, gráficos interactivos y panel de administración completo.",
    image: "/img/bosques.png",
    link: "#",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Landing Page Moderna",
    description: "Landing page con diseño cyberpunk, animaciones fluidas y optimizada para conversiones y experiencia de usuario.",
    image: "/img/talen.png",
    link: "#",
    tech: ["Next.js", "Tailwind", "Framer Motion", "GSAP"]
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
    image: "/img/rokola.png",
    link: "#",
    tech: ["React", "Redux", "Express", "PostgreSQL"]
  },
  {
    id: 5,
    title: "App Móvil UI/UX",
    description: "Diseño de interfaz de usuario para aplicación móvil con enfoque en experiencia de usuario y accesibilidad.",
    image: "/img/refugio.png",
    link: "#",
    tech: ["Figma", "React Native", "UI/UX", "Prototyping"]
  },
];
