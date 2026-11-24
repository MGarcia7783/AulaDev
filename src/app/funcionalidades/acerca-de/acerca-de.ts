import { Component } from '@angular/core';
import { EncabezadoPagina } from '../../compartido/ui/encabezado-pagina';
import { Proximamente } from '../../compartido/ui/proximamente';

/** Página "Acerca de" (ruta /acerca-de). Su contenido se incorporará más adelante. */
@Component({
  selector: 'app-acerca-de',
  imports: [EncabezadoPagina, Proximamente],
  template: `
    <app-encabezado-pagina titulo="Acerca de" subtitulo="Aprende. Practica. Desarrolla." />
    <section class="mx-auto max-w-contenido px-4 py-10 sm:px-6">
      <app-proximamente />
    </section>
  `,
})
export class AcercaDe {}
