import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {IHeroesProvider} from "../Interfaces/IHeroesProvider";
import {HeroesProviderMock} from "./Mock/mock-heroes";

@Injectable()
export class DataService {

  private HeroesProvider:IHeroesProvider;
  private heroes:Hero[];


  constructor()
  {
    console.log("DataService constructor");
    this.HeroesProvider = new HeroesProviderMock();
  }



    getHeroes():Promise<Hero[]> {
      return Promise.resolve(this.HeroesProvider.GetHeroesAsync.then(heroes =>{
        if(this.heroes === undefined)
          this.heroes = heroes;
        return this.heroes;
      }));
    }


    getHero(id: number): Promise<Hero> {
    return  Promise.resolve(this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id)));
  }

}
