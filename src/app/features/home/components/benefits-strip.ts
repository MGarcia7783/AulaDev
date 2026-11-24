import { Component } from '@angular/core';
import { Icon, IconName } from '../../../shared/ui/icon';

/** Un beneficio de la franja: icono, título y descripción breve. */
interface Benefit {
  icon: IconName;
  title: string;
  detail: string;
}

/**
 * Franja inferior de la página principal: tres beneficios del portal
 * y una frase destacada con tipografía manuscrita.
 */
@Component({
  selector: 'app-benefits-strip',
  imports: [Icon],
  template: `
    <div
      class="grid gap-6 rounded-2xl border border-line bg-surface-strong p-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:gap-0 lg:divide-x lg:divide-brand/30 lg:p-5"
    >
      <!-- Los tres beneficios -->
      @for (benefit of benefits; track benefit.title) {
        <div class="flex items-center gap-4 lg:px-6">
          <app-icon [name]="benefit.icon" class="size-12 text-navy" [strokeWidth]="1.7" />
          <div>
            <p class="font-bold text-ink">{{ benefit.title }}</p>
            <p class="text-sm text-muted">{{ benefit.detail }}</p>
          </div>
        </div>
      }

      <!-- Frase destacada: ligeramente inclinada, con un subrayado ondulado -->
      <div class="flex justify-center sm:col-span-2 lg:col-span-1 lg:px-6">
        <p class="max-w-xs -rotate-3 text-center font-handwriting text-2xl leading-tight font-bold text-brand-strong">
          ¡Tu futuro en tecnología comienza aquí!
          <svg class="mx-auto mt-1 h-2.5 w-40" viewBox="0 0 160 10" fill="none" aria-hidden="true">
            <path d="M2 7C30 2 60 3 90 5s50 0 68-3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
          </svg>
        </p>
      </div>
    </div>
  `,
})
export class BenefitsStrip {
  /** Beneficios que se muestran, en el orden del diseño. */
  protected readonly benefits: readonly Benefit[] = [
    {
      icon: 'graduation-cap',
      title: 'Aprendizaje práctico',
      detail: 'Ejemplos y ejercicios reales',
    },
    {
      icon: 'laptop',
      title: 'Tecnología actual',
      detail: 'Con las mejores herramientas',
    },
    {
      icon: 'trending-up',
      title: 'Mejora tus habilidades',
      detail: 'Avanza en tu formación',
    },
  ];
}
