import { Apartment } from '../types';

export const mockApartments: Apartment[] = [
  {
    id: '1',
    title: 'Apartamento A - Casa Maribel',
    description: 'Cómodo apartamento Casa Maribel con 2 habitaciones en Las Terrenas. Ideal para familias pequeñas o grupos de amigos que buscan alojamiento de calidad y pasar unos días de descanso.',
    bedrooms: 2,
    bathrooms: 1,
    max_guests: 4,
    price_per_night: 95,
    amenities: [
      'WiFi de alta velocidad',
      'Aire acondicionado',
      'Cocina completa',
      'A 3 minutos de la playa',
      'Estacionamiento',
      'Ropa de cama'
    ],
    images: [
      '/Apartamento A/c2ef26d6-16ef-4ae1-8697-ee9c4b2ee67a.avif',
      '/Apartamento A/saladeestar.jpeg',
      '/Apartamento A/740aef24-55f3-4637-9880-9d9ebc6322c6.avif',
      '/Apartamento A/780e0fad-a754-48be-bde6-52f544e7323f.avif',
      '/Apartamento A/WhatsApp Image 2026-06-16 at 6.16.08 PM.jpeg',
      '/Apartamento A/bbfb88ca-3ae5-4571-8f51-4462adaa233e.jpg'
    ],
    available: true,
    airbnb_link: 'https://www.airbnb.mx/rooms/46020434?unique_share_id=db45497a-57cc-4e98-bd70-1b4ca253053a&viralityEntryPoint=1&s=76',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Apartamento B - Casa Maribel',
    description: 'Acogedor apartamento Casa Maribel de una habitación en Las Terrenas, perfecto para parejas o viajeros individuales. Alojamiento con ubicación privilegiada cerca de playas y restaurantes.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 90,
    amenities: [
      'WiFi incluido',
      'Aire acondicionado',
      'Cocina equipada',
      'Balcón privado',
      'Ducha moderna',
      'Ventiladores'
    ],
    images: [
      '/Apartamento B/cozy-bedroom-tropical-style.avif',
      '/Apartamento B/cozy-studio-apartment-tropical-beach-decor.jpeg',
      '/Apartamento B/modern-bathroom-compact.avif',
      '/Apartamento B/studio-apartment-kitchenette.avif'
    ],
    available: true,
    airbnb_link: 'https://www.airbnb.mx/rooms/48899326?unique_share_id=6408d5e6-5bc5-4ff3-997a-a2fccc3ecc99&viralityEntryPoint=1&s=76',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Apartamento D - Casa Maribel',
    description: 'Apartamento Casa Maribel cómodo con 1 habitación en Las Terrenas. Una excelente opción de alojamiento para viajeros que desean disfrutar de la belleza de Las Terrenas sin gastar demasiado.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 85,
    amenities: [
      'WiFi rápido',
      'Aire acondicionado',
      'Cocina funcional',
      'Terraza',
      'A 3 minutos de la playa',
      'Ventiladores'
    ],
    images: [
      '/Apartamento D/a55d327f-449b-4def-b089-60ccf1ebc895.jpg',
      '/Apartamento D/5a50bb5b-33e6-4cf9-82f5-2ffa65da6b40.avif',
      '/Apartamento D/ca922b07-7323-4506-acfb-377f9d80685a.jpg',
      '/Apartamento D/23d1a17b-be30-4654-a771-d63bbc973a02.avif',
      '/Apartamento D/ea6e04d2-df1d-4404-b179-352ab8b9d324.avif'
    ],
    available: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Casa Pluda - Casa Maribel',
    description: 'Espaciosa Casa Pluda de Casa Maribel en Las Terrenas con 3 habitaciones y 3 baños. Alojamiento perfecto para grupos, familias o escapadas especiales. Comodidades completas y espacios amplios para disfrutar al máximo.',
    bedrooms: 3,
    bathrooms: 3,
    max_guests: 6,
    price_per_night: 180,
    amenities: [
      'WiFi premium',
      'Aire acondicionado central',
      'Cocina gourmet',
      'Sala de estar amplia',
      'Área de jardín',
      'Estacionamiento múltiple',
      'Piscina',
      'Servicio de limpieza'
    ],
    images: [
      '/casapluda/03b1f694-ab43-4733-a0f7-387d835bea77.jpg',
      '/casapluda/11d14fb8-f61e-40e8-8dda-54172c3c6fe9.jpg',
      '/casapluda/17974858-c5c3-4c5c-bdc6-f7b81f37de63.jpg',
      '/casapluda/3a47c8bc-eea4-4da0-a405-a0a42fbfe5e3.jpg',
      '/casapluda/440cf7b5-6447-4493-a968-8ee1f32420fe.jpg',
      '/casapluda/4ec74e39-e831-459c-9e09-0443c03f1b08.jpg',
      '/casapluda/71903675-48ac-4bd2-a9d2-d8142162a28b.jpg',
      '/casapluda/813edde7-d19a-49e5-b086-1ee2bcc686d6.jpg'
    ],
    available: true,
    airbnb_link: 'https://www.airbnb.mx/rooms/1596383484066637432?unique_share_id=185501ea-a060-4a69-9816-c5854de8d463&viralityEntryPoint=1&s=76',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Apartamento Pluda 1 - Casa Maribel',
    description: 'Hermoso apartamento Casa Maribel en Las Terrenas con excelente ubicación. Ideal para familias o grupos que buscan un alojamiento espacioso y confortable cerca de la playa. Cuenta con todas las comodidades para una estadía inolvidable.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 110,
    amenities: [
      'WiFi de alta velocidad',
      'Aire acondicionado',
      'Cocina completamente equipada',
      'Balcón amplio',
      'A minutos de la playa',
      'Estacionamiento disponible',
      'TV por cable',
      'Agua caliente'
    ],
    images: [
      '/Apartamento-pluda-1/ap1.jpeg',
      '/Apartamento-pluda-1/ap2.jpeg',
      '/Apartamento-pluda-1/ap3.jpeg',
      '/Apartamento-pluda-1/ap4.jpeg',
      '/Apartamento-pluda-1/ap5.jpeg',
      '/Apartamento-pluda-1/ap6.jpeg'
    ],
    available: true,
    airbnb_link: 'https://www.airbnb.mx/rooms/1632164200467835560?unique_share_id=9d7a4f77-3b61-49d7-8f83-d8e3c6d17b9f&viralityEntryPoint=1&s=76',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Apartamento Pluda 2 - Casa Maribel',
    description: 'Moderno apartamento Casa Maribel en Las Terrenas, perfecto para quienes buscan comodidad y estilo. Alojamiento recientemente renovado con acabados de primera calidad, ideal para parejas o familias pequeñas que desean disfrutar del paraíso caribeño.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 110,
    amenities: [
      'WiFi incluido',
      'Aire acondicionado',
      'Cocina moderna',
      'Terraza privada',
      'Cerca de restaurantes',
      'Zona tranquila',
      'Ventiladores de techo',
      'Ropa de cama premium'
    ],
    images: [
      '/Apartamento-pluda-2/ap2.jpeg',
      '/Apartamento-pluda-2/ap3.jpeg',
      '/Apartamento-pluda-2/ap4.jpeg',
      '/Apartamento-pluda-2/ap5.jpeg',
      '/Apartamento-pluda-2/ap6.jpeg',
      '/Apartamento-pluda-2/ap7.jpeg'
    ],
    available: true,
    airbnb_link: 'https://www.airbnb.mx/rooms/1633614492709582785?unique_share_id=8127546a-920d-4b7f-b076-90295333f681&viralityEntryPoint=1&s=76',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
