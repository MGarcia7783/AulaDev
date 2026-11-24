import { Component, input } from '@angular/core';

/**
 * Franja de título para las páginas internas (materias, recursos, acerca de...).
 * Uso:  <app-page-header title="Recursos" subtitle="Materiales de apoyo" />
 */
@Component({
  selector: 'app-page-header',
  template: `
    <div class="bg-navy-soft text-white">
      <div class="mx-auto max-w-content px-4 py-10 sm:px-6">
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ title() }}</h1>
        <!-- El subtítulo es opcional -->
        @if (subtitle()) {
          <p class="mt-2 max-w-2xl text-lg text-white/80">{{ subtitle() }}</p>
        }
      </div>
    </div>
  `,
})
export class PageHeader {
  /** Título principal de la página (obligatorio). */
  readonly title = input.required<string>();
  /** Texto breve debajo del título (opcional). */
  readonly subtitle = input<string>();
}
