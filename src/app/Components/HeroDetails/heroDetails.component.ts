import {Component,Input} from '@angular/core';
import {Hero} from '../../Models/hero';


@Component({
    selector: 'hero-details',
    templateUrl: 'heroDetails.component.html',

})

export class HeroDetails {
  @Input() hero:Hero;
}
