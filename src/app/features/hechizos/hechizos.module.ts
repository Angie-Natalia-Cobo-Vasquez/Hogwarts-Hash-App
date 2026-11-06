import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HechizosRoutingModule } from './hechizos-routing.module';
import { HechizosComponent } from './hechizos.component';

@NgModule({
  declarations: [HechizosComponent],
  imports: [CommonModule, HechizosRoutingModule],
})
export class HechizosModule {}
