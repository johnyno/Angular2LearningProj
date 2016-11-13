import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './AppComponent/app.component';
import {Component1} from './Components/Component1/component1.component';
import {Component2} from './Components/Component2/component2.component';
import { RouterModule }   from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2
  ],
  imports: [
    BrowserModule,

  RouterModule.forRoot([
    {  path: '', component: Component1},
  { path: 'component-1', component: Component1 },
  { path: 'component-2', component: Component2 }
])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
