import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../shared/ui/page-header';

/** Página 404: se muestra cuando la dirección no corresponde a ninguna ruta. */
@Component({
  selector: 'app-not-found',
  imports: [PageHeader, RouterLink],
  template: `
    <app-page-header
      title="Página no encontrada"
      subtitle="La dirección no existe o fue movida."
    />
    <section class="mx-auto max-w-content px-4 py-10 sm:px-6">
      <a routerLink="/" class="font-semibold text-brand-strong hover:underline">Volver al inicio</a>
    </section>
  `,
})
export class NotFound {}
