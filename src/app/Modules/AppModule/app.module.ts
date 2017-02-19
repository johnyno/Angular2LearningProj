
import { NgModule } from '@angular/core';

import{ HeroesModule }      from '../HeroesManagementModule/heroes.module';
import{ UsersModule }      from '../UsersManagementModule/users.module';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../Core/Models/Services/Providers/Http/heroes.provider.http';


import { AppComponent } from './Components/app.component';

import { AppRoutingModule }     from './app.routing.module';
import {CoreModule} from "../Core/core.module";


@NgModule({
  imports: [

    HeroesModule,
    UsersModule,
    CoreModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
