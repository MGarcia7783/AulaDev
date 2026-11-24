import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './nucleo/diseno/encabezado';
import { PiePagina } from './nucleo/diseno/pie-pagina';

/**
 * Componente raíz: arma la estructura común de todas las páginas
 * (encabezado arriba, contenido en el centro y pie de página abajo).
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, PiePagina],
  templateUrl: './app.html',
  // El contenido ocupa al menos toda la altura de la pantalla, así el pie queda siempre abajo
  host: { class: 'flex min-h-screen flex-col' },
})
export class App {
  /** Enlace "Saltar al contenido": mueve el foco al contenido principal sin cambiar la ruta. */
  protected saltarAlContenido(evento: Event, principal: HTMLElement): void {
    evento.preventDefault();
    principal.focus();
  }
}
