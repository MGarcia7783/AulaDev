import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { findSubjectBySlug, SUBJECTS } from './features/subjects/data/subjects.data';

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
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    // Listado de todas las materias
    path: 'subjects',
    title: 'Materias',
    loadComponent: () =>
      import('./features/subjects/pages/subjects-page').then((m) => m.SubjectsPage),
  },
  {
    // Una sola página para las nueve materias.
    path: 'subjects/:slug',
    title: (route: ActivatedRouteSnapshot) =>
      findSubjectBySlug(route.paramMap.get('slug') ?? '')?.name ?? 'Materia no encontrada',
    loadComponent: () =>
      import('./features/subjects/pages/subject-detail').then((m) => m.SubjectDetail),
  },
  {
    // Recursos generales, comunes a varias materias
    path: 'resources',
    title: 'Recursos',
    loadComponent: () =>
      import('./features/resources/resources').then((m) => m.Resources),
  },
  {
    path: 'about',
    title: 'Acerca de',
    loadComponent: () =>
      import('./features/about/about').then((m) => m.About),
  },
  { path: 'materias', pathMatch: 'full', redirectTo: 'subjects' },
  ...SUBJECTS.map((subject) => ({
    path: `materias/${subject.legacySlug}`,
    pathMatch: 'full' as const,
    redirectTo: `subjects/${subject.slug}`,
  })),
  { path: 'materias/:slug', pathMatch: 'full', redirectTo: 'subjects/:slug' },
  { path: 'recursos', pathMatch: 'full', redirectTo: 'resources' },
  { path: 'acerca-de', pathMatch: 'full', redirectTo: 'about' },
  {
    // Cualquier otra dirección: página 404 (debe ir siempre al final)
    path: '**',
    title: 'Página no encontrada',
    loadComponent: () =>
      import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
