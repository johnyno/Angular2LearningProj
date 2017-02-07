import {Component} from '@angular/core';
import {DataService} from '../../Models/Services/data.service'

@Component({
    selector:"app-root",
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers:[DataService]
})

export class AppComponent {


  public title:string = 'Tour of heroes 2';

}
