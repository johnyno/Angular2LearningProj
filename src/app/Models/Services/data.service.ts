///<reference path="../Interfaces/ServicesAbstractions.ts"/>
import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {Responce} from "../../ErrorHandling/responce";
import {HeroesProviderAbs} from "../Interfaces/ProvidersAbstractions";
import {HeroesProviderMock} from "./Providers/Mock/heroes.provider.mock";
import { DataServiceAbs } from '../Interfaces/ServicesAbstractions';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService extends DataServiceAbs {

  private heroes: Hero[];


  constructor(private HeroesProvider: HeroesProviderAbs) {
    super();
    //console.log("DataService constructor");
  }


  async GetHeroesAsync(): Promise<Hero[]> {
    if (!this.heroes) {
      let res: Responce<Hero[]> = await this.HeroesProvider.GetHeroes();
      if (res.IsSuccessed) {
        this.heroes = res.Model;
      }
      else{
        throw new Error(res.error);
      }
    }
    return this.heroes;
  }


  async GetHeroAsync(id: number): Promise<Hero> {
      let heroes = await this.GetHeroesAsync();
      let hero = heroes.find(hero => hero.id === id);
      if(hero)
        return hero;
      throw new Error('Hero with id ' + id +'is not found');
  }


  async UpdateHeroAsync(hero: Hero): Promise<Hero> {
      let heroes = await this.GetHeroesAsync();

      let heroToUpdate = heroes.find(h => h.id === hero.id)[0];
      if(heroToUpdate) {
        let res:Responce<Hero> = await this.HeroesProvider.UpdateHero(hero);
        if(res.IsSuccessed){
          //todo: heroToUpdate = res.Model;
          return heroToUpdate;
        }
       throw new Error('Update responce has error: '+ res.error);
      }
    }



  async CreateAndAddHeroAsync(name: string): Promise<Hero> {
      let res:Responce<Hero> = await this.HeroesProvider.CreateHero(name);
      if(res.IsSuccessed){
        this.heroes.push(res.Model);
        return res.Model;
      }
      else{
        throw new Error('Create new hero responce has error: '+ res.error);
      }
  }

  async DeleteHeroAsync(hero: Hero): Promise<void> {
    let res:Responce<boolean> = await this.HeroesProvider.DeleteHero(hero);

    if(!res.IsSuccessed)
      throw new Error('Delete responce has error: '+ res.error);
    else {
      var index = this.heroes.indexOf(hero);
      this.heroes.splice(index, 1);
    }
  }


}
