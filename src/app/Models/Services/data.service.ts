import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {GetHeroes, GetHeroesAsync} from "../Services/Mock/mock-heroes";

@Injectable()
export class DataService {

    getHeroes():Promise<Hero[]>
    {
      return Promise.resolve(GetHeroesAsync());
    }
}
