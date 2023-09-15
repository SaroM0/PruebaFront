import { Component, OnInit } from '@angular/core';
// Se importa la clase Starship para trabajar con los objetos tipo Starship
import { Starship } from '../starship';
// Se importa el servicio StarshipService para obtener los datos
import { StarshipService } from '../starship.service';

@Component({
  // Selector del componente
  selector: 'app-starship-list',
  // Plantilla HTML del componente
  templateUrl: './starship-list.component.html',
  // estilos CSS del componente
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {

  // Arreglo donde se almacenaran las naves
  starships: Array<Starship> = [];

  // Variable para almacenar la nave seleccionada
  selectedStarship!: Starship;
  // Indicador si se ha seleccionado una nave
  selected = false;

  constructor(private starshipService: StarshipService) { }

  // metodo para manejar la seleccon de una nave
  onSelected(starship: Starship): void {
    this.selected = true;
    this.selectedStarship = starship;
  }

  // Metodo para obtener las naves iniciales
  getStarships(): void {
    this.starshipService.getStarships().subscribe((data: any) => {
      this.starships = data.results.map((result: any) => ({
        name: result.name,
        model: result.model,
        max_atmosphering_speed:result.max_atmosphering_speed,
        cost_in_credits:result.cost_in_credits,
        pilots:result.pilots,
      }));
    });
  }

  // Método para obtener las proximas naves
  getNextStarships(): void {
    this.starshipService.getNextStarships().subscribe((data: any) => {
      this.starships = data.results.map((result: any) => ({
        name: result.name,
        model: result.model,
        max_atmosphering_speed:result.max_atmosphering_speed,
        cost_in_credits:result.cost_in_credits,
        pilots:result.pilots,
      }));
    });
  }
  // Metodo que se ejecuta al inicializar el componente
  ngOnInit() {
    // se llama al metodo para obtener las naves al cargar el componente
    this.getStarships();
  }

}
