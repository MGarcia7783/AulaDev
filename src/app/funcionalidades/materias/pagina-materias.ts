import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAS } from '../../nucleo/datos/materias.datos';
import { EncabezadoPagina } from '../../compartido/ui/encabezado-pagina';

/** Listado de materias (ruta /materias). Cada tarjeta lleva a la página de su materia. */
@Component({
  selector: 'app-pagina-materias',
  imports: [EncabezadoPagina, RouterLink],
  template: `
    <app-encabezado-pagina
      titulo="Materias"
      subtitulo="Elige una asignatura para ver su contenido."
    />
    <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <!-- Cuadrícula: 1 columna en móvil, 2 en tableta y 3 en pantallas grandes -->
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        @for (materia of materias; track materia.slug) {
          <li>
            <a
              [routerLink]="['/materias', materia.slug]"
              class="block h-full rounded-2xl border border-linea bg-white p-5 shadow-tarjeta hover:shadow-tarjeta-hover"
            >
              <span class="block font-semibold">{{ materia.nombre }}</span>
              @if (materia.curso) {
                <span class="block text-sm text-tenue">{{ materia.curso }}</span>
              }
              @if (materia.descripcion) {
                <span class="mt-2 block text-sm text-tenue">{{ materia.descripcion }}</span>
              }
            </a>
          </li>
        }
      </ul>
    </section>
  `,
})
export class PaginaMaterias {
  /** Materias en el orden definido en materias.datos.ts. */
  protected readonly materias = MATERIAS;
}
