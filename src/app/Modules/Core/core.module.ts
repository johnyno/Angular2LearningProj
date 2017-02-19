import { DataServiceAbs } from '../Core/Models/Interfaces/ServicesAbstractions';
import { DataService } from '../Core/Models/Services/data.service';


import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule }    from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
  ],
  exports:      [ BrowserModule,RouterModule,HttpModule ],

  providers: [{provide:DataServiceAbs, useClass:DataService}],
})


export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }


}
