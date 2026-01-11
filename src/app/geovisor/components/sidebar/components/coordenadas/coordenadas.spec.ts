import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coordenadas } from './coordenadas';

describe('Coordenadas', () => {
  let component: Coordenadas;
  let fixture: ComponentFixture<Coordenadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coordenadas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coordenadas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
