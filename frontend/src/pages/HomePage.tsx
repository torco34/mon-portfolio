export default function HomePage() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto principal */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Hola, soy{" "}
            <span className="text-blue-600 dark:text-blue-400">TorcoDev</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Desarrollador Full Stack apasionado por crear experiencias web
            rápidas, modernas y atractivas. Aquí podrás explorar mis proyectos,
            habilidades y trayectoria.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* Imagen o ilustración */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://illustrations.popsy.co/blue/laptop.svg"
            alt="Desarrollo web"
            className="w-80 md:w-[28rem]"
          />
        </div>
      </div>
    </section>
  );
}
