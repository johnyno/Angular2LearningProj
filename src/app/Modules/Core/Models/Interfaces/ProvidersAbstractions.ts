import { Hero } from '../hero';
import {Responce} from "../Inra/responce"

export abstract class HeroesProviderAbs{
  abstract async GetHeroes():Promise<Responce<Hero[]>>;
  abstract async  UpdateHero(hero:Hero):Promise<Responce<Hero>>;
  abstract async CreateHero(name:string):Promise<Responce<Hero>>;
  abstract async DeleteHero(hero:Hero):Promise<Responce<boolean>>;
}
