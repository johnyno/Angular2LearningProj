import {Component, OnInit} from '@angular/core';
import {DataServiceAbs} from "../../../Core/Models/Interfaces/ServicesAbstractions";
import {Hero} from "../../../Core/Models/hero";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'recently-changed-heroes',
    templateUrl: 'recentlyChangedHeroes.html'
})

export class RecentlyChangedHeroes implements OnInit{

  public heroes:Hero[];

  async ngOnInit(): Promise<void> {

    try {
      this.heroes = await this.dataService.GetLastSavedHeroes();
    }
    catch(e){
      console.error(e.message);
    }
  }



  constructor(private dataService:DataServiceAbs,route: ActivatedRoute){

    route.params.subscribe(params => console.log("side menu id parameter",+params['id']));
  }
}
