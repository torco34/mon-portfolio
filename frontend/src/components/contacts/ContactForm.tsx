import { useState } from "react";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import TextareaField from "./TextareaField";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "loading" | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.name, // mapeo correcto
          correo: formData.email, // mapeo correcto
          mensaje: formData.message, // mapeo correcto
        }),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");

      const data = await res.json();
      console.log("✅ Enviado correctamente:", data);

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (err) {
      console.error("❌ Error:", err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <InputField
        label="Nombre"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <InputField
        label="Correo electrónico"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <TextareaField
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <SubmitButton />

      {/* Estado del envío */}
      {status === "loading" && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 animate-pulse"></div>
            <span className="text-sm font-medium text-pink-300">Enviando mensaje...</span>
          </div>
        </div>
      )}
      {status === "success" && (
        <div className="text-center bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <span className="font-semibold text-green-300">¡Mensaje enviado con éxito!</span>
          </div>
          <p className="text-sm text-green-400/80 mt-2">Te responderé en menos de 24 horas.</p>
        </div>
      )}
      {status === "error" && (
        <div className="text-center bg-gradient-to-r from-red-500/20 to-pink-600/20 border border-red-500/30 rounded-xl p-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-sm">✗</span>
            </div>
            <span className="font-semibold text-red-300">Error al enviar el mensaje</span>
          </div>
          <p className="text-sm text-red-400/80 mt-2">Por favor, intenta nuevamente.</p>
        </div>
      )}
    </form>
  );
}
