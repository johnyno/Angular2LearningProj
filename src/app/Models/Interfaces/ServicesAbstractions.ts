import { Hero } from '../hero';

export abstract class DataServiceAbs{

  abstract GetHeroesAsync():Promise<Hero[]>;

  abstract GetHeroAsync(id: number): Promise<Hero>;
}
