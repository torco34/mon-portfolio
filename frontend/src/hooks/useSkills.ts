import { useEffect, useState } from "react";

import { SkillService } from "../services/skillsServices";
import type { ApiSkill } from "../types/skillsType";
export function useSkills(username: string) {
  const [data, setData] = useState<ApiSkill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SkillService.getByUser(username)
      .then((skills) => setData(skills))
      .catch((err) => console.error("Error fetching skills:", err))
      .finally(() => setLoading(false));
  }, [username]);

  return { data, loading };
}
