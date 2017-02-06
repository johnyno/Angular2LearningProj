import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from '../Components/AppComponent/app.component';
import { HeroDetailsComponent } from '../Components/HeroDetails/heroDetails.component';
import { HeroesComponent } from '../Components/Heroes/heroes.component';
import { DashboardComponent } from '../Components/Dashboard/dashboard.component';

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
    AppRoutingModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
