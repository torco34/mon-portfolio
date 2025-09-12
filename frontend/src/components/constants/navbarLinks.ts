// 📂 src/constants/navbarLinks.ts
export const navbarLinks = [
  { path: "/", key: "home" },
  { path: "/projects", key: "projects" },
  { path: "/skills", key: "skills" },
  { path: "/about", key: "about" },
  { path: "/education", key: "education" },
  { path: "/contact", key: "contact" },
] as const;

// 👇 ahora sí puedes extraer el tipo
export type NavbarLinkKey = (typeof navbarLinks)[number]["key"];
