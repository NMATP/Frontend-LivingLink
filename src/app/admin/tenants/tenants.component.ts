import { Component } from '@angular/core';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent {
  getTenantList(amount: number) {
    let tenants = [];
    for (let i = 0; i < amount; i++) {
      tenants.push({
        id: i+1,
        name: 'Tenant Kub',
        email: 'user@example.com',
        phone: '098-876-5432',
        location: 'BKK',
        citizen: Math.floor(Math.random() * (9000000000000) - 100000000000),
        room: `A${i+1}`,
        building: 'Building A',
        payment_date: Math.floor(i*1.5) + 1,
        create_by: 'Admin 1',
        create_on: new Date(2023, 3, 6)
      });
    }
    return tenants;
  }
}
