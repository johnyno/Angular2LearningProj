import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { LoginServiceAbs } from '../Interfaces/ServicesAbstractions';
import {LoginProviderAbs} from "../Interfaces/ProvidersAbstractions";
import {User} from "../user";
import {JResponse} from "../Inra/responce";


@Injectable()
export class LoginService extends LoginServiceAbs{


  private _userloggedIn:User;
  constructor(private loginProvider:LoginProviderAbs) {
    super();
  }

  login(username: string, password: string):Observable<User> {
    return this.loginProvider.login(username, password)
      .map((user) => {
        //localStorage.setItem('currentUser', JSON.stringify(response));
        this._userloggedIn = user;
        return user;
      });
    };


  logout():Observable<void> {
    return this.loginProvider.logout()
      .map((response) => {
       // localStorage.removeItem('currentUser');
        this._userloggedIn = null;
      });
  }


  get isLoggedIn(): boolean{
  //  let res =  localStorage.getItem('currentUser');
  //  let r = JSON.parse(res);
    return this._userloggedIn != null;
  };

  get userLoggedIn(): User {
    return this._userloggedIn;
  }


}
