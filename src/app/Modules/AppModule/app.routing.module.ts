import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Components/Login/login.component';
import {HomeComponent} from './Components/Home/home.component';
import {AppComponent} from './Components/app.component'
import {AuthGuard} from "../Core/Models/Services/Guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},

    {path: 'login',  component:LoginComponent},
    {path: 'home', component: HomeComponent,canActivate:[AuthGuard]
      // children: [
      //   { path: '',  redirectTo: 'users', pathMatch: 'full'},
      //   { path: 'users',  loadChildren:'../../Modules/UsersManagementModule/users.module#UsersModule'},
      //   { path: 'heroes',     loadChildren:'../../Modules/HeroesManagementModule/heroes.module#HeroesModule' }
      // ]
   // }]
  },
  { path: '**', redirectTo: '' }
];
// ,
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
