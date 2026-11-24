import { Component, ElementRef, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { Icon } from '../../shared/ui/icon';
import { Logo } from '../../shared/ui/logo';
import { searchSubjects } from '../../features/subjects/data/search-subjects';
import { SUBJECTS } from '../../features/subjects/data/subjects.data';

/**
 * Encabezado principal del sitio: logo, menú de navegación, desplegable de materias
 * y buscador. En pantallas pequeñas el menú se pliega detrás de un botón.
 * La plantilla está en header.html.
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon, Logo],
  templateUrl: './header.html',
  host: {
    // Un clic fuera del encabezado cierra los menús abiertos
    '(document:click)': 'onDocumentClick($event)',
    // La tecla Escape también los cierra
    '(keydown.escape)': 'closeAll()',
  },
})
export class Header {
  private readonly router = inject(Router);
  private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Lista de materias para el desplegable del menú. */
  protected readonly subjects = SUBJECTS;

  /** Menú completo abierto (solo se usa en pantallas pequeñas). */
  protected readonly menuOpen = signal(false);
  /** Desplegable "Materias" abierto. */
  protected readonly dropdownOpen = signal(false);
  /** Lista de resultados del buscador visible. */
  protected readonly searchOpen = signal(false);
  /** Texto escrito en el buscador. */
  protected readonly query = signal('');
  /** Materias que coinciden con el texto del buscador. */
  protected readonly results = computed(() => searchSubjects(this.query()));

  /** Dirección actual; se actualiza cada vez que termina una navegación. */
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** "Materias" se marca como activo en el catálogo y en los detalles. */
  protected readonly subjectsSectionActive = computed(() => {
    const path = this.url().split(/[?#]/)[0];
    return path === '/subjects' || path.startsWith('/subjects/');
  });

  constructor() {
    // Al navegar a otra página se cierran los menús y se limpia el buscador.
    effect(() => {
      this.url();
      untracked(() => {
        this.closeAll();
        this.query.set('');
      });
    });
  }

  /** Abre o cierra el menú completo (botón de pantallas pequeñas). */
  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  /** Abre o cierra el desplegable "Materias". */
  protected toggleDropdown(): void {
    this.dropdownOpen.update((open) => !open);
  }

  /** Cada letra escrita actualiza el texto de búsqueda y muestra los resultados. */
  protected onSearchInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.searchOpen.set(true);
  }

  /** Al presionar Enter se abre la primera materia encontrada. */
  protected onSearchSubmit(event: Event): void {
    event.preventDefault();
    const first = this.results()[0];
    if (first) {
      this.router.navigate(['/subjects', first.slug]);
    }
  }

  /** Cierra los menús si el clic ocurrió fuera del encabezado. */
  protected onDocumentClick(event: MouseEvent): void {
    if (!this.hostElement.nativeElement.contains(event.target as Node)) {
      this.closeAll();
    }
  }

  /** Cierra el menú, el desplegable y la lista de resultados. */
  protected closeAll(): void {
    this.menuOpen.set(false);
    this.dropdownOpen.set(false);
    this.searchOpen.set(false);
  }
}
