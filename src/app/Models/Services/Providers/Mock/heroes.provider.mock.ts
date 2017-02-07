import {Injectable} from "@angular/core";
import { Hero } from '../../../hero';
import { HeroesProviderAbs } from '../../../Interfaces/ProvidersAbstractions';
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class HeroesProviderMock extends HeroesProviderAbs{


  GetHeroesAsync: Promise<Hero[]> =
    new Promise(resolve => {
      console.log("GetHeroesAsync mock")
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.GetHeroes()), 2000);
    });


  private GetHeroes(): Hero[] {

    return [
      new Hero(11, 'Mr. Nice', true),
      new Hero(12, 'Narco'),
      new Hero(13, 'Bombasto'),
      new Hero(14, 'Celeritas'),
      new Hero(15, 'Magneta', true),
      new Hero(16, 'RubberMan'),
      new Hero(17, 'Dynama'),
      new Hero(18, 'Dr IQ'),
      new Hero(19, 'Magma'),
      new Hero(20, 'Tornado', true)
    ];
  }

}
