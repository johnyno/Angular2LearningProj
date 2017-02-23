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




  private _heroes: Hero[];
  private _lastSavedHeroes:Hero[];

  constructor(private HeroesProvider: HeroesProviderAbs) {
    super();
  }


  async GetHeroesAsync(): Promise<Hero[]> {
    if (!this._heroes) {
      let res: Responce<Hero[]> = await this.HeroesProvider.GetHeroes();
      if (res.isSuccessed) {
        this._heroes = res.Model;
      }
      else{
        throw new Error(res.error);
      }
    }
    return this._heroes;
  }

  async GetLastSavedHeroes(): Promise<Hero[]> {
    if (!this._lastSavedHeroes) {
      let res: Responce<Hero[]> = await this.HeroesProvider.GetLastSavedHeroes();
      if (res.isSuccessed) {
        this._lastSavedHeroes = res.Model;
      }
      else{
        throw new Error(res.error);
      }
    }
    return this._lastSavedHeroes;
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
          this.UpdateLastSavedHeroes(res.Model);
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
        this._heroes.push(res.Model);
        this.UpdateLastSavedHeroes(res.Model);
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
      throw new Error("Delete response has error: " + res.error);
    else {
      var index = this._heroes.indexOf(hero);
      this._heroes.splice(index, 1);
    }
  }



  private async UpdateLastSavedHeroes(newItem:Hero)
  {
    await this.GetLastSavedHeroes();
    this._lastSavedHeroes.unshift(newItem)
      if(this._lastSavedHeroes.length > 5){
        this._lastSavedHeroes.splice(-1,1)
      }
  }

}
