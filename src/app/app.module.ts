import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './AppComponent/app.component';
import { HeroDetailsComponent } from './Components/HeroDetails/heroDetails.component';
import { HeroesComponent } from './Components/Heroes/heroes.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';

import { RouterModule }   from '@angular/router'


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
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
