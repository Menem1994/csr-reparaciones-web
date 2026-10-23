// Todos los datos comerciales se editan desde este archivo.
export const company = {
  name: 'CSR Reparaciones',
  owner: 'Carlos Rocha',
  phoneDisplay: '336 420-3677',
  phoneInternational: '+543364203677',
  whatsapp: 'https://wa.me/5493364203677',
  email: 'saidrochaa@outlook.com',
  city: 'San Nicolás de los Arroyos',
  instagram: 'https://www.instagram.com/csr_reparaciones/',
  facebook: 'https://www.facebook.com/profile.php?id=61583969757785&locale=es_LA',
  // Acceso al perfil identificado por Place ID en Google Maps. Allí se ven TODAS las opiniones.
  google: 'https://www.google.com/maps/search/?api=1&query=CSR%20Reparaciones%20San%20Nicolas&query_place_id=ChIJ97PMoZJnt5UR3FoF7l9pCFI',
};

export const services = [
  { slug: 'lavarropas', title: 'Lavarropas', tag: 'Especialidad principal', description: 'Diagnóstico y reparación de fallas de lavado, centrifugado, desagote, motor, rodamientos y placas electrónicas.', icon: 'WashingMachine' },
  { slug: 'microondas', title: 'Microondas', tag: 'Servicio técnico', description: 'Revisión de fallas de encendido, calentamiento y componentes internos.', icon: 'Microwave' },
  { slug: 'ventiladores', title: 'Ventiladores', tag: 'Hogar e industria', description: 'Reparación y mantenimiento de ventiladores de distintos modelos.', icon: 'Fan' },
];

export const extraServices = [
  { title: 'Freidoras de aire', icon: 'CookingPot' },
  { title: 'Aspiradoras robot', icon: 'Bot' },
  { title: 'Cafeteras', icon: 'Coffee' },
  { title: 'Secarropas', icon: 'Shirt' },
  { title: 'Pavas eléctricas', icon: 'Zap' },
  { title: 'Equipos comerciales', icon: 'Wrench' },
];

export const gallery = [
  { src: '/images/carlos-trabajando-2.webp', alt: 'Carlos realizando trabajos técnicos a domicilio', label: 'Trabajos a domicilio', wide: true },
  { src: '/images/placa-lavarropas.webp', alt: 'Placa electrónica de un lavarropas en revisión', label: 'Electrónica y diagnóstico' },
  { src: '/images/lavarropas-samsung-reparacion.webp', alt: 'Lavarropas Samsung abierto para revisión de componentes', label: 'Reparación de lavarropas' },
  { src: '/images/taller-electronica.webp', alt: 'Herramientas y estación de trabajo para reparaciones', label: 'Nuestro taller' },
  { src: '/images/cafetera-abierta.webp', alt: 'Cafetera abierta para inspección técnica', label: 'Otros electrodomésticos' },
];

// Emparejadas EXACTAMENTE con los nombres que indicó el dueño.
export const comparisons = [
  { id: '01', title: 'Recuperación y limpieza de lavarropas', detail: 'Trabajo real — comparación 1', before: '/images/lavarropas-antes-1.webp', after: '/images/lavarropas-despues-1.webp' },
  { id: '02', title: 'Limpieza integral de componentes', detail: 'Trabajo real — comparación 2', before: '/images/lavarropas-antes-2.webp', after: '/images/lavarropas-despues-2.webp' },
];

// Transcripción de reseñas reales facilitadas por el propietario (capturas de Google).
// Evitamos publicar fechas relativas que quedan desactualizadas.
export const reviews = [
  { author: 'Nahuel Marinzalda', stars: 5, text: 'Carlos es excelente, buena atención, rapidez y eficiencia. Lo contacté un feriado, enseguida me contestó y ese mismo día vino a revisar mi lavarropas (Gafa Fuzzy Logic 6505 Inox que está presentando un error E3). Al otro día consiguió todo los repuestos y lo reparó, un genio, lo volvería a llamar y recomiendo 100%' },
  { author: 'Dalma Dorigo', stars: 5, text: 'Me arreglo el lavarropas Samsung. Muy buena predisposición y super recomendable.' },
  { author: 'Lucrecia Heinzen', stars: 5, text: 'Excelente servicio en un dia me arreglo el secarropas, y te explica todo lo que necesitas hacer. Muy buena predisposición al hacer el trabajo.' },
  { author: 'Georgina Claverie', stars: 5, text: 'Excelente servicio, rapidez sobre todo. Me fue explicando paso a paso los problemas de mi bordeadora , y lo más importante , la dejó perfecta. Lo súper recomiendo 🙌🏻' },
  { author: 'Natalia Pereyra', stars: 5, text: 'Muy buena atención escribí hoy domingo y respondieron rapidísimo' },
  { author: 'Adrian Mores', stars: 5, text: 'Super rápido, responsable y trabajo muy profesional.. recomiendo al 100% ... informe detallado y trabajo garantizado... me sorprendió lo rápido y eficiente....' },
  { author: 'Daniel Ojeda', stars: 5, text: 'Rápida atención por msj acorde a la hora que era. Clara la aclaración del trabajo y su derivación.' },
  { author: 'SUMERIAN', stars: 5, text: 'Muy buena predisposicion. Muy buena atencion. Trabajo excelente.' },
  { author: 'Gisela Henrich', stars: 5, text: 'Me resolvieron muy rápido y económico! Tenía unos caloventores y secador de pelo para reparar' },
  { author: 'adrian avataneo', stars: 5, text: 'Excelente lo repararon mí lavaropas súper rápido y quedo de 10' },
  { author: 'Virginia Fernández', stars: 5, text: 'Exelente servicio!! La verdad muy conforme unos genios!!' },
];
