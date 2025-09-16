import { PageHeader } from "../components/common/PageHeader";
import { SectionProject } from "../components/projects/SectionProject";
// src/pages/ProjectsPage.tsx

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Proyectos"
        description="Aplicación desarrollada con Node.js, Express y React, conectada a una base de datos MySQL."
      />

      <SectionProject />
    </>
  );
}
