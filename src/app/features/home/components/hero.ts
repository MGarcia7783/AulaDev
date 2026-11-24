import { Component } from '@angular/core';

/**
 * Portada de bienvenida de la página principal.
 */
@Component({
  selector: 'app-hero',
  template: `
    <section class="hero-background relative overflow-hidden text-white" aria-labelledby="titulo-bienvenida">
      <div
        class="relative mx-auto flex max-w-content items-center px-4 py-10 sm:px-6 lg:min-h-80"
      >
        <!-- Mensaje de bienvenida -->
        <div class="max-w-2xl">
          <h1
            id="titulo-bienvenida"
            class="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
          >
            Bienvenido a <span class="text-brand">AulaDev</span>
          </h1>
          <p class="mt-2 text-xl font-bold sm:text-2xl xl:text-3xl">
            Tu espacio de aprendizaje en programación
          </p>
          <!-- Subrayado corto de color de marca -->
          <div class="mt-5 h-1 w-28 rounded-full bg-brand" aria-hidden="true"></div>
          <p class="mt-5 max-w-md text-base text-white/90 sm:text-lg">
            Encuentra teoría, ejemplos y recursos para desarrollar tus habilidades y alcanzar tus
            objetivos.
          </p>
        </div>

      </div>
    </section>
  `,
})
export class Hero {}
