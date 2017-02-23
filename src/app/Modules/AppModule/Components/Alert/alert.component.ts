import { Component, OnInit } from '@angular/core';

import { AlertServiceAbs } from '../../../Core/Models/Interfaces/ServicesAbstractions';
import { Alert } from '../../../Core/Models/Inra/alert';
import {AlertType} from "../../../Core/Models/Inra/enums";

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit{

  public alert: Alert;
  //for the template triggers
  public alertType = AlertType;

  constructor(private alertService: AlertServiceAbs) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe(
      alert => { this.alert = alert; });
  }
}
