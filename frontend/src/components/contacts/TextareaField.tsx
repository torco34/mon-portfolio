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
        className="absolute -top-3 left-3 bg-orange-50 px-2 text-sm font-semibold text-orange-700"
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
        className="w-full p-3 border-2 border-orange-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-400 transition resize-none"
      />
    </div>
  );
}
