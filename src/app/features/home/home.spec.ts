import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Página principal', () => {
  it('muestra las materias y la bienvenida sin imagen ni elementos retirados', async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelectorAll('app-subject-card')).toHaveLength(9);
    expect(page.querySelector('app-benefits-strip')).toBeNull();
    expect(page.querySelector('app-hero > section > svg')).toBeNull();
    expect(page.querySelector('app-hero img')).toBeNull();
  });
});
