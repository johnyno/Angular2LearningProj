import { DataServiceAbs } from '../Core/Models/Interfaces/ServicesAbstractions';
import { DataService } from '../Core/Models/Services/data.service';
import { AlertServiceAbs } from '../Core/Models/Interfaces/ServicesAbstractions';
import { AlertService } from '../Core/Models/Services/alert.service';
import { LoginServiceAbs } from '../Core/Models/Interfaces/ServicesAbstractions';
import { LoginService } from '../Core/Models/Services/login.service';


import { LoginProviderAbs } from '../Core/Models/Interfaces/ProvidersAbstractions';
import { LoginProviderMock } from '../Core/Models/Services/Providers/Mock/login.provider.mock';

import { UsersProviderAbs } from '../Core/Models/Interfaces/ProvidersAbstractions';
import {UsersProviderMock  } from '../Core/Models/Services/Providers/Mock/users.provider.mock';

import { NgModule,Optional, SkipSelf }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule }    from '@angular/http';

import {AuthGuard} from "./Models/Services/Guards/auth.guard";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule
  ],

  exports: [ BrowserModule,RouterModule,HttpModule,FormsModule ],

  providers: [{provide:DataServiceAbs, useClass:DataService},
              {provide:AlertServiceAbs, useClass:AlertService},
              {provide:LoginServiceAbs, useClass:LoginService},
              {provide:LoginProviderAbs, useClass:LoginProviderMock},
              {provide:UsersProviderAbs, useClass:UsersProviderMock},
              AuthGuard,
    ],

})


export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }


}
