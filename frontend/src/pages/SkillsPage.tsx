import { PageHeader } from "../components/common/PageHeader";
import SkillsSection from "../components/skills/SkillsSection";

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="HABILIDADES"
        description="Estas son las tecnologías y lenguajes que utilizo en mis proyectos."
      />
      <SkillsSection username="torco34" />
    </>
  );
}
