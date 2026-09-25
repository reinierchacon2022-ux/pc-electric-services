const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
});

const translations = {
  es: {
    pageTitle: 'P&C Electric Services LLC | Electricistas en Laredo, Texas', menu: 'Menú', navServices: 'Servicios', navWork: 'Trabajos', navProcess: 'Cómo trabajamos', navCoverage: 'Cobertura', navReviews: 'Reseñas', navEstimate: 'Solicitar estimado', heroTitle: 'Trabajo eléctrico seguro. Resultados que duran.', heroCopy: 'Instalaciones residenciales y comerciales, desde obra nueva hasta diagnóstico y actualización de paneles.', callEstimate: 'Llamar para un estimado', viewServices: 'Ver servicios', trustDirect: 'Atención directa', trustOrganized: 'Trabajo organizado', trustSafety: 'Enfoque en seguridad', servicesEyebrow: 'Servicios eléctricos', servicesTitle: 'Capacidad para proyectos pequeños y grandes', servicesCopy: 'Soluciones claras para constructores, propietarios y negocios.', service1Title: 'Obra nueva', service1Copy: 'Instalación eléctrica completa para viviendas, desarrollos y espacios comerciales.', service2Title: 'Rough-in y trim', service2Copy: 'Cableado, cajas, dispositivos y terminaciones coordinadas con el calendario de obra.', service3Title: 'Paneles y circuitos', service3Copy: 'Alimentadores, breakers, circuitos dedicados y actualización de distribución eléctrica.', service4Title: 'Iluminación', service4Copy: 'Instalación interior y exterior con atención a ubicación, acabado y funcionamiento.', service5Title: 'Diagnóstico', service5Copy: 'Localización de fallas, sobrecargas, pérdida de alimentación y problemas de equipos.', service6Title: 'Servicio comercial', service6Copy: 'Trabajos eléctricos para locales, oficinas, equipos y necesidades de expansión.', workEyebrow: 'Nuestros trabajos eléctricos', workTitle: 'Calidad visible en cada instalación', workCopy: 'Paneles, cableado de obra nueva y terminaciones de iluminación con atención a cada detalle.', processEyebrow: 'Un proceso sencillo', processTitle: 'Del recorrido inicial a la inspección final', processCopy: 'Revisamos el alcance, organizamos materiales y ejecutamos cada etapa con comunicación clara.', step1Title: 'Revisión', step1Copy: 'Evaluamos planos, carga, recorrido y condiciones del lugar.', step2Title: 'Estimado', step2Copy: 'Definimos alcance, materiales y precio antes de comenzar.', step3Title: 'Instalación', step3Copy: 'Coordinamos el trabajo con las demás etapas del proyecto.', step4Title: 'Verificación', step4Copy: 'Probamos, identificamos y dejamos el sistema listo para inspección.', coverageEyebrow: 'Área de servicio', coverageTitle: 'Sirviendo a Laredo y comunidades cercanas', coverageCopy: 'Proyectos residenciales, subdivisiones, nuevas construcciones y servicio comercial.', reviewsEyebrow: 'Opiniones de nuestros clientes', reviewsTitle: '¿Quedó satisfecho con nuestro trabajo?', reviewsCopy: 'Su opinión ayuda a otras familias y negocios de Laredo a elegir un servicio eléctrico confiable.', reviewCardTitle: 'Cuéntenos cómo fue su experiencia', reviewCardCopy: 'Busque P&C Electric Services LLC en Google Maps y publique su reseña.', leaveReview: 'Dejar una reseña', reviewNote: 'Se abrirá Google Maps en una nueva ventana.', contactEyebrow: 'Hablemos de su proyecto', contactTitle: '¿Necesita un estimado eléctrico?', contactCopy: 'Cuéntenos el tipo de trabajo, la ubicación y cuándo necesita comenzar.', companyLabel: 'Compañía', call: 'Llamar', whatsapp: 'Escribir por WhatsApp', footerServices: 'Servicios eléctricos en Laredo, Texas'
  },
  en: {
    pageTitle: 'P&C Electric Services LLC | Electricians in Laredo, Texas', menu: 'Menu', navServices: 'Services', navWork: 'Our Work', navProcess: 'Our Process', navCoverage: 'Service Area', navReviews: 'Reviews', navEstimate: 'Request an Estimate', heroTitle: 'Safe electrical work. Results built to last.', heroCopy: 'Residential and commercial electrical installations, from new construction to troubleshooting and panel upgrades.', callEstimate: 'Call for an Estimate', viewServices: 'View Services', trustDirect: 'Direct Service', trustOrganized: 'Organized Work', trustSafety: 'Safety Focused', servicesEyebrow: 'Electrical Services', servicesTitle: 'Ready for projects large and small', servicesCopy: 'Clear solutions for builders, homeowners, and businesses.', service1Title: 'New Construction', service1Copy: 'Complete electrical installation for homes, developments, and commercial spaces.', service2Title: 'Rough-in and Trim', service2Copy: 'Wiring, boxes, devices, and finishes coordinated with the construction schedule.', service3Title: 'Panels and Circuits', service3Copy: 'Feeders, breakers, dedicated circuits, and electrical distribution upgrades.', service4Title: 'Lighting', service4Copy: 'Interior and exterior installation with attention to placement, finish, and performance.', service5Title: 'Troubleshooting', service5Copy: 'Locating faults, overloads, power loss, and equipment-related electrical problems.', service6Title: 'Commercial Service', service6Copy: 'Electrical work for retail spaces, offices, equipment, and expansion needs.', workEyebrow: 'Our Electrical Work', workTitle: 'Quality you can see in every installation', workCopy: 'Panels, new-construction wiring, and lighting finishes completed with attention to every detail.', processEyebrow: 'A Simple Process', processTitle: 'From the initial walkthrough to final inspection', processCopy: 'We review the scope, organize materials, and complete every stage with clear communication.', step1Title: 'Review', step1Copy: 'We evaluate plans, load, routing, and site conditions.', step2Title: 'Estimate', step2Copy: 'We define scope, materials, and pricing before work begins.', step3Title: 'Installation', step3Copy: 'We coordinate our work with every stage of the project.', step4Title: 'Verification', step4Copy: 'We test, label, and prepare the system for inspection.', coverageEyebrow: 'Service Area', coverageTitle: 'Serving Laredo and nearby communities', coverageCopy: 'Residential projects, subdivisions, new construction, and commercial service.', reviewsEyebrow: 'Customer Reviews', reviewsTitle: 'Were you satisfied with our work?', reviewsCopy: 'Your feedback helps other Laredo families and businesses choose dependable electrical service.', reviewCardTitle: 'Tell us about your experience', reviewCardCopy: 'Find P&C Electric Services LLC on Google Maps and publish your review.', leaveReview: 'Leave a Review', reviewNote: 'Google Maps will open in a new window.', contactEyebrow: 'Let’s discuss your project', contactTitle: 'Need an electrical estimate?', contactCopy: 'Tell us about the work, location, and your preferred start date.', companyLabel: 'Company', call: 'Call', whatsapp: 'Message us on WhatsApp', footerServices: 'Electrical services in Laredo, Texas'
  }
};

function setLanguage(language, remember = true) {
  const lang = translations[language] ? language : 'es';
  document.documentElement.lang = lang;
  document.title = translations[lang].pageTitle;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (remember) localStorage.setItem('pc-language', lang);
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem('pc-language');
const phoneLanguage = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
setLanguage(savedLanguage || phoneLanguage, false);
document.querySelector('#year').textContent = new Date().getFullYear();
