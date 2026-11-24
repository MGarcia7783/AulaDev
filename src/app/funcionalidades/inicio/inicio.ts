import { Component } from '@angular/core';
import { EncabezadoPagina } from '../../compartido/ui/encabezado-pagina';
import { Proximamente } from '../../compartido/ui/proximamente';

/**
 * Página principal.
 * Por ahora es un marcador; el diseño completo se construye en la etapa 2.
 */
@Component({
  selector: 'app-inicio',
  imports: [EncabezadoPagina, Proximamente],
  template: `
    <app-encabezado-pagina
      titulo="Bienvenido a AulaDev"
      subtitulo="Tu espacio de aprendizaje en programación"
    />
    <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <app-proximamente mensaje="La página principal se completará en la siguiente etapa." />
    </section>
  `,
})
export class Inicio {}
