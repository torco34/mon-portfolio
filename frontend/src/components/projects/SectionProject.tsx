// pages/ProjectsPage.tsx
import { useProjects } from "../../hooks/useProjects";
import { ApiStatus } from "../common/ApiStatus";
import { CardInform } from "../common/CardInform";
export const SectionProject = () => {
  const { projects, loading, error } = useProjects();
  console.log("📌 Projects en SectionProject:", projects);
  return (
    <ApiStatus loading={loading} error={error}>
      <section className="w-full min-h-screen flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full p-6 place-items-center">
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
      </section>
      {/* </div> */}
    </ApiStatus>
  );
};
