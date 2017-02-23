import {Hero} from '../../../Core/Models/hero';
import {AlertServiceAbs} from '../../../Core/Models/Interfaces/ServicesAbstractions';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { DataServiceAbs } from '../../../Core/Models/Interfaces/ServicesAbstractions';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-details',
    templateUrl: 'heroDetails.component.html',
    styleUrls: ['heroDetails.component.css'],
})

export class HeroDetailsComponent  implements OnInit {

  @Input() hero:Hero;

  constructor(
    private dataService: DataServiceAbs,
    private route: ActivatedRoute,
    private location: Location,
    private alertService:AlertServiceAbs
  ) {}

   ngOnInit(): void {
    this.route.params
      .switchMap( (params: Params) =>  this.dataService.GetHeroAsync(+params['id']))
      .subscribe(hero => this.hero = hero);
  }



  async save(): Promise<void> {
    try {
      let newHero: Hero = await this.dataService.UpdateHeroAsync(this.hero);
      this.alertService.reportSuccess('Saved ' + newHero.name, false);
      this.goBack();
    }
    catch(e){
      console.error('Component Save hero error!', e.message)
      this.alertService.reportError(e.message,false);
    }
  }

  goBack(): void {
    this.location.back();
  }


}
