import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'heroesShell',
  templateUrl: 'heroes.shell.component.html'
})

export class HeroesShellComponent implements OnInit{



  constructor(private router: Router,){
    // console.log("Heroes constructor " + dataService )
  }

   ngOnInit(): void {

  }
}
