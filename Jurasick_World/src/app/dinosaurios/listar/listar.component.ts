import { Component, OnInit } from '@angular/core';
import { DinosauriosService } from '../dinosaurios.service';
import { Dinosaurio } from '../dinosaurio';

@Component({
  selector: 'app-listar-dinosaurios',
  templateUrl: './listar.component.html',
  // styleUrls: ['./listar.component.css']
})


export class ListarDinosauriosComponent implements OnInit {
  selectedDino: Dinosaurio | null = null;
  dinosaurios: Dinosaurio[] = [];
  herbivoresCount: number = 0;
  carnivoresCount: number = 0;
  constructor(private dinosauriosService: DinosauriosService) { }

    ngOnInit(): void {
      this.dinosauriosService.countDinosaurTypes().subscribe(tipos => {
        this.herbivoresCount = tipos.herbivores
        this.carnivoresCount = tipos.carnivores
      })

      this.dinosauriosService.getDinosaurs().subscribe(data => {
        this.dinosaurios = data;
    });
  }
}


