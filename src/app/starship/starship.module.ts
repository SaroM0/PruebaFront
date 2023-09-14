import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipListComponent } from './starship-list/starship-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [StarshipListComponent],
  declarations: [StarshipListComponent]
})
export class StarshipModule { }
