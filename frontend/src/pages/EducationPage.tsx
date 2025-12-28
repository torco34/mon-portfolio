import { useEffect, useState } from "react";

type EduItem = {
  id: string;
  titulo: string;
  institucion?: string;
  inicio?: string;
  period?: string;
  duracion?: string;
  description: string;
  level?: "Básico" | "Intermedio" | "Avanzado";
  link?: string;
};

export default function EducationPage() {
  const [eduData, setEduData] = useState<EduItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        // si la API devuelve un objeto, lo convertimos a array
        const formatted = Array.isArray(data) ? data : [data];
        setEduData(formatted);
      })
      .catch((err) => console.error("Error cargando cursos:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="bg-orange-100 min-h-screen flex items-center justify-center">
        <p className="text-orange-400 text-xl">Cargando cursos...</p>
      </section>
    );
  }

  return (
    <section className="bg-orange-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Educación y <span className="text-orange-400">Cursos</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Formación práctica y tecnologías que domino. Aquí encontrarás
            bootcamps, cursos y experiencias relevantes ordenadas para mostrar
            tus competencias.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Línea de aprendizaje
                </h3>
                <p className="text-gray-600 text-sm">
                  Desde fundamentos hasta stacks modernos — ordena por prioridad
                  o fecha.
                </p>

                <ol className="mt-6 space-y-4">
                  {eduData.slice(0, 4).map((e) => (
                    <li key={e.id} className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {e.titulo}
                        </p>
                        <p className="text-xs text-gray-500">{e.period}</p>
                         <p className="text-xs text-gray-600 mt-1">
                           {e.institucion}
                         </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="md:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {eduData.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {item.titulo}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {item.institucion}{" "}
                          {item.period ? `· ${item.inicio}` : ""}
                        </p>
                      </div>
                      {item.duracion && (
                        <div className="text-sm px-3 py-1 rounded-full bg-orange-100 text-orange-600">
                          {item.duracion}
                        </div>
                      )}
                    </div>

                    <p className="mt-4 text-gray-700">{item.description}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700">
                        {item.titulo}
                      </span>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-2 text-sm bg-orange-400 text-white px-3 py-1 rounded-lg hover:bg-orange-500 transition"
                        >
                          Ver certificado
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            ¿Quieres ver proyectos relacionados con estas tecnologías?
          </p>
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
