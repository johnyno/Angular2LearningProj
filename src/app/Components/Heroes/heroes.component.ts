import {Component, OnInit} from '@angular/core';
import {Hero} from "../../Models/hero";
import {Responce} from "../../ErrorHandling/responce";
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
   // console.log("Heroes constructor " + dataService )
  }

  async ngOnInit(): Promise<void> {
    try {
      this.heroes = await this.dataService.GetHeroesAsync();
      this.selectFirstHero();
    }
    catch(e){
      console.error(e.message);
    }

  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  async add(name: string): Promise<void> {
    if (!name.trim()) {
      console.error('The name cant be empty');
      return;
    }
    try {
      await this.dataService.CreateAndAddHeroAsync(name);
    }
    catch(e){
      console.error(e.message);
    }



  }

  async delete(hero: Hero): Promise<void> {
    try{
      await this.dataService.DeleteHeroAsync(hero);

      if (this.selectedHero === hero)
        this.selectFirstHero();
    }
    catch(e) {
      console.error('Component Delete error!', e.Message)
    }
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


  private selectFirstHero():void{
    if(this.heroes.length > 0)
      this.onSelect(this.heroes[0]);
  }
}
