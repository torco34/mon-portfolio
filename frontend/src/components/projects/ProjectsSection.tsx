import { useEffect, useState } from "react";

import { getProjects } from "../../API/index";
import { ApiStatus } from "../common/ApiStatus";
import { CardInform } from "../common/CardInform";
import type { ApiProject, Project } from "../ts/ProjectsSetion";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getProjects();
      const data: ApiProject[] = res.data;

      const mapped: Project[] = data.map((p) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        image: p.image_url, // API → UI
        actions: p.repo_url ? [{ label: "Repositorio", href: p.repo_url }] : [],
      }));

      setProjects(mapped);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ApiStatus loading={loading} error={error}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <CardInform
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              image={`/img/${project.image}`}
              actions={project.actions}
            />
          ))}
        </div>
      </div>
    </ApiStatus>
  );
}
