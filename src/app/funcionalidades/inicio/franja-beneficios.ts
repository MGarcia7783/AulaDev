import { Component } from '@angular/core';
import { Icono, NombreIcono } from '../../compartido/ui/icono';

/** Un beneficio de la franja: icono, título y descripción breve. */
interface Beneficio {
  icono: NombreIcono;
  titulo: string;
  detalle: string;
}

/**
 * Franja inferior de la página principal: tres beneficios del portal
 * y una frase destacada con tipografía manuscrita.
 */
@Component({
  selector: 'app-franja-beneficios',
  imports: [Icono],
  template: `
    <div
      class="grid gap-6 rounded-2xl border border-linea bg-superficie-fuerte p-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:gap-0 lg:divide-x lg:divide-marca/30 lg:p-5"
    >
      <!-- Los tres beneficios -->
      @for (beneficio of beneficios; track beneficio.titulo) {
        <div class="flex items-center gap-4 lg:px-6">
          <app-icono [nombre]="beneficio.icono" class="size-12 text-marino" [grosorTrazo]="1.7" />
          <div>
            <p class="font-bold text-tinta">{{ beneficio.titulo }}</p>
            <p class="text-sm text-tenue">{{ beneficio.detalle }}</p>
          </div>
        </div>
      }

      <!-- Frase destacada: ligeramente inclinada, con un subrayado ondulado -->
      <div class="flex justify-center sm:col-span-2 lg:col-span-1 lg:px-6">
        <p class="max-w-xs -rotate-3 text-center font-manuscrita text-2xl leading-tight font-bold text-marca-fuerte">
          ¡Tu futuro en tecnología comienza aquí!
          <svg class="mx-auto mt-1 h-2.5 w-40" viewBox="0 0 160 10" fill="none" aria-hidden="true">
            <path d="M2 7C30 2 60 3 90 5s50 0 68-3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
          </svg>
        </p>
      </div>
    </div>
  `,
})
export class FranjaBeneficios {
  /** Beneficios que se muestran, en el orden del diseño. */
  protected readonly beneficios: readonly Beneficio[] = [
    {
      icono: 'birrete',
      titulo: 'Aprendizaje práctico',
      detalle: 'Ejemplos y ejercicios reales',
    },
    {
      icono: 'laptop',
      titulo: 'Tecnología actual',
      detalle: 'Con las mejores herramientas',
    },
    {
      icono: 'grafico-ascendente',
      titulo: 'Mejora tus habilidades',
      detalle: 'Avanza en tu formación',
    },
  ];
}
