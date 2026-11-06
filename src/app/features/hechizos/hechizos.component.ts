import { Component, OnInit, inject } from '@angular/core';
import { Hechizo } from './models/hechizo.model';
import { HechizosService } from './services/hechizos.service';

@Component({
  selector: 'app-hechizos',
  templateUrl: './hechizos.component.html',
  styleUrl: './hechizos.component.scss',
  standalone: false,
})
export class HechizosComponent implements OnInit {
  items: Hechizo[] = [];

  private readonly service = inject(HechizosService);

  ngOnInit(): void {
    this.service.getAllHechizos().subscribe((data) => (this.items = data));
  }
}
