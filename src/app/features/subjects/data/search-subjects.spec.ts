import { searchSubjects } from './search-subjects';
import { SUBJECTS } from './subjects.data';

describe('Búsqueda de materias', () => {
  it('mantiene las materias en el orden académico acordado', () => {
    expect(SUBJECTS.map((subject) => subject.name)).toEqual([
      'Introducción a la Programación',
      'Programación Estructurada',
      'Estructura de Datos',
      'Base de Datos',
      'Administración de Bases de Datos',
      'Programación Orientada a Objetos',
      'Backend - API RESTful',
      'Desarrollo de Aplicaciones Móviles',
      'Full Stack',
    ]);
  });

  it('encuentra materias sin distinguir mayúsculas ni tildes', () => {
    expect(searchSubjects('  PROGRAMACION ESTRUCTURADA  ').map((subject) => subject.slug)).toEqual([
      'structured-programming',
    ]);
  });

  it('no devuelve resultados para una consulta vacía', () => {
    expect(searchSubjects('  ')).toEqual([]);
  });
});
