import { Component, ElementRef, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { Icono } from '../../compartido/ui/icono';
import { Logo } from '../../compartido/ui/logo';
import { buscarMaterias } from '../datos/buscar-materias';
import { MATERIAS } from '../datos/materias.datos';

/**
 * Encabezado principal del sitio: logo, menú de navegación, desplegable de materias
 * y buscador. En pantallas pequeñas el menú se pliega detrás de un botón.
 * La plantilla está en encabezado.html.
 */
@Component({
  selector: 'app-encabezado',
  imports: [RouterLink, RouterLinkActive, Icono, Logo],
  templateUrl: './encabezado.html',
  host: {
    // Un clic fuera del encabezado cierra los menús abiertos
    '(document:click)': 'alHacerClicEnDocumento($event)',
    // La tecla Escape también los cierra
    '(keydown.escape)': 'cerrarTodo()',
  },
})
export class Encabezado {
  private readonly enrutador = inject(Router);
  private readonly anfitrion = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Lista de materias para el desplegable del menú. */
  protected readonly materias = MATERIAS;

  /** Menú completo abierto (solo se usa en pantallas pequeñas). */
  protected readonly menuAbierto = signal(false);
  /** Desplegable "Materias" abierto. */
  protected readonly desplegableAbierto = signal(false);
  /** Lista de resultados del buscador visible. */
  protected readonly busquedaAbierta = signal(false);
  /** Texto escrito en el buscador. */
  protected readonly consulta = signal('');
  /** Materias que coinciden con el texto del buscador. */
  protected readonly resultados = computed(() => buscarMaterias(this.consulta()));

  /** Dirección actual; se actualiza cada vez que termina una navegación. */
  private readonly url = toSignal(
    this.enrutador.events.pipe(
      filter((evento): evento is NavigationEnd => evento instanceof NavigationEnd),
      map((evento) => evento.urlAfterRedirects),
    ),
    { initialValue: this.enrutador.url },
  );

  /** "Materias" se marca como activo en /materias y también en /materias/:slug. */
  protected readonly seccionMateriasActiva = computed(() => this.url().startsWith('/materias'));

  constructor() {
    // Al navegar a otra página se cierran los menús y se limpia el buscador.
    effect(() => {
      this.url();
      untracked(() => {
        this.cerrarTodo();
        this.consulta.set('');
      });
    });
  }

  /** Abre o cierra el menú completo (botón de pantallas pequeñas). */
  protected alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  /** Abre o cierra el desplegable "Materias". */
  protected alternarDesplegable(): void {
    this.desplegableAbierto.update((abierto) => !abierto);
  }

  /** Cada letra escrita actualiza el texto de búsqueda y muestra los resultados. */
  protected alEscribirBusqueda(evento: Event): void {
    this.consulta.set((evento.target as HTMLInputElement).value);
    this.busquedaAbierta.set(true);
  }

  /** Al presionar Enter se abre la primera materia encontrada. */
  protected alEnviarBusqueda(evento: Event): void {
    evento.preventDefault();
    const primera = this.resultados()[0];
    if (primera) {
      this.enrutador.navigate(['/materias', primera.slug]);
    }
  }

  /** Cierra los menús si el clic ocurrió fuera del encabezado. */
  protected alHacerClicEnDocumento(evento: MouseEvent): void {
    if (!this.anfitrion.nativeElement.contains(evento.target as Node)) {
      this.cerrarTodo();
    }
  }

  /** Cierra el menú, el desplegable y la lista de resultados. */
  protected cerrarTodo(): void {
    this.menuAbierto.set(false);
    this.desplegableAbierto.set(false);
    this.busquedaAbierta.set(false);
  }
}
