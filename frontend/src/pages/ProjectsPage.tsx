import { PageHeader } from "../components/common/PageHeader";
import ProjectsSection from "../components/projects/ProjectsSection";
// src/pages/ProjectsPage.tsx

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Proyectos"
        description="Este es un proyecto hecho con Node.js y React"
      />
      <ProjectsSection />
    </>
  );
}
