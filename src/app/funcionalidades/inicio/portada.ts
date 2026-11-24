import { Component } from '@angular/core';
import { IlustracionLaptop } from '../../compartido/ui/ilustracion-laptop';
import { LogoTecnologia, NombreTecnologia } from '../../compartido/ui/logo-tecnologia';

/** Tecnología que se muestra como pequeña tarjeta a la derecha de la laptop. */
interface Tecnologia {
  nombre: NombreTecnologia;
  /** Nombre que se lee en pantalla o, si no se muestra, para lectores de pantalla. */
  etiqueta: string;
  /** Si es false, el nombre queda oculto (el logo ya lo incluye o se entiende solo). */
  mostrarEtiqueta: boolean;
  /** Ancho en la cuadrícula de 6 columnas: 2 por fila (col-span-3) o 3 por fila (col-span-2). */
  ancho: string;
}

/**
 * Portada (hero) de la página principal: mensaje de bienvenida a la izquierda y,
 * a la derecha, una laptop con código en pantalla y los iconos de las tecnologías.
 * Por indicación del diseño, NO incluye el botón «Explorar Materias».
 */
@Component({
  selector: 'app-portada',
  imports: [IlustracionLaptop, LogoTecnologia],
  template: `
    <section class="fondo-portada relative overflow-hidden text-white" aria-labelledby="titulo-bienvenida">
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
        class="relative mx-auto grid max-w-contenido items-center gap-6 px-4 py-10 sm:px-6 lg:min-h-80 lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:py-8"
      >
        <!-- Mensaje de bienvenida -->
        <div>
          <h1
            id="titulo-bienvenida"
            class="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
          >
            Bienvenido a <span class="text-marca">AulaDev</span>
          </h1>
          <p class="mt-2 text-xl font-bold sm:text-2xl xl:text-3xl">
            Tu espacio de aprendizaje en programación
          </p>
          <!-- Subrayado corto de color de marca -->
          <div class="mt-5 h-1 w-28 rounded-full bg-marca" aria-hidden="true"></div>
          <p class="mt-5 max-w-md text-base text-white/90 sm:text-lg">
            Encuentra teoría, ejemplos y recursos para desarrollar tus habilidades y alcanzar tus
            objetivos.
          </p>
        </div>

        <!-- Laptop con código (derecha del mensaje) y tecnologías -->
        <div class="relative lg:h-full lg:pr-56">
          <app-ilustracion-laptop class="mx-auto w-full max-w-md lg:max-w-none" />

          <!-- Tecnologías: fila discreta en móvil y bloque a la derecha en pantallas grandes -->
          <ul
            class="mt-4 flex flex-wrap justify-center gap-2 lg:absolute lg:top-1/2 lg:right-0 lg:mt-0 lg:grid lg:w-52 lg:-translate-y-1/2 lg:grid-cols-6 lg:gap-2"
            aria-label="Tecnologías que se utilizan en las materias"
          >
            @for (tecnologia of tecnologias; track tecnologia.nombre) {
              <li
                class="flex w-24 flex-col items-center justify-center gap-1 text-center rounded-xl border border-white/10 bg-marino/70 p-2 lg:w-auto"
                [class]="tecnologia.ancho"
              >
                <app-logo-tecnologia [nombre]="tecnologia.nombre" class="size-9" />
                <!-- El nombre siempre existe para lectores de pantalla; solo algunos se ven -->
                <span [class]="tecnologia.mostrarEtiqueta ? 'text-xs leading-none text-white' : 'sr-only'">
                  {{ tecnologia.etiqueta }}
                </span>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class Portada {
  /** Tecnologías de referencia, en el orden en que aparecen en el diseño. */
  protected readonly tecnologias: readonly Tecnologia[] = [
    { nombre: 'sqlserver', etiqueta: 'SQL Server', mostrarEtiqueta: true, ancho: 'lg:col-span-3' },
    { nombre: 'postgresql', etiqueta: 'PostgreSQL', mostrarEtiqueta: true, ancho: 'lg:col-span-3' },
    { nombre: 'dotnet', etiqueta: '.NET', mostrarEtiqueta: false, ancho: 'lg:col-span-3' },
    { nombre: 'nestjs', etiqueta: 'NestJS', mostrarEtiqueta: false, ancho: 'lg:col-span-3' },
    { nombre: 'angular', etiqueta: 'Angular', mostrarEtiqueta: false, ancho: 'lg:col-span-3' },
    { nombre: 'java', etiqueta: 'Java', mostrarEtiqueta: true, ancho: 'lg:col-span-3' },
    { nombre: 'pseint', etiqueta: 'PSeInt', mostrarEtiqueta: true, ancho: 'lg:col-span-2' },
    { nombre: 'firebase', etiqueta: 'Firebase', mostrarEtiqueta: false, ancho: 'lg:col-span-2' },
    { nombre: 'flutter', etiqueta: 'Flutter', mostrarEtiqueta: false, ancho: 'lg:col-span-2' },
  ];
}
