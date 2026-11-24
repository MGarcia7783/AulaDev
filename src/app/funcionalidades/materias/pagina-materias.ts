import { Component } from '@angular/core';
import { CuadriculaMaterias } from '../../compartido/ui/cuadricula-materias';
import { EncabezadoPagina } from '../../compartido/ui/encabezado-pagina';

/**
 * Listado de todas las materias (ruta /materias).
 * Reutiliza la misma cuadrícula de tarjetas que la página principal.
 */
@Component({
  selector: 'app-pagina-materias',
  imports: [EncabezadoPagina, CuadriculaMaterias],
  template: `
    <app-encabezado-pagina
      titulo="Materias"
      subtitulo="Elige una asignatura para ver su contenido."
    />
    <section class="mx-auto max-w-contenido px-4 py-10 sm:px-6">
      <app-cuadricula-materias />
    </section>
  `,
})
export class PaginaMaterias {}
