import { Briefcase, Calendar, MapPin, Award, ChevronRight } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  type: "work" | "education" | "certification";
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    company: "Tech Solutions Inc.",
    location: "Remoto",
    period: "2023 - Presente",
    description: "Desarrollo de aplicaciones web modernas utilizando React, Node.js y MongoDB. Lideré el rediseño de la plataforma principal mejorando la experiencia de usuario en un 40%.",
    skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
    type: "work"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "Bogotá, Colombia",
    period: "2021 - 2023",
    description: "Creación de interfaces de usuario responsivas y optimizadas. Colaboré en más de 15 proyectos para clientes internacionales.",
    skills: ["React", "Next.js", "Tailwind", "Figma", "GraphQL"],
    type: "work"
  },
  {
    id: 3,
    title: "Ingeniería de Sistemas",
    company: "Universidad Nacional",
    location: "Bogotá, Colombia",
    period: "2017 - 2021",
    description: "Especialización en desarrollo de software y arquitectura de sistemas. Proyecto de grado: Plataforma de e-learning con inteligencia artificial.",
    skills: ["Java", "Python", "SQL", "Machine Learning", "Docker"],
    type: "education"
  },
  {
    id: 4,
    title: "Certificación AWS Developer",
    company: "Amazon Web Services",
    location: "Online",
    period: "2022",
    description: "Certificación en desarrollo de aplicaciones en la nube utilizando servicios AWS como Lambda, DynamoDB y API Gateway.",
    skills: ["AWS", "Serverless", "CloudFormation", "CI/CD"],
    type: "certification"
  }
];

const ExperienceSection = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5" />;
      case "education":
        return <Award className="w-5 h-5" />;
      case "certification":
        return <Award className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "education":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "certification":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-amber-100 text-amber-800 border-amber-200";
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Experiencia & Formación
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Mi trayectoria profesional y académica en el mundo del desarrollo
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-orange-300 to-yellow-300"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Type badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getTypeColor(exp.type)} text-sm font-medium mb-4`}>
                      {getTypeIcon(exp.type)}
                      <span className="capitalize">{exp.type === "work" ? "Experiencia Laboral" : exp.type === "education" ? "Educación" : "Certificación"}</span>
                    </div>

                    {/* Title and company */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-amber-700 font-medium mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-medium rounded-full border border-amber-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date for desktop */}
                <div className={`hidden md:block md:w-2/12 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg shadow-md">
                    <span className="font-bold">{exp.period.split(" ")[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Ver CV Completo</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;