import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EncabezadoPagina } from '../../compartido/ui/encabezado-pagina';

/** Página 404: se muestra cuando la dirección no corresponde a ninguna ruta. */
@Component({
  selector: 'app-no-encontrado',
  imports: [EncabezadoPagina, RouterLink],
  template: `
    <app-encabezado-pagina
      titulo="Página no encontrada"
      subtitulo="La dirección no existe o fue movida."
    />
    <section class="mx-auto max-w-contenido px-4 py-10 sm:px-6">
      <a routerLink="/" class="font-semibold text-marca-fuerte hover:underline">Volver al inicio</a>
    </section>
  `,
})
export class NoEncontrado {}
