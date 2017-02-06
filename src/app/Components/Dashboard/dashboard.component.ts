import {Component, OnInit} from '@angular/core';
import {Hero} from '../../Models/hero'
import {DataService} from '../../Models/Services/data.service'

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    providers:[DataService]
})

export class DashboardComponent implements OnInit {

  favoriteHeroes:Hero[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getHeroes()
      .then(heroes => this.favoriteHeroes = heroes.filter(h=>h.isFavorite == true));
  }
}
