import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsListService {

  constructor(private http: HttpClient) { }

  searchPlanets(searchText) {
    return this.http.get('https://swapi.co/api/planets/?search=' + searchText).pipe(map((res: any) => res.results));
  }
}
