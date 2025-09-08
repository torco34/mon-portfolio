export interface Project {
  id: number | string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  actions?: { label: string; href: string }[];
}
export type ApiProject = {
  id: number | string;
  title: string;
  description?: string;
  image_url?: string;
  repo_url?: string;
};
