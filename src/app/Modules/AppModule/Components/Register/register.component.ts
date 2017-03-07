import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertServiceAbs, DataServiceAbs } from '../../../Core/Models/Interfaces/ServicesAbstractions';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private dataService: DataServiceAbs,
    private alertService: AlertServiceAbs) { }

  register():void {
    this.loading = true;
    this.dataService.CreateAndAddUserAsync(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.reportSuccess('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.reportError(error.message, false);
          this.loading = false;
        });
  }
}
