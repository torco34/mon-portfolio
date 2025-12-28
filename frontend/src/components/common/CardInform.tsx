import { ArrowRight } from "lucide-react";
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
    <div className="bg-[#F6F5F5] rounded-2xl shadow-md p-6 flex flex-col items-center  gap-4 w-full max-w-sm">
      {/* Imagen */}
      {image && (
        <div className="w-52 h-52 rounded-full overflow-hidden shadow">
          <Image
            src={image}
            alt={title || ""}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Texto */}
      <div className="px-2">
        <h3 className="text-2xl text-left font-bold text-[#F73D93]">{title}</h3>

        {subtitle && (
          <p className="text-gray-700 font-medium mt-1">{subtitle}</p>
        )}

        {description && (
          <p className="text-gray-600 text-sm mt-5 text-left leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Acciones */}
      {actions.length > 0 && (
        <div className="w-full flex flex-col items-cente gap-3 ">
          {actions.map((action, idx) =>
            action.href ? (
              <a
                key={idx}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 bg-[#F73D93] text-white rounded-full hover:bg-[#d62978] transition shadow"
              >
                {action.label}
                <ArrowRight size={18} />
              </a>
            ) : (
              <button
                key={idx}
                onClick={action.onClick}
                className="w-full py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition shadow"
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
