import { CardSkill } from "../components/skills/CardSkill";
import { useSkills } from "../services/useSkills";

export default function SkillsPage() {
  const { data: skills, loading } = useSkills("torco34");

  if (loading) {
    return <p className="text-center text-gray-900">Cargando skills...</p>;
  }

  // 🚨 Si no hay skills, no mostrar nada
  if (!skills || skills.length === 0) {
    return null; // <- no renderiza nada
    // O si quieres mostrar mensaje:
    // return <p className="text-center text-gray-500">No hay skills disponibles</p>;
  }

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <CardSkill key={skill.lang} skill={skill} />
      ))}
    </div>
  );
}
