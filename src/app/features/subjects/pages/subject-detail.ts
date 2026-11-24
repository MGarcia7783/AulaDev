import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { findSubjectBySlug } from '../data/subjects.data';
import { PageHeader } from '../../../shared/ui/page-header';
import { ComingSoon } from '../../../shared/ui/coming-soon';

/**
 * Página de una materia (ruta /subjects/:slug).
 * Es la misma para las 9 asignaturas: el :slug de la dirección llega como input
 * (gracias a withComponentInputBinding) y se busca en subjects.data.ts.
 */
@Component({
  selector: 'app-subject-detail',
  imports: [PageHeader, ComingSoon, RouterLink],
  template: `
    @if (subject(); as subjectData) {
      <!-- Materia encontrada -->
      <app-page-header [title]="subjectData.name" [subtitle]="subjectData.course" />
      <section class="mx-auto max-w-content px-4 py-10 sm:px-6">
        <a routerLink="/subjects" class="text-sm font-semibold text-brand-strong hover:underline">
          ← Todas las materias
        </a>
        <div class="mt-6">
          <!-- Aquí se incorporará el contenido (unidades, teoría, ejercicios, proyectos...) -->
          <app-coming-soon />
        </div>
      </section>
    } @else {
      <!-- El slug de la dirección no corresponde a ninguna materia -->
      <app-page-header title="Materia no encontrada" />
      <section class="mx-auto max-w-content px-4 py-10 sm:px-6">
        <a routerLink="/subjects" class="font-semibold text-brand-strong hover:underline">
          Ver todas las materias
        </a>
      </section>
    }
  `,
})
export class SubjectDetail {
  /** Parte final de la dirección (por ejemplo "databases"). */
  readonly slug = input.required<string>();
  /** Materia correspondiente al slug, o undefined si no existe. */
  protected readonly subject = computed(() => findSubjectBySlug(this.slug()));
}
