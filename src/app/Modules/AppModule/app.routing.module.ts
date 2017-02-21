import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users',  loadChildren:'../../Modules/UsersManagementModule/users.module#UsersModule'},
  { path: 'heroes',     loadChildren:'../../Modules/HeroesManagementModule/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
