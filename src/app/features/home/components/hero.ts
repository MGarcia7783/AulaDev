import { Component } from '@angular/core';
import { LaptopIllustration } from './laptop-illustration';

/**
 * Portada (hero) de la página principal: mensaje de bienvenida a la izquierda y,
 * a la derecha, una laptop con código en pantalla.
 * Por indicación del diseño, NO incluye el botón «Explorar Materias».
 */
@Component({
  selector: 'app-hero',
  imports: [LaptopIllustration],
  template: `
    <section class="hero-background relative overflow-hidden text-white" aria-labelledby="titulo-bienvenida">
      <!-- Línea curva decorativa en la parte inferior -->
      <svg
        class="pointer-events-none absolute -bottom-2 left-0 h-24 w-full opacity-70"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 70C220 20 420 96 720 80S1180 30 1440 62" fill="none" stroke="#1e8bff" stroke-width="2" />
      </svg>

      <div
        class="relative mx-auto grid max-w-content items-center gap-6 px-4 py-10 sm:px-6 lg:min-h-80 lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:py-8"
      >
        <!-- Mensaje de bienvenida -->
        <div>
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

        <div class="flex items-center justify-center lg:h-full">
          <app-laptop-illustration class="w-full max-w-md lg:max-w-lg" />
        </div>
      </div>
    </section>
  `,
})
export class Hero {}
