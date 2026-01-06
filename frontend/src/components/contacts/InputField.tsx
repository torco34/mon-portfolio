interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="relative">
      {/* Label flotante */}
      <label
        htmlFor={name}
        className="absolute -top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 px-2 text-sm font-semibold text-white rounded-full"
      >
        {label}
      </label>

      {/* Input */}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full p-4 border-2 border-white/20 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300 backdrop-blur-sm"
        placeholder={`Escribe tu ${label.toLowerCase()}...`}
      />
    </div>
  );
}
