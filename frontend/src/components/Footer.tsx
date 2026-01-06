import { Heart, Code, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
     <footer className="relative mt-auto border-t border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
      {/* Wave divider */}
      <div className="absolute -top-6 left-0 right-0 h-6 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-pink-100"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-cyan-100"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-emerald-100"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Brand and description */}
          <div className="text-center md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                TorcoDev
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Desarrollador Full Stack apasionado por crear experiencias digitales
              innovadoras y funcionales.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
              <span>y mucho código</span>
            </div>
          </div>

          {/* Middle - Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-gray-800 mb-4">Enlaces Rápidos</h4>
            <div className="flex flex-col gap-2">
              <a
                href="/projects"
                className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                Proyectos
              </a>
              <a
                href="/skills"
                className="text-gray-600 hover:text-cyan-500 transition-colors duration-300"
              >
                Habilidades
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-emerald-500 transition-colors duration-300"
              >
                Sobre Mí
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-rose-500 transition-colors duration-300"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Right side - Social and contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-gray-800 mb-4">Conéctate</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/torco34"
                className="group p-3 bg-gray-100 rounded-full hover:bg-pink-100 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                className="group p-3 bg-gray-100 rounded-full hover:bg-cyan-100 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-cyan-500 transition-colors duration-300" />
              </a>
              <a
                href="mailto:contacto@ejemplo.com"
                className="group p-3 bg-gray-100 rounded-full hover:bg-emerald-100 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-emerald-500 transition-colors duration-300" />
              </a>
              <a
                href="https://twitter.com"
                className="group p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
              </a>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              ¡Trabajemos juntos!
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} TorcoDev. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
              >
                Privacidad
              </a>
              <a
                href="/terms"
                className="text-gray-500 hover:text-cyan-500 transition-colors duration-300"
              >
                Términos
              </a>
              <a
                href="/sitemap"
                className="text-gray-500 hover:text-emerald-500 transition-colors duration-300"
              >
                Mapa del sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;