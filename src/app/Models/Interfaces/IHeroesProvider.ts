import { Hero } from '../hero';

export interface IHeroesProvider{
  GetHeroesAsync:Promise<Hero[]>;


}
