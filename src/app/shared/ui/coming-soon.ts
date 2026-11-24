import { Component, input } from '@angular/core';

/**
 * Mensaje discreto para las secciones cuyo contenido todavía no está disponible.
 * Uso:  <app-coming-soon />   o   <app-coming-soon message="Texto personalizado" />
 */
@Component({
  selector: 'app-coming-soon',
  template: `
    <p
      class="rounded-2xl border border-dashed border-line bg-white px-6 py-10 text-center text-muted"
    >
      {{ message() }}
    </p>
  `,
})
export class ComingSoon {
  /** Texto que se muestra; por defecto, el aviso general de contenido próximo. */
  readonly message = input('Contenido disponible próximamente.');
}
