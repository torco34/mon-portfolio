import { useState } from "react";

import { Sparkles, X } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import { CodeCursor } from "./components/common/CodeCursor";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PremiumHomePage from "./pages/PremiumHomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

// import Navbar from "./components/navbar/Navbar";

// import "./App.css";

function PremiumFloatingButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  if (!isVisible) return null;

  return (
    <a
      href="/premium"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

        {/* Main button */}
        <div className="relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold text-sm">Ver Versión Premium</span>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="ml-2 p-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-gray-900 rounded-lg border border-white/10 backdrop-blur-sm shadow-xl animate-fadeIn">
            <p className="text-sm text-gray-300">
              ✨ Descubre la versión premium con diseño espectacular que
              impresiona a reclutadores
            </p>
          </div>
        )}
      </div>
    </a>
  );
}

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: `linear-gradient(45deg, 
              hsl(${330 + Math.random() * 30}, 100%, 65%),
              hsl(${180 + Math.random() * 30}, 100%, 65%)
            )`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30" />

        {/* Cursor personalizado */}
        <div className="fixed inset-0 pointer-events-none z-50">
          <CodeCursor />
        </div>

        <Navbar />
        <main className="relative z-10 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/premium" element={<PremiumHomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <PremiumFloatingButton />
      </div>
    </LanguageProvider>
  );
}
