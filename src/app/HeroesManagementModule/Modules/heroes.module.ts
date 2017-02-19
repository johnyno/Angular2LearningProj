import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';


import { HeroesProviderAbs } from '../../Models/Interfaces/ProvidersAbstractions';
import { HeroesProviderMock } from '../../Models/Services/Providers/Mock/heroes.provider.mock';
import { HeroesProviderHTTP } from '../../Models/Services/Providers/Http/heroes.provider.http';

import { HeroesShellComponent } from '../Components/@Shell/heroes.shell.component';
import { HeroDetailsComponent } from '../Components/HeroDetails/heroDetails.component';
import { HeroesComponent } from '../Components/Heroes/heroes.component';
import { DashboardComponent } from '../Components/Dashboard/dashboard.component';
import { HeroSearchComponent } from '../Components/HeroSearch/heroSearch.component';

import { HeroesRoutingModule } from '../Modules/heroes.routing.module';

import { HeroSearchService } from '../../Models/Services/heroSearch.service';
import { DataServiceAbs , HeroSearchServiceAbs} from '../../Models/Interfaces/ServicesAbstractions';
import { AwesomePipe }     from '../Pipes/awesome.pipe';
import formatErrorMsg = jasmine.formatErrorMsg;

@NgModule({
  imports:      [
    HeroesRoutingModule,
    FormsModule,
    CommonModule
  ],

  declarations: [
    HeroesShellComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    HeroSearchComponent,
    AwesomePipe
  ],
  providers: [
    {provide:HeroesProviderAbs, useClass:HeroesProviderMock},
    {provide:HeroSearchServiceAbs, useClass:HeroSearchService}],

})
export class HeroesModule { }
