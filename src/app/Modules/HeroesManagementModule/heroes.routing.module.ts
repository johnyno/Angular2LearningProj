import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesShellComponent }   from './Components/@Shell/heroes.shell.component';
import { DashboardComponent }   from './Components/Dashboard/dashboard.component';
import { HeroDetailsComponent } from './Components/HeroDetails/heroDetails.component';
import { HeroesComponent } from './Components/Heroes/heroes.component';
import { RecentlyChangedHeroes } from './Components/RecentlyChangedHeroes/recentlyChangedHeroes.component';



const routes: Routes = [
  { path: '', component: HeroesShellComponent,

    children: [
      { path: '',  redirectTo: '/dashboard', pathMatch: 'full'},

      { path: 'detail/:id', component: HeroDetailsComponent },
      { path: 'heroes',     component: HeroesComponent },
      { path: 'dashboard',     component: DashboardComponent },
      {
        path: '',
        outlet: 'sidemenu',
        component: RecentlyChangedHeroes
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
