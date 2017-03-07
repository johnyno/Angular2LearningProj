import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../../../user';
import { GenericProvider} from '../../Providers/generic.provider';
import {Observable, Subject} from "rxjs";
import {LoginServiceAbs} from "../../../Interfaces/ServicesAbstractions";
import {JResponse} from "../../../Inra/responce";
import {LoginProviderAbs} from "../../../Interfaces/ProvidersAbstractions";



export class LoginProviderHTTP extends LoginProviderAbs{

  constructor(private http: Http) {
    super();
  }

  login(username: string, password: string):Observable<User> {
    return undefined;
  }

  logout():Observable<boolean> {
    // remove user from local storage to log user out
       return undefined;
  }

}
