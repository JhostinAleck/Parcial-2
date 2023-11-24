import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDinosauriosComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarDinosauriosComponent;
  let fixture: ComponentFixture<ListarDinosauriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDinosauriosComponent]
    });
    fixture = TestBed.createComponent(ListarDinosauriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
