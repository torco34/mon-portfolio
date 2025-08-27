import ContactForm from "../components/contacts/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-br  bg-orange-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Contácteme</h2>
        <p className="text-center text-gray-700 dark:text-gray-900 mb-12">
          ¿Tienes una idea, propuesta o simplemente quieres saludar? Rellena el
          formulario y te responderé lo antes posible.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
