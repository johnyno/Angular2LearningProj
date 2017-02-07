import {Component, OnInit} from '@angular/core';
import {Hero} from '../../Models/hero'
import {DataService} from '../../Models/Services/data.service'

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  favoriteHeroes:Hero[];

  constructor(private dataService: DataService) {
    console.log("Dashboard constructor " + dataService )
  }

  ngOnInit(): void {
    console.log("Dashboard onInit ");

    this.dataService.getHeroes()
      .then(
        heroes => this.favoriteHeroes = heroes.filter(h=>h.isFavorite == true));
  }
}
