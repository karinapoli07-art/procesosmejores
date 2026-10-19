import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.procesosmejores.com',
  // 4322 por defecto, para no chocar con el sitio completo (4321).
  // Si el entorno define PORT, gana ese (lo usa la vista previa).
  server: { port: Number(process.env.PORT) || 4322 },
  // Castellano en la raíz, inglés en /en. Ver src/i18n.ts.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Las páginas de gracias sólo se ven después de enviar el formulario: no van al buscador.
      filter: (pagina) => !pagina.includes('/gracias') && !pagina.includes('/thank-you'),
    }),
  ],
});
