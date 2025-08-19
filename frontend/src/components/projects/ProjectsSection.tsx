// Adjust this if you prefer to read from an env var

import { useEffect, useState } from "react";

import { CardInform } from "../common/CardInform"; // importa tu componente
// const API_URL = "http://localhost:4000/api/projects";
interface Project {
  id: number | string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  actions?: { label: string; href: string }[];
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:4000/api/projects");
      if (!res.ok) throw new Error("Error al traer proyectos");
      const data = await res.json();

      // mapear campos de la API → props que usa CardInform
      type ApiProject = {
        id: number | string;
        title: string;
        description?: string;
        image_url?: string;
        repo_url?: string;
      };

      const mapped = (data as ApiProject[]).map((p) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        image: p.image_url, // mapeamos image_url → image
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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Proyectos</h1>

      {loading && <p className="text-gray-500">Cargando...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <CardInform
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            image={project.image}
            actions={project.actions}
          />
        ))}
      </div>
    </div>
  );
}
