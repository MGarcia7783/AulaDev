import { Component } from '@angular/core';
import { PageHeader } from '../../shared/ui/page-header';
import { ComingSoon } from '../../shared/ui/coming-soon';

/**
 * Recursos generales (ruta /resources), independientes de las materias.
 * Más adelante contendrá herramientas, guías de instalación, configuraciones
 * y material técnico común a varias asignaturas.
 */
@Component({
  selector: 'app-resources',
  imports: [PageHeader, ComingSoon],
  template: `
    <app-page-header
      title="Recursos"
      subtitle="Materiales de utilidad general para varias materias."
    />
    <section class="mx-auto max-w-content px-4 py-10 sm:px-6">
      <app-coming-soon />
    </section>
  `,
})
export class Resources {}
