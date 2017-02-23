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
    //if(path == '/heroes') {
     // let temp = path + '/(sidemenu:' + path + ')';
      //this.router.navigateByUrl(temp);

      this.router.navigate([path]);
   // }
  }
}
