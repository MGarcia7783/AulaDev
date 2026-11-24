import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

/**
 * Define el título de la pestaña del navegador: "<página> · AulaDev".
 * Ayuda a la accesibilidad y a identificar la página en el historial.
 */
@Injectable({ providedIn: 'root' })
export class EstrategiaTitulo extends TitleStrategy {
  private readonly titulo = inject(Title);

  /** Angular la llama cada vez que cambia la ruta. */
  override updateTitle(instantanea: RouterStateSnapshot): void {
    // Título declarado en la ruta (campo "title" de app.routes.ts)
    const tituloPagina = this.buildTitle(instantanea);
    this.titulo.setTitle(tituloPagina ? `${tituloPagina} · AulaDev` : 'AulaDev');
  }
}
