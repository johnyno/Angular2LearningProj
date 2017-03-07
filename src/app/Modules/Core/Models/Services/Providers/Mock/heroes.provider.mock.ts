import {Injectable} from "@angular/core";
import { Hero } from '../../../hero';
import { JResponse } from '../../../Inra/responce';
import { HeroesProviderAbs } from '../../../Interfaces/ProvidersAbstractions';
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class HeroesProviderMock extends HeroesProviderAbs{


  private _maxId:number;

  GetLastSavedHeroes(): Promise<JResponse<Hero[]>> {
    return new Promise(resolve=>{setTimeout(()=>resolve(
      new JResponse<Hero[]>(true, this.GetLastSavedHeroesInit())
    ), 2000)})};




  GetHeroes(): Promise<JResponse<Hero[]>> {
    return new Promise(resolve => {
      setTimeout(() => resolve(
        new JResponse<Hero[]>(true,this.GetHeroesInt())
      ), 2000)
    });
  }


  UpdateHero(hero:Hero):Promise<JResponse<Hero>>{
    return new Promise(resolve=>{
      setTimeout(() =>
        resolve(
        new JResponse<Hero>(true,hero)
      ), 2000);
    });
  }

  CreateHero(name:string):Promise<JResponse<Hero>>{
    return new Promise<JResponse<Hero>>(resolve=>{
      setTimeout(() => {
          resolve(new JResponse<Hero>(true, new Hero(++this._maxId, name)))

        }
        , 2000);
    });
  }


  DeleteHero(hero:Hero):Promise<JResponse<boolean>> {
    return new Promise<JResponse<boolean>>(resolve => {
      setTimeout(() => {
        if(!hero.isFavorite)
          resolve(new JResponse<boolean>(true, true))
        else
          resolve(new JResponse<boolean>(false, false,"Favorite Hero can't be removed"));
      }, 2000);

    });
  }

  private GetLastSavedHeroesInit(): Hero[] {
    let ret:Hero[] = [];
    let heroesInit:Hero[] = this.GetHeroesInt();
    if(heroesInit.length > 3 ){
        ret.push(heroesInit[0]);
        ret.push(heroesInit[2]);
    }
    return ret;
  }

  private GetHeroesInt(): Hero[] {

    let heroes =  [
      new Hero(1, 'Mr. Nice', true),
      new Hero(2, 'Narco'),
      new Hero(3, 'Bombasto'),
      new Hero(4, 'Celeritas'),
      new Hero(5, 'Magneta', true),
      new Hero(6, 'RubberMan'),
      new Hero(7, 'Dynama'),
      new Hero(8, 'Dr IQ'),
      new Hero(9, 'Magma'),
      new Hero(10, 'Tornado', true)
    ];

    if(!this._maxId)
      this._maxId = heroes.length;

    return heroes;
  }


}
