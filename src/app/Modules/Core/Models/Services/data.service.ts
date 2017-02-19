///<reference path="../Interfaces/ServicesAbstractions.ts"/>
import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {Responce} from "../Inra/responce";
import {HeroesProviderAbs} from "../Interfaces/ProvidersAbstractions";
import {HeroesProviderMock} from "./Providers/Mock/heroes.provider.mock";
import { DataServiceAbs } from '../Interfaces/ServicesAbstractions';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService extends DataServiceAbs {

  private heroes: Hero[];


  constructor(private HeroesProvider: HeroesProviderAbs) {
    super();
  }


  async GetHeroesAsync(): Promise<Hero[]> {
    if (!this.heroes) {
      let res: Responce<Hero[]> = await this.HeroesProvider.GetHeroes();
      if (res.isSuccessed) {
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

      let withTheSameName:Hero = heroes.find(h => h.id != hero.id && h.name == hero.name);
      if(!withTheSameName) {
        let res:Responce<Hero> = await this.HeroesProvider.UpdateHero(hero);
        if(res.isSuccessed){
          //todo: heroToUpdate = res.Model;
          return res.Model;
        }
       throw new Error('Update responce has error: '+ res.error);
      }
      else
        throw new Error('Hero with the same name exists');
    }



  async CreateAndAddHeroAsync(name: string): Promise<Hero> {
      let heroes = await this.GetHeroesAsync();

    let hero = heroes.find(hero => hero.name === name);
    if(hero)
      throw new Error('Hero with the same name already exists.');
    else{
      let res:Responce<Hero> = await this.HeroesProvider.CreateHero(name);
      if(res.isSuccessed){
        this.heroes.push(res.Model);
        return res.Model;
      }
      else{
        throw new Error('Create new hero response has error: '+ res.error);
      }
    }


  }

  async DeleteHeroAsync(hero: Hero): Promise<void> {
    let res:Responce<boolean> = await this.HeroesProvider.DeleteHero(hero);

    if(!res.isSuccessed)
      throw new Error('Delete responce has error: '+ res.error);
    else {
      var index = this.heroes.indexOf(hero);
      this.heroes.splice(index, 1);
    }
  }


}
