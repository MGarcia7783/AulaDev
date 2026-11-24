import { Component } from '@angular/core';
import { SubjectGrid } from '../components/subject-grid';
import { PageHeader } from '../../../shared/ui/page-header';

/**
 * Listado de todas las materias (ruta /subjects).
 * Reutiliza la misma cuadrícula de tarjetas que la página principal.
 */
@Component({
  selector: 'app-subjects-page',
  imports: [PageHeader, SubjectGrid],
  template: `
    <app-page-header
      title="Materias"
      subtitle="Elige una asignatura para ver su contenido."
    />
    <section class="mx-auto max-w-content px-4 py-10 sm:px-6">
      <app-subject-grid />
    </section>
  `,
})
export class SubjectsPage {}
