
import { Component, Input, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';

@Component({
  selector: 'app-detalle-dinosaurio',
  templateUrl: './detalle.component.html',
  // styleUrls: ['./detalle.component.css']
})
export class DetalleDinosaurioComponent implements OnInit {
  @Input()
  dino!: Dinosaurio;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dino)
  }
}