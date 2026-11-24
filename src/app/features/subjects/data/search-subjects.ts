import { Subject } from './subject.model';
import { SUBJECTS } from './subjects.data';

/** Pasa a minúsculas y quita las tildes, para que "programacion" encuentre "Programación". */
function normalizeText(text: string): string {
  return text
    .normalize('NFD') // separa cada letra de su tilde
    .replace(/\p{M}/gu, '') // elimina las tildes sueltas
    .toLowerCase()
    .trim();
}

/**
 * Filtra las materias por nombre o por nombre del curso.
 * Si no se escribe nada, no devuelve resultados.
 */
export function searchSubjects(query: string): Subject[] {
  const term = normalizeText(query);
  if (!term) {
    return [];
  }
  return SUBJECTS.filter((subject) =>
    normalizeText(`${subject.name} ${subject.course ?? ''}`).includes(term),
  );
}
