import { Component } from '@angular/core';
import { PageHeader } from '../../shared/ui/page-header';
import { ComingSoon } from '../../shared/ui/coming-soon';

/** Página "Acerca de" (ruta /about). Su contenido se incorporará más adelante. */
@Component({
  selector: 'app-about',
  imports: [PageHeader, ComingSoon],
  template: `
    <app-page-header title="Acerca de" subtitle="Aprende. Practica. Desarrolla." />
    <section class="mx-auto max-w-content px-4 py-10 sm:px-6">
      <app-coming-soon />
    </section>
  `,
})
export class About {}
