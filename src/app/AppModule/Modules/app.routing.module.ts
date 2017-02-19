import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersShellComponent } from '../../UsersManagementModule/@Shell/users.shell.component';
import { HeroesShellComponent } from '../../HeroesManagementModule/Components/@Shell/heroes.shell.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users',  loadChildren:'app/UsersManagementModule/Modules/users.module#UsersModule'},
  { path: 'heroes',     loadChildren:'app/HeroesManagementModule/Modules/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
