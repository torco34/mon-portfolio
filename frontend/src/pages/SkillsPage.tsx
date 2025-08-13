// src/pages/SkillsPage.tsx
import {
  Boxes,
  Braces,
  Code,
  Database,
  Globe,
  Layers,
  Server,
  TerminalSquare,
} from "lucide-react";

export default function SkillsPage() {
  const skills = [
    { name: "React", icon: <Code size={40} />, level: "Avanzado" },
    { name: "Node.js", icon: <Server size={40} />, level: "Intermedio" },
    { name: "Express.js", icon: <Braces size={40} />, level: "Intermedio" },
    { name: "MySQL", icon: <Database size={40} />, level: "Intermedio" },
    { name: "CSS", icon: <Layers size={40} />, level: "Avanzado" },
    { name: "Bootstrap", icon: <Boxes size={40} />, level: "Intermedio" },
    { name: "HTML", icon: <Globe size={40} />, level: "Avanzado" },
    { name: "Tailwind CSS", icon: <Layers size={40} />, level: "Avanzado" },
    {
      name: "Terminal / CLI",
      icon: <TerminalSquare size={40} />,
      level: "Intermedio",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">Habilidades</h1>
        <p className="text-lg text-gray-300 mb-12">
          Tecnologías y herramientas con las que trabajo para crear aplicaciones
          modernas y eficientes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300"
            >
              <div className="mb-4 text-blue-400">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
