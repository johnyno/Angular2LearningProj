import {Component, OnInit} from '@angular/core';
import {Hero} from "../../Models/hero";
import { DataServiceAbs } from '../../Models/Interfaces/ServicesAbstractions';

import { Router } from '@angular/router';

@Component({
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
})

export class HeroesComponent implements OnInit{
  heroes:Hero[];

  selectedHero: Hero;



  constructor(private dataService:DataServiceAbs,
              private router: Router,){
    console.log("Heroes constructor " + dataService )
  }

  ngOnInit(): void {

    console.log("Heroes onInit ");

    this.dataService.GetHeroesAsync()
      .then(heroes => {
        this.heroes = heroes

        if(this.heroes.length > 0)
          this.onSelect(this.heroes[0]);
      });
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

 // setFavorite(obj:Hero):void {
  //  obj.isFavorite = !obj.isFavorite;
 // }
}
