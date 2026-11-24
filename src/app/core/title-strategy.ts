import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

/**
 * Define el título de la pestaña del navegador: "<página> · AulaDev".
 * Ayuda a la accesibilidad y a identificar la página en el historial.
 */
@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  /** Angular la llama cada vez que cambia la ruta. */
  override updateTitle(snapshot: RouterStateSnapshot): void {
    // Título declarado en la ruta (campo "title" de app.routes.ts)
    const pageTitle = this.buildTitle(snapshot);
    this.title.setTitle(pageTitle ? `${pageTitle} · AulaDev` : 'AulaDev');
  }
}
