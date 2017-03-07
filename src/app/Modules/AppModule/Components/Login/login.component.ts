import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertServiceAbs, LoginServiceAbs } from '../../../Core/Models/Interfaces/ServicesAbstractions';
import {User} from "../../../Core/Models/user";
import {LoginService} from "../../../Core/Models/Services/login.service";

@Component({
  selector:"login",
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public username:string;
  public password:string;

  loading = false;
  returnUrl: string;

  // private loginService: LoginServiceAbs,
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertServiceAbs,
    private loginService:LoginServiceAbs) {
  }

  ngOnInit() {
    //reset login status
    if(this.loginService.isLoggedIn)
      this.router.navigate(['home']);

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login():void {
    this.loading = true;
    this.loginService.login(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.reportError(error, false);
          this.loading = false;
        }
        ,()=>{
          this.loading = false;});
  }
}
