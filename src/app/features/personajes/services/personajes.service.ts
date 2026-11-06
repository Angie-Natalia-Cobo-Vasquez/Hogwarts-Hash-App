import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Personaje } from '../models/personaje.model';

const PERSONAJES_DATA: Personaje[] = [
  { id: 1, nombre: 'Harry Potter', casa: 'Gryffindor', rol: 'Estudiante' },
  { id: 2, nombre: 'Hermione Granger', casa: 'Gryffindor', rol: 'Estudiante' },
  { id: 3, nombre: 'Draco Malfoy', casa: 'Slytherin', rol: 'Estudiante' },
  { id: 4, nombre: 'Severus Snape', casa: 'Slytherin', rol: 'Profesor' },
  { id: 5, nombre: 'Luna Lovegood', casa: 'Ravenclaw', rol: 'Estudiante' },
  { id: 6, nombre: 'Cedric Diggory', casa: 'Hufflepuff', rol: 'Estudiante' },
  { id: 7, nombre: 'Ron Weasley', casa: 'Gryffindor', rol: 'Estudiante' },
  { id: 8, nombre: 'Minerva McGonagall', casa: 'Gryffindor', rol: 'Profesora' },
  { id: 9, nombre: 'Bellatrix Lestrange', casa: 'Slytherin', rol: 'Mortífaga / Opositora' },
  { id: 10, nombre: 'Cho Chang', casa: 'Ravenclaw', rol: 'Estudiante' },
  { id: 11, nombre: 'Filius Flitwick', casa: 'Ravenclaw', rol: 'Profesor' },
  { id: 12, nombre: 'Nymphadora Tonks', casa: 'Hufflepuff', rol: 'Auror / Exalumna' },
];

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  getAllPersonajes(): Observable<Personaje[]> {
    return of(PERSONAJES_DATA);
  }
}
