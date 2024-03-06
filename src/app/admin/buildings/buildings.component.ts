import { Component } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent {
  getBuildings() {
    let buildings = [];
    for (let i = 1; i <= 7; i++) {
      buildings.push({
        name: `Building ${i}`,
        tenants_amount: Math.floor(Math.random() * 40),
        tenants_max: 40,
        address: 'Samui, Suratthani'
      })
    }
    return buildings;
  }
}
