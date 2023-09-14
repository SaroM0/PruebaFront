import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Starship } from './starship';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

  getStarships(): Observable<Starship[]> {
    return this.http.get<Starship[]>(this.apiUrl);
  }

  getNextStarships(url: string): Observable<any> {
    this.apiUrl=this.apiUrl+"?page=2"
    return this.http.get<Starship[]>(this.apiUrl);
  }

}
