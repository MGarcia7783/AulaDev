import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { EstrategiaTitulo } from './nucleo/estrategia-titulo';

/** Configuración global de la aplicación. */
export const appConfig: ApplicationConfig = {
  providers: [
    // Registra los errores no controlados del navegador
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Permite recibir :slug como input del componente de detalle de materia.
      withComponentInputBinding(),
      // Al cambiar de página vuelve arriba y respeta los enlaces a secciones (#...).
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
    // Título de pestaña personalizado: "<página> · AulaDev"
    { provide: TitleStrategy, useClass: EstrategiaTitulo },
  ],
};
