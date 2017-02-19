import {Hero} from '../../../Models/hero';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { DataServiceAbs } from '../../../Models/Interfaces/ServicesAbstractions';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-details',
    templateUrl: 'heroDetails.component.html',
    styleUrls: ['heroDetails.component.css'],
})

export class HeroDetailsComponent  implements OnInit {

  @Input() hero:Hero;
  public message:string;

  constructor(
    private dataService: DataServiceAbs,
    private route: ActivatedRoute,
    private location: Location
  ) {}

   ngOnInit(): void {
    this.route.params
      .switchMap( (params: Params) =>  this.dataService.GetHeroAsync(+params['id']))
      .subscribe(hero => this.hero = hero);
  }



  async save(): Promise<void> {
    try {
      let newHero: Hero = await this.dataService.UpdateHeroAsync(this.hero);
      this.message = 'Saved ' + newHero.name;
      //this.goBack();
    }
    catch(e){
      console.error('Component Save hero error!', e.message)
    }
  }

  goBack(): void {
    this.location.back();
  }


}
