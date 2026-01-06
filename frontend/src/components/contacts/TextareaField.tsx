import React from "react";

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaField({
  label,
  name,
  value,
  onChange,
}: TextareaFieldProps) {
  return (
    <div className="relative">
      {/* Label flotante */}
      <label
        htmlFor={name}
        className="absolute -top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 px-2 text-sm font-semibold text-white rounded-full"
      >
        {label}
      </label>

      {/* Textarea */}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={5}
        placeholder={`Escribe tu ${label.toLowerCase()}...`}
        className="w-full p-4 border-2 border-white/20 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300 backdrop-blur-sm resize-none"
      />
    </div>
  );
}
