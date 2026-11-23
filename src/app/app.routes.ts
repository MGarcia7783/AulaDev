import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { findSubject } from './core/data/subjects.data';

/** Cada página se carga solo cuando se visita (carga diferida). */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Inicio',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'materias',
    title: 'Materias',
    loadComponent: () =>
      import('./features/subjects/subjects-page').then((m) => m.SubjectsPage),
  },
  {
    // Una sola página para las 9 materias; los datos vienen de subjects.data.ts
    path: 'materias/:slug',
    title: (route: ActivatedRouteSnapshot) =>
      findSubject(route.paramMap.get('slug') ?? '')?.name ?? 'Materia no encontrada',
    loadComponent: () =>
      import('./features/subjects/subject-detail').then((m) => m.SubjectDetail),
  },
  {
    path: 'recursos',
    title: 'Recursos',
    loadComponent: () => import('./features/resources/resources').then((m) => m.Resources),
  },
  {
    path: 'acerca-de',
    title: 'Acerca de',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: '**',
    title: 'Página no encontrada',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
