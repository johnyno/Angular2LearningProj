import { Hero } from '../hero';

export abstract class HeroesProviderAbs{
  abstract GetHeroes:Promise<Hero[]>;
  abstract UpdateHero(hero:Hero):Promise<Hero>
  abstract CreateHero(name:string):Promise<Hero>
  abstract DeleteHero(hero:Hero):Promise<void>
}
