import { Component } from '@angular/core';

/**
 * Ilustración decorativa del hero: computadora portátil inclinada
 * con líneas de código de colores en la pantalla.
 * Es un SVG propio (liviano y nítido a cualquier tamaño).
 */
@Component({
  selector: 'app-ilustracion-laptop',
  host: { class: 'block' },
  template: `
    <svg class="h-auto w-full" viewBox="0 0 540 320" aria-hidden="true">
      <defs>
        <!-- Degradados de la pantalla, del teclado y del resplandor inferior -->
        <linearGradient id="laptop-pantalla" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#10214a" />
          <stop offset="1" stop-color="#07122b" />
        </linearGradient>
        <linearGradient id="laptop-base" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#dbe6fa" />
          <stop offset="1" stop-color="#8ea3c9" />
        </linearGradient>
        <radialGradient id="laptop-resplandor" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#1e8bff" stop-opacity=".55" />
          <stop offset="1" stop-color="#1e8bff" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Resplandor azul bajo la laptop -->
      <ellipse cx="270" cy="300" rx="260" ry="18" fill="url(#laptop-resplandor)" />

      <!-- Base y teclado -->
      <path d="M28 292 505 262v8L28 300Z" fill="#5f7399" />
      <path d="M112 232 452 212 505 262 28 292Z" fill="url(#laptop-base)" />
      <path d="M140 241 424 225 452 251 96 269Z" fill="#2a3a5e" />
      <g stroke="#4a5d86" stroke-width="1.2">
        <path d="M133 247 430 230M127 253 436 236M121 259 442 242M112 265 447 247" />
        <path d="M166 239 146 263M206 237 190 261M246 234 234 259M286 232 278 257M326 230 322 255M366 228 366 253M406 226 410 251" />
      </g>
      <!-- Panel táctil -->
      <path d="M232 276 318 271 324 280 226 285Z" fill="#c2d0ec" stroke="#7d93bd" stroke-width="1" />

      <!-- Marco y pantalla -->
      <path d="M150 20 480 0 452 218 110 236Z" fill="#1b2a4a" stroke="#4a5d86" stroke-width="2" stroke-linejoin="round" />
      <path d="M160 32 468 14 440 206 124 222Z" fill="url(#laptop-pantalla)" />

      <!-- Código en pantalla: el grupo se inclina para seguir la perspectiva de la pantalla -->
      <g transform="matrix(1 -0.0584 -0.1895 1 160 32)">
        <!-- Números de línea (columna izquierda, tono apagado) -->
        <g fill="#2a3f6f">
          <rect x="10" y="14" width="26" height="4" rx="2" />
          <rect x="10" y="26" width="20" height="4" rx="2" />
          <rect x="10" y="38" width="24" height="4" rx="2" />
          <rect x="10" y="50" width="18" height="4" rx="2" />
          <rect x="10" y="62" width="22" height="4" rx="2" />
          <rect x="10" y="74" width="16" height="4" rx="2" />
        </g>
        <!-- Líneas de código: cada color representa un tipo de elemento (palabra clave, texto, etc.) -->
        <rect x="52" y="14" width="40" height="5" rx="2.5" fill="#ff9f43" />
        <rect x="98" y="14" width="70" height="5" rx="2.5" fill="#54a0ff" />
        <rect x="62" y="28" width="56" height="5" rx="2.5" fill="#1dd1a1" />
        <rect x="124" y="28" width="90" height="5" rx="2.5" fill="#feca57" />
        <rect x="62" y="42" width="30" height="5" rx="2.5" fill="#ff6b9d" />
        <rect x="98" y="42" width="100" height="5" rx="2.5" fill="#54a0ff" />
        <rect x="72" y="56" width="70" height="5" rx="2.5" fill="#a29bfe" />
        <rect x="148" y="56" width="44" height="5" rx="2.5" fill="#1dd1a1" />
        <rect x="72" y="70" width="46" height="5" rx="2.5" fill="#ff9f43" />
        <rect x="124" y="70" width="110" height="5" rx="2.5" fill="#54a0ff" />
        <rect x="62" y="84" width="84" height="5" rx="2.5" fill="#feca57" />
        <rect x="52" y="98" width="30" height="5" rx="2.5" fill="#ff6b9d" />
        <rect x="88" y="98" width="64" height="5" rx="2.5" fill="#1dd1a1" />
        <rect x="62" y="112" width="96" height="5" rx="2.5" fill="#54a0ff" />
        <rect x="164" y="112" width="38" height="5" rx="2.5" fill="#ff9f43" />
        <rect x="72" y="126" width="52" height="5" rx="2.5" fill="#a29bfe" />
        <rect x="130" y="126" width="80" height="5" rx="2.5" fill="#feca57" />
        <rect x="72" y="140" width="76" height="5" rx="2.5" fill="#1dd1a1" />
        <rect x="62" y="154" width="40" height="5" rx="2.5" fill="#ff6b9d" />
        <rect x="108" y="154" width="90" height="5" rx="2.5" fill="#54a0ff" />
        <rect x="52" y="168" width="24" height="5" rx="2.5" fill="#ff9f43" />
      </g>
    </svg>
  `,
})
export class IlustracionLaptop {}
