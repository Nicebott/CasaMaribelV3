import { MapPin, ShieldCheck, Phone, ChevronRight, Mountain, Compass, ArrowRight, Star, Settings } from 'lucide-react';

export default function FourWheels() {
  const rentalOptions = [
    {
      id: 'medio-dia',
      title: 'Medio Día',
      subtitle: '4 Horas de Aventura',
      price: 'Consultar',
      description: 'Ideal para una escapada rápida a Playa Rincón o El Limón. Disfruta de la brisa y los paisajes a tu propio ritmo.',
      icon: Compass,
      color: 'bg-amber-500',
    },
    {
      id: 'dia-completo',
      title: 'Día Completo',
      subtitle: '24 Horas de Libertad',
      price: 'Consultar',
      description: 'La mejor opción para recorrer toda la península de Samaná sin preocupaciones.',
      icon: Mountain,
      color: 'bg-amber-600',
    },
  ];

  const handleBookFourWheels = (planTitle: string) => {
    const phoneNumber = '18296974277';
    const message = `Hola! Me gustaría rentar un Fourwheels (Plan: ${planTitle}). ¿Me podrían dar más información sobre disponibilidad y precios?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Brand Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Mountain className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Casa Maribel <span className="text-amber-600">Fourwheels</span></span>
          </div>
          <button
            onClick={() => handleBookFourWheels('Consulta rápida')}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-500 hover:text-black transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Reservar</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/locin.jpg"
            alt="ATV Fourwheels Las Terrenas - Casa Maribel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full mb-6">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Aventura Garantizada</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
              Explora <span className="text-amber-500">Las Terrenas</span> a tu Ritmo
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Alquiler de Fourwheels premium. Descubre playas escondidas, senderos de montaña y la verdadera esencia de Samaná con total libertad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('options')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-black rounded-2xl font-black transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
              >
                Ver Planes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleBookFourWheels('Info Vehículos')}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold transition-all"
              >
                Tarifas y Disponibilidad
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-3">¿Por qué rentar con nosotros?</h2>
            <p className="text-3xl md:text-5xl font-bold text-gray-950">La mejor experiencia todo terreno</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="relative p-10 bg-gray-50 rounded-3xl transition-transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 transition-transform group-hover:rotate-0">
                <Settings className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mantenimiento al Día</h3>
              <p className="text-gray-600 leading-relaxed">Vehículos modernos como el XWolf 300, revisados constantemente para tu máxima seguridad.</p>
            </div>
            <div className="relative p-10 bg-gray-50 rounded-3xl transition-transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8 -rotate-3 transition-transform group-hover:rotate-0">
                <Compass className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Libertad Total</h3>
              <p className="text-gray-600 leading-relaxed">Llega a donde los autos no pueden. Playas vírgenes, cascadas y miradores espectaculares te esperan.</p>
            </div>
            <div className="relative p-10 bg-gray-50 rounded-3xl transition-transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 transition-transform group-hover:rotate-0">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Respaldo y Seguridad</h3>
              <p className="text-gray-600 leading-relaxed">Instrucciones claras y asistencia en ruta en caso de cualquier inconveniente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section id="options" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-amber-500 uppercase tracking-widest mb-3">Opciones de Alquiler</h2>
              <p className="text-4xl md:text-6xl font-bold text-white">Elige tu Aventura</p>
            </div>
            <p className="text-gray-400 text-lg"></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rentalOptions.map((option) => (
              <div key={option.id} className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 transition-all hover:border-amber-500/50">
                <div className="flex flex-col md:flex-row h-full">
                  <div className={`md:w-2/5 p-10 flex flex-col justify-center items-center text-black ${option.color}`}>
                    <option.icon className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">{option.price}</span>
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                      <p className="text-amber-500 font-bold text-sm uppercase tracking-wide">{option.subtitle}</p>
                    </div>

                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                      {option.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mb-8 py-4 border-y border-gray-800">
                      <div className="flex items-center gap-2">
                        <Mountain className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-gray-300 font-bold">Todo Terreno</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-gray-300 font-bold">Ruta Libre</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookFourWheels(option.title)}
                      className="w-full py-4 bg-white text-black rounded-2xl font-black hover:bg-amber-500 transition-colors flex items-center justify-center gap-3"
                    >
                      Reservar Ahora
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-amber-500 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-black opacity-5 rounded-full"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight">
                  ¿Listo para arrancar?
                </h2>
                <p className="text-xl text-black/80 font-medium leading-relaxed">
                  Contáctanos por WhatsApp para consultar la disponibilidad de nuestros Fourwheels, obtener recomendaciones de rutas y asegurar tu vehículo para tus próximas vacaciones.
                </p>
              </div>
              <div className="bg-black p-10 rounded-3xl text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-black">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-amber-500 font-black text-xs uppercase tracking-widest">Atención Inmediata</p>
                    <p className="text-2xl font-bold">+1 (829) 697-4277</p>
                  </div>
                </div>
                <button
                  onClick={() => handleBookFourWheels('Quiero reservar un Fourwheel')}
                  className="w-full py-5 bg-amber-500 text-black rounded-2xl font-black text-lg hover:bg-white transition-colors animate-bounce"
                >
                  Contactar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100 text-center">
        <p className="text-gray-500 font-medium">© 2026 Casa Maribel. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
