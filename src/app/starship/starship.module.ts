import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';

@NgModule({
  // Se importa el módulo CommonModule con directivas y utilidades comunes
  imports: [
    CommonModule
  ],
  // Se exporta el componente de lista de naves para su usarlo afuera
  exports: [StarshipListComponent],
  // Se declaran los componentes de este modulo
  declarations: [StarshipListComponent, StarshipDetailComponent]
})
export class StarshipModule { }
