import { HomeSection } from "../components/home/HomeSection";
import ProjectsSlider from "../components/ProjectsSlider";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-cyan-50 text-gray-800 overflow-hidden relative">
        {/* Pink/cyan background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pink blob */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-300/40 to-rose-300/30 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Cyan blob */}
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-cyan-300/35 to-blue-300/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Gradient blob */}
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/25 to-cyan-400/20 rounded-full blur-2xl animate-float"></div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Hero Section */}
          <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-16 gap-8 lg:gap-12">
            {/* Left Section - Main Profile Content */}
            <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start animate-fadeIn">
              <div className="w-full max-w-2xl">
                <HomeSection
                  image={"/img/foto.jpg"}
                  highlighted="TORCO."
                  actions={[
                    { href: "/projects", label: "projects", primary: true },
                    { href: "/contact", label: "contact" },
                    { href: "https://github.com/torco34", label: "github" },
                  ]}
                  title={""}
                  description={""}
                />
              </div>
            </div>

            {/* Right Section - Projects Slider */}
            <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end animate-slideInRight">
              <div className="w-full max-w-2xl">
                <ProjectsSlider />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
