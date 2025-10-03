// hooks/useSkills.ts
import { useEffect, useState } from "react";
import { skillsServices } from "../services/skillsServices";
import type { ApiSkill } from "../types/skillsType";

export function useSkills() {
  const [data, setData] = useState<ApiSkill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    skillsServices
      .getAll()
      .then((skills) => setData(skills))
      .catch((err) => console.error("Error fetching skills:", err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
