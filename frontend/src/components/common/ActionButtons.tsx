import type { Action } from "../ts/HomeType";

interface ActionButtonsProps {
  actions: Action[];
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ actions }) => {
  if (!actions || actions.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4">
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.href}
          className={`px-6 py-3 rounded-lg transition shadow-lg ${
            action.primary
              ? "bg-orange-200 text-dark-900  hover:bg-orange-50"
              : "border border-orange-300 bg-orange-50 text-dark-400 hover:bg-orange-200"
          }`}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
};
