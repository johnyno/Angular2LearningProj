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
import { HeroSearchComponent } from '../Components/HeroSearch/heroSearch.component';

import { HeroesProviderAbs } from '../Models/Interfaces/ProvidersAbstractions';
import { HeroesProviderMock } from '../Models/Services/Providers/Mock/heroes.provider.mock';
import { HeroesProviderHTTP } from '../Models/Services/Providers/Http/heroes.provider.http';

import { DataServiceAbs , HeroSearchServiceAbs} from '../Models/Interfaces/ServicesAbstractions';
import { DataService } from '../Models/Services/data.service';
import { HeroSearchService } from '../Models/Services/heroSearch.service';


import { AppRoutingModule }     from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
],
  providers: [{provide:DataServiceAbs, useClass:DataService},
              {provide:HeroesProviderAbs, useClass:HeroesProviderMock},
              {provide:HeroSearchServiceAbs, useClass:HeroSearchService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
