import { Materia } from './materia.modelo';
import { MATERIAS } from './materias.datos';

/** Pasa a minúsculas y quita las tildes, para que "programacion" encuentre "Programación". */
function normalizar(texto: string): string {
  return texto
    .normalize('NFD') // separa cada letra de su tilde
    .replace(/\p{M}/gu, '') // elimina las tildes sueltas
    .toLowerCase()
    .trim();
}

/**
 * Filtra las materias por nombre o por nombre del curso.
 * Si no se escribe nada, no devuelve resultados.
 */
export function buscarMaterias(consulta: string): Materia[] {
  const termino = normalizar(consulta);
  if (!termino) {
    return [];
  }
  return MATERIAS.filter((materia) =>
    normalizar(`${materia.nombre} ${materia.curso ?? ''}`).includes(termino),
  );
}
