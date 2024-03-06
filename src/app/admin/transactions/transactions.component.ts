import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  getLastTransactions(amount: number) {
    let transactions = [];
    for (let i = 0; i < amount; i++) {
      transactions.push({
        id: i + 1,
        room: 'A1',
        building: 'Building A',
        utilities_price: {
          water: 300,
          electricity: 800
        },
        rental_price: 7300,
        create_by: 'Admin 1',
        create_on: new Date(2023, i + 3, 6)
      })
    }
    return transactions;
  }
}
