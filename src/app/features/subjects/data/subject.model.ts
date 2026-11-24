/**
 * Iconos de las tarjetas de materias.
 * Los nombres coinciden con los de shared/ui/icon.ts.
 */
export type SubjectIcon =
  | 'code'
  | 'structure'
  | 'cubes'
  | 'database'
  | 'gear'
  | 'cloud-upload'
  | 'mobile'
  | 'layers';

/** Color de acento de la tarjeta (coincide con --color-accent-* del tema en styles.css). */
export type SubjectAccent = 'blue' | 'green' | 'purple' | 'orange' | 'turquoise' | 'pink';

/** Una asignatura del portal. */
export interface Subject {
  /** Identificador de la dirección actual. */
  slug: string;
  /** Identificador utilizado por la dirección anterior. */
  legacySlug: string;
  /** Nombre de la asignatura tal como se muestra. */
  name: string;
  /** Nombre del curso o nivel, cuando corresponda. */
  course?: string;
  /** Descripción breve del propósito de la materia. */
  description?: string;
  /** Icono de la tarjeta. */
  icon: SubjectIcon;
  /** Color de acento de la tarjeta. */
  accent: SubjectAccent;
  /** Unidades en el orden de presentación. */
  units: readonly SubjectUnit[];
}

export interface SubjectUnit {
  slug: string;
  title: string;
  topics: readonly SubjectTopic[];
}

export interface SubjectTopic {
  slug: string;
  title: string;
  /** Ruta relativa a public, por ejemplo content/subjects/.../introduction.md. */
  markdownPath: string;
}
