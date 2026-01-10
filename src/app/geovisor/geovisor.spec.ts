import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Geovisor } from './geovisor';

describe('Geovisor', () => {
  let component: Geovisor;
  let fixture: ComponentFixture<Geovisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Geovisor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Geovisor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
