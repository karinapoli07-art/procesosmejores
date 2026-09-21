// Datos generales del sitio. Cambiar acá se refleja en todas las páginas.

export const contacto = {
  email: 'rodmendi@procesosmejores.com',
  telefono: '+54 11 3404-0401',
  telefonoLink: 'tel:+541134040401',
  whatsapp: 'https://wa.me/5491134040401?text=Hola%20Rodrigo%2C%20te%20escribo%20desde%20la%20web%20de%20Procesos%20Mejores.',
  linkedin: 'https://www.linkedin.com/in/rodmendi/',
};

// Formularios de Google existentes. REG-006 pregunta qué curso te interesa:
// sirve como lista de espera para cualquier curso sin fecha.
export const formularios = {
  listaDeEspera: 'https://forms.gle/ucCk72r2Vy32Yjtc7',
};

export const servicios = [
  {
    id: 'iso',
    href: '/servicios/sistemas-de-gestion-iso',
    nombre: 'Sistemas de gestión ISO',
    resumen: 'Implementación, mantenimiento y auditoría de sistemas de gestión.',
    normas: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 21001'],
  },
  {
    id: 'alimentaria',
    href: '/servicios/inocuidad-alimentaria',
    nombre: 'Inocuidad alimentaria',
    resumen: 'Buenas Prácticas de Manufactura e inocuidad para la industria de alimentos.',
    normas: ['BPM', 'ISO 22000', 'FSSC 22000'],
  },
  {
    id: 'lean',
    href: '/servicios/lean-manufacturing',
    nombre: 'Lean Manufacturing',
    resumen: 'El Sistema de Producción Toyota aplicado a tu operación.',
    normas: ['TPS', '5S', 'Kaizen', 'Trabajo estandarizado'],
  },
  {
    id: 'vciso',
    href: '/servicios/vciso',
    nombre: 'vCISO',
    resumen: 'Un responsable externo de seguridad de la información, sin sumar un puesto full time.',
    normas: ['ISO/IEC 27001', 'Ley 25.326'],
  },
  {
    id: 'formacion',
    href: '/cursos',
    nombre: 'Formación',
    resumen: 'Cursos de auditor interno en vivo y capacitaciones a medida.',
    normas: ['Cursos abiertos', 'In company'],
  },
];

// A CONFIRMAR: Rodrigo todavía no validó estos pasos, en especial el «Diagnóstico inicial»
// y que el acompañamiento llegue hasta la auditoría de certificación.
export const pasos = [
  {
    titulo: 'Diagnóstico inicial',
    texto: 'Relevamos cómo trabajás hoy y qué te pide la norma o tu cliente. Sale un informe con brechas y prioridades.',
  },
  {
    titulo: 'Plan de trabajo',
    texto: 'Alcance, etapas, responsables y plazos, acordados con la dirección antes de empezar.',
  },
  {
    titulo: 'Implementación con tu equipo',
    texto: 'Procesos, documentación y registros construidos en conjunto, capacitando en el camino.',
  },
  {
    titulo: 'Auditoría interna',
    texto: 'Verificamos el sistema antes que el organismo certificador y formamos a tus auditores internos.',
  },
  {
    titulo: 'Certificación y mejora',
    texto: 'Acompañamos la auditoría externa y dejamos el ciclo de mejora funcionando.',
  },
];

// Testimonios reales de participantes de ediciones anteriores.
export const testimonios = [
  {
    texto: 'Lo mejor del curso fue el dinamismo de las clases, que permitió no sólo aprender del instructor Rodrigo, sino de mis propios compañeros.',
    nombre: 'Agostina Miranda',
    cargo: 'Responsable del SGC',
    empresa: 'I-Mega Ingeniería',
    destacado: true,
  },
  {
    texto: '¡Muy recomendable! El curso es claro y aporta conocimientos claves. Además, Rodrigo es muy profesional y lo hace súper ameno.',
    nombre: 'Melissa Rybicki',
    cargo: 'Responsable de Compras',
    empresa: 'Tubos Renard SA',
    destacado: true,
  },
  {
    texto: 'Muy enriquecedor en conceptos de calidad. Curso muy participativo para todos los niveles de la empresa.',
    nombre: 'Nicolás Osa Codesido',
    cargo: 'Gerente Técnico',
    empresa: 'Micromoles SRL',
    destacado: true,
  },
  {
    texto: 'El curso está dictado de una manera muy clara, dinámica y organizada. ¡Destaco también la predisposición de Rodrigo para atender consultas y dudas!',
    nombre: 'Sabrina Verón',
    cargo: 'Responsable de RRHH',
    empresa: 'Tubos Renard SA',
  },
  {
    texto: 'Este curso es una excelente opción para entender la norma ISO 9001:2015, comenzar a familiarizarse con lo que hace un auditor interno y cuál es el objetivo de las auditorías para la norma. Es muy ameno y fácil de entender, además propone participación constante del estudiante. ¡Lo recomiendo!',
    nombre: 'Florencia López Barea',
    cargo: 'Asistente administrativa y comercial',
    empresa: 'Medeatec Argentina',
  },
  {
    texto: 'Muy conforme con la capacitación, pude profundizar mis conocimientos en sistemas de gestión de la calidad y aprender muchos conceptos y herramientas para desarrollar tareas de auditoría interna.',
    nombre: 'Elías Bur',
    cargo: 'Inspector de Calidad',
    empresa: 'Inprocil SA',
  },
  {
    texto: 'Este curso proporciona una sólida base de conocimientos y buena práctica.',
    nombre: 'Martín Sosa',
    cargo: 'Responsable de Calidad',
    empresa: 'Inprocil SA',
  },
  {
    texto: 'Un curso más que interesante, acompañado de una buena planificación y docencia.',
    nombre: 'Lautaro Dujovne',
    cargo: 'Ingeniero de Mantenimiento',
    empresa: 'Inprocil SA',
  },
  {
    texto: 'Instructor muy dinámico y con experiencias que siempre ayudan a comprender los temas.',
    nombre: 'Mauricio Turdó',
    cargo: 'Responsable Técnico',
    empresa: 'Sabecort Diesel Gas',
  },
  {
    texto: 'El curso de auditor interno fue muy dinámico. Las clases de Rodrigo crearon un entorno participativo, tanto en la teoría como en la práctica. A lo largo de la cursada se propusieron casos prácticos vinculados a una empresa ficticia que facilitaron la comprensión de la norma. Fue una experiencia que estoy segura de que tendrá un impacto positivo en mi desarrollo profesional.',
    nombre: 'Iara',
    cargo: 'Participante',
    empresa: '',
  },
];

// Empresas de las que vinieron participantes (según los testimonios).
export const empresasParticipantes = [
  'Inprocil', 'Tubos Renard', 'Micromoles', 'Sabecort', 'Medeatec', 'I-Mega Ingeniería',
];
