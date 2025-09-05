import { PageHeader } from "../components/common/PageHeader";
import ContactForm from "../components/contacts/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* // <section className="bg-gradient-to-br  bg-orange-100 min-h-screen flex items-center"> */}
      <PageHeader
        title="Contácteme"
        description="¿Tienes una idea, propuesta o simplemente quieres saludar? Rellena el
          formulario y te responderé lo antes posible."
      />
      <ContactForm />
      {/* // </section> */}
    </>
  );
}
