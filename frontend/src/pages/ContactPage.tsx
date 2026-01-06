import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Zap,
  Users,
  Sparkles
} from "lucide-react";
import ContactForm from "../components/contacts/ContactForm";

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const contactStats = [
    { icon: <MessageSquare className="w-5 h-5" />, value: "24h", label: "Respuesta promedio" },
    { icon: <CheckCircle className="w-5 h-5" />, value: "99%", label: "Satisfacción" },
    { icon: <Users className="w-5 h-5" />, value: "50+", label: "Clientes felices" },
    { icon: <Zap className="w-5 h-5" />, value: "100%", label: "Disponibilidad" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email", value: "hola@torco.dev", description: "Respuesta en menos de 24h" },
    { icon: <Phone className="w-6 h-6" />, title: "Teléfono", value: "+51 999 888 777", description: "Disponible de 9am a 6pm" },
    { icon: <MapPin className="w-6 h-6" />, title: "Ubicación", value: "Lima, Perú", description: "Trabajo remoto disponible" },
    { icon: <Clock className="w-6 h-6" />, title: "Horario", value: "Lun - Vie", description: "9:00 AM - 6:00 PM" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "#", icon: "💻", color: "from-gray-700 to-gray-900" },
    { name: "LinkedIn", url: "#", icon: "💼", color: "from-blue-600 to-blue-800" },
    { name: "Twitter", url: "#", icon: "🐦", color: "from-cyan-500 to-blue-500" },
    { name: "Instagram", url: "#", icon: "📸", color: "from-pink-500 to-rose-500" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500/10 to-purple-600/10 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse delay-1000"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-pink-300" />
                <span className="text-sm font-medium text-pink-200">Conectemos</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Hablemos de tu proyecto
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                ¿Tienes una idea increíble, un proyecto desafiante o simplemente quieres saludar? 
                Estoy aquí para ayudarte a hacerlo realidad.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {contactStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:border-pink-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Send className="w-6 h-6 text-pink-400" />
                    <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                      Información de contacto
                    </span>
                  </h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{info.title}</h3>
                          <p className="text-lg font-bold text-pink-300">{info.value}</p>
                          <p className="text-sm text-gray-400">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-white">Conéctate conmigo</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`bg-gradient-to-br ${social.color} backdrop-blur-sm border border-white/15 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover-glow hover:border-pink-500/40`}
                        >
                          <div className="text-2xl mb-2">{social.icon}</div>
                          <div className="font-medium text-white">{social.name}</div>
                        </a>
                      ))}
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400/30 to-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Envíame un mensaje
                      </span>
                    </h2>
                    <p className="text-gray-200">
                      Cuéntame sobre tu proyecto, idea o consulta. Responderé personalmente 
                      en menos de 24 horas para discutir cómo podemos trabajar juntos.
                    </p>
                  </div>
                  
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-cyan-500/10 border border-pink-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <Sparkles className="w-8 h-8 text-pink-300" />
                <h3 className="text-2xl font-bold text-white">
                  ¿Listo para comenzar algo increíble?
                </h3>
                <p className="text-gray-200">
                  No dudes en contactarme. Estoy emocionado por conocer tu proyecto 
                  y ayudarte a alcanzar tus objetivos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
