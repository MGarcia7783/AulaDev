import { Materia } from './materia.modelo';

/**
 * Única fuente de verdad de las materias.
 * El orden de este arreglo es el orden en que se muestran en toda la aplicación
 * (tarjetas, menú desplegable y buscador). Para agregar una materia, basta con
 * agregar un registro aquí.
 */
export const MATERIAS: readonly Materia[] = [
  {
    slug: 'introduccion-a-la-programacion',
    nombre: 'Introducción a la Programación',
    //curso: 'Fundamentos de Desarrollo de Software',
    descripcion: 'Fundamentos de programación y resolución de problemas.',
    icono: 'codigo',
    acento: 'azul',
  },
  {
    slug: 'programacion-estructurada',
    nombre: 'Programación Estructurada',
    //curso: 'Desarrollo de Aplicaciones I',
    descripcion: 'Desarrollo de programas nediantes estructuras de control y funciones.',
    icono: 'estructura',
    acento: 'verde',
  },
  {
    slug: 'estructura-de-datos',
    nombre: 'Estructura de Datos',
    //curso: 'Desarrollo de Aplicaciones II',
    descripcion: 'Organización, almacenamiento y gestión de datos mediante estructuras.',
    icono: 'cubos',
    acento: 'morado',
  },
  {
    slug: 'base-de-datos',
    nombre: 'Base de Datos',
    //curso: 'Diseño de Base de Datos con SQL Server',
    descripcion: 'Modelado, diseño y creación de bases de datos relacionales.',
    icono: 'base-datos',
    acento: 'naranja',
  },
  {
    slug: 'administracion-de-bases-de-datos',
    nombre: 'Administración de Bases de Datos',
    //curso: 'Administración de Base de Datos con SQL Server',
    descripcion: 'Gestión, seguridad, mantenimiento y optimización de bases de datos.',
    icono: 'engranaje',
    acento: 'turquesa',
  },
  {
    slug: 'programacion-orientada-a-objetos',
    nombre: 'Programación Orientada a Objetos',
    //curso: 'Desarrollo de Aplicaciones III',
    descripcion: 'Diseño y desarrollo de aplicaciones mediante programación orientada a objetos.',
    icono: 'estructura',
    acento: 'verde',
  },
  {
    slug: 'backend-api-restful',
    nombre: 'Backend - API RESTful',
    //curso: 'Desarrollo de Aplicaciones IV',
    descripcion: 'Desarrollo de servicios backend y APIs REST.',
    icono: 'nube-subida',
    acento: 'morado',
  },
  {
    slug: 'aplicaciones-moviles',
    nombre: 'Desarrollo de Aplicaciones Móviles',
    //curso: 'Desarrollo de Aplicaciones V',
    descripcion: 'Diseño y desarrollo de aplicaciones para dispositivos móviles.',
    icono: 'movil',
    acento: 'rosa',
  },
  {
    slug: 'full-stack',
    nombre: 'Full Stack',
    //curso: 'Optativa Profesional I',
    descripcion: 'Desarrollo integral de aplicaciones web frontend y backend.',
    icono: 'capas',
    acento: 'verde',
  },
];

/** Devuelve la materia que corresponde al slug de la dirección, o undefined si no existe. */
export function buscarMateriaPorSlug(slug: string): Materia | undefined {
  return MATERIAS.find((materia) => materia.slug === slug);
}
