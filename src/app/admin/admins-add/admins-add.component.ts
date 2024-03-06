import { Component } from '@angular/core';

@Component({
  selector: 'app-admins-add',
  templateUrl: './admins-add.component.html',
  styleUrls: ['./admins-add.component.scss']
})
export class AdminsAddComponent {
  showPassword = false;

  toggle() {
    this.showPassword = !this.showPassword;
  }
}
