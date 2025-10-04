// components/skills/SkillsSection.tsx
import { useLanguage } from "../../context/LanguageContext";
import { useSkills } from "../../hooks/useSkills";
import { ApiStatus } from "../common/ApiStatus";
import { CardSkill } from "./CardSkill";

export default function SkillsSection() {
  const { data: skills, loading } = useSkills();
  const { t } = useLanguage();

  return (
    <ApiStatus loading={loading} error={null}>
      <div className="max-w-6xl mx-auto p-6">
        {/* ✅ Traducir el título */}
        <h2 className="text-2xl font-bold mb-6">{t("skills.title")}</h2>

        <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <CardSkill key={skill.lang} skill={skill} />
          ))}
        </div>
      </div>
    </ApiStatus>
  );
}
