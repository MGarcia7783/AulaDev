import { Component, computed, input } from '@angular/core';

/** Ancho de pantalla desde el cual se muestra el eslogan junto al logo. */
type FromWidth = 'md' | 'xl';

/**
 * Logotipo de AulaDev: libro abierto con símbolo de código + nombre (+ eslogan opcional).
 * Uso:  <app-logo />                      solo logo y nombre
 *       <app-logo [sloganFrom]="'xl'" /> con eslogan en pantallas anchas
 */
@Component({
  selector: 'app-logo',
  host: { class: 'inline-flex items-center gap-3' },
  template: `
    <svg class="h-10 w-auto shrink-0" viewBox="0 0 64 54" fill="none" aria-hidden="true">
      <!-- Símbolo de código </> -->
      <g stroke="#1e8bff" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 6 13 14l8 8" />
        <path d="m43 6 8 8-8 8" />
        <path d="M35 4 29 24" />
      </g>
      <!-- Libro abierto: página izquierda, página derecha y borde inferior -->
      <path d="M32 49C25 43 13 41 3 43V33c10-2 22 0 29 5Z" fill="#ffffff" />
      <path d="M32 49c7-6 19-8 29-6V33c-10-2-22 0-29 5Z" fill="#d6e6ff" />
      <path
        d="M3 45.5c10-2 22 0 29 5.5 7-5.5 19-7.5 29-5.5"
        stroke="#1e8bff"
        stroke-width="2.5"
        stroke-linecap="round"
      />
    </svg>

    <!-- Nombre: "Aula" en blanco y "Dev" en azul tecnológico -->
    <span class="text-3xl font-bold tracking-tight text-white">Aula<span class="text-brand">Dev</span></span>

    @if (sloganFrom()) {
      <!-- Línea vertical y eslogan: ocultos por defecto, visibles desde el ancho indicado -->
      <span class="hidden h-10 w-px bg-white/40" [class]="dividerClass()" aria-hidden="true"></span>
      <span class="hidden text-base text-white/90 italic" [class]="sloganClass()">
        Aprende. Practica. Desarrolla.
      </span>
    }
  `,
})
export class Logo {
  /** Desde qué ancho de pantalla se muestra el eslogan. Sin valor, no se muestra. */
  readonly sloganFrom = input<FromWidth | null>(null);

  // Las clases se escriben completas ('xl:block', 'md:block') para que Tailwind las detecte.
  protected readonly dividerClass = computed(() =>
    this.sloganFrom() === 'xl' ? 'xl:block' : 'md:block',
  );
  protected readonly sloganClass = computed(() =>
    this.sloganFrom() === 'xl' ? 'xl:block' : 'md:block',
  );
}
