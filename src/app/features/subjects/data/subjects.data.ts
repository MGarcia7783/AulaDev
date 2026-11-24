import { Subject } from './subject.model';

/**
 * Única fuente de verdad de las materias.
 * El orden de este arreglo es el orden en que se muestran en toda la aplicación
 * (tarjetas, menú desplegable y buscador). Para agregar una materia, basta con
 * agregar un registro aquí.
 */
export const SUBJECTS: readonly Subject[] = [
  {
    slug: 'introduction-to-programming',
    legacySlug: 'introduccion-a-la-programacion',
    name: 'Introducción a la Programación',
    //curso: 'Fundamentos de Desarrollo de Software',
    description: 'Fundamentos de programación y resolución de problemas.',
    icon: 'code',
    accent: 'blue',
    units: [],
  },
  {
    slug: 'structured-programming',
    legacySlug: 'programacion-estructurada',
    name: 'Programación Estructurada',
    //curso: 'Desarrollo de Aplicaciones I',
    description: 'Desarrollo de programas nediantes estructuras de control y funciones.',
    icon: 'structure',
    accent: 'green',
    units: [],
  },
  {
    slug: 'data-structures',
    legacySlug: 'estructura-de-datos',
    name: 'Estructura de Datos',
    //curso: 'Desarrollo de Aplicaciones II',
    description: 'Organización, almacenamiento y gestión de datos mediante estructuras.',
    icon: 'cubes',
    accent: 'purple',
    units: [],
  },
  {
    slug: 'databases',
    legacySlug: 'base-de-datos',
    name: 'Base de Datos',
    //curso: 'Diseño de Base de Datos con SQL Server',
    description: 'Modelado, diseño y creación de bases de datos relacionales.',
    icon: 'database',
    accent: 'orange',
    units: [],
  },
  {
    slug: 'database-administration',
    legacySlug: 'administracion-de-bases-de-datos',
    name: 'Administración de Bases de Datos',
    //curso: 'Administración de Base de Datos con SQL Server',
    description: 'Gestión, seguridad, mantenimiento y optimización de bases de datos.',
    icon: 'gear',
    accent: 'turquoise',
    units: [],
  },
  {
    slug: 'object-oriented-programming',
    legacySlug: 'programacion-orientada-a-objetos',
    name: 'Programación Orientada a Objetos',
    //curso: 'Desarrollo de Aplicaciones III',
    description: 'Diseño y desarrollo de aplicaciones mediante programación orientada a objetos.',
    icon: 'structure',
    accent: 'green',
    units: [],
  },
  {
    slug: 'backend-api-restful',
    legacySlug: 'backend-api-restful',
    name: 'Backend - API RESTful',
    //curso: 'Desarrollo de Aplicaciones IV',
    description: 'Desarrollo de servicios backend y APIs REST.',
    icon: 'cloud-upload',
    accent: 'purple',
    units: [],
  },
  {
    slug: 'mobile-app-development',
    legacySlug: 'aplicaciones-moviles',
    name: 'Desarrollo de Aplicaciones Móviles',
    //curso: 'Desarrollo de Aplicaciones V',
    description: 'Diseño y desarrollo de aplicaciones para dispositivos móviles.',
    icon: 'mobile',
    accent: 'pink',
    units: [],
  },
  {
    slug: 'full-stack',
    legacySlug: 'full-stack',
    name: 'Full Stack',
    //curso: 'Optativa Profesional I',
    description: 'Desarrollo integral de aplicaciones web frontend y backend.',
    icon: 'layers',
    accent: 'green',
    units: [],
  },
];

/** Devuelve la materia que corresponde al slug de la dirección, o undefined si no existe. */
export function findSubjectBySlug(slug: string): Subject | undefined {
  return SUBJECTS.find((subject) => subject.slug === slug);
}
