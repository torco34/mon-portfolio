// pages/ProjectsPage.tsx
import { useProjects } from "../../hooks/useProjects";
import { ApiStatus } from "../common/ApiStatus";
import { CardInform } from "../common/CardInform";

export const SectionProject = () => {
  const { projects, loading, error } = useProjects();

  return (
    <ApiStatus loading={loading} error={error}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <CardInform
              key={project.id}
              title={project.title}
              description={project.description}
              image={`/img/${project.image}`}
              actions={project.actions}
            />
          ))}
        </div>
      </div>
    </ApiStatus>
  );
};
