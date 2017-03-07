import { Hero } from '../hero';
import { User } from '../user';
import {JResponse} from "../Inra/responce"
import {GenericProvider} from "../Services/Providers/generic.provider";
import {Observable} from "rxjs";

export abstract class HeroesProviderAbs{
  abstract async GetHeroes():Promise<JResponse<Hero[]>>;
  abstract async GetLastSavedHeroes():Promise<JResponse<Hero[]>>
  abstract async UpdateHero(hero:Hero):Promise<JResponse<Hero>>;
  abstract async CreateHero(name:string):Promise<JResponse<Hero>>;
  abstract async DeleteHero(hero:Hero):Promise<JResponse<boolean>>;
}


export abstract class UsersProviderAbs extends GenericProvider<User>{}

export abstract class LoginProviderAbs{
  abstract login(username:string, password:string):Observable<User>;
  abstract logout():Observable<void>;
}
