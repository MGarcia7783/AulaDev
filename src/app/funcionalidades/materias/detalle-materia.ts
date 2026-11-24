import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { buscarMateriaPorSlug } from '../../nucleo/datos/materias.datos';
import { EncabezadoPagina } from '../../compartido/ui/encabezado-pagina';
import { Proximamente } from '../../compartido/ui/proximamente';

/**
 * Página de una materia (ruta /materias/:slug).
 * Es la misma para las 9 asignaturas: el :slug de la dirección llega como input
 * (gracias a withComponentInputBinding) y se busca en materias.datos.ts.
 */
@Component({
  selector: 'app-detalle-materia',
  imports: [EncabezadoPagina, Proximamente, RouterLink],
  template: `
    @if (materia(); as datos) {
      <!-- Materia encontrada -->
      <app-encabezado-pagina [titulo]="datos.nombre" [subtitulo]="datos.curso" />
      <section class="mx-auto max-w-contenido px-4 py-10 sm:px-6">
        <a routerLink="/materias" class="text-sm font-semibold text-marca-fuerte hover:underline">
          ← Todas las materias
        </a>
        <div class="mt-6">
          <!-- Aquí se incorporará el contenido (unidades, teoría, ejercicios, proyectos...) -->
          <app-proximamente />
        </div>
      </section>
    } @else {
      <!-- El slug de la dirección no corresponde a ninguna materia -->
      <app-encabezado-pagina titulo="Materia no encontrada" />
      <section class="mx-auto max-w-contenido px-4 py-10 sm:px-6">
        <a routerLink="/materias" class="font-semibold text-marca-fuerte hover:underline">
          Ver todas las materias
        </a>
      </section>
    }
  `,
})
export class DetalleMateria {
  /** Parte final de la dirección (por ejemplo "base-de-datos"). */
  readonly slug = input.required<string>();
  /** Materia correspondiente al slug, o undefined si no existe. */
  protected readonly materia = computed(() => buscarMateriaPorSlug(this.slug()));
}
