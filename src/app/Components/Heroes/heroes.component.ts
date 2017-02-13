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

        this.selectFirstHero();
      });
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dataService.CreateHeroAsync(name)
      .then(hero => {
        //this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.dataService.DeleteHeroAsync(hero)
      .then(() => {
        if (this.selectedHero === hero)
          this.selectFirstHero();
      });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


  private selectFirstHero():void{
    if(this.heroes.length > 0)
      this.onSelect(this.heroes[0]);
  }
}
