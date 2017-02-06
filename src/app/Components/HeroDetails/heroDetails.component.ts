import {Hero} from '../../Models/hero';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { DataService } from '../../Models/Services/data.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-details',
    templateUrl: 'heroDetails.component.html',
    styleUrls: ['heroDetails.component.css'],
    providers:[DataService]
})

export class HeroDetailsComponent  implements OnInit {

  @Input() hero:Hero;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.dataService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
