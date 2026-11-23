import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SUBJECTS } from '../../core/data/subjects.data';
import { PageHeader } from '../../shared/ui/page-header';

/** Listado de materias. En la etapa 2 se reemplaza por las tarjetas del diseño. */
@Component({
  selector: 'app-subjects-page',
  imports: [PageHeader, RouterLink],
  template: `
    <app-page-header heading="Materias" subtitle="Elige una asignatura para ver su contenido." />
    <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        @for (subject of subjects; track subject.slug) {
          <li>
            <a
              [routerLink]="['/materias', subject.slug]"
              class="block h-full rounded-2xl border border-line bg-white p-5 shadow-card hover:shadow-card-hover"
            >
              <span class="block font-semibold">{{ subject.name }}</span>
              @if (subject.course) {
                <span class="block text-sm text-muted">{{ subject.course }}</span>
              }
              <span class="mt-2 block text-sm text-muted">{{ subject.description }}</span>
            </a>
          </li>
        }
      </ul>
    </section>
  `,
})
export class SubjectsPage {
  protected readonly subjects = SUBJECTS;
}
