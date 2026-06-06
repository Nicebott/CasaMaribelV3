import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-light tracking-tight mb-6">Casa <span className="font-medium">Maribel</span></h3>
            <p className="text-gray-500 font-light leading-relaxed max-w-sm">
              Tu hogar lejos de casa en el paraíso caribeño. Apartamentos en Las Terrenas con un diseño pensado en tu confort y tranquilidad.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm uppercase tracking-wider font-medium mb-6">Contacto</h3>
            <ul className="space-y-4 font-light text-sm">
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin strokeWidth={1.5} className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Las Terrenas, República Dominicana</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail strokeWidth={1.5} className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="break-all">ferminmaribel@casamaribel.com.do</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone strokeWidth={1.5} className="w-4 h-4 flex-shrink-0" />
                <span>+1 (829) 697-4277</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone strokeWidth={1.5} className="w-4 h-4 flex-shrink-0" />
                <span>+1 (809) 967-2175</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm uppercase tracking-wider font-medium mb-6">Síguenos</h3>
            <div className="flex gap-5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook strokeWidth={1.5} className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram strokeWidth={1.5} className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter strokeWidth={1.5} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-gray-500">
            &copy; {currentYear} Casa Maribel Las Terrenas. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs font-light text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
