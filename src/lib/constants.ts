export const brand = {
  name: "Macashopper",
  description:
    "Personal shopper de vitaminas, skincare, ropa y más con productos 100% originales y envíos seguros.",
  locations: ["Cali", "Jamundí"],
  city: "Santiago de Cali, Colombia",
  phone: "301 7601906",
  email: "macatoma1995@hotmail.com",
  hours: "Siempre abierto",
  priceRange: "$",
  whatsappMessage:
    "Hola, te he visto en la página web. Me interesa un producto de tu tienda.",
  whatsappUrl:
    "https://api.whatsapp.com/message/VLT7JDXPQ432D1?autoload=1&app_absent=0&utm_source=ig",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/macashopper/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/Macashopper/?ref=_xav_ig_profile_page_web#",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@macashopper?_t=ZS-90vpe8NIlC4&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnRM64aKnIsw18NfZtPNoXHT8XTlcQp2WI20X4Q4Op7JpBvH2DdNlWLjmhvro_aem_2Vv6ElKWhH1CjXwVXws8Tw",
    },
  ],
};

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Vitaminas", href: "/vitaminas" },
  { label: "Skincare", href: "/skincare" },
  { label: "Ropa", href: "/ropa" },
  { label: "Pedidos especiales", href: "/pedidos-especiales" },
  { label: "Contacto", href: "/contacto" },
];

export const heroBadges = [
  "100% Original",
  "Personal Shopper",
  "Envíos seguros",
  "Vitaminas, skincare y ropa",
];

export const trustPoints = [
  {
    title: "100% Original",
    description: "Verificación de autenticidad en cada compra.",
  },
  {
    title: "Atención personalizada",
    description: "Acompañamiento experto de inicio a fin.",
  },
  {
    title: "Envíos seguros",
    description: "Logística confiable con seguimiento y respaldo.",
  },
  {
    title: "Domicilio local",
    description: "Cobertura rápida en Cali y Jamundí.",
  },
];

export const howItWorksSteps = [
  {
    title: "Cuéntanos qué buscas",
    description:
      "Escríbenos por WhatsApp o redes. Compartes tu necesidad y tu ciudad.",
  },
  {
    title: "Recibes asesoría",
    description:
      "Validamos opciones, marcas y disponibilidad con total transparencia.",
  },
  {
    title: "Entrega segura",
    description:
      "Coordinamos el envío y recibes tu pedido con seguimiento y respaldo.",
  },
];

export const ctaContent = {
  title: "Lista para una compra premium y segura.",
  subtitle: "Escríbenos hoy y recibe asesoría personalizada.",
};

export const categoryHighlights = [
  {
    title: "Vitaminas",
    description: "Suplementos originales y asesoría personalizada.",
    href: "/vitaminas",
  },
  {
    title: "Skincare",
    description: "Rutinas premium para cada tipo de piel.",
    href: "/skincare",
  },
  {
    title: "Ropa",
    description: "Piezas curadas con estilo boutique.",
    href: "/ropa",
  },
  {
    title: "Pedidos especiales",
    description: "Gestionamos productos exclusivos a tu medida.",
    href: "/pedidos-especiales",
  },
];

export const categoryContent = {
  vitaminas: {
    title: "Vitaminas originales con asesoría experta",
    description:
      "Seleccionamos suplementos auténticos y de alta calidad según tu objetivo. Te guiamos en marcas, dosis y tiempos para una compra segura y efectiva.",
  },
  skincare: {
    title: "Skincare premium, rutina personalizada",
    description:
      "Construimos una rutina que cuida tu piel con productos originales, efectivos y adecuados para tu tipo de piel y clima.",
  },
  ropa: {
    title: "Ropa curada con estilo boutique",
    description:
      "Encuentra piezas originales y sofisticadas, seleccionadas según tu estilo, talla y ocasión con asesoría personalizada.",
  },
  "pedidos-especiales": {
    title: "Pedidos especiales a tu medida",
    description:
      "¿Buscas algo específico? Gestionamos pedidos especiales con verificación de origen, opciones de compra seguras y tiempos claros.",
  },
};

export const categoryImageSets: Record<string, string[]> = {
  vitaminas: [
    "/imagenes/vitaminas-1.jpg",
    "/imagenes/vitaminas-2.jpg",
    "/imagenes/vitaminas-3.jpg",
    "/imagenes/vitaminas-4.jpg",
    "/imagenes/vitaminas-5.jpg",
    "/imagenes/vitaminas-6.jpg",
  ],
  skincare: [
    "/imagenes/skincare-1.jpg",
    "/imagenes/skincare-2.jpg",
    "/imagenes/skincare-3.jpg",
    "/imagenes/skincare-4.jpg",
    "/imagenes/skincare-5.jpg",
    "/imagenes/skincare-6.jpg",
  ],
  ropa: [
    "/imagenes/ropa-1.jpg",
    "/imagenes/ropa-2.jpg",
    "/imagenes/ropa-3.jpg",
    "/imagenes/ropa-4.jpg",
    "/imagenes/ropa-5.jpg",
    "/imagenes/ropa-6.jpg",
  ],
  "pedidos-especiales": [
    "/imagenes/especiales-1.jpg",
    "/imagenes/especiales-2.jpg",
    "/imagenes/especiales-3.jpg",
    "/imagenes/especiales-4.jpg",
    "/imagenes/especiales-5.jpg",
    "/imagenes/especiales-6.jpg",
  ],
  gamer: [
    "/imagenes/gamer-1.jpg",
    "/imagenes/gamer-2.jpg",
    "/imagenes/gamer-3.jpg",
    "/imagenes/gamer-4.jpg",
    "/imagenes/gamer-5.jpg",
    "/imagenes/gamer-6.jpg",
  ],
};

