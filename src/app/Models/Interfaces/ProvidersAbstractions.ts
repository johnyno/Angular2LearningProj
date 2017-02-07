import { Hero } from '../hero';

export abstract class HeroesProviderAbs{
  abstract GetHeroesAsync:Promise<Hero[]>;


}
