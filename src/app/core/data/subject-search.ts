import { Subject } from './subject.model';
import { SUBJECTS } from './subjects.data';

/** Minúsculas y sin tildes, para que "programacion" encuentre "Programación". */
function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim();
}

/** Filtra las materias por nombre o por nombre del curso. Sin texto no devuelve nada. */
export function searchSubjects(query: string): Subject[] {
  const term = normalize(query);
  if (!term) {
    return [];
  }
  return SUBJECTS.filter((subject) =>
    normalize(`${subject.name} ${subject.course ?? ''}`).includes(term),
  );
}
