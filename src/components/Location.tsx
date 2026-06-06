import { Wifi, Wind, Utensils, Car, MapPin, Droplets } from 'lucide-react';

export default function Location() {
  const amenities = [
    { icon: MapPin, title: 'Ubicación Central', description: 'Cerca de restaurantes' },
    { icon: Wind, title: 'Aire Acondicionado', description: 'Clima perfecto todo el día' },
    { icon: Utensils, title: 'Cerca de Restaurantes', description: 'Gastronomía de calidad cercana' },
    { icon: Car, title: 'Estacionamiento', description: 'Espacio seguro para tu vehículo' },
    { icon: Wifi, title: 'WiFi Gratis', description: 'Internet de alta velocidad' },
    { icon: Droplets, title: 'Cerca de la Playa', description: 'A minutos de aguas cristalinas' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Nuestros <span className="font-medium">Alrededores</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Disfruta de todas las comodidades modernas en una ubicación inmejorable en Las Terrenas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon strokeWidth={1.5} className="text-gray-900 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{amenity.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{amenity.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-black rounded-[2rem] p-10 sm:p-14 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <MapPin className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
                Tu Refugio <span className="font-medium">Te Espera</span>
              </h3>
              <p className="text-gray-300 mb-10 font-light leading-relaxed">
                La combinación perfecta de simplicidad, comodidad y ubicación privilegiada para tus días de descanso.
              </p>
              <ul className="space-y-4 text-gray-300 font-light text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  5 minutos caminando a la playa
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  Restaurantes y vida local a pasos de distancia
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  Oasis de tranquilidad y seguridad
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden bg-gray-100 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1882.530897960479!2d-69.5503187!3d19.3231246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaefb6aee5d9733%3A0x155812d7428f27c4!2sApartamentos%20CASA%20MARIBEL%20las%20terrenas!5e0!3m2!1ses-419!2sdo!4v1770683965957!5m2!1ses-419!2sdo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apartamentos Casa Maribel"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
