import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [StarshipListComponent],
  declarations: [StarshipListComponent, StarshipDetailComponent]
})
export class StarshipModule { }
