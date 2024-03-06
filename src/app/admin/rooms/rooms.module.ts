import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { HttpClientModule } from "@angular/common/http" 



@NgModule({
  // declarations: [
  //   RoomsComponent
  // ],
  // exports:[
  //   RoomsComponent
  // ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class RoomsModule { }
