import { API } from "../API/api";
import type { ApiProject, Project } from "../types/servicesType";

export class ProjectService {
  static async getAll(): Promise<Project[]> {
console.log(API, "rllflrf,lr");
const res = await API.get<ApiProject[]>("/projects");
console.log(res);
    return res.data.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      image: p.image_url,
      actions: p.repo_url ? [{ label: "Repositorio", href: p.repo_url }] : [],
    }));
  }
}
