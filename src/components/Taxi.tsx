import { Car, MapPin, Clock, ShieldCheck, Phone, ChevronRight, PlaneTakeoff, Navigation, ArrowRight, Star } from 'lucide-react';

export default function Taxi() {
  const routes = [
    {
      id: 'azs-lt',
      title: 'Aeropuerto El Catey (AZS)',
      subtitle: 'Samaná ↔ Las Terrenas',
      duration: '45 - 60 min',
      distance: '25 km',
      description: 'Traslado privado directo desde el aeropuerto internacional El Catey hasta la puerta de tu alojamiento en Las Terrenas.',
      icon: PlaneTakeoff,
      color: 'bg-white',
    },
    {
      id: 'sdq-lt',
      title: 'Aeropuerto Las Américas (SDQ)',
      subtitle: 'Santo Domingo ↔ Las Terrenas',
      duration: '2 - 2.5 horas',
      distance: '140 km',
      description: 'Servicio de transporte premium recorriendo la moderna autovía del Nordeste con total comodidad y seguridad.',
      icon: Navigation,
      color: 'bg-white',
    },
  ];

  const handleBookTaxi = (routeTitle: string) => {
    const phoneNumber = '18296974277';
    const message = `Hola! Me gustaría contratar un taxi para el trayecto: ${routeTitle}. ¿Me podrían dar más información sobre disponibilidad y precios?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Brand Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <Car strokeWidth={1.5} className="w-6 h-6" />
            <span className="text-xl font-light tracking-tight">Casa <span className="font-medium">Maribel</span> Taxi</span>
          </div>
          <button 
            onClick={() => handleBookTaxi('Consulta rápida')}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            <Phone strokeWidth={1.5} className="w-4 h-4" />
            <span>Reservar</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Taxi Service Samana"
            className="w-full h-full object-cover transition-transform duration-[20s] ease-out scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl animate-fade-in flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-6">
              <Star strokeWidth={1.5} className="w-4 h-4 text-white" />
              <span className="text-xs font-light text-white uppercase tracking-widest">Servicio 5 Estrellas</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight text-white">
              Tu Transfer de Confianza <span className="font-medium block">en Las Terrenas</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl font-light">
              Viaja con estilo y seguridad. Traslados privados desde aeropuertos nacionales directamente a tu paraíso en Samaná.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('routes')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explorar Rutas
                <ArrowRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Experiencia de Viaje <span className="font-medium">Superior</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Comprometidos con tu seguridad, confort y puntualidad en cada trayecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Clock strokeWidth={1.5} className="w-7 h-7 text-gray-800" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Puntualidad Absoluta</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Monitoreamos el estado de tu vuelo en tiempo real para estar esperándote en la puerta.
              </p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck strokeWidth={1.5} className="w-7 h-7 text-gray-800" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Seguridad Certificada</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Conductores experimentados y vehículos con mantenimiento riguroso y aire acondicionado.
              </p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Car strokeWidth={1.5} className="w-7 h-7 text-gray-800" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Flota Premium</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Vehículos espaciosos ideales para grupos y familias con equipaje voluminoso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Rutas a <span className="font-medium">Las Terrenas</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Servicio puerta a puerta, 24 horas al día.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {routes.map((route) => (
              <div key={route.id} className="flex flex-col bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-500">
                <div className="p-8 sm:p-12 flex-1 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8">
                    <route.icon strokeWidth={1.5} className="w-8 h-8 text-gray-900" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2">{route.title}</h3>
                  <p className="text-gray-500 font-light text-sm uppercase tracking-widest mb-6">{route.subtitle}</p>
                  
                  <p className="text-gray-500 font-light leading-relaxed mb-10 flex-grow">
                    {route.description}
                  </p>
                  
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-light uppercase tracking-wider flex items-center gap-2"><Clock strokeWidth={1.5} className="w-4 h-4" /> Duración</span>
                      <span className="text-gray-900 font-medium">{route.duration}</span>
                    </div>
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                      <span className="text-gray-400 text-sm font-light uppercase tracking-wider flex items-center gap-2"><MapPin strokeWidth={1.5} className="w-4 h-4" /> Distancia</span>
                      <span className="text-gray-900 font-medium">{route.distance}</span>
                    </div>
                    
                    <button 
                      onClick={() => handleBookTaxi(route.title)}
                      className="w-full py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-3"
                    >
                      Reservar Ahora
                      <ChevronRight strokeWidth={1.5} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-black rounded-[2rem] p-12 sm:p-20 overflow-hidden relative">
            <div className="relative z-10 text-white flex flex-col items-center">
              <Phone strokeWidth={1.5} className="w-10 h-10 mb-8 opacity-80" />
              <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">
                ¿Buscas un destino <span className="font-medium">diferente?</span>
              </h2>
              <p className="text-gray-300 font-light leading-relaxed mb-10 max-w-xl">
                Adaptamos nuestro servicio a tus necesidades. Traslados inter-urbanos, tours privados y viajes personalizados por toda la República Dominicana.
              </p>
              
              <button 
                onClick={() => handleBookTaxi('Consulta Especial')}
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Consultar WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center">
        <p className="text-gray-400 font-light text-sm">© 2026 Casa Maribel Las Terrenas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

