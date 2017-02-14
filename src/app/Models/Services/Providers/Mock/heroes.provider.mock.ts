import {Injectable} from "@angular/core";
import { Hero } from '../../../hero';
import { Responce } from '../../../../ErrorHandling/responce';
import { HeroesProviderAbs } from '../../../Interfaces/ProvidersAbstractions';
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class HeroesProviderMock extends HeroesProviderAbs{

  private maxId:number;

  GetHeroes(): Promise<Responce<Hero[]>> {
    return new Promise(resolve => {
      setTimeout(() => resolve(
        new Responce<Hero[]>(true,this.GetHeroesInt())
      ), 2000)
    });
  }


  UpdateHero(hero:Hero):Promise<Responce<Hero>>{
    return new Promise(resolve=>{
      setTimeout(() => resolve(
        new Responce<Hero>(true,hero)
      ), 2000);
    });
  }

  CreateHero(name:string):Promise<Responce<Hero>>{
    return new Promise<Responce<Hero>>(resolve=>{
      setTimeout(() => resolve(
        new Responce<Hero>(true,new Hero(++this.maxId, name))
      ), 2000);
    });
  }


  DeleteHero(hero:Hero):Promise<Responce<boolean>> {
    return new Promise<Responce<boolean>>(resolve => {
      setTimeout(() => resolve(
        // if(hero.isFavorite)
        new Responce<boolean>(true, true)

      ), 2000);
    });
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

    if(!this.maxId)
      this.maxId = heroes.length;

    return heroes;
  }


}
