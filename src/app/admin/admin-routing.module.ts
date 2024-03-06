import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buildings', component: BuildingsComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'tenants', component: TenantsComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'rooms-add', component: RoomsAddComponent },
  { path: 'rooms-edit', component: RoomsEditComponent },
  { path: 'tenants-add', component: TenantsAddComponent },
  { path: 'tenants-edit', component: TenantsEditComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'admins-add', component: AdminsAddComponent },
  { path: 'admins-edit', component: AdminsEditComponent },
  { path: 'utilities-record', component: UtilitiesRecordComponent },
  { path: 'transactions-bill', component: TransactionsBillComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
