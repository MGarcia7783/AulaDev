/**
 * Iconos de las tarjetas de materias.
 * Los nombres coinciden con los de compartido/ui/icono.ts.
 */
export type IconoMateria =
  | 'codigo'
  | 'estructura'
  | 'cubos'
  | 'base-datos'
  | 'engranaje'
  | 'nube-subida'
  | 'movil'
  | 'capas';

/** Color de acento de la tarjeta (coincide con --color-acento-* del tema en styles.css). */
export type AcentoMateria = 'azul' | 'verde' | 'morado' | 'naranja' | 'turquesa' | 'rosa';

/** Una asignatura del portal. */
export interface Materia {
  /** Identificador único que se usa en la dirección: /materias/:slug */
  slug: string;
  /** Nombre de la asignatura tal como se muestra. */
  nombre: string;
  /** Nombre del curso o nivel, cuando corresponda. */
  curso?: string;
  /** Descripción breve del propósito de la materia. */
  descripcion?: string;
  /** Icono de la tarjeta. */
  icono: IconoMateria;
  /** Color de acento de la tarjeta. */
  acento: AcentoMateria;
}
