import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {HeroesProviderAbs} from "../Interfaces/ProvidersAbstractions";
import {HeroesProviderMock} from "./Providers/Mock/heroes.provider.mock";
import { DataServiceAbs } from '../Interfaces/ServicesAbstractions';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService extends DataServiceAbs{

 // private HeroesProvider:IHeroesProvider;
  private heroes:Hero[];


  constructor(private HeroesProvider:HeroesProviderAbs)
  {
    super();

    console.log("DataService constructor");
  }



  GetHeroesAsync():Promise<Hero[]> {
      return Promise.resolve(this.HeroesProvider.GetHeroesAsync.then(heroes =>{
        if(this.heroes === undefined)
          this.heroes = heroes;
        return this.heroes;
      }));
    }


  GetHeroAsync(id: number): Promise<Hero> {
    return  Promise.resolve(this.GetHeroesAsync()
      .then(heroes => heroes.find(hero => hero.id === id)));
  }

}
