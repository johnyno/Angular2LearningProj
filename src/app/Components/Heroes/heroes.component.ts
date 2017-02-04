import {Component} from '@angular/core';
import {DataService} from "../../Models/Services/data.service";
import {Hero} from "../../Models/hero";
import { OnInit } from '@angular/core';


@Component({
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
    providers:[DataService]
})

export class HeroesComponent implements OnInit{
  heroes:Hero[];

  selectedHero: Hero;



  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getHeroes()
      .then(heroes => {
        this.heroes = heroes

        if(this.heroes.length > 0)
          this.onSelect(this.heroes[0]);
      });


  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
