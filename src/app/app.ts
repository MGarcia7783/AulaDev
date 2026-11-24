import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header';
import { Footer } from './core/layout/footer';

/**
 * Componente raíz: arma la estructura común de todas las páginas
 * (encabezado arriba, contenido en el centro y pie de página abajo).
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  // El contenido ocupa al menos toda la altura de la pantalla, así el pie queda siempre abajo
  host: { class: 'flex min-h-screen flex-col' },
})
export class App {
  /** Enlace "Saltar al contenido": mueve el foco al contenido principal sin cambiar la ruta. */
  protected skipToContent(event: Event, mainContent: HTMLElement): void {
    event.preventDefault();
    mainContent.focus();
  }
}
