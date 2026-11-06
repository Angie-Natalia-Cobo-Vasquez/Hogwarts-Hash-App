import { Component, OnInit, inject } from '@angular/core';
import { Casa } from './models/casa.model';
import { CasasService } from './services/casas.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrl: './casas.component.scss',
  standalone: false,
})
export class CasasComponent implements OnInit {
  items: Casa[] = [];

  private readonly service = inject(CasasService);

  ngOnInit(): void {
    this.service.getAllCasas().subscribe((data) => (this.items = data));
  }
}
