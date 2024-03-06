import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions-bill',
  templateUrl: './transactions-bill.component.html',
  styleUrls: ['./transactions-bill.component.scss']
})
export class TransactionsBillComponent {
  building = "Building A"
  room = "A1"
  tenant = "Mr.Tenant Kub"
  current_date = "2023-12-30"

  rental_price = 7300 
  last_recode = "2023-11-30" 
  water_units_before = 100
  water_units_current = 200
  water_price = 300
  
  electricity_units_before = 100
  electricity_units_after = 200
  
  electricity_price = 300
  last_payment = "2023-12-11" 
  time = "19:19"
  total_price = 8400





}
