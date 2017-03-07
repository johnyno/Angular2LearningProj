import { NgModule }           from '@angular/core';


import { HeroesProviderAbs } from '../Core/Models/Interfaces/ProvidersAbstractions';
import { HeroesProviderMock } from '../Core/Models/Services/Providers/Mock/heroes.provider.mock';
import { HeroesProviderHTTP } from '../Core/Models/Services/Providers/Http/heroes.provider.http';

import { HeroesShellComponent } from './Components/@Shell/heroes.shell.component';
import { HeroDetailsComponent } from './Components/HeroDetails/heroDetails.component';
import { HeroesComponent } from './Components/Heroes/heroes.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { HeroSearchComponent } from './Components/HeroSearch/heroSearch.component';
import { RecentlyChangedHeroes } from './Components/RecentlyChangedHeroes/recentlyChangedHeroes.component';

import { HeroesRoutingModule } from './heroes.routing.module';

import { HeroSearchService } from '../Core/Models/Services/heroSearch.service';
import { SearchServiceAbs} from '../Core/Models/Interfaces/ServicesAbstractions';

import {SharedModule} from "../Shared/shared.module";

@NgModule({
  imports:      [
    HeroesRoutingModule,
    SharedModule
  ],

  declarations: [
    HeroesShellComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    HeroSearchComponent,
    RecentlyChangedHeroes,
  ],
  providers: [
    {provide:HeroesProviderAbs, useClass:HeroesProviderMock},
    {provide:SearchServiceAbs, useClass:HeroSearchService}],

})
export class HeroesModule { }
