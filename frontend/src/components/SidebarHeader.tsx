export default function SidebarHeader() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#F5F5F5] border-r border-gray-200/30 shadow z-10">
      {/* Logo */}
      <div className="h-20 flex flex-col uppercase items-center justify-center border-b border-gray-500/20">
        <h1 className="text-cyan-400 text-2xl font-bold tracking-widest drop-shadow-[0_0_10px_cyan]">
          TorcoDev
        </h1>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col mt-6 -space-y-2 px-9">
        {["Dashboard", "Perfil", "Proyectos", "Contacto"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative px-5 py-2 text-gray-400 uppercase tracking-wider hover:text-cyan-400 transition group"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-pink-400 scale-y-0 group-hover:scale-y-100 transition"></span>
            {item}
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-xs text-gray-500">
        © 2025
      </div>
    </aside>
  );
}
