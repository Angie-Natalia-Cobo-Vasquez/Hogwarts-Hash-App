import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Casa } from '../models/casa.model';

const CASAS_DATA: Casa[] = [
  {
    id: 1,
    nombre: 'Gryffindor',
    fundador: 'Godric Gryffindor',
    animal: 'León',
    colores: 'Rojo y dorado',
    elemento: 'Fuego',
    fantasma: 'Casi Decapitado (Sir Nicholas de Mimsy-Porpington)',
    jefe: 'Minerva McGonagall',
    cualidades: 'Valor y coraje',
    salaComun: 'Torre de Gryffindor',
  },
  {
    id: 2,
    nombre: 'Slytherin',
    fundador: 'Salazar Slytherin',
    animal: 'Serpiente',
    colores: 'Verde y plata',
    elemento: 'Agua',
    fantasma: 'El Barón Sanguinario',
    jefe: 'Severus Snape',
    cualidades: 'Ambición y astucia',
    salaComun: 'Mazmorras, bajo el lago',
  },
  {
    id: 3,
    nombre: 'Ravenclaw',
    fundador: 'Rowena Ravenclaw',
    animal: 'Águila',
    colores: 'Azul y bronce',
    elemento: 'Aire',
    fantasma: 'La Dama Gris (Helena Ravenclaw)',
    jefe: 'Filius Flitwick',
    cualidades: 'Inteligencia y creatividad',
    salaComun: 'Torre de Ravenclaw',
  },
  {
    id: 4,
    nombre: 'Hufflepuff',
    fundador: 'Helga Hufflepuff',
    animal: 'Tejón',
    colores: 'Amarillo y negro',
    elemento: 'Tierra',
    fantasma: 'El Fraile Gordo',
    jefe: 'Pomona Sprout',
    cualidades: 'Lealtad y paciencia',
    salaComun: 'Sótano, cerca de las cocinas',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CasasService {
  getAllCasas(): Observable<Casa[]> {
    return of(CASAS_DATA);
  }
}
