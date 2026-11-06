import { Component, OnInit, inject } from '@angular/core';
import { Personaje } from './models/personaje.model';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss',
  standalone: false,
})
export class PersonajesComponent implements OnInit {
  items: Personaje[] = [];

  private readonly service = inject(PersonajesService);

  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe((data) => (this.items = data));
  }
}
