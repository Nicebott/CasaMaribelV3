import { useState } from 'react';
import { Home, Users, Bath, Bed, Check, Images, Calendar } from 'lucide-react';
import { Apartment } from '../types';
import PhotoModal from './PhotoModal';
import { mockApartments } from '../data/mockApartments';

interface ApartmentsProps {
  onBookClick: (apartmentId: string) => void;
}

export default function Apartments({ onBookClick }: ApartmentsProps) {
  const apartments = mockApartments;
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  const handleWhatsAppBooking = (apartment: Apartment) => {
    const phoneNumber = '18296974277';
    const article = apartment.title.toLowerCase().includes('casa') ? 'la' : 'el';
    const availabilityText = apartment.available
      ? 'Me gustaría obtener más información y realizar una reserva.'
      : 'Me gustaría saber cuándo estará disponible y obtener más información.';

    const message = `Hola! Estoy interesado en ${apartment.available ? 'reservar' : 'consultar sobre'} ${article} *${apartment.title}*

📋 Detalles:
- ${apartment.bedrooms} ${apartment.bedrooms === 1 ? 'Habitación' : 'Habitaciones'}
- ${apartment.bathrooms} ${apartment.bathrooms === 1 ? 'Baño' : 'Baños'}
- Hasta ${apartment.max_guests} huéspedes
- $${apartment.price_per_night} por noche
${apartment.available ? '' : '- Estado: No disponible actualmente'}

${availabilityText}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="apartments" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Nuestros <span className="font-medium">Espacios</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Refugios diseñados con simplicidad y confort para que vivas la experiencia de Las Terrenas en su máxima expresión.
          </p>
        </div>

        {apartments.length === 0 ? (
          <div className="text-center py-24">
            <Home strokeWidth={1} className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <p className="text-xl text-gray-500 font-light">
              Pronto tendremos apartamentos disponibles para ti
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                className={`group flex flex-col bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-500 ${!apartment.available ? 'opacity-90' : ''}`}
              >
                {apartment.images && apartment.images.length > 0 && (
                  <div className="h-64 sm:h-80 bg-gray-50 overflow-hidden relative">
                    <img
                      src={apartment.images[0]}
                      alt={`Apartamento vacacional en Las Terrenas - ${apartment.title}`}
                      loading="lazy"
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out ${!apartment.available ? 'opacity-60' : ''}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    {!apartment.available && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                        <div className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2">
                          <Calendar strokeWidth={1.5} className="w-4 h-4" />
                          No Disponible
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-8 sm:p-10 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight">
                      {apartment.title}
                    </h3>
                    {!apartment.available && (
                      <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-full ml-4 flex-shrink-0">
                        Ocupado
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-500 mb-8 leading-relaxed font-light text-sm sm:text-base">
                    {apartment.description}
                  </p>

                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bed strokeWidth={1.5} className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-light">
                        {apartment.bedrooms} {apartment.bedrooms === 1 ? 'Hab' : 'Habs'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bath strokeWidth={1.5} className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-light">
                        {apartment.bathrooms} {apartment.bathrooms === 1 ? 'Baño' : 'Baños'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users strokeWidth={1.5} className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-light">
                        {apartment.max_guests} Max
                      </span>
                    </div>
                  </div>

                  {apartment.amenities && apartment.amenities.length > 0 && (
                    <div className="mb-10 flex-1">
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                        {apartment.amenities.slice(0, 6).map((amenity, index) => (
                          <div key={index} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                            <Check strokeWidth={1.5} className="w-4 h-4 text-gray-900 flex-shrink-0" />
                            <span className="truncate">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
                      <div>
                        <span className="text-3xl font-medium text-gray-900">
                          ${apartment.price_per_night}
                        </span>
                        <span className="text-sm text-gray-500 font-light ml-2">/ noche</span>
                      </div>
                      <button
                        onClick={() => handleWhatsAppBooking(apartment)}
                        className={`w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
                          apartment.available
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {apartment.available ? 'Reservar' : 'Consultar'}
                      </button>
                    </div>

                    {apartment.images && apartment.images.length > 1 && (
                      <button
                        onClick={() => setSelectedApartment(apartment)}
                        className="w-full flex items-center justify-center gap-2 py-3 text-gray-500 hover:text-gray-900 transition-colors duration-300 text-sm font-light group/btn"
                      >
                        <Images strokeWidth={1.5} className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Ver galería completa ({apartment.images.length})
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <PhotoModal
          isOpen={!!selectedApartment}
          images={selectedApartment?.images || []}
          title={selectedApartment?.title || ''}
          onClose={() => setSelectedApartment(null)}
        />
      </div>
    </section>
  );
}
