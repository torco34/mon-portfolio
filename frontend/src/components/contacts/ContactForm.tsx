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
      className="bg-orange-50 dark:bg-gray-100 shadow-lg rounded-2xl p-8 space-y-6 border border-orange-200"
    >
      <h2 className="text-2xl font-bold text-orange-700 mb-4 text-center">
        Contáctame
      </h2>

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
        <p className="text-orange-500 text-center">Enviando...</p>
      )}
      {status === "success" && (
        <p className="text-green-600 text-center">
          ✅ Mensaje enviado con éxito
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center">
          ❌ Ocurrió un error al enviar. Intenta nuevamente.
        </p>
      )}
    </form>
  );
}
