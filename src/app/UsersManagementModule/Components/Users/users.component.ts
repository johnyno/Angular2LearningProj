import { Component, OnInit }      from '@angular/core';

//import { Contact, ContactService } from './contact.service';
import { DataServiceAbs }    from '../../../Models/Interfaces/ServicesAbstractions';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  //styleUrls: [ './contact.component.css' ]
})
export class UsersComponent implements OnInit {
  //contact:  Contact;
  //contacts: Contact[];

 // msg = 'Loading contacts ...';
 // userName = '';

  constructor(private dataService: DataServiceAbs) {

  }

  ngOnInit() {
  }


}
