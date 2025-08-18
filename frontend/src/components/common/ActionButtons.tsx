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
              ? "bg-orange-500 text-orange-50 hover:bg-orange-400"
              : "border border-orange-600 text-orange-700 hover:bg-orange-200"
          }`}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
};
