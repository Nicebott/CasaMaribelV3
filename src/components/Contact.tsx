import { useState, FormEvent, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, X, CheckCircle } from 'lucide-react';
import { Inquiry } from '../types';
import { mockApartments } from '../data/mockApartments';

interface ContactProps {
  selectedApartmentId?: string;
  onClose?: () => void;
}

export default function Contact({ selectedApartmentId, onClose }: ContactProps) {
  const [formData, setFormData] = useState<Inquiry>({
    name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    guests: 2,
    message: '',
    apartment_id: selectedApartmentId || undefined,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (selectedApartmentId) {
      setFormData((prev) => ({ ...prev, apartment_id: selectedApartmentId }));
    }
  }, [selectedApartmentId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const phoneNumber = '18296974277';
    let message = `Hola! Me gustaría hacer una consulta para alquilar un apartamento.

👤 *Datos de Contacto:*
- Nombre: ${formData.name}
- Email: ${formData.email}`;

    if (formData.phone) {
      message += `\n- Teléfono: ${formData.phone}`;
    }

    message += `\n\n📅 *Fechas:*
- Check-in: ${formData.check_in}
- Check-out: ${formData.check_out}
- Huéspedes: ${formData.guests}`;

    if (formData.apartment_id) {
      const apartment = mockApartments.find(apt => apt.id === formData.apartment_id);
      if (apartment) {
        message += `\n\n🏠 *Apartamento de interés:* ${apartment.title}`;
      }
    }

    if (formData.message) {
      message += `\n\n💬 *Mensaje adicional:*\n${formData.message}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      check_in: '',
      check_out: '',
      guests: 2,
      message: '',
      apartment_id: selectedApartmentId || undefined,
    });

    setTimeout(() => {
      setSuccess(false);
      setSubmitting(false);
      if (onClose) onClose();
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value,
    }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Hablemos de <span className="font-medium">Tu Estadía</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mb-12 font-light leading-relaxed max-w-lg">
              Estamos aquí para asegurar que tu experiencia en Casa Maribel sea inolvidable desde el primer contacto.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <MapPin strokeWidth={1.5} className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-1">Ubicación</h3>
                  <p className="text-gray-900 font-light">
                    Las Terrenas, República Dominicana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <Mail strokeWidth={1.5} className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-1">Email</h3>
                  <p className="text-gray-900 font-light">ferminmaribel@casamaribel.com.do</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <Phone strokeWidth={1.5} className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-1">Teléfono</h3>
                  <p className="text-gray-900 font-light">+1 (829) 697-4277</p>
                  <p className="text-gray-900 font-light">+1 (809) 967-2175</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] rounded-[2rem] p-8 sm:p-12 relative border border-gray-100">
            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X strokeWidth={1.5} className="w-6 h-6" />
              </button>
            )}

            {success ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle strokeWidth={1.5} className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-3 tracking-tight">
                  ¡Consulta Enviada!
                </h3>
                <p className="text-gray-500 font-light">
                  Nos pondremos en contacto contigo a la brevedad posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-transparent rounded-xl focus:border-gray-300 focus:ring-0 outline-none transition-all font-light"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-transparent rounded-xl focus:border-gray-300 focus:ring-0 outline-none transition-all font-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-transparent rounded-xl focus:border-gray-300 focus:ring-0 outline-none transition-all font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="check_in" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Check-in
                    </label>
                    <input
                      type="date"
                      id="check_in"
                      name="check_in"
                      required
                      min={today}
                      value={formData.check_in}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-transparent rounded-xl focus:border-gray-300 focus:ring-0 outline-none transition-all font-light text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="check_out" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Check-out
                    </label>
                    <input
                      type="date"
                      id="check_out"
                      name="check_out"
                      required
                      min={formData.check_in || today}
                      value={formData.check_out}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-transparent rounded-xl focus:border-gray-300 focus:ring-0 outline-none transition-all font-light text-sm"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="guests" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Huéspedes
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-transparent rounded-xl focus:border-gray-300 focus:ring-0 outline-none transition-all font-light"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Mensaje (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-transparent rounded-xl focus:border-gray-300 focus:ring-0 outline-none transition-all resize-none font-light"
                    placeholder="¿Alguna pregunta o solicitud especial?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-black text-white rounded-xl font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Consulta
                      <Send strokeWidth={1.5} className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
