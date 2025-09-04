import React from "react";

import { Image } from "./Image";

type CardAction = {
  label: string;
  href?: string;
  onClick?: () => void;
};

interface CardItemProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  actions?: CardAction[];
}

export const CardInform: React.FC<CardItemProps> = ({
  title,
  subtitle,
  description,
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
            alt={title || ""}
            className="max-w-[300px] rounded-xl"
          />
        </div>
      )}

      {/* Texto */}
      <div>
        <h3 className="text-xl font-bold text-orange-400">{title}</h3>
        {subtitle && <p className="text-gray-700 font-medium">{subtitle}</p>}
        {description && (
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        )}
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
