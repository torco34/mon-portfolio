import foto from "../assets/img/foto.jpg";
import { HomeSection } from "../components/home/HomeSection";
export default function HomePage() {
  return (
    <>
      <HomeSection
        title="HOLA, SOY"
        highlighted="TORCOROMA"
        description="Desarrollador Full Stack apasionado por crear experiencias web rápidas, modernas y atractivas. Aquí podrás explorar mis proyectos, habilidades y trayectoria."
        image={foto}
        actions={[
          {
            href: "/projects",
            label: "Ver Proyectos",
            primary: true,
            onClick: () => {},
          },
          { href: "/contact", label: "Contáctame", onClick: () => {} },
          {
            href: "https://github.com/torco34",
            label: "GitHub",
            onClick: () => {},
          },
        ]}
      />
    </>
  );
}
