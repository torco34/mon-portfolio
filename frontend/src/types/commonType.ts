//  card de proyectos, trabajos, etc.
export type CardAction = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export interface CardItemProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  actions?: CardAction[];
}
