import { useState } from "react";
import { projects } from "../data/SliderData";
import type { Project } from "../data/SliderData";

export default function ProjectsSlider() {
  const [current, setCurrent] = useState<number>(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
      <div className="relative p-5 md:p-6">
        {/* Clean Header */}
        <div className="text-center mb-8 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
             Proyectos
           </h2>
           <p className="text-pink-300 text-sm">Trabajos recientes</p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
             {projects.map((project: Project) => (
              <div key={project.id} className="min-w-full p-3">
                 <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-500/30">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-md mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-56 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                    />
                     <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xs font-medium rounded shadow">
                      Nuevo
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <h3 className="text-lg md:text-xl font-bold text-white">
                         {project.title}
                       </h3>
                       <span className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-medium rounded border border-cyan-500/30">
                         Live
                       </span>
                    </div>

                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                       {project.description}
                     </p>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-4 border-t border-white/10">
                       <a
                         href={project.link}
                         className="group/link inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium rounded hover:shadow-lg transition-all duration-300 text-sm shadow-sm hover:scale-105"
                       >
                         <span>Ver proyecto</span>
                         <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                           →
                         </span>
                       </a>
                       <div className="flex flex-wrap gap-1.5">
                         {project.tech?.map((tech: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 text-pink-300 text-xs font-medium rounded border border-pink-500/30"
                            >
                              {tech}
                            </span>
                         ))}
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
           <button
            onClick={prev}
             className="group w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-pink-300 hover:text-pink-200 hover:border-pink-500/30 transition-all duration-300"
            aria-label="Proyecto anterior"
          >
            <span className="text-lg md:text-xl group-hover:-translate-x-0.5 transition-transform duration-300">
              ‹
            </span>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-1.5">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                 className={`h-1 rounded-full transition-all duration-300 ${
                   idx === current
                     ? "w-6 bg-gradient-to-r from-pink-500 to-cyan-500"
                      : "w-1.5 bg-gray-400 hover:bg-gray-300"
                 }`}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>

           <button
            onClick={next}
             className="group w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-cyan-300 hover:text-cyan-200 hover:border-cyan-500/30 transition-all duration-300"
            aria-label="Siguiente proyecto"
          >
            <span className="text-lg md:text-xl group-hover:translate-x-0.5 transition-transform duration-300">
              ›
            </span>
          </button>
        </div>

          {/* Counter */}
         <div className="text-center mt-6 text-pink-300 text-xs">
           <span className="font-mono">
             {current + 1} / {projects.length}
           </span>
         </div>
      </div>
    </div>
  );
}
