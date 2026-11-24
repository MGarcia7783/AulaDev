import { Component } from '@angular/core';

/**
 * Ilustración decorativa del hero: computadora portátil inclinada
 * con líneas de código de colores en la pantalla.
 * Es un SVG propio (liviano y nítido a cualquier tamaño).
 */
@Component({
  selector: 'app-laptop-illustration',
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
        <!-- Texto real con colores de sintaxis para sugerir un editor de código. -->
        <g font-family="Consolas, monospace" font-size="10">
          <g fill="#63799e">
            <text x="12" y="27">1</text>
            <text x="12" y="45">2</text>
            <text x="12" y="63">3</text>
            <text x="12" y="81">4</text>
            <text x="12" y="99">5</text>
            <text x="12" y="117">6</text>
            <text x="12" y="135">7</text>
            <text x="12" y="153">8</text>
          </g>
          <text x="34" y="27" fill="#a29bfe">const <tspan fill="#54a0ff">student</tspan> <tspan fill="#dbe6fa">=</tspan> <tspan fill="#feca57">'AulaDev'</tspan><tspan fill="#dbe6fa">;</tspan></text>
          <text x="34" y="63" fill="#a29bfe">function <tspan fill="#54a0ff">learn</tspan><tspan fill="#dbe6fa">() &#123;</tspan></text>
          <text x="46" y="81" fill="#a29bfe">const <tspan fill="#54a0ff">skills</tspan> <tspan fill="#dbe6fa">= [</tspan></text>
          <text x="58" y="99" fill="#1dd1a1">'practice'<tspan fill="#dbe6fa">,</tspan> 'create'</text>
          <text x="46" y="117" fill="#dbe6fa">];</text>
          <text x="46" y="135" fill="#a29bfe">return <tspan fill="#54a0ff">skills</tspan><tspan fill="#dbe6fa">;</tspan></text>
          <text x="34" y="153" fill="#dbe6fa">&#125;</text>
        </g>
      </g>
    </svg>
  `,
})
export class LaptopIllustration {}
