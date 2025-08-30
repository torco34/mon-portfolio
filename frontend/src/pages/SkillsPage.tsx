import { CardSkill } from "../components/skills/CardSkill";
import { useSkills } from "../services/useSkills";

export default function SkillsPage() {
  const { data, loading } = useSkills("torco34");

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="p-6">
      <CardSkill
        title="Lenguajes más usados"
        subtitle="Stack de desarrollo"
        description="Datos obtenidos desde la API local"
        image="/logo.png"
        data={data}
        actions={[{ label: "Ver más", href: "https://github.com/torco34" }]}
      />
    </div>
  );
}
