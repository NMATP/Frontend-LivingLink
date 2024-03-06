import { Component } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent {
  getAdmins(amount: number) {
    let admin = [];
    for (let i = 0; i < amount; i++) {
      admin.push({
        id: i + 1,
        admin_name: 'Admin Kub',
        role: 'Admin',
        phone: '098-765-4321',
        email: 'admin@mail.com',
        create_by: 'Admin 1',
        create_on: new Date(2023, i + 3, 6)
      })
    }
    return admin;
}
}
