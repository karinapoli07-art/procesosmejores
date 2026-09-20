// Lee los cursos de src/content/cursos/*.md y calcula si están abiertos
// o en lista de espera según la fecha de inicio.
//
// El estado se calcula al compilar el sitio, y además se vuelve a
// comprobar en el navegador de cada visitante (ver CursosEstado.astro),
// así un curso vencido nunca se muestra como abierto aunque nadie
// haya vuelto a publicar el sitio.

export interface Curso {
  slug: string;
  titulo: string;
  area: string;
  inicio: string;
  sesiones: string;
  horario: string;
  horas: number;
  modalidad: string;
  precio: string;
  precioNota: string;
  inscripcion: string;
  programa: string;
  proximaEdicion: string;
  orden: number;
  /** Resumen corto (frontmatter "resumen"), para tarjetas. */
  descripcion: string;
  abierto: boolean;
  /** Cuerpo del .md renderizable: <curso.Content /> */
  Content: any;
}

const archivos = import.meta.glob<{ frontmatter: Record<string, any>; Content: any }>(
  '../content/cursos/*.md',
  { eager: true },
);

/** Fin del día de inicio, en hora de Argentina. */
export function finDelDiaDeInicio(inicio: string): Date | null {
  if (!inicio) return null;
  return new Date(`${inicio}T23:59:59-03:00`);
}

export function estaAbierto(inicio: string, hoy = new Date()): boolean {
  const fin = finDelDiaDeInicio(inicio);
  return fin !== null && fin.getTime() >= hoy.getTime();
}

export function fechaLarga(inicio: string): string {
  const d = finDelDiaDeInicio(inicio);
  if (!d) return '';
  return d.toLocaleDateString('es-AR', {
    weekday: 'long', day: 'numeric', month: 'long', timeZone: 'America/Argentina/Buenos_Aires',
  });
}

export function obtenerCursos(): Curso[] {
  return Object.entries(archivos)
    .map(([ruta, mod]) => {
      const fm = mod.frontmatter;
      const slug = ruta.split('/').pop()!.replace(/\.md$/, '');
      const inicio = String(fm.inicio ?? '');
      return {
        slug,
        titulo: fm.titulo,
        area: fm.area ?? '',
        inicio,
        sesiones: fm.sesiones ?? '',
        horario: fm.horario ?? '',
        horas: Number(fm.horas ?? 0),
        modalidad: fm.modalidad ?? '',
        precio: fm.precio ?? '',
        precioNota: fm.precioNota ?? '',
        inscripcion: fm.inscripcion ?? '',
        programa: fm.programa ?? '',
        proximaEdicion: fm.proximaEdicion ?? '',
        orden: Number(fm.orden ?? 99),
        descripcion: String(fm.resumen ?? '').trim(),
        abierto: estaAbierto(inicio),
        Content: mod.Content,
      } satisfies Curso;
    })
    .sort((a, b) => {
      // Abiertos primero, por fecha; después el resto, por orden.
      if (a.abierto !== b.abierto) return a.abierto ? -1 : 1;
      if (a.abierto && b.abierto) return a.inicio.localeCompare(b.inicio);
      return a.orden - b.orden;
    });
}

export function proximoCurso(): Curso | undefined {
  return obtenerCursos().find((c) => c.abierto);
}
