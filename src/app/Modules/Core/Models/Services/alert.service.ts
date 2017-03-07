import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {AlertServiceAbs} from "../Interfaces/ServicesAbstractions"
import {Alert} from "../Inra/alert"
import {AlertType} from "../Inra/enums"
import {Router, NavigationStart} from "@angular/router";

@Injectable()
export class AlertService extends AlertServiceAbs{

  constructor(private router: Router) {
    super();

  }



  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next();
        }
      }
    });
  }


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
