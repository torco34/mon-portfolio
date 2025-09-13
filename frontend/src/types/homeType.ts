export interface Action {
  href: string;
  label: "projects" | "contact" | "github";
  primary?: boolean;
  onClick?: () => void;
}
export interface ActionButtonsProps {
  actions: Action[];
}
export interface HomeProps {
  title: string;
  highlighted: string;
  description: string;
  actions?: Action[];
  image: string;
}
