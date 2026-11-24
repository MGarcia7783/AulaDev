import { Component, input } from '@angular/core';

/**
 * Franja de título para las páginas internas (materias, recursos, acerca de...).
 * Uso:  <app-encabezado-pagina titulo="Recursos" subtitulo="Materiales de apoyo" />
 */
@Component({
  selector: 'app-encabezado-pagina',
  template: `
    <div class="bg-marino-suave text-white">
      <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ titulo() }}</h1>
        <!-- El subtítulo es opcional -->
        @if (subtitulo()) {
          <p class="mt-2 max-w-2xl text-lg text-white/80">{{ subtitulo() }}</p>
        }
      </div>
    </div>
  `,
})
export class EncabezadoPagina {
  /** Título principal de la página (obligatorio). */
  readonly titulo = input.required<string>();
  /** Texto breve debajo del título (opcional). */
  readonly subtitulo = input<string>();
}
