import { Hero } from '../hero';
import { Alert } from '../Inra/alert';
import {Observable} from "rxjs";
import {User} from "../user";
import {OnInit} from "@angular/core";

export abstract class DataServiceAbs {

  abstract GetHeroesAsync(): Promise<Hero[]>;

  abstract GetLastSavedHeroes():Promise<Hero[]>;

  abstract GetHeroAsync(id: number): Promise<Hero>;

  abstract UpdateHeroAsync(hero: Hero): Promise<Hero>;

  abstract CreateAndAddHeroAsync(name:string):Promise<Hero>;

  abstract DeleteHeroAsync(hero: Hero):Promise<void>;




  abstract GeUsersAsync(): Promise<Hero[]>;

  abstract GetUserAsync(id: number): Promise<Hero>;

  abstract UpdateUserAsync(hero: Hero): Promise<Hero>;

  abstract CreateAndAddUserAsync(name:string):Observable<Hero>;

  abstract DeleteUserAsync(hero: Hero):Promise<void>;

}


export abstract class SearchServiceAbs{
  abstract Search(text:string);
}



export abstract class AlertServiceAbs extends OnInit{
  abstract getAlert():Observable<Alert>;
  abstract reportError(message:string, keepAfterNavigationChange:boolean):void;
  abstract reportSuccess(message:string, keepAfterNavigationChange:boolean):void;
}

export abstract class LoginServiceAbs{
  abstract get userLoggedIn():User;
  abstract login(username: string, password: string):Observable<User>;
  abstract logout():Observable<void>;
  abstract get isLoggedIn():boolean;
}
