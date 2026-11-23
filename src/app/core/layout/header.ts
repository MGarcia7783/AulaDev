import { Component, ElementRef, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { Icon } from '../../shared/ui/icon';
import { Logo } from '../../shared/ui/logo';
import { searchSubjects } from '../data/subject-search';
import { SUBJECTS } from '../data/subjects.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon, Logo],
  templateUrl: './header.html',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(keydown.escape)': 'closeAll()',
  },
})
export class Header {
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly subjects = SUBJECTS;

  /** Menú completo abierto (solo se usa en pantallas pequeñas). */
  protected readonly menuOpen = signal(false);
  protected readonly subjectsOpen = signal(false);
  protected readonly searchOpen = signal(false);
  protected readonly query = signal('');
  protected readonly results = computed(() => searchSubjects(this.query()));

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** "Materias" se marca como activo en /materias y en /materias/:slug. */
  protected readonly subjectsActive = computed(() => this.url().startsWith('/materias'));

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

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected toggleSubjects(): void {
    this.subjectsOpen.update((open) => !open);
  }

  protected onSearchInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.searchOpen.set(true);
  }

  /** Enter abre la primera materia encontrada. */
  protected onSearchSubmit(event: Event): void {
    event.preventDefault();
    const first = this.results()[0];
    if (first) {
      this.router.navigate(['/materias', first.slug]);
    }
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.closeAll();
    }
  }

  protected closeAll(): void {
    this.menuOpen.set(false);
    this.subjectsOpen.set(false);
    this.searchOpen.set(false);
  }
}
