import {Component, OnInit} from '@angular/core';
import {Hero} from '../../../../Models/hero'
import { DataServiceAbs } from '../../../../Models/Interfaces/ServicesAbstractions';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  favoriteHeroes: Hero[];

  constructor(private dataService: DataServiceAbs) {

  }

  async ngOnInit(): Promise<void> {
    try {
      let heroes = await this.dataService.GetHeroesAsync();
      this.favoriteHeroes = heroes.filter(h => h.isFavorite == true);
    }
    catch (e) {
      console.error(e.message);
    }
  }


}
