import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './AppComponent/app.component';
import {NavigationBarComponent} from "./NavigationBarComponent/navigation-bar.component";
import {HeaderComponent} from "./HeaderComponent/header.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
