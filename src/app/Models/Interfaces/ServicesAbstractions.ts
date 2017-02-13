import { Hero } from '../hero';

export abstract class DataServiceAbs {

  abstract GetHeroesAsync(): Promise<Hero[]>;

  abstract GetHeroAsync(id: number): Promise<Hero>;

  abstract  UpdateHeroAsync(hero: Hero): Promise<Hero>;

  abstract CreateHeroAsync(name:string):Promise<Hero>;

  abstract DeleteHeroAsync(hero: Hero):Promise<void>;
}

export abstract class HeroSearchServiceAbs{
  abstract Search(text:string);
}
