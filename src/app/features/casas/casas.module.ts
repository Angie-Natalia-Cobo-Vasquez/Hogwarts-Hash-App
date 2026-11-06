import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CasasRoutingModule } from './casas-routing.module';
import { CasasComponent } from './casas.component';

@NgModule({
  declarations: [CasasComponent],
  imports: [CommonModule, CasasRoutingModule],
})
export class CasasModule {}
