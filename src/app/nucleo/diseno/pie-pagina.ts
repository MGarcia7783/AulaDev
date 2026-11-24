import { Component } from '@angular/core';
import { Icono, NombreIcono } from '../../compartido/ui/icono';
import { Logo } from '../../compartido/ui/logo';

/** Enlace a una red social o plataforma educativa del pie de página. */
interface EnlaceSocial {
  /** Nombre que leen los lectores de pantalla. */
  etiqueta: string;
  icono: NombreIcono;
  /** Dirección real. Si está vacía, es un marcador pendiente de completar. */
  url: string;
}

/** Pie de página: logo, eslogan, enlaces a redes y derechos reservados. */
@Component({
  selector: 'app-pie-pagina',
  imports: [Icono, Logo],
  template: `
    <footer class="bg-marino text-white">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <!-- Logo con eslogan (visible desde pantallas medianas) -->
        <app-logo [esloganDesde]="'md'" />

        <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
          <!-- Redes y plataformas: sin dirección real se muestran como marcadores -->
          <ul class="flex items-center gap-3" aria-label="Redes y plataformas educativas">
            @for (enlace of enlacesSociales; track enlace.etiqueta) {
              <li>
                <a
                  class="flex size-10 items-center justify-center rounded-full text-white/90 hover:bg-white/10"
                  [attr.href]="enlace.url || null"
                  [attr.aria-label]="enlace.etiqueta"
                  [attr.aria-disabled]="enlace.url ? null : 'true'"
                >
                  <app-icono [nombre]="enlace.icono" class="size-6" />
                </a>
              </li>
            }
          </ul>

          <!-- Línea vertical decorativa -->
          <span class="hidden h-8 w-px bg-white/30 sm:block" aria-hidden="true"></span>

          <p class="text-sm text-white/80">
            © {{ anio }} AulaDev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class PiePagina {
  /** Año actual: el aviso de derechos se actualiza solo cada año. */
  protected readonly anio = new Date().getFullYear();

  // Marcadores: se completan con las direcciones reales más adelante.
  protected readonly enlacesSociales: readonly EnlaceSocial[] = [
    { etiqueta: 'GitHub', icono: 'github', url: '' },
    { etiqueta: 'YouTube', icono: 'youtube', url: '' },
    { etiqueta: 'Plataforma educativa', icono: 'birrete', url: '' },
  ];
}
