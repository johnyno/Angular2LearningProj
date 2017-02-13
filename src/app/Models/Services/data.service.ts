///<reference path="../Interfaces/ServicesAbstractions.ts"/>
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
      return Promise.resolve(this.HeroesProvider.GetHeroes.then(heroes =>{
        if(!this.heroes)
          this.heroes = heroes;
        return this.heroes;
      }));
    }


  GetHeroAsync(id: number): Promise<Hero> {
    return  Promise.resolve(this.GetHeroesAsync()
      .then(heroes => heroes.find(hero => hero.id === id)));
  }


  UpdateHeroAsync(hero:Hero):Promise<Hero>{
    return  Promise.resolve(this.GetHeroesAsync()
      .then(heroes => {
        let foundHero:Hero = heroes.find(h => h.id === hero.id)[0];

        this.HeroesProvider.UpdateHero(hero);
      }));
  }


  CreateHeroAsync(name:string):Promise<Hero>{
    return  Promise.resolve(this.GetHeroesAsync()
      .then(heroes => {

       this.HeroesProvider.CreateHero(name)
         .then(
           hero=>this.heroes.push(hero));
      }));
  }

  DeleteHeroAsync(hero:Hero):Promise<void>{
    return  Promise.resolve(this.GetHeroesAsync()
      .then(heroes => {

        this.HeroesProvider.DeleteHero(hero)
          .then(() => {
            var index = this.heroes.indexOf(hero);
            this.heroes.splice(index, 1);
          })
          .catch((e) => console.error('Delete element error!', e.Message));
      })
    )};




}
