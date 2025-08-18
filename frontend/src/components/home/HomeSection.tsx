import type { HomeProps } from "../ts/HomeType";
import { ActionButtons } from "./ActionButtons";

export const HomeSection = ({
  title,
  highlighted,
  description,
  actions = [],
  image,
}: HomeProps) => {
  return (
    <section className="bg-gradient-to-br  bg-orange-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900  leading-tight">
            {title}{" "}
            <span className="text-orange-500 dark:text-range-400">
              {highlighted}
            </span>
          </h1>

          <p className="text-lg text-gray-600  max-w-lg">{description}</p>

          <div className="flex flex-wrap gap-4">
            <ActionButtons actions={actions} />
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end">
          <img
            src={image}
            alt="Foto de perfil"
            className="w-80 md:w-[28rem] rounded-full border-4 border-orange-950 object-contain bg-white"
          />
        </div>
      </div>
    </section>
  );
};
