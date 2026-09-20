import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.procesosmejores.com',
  // 4322 por defecto, para no chocar con el sitio completo (4321).
  // Si el entorno define PORT, gana ese (lo usa la vista previa).
  server: { port: Number(process.env.PORT) || 4322 },
  integrations: [
    sitemap({
      // /gracias sólo se ve después de enviar el formulario: no va al buscador.
      filter: (pagina) => !pagina.includes('/gracias'),
    }),
  ],
});
