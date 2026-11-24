import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { buscarMateriaPorSlug } from './nucleo/datos/materias.datos';

/**
 * Rutas de la aplicación.
 * Cada página se carga solo cuando se visita (carga diferida con loadComponent),
 * lo que mantiene liviana la primera carga del sitio.
 */
export const routes: Routes = [
  {
    // Página principal
    path: '',
    pathMatch: 'full',
    title: 'Inicio',
    loadComponent: () => import('./funcionalidades/inicio/inicio').then((m) => m.Inicio),
  },
  {
    // Listado de todas las materias
    path: 'materias',
    title: 'Materias',
    loadComponent: () =>
      import('./funcionalidades/materias/pagina-materias').then((m) => m.PaginaMaterias),
  },
  {
    // Una sola página para las 9 materias; los datos vienen de materias.datos.ts
    path: 'materias/:slug',
    title: (ruta: ActivatedRouteSnapshot) =>
      buscarMateriaPorSlug(ruta.paramMap.get('slug') ?? '')?.nombre ?? 'Materia no encontrada',
    loadComponent: () =>
      import('./funcionalidades/materias/detalle-materia').then((m) => m.DetalleMateria),
  },
  {
    // Recursos generales, comunes a varias materias
    path: 'recursos',
    title: 'Recursos',
    loadComponent: () =>
      import('./funcionalidades/recursos/recursos').then((m) => m.Recursos),
  },
  {
    path: 'acerca-de',
    title: 'Acerca de',
    loadComponent: () =>
      import('./funcionalidades/acerca-de/acerca-de').then((m) => m.AcercaDe),
  },
  {
    // Cualquier otra dirección: página 404 (debe ir siempre al final)
    path: '**',
    title: 'Página no encontrada',
    loadComponent: () =>
      import('./funcionalidades/no-encontrado/no-encontrado').then((m) => m.NoEncontrado),
  },
];
