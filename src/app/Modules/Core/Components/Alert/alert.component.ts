import { Component, OnInit } from '@angular/core';

import { AlertServiceAbs } from '../../Models/Interfaces/ServicesAbstractions';
import { Alert } from '../../Models/Inra/alert';
import {AlertType} from "../../Models/Inra/enums";

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit{

  public alert: Alert;
  public alertType = AlertType;

  constructor(private alertService: AlertServiceAbs) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe(
      alert => { this.alert = alert; });
  }
}