export const categoryProductSamples: Record<
  string,
  { name: string; description: string }[]
> = {
  vitaminas: [
    {
      name: "Pack bienestar diario",
      description: "Selección premium para energía, defensa y balance diario.",
    },
    {
      name: "Colágeno + antioxidantes",
      description: "Fórmulas originales para piel luminosa y soporte articular.",
    },
    {
      name: "Omega 3 de alta pureza",
      description: "Calidad certificada para corazón, mente y recuperación.",
    },
    {
      name: "Multivitamínico premium",
      description: "Soporte completo con ingredientes de alta biodisponibilidad.",
    },
    {
      name: "Magnesio + descanso",
      description: "Apoyo para relajación, sueño reparador y bienestar muscular.",
    },
    {
      name: "Vitaminas personalizadas",
      description: "Te guiamos según tu objetivo y estilo de vida.",
    },
  ],
  skincare: [
    {
      name: "Rutina glow inteligente",
      description: "Limpieza suave, tratamiento y brillo natural.",
    },
    {
      name: "Sérum renovación",
      description: "Activos premium para textura uniforme y luminosidad.",
    },
    {
      name: "Hidratación profunda",
      description: "Capas de cuidado para una piel elástica y protegida.",
    },
    {
      name: "Protección solar alta",
      description: "Acabado elegante con protección diaria indispensable.",
    },
    {
      name: "Piel sensible calmada",
      description: "Fórmulas respetuosas para equilibrio y confort.",
    },
    {
      name: "Rutina personalizada",
      description: "Te recomendamos según clima, tipo de piel y objetivo.",
    },
  ],
  ropa: [
    {
      name: "Set urbano premium",
      description: "Piezas versátiles con acabado boutique y fit impecable.",
    },
    {
      name: "Básicos de lujo",
      description: "Cortes limpios y materiales suaves con estilo atemporal.",
    },
    {
      name: "Athleisure elegante",
      description: "Comodidad elevada para tu día a día.",
    },
    {
      name: "Capsule wardrobe",
      description: "Combinaciones clave para looks sofisticados.",
    },
    {
      name: "Accesorios curados",
      description: "Detalles que elevan el outfit con personalidad.",
    },
    {
      name: "Selección a medida",
      description: "Asesoría según ocasión, talla y estilo.",
    },
  ],
  "pedidos-especiales": [
    {
      name: "Importación exclusiva",
      description: "Cotización transparente y origen verificado.",
    },
    {
      name: "Producto agotado",
      description: "Buscamos alternativas originales con tiempos claros.",
    },
    {
      name: "Edición limitada",
      description: "Gestión prioritaria para lanzamientos especiales.",
    },
    {
      name: "Regalo premium",
      description: "Curaduría y empaque para una entrega impecable.",
    },
    {
      name: "Pedido corporativo",
      description: "Soluciones para equipos con asesoría dedicada.",
    },
    {
      name: "Solicitud personalizada",
      description: "Cuéntanos qué necesitas y lo gestionamos.",
    },
  ],
};

export const testimonials = [
  {
    name: "Laura M.",
    role: "Skincare",
    quote:
      "El proceso fue impecable. Me guiaron en todo y recibí productos auténticos y perfectos para mi piel.",
  },
  {
    name: "Carlos R.",
    role: "Vitaminas",
    quote:
      "La asesoría es de alto nivel. Compré lo que necesitaba sin dudas y con total confianza.",
  },
  {
    name: "Diana P.",
    role: "Ropa",
    quote:
      "Macashopper entendió mi estilo y encontró piezas únicas. Servicio premium total.",
  },
];

export const faqs = [
  {
    question: "¿Cómo garantizan que los productos sean originales?",
    answer:
      "Trabajamos con proveedores confiables y verificamos cada compra antes del envío.",
  },
  {
    question: "¿Puedo solicitar un producto que no esté en la web?",
    answer:
      "Sí. Gestionamos pedidos especiales con cotización personalizada y tiempos claros.",
  },
  {
    question: "¿Realizan envíos fuera de Cali y Jamundí?",
    answer:
      "Podemos evaluar envíos nacionales. Escríbenos para confirmarlo según tu ciudad.",
  },
];



