import { useLanguage } from "../../context/LanguageContext"; // 👈 corregido
import { ActionButtons } from "../common/ActionButtons";
import { Image } from "../common/Image";
import type { HomeProps } from "../ts/HomeType";

export const HomeSection = ({ highlighted, actions = [], image }: HomeProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn">
          {/* 👇 título traducido */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            {t("home.title")}{" "}
            <span className="text-orange-500">{highlighted}</span>
          </h1>

          {/* 👇 descripción traducida */}
          <p className="text-lg text-gray-600 max-w-lg">
            {t("home.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <ActionButtons actions={actions} />
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={image}
            alt="Foto de perfil"
            rounded
            grayscale
            border
            className="w-100 h-100"
          />
        </div>
      </div>
    </section>
  );
};
