// services/SkillService.ts
import { API } from "../API/api";
import type { ApiSkill } from "../types/skillsType";

export class SkillService {
  static async getByUser(username: string): Promise<ApiSkill[]> {
    const res = await API.get<ApiSkill[]>(`/skills/${username}`);
    return res.data;
  }
}
