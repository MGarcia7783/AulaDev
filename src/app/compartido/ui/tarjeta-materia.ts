import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AcentoMateria, Materia } from '../../nucleo/datos/materia.modelo';
import { Icono } from './icono';

/**
 * Clases de color de cada acento. Se escriben completas (sin armarlas por partes)
 * para que Tailwind las detecte y genere su CSS.
 */
const ACENTOS: Record<AcentoMateria, { recuadro: string; borde: string; tinte: string; flecha: string }> = {
  azul: {
    recuadro: 'bg-acento-azul',
    borde: 'border-l-acento-azul',
    tinte: 'from-acento-azul/15',
    flecha: 'text-acento-azul',
  },
  verde: {
    recuadro: 'bg-acento-verde',
    borde: 'border-l-acento-verde',
    tinte: 'from-acento-verde/15',
    flecha: 'text-acento-verde',
  },
  morado: {
    recuadro: 'bg-acento-morado',
    borde: 'border-l-acento-morado',
    tinte: 'from-acento-morado/15',
    flecha: 'text-acento-morado',
  },
  naranja: {
    recuadro: 'bg-acento-naranja',
    borde: 'border-l-acento-naranja',
    tinte: 'from-acento-naranja/15',
    flecha: 'text-acento-naranja',
  },
  turquesa: {
    recuadro: 'bg-acento-turquesa',
    borde: 'border-l-acento-turquesa',
    tinte: 'from-acento-turquesa/15',
    flecha: 'text-acento-turquesa',
  },
  rosa: {
    recuadro: 'bg-acento-rosa',
    borde: 'border-l-acento-rosa',
    tinte: 'from-acento-rosa/15',
    flecha: 'text-acento-rosa',
  },
};

/**
 * Tarjeta de una materia: icono sobre recuadro de color, nombre, curso (si tiene),
 * descripción y flecha de navegación. Toda la tarjeta es un enlace a /materias/:slug.
 * El color y el icono vienen de la propia materia (materias.datos.ts).
 */
@Component({
  selector: 'app-tarjeta-materia',
  imports: [RouterLink, Icono],
  host: { class: 'block h-full' },
  template: `
    <a
      [routerLink]="['/materias', materia().slug]"
      class="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-l-4 border-linea bg-white p-4 shadow-tarjeta transition-shadow hover:shadow-tarjeta-hover sm:p-5"
      [class]="estilo().borde"
    >
      <!-- Tinte suave del color de la materia, en diagonal a la derecha (decorativo) -->
      <span
        class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l to-transparent [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]"
        [class]="estilo().tinte"
        aria-hidden="true"
      ></span>

      <!-- Recuadro de color con el icono de la materia -->
      <span
        class="relative flex size-16 shrink-0 items-center justify-center rounded-xl text-white shadow-sm sm:size-[4.5rem]"
        [class]="estilo().recuadro"
      >
        <app-icono [nombre]="materia().icono" class="size-8 sm:size-9" [grosorTrazo]="2.2" />
      </span>

      <!-- Textos de la tarjeta -->
      <span class="relative min-w-0 flex-1">
        <span class="block text-base leading-snug font-bold text-tinta sm:text-lg">{{ materia().nombre }}</span>
        @if (materia().curso) {
          <span class="block text-sm leading-snug font-semibold text-tinta">{{ materia().curso }}</span>
        }
        @if (materia().descripcion) {
          <span class="mt-1 block text-sm leading-snug text-tenue">{{ materia().descripcion }}</span>
        }
      </span>

      <!-- Indicador de navegación: la flecha se desplaza un poco al pasar el cursor -->
      <span
        class="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-linea"
        [class]="estilo().flecha"
      >
        <app-icono
          nombre="flecha-derecha"
          class="size-5 transition-transform group-hover:translate-x-0.5"
          [grosorTrazo]="2.5"
        />
      </span>
    </a>
  `,
})
export class TarjetaMateria {
  /** Materia que representa la tarjeta. */
  readonly materia = input.required<Materia>();

  /** Clases de color según el acento de la materia. */
  protected readonly estilo = computed(() => ACENTOS[this.materia().acento]);
}
