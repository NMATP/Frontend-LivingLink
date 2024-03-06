import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgChartsModule } from 'ng2-charts';

import { AdminRoutingModule } from './admin-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BuildingsComponent} from "./buildings/buildings.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {TenantsComponent} from "./tenants/tenants.component";
import {UtilitiesComponent} from "./utilities/utilities.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsEditComponent } from './rooms-edit/rooms-edit.component';
import { TenantsAddComponent } from './tenants-add/tenants-add.component';
import { TenantsEditComponent } from './tenants-edit/tenants-edit.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminsAddComponent } from './admins-add/admins-add.component';
import { AdminsEditComponent } from './admins-edit/admins-edit.component';
import { UtilitiesRecordComponent } from './utilities-record/utilities-record.component';
import { TransactionsBillComponent } from './transactions-bill/transactions-bill.component';

@NgModule({
  declarations:[
    DashboardComponent,
    BuildingsComponent,
    RoomsComponent,
    TenantsComponent,
    UtilitiesComponent,
    TransactionsComponent,
    RoomsAddComponent,
    RoomsEditComponent,
    TenantsAddComponent,
    TenantsEditComponent,
    AdminsComponent,
    AdminsAddComponent,
    AdminsEditComponent,
    UtilitiesRecordComponent,
    TransactionsBillComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // NgChartsModule,
  ]
})
export class AdminModule { }
