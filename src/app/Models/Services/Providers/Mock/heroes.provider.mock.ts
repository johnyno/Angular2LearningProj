import {Injectable} from "@angular/core";
import { Hero } from '../../../hero';
import { HeroesProviderAbs } from '../../../Interfaces/ProvidersAbstractions';
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class HeroesProviderMock extends HeroesProviderAbs{

  private maxId:number;

  GetHeroes: Promise<Hero[]> =
    new Promise(resolve => {
         setTimeout(() => resolve(this.GetHeroesInt()), 2000)
    });



  UpdateHero(hero:Hero):Promise<Hero>{
    return new Promise(resolve=>{
      setTimeout(() => resolve(hero), 2000);
    });
  }

  CreateHero(name:string):Promise<Hero>{
    return new Promise(resolve=>{

      let ret;

      setTimeout(() =>  ret = resolve(new Hero(++this.maxId, name, true)), 2000);

      return ret;
    });
  }


  DeleteHero(hero:Hero):Promise<void> {
    return new Promise(resolve => {

       let ret;

       setTimeout(() =>  ret = resolve(()=>{
         if(hero.isFavorite)
           throw new Error('Favorite item cant be deleted');
       }), 2000);

       return ret;



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
