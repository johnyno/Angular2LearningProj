import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {AlertServiceAbs} from "../Interfaces/ServicesAbstractions"
import {Alert} from "../Inra/alert"
import {AlertType} from "../Inra/enums"

@Injectable()
export class AlertService extends AlertServiceAbs{


  private subject:Subject<Alert> = new Subject<Alert>();
  private keepAfterNavigationChange:boolean = false;

  getAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  reportError(message: string, keepAfterNavigationChange: boolean = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next(new Alert(message,AlertType.Error));
  }

  reportSuccess(message: string, keepAfterNavigationChange: boolean = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next(new Alert(message,AlertType.Success));
  }

}
