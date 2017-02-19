import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users',  loadChildren:'app/Modules/UsersManagementModule/Modules/users.module#UsersModule'},
  { path: 'heroes',     loadChildren:'app/Modules/HeroesManagementModule/Modules/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
