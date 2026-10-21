// English version of the site data. Same shape as sitio.ts: when something changes there
// (a service, a step, a testimonial), it has to change here too.

import { contacto as contactoEs, formularios, empresasParticipantes } from './sitio';

export { formularios, empresasParticipantes };

export const contacto = {
  ...contactoEs,
  whatsapp: 'https://wa.me/5491134040401?text=Hi%20Rodrigo%2C%20I%27m%20writing%20from%20the%20Procesos%20Mejores%20website.',
};

export const servicios = [
  {
    id: 'iso',
    href: '/en/services/iso-management-systems',
    nombre: 'ISO management systems',
    resumen: 'Implementation, maintenance and auditing of management systems.',
    normas: ['ISO 9001', 'ISO 27001', 'ISO 42001', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 21001'],
  },
  {
    id: 'alimentaria',
    href: '/en/services/food-safety',
    nombre: 'Food safety',
    resumen: 'Good Manufacturing Practices and food safety for the food industry.',
    normas: ['GMP', 'ISO 22000', 'FSSC 22000'],
  },
  {
    id: 'lean',
    href: '/en/services/lean-manufacturing',
    nombre: 'Lean Manufacturing',
    resumen: 'The Toyota Production System applied to your operation.',
    normas: ['TPS', '5S', 'Kaizen', 'Standardized work'],
  },
  {
    id: 'vciso',
    href: '/en/services/vciso',
    nombre: 'vCISO',
    resumen: 'An external information security lead, without adding a full-time position.',
    normas: ['ISO/IEC 27001', 'Law 25,326'],
  },
  {
    id: 'formacion',
    href: '/en/courses',
    nombre: 'Training',
    resumen: 'Live internal auditor courses and tailored training.',
    normas: ['Open courses', 'In-company'],
  },
];

// A CONFIRMAR: Rodrigo has not validated these steps yet (same as in sitio.ts).
export const pasos = [
  {
    titulo: 'Initial assessment',
    texto: 'We look at how you work today and what the standard or your customer requires. You get a report with gaps and priorities.',
  },
  {
    titulo: 'Work plan',
    texto: 'Scope, stages, owners and deadlines, agreed with management before we start.',
  },
  {
    titulo: 'Implementation with your team',
    texto: 'Processes, documentation and records built together, with training along the way.',
  },
  {
    titulo: 'Internal audit',
    texto: 'We check the system before the certification body does and train your internal auditors.',
  },
  {
    titulo: 'Certification and improvement',
    texto: 'We support you through the external audit and leave the improvement cycle running.',
  },
];

// Real testimonials, translated from Spanish.
export const testimonios = [
  {
    texto: 'The best part of the course was how dynamic the classes were. I learned not only from the instructor, Rodrigo, but also from my classmates.',
    nombre: 'Agostina Miranda',
    cargo: 'QMS Lead',
    empresa: 'I-Mega Ingeniería',
    destacado: true,
  },
  {
    texto: 'Highly recommended! The course is clear and provides key knowledge. And Rodrigo is very professional and makes it really enjoyable.',
    nombre: 'Melissa Rybicki',
    cargo: 'Purchasing Lead',
    empresa: 'Tubos Renard SA',
    destacado: true,
  },
  {
    texto: 'Very enriching in quality concepts. A highly participatory course for every level of the company.',
    nombre: 'Nicolás Osa Codesido',
    cargo: 'Technical Manager',
    empresa: 'Micromoles SRL',
    destacado: true,
  },
  {
    texto: 'The course is taught in a very clear, dynamic and organized way. I also want to highlight how willing Rodrigo is to answer questions and doubts!',
    nombre: 'Sabrina Verón',
    cargo: 'HR Lead',
    empresa: 'Tubos Renard SA',
  },
  {
    texto: 'This course is an excellent way to understand ISO 9001:2015, get familiar with what an internal auditor does and what audits are for under the standard. It is very enjoyable and easy to follow, and it keeps students participating throughout. I recommend it!',
    nombre: 'Florencia López Barea',
    cargo: 'Administrative and Sales Assistant',
    empresa: 'Medeatec Argentina',
  },
  {
    texto: 'Very satisfied with the training. I was able to deepen my knowledge of quality management systems and learn many concepts and tools for internal audit work.',
    nombre: 'Elías Bur',
    cargo: 'Quality Inspector',
    empresa: 'Inprocil SA',
  },
  {
    texto: 'This course provides a solid knowledge base and good practice.',
    nombre: 'Martín Sosa',
    cargo: 'Quality Lead',
    empresa: 'Inprocil SA',
  },
  {
    texto: 'A more than interesting course, backed by good planning and teaching.',
    nombre: 'Lautaro Dujovne',
    cargo: 'Maintenance Engineer',
    empresa: 'Inprocil SA',
  },
  {
    texto: 'A very dynamic instructor, with experiences that always help to understand the topics.',
    nombre: 'Mauricio Turdó',
    cargo: 'Technical Lead',
    empresa: 'Sabecort Diesel Gas',
  },
  {
    texto: 'The internal auditor course was very dynamic. Rodrigo\'s classes created a participatory environment, both in theory and in practice. Throughout the course we worked on case studies about a fictitious company, which made the standard easier to understand. I am sure this experience will have a positive impact on my professional development.',
    nombre: 'Iara',
    cargo: 'Participant',
    empresa: '',
  },
];
