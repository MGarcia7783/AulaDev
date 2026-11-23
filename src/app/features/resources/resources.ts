import { Component } from '@angular/core';
import { ComingSoon } from '../../shared/ui/coming-soon';
import { PageHeader } from '../../shared/ui/page-header';

@Component({
  selector: 'app-resources',
  imports: [PageHeader, ComingSoon],
  template: `
    <app-page-header
      heading="Recursos"
      subtitle="Materiales de utilidad general para varias materias."
    />
    <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <app-coming-soon />
    </section>
  `,
})
export class Resources {}
