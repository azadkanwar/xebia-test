import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { PlanetsListService } from './planets-list.service';
@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  withRefresh = false;
  planetsList$: Observable<any>;
  private searchText$ = new Subject<string>();

  search(searchText: string) {
    this.searchText$.next(searchText);
  }


  constructor(private searchService: PlanetsListService) { }

  ngOnInit() {
    this.planetsList$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(packageName =>
        this.searchService.searchPlanets(packageName))
    );
  }

}
