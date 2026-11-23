import { Subject } from './subject.model';

/**
 * Única fuente de verdad de las materias.
 * El orden de este arreglo es el orden en que se muestran en toda la aplicación.
 */
export const SUBJECTS: readonly Subject[] = [
  {
    slug: 'introduccion-a-la-programacion',
    name: 'Introducción a la Programación',
    description: 'Conceptos básicos para comenzar tu camino en la programación.',
    icon: 'code',
    accent: 'blue',
  },
  {
    slug: 'programacion-estructurada',
    name: 'Programación Estructurada',
    course: 'Desarrollo de Aplicaciones I',
    description: 'Estructuras y control del programa.',
    icon: 'structure',
    accent: 'green',
  },
  {
    slug: 'estructura-de-datos',
    name: 'Estructura de Datos',
    course: 'Desarrollo de Aplicaciones II',
    description: 'Organiza y gestiona la información.',
    icon: 'cubes',
    accent: 'purple',
  },
  {
    slug: 'base-de-datos',
    name: 'Base de Datos',
    description: 'Diseño y manejo de bases de datos.',
    icon: 'database',
    accent: 'orange',
  },
  {
    slug: 'administracion-de-bases-de-datos',
    name: 'Administración de Bases de Datos',
    description: 'Administra y optimiza tus bases de datos.',
    icon: 'gear',
    accent: 'teal',
  },
  {
    slug: 'programacion-orientada-a-objetos',
    name: 'Programación Orientada a Objetos',
    course: 'Desarrollo de Aplicaciones III',
    description: 'Diseña software con POO.',
    icon: 'structure',
    accent: 'green',
  },
  {
    slug: 'backend-api-restful',
    name: 'Backend - API RESTful',
    course: 'Desarrollo de Aplicaciones IV',
    description: 'Desarrolla servicios y APIs REST.',
    icon: 'cloud',
    accent: 'purple',
  },
  {
    slug: 'aplicaciones-moviles',
    name: 'Desarrollo de Aplicaciones Móviles',
    course: 'Desarrollo de Aplicaciones V',
    description: 'Crea aplicaciones para dispositivos móviles.',
    icon: 'mobile',
    accent: 'pink',
  },
  {
    slug: 'full-stack',
    name: 'Full Stack',
    course: 'Optativa Profesional I',
    description: 'Desarrolla aplicaciones completas.',
    icon: 'layers',
    accent: 'green',
  },
];

export function findSubject(slug: string): Subject | undefined {
  return SUBJECTS.find((subject) => subject.slug === slug);
}
