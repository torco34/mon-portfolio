import ContactForm from "../components/contacts/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-br  bg-orange-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl md:text-6xl  font-extrabold text-gray-900 mb-1.5 leading-tight">
          Contácteme
        </h1>
        <p className="text-center text-gray-700 text-2xl dark:text-gray-900 mb-12">
          ¿Tienes una idea, propuesta o simplemente quieres saludar? Rellena el
          formulario y te responderé lo antes posible.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
