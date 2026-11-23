import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { findSubject } from '../../core/data/subjects.data';
import { ComingSoon } from '../../shared/ui/coming-soon';
import { PageHeader } from '../../shared/ui/page-header';

/**
 * Página de una materia. Es la misma para las 9 asignaturas: el :slug de la URL
 * se recibe como input (withComponentInputBinding) y se busca en subjects.data.ts.
 */
@Component({
  selector: 'app-subject-detail',
  imports: [PageHeader, ComingSoon, RouterLink],
  template: `
    @if (subject(); as item) {
      <app-page-header [heading]="item.name" [subtitle]="item.course" />
      <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <a routerLink="/materias" class="text-sm font-semibold text-brand-strong hover:underline">
          ← Todas las materias
        </a>
        <div class="mt-6">
          <app-coming-soon />
        </div>
      </section>
    } @else {
      <app-page-header heading="Materia no encontrada" />
      <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <a routerLink="/materias" class="font-semibold text-brand-strong hover:underline">
          Ver todas las materias
        </a>
      </section>
    }
  `,
})
export class SubjectDetail {
  readonly slug = input.required<string>();
  protected readonly subject = computed(() => findSubject(this.slug()));
}
