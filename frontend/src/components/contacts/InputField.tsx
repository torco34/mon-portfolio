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
        className="absolute -top-3 left-3 bg-orange-50 px-2 text-sm font-semibold text-orange-700"
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
        className="w-full p-3 border-2 border-orange-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-400 transition"
        placeholder={`Escribe tu ${label.toLowerCase()}...`}
      />
    </div>
  );
}
