import ApiStatus from "../components/common/ApiStatus"; // si quieres usar tu spinner bonito
import { CardSkill } from "../components/skills/CardSkill";
import { useSkills } from "../services/useSkills";

export default function SkillsPage() {
  const { data: skills, loading, error } = useSkills("torco34");

  return (
    <ApiStatus loading={loading} error={error}>
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skills?.map((skill) => (
          <CardSkill key={skill.lang} skill={skill} />
        ))}
      </div>
    </ApiStatus>
  );
}
