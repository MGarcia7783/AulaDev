import { Component } from '@angular/core';
import { MATERIAS } from '../../nucleo/datos/materias.datos';
import { TarjetaMateria } from './tarjeta-materia';

/**
 * Cuadrícula con las tarjetas de todas las materias, en el orden de materias.datos.ts.
 * Se reutiliza en la página principal y en la página /materias.
 * Columnas: 1 en móvil, 2 en tableta y 3 en pantallas grandes.
 */
@Component({
  selector: 'app-cuadricula-materias',
  imports: [TarjetaMateria],
  template: `
    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      @for (materia of materias; track materia.slug) {
        <li>
          <app-tarjeta-materia [materia]="materia" />
        </li>
      }
    </ul>
  `,
})
export class CuadriculaMaterias {
  /** Materias que se muestran. */
  protected readonly materias = MATERIAS;
}
