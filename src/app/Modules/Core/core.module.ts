import { DataServiceAbs } from '../Core/Models/Interfaces/ServicesAbstractions';
import { DataService } from '../Core/Models/Services/data.service';
import { AlertServiceAbs } from '../Core/Models/Interfaces/ServicesAbstractions';
import { AlertService } from '../Core/Models/Services/alert.service';
import { AlertComponent } from '../Core/Components/Alert/alert.component';


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

  providers: [{provide:DataServiceAbs, useClass:DataService},
              {provide:AlertServiceAbs, useClass:AlertService}],
})


export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }


}
