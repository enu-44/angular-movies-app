import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselButton } from './carrusel-button';

describe('CarruselButton', () => {
  let component: CarruselButton;
  let fixture: ComponentFixture<CarruselButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
