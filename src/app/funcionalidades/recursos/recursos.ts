import { Component } from '@angular/core';
import { EncabezadoPagina } from '../../compartido/ui/encabezado-pagina';
import { Proximamente } from '../../compartido/ui/proximamente';

/**
 * Recursos generales (ruta /recursos), independientes de las materias.
 * Más adelante contendrá herramientas, guías de instalación, configuraciones
 * y material técnico común a varias asignaturas.
 */
@Component({
  selector: 'app-recursos',
  imports: [EncabezadoPagina, Proximamente],
  template: `
    <app-encabezado-pagina
      titulo="Recursos"
      subtitulo="Materiales de utilidad general para varias materias."
    />
    <section class="mx-auto max-w-contenido px-4 py-10 sm:px-6">
      <app-proximamente />
    </section>
  `,
})
export class Recursos {}
