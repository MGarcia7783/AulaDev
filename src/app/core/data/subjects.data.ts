import { Subject } from './subject.model';

/**
 * Única fuente de verdad de las materias.
 * El orden de este arreglo es el orden en que se muestran en toda la aplicación.
 */
export const SUBJECTS: readonly Subject[] = [
  {
    slug: 'introduccion-a-la-programacion',
    name: 'Introducción a la Programación',
    //course: 'Fundamentos de Desarrollo de Software',
    description: 'Fundamentos de programación y resolución de problemas.',
    icon: 'code',
    accent: 'blue',
  },
  {
    slug: 'programacion-estructurada',
    name: 'Programación Estructurada',
    //course: 'Desarrollo de Aplicaciones I',
    description: 'Desarrollo de programas nediantes estructuras de control y funciones.',
    icon: 'structure',
    accent: 'green',
  },
  {
    slug: 'estructura-de-datos',
    name: 'Estructura de Datos',
    //course: 'Desarrollo de Aplicaciones II',
    description: 'Organización, almacenamiento y gestión de datos mediante estructuras.',
    icon: 'cubes',
    accent: 'purple',
  },
  {
    slug: 'base-de-datos',
    name: 'Base de Datos',
    //course: 'Diseño de Base de Datos con SQL Server',
    description: 'Modelado, diseño y creación de bases de datos relacionales.',
    icon: 'database',
    accent: 'orange',
  },
  {
    slug: 'administracion-de-bases-de-datos',
    name: 'Administración de Bases de Datos',
    //course: 'Administración de Base de Datos con SQL Server',
    description: 'Gestión, seguridad, mantenimiento y optimización de bases de datos.',
    icon: 'gear',
    accent: 'teal',
  },
  {
    slug: 'programacion-orientada-a-objetos',
    name: 'Programación Orientada a Objetos',
    //course: 'Desarrollo de Aplicaciones III',
    description: 'Diseño y desarrollo de aplicaciones mediante programación orientada a objetos.',
    icon: 'structure',
    accent: 'green',
  },
  {
    slug: 'backend-api-restful',
    name: 'Backend - API RESTful',
    //course: 'Desarrollo de Aplicaciones IV',
    description: 'Desarrollo de servicios backend y APIs REST.',
    icon: 'cloud',
    accent: 'purple',
  },
  {
    slug: 'aplicaciones-moviles',
    name: 'Desarrollo de Aplicaciones Móviles',
    //course: 'Desarrollo de Aplicaciones V',
    description: 'Diseño y desarrollo de aplicaciones para dispositivos móviles.',
    icon: 'mobile',
    accent: 'pink',
  },
  {
    slug: 'full-stack',
    name: 'Full Stack',
    //course: 'Optativa Profesional I',
    description: 'Desarrollo integral de aplicaciones web frontend y backend.',
    icon: 'layers',
    accent: 'green',
  },
];

export function findSubject(slug: string): Subject | undefined {
  return SUBJECTS.find((subject) => subject.slug === slug);
}
