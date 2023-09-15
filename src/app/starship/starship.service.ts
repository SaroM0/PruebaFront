import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Se importan configuraciones de entorno
import { environment } from 'src/environments/environment';
// Se importa la clase Starship
import { Starship } from './starship';
// Se importa Observable para manipulr datos asíncronos
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  // Se define la URL de la API a la que se harán las solicitudes
  private apiUrl: string = environment.baseUrl + "starships";

// Constructor de la clase con el servicio HttpClient
constructor(private http: HttpClient) { }

  // Metodo para obtener las naves como un array Starship
  getStarships(): Observable<Starship[]> {
    return this.http.get<Starship[]>(this.apiUrl);
  }

  // Metodo para obtener las siguientes naves
  getNextStarships(): Observable<any> {
    this.apiUrl=this.apiUrl+"?page=2"
    return this.http.get<Starship[]>(this.apiUrl);
  }
}
