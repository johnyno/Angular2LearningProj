import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginServiceAbs} from "../../Interfaces/ServicesAbstractions";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginServiceAbs) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if (this.loginService.isLoggedIn) {
      // logged in so return true
         return true;
       }

      // not logged in so redirect to login page with the return url
       this.router.navigate(['/login']);
      return false;
    }

}
