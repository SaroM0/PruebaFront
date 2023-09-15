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

  selectedStarship!: Starship;
  selected = false;

  constructor(private starshipService: StarshipService) { }

  onSelected(starship: Starship): void {
    this.selected = true;
    this.selectedStarship = starship;
  }

  getStarships(): void {
    this.starshipService.getStarships().subscribe((data: any) => {
      // Se mapean los resultados a objetos tipo Starship
      this.starships = data.results.map((result: any) => ({
        name: result.name,
        model: result.model,
        max_atmosphering_speed:result.max_atmosphering_speed,
        cost_in_credits:result.cost_in_credits,
      }));
    });
  }

  getNextStarships(): void {
    this.starshipService.getNextStarships().subscribe((data: any) => {
      // Se mapean los resultados a objetos tipo Starship
      this.starships = data.results.map((result: any) => ({
        name: result.name,
        model: result.model,
        max_atmosphering_speed:result.max_atmosphering_speed,
        cost_in_credits:result.cost_in_credits,
        
        // Mapea otros campos según tu clase Starship
      }));
    });
  }

  ngOnInit() {
    this.getStarships();
  }

}
