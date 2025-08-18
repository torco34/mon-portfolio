import foto from "../../assets//img/foto2.jpg";
import { Image } from "../common/Image";
import { TextBlock } from "../common/TextBock";
export function AboutSection() {
  return (
    <section className="bg-gradient-to-br  bg-orange-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6  h-100 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex  justify-center">
          <Image src={foto} alt="Ejemplo" grayscale className="w-100 h-100" />
        </div>

        <div className="space-y-12 ">
          <TextBlock
            title="QUIÉN SOY"
            description="Soy desarrolladora web full stack. Me he preparado en varios bootcamps y cursos, y en total he buscado aprender lo que implica trabajar en un entorno de desarrollo moderno."
            buttonLabel="Contáctame"
            buttonHref="/contact"
          />
        </div>
      </div>
    </section>
  );
}
