import { Component, input } from '@angular/core';

/**
 * Mensaje discreto para las secciones cuyo contenido todavía no está disponible.
 * Uso:  <app-proximamente />   o   <app-proximamente mensaje="Texto personalizado" />
 */
@Component({
  selector: 'app-proximamente',
  template: `
    <p
      class="rounded-2xl border border-dashed border-linea bg-white px-6 py-10 text-center text-tenue"
    >
      {{ mensaje() }}
    </p>
  `,
})
export class Proximamente {
  /** Texto que se muestra; por defecto, el aviso general de contenido próximo. */
  readonly mensaje = input('Contenido disponible próximamente.');
}
