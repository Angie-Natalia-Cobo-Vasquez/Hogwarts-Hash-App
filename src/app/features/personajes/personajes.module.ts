import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';

@NgModule({
  declarations: [PersonajesComponent],
  imports: [CommonModule, PersonajesRoutingModule],
})
export class PersonajesModule {}
