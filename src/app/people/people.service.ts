import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl: string = environment.baseUrl + 'people';

constructor(private http: HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.apiUrl);
  }

}
