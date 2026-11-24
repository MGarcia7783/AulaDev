import { Component } from '@angular/core';
import { SUBJECTS } from '../data/subjects.data';
import { SubjectCard } from './subject-card';

/**
 * Cuadrícula con las tarjetas de todas las materias, en el orden de subjects.data.ts.
 * Se reutiliza en la página principal y en la página /subjects.
 * Columnas: 1 en móvil, 2 en tableta y 3 en pantallas grandes.
 */
@Component({
  selector: 'app-subject-grid',
  imports: [SubjectCard],
  template: `
    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      @for (subject of subjects; track subject.slug) {
        <li>
          <app-subject-card [subject]="subject" />
        </li>
      }
    </ul>
  `,
})
export class SubjectGrid {
  /** Materias que se muestran. */
  protected readonly subjects = SUBJECTS;
}
