import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../../../user';
import { UsersProviderAbs} from '../../../Interfaces/ProvidersAbstractions';
import {Observable, Observer} from "rxjs";

@Injectable()
export class UsersProviderMock extends UsersProviderAbs{

  private _maxId:number;

  getAll():Observable<User> {
    let source = Observable.create(observer=>{
      let id = setTimeout(()=>{
      let users = this.GetUsersInt().forEach(u=> observer.next(u));

      observer.complete();

      }, 1000);
    });
    return source;
  }

  getById(id: number):Observable<User> {
    return undefined
  }

  create(username:string, password:string):Observable<User> {
    return undefined
  }

  update(user: User):Observable<User> {
    return undefined
  }

  delete(id: number) {
    return undefined
  }

  // private helper methods
  private GetUsersInt(): User[] {

    let heroes =  [
      new User(1, 'admin', 'Johny', 'Sema'),
      new User(2, 'p', 'Perec', 'Pen'),

    ];

    if(!this._maxId)
      this._maxId = heroes.length;

    return heroes;
  }

}
