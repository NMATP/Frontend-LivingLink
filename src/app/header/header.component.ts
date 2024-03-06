import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentUser = {
    role: 'admin',
    name: 'John Doe'
  }

  get isLoggedIn() {
    return true//typeof (this.currentUser) !== 'undefined';
  }
}

