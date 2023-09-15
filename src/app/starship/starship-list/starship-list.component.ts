import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship';
import { StarshipService } from '../starship.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {

  starships: Array<Starship> = [];

  constructor(private starshipService: StarshipService) { }

  getStarships(): void {
    this.starshipService.getStarships().subscribe((data: any) => {
      // Se mapean los resultados a objetos tipo Starship
      this.starships = data.results.map((result: any) => ({
        name: result.name,
        model: result.model,
        
        // Mapea otros campos según tu clase Starship
      }));
    });
  }

  getNextStarships(): void {
    this.starshipService.getNextStarships().subscribe((data: any) => {
      // Se mapean los resultados a objetos tipo Starship
      this.starships = data.results.map((result: any) => ({
        name: result.name,
        model: result.model,
        
        // Mapea otros campos según tu clase Starship
      }));
    });
  }

  ngOnInit() {
    this.getStarships();
  }

}
