export interface Project {
  id: number | string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  actions?: { label: string; href: string }[];
}
