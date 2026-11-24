import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  // Antes de cada prueba se prepara el componente con un enrutador vacío
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debería crear la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debería mostrar el encabezado, el contenido principal y el pie de página', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compilado = fixture.nativeElement as HTMLElement;
    expect(compilado.querySelector('app-encabezado')).toBeTruthy();
    expect(compilado.querySelector('main')).toBeTruthy();
    expect(compilado.querySelector('app-pie-pagina')).toBeTruthy();
  });
});
