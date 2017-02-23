import { Hero } from '../hero';
import { Alert } from '../Inra/alert';
import {Observable} from "rxjs";

export abstract class DataServiceAbs {

  abstract GetHeroesAsync(): Promise<Hero[]>;

  abstract GetLastSavedHeroes():Promise<Hero[]>;

  abstract GetHeroAsync(id: number): Promise<Hero>;

  abstract UpdateHeroAsync(hero: Hero): Promise<Hero>;

  abstract CreateAndAddHeroAsync(name:string):Promise<Hero>;

  abstract DeleteHeroAsync(hero: Hero):Promise<void>;
}

export abstract class HeroSearchServiceAbs{
  abstract Search(text:string);
}


export abstract class AlertServiceAbs{
  abstract getAlert():Observable<Alert>;
  abstract reportError(message:string, keepAfterNavigationChange:boolean):void;
  abstract reportSuccess(message:string, keepAfterNavigationChange:boolean):void;
}

export abstract class LoginServiceAbs{
  abstract login(username: string, password: string);
  abstract logout();
}
