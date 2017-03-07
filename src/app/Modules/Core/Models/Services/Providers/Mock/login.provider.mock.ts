import { Injectable } from '@angular/core';

import { User } from '../../../user';
import {LoginProviderAbs, UsersProviderAbs} from "../../../Interfaces/ProvidersAbstractions";
import {Observable} from "rxjs";

@Injectable()
export class LoginProviderMock extends LoginProviderAbs{

  constructor(public usersProvider:UsersProviderAbs){
    super();}

  login(username: string, password: string): Observable<User> {

    let source = Observable.create(observer=>{
        this.usersProvider.getAll().filter(u=>u.username == username)
          .subscribe(user=>{
            if(!user)
              observer.error(new Error("The user doesn't exist"));
            else {
              observer.next(user);
              observer.complete();
            }
          });

    }).delay(1000);

    return source;
  }

  logout(): Observable<void> {
    let source = Observable.create(observer=>{
          observer.next();
          observer.complete();
      }).delay(1000);

    return source;
  }




}
