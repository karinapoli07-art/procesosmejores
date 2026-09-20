// Lee las notas del blog de src/content/blog/*.md.
//
// Frontmatter de cada nota:
//   titulo       Título de la nota (es el h1).
//   descripcion  Resumen de 140 a 160 caracteres: se usa en el listado y en buscadores.
//   fecha        Fecha de publicación, "AAAA-MM-DD". Vacía si no se conoce: en ese caso
//                no se muestra ninguna fecha y la nota va al final del listado.
//   etiquetas    Lista de temas, por ejemplo ["ISO 9001", "ISO/IEC 27001"].
// Opcionales:
//   seoTitulo    Título más corto para la pestaña y los buscadores (si falta, se usa titulo).
//   servicios    Ids de servicios relacionados (ver data/sitio.ts), el primero es el principal.
//   cursos       Slugs de cursos relacionados (ver content/cursos).
//   cierre       Pregunta con la que cierra la nota, antes de los servicios relacionados.
//   cierreTexto  Bajada de esa pregunta.
//   orden        Desempate entre notas con la misma fecha (o sin fecha): menor, primero.

export interface Encabezado {
  depth: number;
  slug: string;
  text: string;
}

export interface Nota {
  slug: string;
  titulo: string;
  seoTitulo: string;
  descripcion: string;
  /** "AAAA-MM-DD" o cadena vacía si la fecha no se conoce. */
  fecha: string;
  etiquetas: string[];
  servicios: string[];
  cursos: string[];
  cierre: string;
  cierreTexto: string;
  orden: number;
  /** Títulos del cuerpo (## y ###), para el índice de la nota. */
  encabezados: Encabezado[];
  /** Cuerpo del .md renderizable: <nota.Content /> */
  Content: any;
}

const archivos = import.meta.glob<{
  frontmatter: Record<string, any>;
  Content: any;
  getHeadings: () => Encabezado[];
}>('../content/blog/*.md', { eager: true });

function lista(valor: unknown): string[] {
  return Array.isArray(valor) ? valor.map((v) => String(v).trim()).filter(Boolean) : [];
}

/** Acepta sólo fechas con forma AAAA-MM-DD; cualquier otra cosa se toma como "sin fecha". */
function normalizarFecha(valor: unknown): string {
  if (valor instanceof Date && !Number.isNaN(valor.getTime())) return valor.toISOString().slice(0, 10);
  const texto = String(valor ?? '').trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(texto) ? texto : '';
}

/** "12 de febrero de 2024". Devuelve cadena vacía si no hay fecha. */
export function fechaNota(fecha: string): string {
  if (!fecha) return '';
  return new Date(`${fecha}T12:00:00-03:00`).toLocaleDateString('es-AR', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Argentina/Buenos_Aires',
  });
}

export function obtenerNotas(): Nota[] {
  return Object.entries(archivos)
    .map(([ruta, mod]) => {
      const fm = mod.frontmatter;
      const slug = ruta.split('/').pop()!.replace(/\.md$/, '');
      return {
        slug,
        titulo: String(fm.titulo ?? slug),
        seoTitulo: String(fm.seoTitulo ?? '').trim(),
        descripcion: String(fm.descripcion ?? '').trim(),
        fecha: normalizarFecha(fm.fecha),
        etiquetas: lista(fm.etiquetas),
        servicios: lista(fm.servicios),
        cursos: lista(fm.cursos),
        cierre: String(fm.cierre ?? '').trim(),
        cierreTexto: String(fm.cierreTexto ?? '').trim(),
        orden: Number(fm.orden ?? 99),
        encabezados: mod.getHeadings?.() ?? [],
        Content: mod.Content,
      } satisfies Nota;
    })
    .sort((a, b) => {
      // Más recientes primero; las que no tienen fecha, al final.
      if (a.fecha !== b.fecha) {
        if (!a.fecha) return 1;
        if (!b.fecha) return -1;
        return b.fecha.localeCompare(a.fecha);
      }
      return a.orden - b.orden || a.titulo.localeCompare(b.titulo, 'es');
    });
}
