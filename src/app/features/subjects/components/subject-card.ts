import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubjectAccent, Subject } from '../data/subject.model';
import { Icon } from '../../../shared/ui/icon';

/**
 * Clases de color de cada acento. Se escriben completas (sin armarlas por partes)
 * para que Tailwind las detecte y genere su CSS.
 */
const ACCENTS: Record<SubjectAccent, { box: string; border: string; tint: string; arrow: string }> = {
  blue: {
    box: 'bg-accent-blue',
    border: 'border-l-accent-blue',
    tint: 'from-accent-blue/15',
    arrow: 'text-accent-blue',
  },
  green: {
    box: 'bg-accent-green',
    border: 'border-l-accent-green',
    tint: 'from-accent-green/15',
    arrow: 'text-accent-green',
  },
  purple: {
    box: 'bg-accent-purple',
    border: 'border-l-accent-purple',
    tint: 'from-accent-purple/15',
    arrow: 'text-accent-purple',
  },
  orange: {
    box: 'bg-accent-orange',
    border: 'border-l-accent-orange',
    tint: 'from-accent-orange/15',
    arrow: 'text-accent-orange',
  },
  turquoise: {
    box: 'bg-accent-turquoise',
    border: 'border-l-accent-turquoise',
    tint: 'from-accent-turquoise/15',
    arrow: 'text-accent-turquoise',
  },
  pink: {
    box: 'bg-accent-pink',
    border: 'border-l-accent-pink',
    tint: 'from-accent-pink/15',
    arrow: 'text-accent-pink',
  },
};

/**
 * Tarjeta de una materia: icono sobre recuadro de color, nombre, curso (si tiene),
 * descripción y flecha de navegación. Toda la tarjeta es un enlace a /subjects/:slug.
 * El color y el icono vienen de la propia materia (subjects.data.ts).
 */
@Component({
  selector: 'app-subject-card',
  imports: [RouterLink, Icon],
  host: { class: 'block h-full' },
  template: `
    <a
      [routerLink]="['/subjects', subject().slug]"
      class="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-l-4 border-line bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover sm:p-5"
      [class]="style().border"
    >
      <!-- Tinte suave del color de la materia, en diagonal a la derecha (decorativo) -->
      <span
        class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l to-transparent [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]"
        [class]="style().tint"
        aria-hidden="true"
      ></span>

      <!-- Recuadro de color con el icono de la materia -->
      <span
        class="relative flex size-16 shrink-0 items-center justify-center rounded-xl text-white shadow-sm sm:size-[4.5rem]"
        [class]="style().box"
      >
        <app-icon [name]="subject().icon" class="size-8 sm:size-9" [strokeWidth]="2.2" />
      </span>

      <!-- Textos de la tarjeta -->
      <span class="relative min-w-0 flex-1">
        <span class="block text-base leading-snug font-bold text-ink sm:text-lg">{{ subject().name }}</span>
        @if (subject().course) {
          <span class="block text-sm leading-snug font-semibold text-ink">{{ subject().course }}</span>
        }
        @if (subject().description) {
          <span class="mt-1 block text-sm leading-snug text-muted">{{ subject().description }}</span>
        }
      </span>

      <!-- Indicador de navegación: la flecha se desplaza un poco al pasar el cursor -->
      <span
        class="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-line"
        [class]="style().arrow"
      >
        <app-icon
          name="arrow-right"
          class="size-5 transition-transform group-hover:translate-x-0.5"
          [strokeWidth]="2.5"
        />
      </span>
    </a>
  `,
})
export class SubjectCard {
  /** Materia que representa la tarjeta. */
  readonly subject = input.required<Subject>();

  /** Clases de color según el acento de la materia. */
  protected readonly style = computed(() => ACCENTS[this.subject().accent]);
}
