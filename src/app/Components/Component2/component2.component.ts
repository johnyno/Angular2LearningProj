import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'component-2',
  templateUrl: 'component2.component.html'
})
export class Component2 {
  title = 'component 2';

  constructor(private  router: Router){}

  onNavigate(){
    this.router.navigate(['/component-1']);
  }
}
