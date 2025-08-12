export default function AboutPage() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Sobre mí
        </h2>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Soy un desarrollador entusiasta con formación práctica adquirida en
            un
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {" "}
              bootcamp intensivo
            </span>
            , donde aprendí tecnologías modernas y metodologías ágiles.
          </p>
          <p>
            He realizado proyectos prácticos que me han permitido reforzar mis
            habilidades en desarrollo web, desde la creación de interfaces
            responsivas hasta la implementación de APIs y bases de datos.
          </p>
          <p>
            Me apasiona aprender constantemente, por eso actualmente
            <span className="font-semibold"> estudio inglés</span> y sigo
            explorando nuevas herramientas y frameworks para mantenerme al día
            en el mundo de la tecnología.
          </p>
        </div>
      </div>
    </section>
  );
}
