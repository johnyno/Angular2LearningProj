import {Hero} from '../../Models/hero';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { DataServiceAbs } from '../../Models/Interfaces/ServicesAbstractions';
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
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.dataService.GetHeroAsync(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.dataService.UpdateHeroAsync(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
