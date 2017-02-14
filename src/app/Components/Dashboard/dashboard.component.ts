import {Component, OnInit} from '@angular/core';
import {Hero} from '../../Models/hero'
import { DataServiceAbs } from '../../Models/Interfaces/ServicesAbstractions';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  favoriteHeroes: Hero[];

  constructor(private dataService: DataServiceAbs) {
    //console.log("Dashboard constructor " + dataService )
  }

  async ngOnInit(): Promise<void> {
    //console.log("Dashboard onInit ");
    try {
      let heroes = await this.dataService.GetHeroesAsync();
      this.favoriteHeroes = heroes.filter(h => h.isFavorite == true);
    }
    catch (e) {
      console.error(e.message);
    }
  }


}
