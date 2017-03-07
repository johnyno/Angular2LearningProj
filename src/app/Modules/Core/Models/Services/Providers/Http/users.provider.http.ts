import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../../../user';
import { UsersProviderAbs} from '../../../Interfaces/ProvidersAbstractions';
import {Observable} from "rxjs";

@Injectable()
export class UserProviderHTTP  extends UsersProviderAbs{
  constructor(private http: Http) { super();}

  getAll():Observable<User> {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number):Observable<User> {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(username:string, password:string):Observable<User> {
    return this.http.post('/api/users', JSON.stringify({ username: username, password: password }), this.jwt()).map((response: Response) => response.json());
  }

  update(user: User):Observable<User> {
    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
