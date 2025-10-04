import type { CardItemProps } from "../../types/commonType";
import { Image } from "./Image";

export const CardInform = ({
  title,
  subtitle,
  description,
  image,
  actions = [],
}: CardItemProps) => {
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
          <p className="text-gray-600 h-30 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Acciones opcionales */}
      {actions.length > 0 && (
        <div className="flex flex-col gap-3 mt-3">
          {actions.map((action, idx) =>
            action.href ? (
              <a
                key={idx}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full  py-2 text-sm text-center bg-orange-400 text-white rounded-lg shadow hover:bg-orange-500 transition"
              >
                {action.label}
              </a>
            ) : (
              <button
                key={idx}
                onClick={action.onClick}
                className="w-full py-2 text-sm text-center bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
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
