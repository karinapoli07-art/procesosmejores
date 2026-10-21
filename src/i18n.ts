// Idiomas del sitio. El castellano vive en la raíz (/cursos) y el inglés en /en (/en/courses).
// Astro decide el idioma de cada página por la carpeta (ver i18n en astro.config.mjs).
//
// Para sumar una página nueva en los dos idiomas:
//   1. Crear la página en src/pages/... y su versión en src/pages/en/...
//   2. Agregar el par de rutas en `rutas`, así funcionan el selector ES | EN y los hreflang.

import * as es from './data/sitio';
import * as en from './data/sitio-en';

export type Lang = 'es' | 'en';

/** Idioma de la página actual. Usar con Astro.currentLocale. */
export function idioma(locale: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'es';
}

/** Datos del sitio (servicios, pasos, testimonios, contacto) en el idioma pedido. */
export function datos(lang: Lang) {
  return lang === 'en' ? en : es;
}

/** Pares de rutas equivalentes, sin barra final (salvo la raíz). */
export const rutas: [string, string][] = [
  ['/', '/en/'],
  ['/servicios/sistemas-de-gestion-iso', '/en/services/iso-management-systems'],
  ['/servicios/inocuidad-alimentaria', '/en/services/food-safety'],
  ['/servicios/lean-manufacturing', '/en/services/lean-manufacturing'],
  ['/servicios/vciso', '/en/services/vciso'],
  ['/cursos', '/en/courses'],
  ['/nosotros', '/en/about'],
  ['/contacto', '/en/contact'],
  ['/testimonios', '/en/testimonials'],
  ['/blog', '/en/blog'],
  ['/privacidad', '/en/privacy'],
  ['/gracias', '/en/thank-you'],
  // Notas del blog: el slug cambia de idioma.
  ['/blog/iso-9001-e-iso-27001', '/en/blog/iso-9001-and-iso-27001'],
  ['/blog/enmienda-cambio-climatico-iso-9001', '/en/blog/climate-change-amendment-iso-9001'],
];

function normalizar(ruta: string): string {
  if (ruta === '/en') return '/en/';
  return ruta.length > 1 && ruta.endsWith('/') && ruta !== '/en/' ? ruta.slice(0, -1) : ruta;
}

/** Ruta de esta misma página en el otro idioma, o el inicio de ese idioma si no tiene par. */
export function rutaEnOtroIdioma(ruta: string, destino: Lang): string {
  const actual = normalizar(ruta);
  const par = rutas.find(([r1, r2]) => r1 === actual || r2 === actual);
  if (par) return destino === 'en' ? par[1] : par[0];
  return destino === 'en' ? '/en/' : '/';
}

/** Ruta de esta página en cada idioma, sólo si existe su par (para los hreflang). */
export function alternativas(ruta: string): { es: string; en: string } | null {
  const actual = normalizar(ruta);
  const par = rutas.find(([r1, r2]) => r1 === actual || r2 === actual);
  return par ? { es: par[0], en: par[1] } : null;
}

/** Textos de los componentes compartidos. */
export const ui = {
  es: {
    htmlLang: 'es-AR',
    ogLocale: 'es_AR',
    ogImageAlt: 'Procesos Mejores. Mejoramos los procesos de tu empresa.',
    saltar: 'Saltar al contenido',
    inicio: 'Inicio',
    ubicacion: 'Ubicación',
    marcaInicio: 'Procesos Mejores, inicio',
    abrirMenu: 'Abrir menú',
    navPrincipal: 'Principal',
    servicios: 'Servicios',
    cursos: 'Cursos',
    nosotros: 'Nosotros',
    blog: 'Blog',
    contacto: 'Contacto',
    solicitarDiagnostico: 'Solicitar diagnóstico',
    solicitarDiagnosticoInicial: 'Solicitar diagnóstico inicial',
    escribirWhatsapp: 'Escribir por WhatsApp',
    escribinosWhatsapp: 'Escribinos por WhatsApp',
    otroIdioma: 'EN',
    otroIdiomaLargo: 'Read this page in English',
    otroIdiomaLang: 'en',
    pie: 'Consultoría y formación en sistemas de gestión y mejora de procesos. Buenos Aires, Argentina. Desde 2012.',
    privacidad: 'Política de privacidad',
    ctaTitulo: '¿Por dónde empezar? Por un diagnóstico.',
    ctaTexto: 'Relevamos cómo trabajás hoy y qué te piden la norma, tus clientes o la ley. Con eso te decimos qué hace falta, en qué orden y cuánto trabajo lleva.',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    ogImageAlt: "Procesos Mejores. We improve your company's processes.",
    saltar: 'Skip to content',
    inicio: 'Home',
    ubicacion: 'Breadcrumb',
    marcaInicio: 'Procesos Mejores, home',
    abrirMenu: 'Open menu',
    navPrincipal: 'Main',
    servicios: 'Services',
    cursos: 'Courses',
    nosotros: 'About',
    blog: 'Blog',
    contacto: 'Contact',
    solicitarDiagnostico: 'Request an assessment',
    solicitarDiagnosticoInicial: 'Request an initial assessment',
    escribirWhatsapp: 'Message us on WhatsApp',
    escribinosWhatsapp: 'Message us on WhatsApp',
    otroIdioma: 'ES',
    otroIdiomaLargo: 'Ver esta página en castellano',
    otroIdiomaLang: 'es',
    pie: 'Consulting and training in management systems and process improvement. Buenos Aires, Argentina. Since 2012.',
    privacidad: 'Privacy policy',
    ctaTitulo: 'Where to start? With an assessment.',
    ctaTexto: 'We look at how you work today and what the standard, your customers or the law require. Then we tell you what is needed, in what order and how much work it takes.',
  },
} as const;

/** Ruta de una página en el idioma pedido, a partir de su ruta en castellano: ruta('en', '/cursos') → '/en/courses'. */
export function ruta(lang: Lang, rutaEs: string): string {
  if (lang === 'es') return rutaEs;
  const [base, ancla] = rutaEs.split('#');
  const [camino, consulta] = base.split('?');
  const par = rutas.find(([r1]) => r1 === normalizar(camino));
  const destino = par ? par[1] : '/en/';
  return destino + (consulta ? `?${consulta}` : '') + (ancla ? `#${ancla}` : '');
}
