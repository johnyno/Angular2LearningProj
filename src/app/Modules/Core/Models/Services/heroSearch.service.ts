import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Hero }           from '../hero';
import {DataServiceAbs,HeroSearchServiceAbs} from "../Interfaces/ServicesAbstractions";




@Injectable()
export class HeroSearchService extends HeroSearchServiceAbs{
  constructor(private dataService:DataServiceAbs) {
    super();
  }


  Search(term: string): Observable<Hero[]> {
    return Observable.fromPromise(
    this.dataService.GetHeroesAsync()
      .then(heroes=>
        heroes.filter(h=>h.name.toUpperCase().includes(term.toUpperCase())))
    );
  }
}
