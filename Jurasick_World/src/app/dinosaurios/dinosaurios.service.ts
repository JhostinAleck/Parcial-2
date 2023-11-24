
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dinosaurio } from './dinosaurio';

@Injectable({
  providedIn: 'root'
})
export class DinosauriosService {
  private url = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/main/dinosaurs.json';

  constructor(private http: HttpClient) { }

  getDinosaurs(): Observable<Dinosaurio[]> {
    return this.http.get<Dinosaurio[]>(this.url).pipe(
      map(dinos => dinos.map(dino => new Dinosaurio(
        dino.id,
        dino.name,
        dino.scientificName,
        dino.description,
        dino.shortDescription,
        dino.era,
        dino.feeding,
        dino.discoveryCountry,
        dino.image
      )))
    );}

  countDinosaurTypes(): Observable<{ herbivores: number; carnivores: number }> {
    return this.getDinosaurs().pipe(
      map(dinosaurs => ({
        herbivores: dinosaurs.filter(dino => dino.feeding.toLowerCase() === 'herbivoro').length,
        carnivores: dinosaurs.filter(dino => dino.feeding.toLowerCase() === 'carnivoro').length
      }))
    );
  }

 

}

