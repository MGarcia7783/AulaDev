import { Component, input } from '@angular/core';

/** Franja de título para las páginas internas (materias, recursos, acerca de...). */
@Component({
  selector: 'app-page-header',
  template: `
    <div class="bg-navy-soft text-white">
      <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ heading() }}</h1>
        @if (subtitle()) {
          <p class="mt-2 max-w-2xl text-lg text-white/80">{{ subtitle() }}</p>
        }
      </div>
    </div>
  `,
})
export class PageHeader {
  readonly heading = input.required<string>();
  readonly subtitle = input<string>();
}
