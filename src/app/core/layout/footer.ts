import { Component } from '@angular/core';
import { Icon, IconName } from '../../shared/ui/icon';
import { Logo } from '../../shared/ui/logo';

interface SocialLink {
  label: string;
  icon: IconName;
  /** Dirección real. Vacía = marcador pendiente de completar. */
  url: string;
}

@Component({
  selector: 'app-footer',
  imports: [Icon, Logo],
  template: `
    <footer class="bg-navy text-white">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <app-logo [sloganFrom]="'md'" />

        <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
          <ul class="flex items-center gap-3" aria-label="Redes y plataformas educativas">
            @for (link of socialLinks; track link.label) {
              <li>
                <a
                  class="flex size-10 items-center justify-center rounded-full text-white/90 hover:bg-white/10"
                  [attr.href]="link.url || null"
                  [attr.aria-label]="link.label"
                  [attr.aria-disabled]="link.url ? null : 'true'"
                >
                  <app-icon [name]="link.icon" class="size-6" />
                </a>
              </li>
            }
          </ul>

          <span class="hidden h-8 w-px bg-white/30 sm:block" aria-hidden="true"></span>

          <p class="text-sm text-white/80">
            © {{ year }} AulaDev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  // Marcadores: se completan con las direcciones reales más adelante.
  protected readonly socialLinks: readonly SocialLink[] = [
    { label: 'GitHub', icon: 'github', url: '' },
    { label: 'YouTube', icon: 'youtube', url: '' },
    { label: 'Plataforma educativa', icon: 'graduation-cap', url: '' },
  ];
}
