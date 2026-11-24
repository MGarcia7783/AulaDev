import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router, TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { AppTitleStrategy } from './core/title-strategy';
import { SUBJECTS } from './features/subjects/data/subjects.data';

describe('Navegación', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes, withComponentInputBinding()),
        { provide: TitleStrategy, useClass: AppTitleStrategy },
      ],
    });
  });

  it('conserva los enlaces anteriores de todas las materias y sus títulos', async () => {
    const harness = await RouterTestingHarness.create();
    const router = TestBed.inject(Router);
    const title = TestBed.inject(Title);

    for (const subject of SUBJECTS) {
      await harness.navigateByUrl(`/materias/${subject.legacySlug}`);
      expect(router.url).toBe(`/subjects/${subject.slug}`);
      expect(harness.routeNativeElement?.textContent).toContain(subject.name);
      expect(title.getTitle()).toBe(`${subject.name} · AulaDev`);
    }
  });

  it('redirige las secciones anteriores y muestra páginas inexistentes', async () => {
    const harness = await RouterTestingHarness.create();
    const router = TestBed.inject(Router);

    for (const [previous, current] of [
      ['/materias', '/subjects'],
      ['/recursos', '/resources'],
      ['/acerca-de', '/about'],
    ]) {
      await harness.navigateByUrl(previous);
      expect(router.url).toBe(current);
    }

    await harness.navigateByUrl('/subjects/unknown');
    expect(harness.routeNativeElement?.textContent).toContain('Materia no encontrada');
    await harness.navigateByUrl('/unknown-page');
    expect(harness.routeNativeElement?.textContent).toContain('Página no encontrada');
  });
});
