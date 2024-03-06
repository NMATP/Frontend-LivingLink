import { Component } from '@angular/core';

@Component({
  selector: 'app-admins-edit',
  templateUrl: './admins-edit.component.html',
  styleUrls: ['./admins-edit.component.scss']
})
export class AdminsEditComponent {
  showPassword = false;

  toggle() {
    this.showPassword = !this.showPassword;
  }
}
