import { Injectable } from '@angular/core';

import {Observable} from "rxjs";

@Injectable()
export abstract class GenericProvider<T>{

  abstract getAll():Observable<T>;

  abstract getById(id: number):Observable<T>

  abstract create(name:string, password:string):Observable<T>

  abstract update(user: T):Observable<T>

  abstract delete(id: number);

}
