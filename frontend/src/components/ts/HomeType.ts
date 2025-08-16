export interface Action {
  href: string;
  primary?: boolean;
  label: string;
  onClick: () => void;
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
