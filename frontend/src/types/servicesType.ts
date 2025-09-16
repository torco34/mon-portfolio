// types/servicesType.ts
export interface ApiProject {
  id: string;
  title: string;
  description: string;
  image_url: string;
  repo_url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  actions: { label: string; href: string }[];
}
