import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hechizo } from '../models/hechizo.model';

const HECHIZOS_DATA: Hechizo[] = [
  { id: 1, nombre: 'Lumos', categoria: 'Utilidad', efecto: 'Ilumina la punta de la varita' },
  { id: 2, nombre: 'Expelliarmus', categoria: 'Defensa contra las Artes Oscuras', efecto: 'Desarma al oponente' },
  { id: 3, nombre: 'Wingardium Leviosa', categoria: 'Utilidad', efecto: 'Hace levitar objetos' },
  { id: 4, nombre: 'Alohomora', categoria: 'Utilidad', efecto: 'Abre cerraduras' },
  { id: 5, nombre: 'Accio', categoria: 'Utilidad', efecto: 'Atrae un objeto hacia quien lo lanza' },
  { id: 6, nombre: 'Expecto Patronum', categoria: 'Defensa contra las Artes Oscuras', efecto: 'Conjura un protector corpóreo contra los dementores' },
  { id: 7, nombre: 'Stupefy', categoria: 'Defensa contra las Artes Oscuras', efecto: 'Aturde o noquea al oponente' },
  { id: 8, nombre: 'Avada Kedavra', categoria: 'Artes Oscuras', efecto: 'Causa la muerte instantánea (Maldición Asesina)' },
  { id: 9, nombre: 'Expulso', categoria: 'Combate', efecto: 'Hace explotar el blanco contra el que se apunta' },
  { id: 10, nombre: 'Obliviate', categoria: 'Manipulación Mental', efecto: 'Borra o modifica la memoria de una persona' },
  { id: 11, nombre: 'Riddikulus', categoria: 'Defensa contra las Artes Oscuras', efecto: 'Vuelve inofensivo a un Boggart convirtiéndolo en algo gracioso' },
  { id: 12, nombre: 'Sectumsempra', categoria: 'Artes Oscuras', efecto: 'Provoca profundas heridas cortantes como si fuera una espada invisible' },
];

@Injectable({
  providedIn: 'root',
})
export class HechizosService {
  getAllHechizos(): Observable<Hechizo[]> {
    return of(HECHIZOS_DATA);
  }
}
