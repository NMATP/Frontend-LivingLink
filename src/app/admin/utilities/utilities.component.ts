import { Component } from '@angular/core';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent {
  getUtilitiesList(amount: number) {
    let utilities = [];
    for (let i = 0; i < amount; i++) {
      utilities.push({
        id: i+1,
        room: 'A1',
        building: 'Building A',
        utilities_unit: {
          water: 100,
          electricity: 100
        },
        payment_date: new Date(2023, i + 3, 6),
        create_by: 'Admin 1',
        create_on: new Date(2023, i + 3, 6)
      });
    }
    return utilities;
  }

}
