import { useLanguage } from "../../context/LanguageContext";
import type { HomeProps } from "../../types/homeType";
import { ActionButtons } from "../common/ActionButtons";
import { ApiStatus } from "../common/ApiStatus";
import { Image } from "../common/Image";

export const HomeSection = ({
  highlighted,
  actions = [],
  image,
}: HomeProps) => {
  const { t } = useLanguage();
  const loading = false; // Simulación de estado de carga

  return (
    <ApiStatus loading={loading} error={null}>
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url('/img/fundoIn.jpg')` }}
      >
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 leading-tight drop-shadow-lg">
              {t("home.title")}{" "}
              <span className="text-orange-300">{highlighted}</span>
            </h1>

            <p className="text-lg text-gray-100 max-w-lg drop-shadow-md">
              {t("home.description")}
            </p>

            <div className="flex flex-wrap gap-4">
              <ActionButtons actions={actions} />
            </div>
          </div>

          {/* Imagen de perfil */}
          <div className="relative flex justify-center md:justify-end">
            <div className="p-1 rounded-full bg-gradient-to-r from-orange-300 via-yellow-400 to-red-500 animate-spin-slow">
              <Image
                src={image}
                alt="Foto de perfil"
                rounded
                className="w-150 h-150 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </ApiStatus>
  );
};
