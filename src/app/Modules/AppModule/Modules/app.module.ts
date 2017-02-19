import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import{ HeroesModule }      from '../../../Modules/HeroesManagementModule/Modules/heroes.module';
import{ UsersModule }      from '../../../Modules/UsersManagementModule/Modules/users.module';
import{ SharedModule }      from '../../../Modules/Shared/Modules/shared.module';
import { RouterModule } from '@angular/router'


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../../../Models/Services/Providers/Http/heroes.provider.http';


import { AppComponent } from '../Components/app.component';
;

import { DataServiceAbs , HeroSearchServiceAbs} from '../../../Models/Interfaces/ServicesAbstractions';
import { DataService } from '../../../Models/Services/data.service';



import { AppRoutingModule }     from './app.routing.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HeroesModule,
    UsersModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
  ],

  providers: [{provide:DataServiceAbs, useClass:DataService}],

  bootstrap: [AppComponent]
})
export class AppModule { }
