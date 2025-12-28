import { useLanguage } from "../../context/LanguageContext";
import type { TranslationKey } from "../../i18n/LanguageContext";
import type { ActionButtonsProps } from "../ts/HomeType";

export const ActionButtons: React.FC<ActionButtonsProps> = ({ actions }) => {
  const { t } = useLanguage();

  if (!actions || actions.length === 0) return null;

  return (
    <div className="flex  gap-3">
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.href}
          className="flex items-center justify-center rounded-full h-10 w-30 border border-gray-300 bg-white text-cyan-400 transition hover:bg-cyan-400 hover:text-white"
        >
          {t(`home.actions.${action.label}` as TranslationKey)}
        </a>
      ))}
    </div>
  );
};
