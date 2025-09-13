// export interface Action {
//   href: string;
//   primary?: boolean;
//   label: string;
//   onClick: () => void;
// }
export interface Action {
  href: string;
  label: "projects" | "contact" | "github"; // 👈 ya no es texto directo
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
