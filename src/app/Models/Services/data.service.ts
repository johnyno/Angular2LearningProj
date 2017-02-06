import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {GetHeroes, GetHeroesAsync} from "../Services/Mock/mock-heroes";

@Injectable()
export class DataService {

    private heroes:Hero[];


    getHeroes():Promise<Hero[]> {
      return Promise.resolve(GetHeroesAsync.then(heroes =>{
        if(this.heroes == null)
          this.heroes = heroes;
        return this.heroes;
      }));
    }


    getHero(id: number): Promise<Hero> {
    return  Promise.resolve(this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id)));
  }

}
