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
  const loading = false;

  return (
    <ApiStatus loading={loading} error={null}>
      <section className="relative w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
           {/* Profile Image - Oval with pink/cyan effects */}
          <div className="relative group animate-fadeInUp">
            <div className="absolute -inset-6 bg-gradient-to-br from-pink-300/40 via-rose-300/30 to-cyan-300/25 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <div className="absolute -inset-3 bg-gradient-to-tr from-pink-400/25 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-rose-400 to-cyan-400 rounded-full opacity-40 blur-xl group-hover:opacity-60 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-[50%] w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-8 border-pink-100 shadow-2xl">
                <Image
                  src={image}
                  alt="Foto de perfil"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
              
              {/* Pink/cyan badges */}
              <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-bold rounded-full shadow-xl animate-float border border-pink-300">
                <span className="flex items-center gap-1">
                  <span>👨‍💻</span>
                  <span>Dev</span>
                </span>
              </div>
              <div className="absolute -bottom-3 -left-3 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full shadow-xl animate-float delay-500 border border-cyan-300">
                <span className="flex items-center gap-1">
                  <span>🚀</span>
                  <span>Full Stack</span>
                </span>
              </div>
            </div>
          </div>

           {/* Text Content - Pink/cyan theme */}
          <div className="space-y-8 lg:space-y-10 animate-fadeInUp delay-300">
            <div className="space-y-6">
              <div>
                <h2 className="text-base md:text-lg font-semibold bg-gradient-to-r from-pink-600 to-cyan-600 bg-clip-text text-transparent mb-3 tracking-widest uppercase">
                  ✨ Bienvenido a mi Portafolio
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-800">{t("home.title")}</span>{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                      {highlighted}
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse"></span>
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
                {t("home.description")}
              </p>
            </div>

            {/* Tech Stack - Pink/cyan theme */}
            <div className="flex flex-wrap gap-3 md:gap-4 animate-fadeInUp delay-500">
              {["React", "TypeScript", "Node.js", "Tailwind", "MongoDB", "Next.js"].map((tech, idx) => {
                const colors = [
                  "from-pink-400 to-rose-400",
                  "from-cyan-400 to-blue-400", 
                  "from-pink-500 to-cyan-500",
                  "from-rose-400 to-pink-400",
                  "from-cyan-500 to-blue-500",
                  "from-pink-600 to-rose-600"
                ];
                return (
                  <div
                    key={tech}
                    className="group relative px-5 py-3 bg-pink-50/80 border border-pink-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-100/80"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" 
                         style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
                    <div className="relative flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${colors[idx]} rounded-full animate-ping`} style={{ animationDelay: `${idx * 200}ms` }}></div>
                      <span className="text-pink-900 font-medium">{tech}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="animate-fadeInUp delay-700">
              <ActionButtons actions={actions} />
            </div>

            {/* Social Links - Pink/cyan theme */}
            <div className="flex gap-5 animate-fadeInUp delay-900">
              <a href="https://github.com/torco34" className="group flex items-center gap-2 text-pink-800 hover:text-pink-900 transition-all duration-300" title="GitHub">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-pink-200">
                  <span className="text-lg">🐙</span>
                </div>
                <span className="font-medium">GitHub</span>
              </a>
              <a href="https://linkedin.com" className="group flex items-center gap-2 text-cyan-800 hover:text-cyan-900 transition-all duration-300" title="LinkedIn">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-200">
                  <span className="text-lg">💼</span>
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="/contact" className="group flex items-center gap-2 text-rose-800 hover:text-rose-900 transition-all duration-300" title="Contacto">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-100 to-rose-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-rose-200">
                  <span className="text-lg">📧</span>
                </div>
                <span className="font-medium">Contacto</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </ApiStatus>
  );
};
