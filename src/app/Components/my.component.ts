import {Component} from '@angular/core';

import {Hero} from "../Models/Hero";

@Component({

    selector: 'my-component',
    templateUrl: 'my.component.html',
    styleUrls: ['my.component.css']
})

export class MyComponent {
  title = "My Hero editor";

  powers=['Relly Smart', 'Super Flexible',
          'Super Hot','Weather Changer'];

  model = new Hero(18, 'Dr Iq', this.powers[0],'Chuck Norris');

  submitted = false;

  active  = true;

  onSubmit(){
    this.submitted = true;
  }

  newHero(){
    this.model = new Hero(42,'','');
    //it doesn't work (workaround)
    this.active = false;
    setTimeout(()=> this.active = true, 0);
  }
}
