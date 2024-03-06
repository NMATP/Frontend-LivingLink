import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// import { RoomsService } from './rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  

  //rooms$: Observable<any> | undefined;// conect backend?
  // roomsData: string | undefined;
  // constructor(private roomsService: RoomsService) {
  //   this.roomsData = '';
  // }

  getRooms(amount: number) {
    let rooms = [];
    for (let i = 0; i < amount; i++) {
      rooms.push({
        id: i + 1,
        building: 'Building A',
        room_number: 'A1',
        type: 'Single',
        rental_price: 7300,
        status: 'Full',
        create_by: 'Admin 1',
        create_on: new Date(2023, i + 3, 6)
      })
    }
    return rooms;
  }

  // getArooms(){
  //   this.roomsService.getAllRooms().subscribe((data) => {
  //     this.roomsData= data as string;
  //   })
  // }

}
