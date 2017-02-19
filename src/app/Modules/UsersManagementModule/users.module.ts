import { NgModule }           from '@angular/core';

import { UsersShellComponent }   from './@Shell/users.shell.component';
import { UsersComponent }   from './Components/Users/users.component';


import { UsersRoutingModule }   from './users.routing.module';

@NgModule({
  imports:      [
    UsersRoutingModule ]
  ,
  declarations: [ UsersShellComponent, UsersComponent ],
//  providers:    [  ]
})
export class UsersModule { }
