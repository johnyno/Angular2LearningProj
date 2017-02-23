
import { NgModule } from '@angular/core';

import{ HeroesModule }      from '../HeroesManagementModule/heroes.module';
import{ UsersModule }      from '../UsersManagementModule/users.module';
import {CoreModule} from "../Core/core.module";
import {AlertComponent} from "./Components/Alert/alert.component";
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../Core/Models/Services/Providers/Http/heroes.provider.http';


import { AppComponent } from './Components/app.component';

import { AppRoutingModule }     from './app.routing.module';



@NgModule({
  imports: [
    HeroesModule,
    UsersModule,
    CoreModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    AlertComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
