// components/skills/SkillsSection.tsx
import { useSkills } from "../../hooks/useSkills"; // ✅ ruta correcta
import { ApiStatus } from "../common/ApiStatus";
import { CardSkill } from "./CardSkill";

export default function SkillsSection() {
  const { data: skills, loading } = useSkills();

  return (
    <ApiStatus loading={loading} error={null}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <CardSkill key={skill.lang} skill={skill} />
          ))}
        </div>
      </div>
    </ApiStatus>
  );
}
