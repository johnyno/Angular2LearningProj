import {Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'usersShell',
  templateUrl: 'users.shell.component.html'
})

export class UsersShellComponent implements OnInit{



  constructor(private router: Router,){
    // console.log("Heroes constructor " + dataService )
  }

  ngOnInit(): void {

  }
}
