import { InMemoryDbService } from 'angular2-in-memory-web-api';
import {Injectable} from "@angular/core";
import { Hero } from '../../../hero';
import { HeroesProviderAbs } from '../../../Interfaces/ProvidersAbstractions';
import {forEach} from "@angular/router/src/utils/collection";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice22'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }
}


@Injectable()
export class HeroesProviderHTTP extends HeroesProviderAbs {

  GetLastSavedHeroes(): Promise<Hero[]> {
    return undefined;
  }
  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
    super();
  }

  GetHeroes(): Promise<Hero[]> {
    return null;
   // return new
  //  this.http.get(this.heroesUrl)
  //    .toPromise()
  //    .then(response => response.json().data as Hero[])
  //    .catch(this.handleError);
  }

  UpdateHero(hero:Hero):Promise<Hero>{
    return new Promise(resolve=>{
      const url = `${this.heroesUrl}/${hero.id}`;
      return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    });
  }

  CreateHero(name:string):Promise<Hero> {
    return new Promise(resolve => {
      return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    });
  }

  DeleteHero(hero:Hero):Promise<Hero> {
    return new Promise(resolve => {

    //todo: to develop
    });
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
