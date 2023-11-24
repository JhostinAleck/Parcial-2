import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDinosaurioComponent } from './detalle.component';

describe('DetalleComponent', () => {
  let component: DetalleDinosaurioComponent;
  let fixture: ComponentFixture<DetalleDinosaurioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDinosaurioComponent]
    });
    fixture = TestBed.createComponent(DetalleDinosaurioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
