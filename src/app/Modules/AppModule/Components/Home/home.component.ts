import { Component, OnInit } from '@angular/core';
import {LoginServiceAbs, AlertServiceAbs} from "../../../Core/Models/Interfaces/ServicesAbstractions";
import {Router} from "@angular/router";
import {User} from "../../../Core/Models/user";


@Component({
  selector: "home",
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{

  public title:string = 'Home Component';
  public userLoggedIn:User;

constructor(private loginService:LoginServiceAbs, private router:Router, private alertService:AlertServiceAbs){
}


  ngOnInit(): void {
    this.userLoggedIn = this.loginService.userLoggedIn;
  }

  logout():void {

    this.loginService.logout()
      .subscribe(
        data => {

        },
        error => {
          this.alertService.reportError(error, false);

        }
        ,()=>{
          this.router.navigate(['login']);});
  }

}
