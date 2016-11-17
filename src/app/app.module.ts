import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './AppComponent/app.component';
import { MyComponent } from './Components/my.component';

import { RouterModule }   from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
