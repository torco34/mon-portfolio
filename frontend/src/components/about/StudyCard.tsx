import React from "react";

interface StudyCardProps {
  title: string; // Ej: "Ingeniería de Sistemas"
  institution: string; // Ej: "Universidad XYZ"
  period: string; // Ej: "2016 - 2021"
  description?: string; // Texto opcional con detalles
}

export const StudyCard: React.FC<StudyCardProps> = ({
  title,
  institution,
  period,
  description,
}) => {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-orange-700">{title}</h3>
      <p className="text-gray-700 font-medium">{institution}</p>
      <span className="block text-sm text-gray-500 mb-3">{period}</span>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
  );
};
