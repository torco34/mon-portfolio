import { API } from "../API/api";
import type { ApiSkill } from "../types/skillsType";

export class skillsServices {
  static async getAll(): Promise<ApiSkill[]> {
    const res = await API.get<ApiSkill[]>("/skills");
    return res.data;
  }
}
