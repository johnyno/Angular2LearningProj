import { NgModule }            from '@angular/core';
import { RouterModule,Routes }        from '@angular/router';

import { UsersComponent }    from '../Components/Users/users.component';
import {UsersShellComponent} from "../@Shell/users.shell.component";

const routes: Routes = [
  { path: '',  component: UsersShellComponent,
    children: [
      { path: '',  component: UsersComponent },
   //   { path: 'detail/:id', component: HeroDetailsComponent },
   //   { path: 'heroes',     component: HeroesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
