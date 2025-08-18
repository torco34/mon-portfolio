import { Image } from "../common/Image";
import { TextBlock } from "../common/TextBock";

export function AboutSection() {
  return (
    <section className="bg-gradient-to-br  bg-orange-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6  h-100 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex  justify-center">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
            alt="Ejemplo"
            grayscale
            className="w-100 h-100"
          />
        </div>

        <div className="space-y-12 ">
          <TextBlock
            title="Mi Trayectoria Académica"
            description="He cursado estudios en ingeniería y desarrollo web, especializándome en tecnologías modernas como React, Node.js y bases de datos. Me apasiona crear aplicaciones útiles y bien diseñadas."
            buttonLabel="Contáctame"
            buttonHref="/contact"
          />
        </div>
      </div>
    </section>
  );
}
