import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarDinosauriosComponent } from './listar/listar.component';
import { DetalleDinosaurioComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    ListarDinosauriosComponent,
    DetalleDinosaurioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarDinosauriosComponent,
    DetalleDinosaurioComponent
  ]
})
export class DinosauriosModule { }
