import { Waves, Palmtree, Sun, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            La Esencia de <span className="font-medium">Casa Maribel</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Un paraíso escondido en la costa norte de República Dominicana, donde la simplicidad del diseño se encuentra con la belleza natural de Las Terrenas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
              <Waves strokeWidth={1.5} className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Playas Vírgenes</h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Disfruta de la serenidad del Caribe con aguas cristalinas a pocos pasos de tu puerta.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
              <Palmtree strokeWidth={1.5} className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Entorno Tropical</h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Vegetación exuberante que crea un oasis de privacidad y conexión con la naturaleza.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
              <Sun strokeWidth={1.5} className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Clima Perfecto</h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Días soleados y una brisa constante que invitan al descanso absoluto todo el año.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
              <MapPin strokeWidth={1.5} className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Ubicación Ideal</h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              En el corazón de la tranquilidad, pero cerca de la vibrante vida de Las Terrenas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
