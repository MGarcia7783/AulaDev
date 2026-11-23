import { Component, input } from '@angular/core';

/** Mensaje discreto para secciones cuyo contenido todavía no está disponible. */
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
  readonly message = input('Contenido disponible próximamente.');
}
