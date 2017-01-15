import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
