import {Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'heroesShell',
  templateUrl: 'heroes.shell.component.html'
})

export class HeroesShellComponent implements OnInit{



  constructor(private router: Router,private route: ActivatedRoute){
    // console.log("Heroes constructor " + dataService )
  }

   ngOnInit(): void {

  }

  navigate(path) {
    this.router.navigate([{outlets: {primary: path, sidemenu:path}}],
      {relativeTo: this.route});
  }
}
