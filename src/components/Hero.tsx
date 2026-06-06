import { ChevronDown, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToApartments = () => {
    document.getElementById('apartments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out scale-105"
        style={{ backgroundImage: 'url(/WhatsApp_Image_2026-02-09_at_6.08.04_PM.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-4">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-sm tracking-widest uppercase font-light">Las Terrenas, RD</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight px-2 leading-tight">
            Casa <span className="font-semibold">Maribel</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto px-4 text-gray-200">
            Tu refugio minimalista y exclusivo frente a las playas de Samaná.
          </p>

          <button
            onClick={scrollToApartments}
            className="mt-8 sm:mt-12 inline-flex items-center px-8 sm:px-10 py-3 sm:py-4 bg-white/90 backdrop-blur-md text-black rounded-full font-medium text-sm sm:text-base tracking-wide hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Descubre los Espacios
          </button>
        </div>

        <button
          onClick={scrollToApartments}
          className="absolute bottom-8 sm:bottom-12 animate-bounce opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 text-white font-light" />
        </button>
      </div>
    </div>
  );
}
