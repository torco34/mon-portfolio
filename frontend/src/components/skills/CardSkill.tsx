import React from "react";

import { Image } from "../common/Image";

type CardAction = {
  label: string;
  href?: string;
  onClick?: () => void;
};

interface LanguageData {
  lang: string;
  percent: number;
}

interface CardSkillProps {
  skill: LanguageData;
  image?: string;
  actions?: CardAction[];
}

const COLORS: Record<string, string> = {
  JavaScript: "#f7df1e",
  HTML: "#e34c26",
  TypeScript: "#3178c6",
  CSS: "#264de4",
  Vue: "#42b883",
  SCSS: "#c6538c",
  Shell: "#89e051",
  React: "#61dafb",
  Express: "#444444",
  "Node.js": "#68a063",
};

export const CardSkill: React.FC<CardSkillProps> = ({
  skill,
  image,
  actions = [],
}) => {
  return (
    <div
      role="group"
      className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition flex flex-col gap-4"
    >
      {/* Imagen opcional */}
      {image && (
        <div className="flex justify-center">
          <Image
            src={image}
            alt={skill.lang}
            className="max-w-[96px] rounded-xl"
          />
        </div>
      )}

      {/* Texto */}
      <div>
        <h3 className="text-lg font-bold text-orange-700">{skill.lang}</h3>
        <p className="text-gray-700 font-medium">{skill.percent}%</p>
      </div>

      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${skill.percent}%`,
            backgroundColor: COLORS[skill.lang] || "#ccc",
          }}
        />
      </div>

      {/* Acciones opcionales */}
      {actions.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-3">
          {actions.map((action, idx) =>
            action.href ? (
              <a
                key={idx}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
              >
                {action.label}
              </a>
            ) : (
              <button
                key={idx}
                onClick={action.onClick}
                className="px-4 py-2 text-sm bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
              >
                {action.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};
