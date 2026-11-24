import { Component } from '@angular/core';
import { CuadriculaMaterias } from '../../compartido/ui/cuadricula-materias';
import { FranjaBeneficios } from './franja-beneficios';
import { Portada } from './portada';

/**
 * Página principal (ruta "/"). Se compone de tres bloques, de arriba hacia abajo:
 * la portada de bienvenida, la sección «Nuestras Materias» y la franja de beneficios.
 */
@Component({
  selector: 'app-inicio',
  imports: [Portada, CuadriculaMaterias, FranjaBeneficios],
  template: `
    <!-- Portada con el mensaje de bienvenida y la laptop -->
    <app-portada />

    <!-- Materias, en una cuadrícula de tres columnas en pantallas grandes -->
    <section class="mx-auto max-w-contenido px-4 pt-10 sm:px-6" aria-labelledby="titulo-materias">
      <h2 id="titulo-materias" class="flex items-center gap-4 text-2xl font-bold text-tinta sm:text-3xl">
        <!-- Barra vertical de color de marca (decorativa) -->
        <span class="h-8 w-1 rounded-full bg-marca" aria-hidden="true"></span>
        Nuestras Materias
      </h2>
      <div class="mt-6">
        <app-cuadricula-materias />
      </div>
    </section>

    <!-- Beneficios y frase destacada -->
    <section class="mx-auto max-w-contenido px-4 py-10 sm:px-6">
      <app-franja-beneficios />
    </section>
  `,
})
export class Inicio {}
