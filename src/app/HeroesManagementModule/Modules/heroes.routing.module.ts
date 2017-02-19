import { NgModule }     from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import { HeroesShellComponent }   from '../Components/@Shell/heroes.shell.component';
import { DashboardComponent }   from '../Components/Dashboard/dashboard.component';
import { HeroDetailsComponent } from '../Components/HeroDetails/heroDetails.component';
import { HeroesComponent } from '../Components/Heroes/heroes.component';



const routes: Routes = [
  { path: '', component: HeroesShellComponent,

    children: [
      { path: '',  component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailsComponent },
      { path: 'heroes',     component: HeroesComponent },
      { path: 'dashboard',     component: DashboardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
