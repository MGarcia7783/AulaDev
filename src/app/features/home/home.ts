import { Component } from '@angular/core';
import { SubjectGrid } from '../subjects/components/subject-grid';
import { Hero } from './components/hero';

/**
 * Página principal: portada de bienvenida y cuadrícula de materias.
 */
@Component({
  selector: 'app-home',
  imports: [Hero, SubjectGrid],
  template: `
    <!-- Portada con el mensaje de bienvenida -->
    <app-hero />

    <!-- Materias, en una cuadrícula de tres columnas en pantallas grandes -->
    <section class="mx-auto max-w-content px-4 py-10 sm:px-6" aria-labelledby="titulo-materias">
      <h2 id="titulo-materias" class="flex items-center gap-4 text-2xl font-bold text-ink sm:text-3xl">
        <!-- Barra vertical de color de marca (decorativa) -->
        <span class="h-8 w-1 rounded-full bg-brand" aria-hidden="true"></span>
        Nuestras Materias
      </h2>
      <div class="mt-6">
        <app-subject-grid />
      </div>
    </section>
  `,
})
export class Home {}
