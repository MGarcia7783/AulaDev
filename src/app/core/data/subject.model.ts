/** Iconos disponibles para las tarjetas de materias (se dibujan en la etapa 2). */
export type SubjectIcon =
  | 'code'
  | 'structure'
  | 'cubes'
  | 'database'
  | 'gear'
  | 'cloud'
  | 'mobile'
  | 'layers';

/** Color de acento de la tarjeta (coincide con --color-accent-* del tema). */
export type SubjectAccent = 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink';

export interface Subject {
  /** Identificador único usado en la URL: /materias/:slug */
  slug: string;
  name: string;
  /** Nombre del curso o nivel, cuando corresponda. */
  course?: string;
  description: string;
  icon: SubjectIcon;
  accent: SubjectAccent;
}
