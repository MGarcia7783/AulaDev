import { Component, input } from '@angular/core';

/** Tecnologías que se utilizan en las asignaturas (nombres propios, sin traducir). */
export type NombreTecnologia =
  | 'sqlserver'
  | 'postgresql'
  | 'dotnet'
  | 'nestjs'
  | 'angular'
  | 'java'
  | 'pseint'
  | 'firebase'
  | 'flutter';

/**
 * Logos simplificados de las tecnologías del curso (dibujo propio, no los archivos oficiales).
 * El tamaño lo define quien lo usa:  <app-logo-tecnologia nombre="angular" class="size-9" />
 * Es decorativo (aria-hidden): quien lo use debe indicar el nombre de la tecnología como texto.
 */
@Component({
  selector: 'app-logo-tecnologia',
  host: { class: 'inline-block shrink-0' },
  template: `
    <svg class="size-full" viewBox="0 0 32 32" aria-hidden="true">
      @switch (nombre()) {
        @case ('sqlserver') {
          <!-- Tres discos apilados (base de datos) -->
          <path d="M5 8c0-2.4 4.9-4.2 11-4.2S27 5.6 27 8s-4.9 4.2-11 4.2S5 10.4 5 8Z" fill="#f0584c" />
          <path d="M5 8v7.5c0 2.4 4.9 4.2 11 4.2s11-1.8 11-4.2V8c0 2.4-4.9 4.2-11 4.2S5 10.4 5 8Z" fill="#cc2927" />
          <path d="M5 15.5V23c0 2.4 4.9 4.2 11 4.2s11-1.8 11-4.2v-7.5c0 2.4-4.9 4.2-11 4.2S5 17.9 5 15.5Z" fill="#8f2420" />
        }
        @case ('postgresql') {
          <circle cx="16" cy="16" r="13" fill="#336791" />
          <text x="16" y="21" font-family="Inter Variable, Inter, sans-serif" font-weight="700" font-size="14" fill="#fff" text-anchor="middle">Pg</text>
        }
        @case ('dotnet') {
          <rect x="3" y="4" width="26" height="24" rx="5" fill="#512bd4" />
          <text x="16" y="20.5" font-family="Inter Variable, Inter, sans-serif" font-weight="700" font-size="10.5" fill="#fff" text-anchor="middle">.NET</text>
        }
        @case ('nestjs') {
          <circle cx="16" cy="16" r="13" fill="#e0234e" />
          <path d="M11.5 22V10.5L20.5 22V10.5" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
        }
        @case ('angular') {
          <!-- Escudo con la letra A -->
          <path d="M16 3 4.5 7.1 6.3 22.5 16 28.5l9.7-6 1.8-15.4Z" fill="#dd0031" />
          <path fill="#fff" fill-rule="evenodd" d="M16 7.4 9.5 22h2.4l1.3-3.3h5.6l1.3 3.3h2.4Zm0 4.3 2 5H14Z" />
        }
        @case ('java') {
          <!-- Taza con vapor -->
          <path d="M7 16h14v4.5a5.5 5.5 0 0 1-5.5 5.5h-3A5.5 5.5 0 0 1 7 20.5Z" fill="#5382a1" />
          <path d="M21 17.5h1.6a2.9 2.9 0 0 1 0 5.8H20" fill="none" stroke="#5382a1" stroke-width="1.8" stroke-linecap="round" />
          <path d="M5.5 28.5h17" stroke="#e76f00" stroke-width="2" stroke-linecap="round" />
          <path d="M11.5 4.5c2.3 2.3-2.3 3.8 0 6.5M16.5 3c2.8 2.8-2.8 4.8 0 7.8" fill="none" stroke="#e76f00" stroke-width="1.8" stroke-linecap="round" />
        }
        @case ('pseint') {
          <!-- Diagrama de flujo simplificado -->
          <rect x="3" y="3" width="26" height="26" rx="6" fill="#1bb4f2" />
          <rect x="8.5" y="7.5" width="15" height="6" rx="1.8" fill="#fff" />
          <path d="M16 13.5v4" stroke="#fff" stroke-width="2" />
          <rect x="8.5" y="17.5" width="15" height="6" rx="1.8" fill="#fff" opacity=".85" />
        }
        @case ('firebase') {
          <!-- Llama en tres tonos -->
          <path d="M6 25 9.6 4.6a1 1 0 0 1 1.8-.3l3.2 6.2Z" fill="#ffca28" />
          <path d="M6 25 20 11l-2.5-4.7a.8.8 0 0 0-1.4 0l-1.5 4.2Z" fill="#ffa000" />
          <path d="m6 25 9.8 4.4a2 2 0 0 0 1.4 0L26 25 23.3 10.5a.8.8 0 0 0-1.4-.4Z" fill="#f57c00" />
        }
        @case ('flutter') {
          <path d="M19 3h7L12 17l-3.5-3.5Z" fill="#54c5f8" />
          <path d="M19 15h7l-6.5 6.5-3.5-3.5Z" fill="#54c5f8" />
          <path d="m12 21.5 3.5-3.5 3.5 3.5-3.5 3.5Z" fill="#0277bd" />
        }
      }
    </svg>
  `,
})
export class LogoTecnologia {
  /** Tecnología cuyo logo se dibuja. */
  readonly nombre = input.required<NombreTecnologia>();
}
