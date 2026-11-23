import { Component } from '@angular/core';
import { ComingSoon } from '../../shared/ui/coming-soon';
import { PageHeader } from '../../shared/ui/page-header';

/** Marcador de la etapa 1. La página principal completa se construye en la etapa 2. */
@Component({
  selector: 'app-home',
  imports: [PageHeader, ComingSoon],
  template: `
    <app-page-header
      heading="Bienvenido a AulaDev"
      subtitle="Tu espacio de aprendizaje en programación"
    />
    <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <app-coming-soon message="La página principal se completará en la siguiente etapa." />
    </section>
  `,
})
export class Home {}
