import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../Models/Services/Providers/Http/heroes.provider.http';


import { AppComponent } from '../Components/AppComponent/app.component';
import { HeroDetailsComponent } from '../Components/HeroDetails/heroDetails.component';
import { HeroesComponent } from '../Components/Heroes/heroes.component';
import { DashboardComponent } from '../Components/Dashboard/dashboard.component';

import { HeroesProviderAbs } from '../Models/Interfaces/ProvidersAbstractions';
import { HeroesProviderMock } from '../Models/Services/Providers/Mock/heroes.provider.mock';
import { HeroesProviderHTTP } from '../Models/Services/Providers/Http/heroes.provider.http';

import { DataServiceAbs } from '../Models/Interfaces/ServicesAbstractions';
import { DataService } from '../Models/Services/data.service';


import { AppRoutingModule }     from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
],
  providers: [{provide:DataServiceAbs, useClass:DataService},
              {provide:HeroesProviderAbs, useClass:HeroesProviderMock}],
  bootstrap: [AppComponent]
})
export class AppModule { }
