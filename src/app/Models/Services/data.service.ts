import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {GetHeroes, GetHeroesAsync} from "../Services/Mock/mock-heroes";

@Injectable()
export class DataService {

    private heroes:Hero[];


    getHeroes():Promise<Hero[]> {
      return Promise.resolve(GetHeroesAsync()).then();
    }


    getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
